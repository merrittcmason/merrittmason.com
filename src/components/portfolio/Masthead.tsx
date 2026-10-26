import { site } from "@/data/site";

export default function Masthead() {
  return (
    <header className="relative">
      <div className="relative inline-block">
        <a
          href="#cover"
          className="tone-blue relative z-10 block rounded-br-[28px] px-5 py-4 sm:rounded-br-[36px] sm:px-8 sm:py-6"
          aria-label="Back to cover"
        >
          <span
            aria-hidden
            className="absolute -right-7 top-0 h-7 w-7"
            style={{ background: "radial-gradient(circle at 100% 100%, transparent 27px, var(--blue) 28px)" }}
          />
          <span className="font-display text-xl font-bold uppercase tracking-[0.18em] sm:text-4xl">
            Portfolio
            <sup className="ml-1 text-[0.4em] align-top">®</sup>
          </span>
        </a>
      </div>
      <ul className="label absolute right-6 top-6 hidden items-center gap-4 md:flex">
        {site.mastheadWords.map((w, i) => (
          <li key={w} className="flex items-center gap-4" style={{ color: ["var(--royal)", "var(--carolina)", "var(--periwinkle)"][i] }}>
            {i > 0 && <span className="opacity-40 text-muted">|</span>}
            <span className="relative text-sm tracking-[0.3em] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full">
              {w}
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
}
