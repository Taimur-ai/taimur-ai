"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);

  const sectionLinks = [
    { id: "journey", label: "Journey" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "tools", label: "Documentation" },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "12px 0" : "14px 0",
      background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(250,250,248,0.98)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid #e8e8e4" : "1px solid transparent",
      transition: "all 0.5s ease",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.04)" : "none",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
            <path d="M3 13 C8 9, 13 7, 18 7 C23 7, 28 9, 33 13" fill="none" stroke="#ffb464" strokeWidth="0.8" strokeLinecap="round" opacity="0.22"/>
            <path d="M4 15 C9 10, 14 8.5, 18 8.5 C22 8.5, 27 10, 32 15" fill="none" stroke="#4db8d8" strokeWidth="1" strokeLinecap="round" opacity="0.28"/>
            <path d="M5 17 C10 12, 14 10, 18 10 C22 10, 26 12, 31 17" fill="none" stroke="#1a8a5c" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <path d="M6 19 C11 13.5, 15 11.5, 18 11.5 C21 11.5, 25 13.5, 30 19" fill="none" stroke="#60c8a0" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
            <path d="M7 21 C12 15, 15.5 13, 18 13 C20.5 13, 24 15, 29 21" fill="none" stroke="#b48cff" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
            <path d="M14 14 C13 19, 15 25, 17.5 31" fill="none" stroke="#4db8d8" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
            <path d="M16 11.5 C15.5 18, 16.5 24, 17.8 31" fill="none" stroke="#b48cff" strokeWidth="1" strokeLinecap="round" opacity="0.22"/>
            <path d="M18 10 C18 17, 18 24, 18 31" fill="none" stroke="#1a8a5c" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <path d="M20 11.5 C20.5 18, 19.5 24, 18.2 31" fill="none" stroke="#60c8a0" strokeWidth="1" strokeLinecap="round" opacity="0.22"/>
            <path d="M22 14 C23 19, 21 25, 18.5 31" fill="none" stroke="#ffb464" strokeWidth="0.8" strokeLinecap="round" opacity="0.18"/>
            <circle cx="18" cy="32" r="2" fill="#1a8a5c" opacity="0.12"/>
            <circle cx="18" cy="32" r="1.2" fill="#1a8a5c" opacity="0.35"/>
            <circle cx="18" cy="32" r="0.6" fill="#c8ffe8" opacity="0.65"/>
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#1a1a1a", fontWeight: 700 }}>
            taimur<span style={{ color: "#1a8a5c" }}>.ai</span>
          </span>
        </Link>

        <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {sectionLinks.map((l) => (
            <a key={l.id} href={`/#${l.id}`} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              color: "#666", textDecoration: "none", transition: "color 0.3s",
            }}>{l.label}</a>
          ))}
          <Link href="/contact" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
            color: "#666", textDecoration: "none", transition: "color 0.3s",
          }}>Contact</Link>
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
          {sectionLinks.map((l) => (
            <a key={l.id} href={`/#${l.id}`} onClick={() => setMobileOpen(false)} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500,
              color: "#666", textDecoration: "none",
            }}>{l.label}</a>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500,
            color: "#666", textDecoration: "none",
          }}>Contact</Link>
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
