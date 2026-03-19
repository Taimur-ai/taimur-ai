import Link from "next/link";
import { TOOLS_DATA } from "@/lib/data";

export function ToolsSection() {
  return (
    <section id="tools" aria-label="AI Tools for Finance" style={{ padding: "80px 32px 100px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "5px 14px", marginBottom: 14 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.1em", textTransform: "uppercase" }}>Documentation</span>
        </div>
        <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#1a1a1a", margin: 0, letterSpacing: "-0.02em" }}>AI Tools for Finance</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#888", marginTop: 8, maxWidth: 500 }}>Every tool I&apos;m testing, learning, and using — rated and reviewed with full transparency.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
        {TOOLS_DATA.map((tool, i) => {
          const sc = tool.status === "Active" ? "#1a8a5c" : tool.status === "Exploring" || tool.status === "Learning" ? "#2563eb" : "#999";
          const sbg = tool.status === "Active" ? "#edf7f1" : tool.status === "Exploring" || tool.status === "Learning" ? "#eff4ff" : "#f5f5f2";
          const hasReview = !!tool.reviewSlug;

          const cardContent = (
            <div style={{
              background: "#fff", borderRadius: 14, padding: "22px 24px",
              border: "1px solid #f0f0ec", display: "flex", alignItems: "flex-start", gap: 16,
              transition: "all 0.3s ease",
              cursor: hasReview ? "pointer" : "default",
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f5f5f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{tool.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{tool.name}</h3>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, fontWeight: 700, color: sc, background: sbg, borderRadius: 6, padding: "2px 8px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{tool.status}</span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "#888", lineHeight: 1.55, margin: "0 0 10px" }}>{tool.use}</p>

                {/* Fix 6 + Feature 2: Clickable review links for SEO */}
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, fontWeight: 600,
                  color: hasReview ? "#1a8a5c" : "#ccc",
                  display: "inline-flex", alignItems: "center", gap: 4,
                }}>
                  {hasReview ? "Read My Review →" : "Review Coming Soon"}
                </span>
              </div>
            </div>
          );

          if (hasReview) {
            return (
              <Link key={i} href={`/journey/${tool.reviewSlug}`} style={{ textDecoration: "none" }}>
                {cardContent}
              </Link>
            );
          }

          return <div key={i}>{cardContent}</div>;
        })}
      </div>
    </section>
  );
}
