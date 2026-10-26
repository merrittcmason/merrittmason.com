"use client";

import React, { useEffect, useState } from "react";
import { categories, projects, sections, type CategoryKey, type Project } from "@/data/site";
import Sheet from "./Sheet";
import { cycle, fill, tab, toneInk, toneVar, type ToneName } from "@/lib/tones";
import Linkify from "./Linkify";

const filterTone: Record<string, ToneName> = { all: "cobalt", products: "duke", ai: "carolina", web: "powder", tools: "cyan", software: "midnight" };

function Thumb({ p }: { p: Project }) {
  return (
    <div className="thumb flex h-44 flex-col justify-between rounded-xl bg-white/92 p-4 text-navy">
      <div className="flex items-start justify-between">
        <span className="label rounded-full bg-navy/10 px-2 py-1 text-[9px]">{p.language}</span>
        <span className="flex gap-1">
          {p.tech.slice(0, 3).map((t) => (
            <span key={t} className="h-2 w-6 rounded-full bg-navy/15" />
          ))}
        </span>
      </div>
      <span className="mono-scale font-display text-5xl font-bold tracking-tight">{p.code}</span>
      <div className="space-y-1.5">
        <span className="block h-1.5 w-3/4 rounded-full bg-navy/20" />
        <span className="block h-1.5 w-1/2 rounded-full bg-navy/10" />
      </div>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<"all" | CategoryKey>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const open = openIdx === null ? null : list[openIdx];

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % list.length));
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i === null ? null : (i - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, list.length]);

  return (
    <Sheet
      id="work"
      index={4}
      total={sections.length}
      name="Projects"
      title="Works"
      count={`(${String(projects.length).padStart(2, "0")})`}
      aside="(Projects)"
      intro="Filter the cabinet by folder. Open any file for its details; arrow keys page through."
    >
      <div className="relative flex flex-wrap items-end gap-2 border-b-[6px] pl-6 pr-2 transition-colors duration-500" style={{ borderColor: toneVar(filterTone[filter]) }}>
        {[{ key: "all" as const, label: "All" }, ...categories].map((c) => {
          const count = c.key === "all" ? projects.length : projects.filter((p) => p.category === c.key).length;
          const active = filter === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setFilter(c.key);
                setOpenIdx(null);
              }}
              className={`tab ml-3 ${active ? "" : "text-muted hover:-translate-y-0.5 hover:text-ink"}`}
              style={active ? tab(filterTone[c.key]) : ({ ["--tab-bg"]: "var(--sheet-2)" } as React.CSSProperties)}
            >
              {c.label} <span className="count">{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <ul key={filter} className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
        {list.map((p, i) => {
          const gi = projects.indexOf(p);
          const t = cycle(gi);
          const cat = categories.find((c) => c.key === p.category)!;
          const n = String(gi + 1).padStart(2, "0");
          return (
            <li key={p.slug} className="lift relative pt-7">
              <span className={`tab absolute top-0 ${i % 2 ? "right-6" : "left-5"}`} style={tab(t)}>
                {cat.label} <span className="count">{n}</span>
              </span>
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="thumb-zoom block w-full rounded-[18px] p-4 text-left shadow-xl"
                style={fill(t)}
              >
                <Thumb p={p} />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <span className="title-slide text-lg font-bold leading-tight">{p.title}</span>
                  <span className="label mt-1 shrink-0 opacity-80">{p.language}</span>
                </div>
                <span className="mt-1 block text-sm opacity-80">{p.subtitle}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {open && (
        (() => {
          const dt = cycle(projects.indexOf(open));
          const dark = toneInk(dt) !== "#ffffff";
          return (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          className="backdrop-in fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setOpenIdx(null)}
        >
          <div
            key={open.slug}
            className="pop-in relative w-full max-w-3xl rounded-[26px] p-6 shadow-2xl sm:p-10"
            style={fill(dt)}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="tab absolute -top-7 left-8" style={tab(dt)}>
              {categories.find((c) => c.key === open.category)!.label} ·{" "}
              {String(openIdx! + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/15 text-lg hover:bg-black/25"
            >
              ×
            </button>
            <div className="grid gap-8 sm:grid-cols-[1fr_1.4fr]">
              <Thumb p={open} />
              <div>
                <h3 className="text-3xl font-bold leading-tight">{open.title}</h3>
                <p className="mt-1 opacity-80"><Linkify text={open.subtitle} /></p>
                <p className="mt-5 text-sm leading-relaxed opacity-90"><Linkify text={open.description} /></p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {open.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                      <Linkify text={b} />
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {open.tech.map((t) => (
                    <span key={t} className="chip rounded-full border border-current/40 px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {open.link && (
                    <a href={open.link} target="_blank" rel="noreferrer" className={`btn ${dark ? "bg-[#06143a] text-white hover:bg-[#06143a]/90" : "bg-white text-navy hover:bg-white/90"}`}>
                      Visit site ↗
                    </a>
                  )}
                  {open.repo && (
                    <a href={open.repo} target="_blank" rel="noreferrer" className={`btn ${open.link ? "border border-current/40 hover:bg-black/10" : dark ? "bg-[#06143a] text-white hover:bg-[#06143a]/90" : "bg-white text-navy hover:bg-white/90"}`}>
                      View code ↗
                    </a>
                  )}
                  {!open.link && !open.repo && <span className="btn border border-current/40">Internal</span>}
                  <span className="ml-auto flex gap-2">
                    <button type="button" aria-label="Previous project" onClick={() => setOpenIdx((openIdx! - 1 + list.length) % list.length)} className="btn border border-current/40 px-4 hover:bg-black/10">
                      ←
                    </button>
                    <button type="button" aria-label="Next project" onClick={() => setOpenIdx((openIdx! + 1) % list.length)} className="btn border border-current/40 px-4 hover:bg-black/10">
                      →
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
          );
        })()
      )}
    </Sheet>
  );
}
