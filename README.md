# taimur.ai — SEO-Optimised Next.js Project

## Quick Start
```bash
npm install
npm run dev      # Development at http://localhost:3000
npm run build    # Production build
npm run start    # Production server
```

## Deploy to Vercel (Recommended)
1. Push this project to GitHub
2. Go to vercel.com → Import your repo
3. It auto-detects Next.js — click Deploy
4. Add custom domain: taimur.ai

## Project Structure
```
taimur-ai/
├── app/
│   ├── layout.tsx              ← Root layout (meta tags, schema, fonts)
│   ├── page.tsx                ← Homepage
│   ├── sitemap.ts              ← Auto-generated XML sitemap
│   ├── robots.ts               ← Robots.txt for crawlers
│   └── journey/
│       └── [slug]/
│           └── page.tsx        ← Individual entry pages (SEO powerhouse)
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── NeuralVisual.tsx        ← Canvas animation (paste full code from prototype)
│   ├── JourneySection.tsx      ← Timeline with <Link> to entry pages
│   ├── PortfolioSection.tsx
│   ├── AboutSection.tsx
│   ├── ToolsSection.tsx
│   ├── SubscribeSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts                 ← All content, SEO metadata, keywords
└── public/
    └── manifest.json
```

## SEO Features Built In
- ✅ Server-side rendered (SSR/SSG) — Google can crawl everything
- ✅ Individual URLs for each journey entry (/journey/automating-gl-reconciliation-with-gpt4)
- ✅ Unique <title> and meta description per page
- ✅ Open Graph tags for LinkedIn/Facebook/WhatsApp sharing
- ✅ Twitter Card tags for X sharing
- ✅ Article schema markup (JSON-LD) on every entry
- ✅ Person schema on homepage
- ✅ BreadcrumbList schema for navigation
- ✅ Auto-generated XML sitemap at /sitemap.xml
- ✅ robots.txt at /robots.txt
- ✅ Semantic HTML (proper h1/h2/h3 hierarchy, <article>, <nav>, <section>)
- ✅ Internal linking (related entries, portfolio → entry links)
- ✅ Canonical URLs to prevent duplicate content
- ✅ Static generation for all entry pages (fast load = better ranking)

## Post-Deploy Checklist
1. [ ] Add Google Analytics ID in layout.tsx
2. [ ] Set up Google Search Console — submit sitemap.xml
3. [ ] Create og-image.png (1200x630) for social sharing
4. [ ] Create favicon.ico, icon.svg, apple-touch-icon.png
5. [ ] Replace "YOUR_GOOGLE_VERIFICATION_ID" in layout.tsx
6. [ ] Set up email newsletter (ConvertKit, Buttondown, or Substack)
7. [ ] Connect domain taimur.ai in Vercel

## Adding New Journey Entries
Edit `lib/data.ts` and add a new entry to the JOURNEY_DATA array:
```typescript
{
  day: 128,
  slug: "your-seo-friendly-slug",           // becomes /journey/your-seo-friendly-slug
  date: "2026-03-16",
  title: "Your Keyword-Rich Title Here",     // H1 on the page
  metaTitle: "Short Title | Day 128",        // max 60 chars
  metaDescription: "Compelling description", // max 155 chars
  category: "case-study",
  phase: "ai-agents",
  summary: "One-paragraph summary...",
  content: `Full article content with ## headings...`,
  tags: ["Tag1", "Tag2"],
  keywords: ["target keyword 1", "target keyword 2"],
  readTime: 5,
}
```
Run `npm run build` — the new page is automatically:
- Added to the sitemap
- Given its own URL
- Indexed with unique meta tags
- Cross-linked with related entries

## Content Strategy for Organic Growth
Target these keyword clusters with daily entries:

| Cluster | Example Keywords | Entry Ideas |
|---------|-----------------|-------------|
| AI Tools | "best ai tools for accountants", "ai accounting software" | Tool reviews, comparisons |
| Automation | "automate month-end close", "ai invoice processing" | Case studies with metrics |
| Python | "python for accountants", "pandas financial data" | Tutorials, code walkthroughs |
| Career | "future of accounting", "will ai replace accountants" | Reflections, industry analysis |
| Specific Tasks | "ai for variance analysis", "ai bank reconciliation" | Step-by-step guides |
