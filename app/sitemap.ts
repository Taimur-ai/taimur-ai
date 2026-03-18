// ============================================================
// app/sitemap.ts — Dynamic XML sitemap
// Auto-updates as you add new journey entries
// ============================================================
import type { MetadataRoute } from "next";
import { JOURNEY_DATA, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${SITE.url}/#journey`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${SITE.url}/#portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE.url}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE.url}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic journey entry pages — the SEO workhorses
  const journeyPages = JOURNEY_DATA.map((entry) => ({
    url: `${SITE.url}/journey/${entry.slug}`,
    lastModified: new Date(entry.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...journeyPages];
}
