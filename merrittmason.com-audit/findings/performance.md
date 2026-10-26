# Performance / Core Web Vitals — merrittmason.com (live Vite SPA)

**Score: 62/100 (estimated).** No lab or field data: PSI API returned "rate limit exceeded" (both strategies); no CrUX (no Google API key). Numbers below are estimates from asset sizes, curl timings, and Playwright render (~1.0 s).

## Estimates (mid-tier mobile, 4G)
- LCP ~3.0–4.5 s (needs improvement). TTFB 93 ms, `x-vercel-cache: HIT`. JS must download + execute before anything paints; LCP element (2.1 MB headshot or h1) discovered only after React mounts; framer-motion starts headshot at opacity 0 / scale 0.8 with 0.2 s delay + 0.8 s duration.
- INP likely good (<200 ms), static page.
- CLS likely <0.1 but at risk: `<img>` lacks width/height; all content injected post-load.

## What works
- TTFB 93 ms, HTTP/2, brotli, Vercel edge.
- Inline theme script sets dark background pre-paint: no theme flash.
- CSS ~20 KB; one JS + one CSS; zero third-party scripts; no web-font requests.

## Findings
| # | Title | Severity | Evidence | Fix |
|---|---|---|---|---|
| 1 | Oversized headshot PNG | Critical | `/headshot.PNG` 2,119,525 B, 1254x1254, displayed at 256 px | `next/image` width/height 256, `sizes="256px"`, `priority`; AVIF/WebP ~10–20 KB (~99% smaller) |
| 2 | SPA empty shell | High | 763-byte body, content after JS | Server component renders h1 + image in initial HTML |
| 3 | Unused huge originals | Medium | IMG_0344-original.png 9.8 MB, profile-original.heic 1.77 MB in content/assets (correct location). Note: `/IMG_0344.png` (9.8 MB) is still publicly served on the LIVE site | Never copy to public/; rebuild drops it |
| 4 | Dark portrait JPG | Medium | portrait-dark.jpg 366 KB, not referenced in live bundle | If used, `next/image` without priority |
| 5 | JS bundle weight | Medium | 334 KB decoded / 112 KB brotli; single chunk incl. React + framer-motion | Next.js route splitting; CSS entrance animations or `LazyMotion`; `"use client"` only where needed |
| 6 | Hero entrance animation delays LCP | Medium | headshot opacity 0 -> 1 over 0.8 s after 0.2 s delay; h1 x:50 opacity 0 delay 0.4 s | Don't animate LCP element, or animate from opacity 1 |
| 7 | No preload / fetchpriority | Medium | no `<link rel=preload>` for image | `next/image priority` adds preload + fetchpriority=high |
| 8 | Missing width/height | Low | `<img>` no intrinsic size | `next/image` requires them |
| 9 | Short cache headers | Low | hashed JS/CSS and headshot: `max-age=0, must-revalidate` | Next.js serves `/_next/static` immutable; set `images.minimumCacheTTL` |

## Rebuild checklist
`next/image` + `priority` on hero; `next/font` (already used: Geist, Geist Mono, Syncopate, keep weights minimal); static/SSR; inline theme script + `suppressHydrationWarning`; re-run PSI after deploy.
