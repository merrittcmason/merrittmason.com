"use client";

import React, { useState } from "react";
import { chapters, sections, site } from "@/data/site";
import Sheet from "./Sheet";
import { fill, tab, toneInk, type ToneName } from "@/lib/tones";
import Linkify from "./Linkify";

const chapterTones: ToneName[] = ["royal", "carolina", "teal", "periwinkle", "electric"];

const offsets = ["right-[10%]", "left-[8%]", "right-[20%]", "left-[25%]", "right-[32%]"];

export default function Contents() {
  const [open, setOpen] = useState(0);
  return (
    <Sheet
      id="contents"
      index={2}
      total={sections.length}
      name="Contents"
      title="Contents"
      count="(05)"
      aside="(Index)"
      intro={`Table of contents for ${site.name.split(" ")[0]}'s ${site.year} portfolio. Open a chapter to see what is inside.`}
    >
      <ol className="flex flex-col">
        {chapters.map((ch, i) => {
          const isOpen = i === open;
          const t = chapterTones[i];
          const ink = toneInk(t);
          const dark = ink !== "#ffffff";
          return (
            <li key={ch.id} className={`folder-stack-wrap relative pt-7 ${i > 0 ? "-mt-16" : ""}`} style={{ zIndex: i + 1 }}>
              <span
                className={`tab absolute top-0 ${offsets[i]} ${isOpen ? "" : "text-ink-2"}`}
                style={isOpen ? tab(t) : ({ ["--tab-bg"]: "var(--sheet-2)" } as React.CSSProperties)}
              >
                Chapter {i + 1} →
              </span>
              <div
                onClick={() => setOpen(i)}
                className={`folder-stack w-full cursor-pointer rounded-[22px] border border-line text-left transition-[padding,background-color,color,transform] duration-500 ${
                  isOpen ? "px-5 pb-24 pt-7 sm:px-10 sm:pt-10" : `tone-sheet2 px-5 pt-5 hover:border-accent/40 sm:px-10 ${i === chapters.length - 1 ? "pb-8" : "pb-20"}`
                }`}
                style={isOpen ? { ...fill(t), borderColor: "transparent" } : undefined}
              >
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
                  <span className={`label pt-3 text-base ${isOpen ? (dark ? "text-[#06143a]/70" : "text-white/70") : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-expanded={isOpen}
                      className={`title-slide block text-left text-[clamp(1.8rem,5vw,3.6rem)] font-bold uppercase leading-none tracking-tight ${
                        isOpen ? "" : "text-muted"
                      }`}
                    >
                      {ch.title}
                    </button>
                    <span className={`mt-3 block text-lg ${isOpen ? (dark ? "text-[#06143a]/80" : "text-white/80") : "text-muted/70"}`}>{ch.sub}</span>
                    <span className={`label block ${isOpen ? `mt-8 ${dark ? "text-[#06143a]/60" : "text-white/60"}` : "mt-3 text-muted/60"}`}>
                      Chapter {String(i + 1).padStart(2, "0")} · page {ch.page}
                    </span>
                  </div>
                  <div className={`accordion ${isOpen ? "open" : ""}`}>
                    <div className="flex flex-col items-start gap-6 sm:items-end">
                    <ul className={`grid grid-cols-2 gap-x-6 gap-y-2 text-sm ${dark ? "text-[#06143a]/90" : "text-white/90"}`}>
                      {ch.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full border border-current opacity-80" />
                          <Linkify text={p} />
                        </li>
                      ))}
                    </ul>
                    <a href={`#${ch.id}`} className={`btn border ${dark ? "border-[#06143a]/40 text-[#06143a] hover:bg-[#06143a]/10" : "border-white/40 text-white hover:bg-white/15"}`}>
                      Open chapter →
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Sheet>
  );
}
