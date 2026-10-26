import { site, aboutTags, experience, sections } from "@/data/site";
import Sheet from "./Sheet";
import Image from "next/image";
import TiltCard from "./TiltCard";
import { fill, tab, toneVar, type ToneName } from "@/lib/tones";
import { Suspense } from "react";
import { ContributionGraph, ContributionGraphSkeleton } from "./ContributionGraph";

const socials: { k: string; label: string; value: string; href: string; tone: ToneName }[] = [
  { k: "G", label: "GitHub", value: "github.com/merrittcmason", href: site.github, tone: "duke" },
  { k: "L", label: "LinkedIn", value: "linkedin.com/in/merrittcmason", href: site.linkedin, tone: "electric" },
  { k: "@", label: "Email", value: site.email, href: `mailto:${site.email}`, tone: "teal" },
];
const tagTones: ToneName[] = ["carolina", "electric", "aqua"];

export default function About() {
  const [first, last] = site.name.split(" ");
  return (
    <Sheet id="about" index={3} total={sections.length} name="About me" title="About me" count={`#${first}`} aside="(Profile)">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="relative pt-7">
          <span className="tab absolute left-7 top-0" style={tab("electric")}>
            {site.initials} · {first}
          </span>
          <TiltCard className="rounded-[26px] p-3 shadow-2xl" style={fill("electric")}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#06143a]/40">
              <Image src="/profile.jpg" alt={`${site.name}`} fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" priority />
            </div>
            <div className="glass mt-3 flex items-center justify-between rounded-2xl px-4 py-3 text-white">
              <span className="font-display text-lg">{site.initials}</span>
              <span className="font-display text-2xl tracking-widest">2026</span>
            </div>
          </TiltCard>
        </div>

        <div>
          <h3 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-tight">
            <span className="text-aqua">✦ </span>
            <span className="word-shift" style={{ color: "var(--accent)" }}>Hi, I am {first}!</span>{" "}
            <span className="text-2xl font-medium text-muted">{last}</span>
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {site.bio}
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {aboutTags.map((t, i) => (
              <div key={t.label}>
                <span className="pill inline-block rounded-md px-3 py-1 text-sm font-semibold" style={fill(tagTones[i])}>
                  {t.label}
                </span>
                <ul className="mt-4 space-y-2 text-sm text-ink-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: toneVar(tagTones[i]) }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <span className="pill tone-accent mt-10 inline-block rounded-md px-3 py-1 text-sm font-semibold">Work experience</span>
          <ol className="mt-6 grid gap-8 sm:grid-cols-3">
            {experience.map((e, i) => {
              const current = i >= 1;
              return (
                <li key={e.role} className="tl relative">
                  <span className={`block whitespace-nowrap text-xl font-bold tracking-tight lg:text-2xl ${current ? "" : "ghost-sans"}`} style={current ? { color: "var(--accent)" } : undefined}>{e.dates}</span>
                  <span className="mt-3 block h-px w-full bg-line" />
                  <span
                    className={`dot -mt-[7px] block h-3.5 w-3.5 rounded-full border-2 ${
                      current ? "border-accent bg-sheet shadow-[inset_0_0_0_3px_var(--accent)]" : "border-muted bg-sheet"
                    }`}
                  />
                  <span className="mt-4 block font-semibold">{e.role}</span>
                  <span className="block text-sm text-muted">{e.org}</span>
                </li>
              );
            })}
          </ol>

          <div className="mt-12">
            <Suspense fallback={<ContributionGraphSkeleton />}>
              <ContributionGraph />
            </Suspense>
          </div>

          <hr className="my-8 border-line" />
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="group nudge items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-transform group-hover:scale-110" style={fill(s.tone)}>{s.k}</span>
                  {s.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sheet>
  );
}
