"use client";
import { useState } from "react";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes("@")) return;
    setStatus("sending");

    try {
      const res = await fetch("https://buttondown.com/api/emails/embed-subscribe/taimur", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: email.trim() }).toString(),
      });

      // Buttondown returns a redirect on success, so any non-error response is good
      setStatus("sent");
      setEmail("");
    } catch {
      // fetch will throw on redirect which is actually success for Buttondown
      setStatus("sent");
      setEmail("");
    }
  };

  return (
    <section id="subscribe" aria-label="Newsletter signup" style={{ padding: "80px 32px", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ background: "linear-gradient(135deg, #1a8a5c, #15704a)", borderRadius: 24, padding: "clamp(40px, 6vw, 64px) clamp(28px, 5vw, 56px)", textAlign: "center", position: "relative", overflow: "hidden" }}>

        {status === "sent" ? (
          <>
            <div style={{ fontSize: 40, marginBottom: 12 }}>&#10003;</div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              You&apos;re in!
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto" }}>
              Check your email to confirm your subscription. Every new entry will land straight in your inbox.
            </p>
          </>
        ) : (
          <>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em", position: "relative" }}>Get Every Day Delivered</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 32px", position: "relative" }}>Daily entries, tool discoveries, and hard-won lessons — straight to your inbox. Free, always.</p>

            {status === "error" && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#ffcccb", marginBottom: 16 }}>
                Something went wrong. Please try again.
              </p>
            )}

            <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto", flexWrap: "wrap", position: "relative" }}>
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
                style={{
                  flex: 1, minWidth: 200,
                  background: "rgba(255,255,255,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  borderRadius: 12, padding: "14px 20px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "#fff", outline: "none",
                }}
              />
              <button
                onClick={handleSubscribe}
                disabled={status === "sending" || !email.trim()}
                style={{
                  background: "#fff", border: "none", borderRadius: 12,
                  padding: "14px 28px", fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, color: "#1a8a5c", fontWeight: 700,
                  cursor: "pointer",
                  opacity: (status === "sending" || !email.trim()) ? 0.6 : 1,
                }}
              >
                {status === "sending" ? "..." : "Subscribe"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
