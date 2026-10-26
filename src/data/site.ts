// Source of truth: content/profile.md. Copy marked EDITABLE is framing text, not facts.

export const site = {
  name: "Merritt Mason",
  initials: "MM",
  role: "Product Engineer",
  tagline: "Product · AI · Systems",
  year: "2025–2026",
  location: "Charlotte, NC",
  timeZone: "America/New_York",
  email: "contact@merrittmason.com",
  github: "https://github.com/merrittcmason",
  linkedin: "https://linkedin.com/in/merrittcmason",
  bio: "Product engineer at Coretek 360 and founder of AVERASE, a NIST and R2 compliant data-wiping and inventory platform. I build the whole stack: products, internal tools, self-hosted AI, and the automation that ties them together.",
  mastheadWords: ["Build", "Ship", "Automate"],
};

export type CategoryKey = "products" | "ai" | "web" | "tools" | "software";
export type Tone = "duke" | "carolina" | "powder" | "ocean" | "midnight" | "blue";

export type Category = {
  key: CategoryKey;
  label: string;
  title: string;
  tone: Tone;
};

export const categories: Category[] = [
  { key: "products", label: "Products", title: "Products", tone: "duke" },
  { key: "ai", label: "AI", title: "AI & LLMs", tone: "carolina" },
  { key: "web", label: "Web", title: "Websites", tone: "powder" },
  { key: "tools", label: "Tools", title: "Internal Tools", tone: "ocean" },
  { key: "software", label: "Software", title: "Apps & Games", tone: "midnight" },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  code: string;
  category: CategoryKey;
  language: string;
  description: string;
  bullets: string[];
  tech: string[];
  repo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "averase",
    title: "AVERASE",
    subtitle: "Data wiping & IT asset inventory platform",
    code: "AVR",
    category: "products",
    language: "Rails",
    description:
      "My company's product. A NIST and R2 compliant data-wiping and inventory platform for IT refurbishers and resale shops. Boots from an ISO, fingerprints the machine, tests the hardware, wipes every drive, and issues a signed certificate per serial.",
    bullets: [
      "Rails app built on a Jumpstart Pro template: app.averase.com, docs.averase.com",
      "Boot-time hardware fingerprinting, hardware tests, NVMe Sanitize and ATA Secure Erase",
      "Tamper-proof signed certificates, hotswap bay edition, inventory grid, API keys and integrations",
      "Pay-as-you-go and per-user subscription pricing",
    ],
    tech: ["Ruby on Rails", "Jumpstart Pro", "Linux", "NIST 800-88", "Stripe"],
    link: "https://averase.com",
  },
  {
    slug: "coretek360-com",
    title: "coretek360.com",
    subtitle: "Marketing site for an ITAD company",
    code: "CTK",
    category: "web",
    language: "Next.js",
    description:
      "Built the public site for Coretek 360, an IT asset disposition company serving regulated industries across the US and 14+ countries. Solutions, industries, resources, quote and support flows.",
    bullets: [
      "Solutions, industries, and resources sections with quote and support entry points",
      "Built on Next.js with optimized images",
      "Positioned for healthcare, education, legal, and enterprise buyers",
    ],
    tech: ["Next.js", "React", "TypeScript"],
    link: "https://coretek360.com",
  },
  {
    slug: "habitat-rowan",
    title: "habitatrowan.org",
    subtitle: "Nonprofit website",
    code: "HFH",
    category: "web",
    language: "Web",
    description:
      "Website for Habitat for Humanity of Rowan County, a nonprofit building and repairing homes in Rowan County, NC. Built pro bono.",
    bullets: ["Nonprofit site built pro bono", "Donation, volunteer, and ReStore entry points", "Easy for staff to keep updated"],
    tech: ["Web", "CMS"],
    link: "https://habitatrowan.org",
  },
  {
    slug: "llm-hosting",
    title: "Self-hosted Vision & Multimodal LLMs",
    subtitle: "Trained and hosted for Coretek 360",
    code: "LLM",
    category: "ai",
    language: "Python",
    description:
      "Trained and self-hosted vision and multi-function language models for internal use at Coretek 360, so sensitive asset data never leaves the company.",
    bullets: ["Vision models for hardware and asset recognition", "Multi-function LLMs serving internal workflows", "Hosted on company infrastructure, no third-party API exposure"],
    tech: ["Python", "PyTorch", "Ollama", "Vision models", "LLMs"],
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Workflows",
    subtitle: "Agents and pipelines across the business",
    code: "AUT",
    category: "ai",
    language: "Python",
    description:
      "AI-driven automation and workflows that connect the CRM, inventory, marketing, and operations at Coretek 360.",
    bullets: ["Agent-driven workflows across departments", "Document and data extraction pipelines", "Marketing campaign automation"],
    tech: ["Python", "AI Agents", "Automation", "APIs"],
  },
  {
    slug: "shared-workspace",
    title: "Shared Workspace Environment",
    subtitle: "Built on Cloudflare OS",
    code: "WKS",
    category: "tools",
    language: "Cloudflare",
    description: "A shared workspace environment for the Coretek 360 team, built on Cloudflare OS: common tooling, access, and resources in one managed place at the edge.",
    bullets: ["Cloudflare OS workspaces and gadgets for the team", "Centralized tooling and access on Cloudflare's edge", "No servers to manage"],
    tech: ["Cloudflare OS", "Cloudflare Workers", "Edge"],
  },
  {
    slug: "coretek-crm",
    title: "Coretek 360 CRM",
    subtitle: "Custom CRM built in-house",
    code: "CRM",
    category: "tools",
    language: "Rails",
    description: "A CRM built from scratch for Coretek 360's sales and operations, replacing off-the-shelf tools with something fitted to ITAD workflows.",
    bullets: ["Leads, accounts, and pipeline tailored to ITAD", "Tied into marketing and automation", "Email signature and tracking built in"],
    tech: ["Ruby on Rails", "PostgreSQL", "APIs"],
  },
  {
    slug: "badge-service",
    title: "ID Badge Generation Service",
    subtitle: "Badges on demand",
    code: "BDG",
    category: "tools",
    language: "Rails",
    description: "A service that generates employee ID badges for Coretek 360 from directory data, print-ready.",
    bullets: ["Generates print-ready badges from employee records", "Consistent branding and layout", "Self-serve for HR and operations"],
    tech: ["Ruby on Rails", "PDF generation"],
  },
  {
    slug: "email-signature",
    title: "Email Signatures & Tracking",
    subtitle: "Custom signatures with open tracking",
    code: "SIG",
    category: "tools",
    language: "Rails",
    description: "Custom branded email signatures for the whole company, with tracking so sales knows what gets opened.",
    bullets: ["Centrally managed, branded signatures", "Open and link tracking", "Feeds into the CRM"],
    tech: ["HTML Email", "Tracking", "Ruby on Rails"],
  },
  {
    slug: "marketing-campaign",
    title: "Marketing Campaigns",
    subtitle: "Campaigns for Coretek 360",
    code: "MKT",
    category: "products",
    language: "Marketing",
    description: "Planned and ran marketing campaigns for Coretek 360, with AI-assisted content and automated follow-up tied into the CRM.",
    bullets: ["Campaign strategy and execution", "AI-assisted content production", "Automated follow-up through the CRM"],
    tech: ["Email", "Content", "Automation", "Analytics"],
  },
  {
    slug: "meeting-pair-ai",
    title: "Meeting Pair AI",
    subtitle: "Always-on-top meeting assistant",
    code: "MPA",
    category: "ai",
    language: "Python",
    description:
      "Closed-source AI meeting assistant with an always-on-top UX. Transcribes system audio in real time and turns it into well-written notes in the app of your choice.",
    bullets: [
      "Real-time transcription of system audio with OpenAI Whisper",
      "Ollama models for vision and speech-to-text, fully local",
      "Notes written straight into the app you already use",
    ],
    tech: ["Python", "Whisper", "Ollama", "AI/ML"],
    repo: "https://github.com/merrittcmason/Meeting-Pair-AI",
  },
  {
    slug: "smart-bus",
    title: "Smart Bus",
    subtitle: "AI agents for business automation",
    code: "SB",
    category: "ai",
    language: "Python",
    description:
      "AI-powered business automation sim built on agents. Lets users build automation for their business without wiring every step by hand.",
    bullets: ["Agents run marketing, finance, inventory, and operations", "Agents can even stand in for employees", "Business intelligence surfaced from the agents' work"],
    tech: ["Python", "AI Agents", "Automation", "Business Intelligence"],
    repo: "https://github.com/merrittcmason/Smart-Bus",
  },
  {
    slug: "open-range",
    title: "Open Range",
    subtitle: "iOS golf rangefinder",
    code: "OR",
    category: "software",
    language: "Swift",
    description: "iOS golf rangefinder, currently in testing. Instant yardages to any sky from your phone, no extra hardware.",
    bullets: ["One-time pin mapping: drop and label all 18 greens", "Instant on-device yardages using the phone's GPS", "Remembers your courses for every round"],
    tech: ["Swift", "iOS", "GPS"],
  },
  {
    slug: "merrittmason-com",
    title: "merrittmason.com",
    subtitle: "This site",
    code: "MM",
    category: "web",
    language: "Next.js",
    description:
      "Personal site. The first version was TypeScript, React, Tailwind, and Vite. This version is a ground-up rebuild on Next.js with the App Router.",
    bullets: ["Next.js App Router, React, TypeScript", "Tailwind v4 with a tokenized dark and light theme", "Zero runtime dependencies beyond the framework"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    repo: "https://github.com/merrittcmason/merrittmason.com",
  },
  {
    slug: "ror-web-scraper",
    title: "RoR Web Scraper",
    subtitle: "Rapid data extraction",
    code: "RWS",
    category: "software",
    language: "Python",
    description: "Fast, efficient scraping tool built for rapid data extraction from a range of websites, with advanced parsing on top.",
    bullets: ["Rapid extraction across many site structures", "Advanced parsing for clean, usable output", "Built for repeatable, automated runs"],
    tech: ["Python", "Web Scraping", "Data Processing", "Automation"],
    repo: "https://github.com/merrittcmason/Rob-Web-Scraper",
  },
  {
    slug: "basic-react-chatbot",
    title: "Basic Chatbot",
    subtitle: "Drop-in React chat component",
    code: "BRC",
    category: "web",
    language: "TypeScript",
    description: "Fully customizable React chatbot component for websites and apps, with an implementation guide so it drops into any project.",
    bullets: ["Customizable UI and behavior", "Easy navigation and integration", "Ships with a step-by-step implementation guide"],
    tech: ["React", "TypeScript", "UI/UX", "Component Library"],
    repo: "https://github.com/merrittcmason/Basic-React-Chatbot",
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    subtitle: "Secure passwords, 1Password ready",
    code: "PG",
    category: "software",
    language: "Python",
    description: "Desktop app for creating secure, customizable passwords, integrated with 1Password for seamless password management.",
    bullets: ["Customizable length and character rules", "1Password integration via API", "Desktop-native workflow"],
    tech: ["Python", "Desktop App", "Security", "API Integration"],
    repo: "https://github.com/merrittcmason/Password-Generator",
  },
  {
    slug: "poker-game",
    title: "Poker Game",
    subtitle: "Casino simulation in Java",
    code: "PKR",
    category: "software",
    language: "Java",
    description: "Classic casino simulation built in Java with card dealing, hand evaluation, and standard poker scoring rules.",
    bullets: ["Card dealing and deck management", "Hand evaluation engine", "Standard poker scoring rules"],
    tech: ["Java", "OOP", "Game Logic"],
    repo: "https://github.com/merrittcmason/Poker-Project/tree/main",
  },
];

export const chapters = [
  {
    id: "about",
    title: "ABOUT ME",
    sub: "Who I am",
    page: "03",
    points: ["Skills", "Experience", "Education", "Interests"],
  },
  { id: "work", title: "SELECTED WORK", sub: "What I've built", page: "04", points: ["AVERASE", "Coretek 360", "AI & LLMs", "Internal tools"] },
  { id: "process", title: "HOW I BUILD", sub: "Scope to ship", page: "05", points: ["Scope", "Design", "Build", "Ship"] },
  { id: "credentials", title: "CREDENTIALS", sub: "Degrees and certs", page: "06", points: ["Education", "CompTIA", "CAD"] },
  { id: "contact", title: "GET IN TOUCH", sub: "Say hello", page: "07", points: ["Email", "GitHub", "LinkedIn"] },
];

export const aboutTags = [
  {
    tone: "sky" as const,
    label: "Product engineer",
    points: ["Product engineer at Coretek 360", "Founder of AVERASE, a Rails data-wiping platform", "Built coretek360.com and habitatrowan.org"],
  },
  {
    tone: "blue" as const,
    label: "AI & automation",
    points: ["Trained and self-hosted vision and multimodal LLMs", "AI automation and workflows across the business", "Local-first: Whisper, Ollama, agents"],
  },
  {
    tone: "sky" as const,
    label: "Internal tools & IT",
    points: ["Custom CRM, ID badge service, email signatures with tracking", "Shared workspace environment on Cloudflare OS", "CS + IT student, CompTIA A+ certified"],
  },
];

// TODO: fill in real dates from linkedin.com/in/merrittcmason.
export const experience = [
  { dates: "Intern", role: "Technical Intern", org: "Coretek 360", place: "Concord, NC" },
  { dates: "Now", role: "Product Engineer", org: "Coretek 360", place: "Concord, NC" },
  { dates: "Founder", role: "AVERASE", org: "MAESON Technologies", place: "NC" },
];

export const education = [
  { dates: "2022–2026", degree: "Computer Science BSc", school: "The University of Alabama", place: "Tuscaloosa, AL", tone: "blue" as const },
  { dates: "2024–2026", degree: "IT Programming & Development AAS", school: "Rowan-Cabarrus Community College", place: "Salisbury, NC", tone: "sky" as const },
];

export const certifications = [
  "CompTIA A+ Core 2",
  "Information Technology AAS",
  "IT Computer Science",
  "IT Database Administrator",
  "IT Essentials",
  "IT Workplace Essentials",
  "IT Technical Support Specialist",
  "Microsoft Office Suite",
  "Autodesk Inventor 3D",
  "SolidWorks Academic",
];

export const skills = {
  languages: ["Python", "Rust", "Java", "JavaScript", "TypeScript", "C", "C++", "C#", "Ruby on Rails", "SQL", "React"],
  development: ["Full-Stack Development", "iOS/Swift Development", "Automation & Web Scraping", "API Integration"],
  it: ["Penetration Testing", "Kali Linux", "Network Security", "Ethical Hacking", "System Hardening", "Database Management"],
  ai: ["AI/ML Model Training", "Prompt Engineering", "CAD Design", "Hardware Assembly", "System Administration"],
};

// EDITABLE: framing copy for the process section.
export const processSteps = [
  {
    n: "01",
    title: "SCOPE",
    sub: "Define",
    days: "Day 1–2",
    text: "Start with the problem, not the stack. Who uses it, what they do today, and the one thing the first version has to do well.",
    chips: ["User story", "Constraints", "One-line goal"],
  },
  {
    n: "02",
    title: "DESIGN",
    sub: "Plan",
    days: "Day 3–5",
    text: "Pick the architecture that fits the problem. Data model, API surface, and the parts that can run locally before anything touches a server.",
    chips: ["Data model", "API sketch", "Local-first"],
  },
  {
    n: "03",
    title: "BUILD",
    sub: "Make",
    days: "Week 2+",
    text: "Ship the thin vertical slice first, then widen. Typed code, small commits, and a working build at the end of every day.",
    chips: ["Vertical slice", "TypeScript", "Daily builds"],
  },
  {
    n: "04",
    title: "SHIP",
    sub: "Harden",
    days: "Final week",
    text: "Test on real devices, lock down what's exposed, and write the README so the next person, or future me, can run it in five minutes.",
    chips: ["Device testing", "Hardening", "README"],
  },
];

export const sections = [
  { id: "cover", label: "Cover" },
  { id: "contents", label: "Contents" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
