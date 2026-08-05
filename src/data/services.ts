import {
  Search,
  MapPin,
  FileText,
  LayoutGrid,
  Link2,
  BarChart3,
  LayoutTemplate,
  MousePointerClick,
  Megaphone,
  FileSearch,
  Tags,
  Globe,
  Gauge,
  TrendingUp,
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
  {
    slug: "website-design",
    icon: LayoutTemplate,
    title: "Website Design",
    shortDescription:
      "Websites built to rank and convert from day one — fast, mobile-first, and structured around SEO from the first wireframe, not bolted on after launch.",
    points: ["SEO-first architecture", "Mobile-first & fast", "Conversion-focused layout"],
    metaTitle: "SEO Website Design Services",
    metaDescription:
      "SEO-focused website design for local service businesses — fast, mobile-first sites built to rank and convert, not just look good.",
    heroIntro:
      "Most “SEO-friendly” websites are pretty first and searchable second — an afterthought bolted on after launch. We design the other way around: site structure, page speed, and conversion paths are planned alongside the visual design, so the site you launch with is already positioned to rank.",
    benefits: [
      {
        title: "SEO built in, not bolted on",
        description:
          "Site architecture, URL structure, and internal linking are planned before a single page is designed — not patched in after launch.",
      },
      {
        title: "Fast by default",
        description:
          "Every design decision is weighed against its effect on load time. A beautiful site that loads slowly loses both rankings and visitors.",
      },
      {
        title: "Built to convert, not just impress",
        description:
          "Clear calls to action and conversion paths on every page — a website's job is to generate leads, not win design awards.",
      },
    ],
    faqs: [
      {
        question: "Will my new site keep my current rankings?",
        answer:
          "Yes — migrations are planned with 301 redirects and technical continuity so you don't lose the ground you've already gained.",
      },
      {
        question: "Do you build on WordPress or something else?",
        answer:
          "We choose the platform based on your needs — usually a modern, fast framework, though WordPress is an option if you need a specific content workflow.",
      },
      {
        question: "How long does a website design project take?",
        answer:
          "Typically 3–6 weeks depending on scope, from wireframes to launch.",
      },
    ],
  },
  {
    slug: "google-ads",
    icon: MousePointerClick,
    title: "Google Ads Management",
    shortDescription:
      "Paid search campaigns that fill the gap while your SEO compounds — built around the same buyer intent, not a separate, disconnected strategy.",
    points: ["Campaign strategy & setup", "Conversion tracking", "Budget optimization"],
    metaTitle: "Google Ads Management Services",
    metaDescription:
      "Google Ads management for local service businesses — paid search campaigns built around real buyer intent, with conversion tracking tied to booked jobs.",
    heroIntro:
      "SEO takes time to compound. Google Ads can fill that gap immediately — if it's built around the same intent research as your organic strategy, not run as a disconnected side project. We set up, manage, and optimize campaigns tied directly to calls and form fills, not just clicks.",
    benefits: [
      {
        title: "Built on the same intent research as SEO",
        description:
          "Your paid and organic strategies should reinforce each other, not compete for the same budget conversation.",
      },
      {
        title: "Tracked to the booked job",
        description:
          "Conversion tracking is set up before a single dollar is spent, so you know exactly what's working.",
      },
      {
        title: "No runaway budgets",
        description:
          "Clear budget caps and regular check-ins — you'll never be surprised by a bill.",
      },
    ],
    faqs: [
      {
        question: "How much should I budget for Google Ads?",
        answer:
          "It depends on your market and competition — we'll give you a realistic range during the strategy call, not a one-size-fits-all number.",
      },
      {
        question: "Do you require a minimum ad spend?",
        answer:
          "No fixed minimum, but we'll be honest if your budget is too low to generate meaningful data.",
      },
      {
        question: "How is this different from just boosting a post?",
        answer:
          "Google Ads targets active search intent — people already looking for what you offer — which converts very differently from social boosting.",
      },
    ],
  },
  {
    slug: "meta-ads",
    icon: Megaphone,
    title: "Meta Ads (Facebook & Instagram)",
    shortDescription:
      "Paid social campaigns that build awareness and retarget site visitors — a complement to search intent, not a replacement for it.",
    points: ["Audience targeting & creative", "Retargeting campaigns", "Performance reporting"],
    metaTitle: "Meta Ads (Facebook & Instagram) Management",
    metaDescription:
      "Meta Ads management for local service businesses — Facebook and Instagram campaigns for awareness and retargeting, reported in plain English.",
    heroIntro:
      "Search ads catch people looking for you. Meta ads put you in front of people before they know they're looking — and bring back the ones who visited your site but didn't convert. We build and manage campaigns that support your SEO and search ads, not compete with them for attention.",
    benefits: [
      {
        title: "Retargeting that recovers lost visitors",
        description:
          "Most website visitors don't convert on the first visit. Retargeting keeps you in front of them until they're ready.",
      },
      {
        title: "Creative that doesn't look like an ad",
        description:
          "Native-feeling creative outperforms obvious sales pitches in every account we've run.",
      },
      {
        title: "Reported the same way as everything else",
        description:
          "One plain-English report, not a separate dashboard you have to learn.",
      },
    ],
    faqs: [
      {
        question: "Is Meta Ads worth it for a local service business?",
        answer:
          "It depends on your sales cycle — it works best for businesses with a visual service or a longer consideration window.",
      },
      {
        question: "Can you use my existing photos and videos?",
        answer:
          "Yes, and we'll tell you honestly if you need new creative to make the campaign work.",
      },
      {
        question: "How do you measure success beyond likes and follows?",
        answer:
          "Leads, calls, and form fills — vanity metrics like likes don't appear in your report.",
      },
    ],
  },
  {
    slug: "seo-audit",
    icon: FileSearch,
    title: "SEO Audits",
    shortDescription:
      "A comprehensive, no-obligation look at your site's technical health, content gaps, local visibility, and competitor positioning — the fastest way to see where you actually stand.",
    points: ["Technical, content & local review", "Competitor benchmarking", "Prioritized action plan"],
    metaTitle: "SEO Audit Services",
    metaDescription:
      "Comprehensive SEO audits for local service businesses — technical health, content gaps, local visibility, and competitor benchmarking in one report.",
    heroIntro:
      "Before any strategy gets built, we look at where you actually stand — not just technical crawl errors, but content gaps, local visibility, and exactly where competitors are beating you. This is the audit that becomes the foundation for everything else we do together, and it's also available as a completely free, no-obligation starting point.",
    benefits: [
      {
        title: "Broader than a technical crawl",
        description:
          "Technical health is one input. We also look at content coverage, local visibility, and competitor positioning.",
      },
      {
        title: "A foundation, not a one-off",
        description:
          "The audit becomes the roadmap for every other service — nothing is recommended that isn't tied back to a specific finding.",
      },
      {
        title: "Free to start",
        description:
          "The first audit costs nothing and comes with no obligation to continue.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as the free audit on your homepage?",
        answer:
          "Yes — this page describes the same audit in more depth. It's a genuine starting point, not a stripped-down teaser.",
      },
      {
        question: "What's the difference between this and a Technical SEO Audit?",
        answer:
          "This audit is broader — technical, content, local, and competitive. The technical audit goes deeper into just the technical layer for sites that need focused remediation.",
      },
      {
        question: "Do I have to sign up for anything to get the audit?",
        answer: "No — it's free and comes with no obligation.",
      },
    ],
  },
  {
    slug: "keyword-research",
    icon: Tags,
    title: "Keyword Research",
    shortDescription:
      "Finding the exact terms your buyers search — not just high-volume keywords, but the ones that actually convert into calls and jobs.",
    points: ["Buyer-intent mapping", "Competitor keyword gaps", "Search volume & difficulty analysis"],
    metaTitle: "Keyword Research Services",
    metaDescription:
      "Keyword research for local service businesses — buyer-intent mapping and competitor gap analysis targeting terms that actually convert, not just rank.",
    heroIntro:
      "High search volume means nothing if the person searching isn't ready to buy. We research the exact terms your buyers use at each stage of their decision, map them to intent, and prioritize the ones that convert — not just the ones that look impressive in a rank tracker.",
    benefits: [
      {
        title: "Intent over volume",
        description:
          "A low-volume, high-intent keyword often outperforms a high-volume, low-intent one for actual bookings.",
      },
      {
        title: "Mapped to your funnel",
        description:
          "Every keyword is tagged to where a buyer is in their decision, so content and pages target the right stage.",
      },
      {
        title: "Where competitors are weak",
        description:
          "Gap analysis shows exactly which terms competitors rank for that you don't — and which are worth chasing.",
      },
    ],
    faqs: [
      {
        question: "How many keywords will I end up targeting?",
        answer:
          "It depends on your services and area — quality of match matters more than raw count.",
      },
      {
        question: "Do you use paid tools for this?",
        answer: "Yes, professional-grade keyword and competitor research tools, not guesswork.",
      },
      {
        question: "Will this research get out of date?",
        answer:
          "Search behavior shifts — keyword research is revisited periodically, not done once and forgotten.",
      },
    ],
  },
  {
    slug: "off-page-seo",
    icon: Globe,
    title: "Off-Page SEO",
    shortDescription:
      "Building your reputation and relevance signals beyond your own site — citations, brand mentions, and trust signals that support everything link building earns.",
    points: ["Citation consistency", "Brand mention monitoring", "Trust & authority signals"],
    metaTitle: "Off-Page SEO Services",
    metaDescription:
      "Off-page SEO for local service businesses — citation consistency, brand mention monitoring, and the trust signals search engines weigh beyond your site.",
    heroIntro:
      "What happens off your website matters as much as what's on it. We keep your business information consistent everywhere it appears, track and reclaim mentions that should be linking back to you, and build the broader trust signals that support your rankings beyond individual backlinks.",
    benefits: [
      {
        title: "Consistency everywhere you're listed",
        description:
          "Inconsistent business information across the web quietly undermines the trust signals search engines rely on.",
      },
      {
        title: "Unlinked mentions, reclaimed",
        description:
          "Many businesses are mentioned online without a link back. We find those and turn them into real links.",
      },
      {
        title: "Signals beyond backlinks",
        description:
          "Off-page SEO is bigger than link building alone — we look at the full picture of how your business is represented online.",
      },
    ],
    faqs: [
      {
        question: "How is this different from link building?",
        answer:
          "Link building is one part of off-page SEO. This service covers the broader picture — citations, mentions, and consistency.",
      },
      {
        question: "What if my business information is already inconsistent?",
        answer:
          "That's common, especially after a rebrand or move — a cleanup audit is the first step.",
      },
      {
        question: "Do you monitor ongoing mentions, or is this a one-time fix?",
        answer: "Ongoing — new mentions and citation opportunities come up regularly.",
      },
    ],
  },
  {
    slug: "website-speed-optimization",
    icon: Gauge,
    title: "Website Speed Optimization",
    shortDescription:
      "Faster load times, better Core Web Vitals, and fewer visitors lost to a page that takes too long to load — speed is a ranking factor and a conversion factor.",
    points: ["Core Web Vitals fixes", "Image & asset optimization", "Hosting & caching review"],
    metaTitle: "Website Speed Optimization Services",
    metaDescription:
      "Website speed optimization for local service businesses — Core Web Vitals fixes, image optimization, and caching improvements that speed up rankings.",
    heroIntro:
      "Every extra second of load time costs you both rankings and visitors who give up and leave. We diagnose exactly what's slowing your site down — oversized images, render-blocking scripts, poor caching — and fix it in priority order, measured against real Core Web Vitals data, not guesswork.",
    benefits: [
      {
        title: "Speed is a ranking factor and a conversion factor",
        description:
          "Google measures it, and so do your visitors — a slow site loses on both fronts at once.",
      },
      {
        title: "Fixes prioritized by impact",
        description:
          "Not every speed issue is worth fixing first. We prioritize by what actually moves your Core Web Vitals scores.",
      },
      {
        title: "Measured, not assumed",
        description:
          "Before-and-after data on every optimization, so you can see exactly what improved.",
      },
    ],
    faqs: [
      {
        question: "Will this require moving hosting providers?",
        answer:
          "Sometimes — if hosting is the bottleneck, we'll tell you plainly, but many sites can be fixed without switching.",
      },
      {
        question: "How much faster can I expect my site to load?",
        answer:
          "It depends on the starting point — sites with heavy unoptimized images or bloated scripts often see the biggest gains.",
      },
      {
        question: "Is this a one-time fix or ongoing?",
        answer:
          "Both are available — an initial optimization pass, with ongoing monitoring if new issues creep in.",
      },
    ],
  },
  {
    slug: "conversion-rate-optimization",
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    shortDescription:
      "Getting more of your existing traffic to actually call, message, or fill out a form — because more visitors mean nothing if they don't convert.",
    points: ["Landing page audits", "CTA & form optimization", "A/B testing where volume allows"],
    metaTitle: "Conversion Rate Optimization (CRO) Services",
    metaDescription:
      "Conversion rate optimization for local service businesses — landing page audits, CTA improvements, and form optimization that turn traffic into booked jobs.",
    heroIntro:
      "Ranking higher and driving more traffic only matters if visitors actually convert once they arrive. We audit your landing pages for friction — confusing CTAs, buried contact forms, slow-loading pages — and fix what's actually costing you leads, not just what looks outdated.",
    benefits: [
      {
        title: "More leads without more traffic",
        description:
          "Improving your conversion rate is often faster and cheaper than driving more visitors to a page that isn't converting.",
      },
      {
        title: "Friction, not opinion, drives decisions",
        description:
          "Recommendations are based on where visitors actually drop off, not personal design preference.",
      },
      {
        title: "Tested where volume allows",
        description:
          "For pages with enough traffic, we run structured A/B tests rather than guessing which version performs better.",
      },
    ],
    faqs: [
      {
        question: "How much traffic do I need for CRO to make sense?",
        answer:
          "Meaningful A/B testing needs decent volume, but a conversion audit and fixes are valuable at any traffic level.",
      },
      {
        question: "Will this involve redesigning my whole site?",
        answer:
          "Usually not — most CRO wins come from targeted changes to specific pages, not a full redesign.",
      },
      {
        question: "How do you measure a 'conversion'?",
        answer:
          "Whatever matters to your business — calls, form fills, or bookings — defined clearly before we start.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
