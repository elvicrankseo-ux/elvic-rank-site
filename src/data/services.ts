import {
  Code,
  Search,
  MapPin,
  Bot,
  Cpu,
  Megaphone,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import type { ContentBlock } from "@/lib/content-blocks";

export type ServiceFaq = { question: string; answer: string };
export type ServiceBenefit = { title: string; description: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  points: string[];
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  benefits: ServiceBenefit[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  richContent?: ContentBlock[];
  ctaHeading?: string;
  relatedArticleSlug?: string;
  lastUpdated?: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code,
    title: "Web Development",
    shortDescription: "Build fast, modern, conversion-focused websites designed around your business goals.",
    points: [
      "Custom web applications",
      "Performance optimization",
      "Technical SEO foundations"
    ],
    metaTitle: "Web Development Services | Elvic Rank",
    metaDescription: "Professional web development services focusing on performance, conversion, and technical foundations for local businesses.",
    heroIntro: "Your website is the foundation of your digital growth. We build fast, modern, and conversion-focused websites designed to capture traffic and turn visitors into leads.",
    benefits: [
      { title: "Built for Speed", description: "Fast-loading pages that keep visitors engaged." },
      { title: "Conversion Focused", description: "Layouts designed to drive phone calls and form submissions." },
      { title: "SEO Ready", description: "Technical foundations built correctly from day one." }
    ],
    faqs: [
      { question: "Do you build custom websites?", answer: "Yes, we build fully custom websites tailored to your specific business needs and goals." },
      { question: "Are your websites mobile-friendly?", answer: "Absolutely. Every site we build is fully responsive and optimized for mobile devices." }
    ],
    relatedSlugs: ["seo", "local-seo", "ai-solutions"]
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    shortDescription: "Increase organic visibility and attract customers actively searching for your services.",
    points: [
      "Technical & On-page SEO",
      "Content & Keyword strategy",
      "Authority building"
    ],
    metaTitle: "SEO Services | Elvic Rank",
    metaDescription: "Comprehensive SEO strategies to improve organic rankings and drive qualified traffic to your business.",
    heroIntro: "Stop guessing why your competitors rank higher. We implement data-driven SEO strategies that increase your organic visibility and connect you with customers who are actively searching for your services.",
    benefits: [
      { title: "Higher Rankings", description: "Dominate search results for the keywords that matter to your bottom line." },
      { title: "Quality Traffic", description: "Attract visitors who have high intent to purchase." },
      { title: "Long-term Growth", description: "Build compounding authority that keeps you visible for years." }
    ],
    faqs: [
      { question: "How long does SEO take?", answer: "Meaningful SEO results typically take 3 to 6 months to materialize, depending on competition." }
    ],
    relatedSlugs: ["local-seo", "geo", "web-development"]
  },
  {
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    shortDescription: "Help local businesses become more visible when customers search for services nearby.",
    points: [
      "Google Business Profile",
      "Local map rankings",
      "Citation & review strategy"
    ],
    metaTitle: "Local SEO Services | Elvic Rank",
    metaDescription: "Dominate the local map pack and attract nearby customers with our specialized Local SEO services.",
    heroIntro: "When local customers need your services, they search 'near me'. We optimize your Google Business Profile and local signals so you show up in the Map Pack right when they are ready to call.",
    benefits: [
      { title: "Map Pack Visibility", description: "Secure the top spots in Google Maps for local searches." },
      { title: "Trust Building", description: "Review management strategies that build undeniable local authority." },
      { title: "Consistent Citations", description: "Ensure your business data is accurate across the entire web." }
    ],
    faqs: [
      { question: "What is the Map Pack?", answer: "The Map Pack is the top section of Google search results that highlights three local businesses on a map." }
    ],
    relatedSlugs: ["seo", "paid-advertising", "web-development"]
  },
  {
    slug: "geo",
    icon: Bot,
    title: "GEO (AI Search)",
    shortDescription: "Help businesses build visibility across modern AI-powered search experiences.",
    points: [
      "AI search visibility",
      "Entity optimization",
      "Answer-focused content"
    ],
    metaTitle: "GEO & AI Search Optimization | Elvic Rank",
    metaDescription: "Generative Engine Optimization (GEO) strategies to ensure your brand is cited and recommended by AI search engines.",
    heroIntro: "Search is changing. Generative Engine Optimization (GEO) ensures your brand is understood, cited, and recommended by AI platforms like ChatGPT, Perplexity, and Google's AI Overviews.",
    benefits: [
      { title: "Future-Proof Visibility", description: "Get ahead of the curve as users shift to conversational AI search." },
      { title: "Brand Authority", description: "Establish your business as the definitive entity in your niche." },
      { title: "Direct Answers", description: "Format your content so AI engines can easily extract and cite your expertise." }
    ],
    faqs: [
      { question: "What is GEO?", answer: "GEO stands for Generative Engine Optimization—the process of optimizing content to be referenced by AI models." }
    ],
    relatedSlugs: ["seo", "ai-solutions", "content-social-media"]
  },
  {
    slug: "ai-solutions",
    icon: Cpu,
    title: "AI Solutions",
    shortDescription: "Use AI to improve business operations, content, workflows, and customer experiences.",
    points: [
      "AI-powered workflows",
      "Business process automation",
      "AI customer experiences"
    ],
    metaTitle: "AI Solutions for Business | Elvic Rank",
    metaDescription: "Integrate custom AI solutions and automations to streamline your business operations and scale efficiently.",
    heroIntro: "AI isn't just a buzzword—it's a massive operational advantage. We help businesses integrate practical AI solutions to automate workflows, accelerate content creation, and improve customer interactions.",
    benefits: [
      { title: "Save Time", description: "Automate repetitive tasks so your team can focus on high-value work." },
      { title: "Scale Output", description: "Multiply your marketing and operational output using intelligent systems." },
      { title: "Better Experience", description: "Provide 24/7 intelligent responses to customer inquiries." }
    ],
    faqs: [
      { question: "Is AI right for my local business?", answer: "Yes, even simple AI automations like intelligent lead routing or review responses can save hours every week." }
    ],
    relatedSlugs: ["web-development", "geo", "content-social-media"]
  },
  {
    slug: "paid-advertising",
    icon: Megaphone,
    title: "Paid Advertising",
    shortDescription: "Put businesses in front of customers who are ready to take action immediately.",
    points: [
      "Google Ads & LSA",
      "Meta (Facebook/IG) Ads",
      "Conversion tracking"
    ],
    metaTitle: "Paid Advertising (Google & Meta) | Elvic Rank",
    metaDescription: "High-converting paid advertising campaigns across Google Ads and Meta to generate immediate leads.",
    heroIntro: "Don't wait for traffic—buy the exact clicks that lead to revenue. We manage highly targeted Google Ads and Meta campaigns that put your business directly in front of buyers at the exact moment they need you.",
    benefits: [
      { title: "Immediate Leads", description: "Turn on campaigns and start receiving targeted traffic instantly." },
      { title: "Measurable ROI", description: "Track every dollar spent directly to calls, form fills, and booked jobs." },
      { title: "Omnichannel Reach", description: "Capture high-intent searchers on Google and build awareness on Meta." }
    ],
    faqs: [
      { question: "Which is better, Google Ads or Meta Ads?", answer: "Google Ads capture immediate intent (people searching for a solution now), while Meta Ads are incredible for generating awareness and targeted demand." }
    ],
    relatedSlugs: ["seo", "local-seo", "web-development"]
  },
  {
    slug: "content-social-media",
    icon: MessageSquare,
    title: "Content & Social",
    shortDescription: "Build a consistent digital presence that keeps the business visible and relevant.",
    points: [
      "Social media strategy",
      "Brand content creation",
      "Lead-generation content"
    ],
    metaTitle: "Content & Social Media Marketing | Elvic Rank",
    metaDescription: "Strategic content creation and social media management to build brand authority and engage your audience.",
    heroIntro: "Your buyers are doing their research before they call. We build a consistent, authoritative content and social media presence that answers their questions, builds trust, and positions you as the definitive expert.",
    benefits: [
      { title: "Build Trust", description: "Showcase your expertise and past work to prospective clients." },
      { title: "Stay Top of Mind", description: "Consistent social presence ensures they think of you when they need help." },
      { title: "Fuel Growth", description: "Content acts as the engine that powers both your SEO and Paid Ad campaigns." }
    ],
    faqs: [
      { question: "Do you create the content for us?", answer: "Yes, we handle everything from strategy to creation and publishing." }
    ],
    relatedSlugs: ["seo", "geo", "paid-advertising"]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
