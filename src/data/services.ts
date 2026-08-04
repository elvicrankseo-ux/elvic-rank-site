import {
  Search,
  MapPin,
  FileText,
  LayoutGrid,
  Link2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type ServiceFaq = { question: string; answer: string };
export type ServiceBenefit = { title: string; description: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** Short card copy for the homepage Services grid. */
  shortDescription: string;
  /** "What's included" bullets, reused on both the card and landing page. */
  points: string[];
  metaTitle: string;
  metaDescription: string;
  /** Longer landing-page intro paragraph — distinct from shortDescription. */
  heroIntro: string;
  benefits: ServiceBenefit[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "technical-seo-audit",
    icon: Search,
    title: "Technical SEO Audits",
    shortDescription:
      "Full-site crawls that catch what's quietly capping your rankings — broken links, thin indexation, slow Core Web Vitals, and structural issues.",
    points: ["Site architecture & crawlability", "Core Web Vitals", "Schema & indexation"],
    metaTitle: "Technical SEO Audit Services",
    metaDescription:
      "Full-site technical SEO audits for local service businesses — Core Web Vitals, crawl errors, indexation, and schema fixes that unlock rankings you're already losing.",
    heroIntro:
      "Before you write another blog post or chase another backlink, find out what's actually capping your rankings. Our technical SEO audits crawl every page of your site to surface the crawl errors, indexation gaps, Core Web Vitals issues, and structural problems that quietly cost you visibility — then hand you a prioritized fix list, not just a wall of red flags.",
    benefits: [
      {
        title: "Stop guessing why rankings stall",
        description:
          "Most ranking plateaus trace back to a handful of technical issues. We find them and rank them by impact, not alphabetically.",
      },
      {
        title: "Built for non-developers",
        description:
          "Every finding comes with a plain-English explanation of why it matters and what to do about it — no jargon you need to Google.",
      },
      {
        title: "Prioritized, not overwhelming",
        description:
          "You get a short list of what to fix first, not a 40-page PDF that never gets actioned.",
      },
    ],
    faqs: [
      {
        question: "How long does a technical SEO audit take?",
        answer:
          "Most audits are completed within 3–5 business days, depending on site size.",
      },
      {
        question: "Will I get more than just a list of problems?",
        answer:
          "Yes — every audit includes a prioritized action plan, not just a diagnostic report.",
      },
      {
        question: "Do you fix the issues you find, or just report them?",
        answer:
          "Both, if you want — the audit can stand alone, or roll directly into ongoing implementation.",
      },
    ],
  },
  {
    slug: "local-seo-google-business-profile",
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    shortDescription:
      "Own the map pack. We optimize, verify, and actively manage your Google Business Profile so you show up where local buyers are looking.",
    points: ["GBP optimization & posts", "Citation building", "Review strategy"],
    metaTitle: "Local SEO & Google Business Profile Services",
    metaDescription:
      "Local SEO and Google Business Profile optimization for service businesses — own the map pack, build citations, and turn “near me” searches into calls.",
    heroIntro:
      "When someone searches “[your service] near me,” the map pack is the whole game. We optimize and actively manage your Google Business Profile, build consistent citations across the directories that matter, and structure your site so Google — and buyers — know exactly where you operate and what you do.",
    benefits: [
      {
        title: "Win the map pack, not just page one",
        description:
          "Map pack clicks convert differently than organic listings — we optimize for both.",
      },
      {
        title: "Consistency across every listing",
        description:
          "Inconsistent name/address/phone data across directories quietly erodes local trust signals. We fix that first.",
      },
      {
        title: "Reviews that compound",
        description:
          "A simple, repeatable system for asking happy customers for reviews — the single biggest lever most businesses leave untouched.",
      },
    ],
    faqs: [
      {
        question: "Do I need a physical storefront for local SEO to work?",
        answer:
          "No — service-area businesses without a public storefront can still rank in the map pack with the right Google Business Profile setup.",
      },
      {
        question: "How is this different from general SEO?",
        answer:
          "Local SEO weighs proximity, GBP signals, and citation consistency alongside the usual on-page and technical factors.",
      },
      {
        question: "How long until I see movement in the map pack?",
        answer:
          "Many businesses see initial GBP improvements within a few weeks; broader local ranking gains typically build over 60–90 days.",
      },
    ],
  },
  {
    slug: "content-strategy-seo",
    icon: FileText,
    title: "Content Strategy & Creation",
    shortDescription:
      "Search-intent-driven content that ranks and reads like it was written by someone who actually knows the trade.",
    points: ["Keyword & intent research", "Service page copy", "Blog & topical authority"],
    metaTitle: "SEO Content Strategy & Creation Services",
    metaDescription:
      "SEO content strategy for local service businesses — keyword research, service page copy, and blog content built around real buyer intent, not word counts.",
    heroIntro:
      "Content that ranks and content that reads well aren't supposed to be different things. We research what your actual buyers are searching for, then build service pages and blog content that answer those questions clearly enough that Google — and the reader — both trust you as the answer.",
    benefits: [
      {
        title: "Intent first, keywords second",
        description:
          "We start with what a buyer at your specific point in their decision actually needs to know, then map keywords to that — not the other way around.",
      },
      {
        title: "Written like you know the trade",
        description:
          "No generic “top 10 tips” filler. Content is specific enough to your service and area that it couldn't be copy-pasted for a competitor.",
      },
      {
        title: "Built for topical authority",
        description:
          "Individual pages matter less than the overall pattern Google sees. We build out coverage of a topic area, not just isolated posts.",
      },
    ],
    faqs: [
      {
        question: "Do you write the content, or just strategize?",
        answer:
          "We do both — strategy and drafts, or we can work alongside an existing writer if you have one.",
      },
      {
        question: "How much content do I need?",
        answer:
          "It depends on your competition and current coverage — part of the engagement is figuring out exactly that, not guessing upfront.",
      },
      {
        question: "Will the content sound generic or AI-written?",
        answer:
          "No — every piece is written specific to your business, service area, and voice, then reviewed for accuracy before it goes live.",
      },
    ],
  },
  {
    slug: "on-page-seo",
    icon: LayoutGrid,
    title: "On-Page & Site Architecture",
    shortDescription:
      "Clean internal linking, keyword-mapped pages, and a structure search engines — and buyers — can actually navigate.",
    points: ["Internal linking", "Metadata & headings", "Conversion-ready layout"],
    metaTitle: "On-Page SEO & Site Architecture Services",
    metaDescription:
      "On-page SEO and site architecture for local service businesses — clean internal linking, keyword-mapped pages, and layouts built to convert, not just rank.",
    heroIntro:
      "Rankings and conversions live or die on the page itself. We map every page to a specific keyword and intent, clean up internal linking so authority flows to the pages that matter, and structure metadata and headings the way search engines actually parse them — without turning your site into a keyword-stuffed mess.",
    benefits: [
      {
        title: "One page, one job",
        description:
          "Competing pages targeting the same keyword split your own authority. We consolidate and map clearly instead.",
      },
      {
        title: "Internal links with a purpose",
        description:
          "Every internal link is placed to move authority and users toward a conversion point, not just for the sake of linking.",
      },
      {
        title: "Structure that converts",
        description:
          "On-page SEO that ignores the CTA is only half the job. Layout and copy are built to turn a visitor into a lead.",
      },
    ],
    faqs: [
      {
        question: "Will this require a redesign of my whole site?",
        answer:
          "Usually not — most on-page SEO work happens within your existing design, not a full rebuild.",
      },
      {
        question: "What's the difference between this and technical SEO?",
        answer:
          "Technical SEO fixes what search engines can crawl and index; on-page SEO optimizes what's actually on each page once they get there.",
      },
      {
        question: "Do you handle metadata for every page, or just the main ones?",
        answer:
          "We prioritize your highest-intent pages first, then expand coverage from there.",
      },
    ],
  },
  {
    slug: "link-building",
    icon: Link2,
    title: "Link Building & Authority",
    shortDescription:
      "Earned links from relevant, real sites — not link farms that put your domain at risk.",
    points: ["Digital PR outreach", "Local citations", "Competitor gap analysis"],
    metaTitle: "Local Link Building Services",
    metaDescription:
      "White-hat local link building for service businesses — digital PR, relevant citations, and competitor gap analysis. No link farms, no shortcuts.",
    heroIntro:
      "Links are still one of the strongest ranking signals — but only the right ones. We earn links from relevant, real sites through digital PR and local outreach, build out the citations that matter for your area, and study exactly where competitors are getting links you're missing.",
    benefits: [
      {
        title: "Quality over quantity, always",
        description:
          "Ten relevant, earned links outperform a hundred low-quality directory drops — and don't put your domain at risk.",
      },
      {
        title: "Local relevance matters most",
        description:
          "A link from a local news site or industry association carries more weight for local rankings than a generic guest post.",
      },
      {
        title: "We show you the gap",
        description:
          "Competitor backlink analysis shows exactly which sites are linking to competitors and not you — a clear target list, not guesswork.",
      },
    ],
    faqs: [
      {
        question: "Is link building safe for my site?",
        answer:
          "Yes — we only pursue white-hat, editorially earned links. We won't touch link farms or paid schemes that risk a Google penalty.",
      },
      {
        question: "How many links will I get?",
        answer:
          "Quality and relevance matter more than volume — we'd rather get you five strong links than fifty weak ones.",
      },
      {
        question: "Can you remove bad backlinks from a previous agency?",
        answer:
          "Yes — backlink audits and disavow recommendations are part of this service if you've had prior link building work done.",
      },
    ],
  },
  {
    slug: "seo-reporting-analytics",
    icon: BarChart3,
    title: "Tracking & Reporting",
    shortDescription:
      "Weekly, plain-English reporting tied to rankings, traffic, and the metric that actually matters: booked jobs.",
    points: ["Rank tracking", "Call & form tracking", "Monthly strategy calls"],
    metaTitle: "SEO Tracking & Reporting Services",
    metaDescription:
      "Plain-English SEO reporting for local service businesses — rank tracking, call and form tracking, and monthly strategy calls tied to booked jobs.",
    heroIntro:
      "A ranking report that doesn't tie back to your phone ringing isn't worth much. We track rankings, calls, and form submissions in plain English — delivered weekly — and get on a call with you monthly to talk through what's actually working, not just what moved a few positions.",
    benefits: [
      {
        title: "Tied to revenue, not vanity metrics",
        description:
          "Keyword rankings are a means to an end. We report on what actually drove calls and form fills.",
      },
      {
        title: "Weekly, not buried in a quarterly PDF",
        description:
          "You'll always know what's happening — no waiting a month to find out something broke.",
      },
      {
        title: "A real conversation, monthly",
        description:
          "Reports raise questions. Monthly strategy calls are where we actually answer them together.",
      },
    ],
    faqs: [
      {
        question: "What tools do you use for tracking?",
        answer:
          "A mix of rank tracking software, Google Search Console/Analytics, and call tracking numbers — all consolidated into one plain-English report.",
      },
      {
        question: "Can I see my data anytime, or just in reports?",
        answer:
          "You'll have direct access to your dashboards, not just the periodic summaries.",
      },
      {
        question: "What happens on the monthly strategy call?",
        answer:
          "We walk through what moved, why, and what we're prioritizing next — a real conversation, not a scripted readout.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
