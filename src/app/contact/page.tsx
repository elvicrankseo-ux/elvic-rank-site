import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Contact as ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with Elvic Rank. Schedule a free strategy call or send us a message to discuss your SEO needs.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-20">
      <ContactSection />
    </main>
  );
}
