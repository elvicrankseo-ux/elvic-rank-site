import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

/**
 * Fallback lastModified for pages that don't track their own change date —
 * the site's last general content update. Deliberately NOT `new Date()`:
 * stamping every page with the current build/request time regardless of
 * whether it actually changed is a misleading freshness signal. Services
 * that have since been substantively edited set their own `lastUpdated`
 * (see src/data/services.ts) and take priority over this fallback.
 */
const SITE_LAST_UPDATED = new Date("2026-08-05");

export default function sitemap(): MetadataRoute.Sitemap {
  // The blog index reflects whichever article is newest, since that's what
  // actually changes its rendered content.
  const newestPostDate = new Date(
    Math.max(...blogPosts.map((post) => new Date(post.publishDate).getTime()))
  );

  return [
    {
      url: siteConfig.url,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified: service.lastUpdated
        ? new Date(service.lastUpdated)
        : SITE_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/blog`,
      lastModified: newestPostDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${siteConfig.url}/site-map`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];
}
