export function SubscribeSection() {
  return (
    <section id="subscribe" aria-label="Newsletter signup" style={{ padding: "80px 32px", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ background: "linear-gradient(135deg, #1a8a5c, #15704a)", borderRadius: 24, padding: "clamp(40px, 6vw, 64px) clamp(28px, 5vw, 56px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Get Every Day Delivered</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 32px" }}>Daily entries, tool discoveries, and hard-won lessons — straight to your inbox. Free, always.</p>
        <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto", flexWrap: "wrap" }}>
          <input type="email" placeholder="your@email.com" aria-label="Email address" style={{ flex: 1, minWidth: 200, background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 12, padding: "14px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#fff", outline: "none" }} />
          <button style={{ background: "#fff", border: "none", borderRadius: 12, padding: "14px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#1a8a5c", fontWeight: 700, cursor: "pointer" }}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
