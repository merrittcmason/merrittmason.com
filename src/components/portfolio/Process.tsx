"use client";

import React, { useState } from "react";
import { processSteps, sections } from "@/data/site";
import Sheet from "./Sheet";
import { tab, type ToneName } from "@/lib/tones";

const stepTones: ToneName[] = ["royal", "cerulean", "teal", "violet"];

function Art({ n }: { n: number }) {
  // Four small decorative diagrams, one per step.
  const dots = Array.from({ length: 18 }, (_, i) => ({ x: 20 + (i % 9) * 38, y: 20 + Math.floor(i / 9) * 60 }));
  return (
    <svg aria-hidden viewBox="0 0 380 160" className="h-40 w-full max-w-md text-white" fill="none" stroke="currentColor" strokeWidth="3">
      {n === 0 && (
        <>
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="5" fill={i === 6 ? "currentColor" : "none"} />
          ))}
          <circle cx="250" cy="55" r="46" strokeWidth="4" />
          <path d="M283 88l48 48" strokeWidth="8" strokeLinecap="round" />
        </>
      )}
      {n === 1 && (
        <>
          <rect x="20" y="20" width="150" height="120" rx="14" />
          <rect x="190" y="20" width="170" height="52" rx="12" />
          <rect x="190" y="88" width="80" height="52" rx="12" />
          <rect x="280" y="88" width="80" height="52" rx="12" />
          <path d="M40 50h110M40 75h80M40 100h95" strokeLinecap="round" />
        </>
      )}
      {n === 2 && (
        <>
          <path d="M20 130l60-60 50 40 70-80 60 40 90-50" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          {[20, 80, 130, 200, 260, 350].map((x, i) => (
            <circle key={x} cx={x} cy={[130, 70, 110, 30, 70, 20][i]} r="7" fill="currentColor" />
          ))}
        </>
      )}
      {n === 3 && (
        <>
          <rect x="30" y="30" width="320" height="100" rx="50" />
          <path d="M70 80h60M150 80h40M210 80h100" strokeLinecap="round" strokeWidth="10" opacity="0.5" />
          <circle cx="300" cy="80" r="26" fill="currentColor" />
          <path d="M288 80l9 9 16-18" stroke="var(--blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export default function Process() {
  const [i, setI] = useState(0);
  const s = processSteps[i];
  return (
    <Sheet id="process" index={5} total={sections.length} name="Process" title="Process" count="(04)" aside="(Method)">
      <div className="relative ml-6 flex flex-wrap gap-2">
        {processSteps.map((st, k) => (
          <button
            key={st.n}
            type="button"
            onClick={() => setI(k)}
            className={`tab ml-3 ${k === i ? "" : "text-muted hover:-translate-y-0.5 hover:text-ink"}`}
            style={k === i ? tab(stepTones[k]) : ({ ["--tab-bg"]: "var(--sheet-2)" } as React.CSSProperties)}
          >
            {st.n} {st.title}
          </button>
        ))}
      </div>
      <div className={`tone-step-${i} grid gap-8 rounded-[26px] p-6 transition-[background] duration-700 sm:gap-10 sm:p-12 lg:grid-cols-[1fr_1fr]`}>
        <div key={`l${i}`} className="fade-up">
          <span className="block font-display text-[5.5rem] leading-none text-white/30 sm:text-[9rem]">{s.n}</span>
          <h3 className="-mt-4 text-4xl font-bold sm:text-5xl">
            <span className="word-shift">{s.title}</span> <span className="ml-2 text-2xl font-normal text-white/70">{s.sub}</span>
          </h3>
          <span className="label mt-3 block text-white/70">{s.days}</span>
          <div className="mt-10">
            <Art n={i} />
          </div>
        </div>
        <div key={`r${i}`} className="fade-up flex flex-col justify-start gap-6 lg:pt-6" style={{ animationDelay: "80ms" }}>
          <p className="text-base leading-relaxed sm:text-lg">{s.text}</p>
          <div className="flex flex-wrap gap-2">
            {s.chips.map((c) => (
              <span key={c} className="chip rounded-full border border-white/60 px-3 py-1.5 text-sm font-medium">
                {c}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {processSteps.map((_, k) => (
              <button type="button" aria-label={`Go to step ${k + 1}`} onClick={() => setI(k)} key={k} className={`bar h-1 rounded-full ${k === i ? "w-12 bg-white" : "w-8 bg-white/30 hover:bg-white/60"}`} />
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              aria-label="Previous step"
              onClick={() => setI((i - 1 + processSteps.length) % processSteps.length)}
              className="btn border border-white/60 px-4 hover:bg-white/10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setI((i + 1) % processSteps.length)}
              className="btn bg-white text-navy hover:bg-white/90"
            >
              Next step →
            </button>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
