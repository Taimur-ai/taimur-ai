"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);

  const links = [
    { id: "journey", label: "Journey" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "tools", label: "Documentation" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "12px 0" : "18px 0",
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #f0f0ec" : "none",
      transition: "all 0.5s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          {/* Streamline T logo mark */}
          <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="8" cy="6" r="1.2" fill="#b48cff" opacity="0.35"/>
            <circle cx="14" cy="4.5" r="1" fill="#4db8d8" opacity="0.3"/>
            <circle cx="18" cy="3.5" r="1.2" fill="#ffb464" opacity="0.32"/>
            <circle cx="22" cy="4.5" r="1" fill="#64dcc8" opacity="0.3"/>
            <circle cx="28" cy="6" r="1.2" fill="#dc8c8c" opacity="0.32"/>
            <path d="M5 12 C10 9, 14 8, 18 8 C22 8, 26 9, 31 12" fill="none" stroke="#4db8d8" strokeWidth="1.2" strokeLinecap="round" opacity="0.25"/>
            <path d="M6.5 14 C11 11, 15 10, 18 10 C21 10, 25 11, 29.5 14" fill="none" stroke="#1a8a5c" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <path d="M8 16 C12 13, 16 12, 18 12 C20 12, 24 13, 28 16" fill="none" stroke="#60c8a0" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
            <path d="M15 12 C15 18, 16.5 24, 18 30" fill="none" stroke="#b48cff" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
            <path d="M18 10 C18 18, 18 24, 18 30" fill="none" stroke="#1a8a5c" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <path d="M21 12 C21 18, 19.5 24, 18 30" fill="none" stroke="#ffb464" strokeWidth="0.8" strokeLinecap="round" opacity="0.18"/>
            <circle cx="18" cy="31.5" r="1.5" fill="#1a8a5c" opacity="0.3"/>
            <circle cx="18" cy="31.5" r="0.8" fill="#c8ffe8" opacity="0.5"/>
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#1a1a1a", fontWeight: 700 }}>
            taimur<span style={{ color: "#1a8a5c" }}>.ai</span>
          </span>
        </Link>

        <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map((l) => (
            <a key={l.id} href={`/#${l.id}`} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              color: "#666", textDecoration: "none", transition: "color 0.3s",
            }}>{l.label}</a>
          ))}
          <a href="/#subscribe" style={{
            background: "#1a8a5c", borderRadius: 10, padding: "10px 24px",
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#fff",
            fontWeight: 600, textDecoration: "none",
          }}>Subscribe</a>
        </div>

        <button className="mobile-nav-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" style={{
          display: "none", background: "none", border: "none", cursor: "pointer",
          flexDirection: "column", gap: 5, padding: 8,
        }}>
          {[0,1,2].map(i => <span key={i} style={{
            width: 22, height: 2, background: "#1a1a1a", borderRadius: 1,
            transition: "all 0.3s",
            ...(mobileOpen && i === 0 ? { transform: "rotate(45deg) translate(5px,5px)" } : {}),
            ...(mobileOpen && i === 1 ? { opacity: 0 } : {}),
            ...(mobileOpen && i === 2 ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}),
          }} />)}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(255,255,255,0.98)", padding: "20px 32px",
          display: "flex", flexDirection: "column", gap: 18,
          borderBottom: "1px solid #f0f0ec",
        }}>
          {links.map((l) => (
            <a key={l.id} href={`/#${l.id}`} onClick={() => setMobileOpen(false)} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500,
              color: "#666", textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
        @media (min-width: 901px) { .mobile-nav-btn { display: none !important; } }
      `}</style>
    </nav>
  );
}
