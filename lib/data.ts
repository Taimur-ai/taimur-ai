// ============================================================
// lib/data.ts — Central data layer for taimur.ai
// ============================================================

export type JourneyEntry = {
  day: number;
  slug: string;
  date: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "reflection" | "tool-review" | "case-study" | "video";
  phase: "ai-purchase" | "ai-invoicing" | "ai-reporting" | "ai-finance-strategy" | "ai-finance-function";
  summary: string;
  content: string;
  tags: string[];
  keywords: string[];
  readTime: number;
};

export const PHASES = [
  { key: "all", label: "All Days", range: "", description: "Every entry from Day 0 to today" },
  { key: "ai-purchase", label: "AI Purchase System", range: "", description: "Building AI-powered procurement and purchase order automation" },
  { key: "ai-invoicing", label: "AI Invoicing System", range: "", description: "Automating invoice processing, matching, and payment workflows" },
  { key: "ai-reporting", label: "AI Reporting System", range: "", description: "AI-generated financial reports, variance analysis, and dashboards" },
  { key: "ai-finance-strategy", label: "AI Finance Strategy", range: "", description: "Using AI for forecasting, planning, and strategic decision-making" },
  { key: "ai-finance-function", label: "AI Finance Function", range: "", description: "Transforming the entire finance function with AI-powered systems" },
];

export const CATEGORY_CONFIG = {
  reflection: { label: "Article", icon: "\u{1F4D6}", color: "#1a8a5c", description: "Lessons learned and mindset shifts" },
  "tool-review": { label: "Tool Review", icon: "\u{1F527}", color: "#2563eb", description: "Honest reviews of AI tools for finance" },
  "case-study": { label: "Case Study", icon: "\u{1F4CA}", color: "#d97706", description: "Real-world AI implementations in finance" },
  video: { label: "Video", icon: "\u{1F3AC}", color: "#dc2626", description: "Video walkthroughs and demonstrations" },
};

export const JOURNEY_DATA: JourneyEntry[] = [
  {
    day: 0,
    slug: "day-0-the-start",
    date: "2026-03-18",
    title: "Day 0 — The Start: Why I'm Building AI Systems for Finance",
    metaTitle: "Day 0: The Start of My AI Finance Journey | taimur.ai",
    metaDescription: "After 11 years in finance, today is Day 0. I'm documenting every step of building AI systems that will transform how businesses handle money. Follow the journey.",
    category: "reflection",
    phase: "ai-finance-function",
    summary: "This is Day 0. After 11 years working in finance across big corporations and AI startups, I've made a decision that will define the next chapter of my career. I'm going to build AI-powered systems for every corner of the finance function — and document every single step publicly.",
    content: `This is Day 0. The very beginning.

## Why Today?

After 11 years working in finance — from large corporations to lean startups building AI software — I've seen both sides of the equation. I've seen the tedious, manual, repetitive work that drains finance teams. And I've seen what AI can do when applied thoughtfully.

The gap between the two is enormous. And closing that gap is now my mission.

## What I'm Building

I'm not just learning about AI. I'm building real systems:
- An AI-powered purchase order system
- An intelligent invoicing and matching engine
- Automated financial reporting
- AI-driven finance strategy tools
- A complete AI-augmented finance function

Each one will be documented from concept to implementation, with full transparency about what works, what fails, and what I learn along the way.

## Why Public?

Every accountant and finance professional I speak to has the same questions: Where do I start? Will AI replace me? How do I stay relevant?

I don't have all the answers yet. But by documenting this journey publicly, I'm creating something that didn't exist when I started looking — a real, honest, day-by-day account of what it actually takes to transform finance with AI.

## My Starting Point
- ACCA-qualified with 11+ years in finance
- Experience across corporate accounting and AI startups
- Strong in Excel, building skills in Python
- Determined, curious, and ready to start

No filters. No shortcuts. Just progress.

The journey starts now.`,
    tags: ["Day 0", "New Beginning", "AI Finance", "ACCA", "Mission"],
    keywords: ["ai finance journey", "accountant learning ai", "ai transformation finance", "building ai systems accounting", "day 0 ai journey"],
    readTime: 4,
  },
  {
    day: 0,
    slug: "week-1-the-direction",
    date: "2026-03-18",
    title: "Week 1 — The Direction: Mapping the AI Finance Landscape",
    metaTitle: "Week 1: Mapping the AI Finance Landscape | taimur.ai",
    metaDescription: "Mapping out the entire AI finance landscape — which tools exist, where the gaps are, and which systems I'll build first. The strategic roadmap for my journey.",
    category: "reflection",
    phase: "ai-finance-strategy",
    summary: "Before building anything, I need a map. This entry lays out the entire AI finance landscape as I see it — which tools exist, where the gaps are, what's overhyped, and which systems I'll tackle first. This is the strategic roadmap.",
    content: `Before I write a single line of code or test a single tool, I need to understand the terrain.

## The AI Finance Landscape in 2026

The finance AI space is exploding. But most of what's out there falls into a few categories:
- Bookkeeping automation (Dext, Hubdoc, receipt scanning)
- Copilots that sit inside existing tools (Microsoft Copilot, Google Duet)
- Standalone AI accounting platforms (trying to replace entire workflows)
- LLMs being used as general-purpose assistants

What's missing? Systems that are purpose-built by finance professionals who actually understand the workflows, the edge cases, and the judgment calls that matter.

## The Five Systems I'll Build

After mapping everything out, here's my plan of attack:

1. **AI Purchase System** — Automating procurement from requisition to PO approval
2. **AI Invoicing System** — Intelligent invoice capture, matching, and payment workflows
3. **AI Reporting System** — Automated financial reports, variance analysis, and board packs
4. **AI Finance Strategy** — Forecasting, scenario planning, and strategic recommendations
5. **AI Finance Function** — Tying it all together into a cohesive, AI-powered finance department

## How I'll Prioritise

I'm starting with the areas that have the highest manual effort and the most structured data — invoicing and reporting. These are the low-hanging fruit where AI can demonstrate clear, measurable impact.

Strategy and the full finance function come later — they require the foundation to be in place first.

## What Success Looks Like

By the end of this journey, I want to have built working prototypes for each system, documented every lesson learned, and created a resource that any finance professional can follow to start their own transformation.

The direction is set. Now it's time to move.`,
    tags: ["Strategy", "Roadmap", "AI Landscape", "Planning", "Finance Systems"],
    keywords: ["ai finance landscape 2026", "ai tools for finance professionals", "building ai finance systems", "ai accounting roadmap", "finance automation strategy"],
    readTime: 5,
  },
  {
    day: 0,
    slug: "the-understanding",
    date: "2026-03-18",
    title: "The Understanding: What AI Can and Cannot Do for Finance",
    metaTitle: "What AI Can and Cannot Do for Finance | taimur.ai",
    metaDescription: "An honest assessment of where AI excels in finance, where it falls short, and why human judgment still matters. Essential reading before starting any AI project.",
    category: "reflection",
    phase: "ai-finance-function",
    summary: "Before diving into building, I need to be honest about what AI can actually do today — and where it still falls short. This is the reality check every finance professional needs before starting their AI journey.",
    content: `This might be the most important entry I'll ever write.

## What AI Does Brilliantly in Finance

Let me be clear — AI is genuinely transformative for certain finance tasks:
- Pattern matching across thousands of transactions
- Extracting data from invoices, receipts, and documents
- First-draft financial commentary and variance analysis
- Anomaly detection and fraud flagging
- Categorising and coding transactions
- Generating routine reports from structured data

These tasks share common traits: they're repetitive, rule-based, and benefit from processing speed rather than judgment.

## Where AI Still Falls Short

And here's where honesty matters:
- Complex judgment calls (going concern, impairment triggers, provisions)
- Interpreting ambiguous contracts and side agreements
- Understanding business context that isn't in the data
- Navigating regulatory nuance across jurisdictions
- Client relationships and trusted advisor conversations
- Ethical reasoning when numbers could be presented multiple ways

## The Critical Insight

AI is not replacing accountants. It's replacing the parts of accounting that accountants never should have been doing manually in the first place.

The future belongs to finance professionals who can:
1. Use AI to handle the mechanical work
2. Apply professional judgment to the exceptions
3. Spend their time on strategy, relationships, and decisions

That's exactly what I'm building toward.

## My Principles for This Journey

1. **Honesty over hype** — I'll share what actually works, not what sounds impressive
2. **Practical over theoretical** — Every entry will be grounded in real workflows
3. **Progressive complexity** — Start simple, build up
4. **Always human-in-the-loop** — AI assists, humans decide

With this understanding in place, I'm ready to start building. The foundation is set.`,
    tags: ["AI Limitations", "Reality Check", "Professional Judgment", "Principles", "Foundation"],
    keywords: ["what ai can do in finance", "ai limitations accounting", "ai vs accountants", "human judgment ai finance", "ai reality check accounting"],
    readTime: 6,
  },
];

// Helper: get entry by slug
export function getEntryBySlug(slug: string): JourneyEntry | undefined {
  return JOURNEY_DATA.find(e => e.slug === slug);
}

// Helper: get all slugs for static generation
export function getAllSlugs(): string[] {
  return JOURNEY_DATA.map(e => e.slug);
}

// Helper: get related entries
export function getRelatedEntries(entry: JourneyEntry, limit = 3): JourneyEntry[] {
  return JOURNEY_DATA
    .filter(e => e.slug !== entry.slug)
    .slice(0, limit);
}

// Portfolio data — Day 0, no results yet
export const PORTFOLIO_DATA: any[] = [];

// Tools data — reviewSlug links to dedicated review pages (SEO driver)
export const TOOLS_DATA = [
  { name: "ChatGPT / Claude", use: "Financial analysis, report writing, data interpretation", status: "Active", icon: "\u{1F916}", reviewSlug: "how-i-use-claude-for-finance" },
  { name: "Microsoft Copilot", use: "Excel automation, PowerPoint generation", status: "Exploring", icon: "\u{1F4CA}", reviewSlug: null },
  { name: "Tableau AI", use: "Automated data visualisation & dashboards", status: "Learning", icon: "\u{1F4C8}", reviewSlug: null },
  { name: "Dext / Hubdoc", use: "AI-powered receipt & invoice processing", status: "Active", icon: "\u{1F9FE}", reviewSlug: "how-i-use-dext-for-invoice-processing" },
  { name: "Cascade.io", use: "AI-first financial planning & modelling", status: "Researching", icon: "\u{1F4A1}", reviewSlug: null },
  { name: "Trullion", use: "AI for audit & lease accounting", status: "Watchlist", icon: "\u{1F50D}", reviewSlug: null },
];

// Site-wide SEO constants
export const SITE = {
  name: "taimur.ai",
  title: "taimur.ai \u2014 An Accountant\u2019s Daily AI Transformation Journey",
  description: "Qualified, experienced finance manager on a mission to master AI and build intelligent systems that elevate businesses to new heights. Documenting a never-ending journey to perfection.",
  url: "https://www.taimur.ai",
  author: "Taimur G",
  authorTitle: "Qualified Finance Manager & AI Architect",
  socials: {
    youtube: "https://www.youtube.com/@Taimur_G1",
    tiktok: "https://www.tiktok.com/@taimur_g",
    instagram: "https://www.instagram.com/taimurg1/",
  },
  keywords: [
    "AI in accounting",
    "AI for finance professionals",
    "accountant learning AI",
    "AI tools for accountants",
    "finance automation",
    "AI month-end close",
    "python for accountants",
    "AI transformation journey",
    "ACCA AI",
    "future of accounting",
    "AI finance architect",
    "AI invoicing system",
    "AI purchase system",
    "AI reporting system",
  ],
};
