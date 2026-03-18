import Link from "next/link";
import { PORTFOLIO_DATA } from "@/lib/data";

export function PortfolioSection() {
  return (
    <section id="portfolio" aria-label="Portfolio" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "6px 18px", marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.12em", textTransform: "uppercase" }}>Portfolio</span>
        </div>
        <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Results That Speak</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#888", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
          Real-world AI experiments in traditional finance workflows — currently in testing. Follow along as the results come in.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {PORTFOLIO_DATA.map((p, i) => {
          const inner = (
            <div style={{ background: "#fff", borderRadius: 18, padding: "32px 28px", border: "1px solid #f0f0ec", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.category}</span>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#edf7f1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
              </div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20, fontWeight: 700, color: "#1a1a1a", margin: "0 0 20px", lineHeight: 1.25 }}>{p.title}</h3>
              <div style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 10, padding: "8px 16px", alignSelf: "flex-start" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a8a5c", animation: "livePulse 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.04em" }}>Results Coming Soon</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: "#777", lineHeight: 1.7, margin: "0 0 24px", flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, fontWeight: 600, color: "#555", background: "#f5f5f2", borderRadius: 6, padding: "5px 14px", border: "1px solid #ececea" }}>{tag}</span>
                ))}
              </div>
            </div>
          );
          return p.linkedEntry ? (
            <Link key={i} href={`/journey/${p.linkedEntry}`} style={{ textDecoration: "none" }}>{inner}</Link>
          ) : (
            <div key={i}>{inner}</div>
          );
        })}
      </div>
      <style>{`
        @keyframes livePulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.85); } }
      `}</style>
    </section>
  );
}
