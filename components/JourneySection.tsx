// ============================================================
// components/JourneySection.tsx — Timeline with links to individual pages
// Each entry card is now an <a> tag that Google can crawl
// ============================================================
"use client";
import { useState } from "react";
import Link from "next/link";
import { JOURNEY_DATA, PHASES, CATEGORY_CONFIG } from "@/lib/data";

export function JourneySection() {
  const [phase, setPhase] = useState("all");
  const data = phase === "all" ? JOURNEY_DATA : JOURNEY_DATA.filter(d => d.phase === phase);

  return (
    <section id="journey" aria-label="Journey Timeline" style={{ padding: "100px 32px", maxWidth: 860, margin: "0 auto" }}>
      {/* Header — H2 with target keywords */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 800, color: "#1a1a1a", margin: "0 0 14px",
          letterSpacing: "-0.02em",
        }}>
          Every Day, One Step Closer
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          color: "#888", maxWidth: 520, margin: "0 auto", lineHeight: 1.65,
        }}>
          Follow the daily evolution from traditional finance to AI-augmented workflows.
          Each entry is a real lesson, tool, or breakthrough.
        </p>
      </div>

      {/* Phase filters */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
        {PHASES.map((p) => (
          <button key={p.key} onClick={() => setPhase(p.key)} style={{
            background: phase === p.key ? "#edf7f1" : "transparent",
            border: phase === p.key ? "1.5px solid #1a8a5c" : "1.5px solid #e0e0dc",
            borderRadius: 24, padding: "10px 22px",
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            color: phase === p.key ? "#1a8a5c" : "#888",
            cursor: "pointer", transition: "all 0.35s ease",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            {p.label}
            {p.range && <span style={{ fontSize: 12, fontWeight: 500, color: phase === p.key ? "#1a8a5c" : "#bbb" }}>{p.range}</span>}
          </button>
        ))}
      </div>

      {/* Timeline — each entry is a LINK to its own page */}
      <div style={{ position: "relative", paddingLeft: 48 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", left: 19, top: 8, bottom: 8,
          width: 2, background: "linear-gradient(to bottom, #ddd0f5, #e8e8e4)",
          borderRadius: 1,
        }} />

        {data.map((entry) => {
          const cat = CATEGORY_CONFIG[entry.category];
          return (
            <div key={entry.day} style={{ position: "relative", marginBottom: 24 }}>
              {/* Timeline node */}
              <div style={{
                position: "absolute", left: -40, top: 28,
                width: 20, height: 20, borderRadius: "50%",
                background: "#fff", border: "2.5px solid #1a8a5c",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 2,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a8a5c" }} />
              </div>

              {/* Card — wrapped in <Link> for SEO crawlability */}
              <Link
                href={`/journey/${entry.slug}`}
                style={{
                  display: "block", textDecoration: "none",
                  background: "#fff", borderRadius: 16,
                  padding: "24px 28px",
                  border: "1px solid #f0f0ec",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.35s ease",
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>Day {entry.day}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#bbb" }}>·</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#aaa" }}>
                      {new Date(entry.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>{cat.icon}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#999", fontWeight: 500 }}>{cat.label}</span>
                  </div>
                </div>

                {/* Title — H3 for SEO hierarchy */}
                <h3 style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20, fontWeight: 700, color: "#1a1a1a",
                  margin: "0 0 10px", lineHeight: 1.3,
                }}>
                  {entry.title}
                </h3>

                {/* Summary */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  color: "#777", lineHeight: 1.7, margin: "0 0 18px",
                }}>
                  {entry.summary}
                </p>

                {/* Tags + Arrow */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {entry.tags.slice(0, 3).map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                        color: "#555", background: "#f5f5f2",
                        borderRadius: 6, padding: "4px 12px",
                        border: "1px solid #ececea",
                      }}>{tag}</span>
                    ))}
                  </div>
                  <span style={{ color: "#bbb", fontSize: 18 }}>→</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
