import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: "Comprehensive SEO and digital growth services designed specifically for restoration and emergency service companies.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Services />
    </main>
  );
}
