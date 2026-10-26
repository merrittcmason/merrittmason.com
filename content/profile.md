# Merritt Mason — site content (extracted 2026-10-25 from old Vite/React site)

Single source of truth for the Next.js rebuild. Everything below came from the
old site source, `vercel.json`, and the resume PDF. Nothing invented.

## Identity

- Name: Merritt Mason
- Domain: merrittmason.com
- Email: contact@merrittmason.com
- GitHub: https://github.com/merrittcmason
- LinkedIn: https://linkedin.com/in/merrittcmason
- Location: Charlotte, NC
- Phone: +1 (704) 918-5752  (was commented out / hidden on old Contact page — do not publish unless intended)
- Brand color: crimson `#A6192E` (accent `silver #C0C0C0`); dark bg `#111111` / `#1d1d1d` / `#222222`
- Favicon: "M" monogram in crimson → `assets/favicon-mm.svg`
- Default theme: dark, with light toggle

## Bio / tagline (old copy, rewrite for new site)

> I'm a student currently studying Computer Science and Information Technology.
> This has given me the ability to develop my skills showcased in my portfolio.
> Notably software/application development, IT, and AI Technologies.

Resume profile line:

> I'm actively seeking an internship or full-time role in software development or IT.
> Currently studying Computer Science and Information Technology which has given me
> the ability to develop my skills showcased in my portfolio. Notably software and
> application development paired with IT essentials.

## Education

| Program | School | Location | Dates |
|---|---|---|---|
| Computer Science BSc | The University of Alabama | Tuscaloosa, AL | 08/2022 – 05/2026 |
| IT Computer Programming and Development AAS | Rowan-Cabarrus Community College | Salisbury, NC | 01/2024 – 05/2026 |

## Professional experience (site shows only Coretek 360 + AVERASE; lifeguard roles kept here for the record)

**J.F. Hurley YMCA** — Lifeguard Instructor / Lifeguard — Salisbury, NC — 11/2023 – present
- Train and certify new lifeguards in CPR, first aid, water rescues, emergency response, and emergency oxygen usage.
- Conduct lifeguard recertification and in-service training to ensure continued compliance with safety standards.

**Swim Club Management Group** — Aquatic Facility Director — Charlotte, NC — 05/2021 – 09/2023
- Managed aquatics/lifeguard operations with a large team at several prestigious country clubs in the Charlotte / Lake Norman area.
- Traveled periodically to oversee new country club facilities.

**The University of Alabama** — Lifeguard — Tuscaloosa, AL — 11/2022 – 05/2023
- Worked at the university aquatic center with a team of 30 lifeguards.
- Maintained safety at a facility with an Olympic-sized pool, high-dive platforms, and diving boards.

## Skills (old site grouping)

**Programming Languages**
Python · Rust · Java · JavaScript · TypeScript · C · C++ · C# · Ruby / Ruby on Rails · SQL · React

**Application Development**
Full-Stack Development · iOS/Swift Development · Automation & Web Scraping · API Integration

**IT & Networking**
Penetration Testing · Kali Linux · Network Security · Ethical Hacking · System Hardening · Database Management

**Technical & AI Skills**
AI/ML Model Training · Prompt Engineering · CAD Design · Hardware Assembly · System Administration

## Certifications & achievements

- Information Technology AAS
- IT Computer Science Certification
- IT Database Administrator Certification
- IT Essentials Certification
- IT, Workplace Essentials Certification
- Microsoft Office Suite Certification
- CompTIA A+ Core 2 Certification
- IT Technical Support Specialist
- Autodesk Inventor 3D Certification
- SolidWorks Academic Certification

## Projects

### Featured

**Open Range** (resume only, not on old site) — iOS golf rangefinder, in testing
- One-time pin mapping: drop and label all 18 greens
- Instant on-device yardages to any green using phone GPS
- Automatically remembers courses for every round
- Tech: Swift / iOS, GPS / CoreLocation
- Repo: none listed

**Meeting Pair AI** — closed-source AI meeting assistant with "always-on-top" UX
- Real-time transcription of system audio with OpenAI Whisper; generates well-written notes into an app of choice
- Ollama models for backend processes (vision, speech-to-text), fully local
- Tech: Python, Whisper, Ollama, AI/ML
- Repo: https://github.com/merrittcmason/Meeting-Pair-AI

**Smart Bus** — AI-powered business automation sim via AI agents
- Lets users build automation for their business; agents run marketing, finance, inventory, operations, even employees
- Tech: Python, AI Agents, Automation, Business Intelligence
- Repo: https://github.com/merrittcmason/Smart-Bus

**RoR Web Scraper** — fast web scraping tool for rapid data extraction with advanced parsing
- Tech: Python, Web Scraping, Data Processing, Automation
- Repo: https://github.com/merrittcmason/Rob-Web-Scraper

### Other

**Poker Game (Java)** — casino simulation: card dealing, hand evaluation, standard poker scoring
- Tech: Java, OOP, Game Logic
- Repo: https://github.com/merrittcmason/Poker-Project/tree/main

**Password Generator** — desktop app for secure customizable passwords with 1Password integration
- Tech: Python, Desktop App, Security, API Integration
- Repo: https://github.com/merrittcmason/Password-Generator

**Basic Chatbot** — customizable React chatbot component with implementation guide
- Tech: React, TypeScript, UI/UX, Component Library
- Repo: https://github.com/merrittcmason/Basic-React-Chatbot

**merrittmason.com (v1)** — old personal site: TypeScript, React, Tailwind CSS, Vite, deployed on Vercel
- Repo: https://github.com/merrittcmason/merrittmason.com

Old site used Unsplash stock photos for project cards. None kept; new site needs real screenshots or none.

## Testimonials (DISABLED on old site — placeholder data, NOT real clients)

Page and route were commented out. Names (Sarah Johnson, Michael Chen, Emily Rodriguez, David Thompson)
and quotes were sample content. Dropped. Only re-add with real, permissioned quotes.

## Assets (`content/assets/`)

| File | What | Notes |
|---|---|---|
| `headshot.png` | 1254×1254 color headshot, suit, dark bg | used on old About hero |
| `portrait-dark.jpg` | 1024×1536 B&W dramatic portrait | "Updated Self-Portrait" commit, unused on old site |
| `IMG_0344-original.png` | 3024×4032 phone photo, 9.8 MB | unused; source photo, compress or drop before shipping |
| `merritt_mason_resume.pdf` | 1-page resume | served at /resume |
| `favicon-mm.svg` | crimson "M" monogram | |

Dropped: `Poker.jpeg` (275×183 stock image, not personal).

## URLs to preserve (old `vercel.json` redirects, keep in `next.config` redirects)

- `/resume` → resume PDF
- `/merrittcmason.pdf` → resume PDF
- `/mm_resumeC.pdf` → resume PDF

Old routes: `/` (About), `/projects`, `/contact`. Vercel Analytics was installed.

## Update 2026-10-25: current work (from Merritt, verbatim-ish)

- **Product Engineer at Coretek 360** (Concord, NC). ITAD company: data destruction to NIST 800-88, asset recovery, data center decommissioning. Start date: TBD.
- **Founder of AVERASE** (averase.com, app.averase.com, docs.averase.com), under MAESON Technologies. NIST + R2 compliant data-wiping and IT asset inventory platform. Rails app on a Jumpstart Pro template. Boots from ISO, hardware fingerprinting and tests, per-drive wipes, signed certificates, hotswap edition, inventory grid, API keys/integrations. Pricing: $0.75/wipe PAYG, $60–75/user/mo subscriptions. Coretek 360 is a customer.
- **Built coretek360.com** (Next.js).
- **Built habitatrowan.org** (nonprofit, Habitat for Humanity of Rowan County). Site blocks bots, stack unknown.
- At Coretek 360: shared workspace environment (Cloudflare OS); trained and self-hosted vision + multi-function LLMs; built the CRM; marketing campaigns; AI automation and workflows; ID badge generation service; custom email signatures with tracking.
