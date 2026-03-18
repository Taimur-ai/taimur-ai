// ============================================================
// lib/data.ts — Central data layer for taimur.ai
// Each entry has SEO-optimised slug, meta description, keywords
// ============================================================

export type JourneyEntry = {
  day: number;
  slug: string;              // URL-friendly: /journey/automating-gl-reconciliation-with-gpt4
  date: string;
  title: string;             // H1 — keyword-rich
  metaTitle: string;         // <title> tag — max 60 chars
  metaDescription: string;   // meta description — max 155 chars
  category: "reflection" | "tool-review" | "case-study" | "video";
  phase: "foundation" | "data-python" | "ml-finance" | "ai-agents";
  summary: string;           // First paragraph / excerpt
  content: string;           // Full article body (markdown-style)
  tags: string[];
  keywords: string[];        // Target SEO keywords
  readTime: number;          // minutes
};

export const PHASES = [
  { key: "all", label: "All Days", range: "", description: "Every entry from Day 1 to today" },
  { key: "foundation", label: "Foundation", range: "Days 1–30", description: "Building the basics of AI literacy for finance professionals" },
  { key: "data-python", label: "Data & Python", range: "Days 31–60", description: "Learning Python, pandas, and data manipulation for accounting" },
  { key: "ml-finance", label: "ML for Finance", range: "Days 61–90", description: "Machine learning models applied to real financial workflows" },
  { key: "ai-agents", label: "AI Agents", range: "Days 91+", description: "Autonomous AI agents transforming finance operations" },
];

export const CATEGORY_CONFIG = {
  reflection: { label: "Article", icon: "📖", color: "#1a8a5c", description: "Lessons learned and mindset shifts" },
  "tool-review": { label: "Tool Review", icon: "🔧", color: "#2563eb", description: "Honest reviews of AI tools for finance" },
  "case-study": { label: "Case Study", icon: "📊", color: "#d97706", description: "Real-world AI implementations in finance" },
  video: { label: "Video", icon: "🎬", color: "#dc2626", description: "Video walkthroughs and demonstrations" },
};

export const JOURNEY_DATA: JourneyEntry[] = [
  {
    day: 127,
    slug: "automating-gl-reconciliation-with-gpt4",
    date: "2026-03-15",
    title: "Automating GL Reconciliation with GPT-4: A Finance Manager's Guide",
    metaTitle: "Automating GL Reconciliation with GPT-4 | Day 127",
    metaDescription: "How I used GPT-4 to match and reconcile general ledger entries, reducing manual review time by 60%. Step-by-step walkthrough for accountants.",
    category: "video",
    phase: "ai-agents",
    summary: "Explored using large language models to match and reconcile general ledger entries, reducing manual review time by 60%.",
    content: `Today I tackled one of the most tedious tasks in accounting — GL reconciliation. Every month-end, finance teams spend hours manually matching entries across sub-ledgers. I wanted to see if GPT-4 could handle it.

## The Setup
I exported 3 months of GL data (2,400 entries) and corresponding bank statements. The challenge: entries don't match 1:1. You get partial matches, timing differences, and descriptions that vary wildly.

## What GPT-4 Did Well
- Pattern matching across different description formats (e.g., "AMZN*123" → "Amazon Web Services")
- Identifying timing differences and suggesting which entries to accrue
- Flagging genuine discrepancies that needed human review

## The Results
- **60% reduction** in manual review time
- **94% accuracy** on first-pass matching
- **12 genuine discrepancies** caught that I might have missed manually

## Key Takeaway
AI isn't replacing the reconciliation process — it's handling the mechanical matching so I can focus on investigating the exceptions. That's the real value.`,
    tags: ["GPT-4", "Reconciliation", "Automation", "General Ledger"],
    keywords: ["gl reconciliation automation", "gpt-4 accounting", "ai reconciliation finance", "automate month-end reconciliation"],
    readTime: 5,
  },
  {
    day: 126,
    slug: "building-predictive-cash-flow-models-with-python",
    date: "2026-03-14",
    title: "Building Predictive Cash Flow Models with Python and scikit-learn",
    metaTitle: "Predictive Cash Flow Models with Python | Day 126",
    metaDescription: "How I built a Python cash flow forecasting model using historical AP/AR data and seasonal patterns. 94% forecast accuracy achieved.",
    category: "case-study",
    phase: "ml-finance",
    summary: "Created a Python-based cash flow forecasting model using historical AP/AR data and seasonal patterns.",
    content: `Cash flow forecasting has always been part art, part science. Today I built a model that tips the balance firmly toward science.

## The Problem
Our weekly cash position forecasts were consistently off by 15-20%. The finance team was using Excel-based models that couldn't capture the complexity of our payment patterns.

## The Approach
Using Python with pandas and scikit-learn, I built a model that:
1. Ingests 3 years of AP/AR history
2. Identifies seasonal patterns (Q4 spike, summer dip)
3. Accounts for payment term variations by vendor
4. Predicts weekly cash positions 4 weeks ahead

## Results
- **94% forecast accuracy** (up from ~80%)
- Predictions available in minutes vs. half a day
- Model improves automatically as new data flows in

## What I Learned
The hardest part wasn't the Python — it was cleaning the data. Real-world AP/AR data is messy. Duplicate entries, inconsistent vendor names, missing payment dates. Data preparation took 70% of the project time.`,
    tags: ["Python", "Forecasting", "Cash Flow", "scikit-learn"],
    keywords: ["cash flow forecasting python", "predictive cash flow model", "python accounting automation", "scikit-learn finance"],
    readTime: 6,
  },
  {
    day: 125,
    slug: "when-ai-gets-the-numbers-wrong",
    date: "2026-03-13",
    title: "When AI Gets the Numbers Wrong: Why Human Oversight Still Matters",
    metaTitle: "When AI Gets Financial Numbers Wrong | Day 125",
    metaDescription: "I tested 3 LLMs on financial calculations. The results reveal why accountants must stay in the loop. A reality check on AI accuracy.",
    category: "reflection",
    phase: "ml-finance",
    summary: "Today I tested 3 different LLMs on financial calculations. The results were eye-opening — and a reminder that human oversight isn't going anywhere.",
    content: `I ran an experiment today that every accountant considering AI needs to see.

## The Test
I gave three leading LLMs (GPT-4, Claude, and Gemini) the same set of 20 financial calculations — depreciation schedules, tax computations, lease accounting under IFRS 16, and ratio analysis.

## The Results (Honest)
- **Simple arithmetic**: All three scored 100%. No surprises.
- **Multi-step calculations**: Accuracy dropped to 85-90%. Small rounding errors compounded.
- **Judgment-based items**: This is where it got interesting. Lease classification, impairment triggers, going concern assessments — the models disagreed with each other and sometimes with the correct answer.

## The Takeaway
AI is extraordinary at pattern recognition and data processing. But financial reporting requires professional judgment that these models can approximate but not replace. The winning combination is clear: let AI handle the computational heavy lifting, but keep a qualified human making the judgment calls.

This isn't a weakness of AI. It's a feature of good finance — we exist because numbers need interpretation, not just calculation.`,
    tags: ["Accuracy", "LLM Testing", "Risk", "Professional Judgment"],
    keywords: ["ai accuracy accounting", "llm financial calculations", "ai limitations finance", "human oversight ai accounting"],
    readTime: 4,
  },
  {
    day: 98,
    slug: "python-for-finance-the-basics-pandas-financial-data",
    date: "2026-02-14",
    title: "Python for Finance: Getting Started with Pandas for Financial Data",
    metaTitle: "Python for Finance: Pandas Basics for Accountants | Day 98",
    metaDescription: "An accountant's guide to learning Python for finance. How I used pandas to clean and categorise transaction data automatically.",
    category: "tool-review",
    phase: "data-python",
    summary: "Started learning Python with a focus on pandas and financial data manipulation. Built my first script to clean and categorise transaction data automatically.",
    content: `If you told me a year ago I'd be writing Python scripts, I would have laughed. Today I wrote my first one that actually does something useful.

## Why Python?
Excel has been my home for 11 years. But I've hit its ceiling. When you're working with 500,000+ transaction rows, Excel crawls. Python with pandas handles it in seconds.

## What I Built Today
A script that:
1. Reads a CSV bank statement export
2. Cleans inconsistent date formats
3. Categorises transactions based on description patterns
4. Flags potential duplicates
5. Exports a clean, categorised dataset

## The Learning Curve (Honest)
- **Hour 1-2**: Frustrating. Syntax errors everywhere.
- **Hour 3-4**: Starting to click. The logic is similar to Excel formulas, just different syntax.
- **Hour 5**: Built something that actually works. The dopamine hit was real.

## Resources That Helped
- "Python for Finance" by Yves Hilpisch — the bible
- Kaggle's free Python course — hands-on and practical
- ChatGPT as a coding tutor — game changer for debugging

If you're an accountant on the fence about learning Python: start. It's not as hard as it looks, and the payoff is enormous.`,
    tags: ["Python", "Pandas", "Data Cleaning", "Getting Started"],
    keywords: ["python for accountants", "pandas financial data", "learn python finance", "python accounting automation beginners"],
    readTime: 5,
  },
  {
    day: 45,
    slug: "first-ai-assisted-month-end-close",
    date: "2025-12-23",
    title: "My First AI-Assisted Month-End Close: 14 Hours Saved",
    metaTitle: "AI-Assisted Month-End Close: 14 Hours Saved | Day 45",
    metaDescription: "Applied AI to a real month-end close — reconciliation, variance analysis, and management commentary. Total time saved: 14 hours. Here's exactly how.",
    category: "case-study",
    phase: "foundation",
    summary: "Applied everything learned so far to a real month-end close. Used AI for reconciliation matching, variance analysis, and generating the management commentary. Total time saved: 14 hours.",
    content: `This is the entry I've been building toward. After 44 days of learning, today I put it all together on a real month-end close.

## What I Automated
1. **Bank reconciliation matching** — AI matched 89% of entries automatically
2. **Variance analysis** — Fed actuals vs. budget into Claude, got a first draft of variance explanations
3. **Management commentary** — AI generated the narrative sections of the management pack

## Time Comparison
| Task | Manual | AI-Assisted |
|------|--------|-------------|
| Reconciliation | 6 hours | 1.5 hours |
| Variance analysis | 4 hours | 1 hour |
| Commentary drafting | 5 hours | 1 hour |
| Review & QA | 2 hours | 3 hours |
| **Total** | **17 hours** | **6.5 hours** |

Note the QA time went UP. That's intentional — I spent more time reviewing AI output. But the net saving is still 14 hours.

## What Didn't Work
- AI struggled with one-off accruals that required knowledge of side agreements
- The variance commentary was too generic on first pass — needed significant editing
- Reconciliation matching broke down on inter-company transactions

## The Verdict
14 hours saved on a single month-end. Extrapolate that across 12 months and you're looking at 168 hours — over 4 working weeks — reclaimed for strategic work. This is real.`,
    tags: ["Month-End", "Real World", "Time Savings", "Reconciliation"],
    keywords: ["ai month-end close", "automate month-end accounting", "ai accounting time savings", "ai-assisted financial close"],
    readTime: 7,
  },
  {
    day: 1,
    slug: "the-beginning-why-im-documenting-my-ai-finance-journey",
    date: "2025-11-10",
    title: "The Beginning: Why I'm Documenting My AI Finance Journey Publicly",
    metaTitle: "Day 1: An Accountant's AI Journey Begins | taimur.ai",
    metaDescription: "After 11 years in finance, I'm documenting every day of my transformation into an AI-powered finance leader. ACCA-qualified. No filters. No shortcuts.",
    category: "reflection",
    phase: "foundation",
    summary: "Today I made a decision that will change my career forever. After 11 years in finance — from big corporations to AI startups — I'm documenting every single day of my transformation. No filters. No shortcuts.",
    content: `The finance world changed overnight. And I refuse to be left behind.

After 11 years working in finance — from big corporations to lean startups building AI software — I've seen both sides. I've seen what traditional finance looks like, and I've seen what's coming. The gap between the two is terrifying and exciting in equal measure.

## Why I'm Doing This
Every accountant I talk to has the same questions: "Should I be worried about AI?" "Where do I start?" "Is it really going to replace us?"

I don't have all the answers yet. But I'm going to find them — one day at a time, in public, with full transparency.

## What This Journal Will Be
- **Daily entries** documenting what I learned, built, or tested
- **Honest reviews** of AI tools for finance (what works, what doesn't)
- **Real case studies** applying AI to actual accounting workflows
- **Reflections** on the mindset shifts required to adapt

## My Starting Point
- ACCA-qualified, 11+ years in finance
- Experience in both corporate accounting and AI startups
- Comfortable with Excel, uncomfortable with Python (for now)
- Curious, determined, and slightly terrified

If you're in finance and wondering how AI will change your career — follow along. I'm figuring it out in real time, and I'm not holding anything back.

The journey starts now.`,
    tags: ["Day 1", "Commitment", "New Chapter", "ACCA"],
    keywords: ["accountant ai journey", "finance ai transformation", "acca ai learning", "accountant learning ai"],
    readTime: 4,
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
    .filter(e => e.phase === entry.phase || e.category === entry.category)
    .slice(0, limit);
}

// Portfolio data
export const PORTFOLIO_DATA = [
  {
    title: "Automated Month-End Close",
    category: "PROCESS AUTOMATION",
    icon: "⏱",
    metric: "-40%",
    metricLabel: "Close Time Reduced",
    desc: "Implemented AI-powered journal entry automation and variance analysis, cutting the monthly close process from 10 days to 6.",
    tags: ["Python", "GPT-4", "Power Automate"],
    linkedEntry: "first-ai-assisted-month-end-close",
  },
  {
    title: "Predictive Cash Flow Forecasting",
    category: "FINANCIAL PLANNING",
    icon: "📈",
    metric: "94%",
    metricLabel: "Forecast Accuracy",
    desc: "Built a machine learning model using 3 years of historical AP/AR data to predict weekly cash positions with high accuracy.",
    tags: ["Python", "scikit-learn", "Tableau"],
    linkedEntry: "building-predictive-cash-flow-models-with-python",
  },
  {
    title: "Intelligent Expense Categorisation",
    category: "DATA PROCESSING",
    icon: "📊",
    metric: "15K+",
    metricLabel: "Transactions/Month",
    desc: "Deployed an NLP-based system to automatically categorise expenses from bank feeds, reducing manual data entry by 85%.",
    tags: ["NLP", "OpenAI API", "Excel VBA"],
  },
  {
    title: "Board Report Generator",
    category: "REPORTING",
    icon: "📝",
    metric: "3x",
    metricLabel: "Faster Output",
    desc: "Created prompt templates that generate board-ready financial narratives from raw data, transforming a 2-day task into a 4-hour workflow.",
    tags: ["Claude", "Power BI", "Word API"],
  },
];

// Tools data
export const TOOLS_DATA = [
  { name: "ChatGPT / Claude", use: "Financial analysis, report writing, data interpretation", status: "Active", icon: "🤖" },
  { name: "Microsoft Copilot", use: "Excel automation, PowerPoint generation", status: "Exploring", icon: "📊" },
  { name: "Tableau AI", use: "Automated data visualisation & dashboards", status: "Learning", icon: "📈" },
  { name: "Dext / Hubdoc", use: "AI-powered receipt & invoice processing", status: "Active", icon: "🧾" },
  { name: "Cascade.io", use: "AI-first financial planning & modelling", status: "Researching", icon: "💡" },
  { name: "Trullion", use: "AI for audit & lease accounting", status: "Watchlist", icon: "🔍" },
];

// Site-wide SEO constants
export const SITE = {
  name: "taimur.ai",
  title: "taimur.ai — An Accountant's Daily AI Transformation Journey",
  description: "ACCA-qualified accountant & finance manager documenting every day of integrating AI into modern finance. Real tools, real case studies, real results.",
  url: "https://taimur.ai",
  author: "Taimur G",
  authorTitle: "ACCA-Qualified Accountant & Finance Manager",
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
  ],
};
