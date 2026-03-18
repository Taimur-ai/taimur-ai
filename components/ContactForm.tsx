"use client";
import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim() || status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY_HERE",
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          from_name: "taimur.ai Contact Form",
          subject: `New message from ${name.trim()} via taimur.ai`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div style={{
        background: "#edf7f1", borderRadius: 20, padding: "48px 32px",
        textAlign: "center", border: "1px solid rgba(26,138,92,0.15)",
      }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>&#10003;</div>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: 24, fontWeight: 800, color: "#1a8a5c", margin: "0 0 8px",
        }}>Message sent!</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          color: "#666", lineHeight: 1.6,
        }}>
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            marginTop: 20, background: "#1a8a5c", border: "none", borderRadius: 10,
            padding: "10px 24px", fontFamily: "'DM Sans', sans-serif",
            fontSize: 14, fontWeight: 600, color: "#fff", cursor: "pointer",
          }}
        >Send another message</button>
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "36px 32px",
      border: "1px solid #f0f0ec",
      boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
    }}>
      {/* Name */}
      <div style={{ marginBottom: 20 }}>
        <label style={{
          display: "block", fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 8,
        }}>Your name</label>
        <input
          type="text"
          placeholder="What should I call you?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            display: "block", width: "100%", boxSizing: "border-box",
            padding: "14px 18px", borderRadius: 12,
            border: "1.5px solid #e8e8e4",
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            color: "#1a1a1a", background: "#fafaf8", outline: "none",
          }}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: 20 }}>
        <label style={{
          display: "block", fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 8,
        }}>Your email</label>
        <input
          type="email"
          placeholder="so I can get back to you"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block", width: "100%", boxSizing: "border-box",
            padding: "14px 18px", borderRadius: 12,
            border: "1.5px solid #e8e8e4",
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            color: "#1a1a1a", background: "#fafaf8", outline: "none",
          }}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: 24 }}>
        <label style={{
          display: "block", fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 8,
        }}>Message</label>
        <textarea
          placeholder="Tell me what's on your mind — a question about AI in finance, a collaboration idea, or just a hello..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          style={{
            display: "block", width: "100%", boxSizing: "border-box",
            padding: "14px 18px", borderRadius: 12,
            border: "1.5px solid #e8e8e4",
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            color: "#1a1a1a", background: "#fafaf8", outline: "none",
            resize: "vertical", minHeight: 140,
          }}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
          color: "#dc2626", margin: "0 0 16px",
        }}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        style={{
          display: "block", width: "100%",
          background: "#1a8a5c", border: "none", borderRadius: 12,
          padding: "16px 32px", fontFamily: "'DM Sans', sans-serif",
          fontSize: 15, fontWeight: 700, color: "#fff",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: (status === "sending" || !name.trim() || !email.trim() || !message.trim()) ? 0.5 : 1,
          transition: "all 0.3s",
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}
