# SXO Findings: merrittmason.com (SXO Gap Score 34/100)
- SERP: "Merritt Mason" and "Merritt Mason software developer" returned no portfolio, GitHub, or LinkedIn in one WebSearch each (genealogy, Justin Mason, Eric/Todd Merritt). Name is easily confused.
- Page: title "About Me", no meta description, no canonical/OG, no JSON-LD, no anchor hrefs in rendered DOM, robots.txt and sitemap.xml 404, Vite SPA, single page of skills copy.
- Personas (recruiter 30, hiring manager 25, peer 35).
- Fixes: see report returned to caller.

## Correction (orchestrator, verified 2026-10-26)
Full rendered DOM (render_page.py --mode always -o) DOES contain anchors: `/merritt_mason_resume.pdf`, `https://github.com/merrittcmason`, `https://linkedin.com/in/merrittcmason`, `mailto:contact@merrittmason.com`, `/projects`, `/contact`. Finding 4 ("no `<a href>` in rendered DOM") was a tool-truncation artifact. Residual issue stands: these links are not in the raw HTML (SPA) and only one above the fold on mobile.
