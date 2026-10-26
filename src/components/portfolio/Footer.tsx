"use client";

import { useEffect, useState } from "react";
import { sections, site } from "@/data/site";

export default function Footer() {
  const [clock, setClock] = useState({ time: "--:--", year: "" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock({
        time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: site.timeZone }),
        year: String(now.getFullYear()),
      });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 px-6 py-10 sm:px-10">
      <div>
        <span className="font-display drift block text-sm tracking-[0.3em] text-blue sm:text-base">{site.tagline.toUpperCase()}</span>
        <span className="label mt-1 block text-muted">© {clock.year} MAESON Technologies, LLC</span>
      </div>
      <span className="font-display text-xl tracking-widest text-blue">AND</span>
      <span className="label flex items-center gap-2 text-muted">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" /> {clock.time} · {site.location.split(",")[0]}
      </span>
      <a href="#cover" className="label nudge">
        Back to cover ↑
      </a>
      <span className="font-display pill text-4xl text-blue">{String(sections.length).padStart(2, "0")}</span>
    </footer>
  );
}
