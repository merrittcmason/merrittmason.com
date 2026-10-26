import { site, categories, projects, sections } from "@/data/site";
import { Strip, Corners } from "./Sheet";
import { SECTION_TONE, tab, toneVar, type ToneName } from "@/lib/tones";
import Linkify from "./Linkify";

const layout: Record<string, string> = {
  products: "md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-4 z-10",
  ai: "md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-3 z-20 md:-mt-3",
  web: "md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-4 z-10",
  tools: "md:col-start-2 md:col-end-6 md:row-start-2 md:row-end-4 z-30",
  software: "md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-4 z-40 md:mt-4",
};

const folderTab: Record<string, ToneName> = {
  duke: "duke",
  carolina: "carolina",
  powder: "powder",
  ocean: "cyan",
  midnight: "midnight",
  blue: "royal",
};

const folderClass: Record<string, string> = {
  ocean: "tone-ocean",
  midnight: "tone-steel-grad",
};

export default function Cover() {
  const first = site.name.split(" ")[0];
  return (
    <section id="cover" className="sheet scroll-mt-24" style={{ ["--accent" as string]: toneVar(SECTION_TONE.cover) }}>
      <Strip name="Cover page" index={1} total={sections.length} filled />
      <Corners />
      <div className="relative px-5 pt-8 sm:px-10 sm:pt-10">
        {/* decorative rings */}
        <div
          aria-hidden
          className="slow-spin pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full opacity-[0.07]"
          style={{ background: "repeating-radial-gradient(circle, var(--blue) 0 2px, transparent 2px 18px)" }}
        />
        <div className="relative">
          <span className="ghost absolute -top-6 left-1 text-4xl tracking-[0.25em] sm:text-6xl">
            #2026
          </span>
          <h1 className="outline text-[clamp(3rem,11vw,10rem)]">{first}</h1>
        </div>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-2 lg:items-end">
          <div className="relative">
            <p className="text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
              <span className="word-shift text-muted">PRODUCT</span>
              <br />
              <span className="word-shift text-blue">ENGINEER</span>
            </p>
            <svg
              aria-hidden
              className="absolute -bottom-6 left-[42%] h-20 w-40 text-aqua"
              viewBox="0 0 160 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <path d="M8 60c20-30 40-40 44-28 4 12-22 42-10 44s34-30 44-26-6 24 6 26 36-24 60-30" />
            </svg>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <a href="#about" className="tone-accent inline-flex items-center gap-3 rounded-xl px-4 py-2.5 text-base font-semibold shadow-lg transition-transform hover:-translate-y-0.5">
              {site.name} · {site.role}
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/20 text-sm">↓</span>
            </a>
            <div className="label mt-3 flex flex-wrap gap-4 text-blue">
              {categories.slice(0, 3).map((c) => (
                <a key={c.key} href="#work" className="nudge normal-case tracking-normal">
                  ({c.label})
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted"><Linkify text={site.bio} /></p>
          </div>
        </div>
      </div>

      {/* folder stack */}
      <div className="relative mt-14 px-0 md:px-0">
        <div className="grid gap-x-0 gap-y-10 px-5 md:grid-cols-12 md:grid-rows-[150px_120px_130px] md:gap-y-0 md:px-0">
          {categories.map((c, i) => {
            const count = projects.filter((p) => p.category === c.key).length;
            return (
              <a
                key={c.key}
                href="#work"
                className={`folder-grow relative flex flex-col rounded-t-[22px] p-5 pt-6 shadow-xl md:rounded-t-[26px] ${folderClass[c.tone] ?? ""} ${layout[c.key]} ${c.tone === "ocean" || c.tone === "midnight" ? "folder-lift" : ""}`}
                style={folderClass[c.tone] ? undefined : { background: toneVar(c.tone as ToneName), color: c.tone === "powder" || c.tone === "carolina" ? "#06143a" : "#fff" }}
              >
                <span className={`tab absolute -top-7 ${c.key === "web" ? "left-[38%]" : "left-6"}`} style={tab(folderTab[c.tone])}>
                  {c.label} <span className="count">{String(count).padStart(2, "0")}</span> →
                </span>
                <div className="flex items-start justify-between gap-4">
                  <span className="title-slide text-3xl font-bold leading-none sm:text-4xl">{c.title}</span>
                  <span className="text-3xl font-light opacity-70">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="label mt-3 opacity-80">
                  {c.label} · {count} {count === 1 ? "work" : "works"}
                </span>
                {c.key === "web" && (
                  <span className="pointer-events-none absolute bottom-5 right-6 hidden text-5xl font-light opacity-60 md:block">
                    {site.year}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
