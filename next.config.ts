import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Old SPA routes -> sections on the single page
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/testimonials", destination: "/", permanent: true },
      // Resume aliases carried over from the old vercel.json
      { source: "/resume", destination: "/merritt_mason_resume.pdf", permanent: true },
      { source: "/merrittcmason.pdf", destination: "/merritt_mason_resume.pdf", permanent: true },
      { source: "/mm_resumeC.pdf", destination: "/merritt_mason_resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
