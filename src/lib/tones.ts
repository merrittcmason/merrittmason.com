import type { CSSProperties } from "react";

/** Every color the site uses, by name. `light` tones get dark ink on top. */
export const TONES = {
  royal: { light: false },
  cobalt: { light: false },
  duke: { light: false },
  navy: { light: false },
  midnight: { light: false },
  indigo: { light: false },
  steel: { light: false },
  steelblue: { light: false },
  denim: { light: false },
  cerulean: { light: false },
  electric: { light: false },
  cyan: { light: false },
  teal: { light: false },
  violet: { light: false },
  periwinkle: { light: false },
  carolina: { light: true },
  sky: { light: true },
  aqua: { light: true },
  azure: { light: true },
  powder: { light: true },
  ice: { light: true },
  lavender: { light: true },
} as const;

export type ToneName = keyof typeof TONES;

export const DARK_INK = "#06143a";

export const toneVar = (t: ToneName) => `var(--${t})`;
export const toneInk = (t: ToneName) => (TONES[t].light ? DARK_INK : "#ffffff");

/** Inline style for a filled surface. */
export const fill = (t: ToneName): CSSProperties => ({ background: toneVar(t), color: toneInk(t) });

/** Inline style for a folder tab, including its shoulder color. */
export const tab = (t: ToneName): CSSProperties =>
  ({ ["--tab-bg"]: toneVar(t), color: toneInk(t) }) as CSSProperties;

/** Section accents: each sheet is its own colored folder. */
export const SECTION_TONE: Record<string, ToneName> = {
  cover: "royal",
  contents: "carolina",
  about: "electric",
  work: "cobalt",
  process: "cerulean",
  credentials: "periwinkle",
  contact: "sky",
};

/** Cycle used for project cards and small accents. Dark and light alternate for rhythm. */
export const CYCLE: ToneName[] = [
  "duke",
  "carolina",
  "electric",
  "powder",
  "denim",
  "aqua",
  "periwinkle",
  "sky",
  "cerulean",
  "lavender",
  "royal",
  "azure",
  "teal",
  "ice",
  "violet",
  "steelblue",
  "cyan",
  "midnight",
];

export const cycle = (i: number): ToneName => CYCLE[i % CYCLE.length];
