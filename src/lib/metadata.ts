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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
