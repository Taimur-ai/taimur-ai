import { SITE } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact" style={{ padding: "80px 32px 100px", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "5px 14px", marginBottom: 14 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.1em", textTransform: "uppercase" }}>Contact</span>
      </div>
      <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Let&apos;s Build Together</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#888", lineHeight: 1.7, marginBottom: 36 }}>Collaborate, hire, or just talk about AI and finance.</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { label: "YouTube", href: SITE.socials.youtube },
          { label: "TikTok", href: SITE.socials.tiktok },
          { label: "Instagram", href: SITE.socials.instagram },
        ].map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ background: "#f5f5f2", border: "1px solid #e8e8e4", borderRadius: 12, padding: "13px 26px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#1a1a1a", textDecoration: "none" }}>{s.label}</a>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <a href="mailto:hello@taimur.ai" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#1a8a5c", textDecoration: "none", fontWeight: 600 }}>hello@taimur.ai</a>
      </div>
    </section>
  );
}
