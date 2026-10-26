# Technical SEO — merrittmason.com (live Vite SPA), checked 2026-10-26

**Score: 28/100** (live). Next.js rebuild projected ~80 once fixes below land.

Status: Crawlability FAIL · Indexability FAIL · Security FAIL (HSTS only) · URL structure PARTIAL · Mobile PASS · CWV UNKNOWN · Structured data FAIL · JS rendering FAIL

## What works
- HTTPS everywhere; http -> https://www and apex -> www each a single 308, no chains.
- HSTS max-age=63072000.
- viewport, theme-color, lang="en" present. HTML shell 1.9 KB from Vercel edge.
- Resume PDF returns 200.
- Rebuild layout.tsx already sets title, description, icons, lang.

## Findings
| # | Title | Severity | Evidence | Fix |
|---|---|---|---|---|
| 1 | Content client-rendered only | Critical | Raw HTML is 1948-byte shell, empty `<div id="root">`, no body text | Next.js rebuild server-renders by default; keep content in server components |
| 2 | Soft 404 on every path | Critical | `/nonexistent-xyz` returns 200 with identical index.html (same ETag) | Next.js returns real 404; add `src/app/not-found.tsx`; add `redirects()` in next.config.ts for old `/about`, `/projects`, `/testimonials`, `/contact` -> `/#section`, permanent |
| 3 | AI crawlers blocked with 403 | Critical | `curl -A GPTBot` / ClaudeBot / PerplexityBot -> 403 from Vercel; Googlebot, bingbot -> 200 | Vercel dashboard > Firewall > disable "AI Bots" managed rule / Bot Protection for these agents (or decide deliberately to block) |
| 4 | Weak title, no description | High | `<title>About Me</title>`, no meta description | `title.template`, name + role + city in title; add description, openGraph, twitter, alternates.canonical |
| 5 | No canonical or OG tags | High | Absent from live HTML | `alternates: { canonical: "/" }`, `openGraph` with 1200x630 image (`public/og.png` or `app/opengraph-image.tsx`), `twitter.card` |
| 6 | metadataBase host mismatch | High | layout.tsx uses `https://merrittmason.com`; live apex 308 -> www | Set `metadataBase` to `https://www.merrittmason.com` (or move Vercel primary domain to apex). Canonical, OG, sitemap, JSON-LD must all use the same host |
| 7 | robots.txt 404 | High | `x-vercel-error: NOT_FOUND` | Add `src/app/robots.ts` returning allow `/` and sitemap URL |
| 8 | No sitemap | High | `/sitemap.xml` and fallbacks 404; sitemap_discovery.py found nothing | Add `src/app/sitemap.ts` listing `/` with lastModified |
| 9 | Missing security headers | Medium | Only HSTS. `access-control-allow-origin: *` on HTML | `headers()` in next.config.ts: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy`. CSP optional, report-only first |
| 10 | No JSON-LD | Medium | 0 structured-data blocks | See schema.md |
| 11 | No llms.txt | Low | 404 | Optional `public/llms.txt` |
| 12 | Cache / PDF | Low | HTML `max-age=0, must-revalidate`; PDF metadata unverified | Next.js handles static caching; set PDF title metadata; `X-Robots-Tag: noindex` on PDF if not wanted in SERP |
| 13 | Rebuild hygiene | Low | next.config.ts has cacheComponents + partialPrefetching; 3 font families | `next/image` with explicit size + `priority` on hero; minimal font weights; keep inline theme script with `suppressHydrationWarning` |

## Priority
1. Ship SSR rebuild (#1, #2, #4). 2. Unblock AI bots (#3). 3. metadataBase/canonical/OG (#5, #6). 4. robots.ts + sitemap.ts (#7, #8). 5. headers() + JSON-LD (#9, #10). 6. Optional (#11–13).
