// ============================================================
// app/layout.tsx — Root layout with full SEO infrastructure
// ============================================================
import type { Metadata } from "next";
import { SITE } from "@/lib/data";

// ---- SEO: Default metadata for all pages ----
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.author, url: SITE.url }],
  creator: SITE.author,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  // Open Graph — for LinkedIn, Facebook, WhatsApp sharing
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{
      url: `${SITE.url}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "taimur.ai — An Accountant's AI Transformation Journey",
    }],
  },
  // Twitter Card — for X/Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}/og-image.png`],
    creator: "@taimur_g",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Canonical
  alternates: {
    canonical: SITE.url,
  },
  // Verification (add your IDs after setup)
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID",
    // yandex: "YOUR_YANDEX_ID",
  },
};

// ---- Schema.org structured data ----
function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.author,
    url: SITE.url,
    jobTitle: SITE.authorTitle,
    description: SITE.description,
    sameAs: [
      SITE.socials.youtube,
      SITE.socials.tiktok,
      SITE.socials.instagram,
    ],
    knowsAbout: [
      "Artificial Intelligence in Finance",
      "Accounting Automation",
      "Financial Analysis",
      "ACCA",
      "Machine Learning for Finance",
      "Python for Accounting",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    author: { "@type": "Person", name: SITE.author },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/journey?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#fafaf8" />
        {/* Schema.org JSON-LD */}
        <JsonLd />
        {/* Google Analytics placeholder */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
        */}
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#fafaf8",
          color: "#1a1a1a",
          fontFamily: "'DM Sans', sans-serif",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
