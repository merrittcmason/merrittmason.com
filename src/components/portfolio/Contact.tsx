"use client";

import { useState } from "react";
import { sections, site } from "@/data/site";
import Sheet from "./Sheet";
import { cycle, fill, tab, toneVar } from "@/lib/tones";
import Linkify from "./Linkify";

const tiles = [
  { label: "GitHub", value: "github.com/merrittcmason", href: site.github },
  { label: "LinkedIn", value: "linkedin.com/in/merrittcmason", href: site.linkedin },
  { label: "Based in", value: site.location, href: "https://maps.google.com/?q=Charlotte,NC" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  return (
    <Sheet id="contact" index={7} total={sections.length} name="Contact" title="Contact" count="(:)" aside="(Say hi)">
      <div className="relative pt-7">
        <span className="tab absolute right-[22%] top-0" style={tab("royal")}>
          Say hello →
        </span>
        <div className="rounded-[26px] px-6 pb-24 pt-8 sm:px-12 sm:pb-32 sm:pt-10" style={fill("royal")}>
          <p className="drift font-display text-[clamp(2.4rem,8vw,6.5rem)] font-bold leading-none tracking-wide">LET&apos;S TALK.</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
            <Linkify text="Product engineer at Coretek 360, building AVERASE on the side. Open to interesting problems, collaborations, and coffee." />
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-20 pt-7">
        <span className="tab absolute left-[46%] top-0" style={tab("aqua")}>
          Email →
        </span>
        <div className="folder-stack flex flex-wrap items-center justify-between gap-6 rounded-[26px] px-8 py-12 sm:px-12 sm:py-14" style={fill("aqua")}>
          <a href={`mailto:${site.email}`} className="drift break-all text-[clamp(1.35rem,5.5vw,3.6rem)] font-bold leading-none">
            {site.email}
          </a>
          <div className="flex gap-3">
            <button type="button" onClick={copy} className="btn bg-[#06143a] text-white hover:bg-[#06143a]/90">
              {copied ? "Copied" : "Copy"}
            </button>
            <a href={`mailto:${site.email}`} className="btn border border-[#06143a]/40 hover:bg-[#06143a]/10">
              Write ↗
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <ul className="grid gap-3 sm:grid-cols-3">
          {tiles.map((t, i) => (
            <li key={t.label} className="lift lift-sm relative">
              <a href={t.href} target="_blank" rel="noreferrer" className="tone-sheet2 group flex items-start justify-between rounded-2xl border border-line px-5 py-4 transition-colors hover:border-accent">
                <span>
                  <span className="label flex items-center gap-2 text-muted">
                    <span className="h-2 w-2 rounded-full" style={{ background: toneVar(cycle(i * 2 + 1)) }} />
                    {t.label}
                  </span>
                  <span className="title-slide mt-1 block text-sm">{t.value}</span>
                </span>
                <span className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Sheet>
  );
}
