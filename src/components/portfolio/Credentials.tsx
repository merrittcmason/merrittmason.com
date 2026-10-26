import { certifications, education, sections, skills } from "@/data/site";
import Sheet from "./Sheet";
import { cycle, fill, tab, toneVar, type ToneName } from "@/lib/tones";

const cards: { dates: string; degree: string; school: string; place: string; tag: string; tone: ToneName; tilt: string }[] = [
  { ...education[0], tag: "BSc", tone: "duke", tilt: "-rotate-1" },
  { ...education[1], tag: "AAS", tone: "carolina", tilt: "rotate-1" },
  {
    dates: "Certified",
    degree: "CompTIA A+ Core 2",
    school: "Plus 9 IT, CAD, and productivity certifications",
    place: "",
    tag: "A+",
    tone: "periwinkle",
    tilt: "-rotate-1",
  },
];

export default function Credentials() {
  return (
    <Sheet id="credentials" index={6} total={sections.length} name="Credentials" title="Credentials" count="(10)" aside="(Certs)">
      <div className="grid gap-10 pt-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.degree} className={`lift relative pt-7 hover:rotate-0 ${c.tilt}`}>
            <span className="tab absolute left-8 top-0" style={tab(c.tone)}>
              {c.tag}
            </span>
            <div className="relative min-h-56 overflow-hidden rounded-[22px] p-6" style={fill(c.tone)}>
              <span aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/25 blur-2xl" />
              <span className="font-display text-3xl opacity-60">&ldquo;</span>
              <p className="title-slide mt-2 text-xl font-bold leading-snug">{c.degree}</p>
              <p className="mt-1 text-sm opacity-85">{c.school}</p>
              <p className="mt-6 font-semibold">{c.dates}</p>
              {c.place && <p className="text-sm opacity-80">{c.place}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="pill tone-accent inline-block rounded-md px-3 py-1 text-sm font-semibold">Certifications</span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {certifications.map((c, i) => (
              <li key={c} className="tone-sheet2 lift-sm flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm">
                <span className="h-2 w-2 rounded-full" style={{ background: toneVar(cycle(i + 2)) }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {(
            [
              ["Languages", skills.languages],
              ["Development", skills.development],
              ["IT & networking", skills.it],
              ["Technical & AI", skills.ai],
            ] as const
          ).map(([title, items], i) => (
            <div key={title} className="lift-sm">
              <span className="label title-slide" style={{ color: toneVar(cycle(i * 3 + 1)) }}>{title}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
