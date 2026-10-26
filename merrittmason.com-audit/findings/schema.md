# Schema / Structured Data — merrittmason.com

**Score: 5/100.** Live page: 0 JSON-LD / microdata blocks. New Next.js layout.tsx has `metadata` only, no schema.

## Findings
| # | Title | Severity | Evidence | Fix |
|---|---|---|---|---|
| 1 | No structured data | High | render_page.py `structured_data.block_count: 0` | Add Person + WebSite + ProfilePage `@graph` below |
| 2 | No Person entity with sameAs | High | GitHub/LinkedIn only in content/profile.md | Include `sameAs`, `jobTitle`, `alumniOf`, `address` |
| 3 | Host mismatch | Medium | metadataBase apex vs live www | One canonical host in metadataBase, canonical tag, every `@id`/`url` |
| 4 | jobTitle / worksFor unconfirmed | Medium | profile.md: Product Engineer at Coretek 360, start "TBD"; degrees end 05/2026 | Confirm role is current, then add `worksFor: { Organization "Coretek 360", url https://coretek360.com }`; optionally `founder` of AVERASE |
| 5 | Phone number | Info | In profile.md, hidden on old site | Excluded from JSON-LD |
| 6 | Project markup | Low | Projects on page | Later: `SoftwareSourceCode` / `ItemList`; no rich result expected |

No rich result is guaranteed for Person/ProfilePage; benefit is entity disambiguation for Google and AI engines (several other "Merritt Mason"s exist in SERPs).

## Ready-to-paste (src/app/layout.tsx)
```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.merrittmason.com/#website",
      url: "https://www.merrittmason.com/",
      name: "Merritt Mason",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.merrittmason.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.merrittmason.com/#profilepage",
      url: "https://www.merrittmason.com/",
      name: "Merritt Mason - Software Developer",
      isPartOf: { "@id": "https://www.merrittmason.com/#website" },
      mainEntity: { "@id": "https://www.merrittmason.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://www.merrittmason.com/#person",
      name: "Merritt Mason",
      url: "https://www.merrittmason.com/",
      image: "https://www.merrittmason.com/profile.jpg",
      email: "mailto:contact@merrittmason.com",
      jobTitle: "Product Engineer",
      description:
        "Software developer and IT professional in Charlotte, NC, working on software development, IT, and AI technologies.",
      address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "The University of Alabama", url: "https://www.ua.edu/" },
        { "@type": "CollegeOrUniversity", name: "Rowan-Cabarrus Community College", url: "https://www.rccc.edu/" },
      ],
      knowsAbout: ["Software development", "Python", "TypeScript", "Ruby on Rails", "iOS development", "IT asset disposition", "Artificial intelligence"],
      sameAs: ["https://github.com/merrittcmason", "https://linkedin.com/in/merrittcmason"],
    },
  ],
};

// inside <body>, before {children}:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
/>
```
Validated with JSON.parse (3 nodes, absolute URLs, no placeholders). Not run through Google Rich Results Test.
