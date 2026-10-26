import { cacheLife } from "next/cache";

export type Day = { date: string; level: number; count: number };
export type Contributions = { days: Day[]; total: number; weeks: Day[][] };

const USER = "merrittcmason";

/** Parses GitHub's public contributions calendar HTML. No token required. */
export async function getContributions(): Promise<Contributions | null> {
  "use cache";
  cacheLife("days");
  try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`, {
      headers: { "user-agent": "merrittmason.com" },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const counts = new Map<string, number>();
    for (const m of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
      const n = /^(\d[\d,]*) contribution/.exec(m[2].trim());
      counts.set(m[1], n ? Number(n[1].replace(/,/g, "")) : 0);
    }

    const cells: { ix: number; week: number; day: Day }[] = [];
    for (const m of html.matchAll(/<td[^>]*class="ContributionCalendar-day"[^>]*>/g)) {
      const tag = m[0];
      const attr = (k: string) => new RegExp(`${k}="([^"]*)"`).exec(tag)?.[1];
      const date = attr("data-date");
      const id = attr("id") ?? "";
      if (!date) continue;
      // id is contribution-day-component-<weekday>-<week>
      const parts = id.split("-");
      const weekday = Number(parts[3] ?? 0);
      const week = Number(parts[4] ?? 0);
      cells.push({ ix: weekday, week, day: { date, level: Number(attr("data-level") ?? 0), count: counts.get(id) ?? 0 } });
    }
    if (!cells.length) return null;

    const weekCount = Math.max(...cells.map((c) => c.week)) + 1;
    const weeks: Day[][] = Array.from({ length: weekCount }, () => []);
    for (const c of cells) weeks[c.week][c.ix] = c.day;
    const days = cells.map((c) => c.day).sort((a, b) => a.date.localeCompare(b.date));
    const total = days.reduce((s, d) => s + d.count, 0);
    return { days, total, weeks };
  } catch {
    return null;
  }
}
