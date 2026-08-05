import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

/**
 * Builds page-level Metadata on top of the root defaults in layout.tsx.
 * Always sets an explicit canonical so we never end up with duplicate
 * www/non-www or trailing-slash variants indexed.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      // Next doesn't inherit the root layout's openGraph.images when a
      // page defines its own openGraph object — set explicitly here so
      // every page sharing this helper gets a social preview image.
      images: [{ url: "/opengraph-image.png", width: 394, height: 394 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
