"use client";
import { useState, useEffect } from "react";
import { NeuralVisual } from "./NeuralVisual";

export function HeroSection() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 250); }, []);
  const t = (d: number) => `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${d}s`;

  return (
    <section id="hero" aria-label="Introduction" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 32px 60px", maxWidth: 1200, margin: "0 auto",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%" }} className="hero-grid">
        <div>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: t(0.2), display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "7px 18px", marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a8a5c", animation: "livePulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.12em", textTransform: "uppercase" }}>Live Journey</span>
          </div>

          {/* H1 — primary SEO heading for homepage */}
          <h1 style={{
            opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: t(0.35),
            fontFamily: "'Bricolage Grotesque', 'DM Sans', sans-serif",
            fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", fontWeight: 800,
            lineHeight: 1.08, color: "#1a1a1a", margin: "0 0 24px", letterSpacing: "-0.03em",
          }}>
            Building the Future<br />
            <span style={{ color: "#1a8a5c" }}>of Finance with AI</span>
          </h1>

          {/* Tagline */}
          <p style={{
            opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: t(0.45),
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 500,
            color: "#1a1a1a", maxWidth: 480, lineHeight: 1.5, margin: "0 0 8px",
            borderLeft: "3px solid #1a8a5c", paddingLeft: 18,
          }}>
            The finance world changed overnight. I'm mapping the way forward.
          </p>

          <p style={{
            opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: t(0.5),
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
            color: "#666", maxWidth: 460, lineHeight: 1.7, margin: "0 0 36px",
          }}>
            ACCA-qualified accountant &amp; finance manager documenting every day of
            integrating AI into modern finance — one insight at a time.
          </p>

          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: t(0.6), display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
            <a href="#journey" style={{
              background: "#1a8a5c", border: "none", borderRadius: 12, padding: "15px 32px",
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#fff", fontWeight: 600,
              textDecoration: "none", boxShadow: "0 4px 16px rgba(26,138,92,0.25)",
            }}>Follow the Journey</a>
            <a href="#portfolio" style={{
              background: "transparent", border: "2px solid #e0e0dc", borderRadius: 12, padding: "13px 32px",
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#1a1a1a", fontWeight: 600,
              textDecoration: "none",
            }}>View Portfolio</a>
          </div>

          {/* Stats */}
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: t(0.75), display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { icon: "📈", value: "365", label: "DAY JOURNEY" },
              { icon: "🤖", value: "50+", label: "AI TOOLS TESTED" },
              { icon: "⚡", value: "∞", label: "POSSIBILITIES" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }} aria-hidden="true">{s.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, fontWeight: 600, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animation */}
        <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(60px) scale(0.95)", transition: t(0.5) }}>
          <NeuralVisual />
        </div>
      </div>

      <style>{`
        @keyframes livePulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.85); } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
