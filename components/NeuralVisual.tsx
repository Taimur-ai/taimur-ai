"use client";
import { useRef, useEffect } from "react";

export function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame: number;
    const dpr = window.devicePixelRatio || 1;
    const W = 620, H = 500;
    canvas.width = W * dpr; canvas.height = H * dpr; ctx.scale(dpr, dpr);

    const tables = [
      { x: 18, y: 35, rows: 7, label: "LLM", col2: "Model", col3: "Out" },
      { x: 18, y: 310, rows: 4, label: "AI Agents", col2: "", col3: "Task" },
    ];
    const rowH = 26, tableW = 120;
    const nodeX = 155;

    const mildColors: number[][] = [
      [26, 200, 140],
      [60, 180, 220],
      [180, 140, 255],
      [255, 180, 100],
      [100, 220, 200],
      [220, 140, 180],
    ];

    const streams: any[] = [];
    let sid = 0;
    tables.forEach((tbl) => {
      for (let r = 0; r < tbl.rows; r++) {
        const y = tbl.y + 22 + r * rowH + rowH / 2;
        streams.push({
          id: sid++,
          srcY: y,
          endY: 80 + (sid / 12) * 340 + Math.sin(sid * 1.7) * 30,
          color: mildColors[sid % mildColors.length],
          w1: { amp: 35 + Math.random() * 55, freq: 1.2 + Math.random() * 1.5, phase: Math.random() * Math.PI * 2 },
          w2: { amp: 15 + Math.random() * 25, freq: 2.5 + Math.random() * 2, phase: Math.random() * Math.PI * 2 },
          w3: { amp: 8 + Math.random() * 12, freq: 4 + Math.random() * 3, phase: Math.random() * Math.PI * 2 },
          brightness: 0.6 + Math.random() * 0.4,
        });
      }
    });

    const particles: any[] = [];
    for (let i = 0; i < 40; i++) {
      const s = streams[Math.floor(Math.random() * streams.length)];
      particles.push({
        stream: s,
        t: Math.random(),
        speed: 0.001 + Math.random() * 0.0025,
        size: 2 + Math.random() * 3,
        opacity: 0.5 + Math.random() * 0.5,
        color: mildColors[Math.floor(Math.random() * mildColors.length)],
      });
    }

    let time = 0;
    const portalX = W - 65;
    const portalY = H / 2;

    function streamPt(s: any, t: number, tm: number) {
      const startX = nodeX + 14;
      const endX = portalX;
      const x = startX + (endX - startX) * t;
      const converge = t * t * t;
      const baseY = s.srcY * (1 - converge) + portalY * converge;
      const envStart = Math.min(1, t * 3);
      const envEnd = Math.pow(1 - t, 1.2);
      const envelope = envStart * envEnd;
      const wave1 = Math.sin(t * Math.PI * s.w1.freq + s.w1.phase + tm * 0.6) * s.w1.amp * envelope;
      const wave2 = Math.sin(t * Math.PI * s.w2.freq + s.w2.phase + tm * 0.4) * s.w2.amp * envelope;
      const wave3 = Math.sin(t * Math.PI * s.w3.freq + s.w3.phase + tm * 0.3) * s.w3.amp * envelope * 0.5;
      return { x, y: baseY + wave1 + wave2 + wave3 };
    }

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createRadialGradient(W * 0.3, H * 0.4, 40, W * 0.5, H * 0.5, W * 0.85);
      bg.addColorStop(0, "#2f3f38");
      bg.addColorStop(0.4, "#263530");
      bg.addColorStop(1, "#1a2822");
      ctx.fillStyle = bg;
      ctx.beginPath(); ctx.roundRect(0, 0, W, H, 20); ctx.fill();

      const vig = ctx.createRadialGradient(W * 0.45, H * 0.45, H * 0.2, W * 0.5, H * 0.5, W * 0.8);
      vig.addColorStop(0, "transparent");
      vig.addColorStop(1, "rgba(12, 20, 16, 0.5)");
      ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);

      tables.forEach((tbl) => {
        const th = 22 + tbl.rows * rowH;
        ctx.fillStyle = "rgba(180, 220, 200, 0.06)";
        ctx.strokeStyle = "rgba(26, 180, 120, 0.18)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.roundRect(tbl.x, tbl.y, tableW, th, 5); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "rgba(26, 180, 120, 0.1)";
        ctx.beginPath(); ctx.roundRect(tbl.x, tbl.y, tableW, 22, [5, 5, 0, 0]); ctx.fill();
        ctx.font = "bold 8.5px 'DM Sans', monospace";
        ctx.fillStyle = "rgba(26, 180, 120, 0.55)";
        ctx.fillText(tbl.label, tbl.x + 6, tbl.y + 15);
        ctx.fillText(tbl.col2 || "Desc", tbl.x + 32, tbl.y + 15);
        ctx.fillText(tbl.col3, tbl.x + 90, tbl.y + 15);
        [30, 85].forEach(cx => {
          ctx.beginPath(); ctx.moveTo(tbl.x + cx, tbl.y); ctx.lineTo(tbl.x + cx, tbl.y + th);
          ctx.strokeStyle = "rgba(26, 180, 120, 0.06)"; ctx.lineWidth = 0.5; ctx.stroke();
        });
        for (let r = 0; r < tbl.rows; r++) {
          const ry = tbl.y + 22 + r * rowH;
          ctx.beginPath(); ctx.moveTo(tbl.x, ry); ctx.lineTo(tbl.x + tableW, ry);
          ctx.strokeStyle = "rgba(26, 180, 120, 0.07)"; ctx.lineWidth = 0.5; ctx.stroke();
          ctx.font = "500 8.5px 'DM Sans', monospace";
          ctx.fillStyle = "rgba(180, 220, 200, 0.3)";
          const rowNum = tbl.label === "AI Agents" ? [1, 2, 3, 4][r] : r + 1;
          ctx.fillText(String(rowNum), tbl.x + 8, ry + 17);
          const blocks = 1 + Math.floor(Math.sin(r * 2.3 + sid) * 1.5 + 1.5);
          for (let b = 0; b < blocks; b++) {
            const bx = tbl.x + 35 + b * 18;
            const bw = 10 + (b * 4);
            const pulse = Math.sin(time * 2 + r * 0.7 + b * 0.4) * 0.2 + 0.8;
            const bright = b === blocks - 1 ? 0.35 : 0.15;
            ctx.fillStyle = `rgba(26, 200, 130, ${bright * pulse})`;
            ctx.beginPath(); ctx.roundRect(bx, ry + 7, bw, 11, 2); ctx.fill();
          }
          const ap = Math.sin(time * 1.5 + r) * 0.15 + 0.85;
          ctx.fillStyle = `rgba(26, 220, 140, ${0.35 * ap})`;
          ctx.beginPath(); ctx.roundRect(tbl.x + 92, ry + 7, 18, 11, 2); ctx.fill();
        }
      });

      streams.forEach((s: any, i: number) => {
        const nx = nodeX;
        const ny = s.srcY;
        const pulse = 0.6 + Math.sin(time * 2.2 + i * 0.6) * 0.4;
        const [cr, cg, cb] = s.color;
        ctx.beginPath(); ctx.moveTo(tableW + 18, ny); ctx.lineTo(nx - 7, ny);
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.3 * pulse})`;
        ctx.lineWidth = 1.5; ctx.stroke();
        ctx.beginPath(); ctx.arc(nx, ny, 11, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.06 * pulse})`; ctx.fill();
        ctx.beginPath(); ctx.arc(nx, ny, 7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.12 * pulse})`; ctx.fill();
        ctx.beginPath(); ctx.arc(nx, ny, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.55 * pulse})`; ctx.fill();
        ctx.beginPath(); ctx.arc(nx, ny, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.min(255, cr + 150)}, ${Math.min(255, cg + 60)}, ${Math.min(255, cb + 80)}, ${0.65 * pulse})`; ctx.fill();
      });

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      streams.forEach((s: any) => {
        const segs = 80;
        const [cr, cg, cb] = s.color;
        ctx.beginPath(); ctx.moveTo(nodeX + 10, s.srcY);
        for (let i = 1; i <= segs; i++) { const pt = streamPt(s, i / segs, time); ctx.lineTo(pt.x, pt.y); }
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.025 * s.brightness})`; ctx.lineWidth = 12; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(nodeX + 10, s.srcY);
        for (let i = 1; i <= segs; i++) { const pt = streamPt(s, i / segs, time); ctx.lineTo(pt.x, pt.y); }
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.045 * s.brightness})`; ctx.lineWidth = 5; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(nodeX + 10, s.srcY);
        for (let i = 1; i <= segs; i++) { const pt = streamPt(s, i / segs, time); ctx.lineTo(pt.x, pt.y); }
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.09 * s.brightness})`; ctx.lineWidth = 1.5; ctx.stroke();
      });

      particles.forEach((p: any) => {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.stream = streams[Math.floor(Math.random() * streams.length)];
          p.speed = 0.001 + Math.random() * 0.0025;
          p.color = mildColors[Math.floor(Math.random() * mildColors.length)];
        }
        const pt = streamPt(p.stream, p.t, time);
        const prog = p.t;
        const [cr, cg, cb] = p.color;
        const shrink = prog < 0.8 ? 1 : 1 - ((prog - 0.8) / 0.2);
        const sz = p.size * shrink;
        if (sz < 0.3) return;
        ctx.beginPath(); ctx.arc(pt.x, pt.y, sz + 8 * shrink, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.04 * p.opacity * shrink})`; ctx.fill();
        ctx.beginPath(); ctx.arc(pt.x, pt.y, sz + 4 * shrink, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.08 * p.opacity * shrink})`; ctx.fill();
        ctx.beginPath(); ctx.arc(pt.x, pt.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${(0.4 + prog * 0.4) * p.opacity * shrink})`; ctx.fill();
        if (sz > 0.8) {
          ctx.beginPath(); ctx.arc(pt.x, pt.y, 1.2 * shrink, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${Math.min(255, cr + 170)}, ${Math.min(255, cg + 60)}, ${Math.min(255, cb + 80)}, ${(0.5 + prog * 0.3) * p.opacity * shrink})`; ctx.fill();
        }
        const prevPt = streamPt(p.stream, Math.max(0, p.t - 0.025), time);
        const prevPt2 = streamPt(p.stream, Math.max(0, p.t - 0.05), time);
        ctx.beginPath(); ctx.moveTo(pt.x, pt.y); ctx.quadraticCurveTo(prevPt.x, prevPt.y, prevPt2.x, prevPt2.y);
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.12 * p.opacity * shrink})`; ctx.lineWidth = sz * 0.8; ctx.stroke();
      });

      const pp = 0.7 + Math.sin(time * 1.8) * 0.3;
      ctx.beginPath(); ctx.arc(portalX, portalY, 28, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(26, 200, 140, ${0.02 * pp})`; ctx.fill();
      for (let r = 0; r < 3; r++) {
        const angle = time * 1.2 + r * (Math.PI * 2 / 3);
        ctx.beginPath(); ctx.arc(portalX, portalY, 20, angle, angle + 0.8);
        ctx.strokeStyle = `rgba(26, 220, 150, ${0.08 * pp})`; ctx.lineWidth = 1.5; ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(portalX, portalY, 14, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(26, 220, 150, ${0.06 * pp})`; ctx.fill();
      ctx.strokeStyle = `rgba(26, 230, 160, ${0.12 * pp})`; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.arc(portalX, portalY, 8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(26, 230, 160, ${0.12 * pp})`; ctx.fill();
      ctx.strokeStyle = `rgba(100, 255, 200, ${0.2 * pp})`; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(portalX, portalY, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(26, 240, 170, ${0.4 * pp})`; ctx.fill();
      ctx.beginPath(); ctx.arc(portalX, portalY, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 255, 235, ${0.7 * pp})`; ctx.fill();

      const outLen = 55;
      ctx.beginPath(); ctx.moveTo(portalX + 6, portalY); ctx.lineTo(portalX + outLen, portalY);
      ctx.strokeStyle = `rgba(26, 220, 150, ${0.06 * pp})`; ctx.lineWidth = 10; ctx.lineCap = "round"; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(portalX + 6, portalY); ctx.lineTo(portalX + outLen, portalY);
      ctx.strokeStyle = `rgba(26, 240, 170, ${0.15 * pp})`; ctx.lineWidth = 2.5; ctx.stroke();
      const arrowX = portalX + outLen;
      ctx.beginPath(); ctx.moveTo(arrowX - 7, portalY - 5); ctx.lineTo(arrowX, portalY); ctx.lineTo(arrowX - 7, portalY + 5);
      ctx.strokeStyle = `rgba(26, 240, 170, ${0.25 * pp})`; ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.stroke();
      ctx.font = "600 9px 'DM Sans', sans-serif";
      ctx.fillStyle = `rgba(26, 220, 150, ${0.25 * pp})`;
      ctx.textAlign = "center";
      ctx.fillText("UNIFIED", portalX, portalY + 38);
      ctx.fillText("PROCESS", portalX, portalY + 49);
      ctx.textAlign = "left";

      for (let i = 0; i < 18; i++) {
        const fx = 190 + Math.sin(time * 0.2 + i * 1.9) * 180 + i * 18;
        const fy = 60 + Math.cos(time * 0.18 + i * 1.4) * (H - 120);
        const fop = 0.03 + Math.sin(time * 0.8 + i * 2.1) * 0.02;
        const fc = mildColors[i % mildColors.length];
        ctx.beginPath(); ctx.arc(fx, fy, 1.5 + Math.sin(time + i) * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${fc[0]}, ${fc[1]}, ${fc[2]}, ${fop})`; ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", maxWidth: 620, height: "auto", aspectRatio: "62/50", borderRadius: 20, display: "block" }} />
      <div style={{ position: "absolute", bottom: -16, left: 20, background: "#fff", borderRadius: 14, padding: "14px 24px", boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", border: "1px solid #f0f0ec" }}>
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
