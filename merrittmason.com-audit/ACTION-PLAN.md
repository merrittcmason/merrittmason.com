# Action Plan — merrittmason.com
All items target the Next.js 16 rebuild in this repo unless marked [Vercel] or [Off-site].

## Critical (do now)
- [ ] [Vercel] Firewall: disable AI-bot blocking (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot). Verify: `curl -A GPTBot -o /dev/null -w "%{http_code}" https://www.merrittmason.com/` returns 200.
- [ ] Ship the SSR rebuild (fixes empty shell + soft 404s). Add `src/app/not-found.tsx`.
- [ ] `next.config.ts` `redirects()`: `/about`, `/projects`, `/testimonials`, `/contact` -> `/#about`, `/#work`, `/`, `/#contact` (permanent). Keep `/resume` -> PDF.
- [ ] `layout.tsx`: `metadataBase: new URL("https://www.merrittmason.com")`; title "Merritt Mason | Software Developer and Product Engineer, Charlotte NC"; description from findings/content.md; `alternates.canonical: "/"`; `openGraph` + `twitter`.
- [ ] Replace hero image handling so no 2 MB PNG / 9.8 MB PNG ships in public/ (rebuild already uses profile.jpg via next/image; verify `next build` output).

## High (week 1)
- [ ] Paste JSON-LD `@graph` (findings/schema.md) into layout.tsx. Confirm Coretek 360 role before adding `worksFor`.
- [ ] `src/app/robots.ts` + `src/app/sitemap.ts` (findings/sitemap.md). Submit sitemap in GSC.
- [ ] First paragraph = one quotable entity sentence (name, role, Charlotte NC, Coretek 360, AVERASE, degrees). Single H1 with name + role.
- [ ] Above-the-fold action row with real `<a>` links: Resume PDF, GitHub, LinkedIn, mailto. Show email text on Contact section.
- [ ] `app/opengraph-image.tsx` (1200x630) from profile.jpg.
- [ ] Security headers via `headers()` in next.config.ts: nosniff, Referrer-Policy strict-origin-when-cross-origin, X-Frame-Options DENY, Permissions-Policy.
- [ ] Settle status wording (student vs Product Engineer; graduation; certification issuers) in content/profile.md before publishing.

## Medium (month 1)
- [ ] Project write-ups 100–150 words each (AVERASE, coretek360.com, habitatrowan.org, Meeting Pair AI) with stack, outcome, repo/live links; dedupe Meeting Pair AI; replace stock images with real screenshots.
- [ ] Experience + Education sections with dates and employer/school names.
- [ ] "Updated <Month YYYY>" line; `dateModified` in schema.
- [ ] Mobile: no horizontal overflow at 390 px; tap targets >= 44 px; secondary text >= 14 px; Contact reachable without hamburger.
- [ ] Do not animate the LCP element from opacity 0; CSS over framer-motion for entrances.
- [ ] [Off-site] Identical name/role/location on LinkedIn headline, GitHub bio, resume. Add site URL to LinkedIn contact info + Featured, GitHub profile README, pinned repo READMEs.
- [ ] [Off-site] Verify site in Google Search Console; check Links and Indexing reports after deploy.

## Low (backlog)
- [ ] `public/llms.txt` with bio + links.
- [ ] `X-Robots-Tag: noindex` on resume PDF if it should not rank; set PDF title metadata.
- [ ] `images.minimumCacheTTL`; HSTS `includeSubDomains; preload` once all subdomains are HTTPS.
- [ ] [Off-site] One project write-up on dev.to/Hashnode; dev community profiles with website field (Devpost, Stack Overflow, university directory).
- [ ] Re-run this audit after deploy; add drift baseline (`claude-seo run drift_baseline.py https://www.merrittmason.com`).
