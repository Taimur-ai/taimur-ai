"use client";
// ============================================================
// components/NeuralVisual.tsx — The spreadsheet-to-streams animation
// Copy the full canvas animation from taimurg-site.jsx NeuralVisual()
// This is a placeholder — paste the full animation code from the
// working prototype (taimurg-site.jsx lines 64-462)
// ============================================================
import { useRef, useEffect } from "react";

export function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // NOTE: Paste the full animation draw() loop from the prototype here
    // The animation code is identical — it uses canvas 2D context
    // See taimurg-site.jsx for the complete implementation
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const W = 620, H = 500;
    canvas.width = W * dpr; canvas.height = H * dpr; ctx.scale(dpr, dpr);

    // Placeholder — shows the canvas works
    ctx.fillStyle = "#1e2d28";
    ctx.beginPath(); ctx.roundRect(0, 0, W, H, 20); ctx.fill();
    ctx.font = "500 16px 'DM Sans', sans-serif";
    ctx.fillStyle = "rgba(26, 200, 130, 0.4)";
    ctx.textAlign = "center";
    ctx.fillText("Animation loads here", W / 2, H / 2);
    ctx.fillText("(Copy full code from prototype)", W / 2, H / 2 + 24);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", maxWidth: 620, height: "auto", aspectRatio: "62/50", borderRadius: 20, display: "block" }} />
      <div style={{
        position: "absolute", bottom: -16, left: 20,
        background: "#fff", borderRadius: 14, padding: "14px 24px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)",
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
        border: "1px solid #f0f0ec",
      }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "#edf7f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a8a5c" strokeWidth="2.5" strokeLinecap="round"><polyline points="4 15 8 9 12 12 16 6 20 10"/></svg>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>Day <span style={{ color: "#1a8a5c" }}>127</span></div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "#888" }}>Many streams, one unified process</div>
        </div>
      </div>
    </div>
  );
}
