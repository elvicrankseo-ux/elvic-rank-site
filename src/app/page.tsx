import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/hero";
import { GrowthPillars } from "@/components/sections/growth-pillars";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { FreeAudit } from "@/components/sections/free-audit";
import { FAQ } from "@/components/sections/faq";

// Technical SEO cleanup: the root layout's default title/description
// (title.default + siteConfig.description) are what render for "/" when
// this page doesn't export its own metadata — but siteConfig.description
// is also the exact sentence rendered as visible copy in the Footer and
// used as the Organization schema's description, both of which are
// deliberately untouched here. Overriding description at the page level
// (title is left to inherit layout's homeTitle unchanged) fixes the
// <meta name="description"> length in isolation, without shortening any
// visible on-page text or the schema description.
const homeTitle = `${siteConfig.name} | Restoration & Emergency Service SEO Agency`;
const homeDescription =
  "SEO and lead generation for restoration and emergency service businesses — local SEO, Google Business Profile, and technical audits built for urgent searches.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image.png", width: 394, height: 394 }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Hero />
      <GrowthPillars />
      <TrustStrip />
      <Services limit={3} />
      <WhyUs />
      <Industries />
      <Process />
      <Testimonials />
      <Blog />
      <FreeAudit />
      <FAQ limit={4} />
    </main>
  );
}
