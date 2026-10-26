"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@/data/site";
import { SECTION_TONE, fill } from "@/lib/tones";

export default function StickyNav() {
  const [active, setActive] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Keep the active link visible when the pill scrolls horizontally on small screens.
  useEffect(() => {
    const nav = navRef.current;
    const link = linkRefs.current[active];
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    const target = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const i = sections.findIndex((s) => s.id === visible.target.id);
          if (i >= 0) setActive(i);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const accent = SECTION_TONE[sections[active].id] ?? "royal";

  return (
    <div className="pointer-events-none sticky top-2 z-50 mt-4 flex justify-center px-3 sm:top-4 sm:mt-6 sm:px-4">
      <nav
        ref={navRef}
        aria-label="Portfolio pages"
        className="glass nav-scroll pointer-events-auto flex max-w-full snap-x items-center gap-0.5 overflow-x-auto rounded-full px-2 py-1 sm:gap-1 sm:px-3 sm:py-1.5"
        style={{ background: "var(--nav)" }}
      >
        {sections.map((s, i) => (
          <a
            key={s.id}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            href={`#${s.id}`}
            className={`label nav-link shrink-0 snap-center rounded-full py-2 pl-[calc(0.65rem+0.16em)] pr-2.5 text-[10px] sm:pl-[calc(0.75rem+0.16em)] sm:pr-3 sm:text-[11px] ${i === active ? "" : "text-ink-2 hover:text-ink"}`}
            style={i === active ? fill(accent) : undefined}
            aria-current={i === active ? "page" : undefined}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
