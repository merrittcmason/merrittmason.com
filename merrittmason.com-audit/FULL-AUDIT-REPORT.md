# Full SEO Audit — merrittmason.com
Audited 2026-10-26. Target: https://www.merrittmason.com (live). Business type: **Personal portfolio / individual professional** (no local, e-commerce, or publisher signals).

**Important context:** the live site is the old Vite/React SPA deployed 2026-10-16. The working tree holds an uncommitted Next.js 16 rebuild. Every recommendation targets the rebuild, which already fixes the two worst structural problems (client-only rendering, soft 404s) by default.

## Executive Summary

**SEO Health Score: 28 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 28 | 6.2 |
| Content Quality | 23% | 34 | 7.8 |
| On-Page SEO | 20% | 22 | 4.4 |
| Schema / Structured Data | 10% | 5 | 0.5 |
| Performance (CWV, estimated) | 10% | 62 | 6.2 |
| AI Search Readiness | 10% | 12 | 1.2 |
| Images | 5% | 35 | 1.8 |
| **Total** | | | **28** |

Supplementary (not in score): Visual/mobile 72, SXO gap 34, Backlinks: insufficient data.

### Top 5 critical issues
1. **AI crawlers blocked at host level.** GPTBot, ClaudeBot, PerplexityBot receive HTTP 403 from Vercel (Googlebot, bingbot get 200). robots.txt is 404, so this is a Vercel Firewall / Bot Protection rule. ChatGPT and Perplexity cannot cite the site at all.
2. **Client-rendered empty shell.** Raw HTML is a 1.9 KB `<div id="root">`. Non-JS crawlers see nothing. Rebuild fixes this.
3. **Soft 404 on every path.** Any URL returns 200 with the same index.html. Rebuild fixes this; add `not-found.tsx` and redirects for old routes.
4. **Title "About Me", no meta description, no canonical, no OG, no JSON-LD.** Branded SERP for "Merritt Mason" shows other people; nothing on the page disambiguates.
5. **2.1 MB PNG headshot rendered at 256 px**, plus a 9.8 MB PNG still publicly served. LCP estimated 3–4.5 s on mobile.

### Top 5 quick wins
1. Vercel dashboard > Firewall: disable the AI-bot block (10 min).
2. Change `metadataBase` to `https://www.merrittmason.com` and add `alternates.canonical`, `openGraph`, `twitter` in layout.tsx (15 min).
3. Paste the Person/WebSite/ProfilePage JSON-LD from findings/schema.md into layout.tsx (10 min).
4. Add `src/app/robots.ts` and `src/app/sitemap.ts` (10 min).
5. Title: "Merritt Mason | Software Developer and Product Engineer, Charlotte NC" plus a one-sentence entity statement as the first paragraph (15 min).

## Technical SEO (28/100)
- **Crawlability:** robots.txt 404; sitemap 404; AI bots 403. HTTPS and HSTS fine; apex -> www single 308.
- **Indexability:** SPA shell; soft 404s; identical `<head>` on every client route; no canonical.
- **Security:** only HSTS. Missing nosniff, Referrer-Policy, X-Frame-Options/CSP frame-ancestors, Permissions-Policy. `access-control-allow-origin: *` on HTML.
- **Host mismatch:** rebuild's `metadataBase` is apex while Vercel canonicalizes to www. Pick www (recommended) and align metadataBase, canonical, sitemap, JSON-LD `@id`s.
- **CWV:** unknown (no PSI, no CrUX). See Performance.
Details: findings/technical.md.

## Content Quality (34/100) and On-Page (22/100)
- Home ~190 rendered words; /contact ~15; /testimonials ~4 (soft 404 with fake-testimonial scaffolding hidden from nav).
- Copy says "student"; omits Charlotte NC, University of Alabama, Rowan-Cabarrus, Coretek 360, AVERASE. content/profile.md already holds all of this.
- Two H1s on home ("Merritt Mason" logo + "Hello, I'm Merritt Mason"); "My Experience" H2 is actually a skills list.
- E-E-A-T: no dates, employers, schools, byline, or schema. Contact page shows link labels but not the email.
- Projects: one-line cards, Meeting Pair AI listed twice, stock images.
- Status conflict to settle before publishing: profile.md says degrees end 05/2026 and "seeking internship", but also Product Engineer at Coretek 360 with TBD start. Several certifications lack issuers.
- Recommended copy (title, meta, H1, lead paragraph, per-section titles) in findings/content.md.

## Schema & Structured Data (5/100)
Zero blocks live and in rebuild. Ready-to-paste `@graph` (WebSite, ProfilePage, Person with sameAs/alumniOf/address/knowsAbout) in findings/schema.md. Phone number deliberately excluded. Add `worksFor` once the Coretek 360 role is confirmed current.

## Performance (62/100, estimated)
PSI rate-limited; no CrUX. TTFB 93 ms, brotli, one JS (112 KB br / 334 KB raw) + one CSS (~20 KB), no third parties, no web fonts. LCP ~3–4.5 s mobile because content waits on JS and framer-motion fades the hero from opacity 0 after a delay. Rebuild: `next/image` with `priority` on hero (already in About.tsx), no entrance animation on LCP element, keep three `next/font` families at minimal weights.

## Images (35/100)
headshot.PNG 2.1 MB at 256 px; IMG_0344.png 9.8 MB publicly served; darkshot1.jpg and Poker.jpeg orphaned; no OG image. Rebuild's public/profile.jpg (1200x1600, 341 KB) via `next/image` is fine; add `app/opengraph-image.tsx`.

## AI Search Readiness (12/100)
403 for AI bots (critical), empty shell, no entity sentence, no schema, no llms.txt. GitHub profile links back with `rel="me"` (good). Platform readiness now: Google AIO 20, ChatGPT 5, Perplexity 5, Bing Copilot 15.

## Visual / Mobile (72, supplementary)
Screenshots in screenshots/. Mobile home overflows to 425 px (hamburger clipped); resume CTA at 795 px of 844 px viewport; Contact hidden behind hamburger; theme toggle and social icons 36 px (<44 px); 23 text nodes under 14 px on /projects. Rebuild should be re-checked at 390 px.

## Search Experience (34, supplementary)
Two web searches for "Merritt Mason" / "Merritt Mason software developer" surfaced no merrittmason.com, GitHub, or LinkedIn; genealogy pages and unrelated Masons/Merritts rank. Persona scores: recruiter 30, hiring manager 25, peer 35. Correction: rendered DOM does contain resume/GitHub/LinkedIn/mailto links, but none are in raw HTML and only resume is near the fold on mobile.

## Backlinks (insufficient data)
No Moz/Bing/DataForSEO keys. Common Crawl (2026 Jan–Mar): domain absent from graph. Only known inbound: GitHub profile website field, `rel="nofollow me"`. LinkedIn unverified (login wall). Use GSC Links report after verification.

## Limitations
- No Google Search Console, CrUX, or GA4 data (no credentials). CWV are estimates.
- PSI API rate-limited; no Lighthouse run.
- Web search was a single non-Google engine; confirm branded SERP in Google.
- Live site crawl was 5 URLs (home, /about, /projects, /testimonials, /contact) plus PDF. SPA, so all share one head.
