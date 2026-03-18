import { SITE } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" aria-label="About Taimur" style={{ padding: "100px 32px", maxWidth: 1000, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
        <div style={{ width: "100%", aspectRatio: "1", maxWidth: 340, borderRadius: 20, background: "linear-gradient(135deg, #edf7f1, #f0f0ec)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0 auto", position: "relative", border: "1px solid #e8e8e4" }}>
          <div style={{ fontSize: 72, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: "#1a8a5c" }}>T</div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#888", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>taimur.ai</span>
          <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", gap: 8 }}>
            {["ACCA", "11+ YRS", "AI"].map(t => (<span key={t} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: "#1a8a5c", background: "rgba(26,138,92,0.08)", borderRadius: 6, padding: "4px 10px", letterSpacing: "0.06em" }}>{t}</span>))}
          </div>
        </div>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "5px 14px", marginBottom: 14 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.1em", textTransform: "uppercase" }}>About</span>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Accountant Turning<br /><span style={{ color: "#1a8a5c" }}>AI Pioneer</span>
          </h2>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#666", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ margin: 0 }}>I&apos;m Taimur — an ACCA-qualified accountant and finance manager who&apos;s been deep in the numbers since 2015. I&apos;ve worked across big corporations and lean startups building AI software.</p>
            <p style={{ margin: 0 }}>Now I&apos;m on a mission: to become a world-class AI-powered finance leader and document every single day of that transformation publicly.</p>
            <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600 }}>The finance world changed overnight. I&apos;m mapping the way forward.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
