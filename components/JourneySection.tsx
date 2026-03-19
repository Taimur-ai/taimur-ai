"use client";
import { useState } from "react";
import Link from "next/link";
import { JOURNEY_DATA, PHASES, CATEGORY_CONFIG } from "@/lib/data";

function MidPageSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes("@") || status === "sending") return;
    setStatus("sending");
    try {
      await fetch("https://buttondown.com/api/emails/embed-subscribe/taimur", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: email.trim(), tag: "website-mid" }).toString(),
      });
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("sent");
      setEmail("");
    }
  };

  if (status === "sent") {
    return (
      <div style={{
        background: "#edf7f1", borderRadius: 16, padding: "28px 32px",
        textAlign: "center", margin: "40px 0 0",
        border: "1px solid #c8e6c9",
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "#1a8a5c", margin: 0 }}>
          ✓ You&apos;re in! Welcome to the journey.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, #f8faf9, #edf7f1)", borderRadius: 16,
      padding: "32px", margin: "40px 0 0",
      border: "1px solid #d4edda", textAlign: "center",
    }}>
      <p style={{
        fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 18,
        fontWeight: 700, color: "#1a1a1a", margin: "0 0 6px",
      }}>
        Liking what you see?
      </p>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 14,
        color: "#777", margin: "0 0 20px", lineHeight: 1.6,
      }}>
        Get a weekly roundup of lessons, tools, and breakthroughs — straight to your inbox.
      </p>
      <div style={{ display: "flex", gap: 10, maxWidth: 400, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
        <input
          type="email" placeholder="your@email.com" aria-label="Email address"
          value={email} onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
          style={{
            flex: 1, minWidth: 180, background: "#fff",
            border: "1.5px solid #d4edda", borderRadius: 10, padding: "12px 16px",
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#1a1a1a", outline: "none",
          }}
        />
        <button onClick={handleSubscribe} style={{
          background: "#1a8a5c", border: "none", borderRadius: 10,
          padding: "12px 24px", fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, color: "#fff", fontWeight: 600,
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.6 : 1,
        }}>
          {status === "sending" ? "Joining..." : "Subscribe Free"}
        </button>
      </div>
    </div>
  );
}

export function JourneySection() {
  const [phase, setPhase] = useState("all");
  const data = phase === "all" ? JOURNEY_DATA : JOURNEY_DATA.filter(d => d.phase === phase);

  return (
    <section id="journey" aria-label="Journey Timeline" style={{ padding: "100px 32px 80px", maxWidth: 860, margin: "0 auto" }}>
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
          color: "#888", maxWidth: 540, margin: "0 auto", lineHeight: 1.65,
        }}>
          Follow the daily evolution from traditional finance to AI-augmented workflows.
          Each entry is a real lesson, tool, or breakthrough.
        </p>
      </div>

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

      <div style={{ position: "relative", paddingLeft: 48 }}>
        <div style={{
          position: "absolute", left: 19, top: 8, bottom: 8,
          width: 2, background: "linear-gradient(to bottom, #ddd0f5, #e8e8e4)",
          borderRadius: 1,
        }} />

        {data.map((entry) => {
          const cat = CATEGORY_CONFIG[entry.category];
          const isFoundation = entry.day === 0;
          const dayLabel = isFoundation ? "Foundation" : `Day ${entry.day}`;

          return (
            <div key={entry.slug} style={{ position: "relative", marginBottom: 24 }}>
              <div style={{
                position: "absolute", left: -40, top: 28,
                width: 20, height: 20, borderRadius: "50%",
                background: "#fff", border: `2.5px solid ${isFoundation ? "#b48cff" : "#1a8a5c"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 2,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: isFoundation ? "#b48cff" : "#1a8a5c" }} />
              </div>

              <Link
                href={`/journey/${entry.slug}`}
                style={{
                  display: "block", textDecoration: "none",
                  background: "#fff", borderRadius: 16,
                  padding: "24px 28px",
                  border: `1px solid ${isFoundation ? "#ede7f6" : "#f0f0ec"}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.35s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {isFoundation && (
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
                        color: "#7c4dff", background: "#ede7f6", borderRadius: 5,
                        padding: "3px 8px", letterSpacing: "0.08em", textTransform: "uppercase",
                      }}>Foundation</span>
                    )}
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 700, color: isFoundation ? "#7c4dff" : "#1a1a1a" }}>{dayLabel}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#bbb" }}>&middot;</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#aaa" }}>
                      {new Date(entry.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>{cat.icon}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#999", fontWeight: 500 }}>{cat.label}</span>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20, fontWeight: 700, color: "#1a1a1a",
                  margin: "0 0 10px", lineHeight: 1.3,
                }}>
                  {entry.title}
                </h3>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  color: "#777", lineHeight: 1.7, margin: "0 0 18px",
                }}>
                  {entry.summary}
                </p>

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
                  <span style={{ color: "#bbb", fontSize: 18 }}>&rarr;</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Fix 4: Mid-page subscribe CTA */}
      <MidPageSubscribe />
    </section>
  );
}
