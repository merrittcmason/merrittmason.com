import { getContributions } from "@/lib/github";
import { site } from "@/data/site";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export async function ContributionGraph() {
  const data = await getContributions();
  if (!data) return null;

  // Month labels: first week whose first day starts a new month.
  const labels: { week: number; name: string }[] = [];
  let last = -1;
  data.weeks.forEach((w, i) => {
    const d = w.find(Boolean);
    if (!d) return;
    const m = new Date(d.date + "T00:00:00").getMonth();
    if (m !== last) {
      labels.push({ week: i, name: months[m] });
      last = m;
    }
  });

  const longest = (() => {
    let best = 0;
    let run = 0;
    for (const d of data.days) {
      run = d.count > 0 ? run + 1 : 0;
      best = Math.max(best, run);
    }
    return best;
  })();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <span className="pill tone-accent inline-block rounded-md px-3 py-1 text-sm font-semibold">GitHub activity</span>
        <div className="label flex gap-6 text-muted">
          <span>
            <span className="text-ink">{data.total.toLocaleString()}</span> contributions · last year
          </span>
          <span>
            <span className="text-ink">{longest}</span> day streak
          </span>
        </div>
      </div>

      <div className="tone-sheet2 mt-5 overflow-x-auto rounded-2xl border border-line p-4 sm:p-5">
        <div className="min-w-[680px]">
          <div className="relative mb-1 h-4 text-[10px] text-muted">
            {labels.map((l) => (
              <span key={l.week + l.name} className="absolute" style={{ left: `calc(${l.week} * (100% / ${data.weeks.length}))` }}>
                {l.name}
              </span>
            ))}
          </div>
          <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: "repeat(7, 1fr)", gridAutoColumns: "1fr" }}>
            {data.weeks.map((w, wi) =>
              Array.from({ length: 7 }, (_, di) => {
                const d = w[di];
                if (!d) return <span key={`${wi}-${di}`} className="aspect-square rounded-[3px] opacity-0" />;
                return (
                  <span
                    key={d.date}
                    title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                    className="cell aspect-square rounded-[3px] transition-transform duration-200 hover:scale-125"
                    data-level={d.level}
                   
                  />
                );
              }),
            )}
          </div>
          <div className="label mt-3 flex items-center justify-end gap-2 text-[10px] text-muted">
            Less
            {[0, 1, 2, 3, 4].map((l) => (
              <span key={l} className="cell h-3 w-3 rounded-[3px]" data-level={l} />
            ))}
            More
          </div>
        </div>
      </div>
      <a href={site.github} target="_blank" rel="noreferrer" className="label nudge mt-3 text-accent">
        github.com/merrittcmason ↗
      </a>
    </div>
  );
}

export function ContributionGraphSkeleton() {
  return (
    <div>
      <span className="pill tone-accent inline-block rounded-md px-3 py-1 text-sm font-semibold">GitHub activity</span>
      <div className="tone-sheet2 mt-5 h-40 animate-pulse rounded-2xl" />
    </div>
  );
}
