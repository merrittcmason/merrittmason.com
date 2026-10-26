import type { ReactNode } from "react";
import { site } from "@/data/site";
import { SECTION_TONE, toneVar } from "@/lib/tones";

type Props = {
  id: string;
  index: number;
  total: number;
  name: string;
  title: string;
  count?: string;
  aside?: string;
  intro?: ReactNode;
  strip?: boolean;
  children: ReactNode;
  className?: string;
};

export function Strip({ name, index, total, filled }: { name: string; index: number; total: number; filled?: boolean }) {
  const n = String(index).padStart(2, "0");
  const t = String(total).padStart(2, "0");
  return (
    <div
      className="label label-row flex items-center justify-between gap-3 px-5 py-2.5 text-[10px] sm:gap-4 sm:px-10 sm:py-3 sm:text-[11px]"
      style={filled ? { background: "var(--accent)", color: "#fff" } : { color: "var(--accent)" }}
    >
      <span>{site.year}</span>
      <span className="hidden md:inline">Product</span>
      <span className="hidden md:inline">AI</span>
      <span className="hidden lg:inline">Systems</span>
      <span className={filled ? "underline underline-offset-4" : "text-ink"}>{name}</span>
      <span>
        {n} / {t}
      </span>
    </div>
  );
}

export function Corners() {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute left-6 top-14 text-xl opacity-60 sm:left-7" style={{ color: "var(--accent)" }}>+</span>
      <span aria-hidden className="pointer-events-none absolute right-6 top-14 text-xl opacity-60 sm:right-7" style={{ color: "var(--accent)" }}>+</span>
    </>
  );
}

export function SheetTitle({ title, count, aside }: { title: string; count?: string; aside?: string }) {
  return (
    <div className="relative mb-8 flex flex-wrap items-end justify-between gap-6">
      <div className="relative">
        {count && (
          <span className="ghost absolute -top-5 left-1 text-3xl tracking-[0.2em] sm:text-4xl">{count}</span>
        )}
        <h2 className="outline text-[clamp(2.6rem,8vw,7rem)]">{title}</h2>
      </div>
      {aside && (
        <span className="font-display label text-xl tracking-[0.3em] sm:text-3xl">
          {aside}
        </span>
      )}
    </div>
  );
}

export default function Sheet({ id, index, total, name, title, count, aside, intro, children, className = "" }: Props) {
  return (
    <section id={id} className={`sheet scroll-mt-24 ${className}`} style={{ ["--accent" as string]: toneVar(SECTION_TONE[id] ?? "royal") }}>
      <Strip name={name} index={index} total={total} filled />
      <Corners />
      <div className="px-5 pb-8 pt-5 sm:px-10 sm:pb-14 sm:pt-6">
        <SheetTitle title={title} count={count} aside={aside} />
        {intro && (typeof intro === "string" ? (
          <p className="mb-10 max-w-md text-sm leading-relaxed text-muted">
            {intro}
          </p>
        ) : (
          <div className="mb-10">{intro}</div>
        ))}
        {children}
      </div>
    </section>
  );
}
