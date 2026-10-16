import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutPageContent } from "@/components/pages/about-page-content";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn more about Elvic Rank, our team, and how we help businesses become easier to find, trust, and choose.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutPageContent />
    </main>
  );
}
