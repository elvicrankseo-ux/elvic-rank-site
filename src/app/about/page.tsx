import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutPageContent } from "@/components/pages/about-page-content";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn more about Elvic Rank, our mission, and our expertise in SEO for restoration and emergency service businesses.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutPageContent />
    </main>
  );
}
