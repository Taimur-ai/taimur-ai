"use client";
import { useState, useEffect } from "react";
import { NeuralVisual } from "./NeuralVisual";

function HoverCard({ card, index }: { card: any; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 160px", padding: "18px 20px",
        background: hovered ? card.bg : "#fff",
        borderRadius: 14,
        border: `1.5px solid ${hovered ? card.color + "35" : "#f0f0ec"}`,
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        position: "relative", overflow: "hidden",
        boxShadow: hovered ? `0 8px 28px ${card.color}12` : "0 2px 8px rgba(0,0,0,0.03)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{
        position: "absolute", top: 10, right: 10,
        width: 44, height: 44, borderRadius: 12,
        background: hovered ? card.bg : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.3) rotate(-20deg)",
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        {index === 0 && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a8a5c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="4" width="14" height="10" rx="3"/><circle cx="9" cy="9" r="1.2" fill="#1a8a5c"/><circle cx="15" cy="9" r="1.2" fill="#1a8a5c"/>
            <path d="M9 14v3M15 14v3M7 17h10"/><path d="M19 7l2-1M5 7l-2-1"/><path d="M12 4v-2"/>
            <circle cx="20" cy="17" r="2.5" fill="none" strokeWidth="1.4"/><path d="M20 15.5v1.5h1.2"/>
          </svg>
        )}
        {index === 1 && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="4" cy="5" r="1.8" fill="#2563eb" opacity={hovered ? 0.15 : 0.5} style={{ transition: "all 0.8s", transform: hovered ? "translate(7px, 7px)" : "none" }}/>
            <circle cx="20" cy="4" r="1.5" fill="#2563eb" opacity={hovered ? 0.15 : 0.45} style={{ transition: "all 0.8s ease 0.1s", transform: hovered ? "translate(-9px, 8px)" : "none" }}/>
            <circle cx="6" cy="18" r="1.3" fill="#2563eb" opacity={hovered ? 0.15 : 0.4} style={{ transition: "all 0.8s ease 0.15s", transform: hovered ? "translate(5px, -6px)" : "none" }}/>
            <circle cx="19" cy="19" r="1.6" fill="#2563eb" opacity={hovered ? 0.15 : 0.45} style={{ transition: "all 0.8s ease 0.05s", transform: hovered ? "translate(-8px, -7px)" : "none" }}/>
            <circle cx="14" cy="6" r="1.2" fill="#2563eb" opacity={hovered ? 0.15 : 0.35} style={{ transition: "all 0.8s ease 0.2s", transform: hovered ? "translate(-3px, 6px)" : "none" }}/>
            <circle cx="3" cy="12" r="1.4" fill="#2563eb" opacity={hovered ? 0.15 : 0.4} style={{ transition: "all 0.8s ease 0.12s", transform: hovered ? "translate(8px, 0px)" : "none" }}/>
            <circle cx="11" cy="12" r={hovered ? 3.5 : 1.8} fill="#2563eb" opacity={hovered ? 0.7 : 0.25} style={{ transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)" }}/>
          </svg>
        )}
        {index === 2 && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round">
            <rect x="2" y={hovered ? 16 : 2} width="5" height="4" rx="1" fill="#d97706" opacity={0.2} style={{ transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}/>
            <rect x="9" y={hovered ? 16 : 8} width="5" height="4" rx="1" fill="#d97706" opacity={0.25} style={{ transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s" }}/>
            <rect x="16" y={hovered ? 16 : 5} width="5" height="4" rx="1" fill="#d97706" opacity={0.3} style={{ transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s" }}/>
            <path d="M4 22h16" stroke="#d97706" strokeWidth={1.5} opacity={hovered ? 0.5 : 0.15} style={{ transition: "all 0.5s" }}/>
          </svg>
        )}
      </div>

      <div style={{
        fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15,
        fontWeight: 700, color: hovered ? card.color : "#1a1a1a",
        marginBottom: 4, paddingRight: 48,
        transition: "color 0.3s",
      }}>{card.title}</div>

      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "#777",
        lineHeight: 1.55,
        maxHeight: hovered ? 60 : 0,
        opacity: hovered ? 1 : 0,
        marginTop: hovered ? 6 : 0,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>{card.desc}</div>
    </div>
  );
}

export function HeroSection() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 250); }, []);
  const t = (d: number) => `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${d}s`;

  return (
    <section id="hero" aria-label="Introduction" style={{
      minHeight: "auto", display: "flex", alignItems: "flex-start",
      padding: "110px 32px 60px", maxWidth: 1200, margin: "0 auto",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%" }} className="hero-grid">
        <div>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: t(0.2), display: "inline-flex", alignItems: "center", gap: 8, background: "#edf7f1", borderRadius: 20, padding: "7px 18px", marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a8a5c", animation: "livePulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, fontWeight: 700, color: "#1a8a5c", letterSpacing: "0.12em", textTransform: "uppercase" }}>Live Journey</span>
          </div>

          <h1 style={{
            opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: t(0.35),
            fontFamily: "'Bricolage Grotesque', 'DM Sans', sans-serif",
            fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", fontWeight: 800,
            lineHeight: 1.08, color: "#1a1a1a", margin: "0 0 24px", letterSpacing: "-0.03em",
          }}>
            Building the Future<br />
            <span style={{ color: "#1a8a5c" }}>of Finance with AI</span>
          </h1>

          <p style={{
            opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: t(0.45),
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 500,
            color: "#1a1a1a", maxWidth: 500, lineHeight: 1.55, margin: "0 0 12px",
            borderLeft: "3px solid #1a8a5c", paddingLeft: 18,
          }}>
            Documenting every step of building AI-powered finance systems — so you can follow the playbook.
          </p>

          <p style={{
            opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: t(0.5),
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: "#999", maxWidth: 460, lineHeight: 1.6, margin: "0 0 36px",
            letterSpacing: "0.01em",
          }}>
            ACCA-qualified. 11+ years in finance. Now building the future.
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

          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: t(0.75), display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { title: "Finance AI Architect", desc: "Designing intelligent systems that transform how businesses handle money", color: "#1a8a5c", bg: "#edf7f1" },
              { title: "Continuous Improvement", desc: "Messy data compiled into clarity — every single day", color: "#2563eb", bg: "#eff4ff" },
              { title: "More Strategic, Less Transactional", desc: "Automating the mundane so finance teams focus on what matters", color: "#d97706", bg: "#fef9ec" },
            ].map((card, i) => (
              <HoverCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>

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
