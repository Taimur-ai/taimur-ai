// ============================================================
// app/journey/[slug]/page.tsx — Individual journey entry
// THE SEO POWERHOUSE: each entry = its own indexed page
// ============================================================
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOURNEY_DATA, SITE, CATEGORY_CONFIG, getEntryBySlug, getRelatedEntries, getAllSlugs } from "@/lib/data";

// ---- Static generation: pre-build all entry pages ----
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ---- Dynamic metadata per entry ----
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const entry = getEntryBySlug(params.slug);
  if (!entry) return { title: "Not Found" };

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    keywords: entry.keywords,
    openGraph: {
      type: "article",
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `${SITE.url}/journey/${entry.slug}`,
      siteName: SITE.name,
      publishedTime: entry.date,
      authors: [SITE.author],
      tags: entry.tags,
      images: [{
        url: `${SITE.url}/og/journey/${entry.slug}.png`,
        width: 1200,
        height: 630,
        alt: entry.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
    alternates: {
      canonical: `${SITE.url}/journey/${entry.slug}`,
    },
  };
}

export default function JourneyEntryPage({ params }: { params: { slug: string } }) {
  const entry = getEntryBySlug(params.slug);
  if (!entry) notFound();

  const cat = CATEGORY_CONFIG[entry.category];
  const related = getRelatedEntries(entry);

  // Article schema for rich snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.metaDescription,
    datePublished: entry.date,
    dateModified: entry.date,
    author: {
      "@type": "Person",
      name: SITE.author,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/journey/${entry.slug}`,
    keywords: entry.keywords.join(", "),
    articleSection: cat.label,
    wordCount: entry.content.split(/\s+/).length,
    timeRequired: `PT${entry.readTime}M`,
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Journey", item: `${SITE.url}/journey` },
      { "@type": "ListItem", position: 3, name: `Day ${entry.day}`, item: `${SITE.url}/journey/${entry.slug}` },
    ],
  };

  // Convert markdown-ish content to HTML paragraphs
  const contentHtml = entry.content
    .split("\n\n")
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return `<h2 style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:700;color:#1a1a1a;margin:32px 0 12px">${block.replace("## ", "")}</h2>`;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").map(li => `<li style="margin-bottom:6px">${li.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`).join("");
        return `<ul style="padding-left:20px;margin:12px 0;color:#555;line-height:1.8">${items}</ul>`;
      }
      if (block.includes("|")) {
        return ""; // Skip tables for now, handle separately if needed
      }
      return `<p style="color:#555;line-height:1.85;margin:0 0 16px;font-size:16px">${block.replace(/\*\*(.*?)\*\*/g, "<strong style='color:#1a1a1a'>$1</strong>")}</p>`;
    })
    .join("");

  return (
    <>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>

        {/* Breadcrumb navigation (visible + SEO) */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#999" }}>
          <Link href="/" style={{ color: "#1a8a5c", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/#journey" style={{ color: "#1a8a5c", textDecoration: "none" }}>Journey</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#666" }}>Day {entry.day}</span>
        </nav>

        {/* Entry header */}
        <header>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
              color: cat.color, background: cat.color + "15",
              borderRadius: 8, padding: "4px 12px", letterSpacing: "0.06em", textTransform: "uppercase",
            }}>{cat.icon} {cat.label}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#bbb" }}>
              Day {entry.day} · {new Date(entry.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#bbb" }}>
              · {entry.readTime} min read
            </span>
          </div>

          {/* H1 — the most important SEO element */}
          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800, color: "#1a1a1a",
            lineHeight: 1.2, margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}>
            {entry.title}
          </h1>

          {/* Author byline with E-E-A-T signals */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #f0f0ec" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "linear-gradient(135deg, #edf7f1, #f0f0ec)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 16, color: "#1a8a5c",
            }}>T</div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>
                {SITE.author}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#999" }}>
                {SITE.authorTitle} · ACCA · 11+ years
              </div>
            </div>
          </div>
        </header>

        {/* Article content — semantic HTML for SEO */}
        <article>
          {/* Lead paragraph — shown in search snippets */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 18,
            color: "#444", lineHeight: 1.8, margin: "0 0 28px",
            borderLeft: "3px solid #1a8a5c", paddingLeft: 20,
          }}>
            {entry.summary}
          </p>

          {/* Full content */}
          <div
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {/* Tags — internal linking opportunities */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 40, paddingTop: 32, borderTop: "1px solid #f0f0ec" }}>
          {entry.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
              color: "#555", background: "#f5f5f2",
              borderRadius: 8, padding: "6px 14px",
              border: "1px solid #ececea",
            }}>#{tag}</span>
          ))}
        </div>

        {/* Related entries — internal linking for SEO juice */}
        {related.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 20,
            }}>
              Continue the journey
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/journey/${r.slug}`}
                  style={{
                    display: "block", padding: "20px 24px",
                    background: "#fff", borderRadius: 14,
                    border: "1px solid #f0f0ec", textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#bbb" }}>Day {r.day}</span>
                      <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "4px 0 0" }}>
                        {r.title}
                      </h3>
                    </div>
                    <span style={{ color: "#bbb", fontSize: 18 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA — newsletter signup on every entry page */}
        <section style={{
          marginTop: 48, padding: 32, borderRadius: 16,
          background: "linear-gradient(135deg, #1a8a5c, #15704a)",
          textAlign: "center",
        }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>
            Get every day delivered
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>
            Daily entries, tool discoveries, and hard-won lessons — straight to your inbox.
          </p>
          <div style={{ display: "flex", gap: 8, maxWidth: 380, margin: "0 auto" }}>
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              style={{
                flex: 1, padding: "12px 16px", borderRadius: 10,
                border: "1.5px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.15)", color: "#fff",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                outline: "none",
              }}
            />
            <button style={{
              padding: "12px 24px", borderRadius: 10,
              background: "#fff", border: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              fontWeight: 700, color: "#1a8a5c", cursor: "pointer",
            }}>Subscribe</button>
          </div>
        </section>

        {/* Back link */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/#journey" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: "#1a8a5c", textDecoration: "none", fontWeight: 600,
          }}>← Back to all entries</Link>
        </div>
      </div>
    </>
  );
}
