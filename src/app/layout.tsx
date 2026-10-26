import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syncopate } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const syncopate = Syncopate({ variable: "--font-syncopate", subsets: ["latin"], weight: ["400", "700"] });

const SITE_URL = "https://www.merrittmason.com";
const SEO_TITLE = `${site.name} | ${site.role}, ${site.location}`;
const SEO_DESCRIPTION =
  "Merritt Mason is a software developer and Product Engineer in Charlotte, NC. Product Engineer at Coretek 360 and founder of AVERASE, a NIST 800-88 compliant data-wiping and IT asset inventory platform.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#03050c" },
    { media: "(prefers-color-scheme: light)", color: "#eef2ff" },
  ],
};

export const metadata: Metadata = {
  title: "merrittmason.com",
  description: SEO_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: "merrittmason.com",
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  keywords: ["Merritt Mason", "software developer", "product engineer", "Charlotte NC", "AVERASE", "Coretek 360"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "merrittmason.com",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    locale: "en_US",
    firstName: "Merritt",
    lastName: "Mason",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "merrittmason.com",
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: `${SITE_URL}/`,
      name: SEO_TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.name,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/profile.jpg`,
      email: `mailto:${site.email}`,
      jobTitle: site.role,
      description: SEO_DESCRIPTION,
      worksFor: { "@type": "Organization", name: "Coretek 360", url: "https://coretek360.com" },
      address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "The University of Alabama", url: "https://www.ua.edu/" },
        { "@type": "CollegeOrUniversity", name: "Rowan-Cabarrus Community College", url: "https://www.rccc.edu/" },
      ],
      knowsAbout: [
        "Software development",
        "Python",
        "TypeScript",
        "Ruby on Rails",
        "Next.js",
        "iOS development",
        "IT asset disposition",
        "Self-hosted AI and LLMs",
      ],
      sameAs: [site.github, site.linkedin],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
