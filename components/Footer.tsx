import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #f0f0ec", padding: "32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 36 36" aria-hidden="true">
            <path d="M5 12 C10 9, 14 8, 18 8 C22 8, 26 9, 31 12" fill="none" stroke="#1a8a5c" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <path d="M18 10 C18 18, 18 24, 18 30" fill="none" stroke="#1a8a5c" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <circle cx="18" cy="31.5" r="1.5" fill="#1a8a5c" opacity="0.3"/>
            <circle cx="18" cy="31.5" r="0.8" fill="#c8ffe8" opacity="0.5"/>
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#1a1a1a", fontWeight: 700 }}>taimur<span style={{ color: "#1a8a5c" }}>.ai</span></span>
        </Link>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#bbb" }}>&copy; {new Date().getFullYear()} taimur.ai — All rights reserved.</span>
      </div>
    </footer>
  );
}
