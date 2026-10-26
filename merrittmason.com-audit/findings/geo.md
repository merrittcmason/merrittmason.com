# GEO / AI Search Readiness — merrittmason.com

**Score: 12/100.** Citability 15 · Structure 20 · Multi-modal 10 · Authority 15 · Technical 5

## What works
- Rendered copy opens "Hello, I'm Merritt Mason" and states CS/IT student, software/IT/AI interests.
- GitHub profile (merrittcmason) website field = https://www.merrittmason.com/ with `rel="me"`; link is reciprocal.
- lang="en", fast Vercel host.

## Findings
| # | Title | Severity | Evidence | Fix |
|---|---|---|---|---|
| 1 | AI crawlers get 403 | Critical | GPTBot, ClaudeBot, PerplexityBot UAs -> 403 (verified twice); browser/Googlebot/bingbot -> 200. robots.txt is 404 so this is host-level (Vercel Firewall "AI Bots" rule / Bot Protection) | Vercel > Firewall: disable AI-bot blocking, re-test with curl |
| 2 | Empty SPA shell | Critical | raw HTML `<div id="root"></div>`; non-JS AI crawlers see nothing | Next.js SSR rebuild; confirm body text in `curl` output |
| 3 | No entity statement | High | Copy never states location, university, or current role | First paragraph = one self-contained sentence: "Merritt Mason is a software developer and Product Engineer based in Charlotte, NC, ..." |
| 4 | Weak metadata, no schema | High | title "About Me", 0 JSON-LD | Metadata API + Person JSON-LD with sameAs (schema.md) |
| 5 | No robots.txt / llms.txt | Medium | both 404 | `app/robots.ts` explicitly allowing GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot; optional `public/llms.txt` |
| 6 | Thin list-style content | Medium | Skills are bullet fragments; no 130–170 word citable passages | 2–3 prose sections each opening with a direct answer; 100–150 words per project |
| 7 | Weak off-site signals | Medium | LinkedIn body not checked; no video/community presence | Identical name/role/location on site, GitHub bio, LinkedIn headline, resume; `rel="me"` links |
| 8 | Publication date is a guess | Low | htmldate fallback 2026-01-01 | "Last updated" text + `dateModified` |

## Platform readiness (current)
Google AI Overviews 20 · ChatGPT 5 · Perplexity 5 · Bing Copilot 15

## Top actions
1. Remove 403 bot block (10 min). 2. SSR (rebuild). 3. Entity sentence (15 min). 4. Person schema + metadata (30 min). 5. robots.ts, sitemap, llms.txt (20 min).
