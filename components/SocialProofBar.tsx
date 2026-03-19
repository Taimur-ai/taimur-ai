import { SITE } from "@/lib/data";

export function SocialProofBar() {
  return (
    <div style={{
      padding: "40px 32px", maxWidth: 800, margin: "0 auto",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
        color: "#ccc", letterSpacing: "0.12em", textTransform: "uppercase",
        marginBottom: 20,
      }}>
        Follow the journey on
      </p>
      <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        {[
          { label: "YouTube", href: SITE.socials.youtube, icon: "▶" },
          { label: "TikTok", href: SITE.socials.tiktok, icon: "♪" },
          { label: "Instagram", href: SITE.socials.instagram, icon: "◎" },
          { label: "taimur.ai", href: "/", icon: "T" },
        ].map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            target={platform.href.startsWith("http") ? "_blank" : undefined}
            rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              color: "#999", textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            <span style={{
              width: 32, height: 32, borderRadius: 8, background: "#f5f5f2",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, color: "#888", border: "1px solid #ececea",
            }}>
              {platform.icon}
            </span>
            {platform.label}
          </a>
        ))}
      </div>
    </div>
  );
}
