import { SITE } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" aria-label="About Taimur" style={{ padding: "100px 32px", maxWidth: 1000, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
        <div style={{ width: "100%", maxWidth: 380, margin: "0 auto" }}>
          {/* Video embed placeholder — replace src with your YouTube/Loom embed URL */}
          <div style={{
            width: "100%", aspectRatio: "9/16", maxHeight: 480, borderRadius: 20,
            background: "linear-gradient(135deg, #edf7f1, #f0f0ec)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            position: "relative", border: "1px solid #e8e8e4", overflow: "hidden",
          }}>
            {/* Placeholder — swap this entire div with an <iframe> when video is ready */}
            <div style={{
              width: 64, height: 64, borderRadius: "50%", background: "rgba(26,138,92,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a8a5c">
                <polygon points="8,5 20,12 8,19" />
              </svg>
            </div>
            <span style={{
              fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 16,
              fontWeight: 700, color: "#1a8a5c",
            }}>Meet Taimur</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12.5,
              color: "#999", marginTop: 4,
            }}>60-second intro — coming soon</span>

            {/* Credential badges at bottom */}
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", gap: 8 }}>
              {["ACCA", "11+ YRS", "AI"].map(t => (
                <span key={t} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
                  color: "#1a8a5c", background: "rgba(26,138,92,0.08)",
                  borderRadius: 6, padding: "4px 10px", letterSpacing: "0.06em",
                }}>{t}</span>
              ))}
            </div>
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
            <p style={{ margin: 0 }}>Qualified, experienced finance manager building intelligent systems that elevate businesses to new heights. Documenting and sharing a never-ending journey to perfection — so you can follow along.</p>
            <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600 }}>The finance world changed overnight. I&apos;m mapping the way forward.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
