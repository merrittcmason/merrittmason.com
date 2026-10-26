# Sitemap — merrittmason.com

**Score: 0/100.** No sitemap at `/sitemap.xml` or any fallback path; no `Sitemap:` directive (robots.txt is itself 404).

Site is a single page plus a PDF, so the sitemap is small but still required for clean discovery and GSC reporting.

## Fix (Next.js 16)
```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.merrittmason.com/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
```
```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: "https://www.merrittmason.com/sitemap.xml" };
}
```
Quality gates: host must match metadataBase; exclude the resume PDF unless it should rank; old SPA routes (`/about`, `/projects`, `/testimonials`, `/contact`) should 301 to `/#section`, not appear in sitemap. Submit in Google Search Console after deploy.
