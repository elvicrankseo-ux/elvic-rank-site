import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${siteConfig.name}`,
  description: "Get straight answers to the most common questions about our SEO services, pricing, contracts, and process.",
};

export default function FAQPage() {
  return (
    <main className="flex-1 pt-20">
      <FAQ />
    </main>
  );
}
