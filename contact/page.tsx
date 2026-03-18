// ============================================================
// app/contact/page.tsx — Dedicated contact page
// Uses Web3Forms (free) to send form submissions to your email
// ============================================================
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Taimur G — collaborate, hire, or talk about AI and finance. Available for consulting, speaking, and partnerships.",
  keywords: ["contact taimur", "ai finance consultant", "hire finance ai expert"],
  openGraph: {
    title: "Contact | taimur.ai",
    description: "Get in touch with Taimur G — collaborate, hire, or talk about AI and finance.",
    url: `${SITE.url}/contact`,
  },
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Taimur G",
    url: `${SITE.url}/contact`,
    mainEntity: {
      "@type": "Person",
      name: SITE.author,
      jobTitle: SITE.authorTitle,
      url: SITE.url,
      sameAs: [SITE.socials.youtube, SITE.socials.tiktok, SITE.socials.instagram],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <div style={{ maxWidth: 620, margin: "0 auto", padding: "120px 24px 80px" }}>

        <nav aria-label="Breadcrumb" style={{ marginBottom: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#999" }}>
          <Link href="/" style={{ color: "#1a8a5c", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#666" }}>Contact</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</span>
          </div>
          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 800, color: "#1a1a1a",
            margin: "0 0 14px", letterSpacing: "-0.02em",
          }}>
            Let&apos;s Connect
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
            color: "#888", maxWidth: 460, margin: "0 auto", lineHeight: 1.65,
          }}>
            Have a question about AI in finance? Want to collaborate, hire, or just say hello? I&apos;d love to hear from you.
          </p>
        </div>

        <ContactForm />

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <Link href="/" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: "#1a8a5c", textDecoration: "none", fontWeight: 600,
          }}>&larr; Back to home</Link>
        </div>
      </div>
    </>
  );
}
