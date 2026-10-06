import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import { siteConfig } from "@/config/site";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCta } from "@/components/layout/floating-cta";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import React from "react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { AuditModal } from "@/components/ui/audit-modal";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono was previously loaded here but never applied to any element
// (confirmed via codebase-wide search — no component uses `font-mono` or
// var(--font-geist-mono)). Removed as a measured performance fix: one
// fewer font file fetched on every page load, Phase 19.

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const homeTitle = `${siteConfig.name} | Restoration & Emergency Service SEO Agency`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: homeTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image.png", width: 394, height: 394 }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafaf8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = [getOrganizationSchema(), getWebsiteSchema()];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased overflow-x-clip w-full max-w-[100vw]`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col overflow-x-clip w-full max-w-[100vw] bg-paper pb-20 text-foreground sm:pb-0 relative">
        <GoogleAnalytics />
        {jsonLd.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Navbar />
        <main className="flex-grow flex flex-col overflow-x-clip w-full max-w-[100vw] relative">
          {children}
        </main>
        <Footer />
        <MobileTabBar />
        <FloatingCta />
        <React.Suspense fallback={null}>
          <AuditModal />
        </React.Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
