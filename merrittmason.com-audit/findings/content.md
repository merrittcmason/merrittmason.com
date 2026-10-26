# Content Quality and On-Page SEO: merrittmason.com (2026-10-26)

Scores: Content Quality 34/100, On-Page SEO 22/100

## What works
- HTTP 200, HSTS, lang=en, viewport set, favicon present, fast render (~1s).
- Real, verifiable assets exist: GitHub repos, resume PDF, LinkedIn, certifications list.
- Testimonials placeholder data is hidden from nav (route still resolves with empty shell).
- content/profile.md holds strong, specific material (Coretek 360, AVERASE, NIST 800-88) not yet on the live site.

## Findings [title | severity | evidence | fix]
1. Generic title | High | every route: <title>About Me</title> | Per-page titles with name + role + city.
2. No meta description | High | none on any route | Add per-page descriptions (copy below).
3. SPA shell, identical head on all routes | High | is_spa=true; same title/etag on /, /projects, /testimonials, /contact | Next.js metadata API, SSR/SSG per route, canonical tags.
4. Thin content | High | Home extracted text ~150 words (min 500); /contact ~15 words; /testimonials ~4 words | Add bio, experience, project detail pages.
5. Soft-404 /testimonials | Med | 200 status with only nav text | Remove route or 404/redirect to /.
6. Current work absent | High | live bio says "student"; no Coretek 360, AVERASE, built sites | Lead with these (profile.md update section).
7. Weak E-E-A-T | High | No dates, no education/employer names in extracted text, no author byline, no structured data (block_count 0) | Add Person JSON-LD with sameAs (GitHub, LinkedIn), worksFor, alumniOf; show education and employers.
8. Heading hierarchy unclear | Med | "Hello, I'm Merritt Mason" is the lead heading; "My Experience" is a skills list, not experience | One H1 with name + role; H2s: Experience, Projects, Skills, Education, Contact.
9. Vague copy | Med | "ability to develop my skills showcased in my portfolio" (circular, no facts) | Use specific, quotable statements with numbers and outcomes.
10. Contact page is just link labels | Med | "View my code repositories / Connect professionally" | Show email contact@merrittmason.com, city, resume link, response expectation. Decide on phone separately (publish only if intended).
11. Projects lack depth | Med | one-line cards, duplicate "Meeting Pair AI" in featured and list; stock images | One page per project: problem, stack, result, repo link, real screenshots.
12. Internal linking minimal | Low | 3 nav links only | Cross-link home to project pages, resume, contact; add footer links; sitemap.xml and robots.txt.
13. No branded/local keyword targeting | Med | "Charlotte" and "software developer" absent from rendered text | Natural mention in H1/intro/title, no stuffing.
14. Freshness | Low | publication_date fallback 2026-01-01; last-modified 2026-10-16; no visible dates | Show "Updated <month year>" and dates on roles/projects.
15. Credential accuracy | Med | profile.md lists degrees ending 05/2026 and "seeking internship" while Product Engineer role is TBD start | Reconcile status wording (graduated? employed?) before publishing. Verify cert names (e.g. "IT Computer Science Certification") are issuer-verifiable; add issuers/credential links.

## Recommended copy for the rebuild
- Home title (<=60): Merritt Mason | Software Developer and Product Engineer, Charlotte NC
- Home meta (<=155): Merritt Mason is a Charlotte, NC software developer and Product Engineer at Coretek 360, and founder of AVERASE, a NIST 800-88 data-wiping platform.
- H1: Merritt Mason, Software Developer and IT Professional in Charlotte, NC
- Intro (AI-citable, one fact per sentence): "Merritt Mason is a software developer based in Charlotte, North Carolina. He is a Product Engineer at Coretek 360 and the founder of AVERASE, a NIST 800-88 compliant data-wiping and IT asset inventory platform. He holds a B.S. in Computer Science from the University of Alabama and an A.A.S. in IT from Rowan-Cabarrus Community College."
- /projects: title "Projects | Merritt Mason"; meta "Software projects by Merritt Mason: AVERASE, Meeting Pair AI, Open Range, Smart Bus, and more, with stack and source links."
- /contact: title "Contact Merritt Mason"; meta "Email Merritt Mason or connect on LinkedIn and GitHub. Based in Charlotte, NC."
- Add: Experience section (Coretek 360 work: self-hosted LLMs, CRM, automation, ID badge service; AVERASE features and pricing); case studies for AVERASE and coretek360.com / habitatrowan.org builds; /about page; Person + WebSite JSON-LD; OG image using headshot.png; alt text on images; resume link.
- Keep /resume, /merrittcmason.pdf, /mm_resumeC.pdf redirects.
- Keep testimonials out until real, permissioned quotes exist.
