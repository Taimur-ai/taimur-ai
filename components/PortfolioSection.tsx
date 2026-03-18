export function PortfolioSection() {
  return (
    <section id="portfolio" aria-label="Portfolio" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "6px 18px", marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.12em", textTransform: "uppercase" }}>Portfolio</span>
        </div>
        <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Results That Speak</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#888", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
          This is Day 0. Results will be documented here as each AI system is built, tested, and deployed. Follow the journey to see them unfold.
        </p>
      </div>

      {/* Day 0 empty state */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {[
          { title: "AI Purchase System", icon: "🛒", desc: "Automating procurement from requisition to PO approval. Coming as the journey progresses." },
          { title: "AI Invoicing System", icon: "🧾", desc: "Intelligent invoice capture, three-way matching, and automated payment workflows." },
          { title: "AI Reporting System", icon: "📊", desc: "Automated financial reports, variance analysis, and board pack generation." },
          { title: "AI Finance Strategy", icon: "📈", desc: "Forecasting, scenario planning, and AI-driven strategic recommendations." },
        ].map((item, i) => (
          <div key={i} style={{
            background: "#fff", borderRadius: 18, padding: "32px 28px",
            border: "1px solid #f0f0ec",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", minHeight: 220,
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, background: "#f5f5f2",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, marginBottom: 20,
            }}>{item.icon}</div>
            <h3 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 18,
              fontWeight: 700, color: "#1a1a1a", margin: "0 0 12px",
            }}>{item.title}</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: "#999", lineHeight: 1.65, margin: "0 0 20px", flex: 1,
            }}>{item.desc}</p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#f5f5f2", borderRadius: 20, padding: "6px 16px",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ccc" }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                fontWeight: 600, color: "#bbb", letterSpacing: "0.04em",
              }}>Day 0 — Not Started</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
