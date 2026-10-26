# Images — merrittmason.com

**Score: 35/100.**

## Live site inventory
| Path | Status | Bytes | Notes |
|---|---|---|---|
| /headshot.PNG | 200 | 2,119,525 | Only image in rendered DOM; `alt="Merritt Mason"` present; rendered 256 px; no width/height; PNG |
| /IMG_0344.png | 200 | 9,806,964 | Publicly served, not referenced on homepage (possibly /projects) |
| /darkshot1.jpg | 200 | 366,539 | Served, not referenced in bundle |
| /Poker.jpeg | 200 | 10,487 | Orphan |
| /assets/favicon-*.svg | 200 | small | OK |

## Findings
| # | Title | Severity | Evidence | Fix |
|---|---|---|---|---|
| 1 | Hero image 2.1 MB PNG | Critical | 1254x1254 for a 256 px slot | `next/image` -> AVIF/WebP, sized |
| 2 | 9.8 MB PNG publicly reachable | High | /IMG_0344.png 200 | Drop from public/ (rebuild already moved it to content/assets) |
| 3 | No OG / social image | High | no `og:image` | `app/opengraph-image.tsx` or `public/og.png` 1200x630 built from profile.jpg |
| 4 | Missing width/height | Medium | `<img>` lacks dimensions | `next/image` |
| 5 | Orphan assets | Low | darkshot1.jpg, Poker.jpeg | Remove from public/ |

## Rebuild status (local, uncommitted)
`public/profile.jpg` 1200x1600, 341 KB, used via `next/image` with `fill`, `sizes="(min-width:1024px) 30vw, 90vw"`, `priority`, `alt={site.name}`. Good. Alt text is just the name; "Merritt Mason, software developer in Charlotte NC" is slightly better. Add OG image.
