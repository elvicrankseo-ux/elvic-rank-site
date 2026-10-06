import {
  Code,
  Search,
  MapPin,
  Bot,
  Cpu,
  Megaphone,
  MessageSquare,
  Target,
  type LucideIcon,
} from "lucide-react";

export type ServiceFaq = { question: string; answer: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceProcess = { title: string; description: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  points: string[];
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  whoItsFor: string;
  problemsSolved: string[];
  whatWeDo: string;
  process: ServiceProcess[];
  benefits: ServiceBenefit[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  layoutStyle: "a" | "b" | "c";
  ctaHeading?: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code,
    title: "Web Development",
    shortDescription: "Build fast, modern, conversion-focused websites designed around your business goals.",
    points: ["Business websites", "Landing pages", "Website redesign", "Performance optimization", "Technical SEO foundations"],
    metaTitle: "Web Development Services | Elvic Rank",
    metaDescription: "Professional web development services focusing on performance, conversion, and technical foundations.",
    heroIntro: "Your website is the foundation of your digital growth. We build fast, modern, and conversion-focused websites designed to capture traffic and turn visitors into leads.",
    whoItsFor: "Service businesses, agencies, and companies that rely on their website to generate leads and close sales.",
    problemsSolved: [
      "Slow loading speeds losing potential customers.",
      "Outdated designs that fail to build trust.",
      "Poor mobile experiences driving away users.",
      "Lack of clear conversion pathways."
    ],
    whatWeDo: "We design and develop high-performance websites from the ground up. Our focus is on clean code, seamless user experience, and technical perfection.",
    process: [
      { title: "Discovery", description: "Understanding your brand, audience, and goals." },
      { title: "Design", description: "Creating high-fidelity wireframes and visual concepts." },
      { title: "Development", description: "Building the site using Next.js and modern web standards." },
      { title: "Launch", description: "Rigorous testing, SEO migration, and going live." }
    ],
    benefits: [
      { title: "Built for Speed", description: "Fast-loading pages that keep visitors engaged." },
      { title: "Conversion Focused", description: "Layouts designed to drive phone calls and form submissions." },
      { title: "SEO Ready", description: "Technical foundations built correctly from day one." }
    ],
    faqs: [
      { question: "Do you build custom websites?", answer: "Yes, we build fully custom websites tailored to your specific business needs and goals." },
      { question: "Are your websites mobile-friendly?", answer: "Absolutely. Every site we build is fully responsive and optimized for mobile devices." }
    ],
    relatedSlugs: ["seo", "local-seo", "ai-solutions"],
    layoutStyle: "a"
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    shortDescription: "Increase organic visibility and attract customers actively searching for your services.",
    points: ["Technical SEO", "On-page optimization", "Content strategy", "Keyword strategy", "Authority building"],
    metaTitle: "SEO Services | Elvic Rank",
    metaDescription: "Comprehensive SEO strategies to improve organic rankings and drive qualified traffic to your business.",
    heroIntro: "Stop guessing why your competitors rank higher. We implement data-driven SEO strategies that increase your organic visibility and connect you with customers who are actively searching for your services.",
    whoItsFor: "Companies looking to reduce reliance on paid ads by building a sustainable, long-term flow of organic traffic.",
    problemsSolved: [
      "Stuck on page 2 (or worse) of Google.",
      "Traffic isn't converting into leads.",
      "Competitors dominating the search results.",
      "Past SEO efforts yielded no transparent results."
    ],
    whatWeDo: "We conduct deep technical audits, rebuild your content strategy, and acquire high-authority backlinks to push you up the search rankings.",
    process: [
      { title: "Audit", description: "Finding the technical and content gaps." },
      { title: "Strategy", description: "Mapping out keywords and competitor weaknesses." },
      { title: "Execution", description: "Fixing on-page elements and producing optimized content." },
      { title: "Authority", description: "Building high-quality backlinks to increase domain trust." }
    ],
    benefits: [
      { title: "Higher Rankings", description: "Dominate search results for the keywords that matter to your bottom line." },
      { title: "Quality Traffic", description: "Attract visitors who have high intent to purchase." },
      { title: "Long-term Growth", description: "Build compounding authority that keeps you visible for years." }
    ],
    faqs: [
      { question: "How long does SEO take?", answer: "Meaningful SEO results typically take 3 to 6 months to materialize, depending on competition." }
    ],
    relatedSlugs: ["local-seo", "geo", "content-social-media"],
    layoutStyle: "b"
  },
  {
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    shortDescription: "Help local businesses become more visible when customers search for services nearby.",
    points: ["Google Business Profile optimization", "Local map rankings", "Citation management", "Review strategy", "Local landing pages"],
    metaTitle: "Local SEO Services | Elvic Rank",
    metaDescription: "Dominate the local map pack and attract nearby customers with our specialized Local SEO services.",
    heroIntro: "When local customers need your services, they search 'near me'. We optimize your Google Business Profile and local signals so you show up in the Map Pack right when they are ready to call.",
    whoItsFor: "Service-area businesses and brick-and-mortar stores that depend on customers from their immediate geographic area.",
    problemsSolved: [
      "Invisible in the Google Map Pack.",
      "Inconsistent business information online.",
      "Struggling to get customer reviews.",
      "Losing local leads to closer competitors."
    ],
    whatWeDo: "We take over your Google Business Profile, manage your local citations across the web, and implement a strategy to consistently generate 5-star reviews.",
    process: [
      { title: "GBP Setup", description: "Claiming and completely optimizing your Google profile." },
      { title: "Citations", description: "Ensuring your Name, Address, and Phone number are identical everywhere." },
      { title: "Reviews", description: "Implementing automated systems to request reviews from happy customers." },
      { title: "Local Content", description: "Building location-specific pages on your website." }
    ],
    benefits: [
      { title: "Map Pack Visibility", description: "Secure the top spots in Google Maps for local searches." },
      { title: "Trust Building", description: "Review management strategies that build undeniable local authority." },
      { title: "Consistent Citations", description: "Ensure your business data is accurate across the entire web." }
    ],
    faqs: [
      { question: "What is the Map Pack?", answer: "The Map Pack is the top section of Google search results that highlights three local businesses on a map." }
    ],
    relatedSlugs: ["seo", "google-ads", "web-development"],
    layoutStyle: "c"
  },
  {
    slug: "geo",
    icon: Bot,
    title: "GEO (AI Search)",
    shortDescription: "Help businesses build visibility across modern AI-powered search experiences.",
    points: ["AI search visibility", "Entity optimization", "Answer-focused content", "Brand authority", "Structured information"],
    metaTitle: "GEO & AI Search Optimization | Elvic Rank",
    metaDescription: "Generative Engine Optimization (GEO) strategies to ensure your brand is cited and recommended by AI search engines.",
    heroIntro: "Search is changing. Generative Engine Optimization (GEO) ensures your brand is understood, cited, and recommended by AI platforms like ChatGPT, Perplexity, and Google's AI Overviews.",
    whoItsFor: "Forward-thinking brands that want to capture the rapidly growing segment of users who bypass traditional search engines for AI answers.",
    problemsSolved: [
      "AI models hallucinating incorrect facts about your business.",
      "Brand completely absent from AI-generated recommendations.",
      "Unstructured data confusing LLMs."
    ],
    whatWeDo: "We structure your website data, optimize entity relationships, and publish comprehensive 'answer-engine' content that forces AI models to recognize you as the definitive source.",
    process: [
      { title: "Entity Audit", description: "Evaluating how AI currently understands your brand." },
      { title: "Data Structuring", description: "Implementing advanced Schema markup and semantic HTML." },
      { title: "Content Realignment", description: "Formatting content into clear, factual, easily extractable answers." },
      { title: "Digital PR", description: "Getting your brand mentioned in sources that train AI models." }
    ],
    benefits: [
      { title: "Future-Proof Visibility", description: "Get ahead of the curve as users shift to conversational AI search." },
      { title: "Brand Authority", description: "Establish your business as the definitive entity in your niche." },
      { title: "Direct Answers", description: "Format your content so AI engines can easily extract and cite your expertise." }
    ],
    faqs: [
      { question: "What is GEO?", answer: "GEO stands for Generative Engine Optimization—the process of optimizing content to be referenced by AI models." }
    ],
    relatedSlugs: ["seo", "ai-solutions", "content-social-media"],
    layoutStyle: "a"
  },
  {
    slug: "ai-solutions",
    icon: Cpu,
    title: "AI Solutions",
    shortDescription: "Use AI to improve business operations, content, workflows, and customer experiences.",
    points: ["AI automation", "AI-powered workflows", "Business process automation", "AI integrations", "AI-assisted customer experiences"],
    metaTitle: "AI Solutions for Business | Elvic Rank",
    metaDescription: "Integrate custom AI solutions and automations to streamline your business operations and scale efficiently.",
    heroIntro: "AI isn't just a buzzword—it's a massive operational advantage. We help businesses integrate practical AI solutions to automate workflows, accelerate content creation, and improve customer interactions.",
    whoItsFor: "Operations-heavy businesses looking to cut overhead, reduce human error, and scale their output without adding headcount.",
    problemsSolved: [
      "Wasting hours on repetitive, manual data entry.",
      "Slow response times to customer inquiries.",
      "Inconsistent content production bottlenecks."
    ],
    whatWeDo: "We audit your daily operations, identify friction points, and deploy custom AI agents, chatbots, and automation scripts to handle the heavy lifting.",
    process: [
      { title: "Workflow Audit", description: "Identifying bottlenecks that are ripe for automation." },
      { title: "Tool Selection", description: "Choosing the right AI models and integration platforms." },
      { title: "Deployment", description: "Building and testing the automated pipelines." },
      { title: "Training", description: "Teaching your team how to leverage the new AI tools." }
    ],
    benefits: [
      { title: "Save Time", description: "Automate repetitive tasks so your team can focus on high-value work." },
      { title: "Scale Output", description: "Multiply your marketing and operational output using intelligent systems." },
      { title: "Better Experience", description: "Provide 24/7 intelligent responses to customer inquiries." }
    ],
    faqs: [
      { question: "Is AI right for my local business?", answer: "Yes, even simple AI automations like intelligent lead routing or review responses can save hours every week." }
    ],
    relatedSlugs: ["web-development", "geo", "content-social-media"],
    layoutStyle: "b"
  },
  {
    slug: "google-ads",
    icon: Target,
    title: "Google Ads",
    shortDescription: "Put your business at the top of search results when high-intent customers are looking for your services.",
    points: ["Search campaigns", "Local service campaigns (LSA)", "Conversion tracking", "Landing page optimization", "Campaign strategy"],
    metaTitle: "Google Ads Management | Elvic Rank",
    metaDescription: "High-converting Google Ads and LSA campaigns to generate immediate leads.",
    heroIntro: "Don't wait for organic traffic—buy the exact clicks that lead to revenue. We manage highly targeted Google Ads campaigns that put your business directly in front of buyers at the exact moment they search.",
    whoItsFor: "Businesses that need leads immediately and are willing to pay for highly qualified, ready-to-buy traffic.",
    problemsSolved: [
      "Wasting ad spend on unqualified clicks.",
      "Low conversion rates from existing campaigns.",
      "Lack of tracking—not knowing which ads actually drive phone calls."
    ],
    whatWeDo: "We build rigorous campaign architectures, craft compelling ad copy, and continuously optimize bidding strategies to lower your cost-per-lead while maximizing volume.",
    process: [
      { title: "Keyword Research", description: "Finding high-intent, profitable search terms." },
      { title: "Campaign Build", description: "Structuring ad groups, writing copy, and setting up extensions." },
      { title: "Tracking Setup", description: "Implementing robust conversion tracking for form fills and phone calls." },
      { title: "Optimization", description: "Daily monitoring, negative keyword additions, and bid adjustments." }
    ],
    benefits: [
      { title: "Immediate Leads", description: "Turn on campaigns and start receiving targeted traffic instantly." },
      { title: "Measurable ROI", description: "Track every dollar spent directly to calls, form fills, and booked jobs." },
      { title: "High Intent", description: "Capture users actively searching for solutions you provide." }
    ],
    faqs: [
      { question: "What is LSA?", answer: "Local Services Ads appear at the very top of Google and charge per lead, not per click." }
    ],
    relatedSlugs: ["seo", "meta-ads", "local-seo"],
    layoutStyle: "c"
  },
  {
    slug: "meta-ads",
    icon: Megaphone,
    title: "Meta Ads",
    shortDescription: "Build brand awareness and generate leads through targeted Facebook and Instagram advertising.",
    points: ["Targeted lead generation", "Retargeting campaigns", "Campaign strategy", "Ad creative & copy", "Audience segmentation"],
    metaTitle: "Meta Ads Management | Elvic Rank",
    metaDescription: "Targeted Facebook and Instagram advertising campaigns to build awareness and generate leads.",
    heroIntro: "Reach your ideal customers before they even start searching. We build targeted Meta ad campaigns on Facebook and Instagram to generate demand and capture leads proactively.",
    whoItsFor: "B2C companies and visual brands looking to generate demand, build brand awareness, and aggressively scale lead volume.",
    problemsSolved: [
      "Nobody knows your brand exists in the local market.",
      "Relying entirely on people already searching (Google).",
      "High drop-off rates on the website without retargeting."
    ],
    whatWeDo: "We design scroll-stopping creatives, write persuasive copy, and leverage Meta's powerful machine learning to find people likely to buy your services.",
    process: [
      { title: "Audience Strategy", description: "Defining demographics, interests, and custom audiences." },
      { title: "Creative Production", description: "Designing images and videos that capture attention." },
      { title: "Testing", description: "Running A/B tests on creatives and copy to find winners." },
      { title: "Scaling", description: "Increasing budget on the best-performing ads to drive volume." }
    ],
    benefits: [
      { title: "Proactive Reach", description: "Target demographics and behaviors aligned with your ideal customer." },
      { title: "Visual Engagement", description: "Use images and video to showcase your work and build trust." },
      { title: "Retargeting", description: "Stay in front of users who visited your site but didn't convert yet." }
    ],
    faqs: [
      { question: "Are Meta ads good for local businesses?", answer: "Yes, they are excellent for building local awareness and capturing leads before they search Google." }
    ],
    relatedSlugs: ["google-ads", "content-social-media", "web-development"],
    layoutStyle: "a"
  },
  {
    slug: "content-social-media",
    icon: MessageSquare,
    title: "Content & Social",
    shortDescription: "Build a consistent digital presence that keeps the business visible and relevant.",
    points: ["AI-assisted content creation", "Social media strategy", "Content calendars", "Brand content", "Lead-generation content"],
    metaTitle: "Content & Social Media Marketing | Elvic Rank",
    metaDescription: "Strategic content creation and social media management to build brand authority and engage your audience.",
    heroIntro: "Your buyers are doing their research before they call. We build a consistent, authoritative content and social media presence that answers their questions, builds trust, and positions you as the definitive expert.",
    whoItsFor: "Businesses that want to stay top-of-mind, educate their audience, and build long-term brand equity.",
    problemsSolved: [
      "'Ghost town' social profiles that make the business look closed.",
      "No educational content to help prospects make a buying decision.",
      "Inconsistent posting schedules."
    ],
    whatWeDo: "We act as your outsourced content team, planning, creating, and publishing high-quality blog posts and social updates that resonate with your target market.",
    process: [
      { title: "Strategy Mapping", description: "Defining content pillars and brand voice." },
      { title: "Content Calendar", description: "Scheduling topics out 30-60 days in advance." },
      { title: "Creation", description: "Writing articles and designing social media graphics." },
      { title: "Distribution", description: "Publishing across all your active platforms consistently." }
    ],
    benefits: [
      { title: "Build Trust", description: "Showcase your expertise and past work to prospective clients." },
      { title: "Stay Top of Mind", description: "Consistent social presence ensures they think of you when they need help." },
      { title: "Fuel Growth", description: "Content acts as the engine that powers both your SEO and Paid Ad campaigns." }
    ],
    faqs: [
      { question: "Do you create the content for us?", answer: "Yes, we handle everything from strategy to creation and publishing." }
    ],
    relatedSlugs: ["seo", "geo", "meta-ads"],
    layoutStyle: "b"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
