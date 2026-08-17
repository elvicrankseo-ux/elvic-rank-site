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
import type { ContentBlock } from "@/lib/content-blocks";

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
  /**
   * Curated "Related services" slugs, in display order — replaces the old
   * positional services.slice(0, 3) so related links are actually topically
   * relevant instead of "whatever happens to sit first in the array."
   */
  relatedSlugs: string[];
  /**
   * Optional pillar-style content for a service that needs to be a fuller
   * commercial landing page for its keyword cluster (currently only Local
   * SEO & Google Business Profile). When present, the page renders this in
   * place of the generic "What's included"/"Why it matters" sections; when
   * absent (every other service), those two sections render exactly as
   * before — this field changes nothing for the other 13 pages.
   */
  richContent?: ContentBlock[];
  /** Overrides the default "Ready to talk about {title}?" final CTA heading. */
  ctaHeading?: string;
  /**
   * Optional single contextual link to the blog article that best supports
   * this service, rendered as a small "Further reading" line under Benefits
   * on services that don't have richContent (pages with richContent embed
   * their supporting-article link inline instead, in context). Absent by
   * default — only set where a genuinely relevant article exists, so the
   * other services render exactly as before.
   */
  relatedArticleSlug?: string;
  /**
   * ISO date this service's content was last substantively changed. Used by
   * the sitemap to give an honest lastModified value instead of stamping
   * every page with the current build/request time regardless of whether
   * anything actually changed. Falls back to a shared "last general update"
   * date in sitemap.ts when absent.
   */
  lastUpdated?: string;
};

export const services: Service[] = [
  {
    slug: "technical-seo-audit",
    icon: Search,
    title: "Technical SEO Audit",
    shortDescription:
      "Full-site crawls that catch what's quietly capping your rankings — broken links, thin indexation, slow Core Web Vitals, and structural issues.",
    points: [
      "Crawlability, robots.txt & XML sitemaps",
      "Core Web Vitals & technical performance",
      "Schema markup & canonicalization",
    ],
    metaTitle: "Technical SEO Audit Services",
    metaDescription:
      "Technical SEO audits for local service businesses — crawling, indexing, Core Web Vitals, schema, and canonicalization fixes that unlock lost rankings.",
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
    relatedSlugs: ["seo-audit", "website-speed-optimization", "on-page-seo"],
    lastUpdated: "2026-08-10",
    richContent: [
      { type: "heading", text: "Technical SEO Audits for Websites" },
      {
        type: "paragraph",
        text: "A technical SEO audit looks at the technical foundation of a website — the parts search engines interact with before a single word of content gets evaluated. If Google can't crawl a page, can't index it, or struggles to understand its structure, none of your content or link-building work gets a fair chance to rank. This page focuses specifically on that technical layer.",
      },
      {
        type: "paragraph",
        text: "Technical SEO is one part of a website's overall search performance, not the whole picture — content quality, on-page optimization, local visibility, and backlinks all matter too. If you want a broader look across all of those areas rather than a technical-only review, a [comprehensive SEO audit](/services/seo-audit) covers the full picture.",
      },

      { type: "heading", text: "What a Technical SEO Audit Checks" },
      {
        type: "paragraph",
        text: "Our technical SEO audits work through the same core areas on every site, adjusted for scale and platform. If you'd rather work through it yourself first, our [technical SEO checklist](/blog/technical-seo-checklist) covers the same ground in article form:",
      },

      { type: "subheading", text: "Crawling and Crawl Errors" },
      {
        type: "paragraph",
        text: "We check whether search engine crawlers can actually reach every page that matters — flagging broken internal links, server errors, redirect chains, and pages accidentally blocked from being crawled.",
      },

      { type: "subheading", text: "Indexing and Indexation" },
      {
        type: "paragraph",
        text: "Being crawlable doesn't guarantee being indexed. We look for accidental noindex tags, thin or duplicate pages competing with each other, and pages that should be indexed but aren't showing up in search results.",
      },

      { type: "subheading", text: "Core Web Vitals and Page Experience" },
      {
        type: "paragraph",
        text: "Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift are measured and compared against Google's thresholds, with the specific causes identified — often image size, render-blocking scripts, or slow server response. If speed turns out to be the main issue we find, it's covered in more depth as part of our [website speed optimization](/services/website-speed-optimization) work.",
      },

      { type: "subheading", text: "XML Sitemaps and Robots.txt" },
      {
        type: "paragraph",
        text: "We confirm your XML sitemap accurately reflects the pages you want indexed and is properly submitted to Search Console, and that robots.txt isn't accidentally blocking sections of the site it shouldn't.",
      },

      { type: "subheading", text: "Canonicalization" },
      {
        type: "paragraph",
        text: "URL variations — www versus non-www, trailing slashes, parameters, http versus https — can cause the same page to be treated as duplicate content under different URLs. We audit canonical tags to make sure ranking signals aren't being split.",
      },

      { type: "subheading", text: "Structured Data and Schema" },
      {
        type: "paragraph",
        text: "We review existing schema markup for errors and identify where structured data is missing, since it affects how search engines understand a page and can also affect eligibility for rich results in search.",
      },

      { type: "subheading", text: "Site Architecture" },
      {
        type: "paragraph",
        text: "We look at how pages link to each other — whether your most important pages are easy for both users and search engines to reach, or buried several clicks deep with little internal linking support. This often overlaps with [on-page SEO](/services/on-page-seo) work, since a page can only rank well once it's both structurally reachable and clearly written for the search it's targeting.",
      },

      { type: "heading", text: "Why Technical SEO Matters" },
      {
        type: "paragraph",
        text: "A site with strong content and a solid backlink profile can still underperform if search engines can't crawl or index it properly — technical issues act as a ceiling on what the rest of your SEO work can achieve. Fixing them doesn't guarantee a specific ranking outcome, but it removes obstacles that would otherwise cap your progress regardless of what else you do.",
      },
      {
        type: "paragraph",
        text: "This is why a technical audit is usually the right starting point for a coordinated [SEO planning process](/blog/seo-strategy-for-local-service-businesses), rather than an afterthought layered on once other work is already underway.",
      },

      { type: "heading", text: "Our Technical SEO Audit Process" },
      {
        type: "orderedList",
        items: [
          "We crawl your site the way a search engine would, page by page.",
          "We review Core Web Vitals and page experience data for your key pages.",
          "We check indexation status, sitemap accuracy, and robots.txt configuration.",
          "We review schema markup and canonical tag consistency.",
          "We map site architecture and internal linking gaps.",
          "You get a prioritized report ranked by impact, not a raw list of every issue found.",
        ],
      },
      {
        type: "paragraph",
        text: "For restoration and emergency service businesses specifically, page speed and mobile reliability aren't just ranking factors — they're conversion factors, since a customer searching mid-emergency on a weak connection won't wait for a slow page. See [restoration SEO](/industries/restoration-seo) and [emergency service SEO](/industries/emergency-service-seo) for how this fits into the broader strategy.",
      },
    ],
  },
  {
    slug: "local-seo-google-business-profile",
    icon: MapPin,
    title: "Local SEO and Google Business Profile Services",
    shortDescription:
      "Own the map pack. We optimize, verify, and actively manage your Google Business Profile so you show up where local buyers are looking.",
    points: ["GBP optimization & posts", "Citation building", "Review strategy"],
    metaTitle: "Local SEO & Google Business Profile Services",
    metaDescription:
      "Local SEO and Google Business Profile optimization that improves your Google Maps visibility and helps local businesses generate qualified leads.",
    heroIntro:
      "Most local buyers search before they call — and if your business isn't visible in Google's Local Pack and Maps results, a competitor gets the job instead. We build and manage the Local SEO and Google Business Profile strategy that keeps you visible in that moment, based on what actually influences local rankings, not guesswork.",
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
        question: "What is Local SEO?",
        answer:
          "Local SEO is the process of optimizing your online presence — your website, Google Business Profile, and citations — so your business shows up when nearby customers search for what you offer.",
      },
      {
        question: "How is Local SEO different from regular SEO?",
        answer:
          "Local SEO weighs proximity, Google Business Profile signals, and citation consistency alongside the usual technical and content factors that regular SEO focuses on.",
      },
      {
        question: "What does Google Business Profile optimization actually involve?",
        answer:
          "Full setup and ongoing management of your listing — category selection, service list, photos, posts, Q&A, and review responses — kept current rather than configured once and left alone.",
      },
      {
        question: "How do I rank higher on Google Maps?",
        answer:
          "Google Maps ranking is driven by the same core factors as the Local Pack: relevance, distance, and prominence — meaning profile completeness, category accuracy, review signals, and citation consistency all play a role.",
      },
      {
        question: "What are local citations, and do they matter?",
        answer:
          "A citation is any online mention of your business name, address, and phone number — directories, industry associations, local publications. Consistency across them is a real, measurable local ranking signal.",
      },
      {
        question: "How many reviews do I need, and how do they affect local rankings?",
        answer:
          "There's no fixed number — review volume relative to competitors, recency, and response rate all matter more than hitting a specific count.",
      },
      {
        question: "Can you guarantee a #1 ranking on Google Maps or in the Local Pack?",
        answer:
          "No, and any agency that promises that isn't being straight with you. We'll tell you honestly what's realistic based on your competition, and commit to doing the work that actually influences the factors Google weighs.",
      },
      {
        question: "How long does it take to see results from Local SEO?",
        answer:
          "Many businesses see initial Google Business Profile improvements within a few weeks; broader local ranking gains typically build over 60–90 days.",
      },
    ],
    relatedSlugs: ["seo-audit", "google-ads", "website-design"],
    ctaHeading: "Get Started With Local SEO",
    lastUpdated: "2026-08-10",
    richContent: [
      { type: "heading", text: "Local SEO Services for Businesses" },
      {
        type: "paragraph",
        text: "Local SEO is the practice of optimizing your online presence so your business shows up when nearby customers search for what you offer — “plumber near me,” “roofing company in [city],” or simply your service plus your town. Unlike national SEO, which competes for broad, high-volume keywords, local SEO is built around proximity, relevance, and trust signals specific to a geographic area.",
      },
      {
        type: "paragraph",
        text: "For a local service business, this isn't optional. Most local searches happen with strong buying intent — someone with a leaking pipe or a broken furnace isn't browsing, they're ready to call. If your business isn't visible in that moment, a competitor with better local visibility gets the job instead, regardless of how good your actual work is.",
      },

      { type: "heading", text: "Google Business Profile Optimization" },
      {
        type: "paragraph",
        text: "Your Google Business Profile (GBP) is one of the most influential pieces of local SEO — it's the listing that controls how your business appears in Google Search and Google Maps, including your map pack placement, hours, service area, photos, and reviews. A complete, actively managed profile sends Google clear signals about what you do, where you do it, and whether customers trust you — all of which feed directly into local ranking decisions.",
      },
      {
        type: "paragraph",
        text: "GBP optimization isn't a one-time setup. It includes choosing the right categories, keeping your service list current, publishing regular updates, managing Q&A, and responding to reviews — ongoing work that compounds over time, not a form you fill out once and forget. For a deeper look at why this matters, see [How Google Business Profile Helps Local Businesses](/blog/how-google-business-profile-helps-local-businesses).",
      },

      { type: "heading", text: "Local Ranking Factors We Optimize For" },
      {
        type: "paragraph",
        text: "Local rankings are influenced by a mix of factors Google weighs together, not any single trick. The three broad categories that matter most:",
      },
      {
        type: "list",
        items: [
          "Relevance — how well your business profile and website match what the searcher is looking for.",
          "Distance — how close your business, or your service area, is to the searcher's location.",
          "Prominence — how well-known and trusted your business is, based on signals like review volume, citation consistency, and backlinks.",
        ],
      },
      {
        type: "paragraph",
        text: "No agency can guarantee a specific ranking position — anyone who does either doesn't understand how the algorithm works or isn't being straight with you. What we can do is systematically strengthen every factor within your control. If you want a broader picture beyond local factors specifically, an [SEO Audit](/services/seo-audit) covers the complete picture, while a [Technical SEO Audit](/services/technical-seo-audit) goes deeper on the technical foundation underneath it.",
      },
      {
        type: "paragraph",
        text: "For a deeper, practical walkthrough of these factors and how they interact, see [how to rank locally on Google](/blog/how-to-rank-locally-on-google).",
      },

      { type: "heading", text: "Google Maps and Local Pack Visibility" },
      {
        type: "paragraph",
        text: "When someone searches for a local service on Google, they typically see the “Local Pack” — a block of three business listings shown with a map, sitting above the standard organic results. This Local Pack is pulled from Google Maps data, which means Google Maps SEO and traditional local search visibility are deeply connected: the same Google Business Profile signals that get you into the Local Pack are what determine your position on Google Maps itself.",
      },
      {
        type: "paragraph",
        text: "Ranking in the Local Pack matters disproportionately, because it's often the first thing local searchers see and interact with — sometimes before they scroll to organic results at all. In practice, optimizing for Google Maps visibility and optimizing for the Local Pack are the same work.",
      },

      { type: "heading", text: "Our Local SEO Services" },
      { type: "subheading", text: "Local Keyword Research" },
      {
        type: "paragraph",
        text: "We identify the exact terms your local customers search — by service, by neighborhood, and by intent — rather than generic industry keywords that don't reflect how people actually search in your area, applying the same [keyword research](/services/keyword-research) process through a local lens.",
      },
      { type: "subheading", text: "Google Business Profile Optimization" },
      {
        type: "paragraph",
        text: "Hands-on setup and ongoing management of your profile — categories, services, photos, posts, and Q&A — kept complete and current, which is the practical work behind the strategy described above.",
      },
      { type: "subheading", text: "Local On-Page SEO" },
      {
        type: "paragraph",
        text: "Service and location pages structured and written around the specific searches your buyers use, applying the same principles covered in our broader [On-Page SEO](/services/on-page-seo) service, often paired with a [Website Design](/services/website-design) that's built for local intent from the start.",
      },
      { type: "subheading", text: "Local Citations" },
      {
        type: "paragraph",
        text: "Consistent name, address, and phone number (NAP) listings across the directories that matter for your area — inconsistent citations quietly undermine the trust signals Google relies on for local rankings.",
      },
      {
        type: "paragraph",
        text: "For a full breakdown of what citations are and how to audit your own, see [our guide to local citations](/blog/local-citations-explained).",
      },
      { type: "subheading", text: "Review and Reputation Strategy" },
      {
        type: "paragraph",
        text: "A simple, repeatable system for earning fresh reviews from real customers, plus thoughtful responses to both positive and negative feedback — review volume and recency are among the strongest local ranking signals available.",
      },
      { type: "subheading", text: "Google Maps Optimization" },
      {
        type: "paragraph",
        text: "Direct attention to the signals that influence your Google Maps placement specifically — profile accuracy, category selection, and the same trust signals that drive Local Pack visibility.",
      },
      { type: "subheading", text: "Local Competitor Analysis" },
      {
        type: "paragraph",
        text: "A clear look at who's currently outranking you locally, and specifically why — citation gaps, review differences, or content coverage you can realistically close. Beyond citations, [Link Building & Authority](/services/link-building) work strengthens the broader trust signals a competitor may already have.",
      },
      { type: "subheading", text: "Local Content Strategy" },
      {
        type: "paragraph",
        text: "Location-specific content — service area pages, local guides, and FAQ content — built to support both your rankings and the questions real local buyers are actually asking, following the same [content strategy](/services/content-strategy-seo) principles applied at a local level.",
      },

      { type: "heading", text: "Our Local SEO Process" },
      {
        type: "paragraph",
        text: "A consistent process, applied to your specific market rather than a generic template:",
      },
      {
        type: "orderedList",
        items: [
          "Research — we start by researching your market: the keywords your buyers use, your service area, and where you currently stand against local competitors.",
          "Audit — a full audit of your Google Business Profile, website, and existing citations to find exactly what's helping and what's holding you back.",
          "Optimization — we optimize your GBP listing, on-page content, and citations based on what the audit and research surfaced, prioritized by impact.",
          "Content and authority building — ongoing local content and citation work that builds the relevance and trust signals local rankings depend on over time.",
          "Monitoring — we track rankings, map pack visibility, and profile performance on an ongoing basis, not just at the start of the engagement.",
          "Continuous improvement — local search changes constantly. We adjust the strategy as the data changes rather than running the same playbook indefinitely.",
        ],
      },

      { type: "heading", text: "Why Local SEO Matters" },
      {
        type: "paragraph",
        text: "Local SEO isn't about vanity metrics — it's about being visible at the moment a nearby customer is ready to hire someone. A “near me” search already signals intent to act soon, which is why local visibility tends to reach buyers further along in their decision than an average website visitor.",
      },
      {
        type: "paragraph",
        text: "It also compounds. Unlike paid ads, which stop generating visibility the moment you stop paying, the citations, content, and reputation built through local SEO continue working in the background. If you need visibility sooner, [Google Ads Management](/services/google-ads) can fill that gap while local SEO builds — see [How Local SEO Generates Leads](/blog/how-local-seo-generates-leads) for more on how that connects to actual business results.",
      },
      {
        type: "paragraph",
        text: "None of this works best in isolation, either — local SEO is strongest as one piece of a [broader SEO strategy](/blog/seo-strategy-for-local-service-businesses) that also covers the technical, content, and authority side of your site.",
      },
      {
        type: "paragraph",
        text: "This is especially critical for restoration and emergency service businesses, where a huge share of demand arrives through exactly this kind of urgent, local, map-pack-driven search. See our dedicated guides to [restoration SEO](/industries/restoration-seo) and [emergency service SEO](/industries/emergency-service-seo) for how this applies specifically to those categories.",
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
        question: "What is an SEO content strategy?",
        answer:
          "It's the plan connecting your keyword research, your service pages, and your supporting content so they work together to build topical authority — rather than a publishing calendar aimed at a word count.",
      },
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
        question: "How often should SEO content be updated?",
        answer:
          "Periodically, not never — search behavior and competition shift, and pages that ranked well a year ago can quietly lose ground if nobody revisits them.",
      },
      {
        question: "Will the content sound generic or AI-written?",
        answer:
          "No — every piece is written specific to your business, service area, and voice, then reviewed for accuracy before it goes live.",
      },
    ],
    relatedSlugs: ["keyword-research", "on-page-seo", "seo-audit"],
    richContent: [
      { type: "heading", text: "What an SEO Content Strategy Includes" },
      {
        type: "paragraph",
        text: "A content strategy connects three things: the keywords and search intent your buyers actually use (from [keyword research](/services/keyword-research)), the pages and posts that answer those searches, and a plan for how they all link together to build topical authority — not just a publishing calendar aimed at a word count.",
      },

      { type: "heading", text: "Service Pages vs. Supporting Content" },
      {
        type: "paragraph",
        text: "Service pages carry the commercial weight — they need to be built around [on-page SEO](/services/on-page-seo) principles and written to convert, not just rank. Supporting content plays a different role: answering the research-stage questions that build trust and topical relevance, and linking back to the service pages once a reader is ready for the next step.",
      },

      { type: "heading", text: "Content Should Support Business Goals, Not Just Volume" },
      {
        type: "paragraph",
        text: "More content isn't automatically better. A handful of pages that thoroughly answer real questions and clearly connect to your services outperforms a large volume of thin posts published just to keep a content calendar full. Every piece we recommend is tied to a specific keyword gap, a specific page it supports, or a specific question your buyers are actually asking — one piece of a [broader SEO strategy](/blog/seo-strategy-for-local-service-businesses), not an isolated content calendar.",
      },

      { type: "heading", text: "Content Refreshing and Ongoing Relevance" },
      {
        type: "paragraph",
        text: "Content isn't a one-time deliverable — search behavior and competition shift, and pages that ranked well a year ago can quietly lose ground if they're never revisited. Part of this service is reviewing existing content periodically, not just publishing new pieces and moving on.",
      },

      { type: "heading", text: "Building Authority Together" },
      {
        type: "paragraph",
        text: "Well-connected content also supports [link building](/services/link-building) — genuinely useful pages are what other sites actually want to reference, which is a much stronger foundation for earning links than content built purely to target a keyword.",
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
        question: "What does on-page SEO include?",
        answer:
          "Titles and meta information, heading structure, the content on the page itself, internal linking, and overall page structure — everything that determines both how a page ranks and how it reads once someone lands on it.",
      },
      {
        question: "Will this require a redesign of my whole site?",
        answer:
          "Usually not — most on-page SEO work happens within your existing design, not a full rebuild.",
      },
      {
        question: "Why does search intent matter?",
        answer:
          "A page optimized for the wrong intent — informational content targeting a buyer-ready search, for example — tends to rank and convert poorly even with otherwise solid optimization, so matching intent comes first.",
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
    relatedSlugs: ["technical-seo-audit", "seo-audit", "website-speed-optimization"],
    richContent: [
      { type: "heading", text: "What On-Page SEO Includes" },
      {
        type: "paragraph",
        text: "On-page SEO covers everything on an individual page that affects both how well it ranks and how well it converts: titles and meta information, heading structure, the content itself, internal linking, and how clearly the page is written for the person landing on it. Each page is mapped to one specific keyword and intent, rather than trying to rank for everything at once.",
      },

      { type: "heading", text: "Titles, Headings, and Content Structure" },
      {
        type: "paragraph",
        text: "Every page gets a title and meta description written for the specific search it's targeting, a clear heading structure that mirrors how someone actually scans a page, and content that answers the question behind the search — built on the terms [keyword research](/services/keyword-research) identifies, not guesswork.",
      },

      { type: "heading", text: "Internal Linking and Site Structure" },
      {
        type: "paragraph",
        text: "Internal links are placed with a purpose — moving both authority and users toward the pages that matter most, not scattered in for the sake of link count. A page buried several clicks deep with nothing linking to it rarely ranks well, no matter how good the content on it is.",
      },

      { type: "heading", text: "How On-Page SEO Works With the Rest of Your Site" },
      {
        type: "paragraph",
        text: "On-page work is most effective paired with [content strategy](/services/content-strategy-seo) that gives each page something substantive to say, and it directly affects [conversion rate optimization](/services/conversion-rate-optimization) — a well-structured page that's easy to scan and has a clear next step converts better than one that technically ranks but reads like a wall of text.",
      },
    ],
  },
  {
    slug: "link-building",
    icon: Link2,
    title: "Link Building & Authority",
    shortDescription:
      "Earned links from relevant, real sites — not link farms that put your domain at risk.",
    points: [
      "Backlink acquisition & digital PR",
      "Competitor backlink gap analysis",
      "Authority-building link opportunities",
    ],
    metaTitle: "Local Link Building Services",
    metaDescription:
      "White-hat link building for service businesses — backlink acquisition, digital PR, and competitor backlink gap analysis. No link farms, no shortcuts.",
    heroIntro:
      "Links are still one of the strongest ranking signals — but only the right ones. We earn links from relevant, real sites through digital PR and targeted outreach, identify the exact backlink opportunities competitors are capturing that you're not, and go after the ones that actually move authority.",
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
        question: "What is link building?",
        answer:
          "It's the practice of earning links from other websites back to yours — one of the signals search engines use to gauge trust and authority, though not every link carries the same weight.",
      },
      {
        question: "Is link building safe for my site?",
        answer:
          "Yes — we only pursue white-hat, editorially earned links. We won't touch link farms or paid schemes that risk a Google penalty.",
      },
      {
        question: "Do you use spam or automated link-building methods?",
        answer:
          "No — no private blog networks, no automated tools, no mass directory submissions. Shortcuts like these put a domain at real risk and rarely hold up as a durable source of authority.",
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
    relatedSlugs: ["off-page-seo", "local-seo-google-business-profile", "seo-audit"],
    richContent: [
      { type: "heading", text: "What Link Building Means" },
      {
        type: "paragraph",
        text: "Link building is the practice of earning links from other websites back to yours — one of the signals search engines use to gauge trust and authority. Not every link carries the same weight: a link from a relevant, real site in your industry or area matters far more than a large volume of low-quality links from unrelated sites.",
      },

      { type: "heading", text: "Relevant vs. Irrelevant Links" },
      {
        type: "paragraph",
        text: "A link's value depends heavily on relevance — a mention from a local news site, an industry association, or a genuinely related business carries real weight. A directory listing on a site with no connection to your industry or area does very little, no matter how many of them you accumulate.",
      },
      {
        type: "paragraph",
        text: "The strongest link opportunities are usually pages worth linking to in the first place, which is why this work often pairs closely with [content strategy](/services/content-strategy-seo) that gives other sites a real reason to reference you.",
      },

      { type: "heading", text: "Local Authority and Business Mentions" },
      {
        type: "paragraph",
        text: "For a local service business, this often overlaps directly with [Local SEO and Google Business Profile](/services/local-seo-google-business-profile) work — local citations, community mentions, and relationships with local organizations build the same kind of trust signal that link building targets more broadly.",
      },

      { type: "heading", text: "Competitor Link Research" },
      {
        type: "paragraph",
        text: "We look at who's currently linking to your competitors and not you — a concrete, prioritized target list based on real gaps, rather than outreach aimed at whatever site happens to accept a pitch.",
      },

      { type: "heading", text: "What We Won't Do" },
      {
        type: "list",
        items: [
          "Buy spam links or participate in private blog networks",
          "Use automated or mass link-building tools",
          "Mass-submit to low-quality directories",
          "Pursue irrelevant backlinks purely to inflate a link count",
          "Promise a guaranteed ranking outcome tied to link volume",
        ],
      },
      {
        type: "paragraph",
        text: "These shortcuts can put a domain at real risk of a Google penalty, and even when they don't, they rarely hold up as a durable source of authority. Earning fewer, more relevant links takes longer, but it's the only version of this work we're willing to do — and it's tied back to what an [SEO audit](/services/seo-audit) actually finds missing in your backlink profile, not a generic outreach list.",
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
        question: "What should an SEO report include?",
        answer:
          "Organic and local search visibility, keyword movement, traffic, and — most importantly — what visitors actually did once they arrived: calls, form submissions, and conversions, not just rankings.",
      },
      {
        question: "What tools do you use for tracking?",
        answer:
          "A mix of rank tracking software, Google Search Console/Analytics, and call tracking numbers — all consolidated into one plain-English report.",
      },
      {
        question: "Are rankings the only way to measure SEO?",
        answer:
          "No — a keyword sitting in position three that never generates a call is worth less than a lower-ranking page that consistently converts. Rankings are one input, not the whole measure of success.",
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
    relatedSlugs: ["seo-audit", "google-ads", "conversion-rate-optimization"],
    richContent: [
      { type: "heading", text: "What SEO Reporting Includes" },
      {
        type: "paragraph",
        text: "Useful SEO reporting connects a chain of data that's easy to track in pieces but rarely tied together: organic search visibility, local search performance, keyword movement, Google Business Profile activity, organic traffic, and — most importantly — what visitors actually do once they arrive: calls, form submissions, and conversions.",
      },
      {
        type: "paragraph",
        text: "Rankings are only one part of that picture. A keyword sitting in position three that never generates a call is worth less than a lower-ranking page that consistently converts, which is why reporting that stops at position tracking is missing the metric that actually matters.",
      },

      { type: "heading", text: "From Activity to Business Decisions" },
      {
        type: "paragraph",
        text: "The useful version of this framework runs in one direction: SEO activity leads to visibility, visibility leads to relevant traffic, traffic leads to user actions, those actions become leads or conversions, and the resulting data should directly shape what gets prioritized next — not sit in a report nobody revisits.",
      },
      {
        type: "list",
        items: [
          "Organic and local search visibility — where you show up, and for what.",
          "Relevant traffic — visitors actually searching for what you offer, not just raw numbers.",
          "User actions — calls, form submissions, and other measurable next steps.",
          "Leads and conversions — the outcomes that actually matter to the business.",
          "Decisions — what the data says to prioritize next, tied back to a specific finding.",
        ],
      },

      { type: "heading", text: "Google Business Profile and Local Performance" },
      {
        type: "paragraph",
        text: "For a local business, this includes tracking Google Business Profile actions directly — calls, direction requests, and website clicks generated from the profile itself, alongside broader [Local SEO and Google Business Profile](/services/local-seo-google-business-profile) performance.",
      },

      { type: "heading", text: "Turning Data Into the Next Priority" },
      {
        type: "paragraph",
        text: "Reporting should answer a simple question every time: given what actually happened, what should we do next? Sometimes that points back to a fresh [SEO audit](/services/seo-audit) to find a new gap, sometimes it points toward [conversion rate optimization](/services/conversion-rate-optimization) if traffic is healthy but conversions aren't, and sometimes it's confirmation to stay the course. This is also the layer that ties back into a broader [SEO strategy](/blog/seo-strategy-for-local-service-businesses) — reporting is what tells you whether that strategy is actually working.",
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
    relatedSlugs: ["on-page-seo", "website-speed-optimization", "conversion-rate-optimization"],
    richContent: [
      { type: "heading", text: "SEO-First Website Design" },
      {
        type: "paragraph",
        text: "Most \"SEO-friendly\" websites are pretty first and searchable second — site structure, page speed, and conversion paths patched in after launch instead of planned from the start. We build the other way around: architecture, URL structure, and internal linking are mapped out before a single page is designed, so the site you launch with is already positioned to rank, not retrofitted later.",
      },

      { type: "heading", text: "What's Included" },
      { type: "subheading", text: "Site Architecture and URL Structure" },
      {
        type: "paragraph",
        text: "A clean, logical hierarchy planned before design begins — no orphaned pages, no buried service pages, no restructuring six months after launch.",
      },
      { type: "subheading", text: "Speed by Default" },
      {
        type: "paragraph",
        text: "Every design decision is weighed against its effect on load time, since a beautiful site that loads slowly loses both rankings and visitors — the same priorities covered in depth by [website speed optimization](/services/website-speed-optimization).",
      },
      { type: "subheading", text: "Conversion-Focused Layout" },
      {
        type: "paragraph",
        text: "Clear calls to action and conversion paths on every page — a website's job is to generate leads, not win design awards, following the same principles [conversion rate optimization](/services/conversion-rate-optimization) work is built around.",
      },
      { type: "subheading", text: "On-Page Foundations Built In" },
      {
        type: "paragraph",
        text: "Metadata, headings, and page structure mapped to real search intent from day one, so [on-page SEO](/services/on-page-seo) work later isn't spent undoing structural mistakes made during design.",
      },

      { type: "heading", text: "Migrating Without Losing Rankings" },
      {
        type: "paragraph",
        text: "If you already have a site, migrations are planned with 301 redirects and technical continuity so you don't lose the ground you've already gained — not treated as an afterthought once the new site is ready to launch.",
      },

      { type: "heading", text: "Platform and Timeline" },
      {
        type: "paragraph",
        text: "We choose the platform based on your needs — usually a modern, fast framework, though WordPress is an option if you need a specific content workflow. Most projects take 3–6 weeks depending on scope, from wireframes to launch.",
      },
      {
        type: "paragraph",
        text: "For restoration and emergency service businesses, this means a site built around click-to-call visibility and mobile speed from the first wireframe — see [restoration SEO](/industries/restoration-seo) and [emergency service SEO](/industries/emergency-service-seo) for the fuller strategy this fits into.",
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
    relatedSlugs: ["meta-ads", "seo-audit", "conversion-rate-optimization"],
    lastUpdated: "2026-08-10",
    richContent: [
      { type: "heading", text: "Google Ads Management for Local Service Businesses" },
      {
        type: "paragraph",
        text: "Google Ads management means more than turning campaigns on and checking back once a month. It's ongoing campaign strategy, search advertising built around real buyer intent, and continuous Google Ads optimization — the work that separates a campaign that quietly burns budget from one that reliably generates calls.",
      },
      {
        type: "paragraph",
        text: "For a local service business, Google advertising works best as a complement to SEO, not a replacement for it — search advertising puts you in front of buyers actively searching for what you offer right now, while your organic visibility builds in the background. [Compare Google Ads with SEO](/blog/seo-vs-google-ads) if you're deciding where to start.",
      },

      { type: "heading", text: "What's Included in Our Google Ads Services" },
      {
        type: "paragraph",
        text: "Our Google Ads services cover everything from initial setup through ongoing PPC management — here's what that actually involves.",
      },
      { type: "subheading", text: "Google Ads Campaign Setup" },
      {
        type: "paragraph",
        text: "We build your account structure, ad groups, and initial keyword lists from the ground up — mapped to the specific services and areas you actually want to book jobs in, not a generic template.",
      },
      { type: "subheading", text: "Search Advertising and Keyword Targeting" },
      {
        type: "paragraph",
        text: "Search advertising only works if it's built around the exact terms your buyers use at the moment they're ready to call — we research and target that intent directly, rather than bidding on broad, expensive keywords that bring the wrong kind of click.",
      },
      { type: "subheading", text: "Google Ads Campaign Management" },
      {
        type: "paragraph",
        text: "Day-to-day campaign management — bid adjustments, negative keywords, and ad copy testing — not a set-it-and-forget-it account that quietly drifts once it's launched.",
      },
      { type: "subheading", text: "Google Ads Optimization" },
      {
        type: "paragraph",
        text: "Ongoing optimization based on real performance data: which keywords, ads, and audiences are actually producing calls and form fills, and which ones are just spending budget.",
      },
      { type: "subheading", text: "Conversion Tracking" },
      {
        type: "paragraph",
        text: "Conversion tracking is set up before a single dollar is spent, so every call, form fill, and booked job can be tied back to the specific campaign and keyword that generated it — not just clicks.",
      },
      { type: "subheading", text: "Budget and Bid Management" },
      {
        type: "paragraph",
        text: "Clear budget caps, regular check-ins, and bid management aligned to what's actually converting — you'll never be surprised by a bill, and spend shifts toward what's working.",
      },

      { type: "heading", text: "Why Google Ads Can Help Local Businesses" },
      {
        type: "paragraph",
        text: "SEO takes time to compound — typically 60–90 days before meaningful movement, longer in competitive markets. Google Ads can fill that gap immediately: a well-built campaign can start generating calls within days, because you're paying for placement rather than earning it over time.",
      },
      {
        type: "paragraph",
        text: "That speed comes at an ongoing cost — every click on a Google ad costs money for as long as the campaign runs — which is why it tends to work best paired with a longer-term SEO strategy rather than run alone indefinitely. We can't promise a specific number of leads or a guaranteed return, but we can commit to transparent reporting on exactly what your budget is producing.",
      },
      {
        type: "paragraph",
        text: "For restoration and emergency service businesses, paid search is often the fastest way to capture high-intent \"near me\" and emergency searches while local SEO builds — see [emergency service SEO](/industries/emergency-service-seo) for how the two work together for this category specifically.",
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
    relatedSlugs: ["google-ads", "conversion-rate-optimization", "seo-audit"],
    richContent: [
      { type: "heading", text: "Meta Ads for Local Service Businesses" },
      {
        type: "paragraph",
        text: "Search ads catch people looking for you. Meta ads put you in front of people before they know they're looking — and bring back the ones who visited your site but didn't convert. This is a complement to search intent, not a replacement for it, and works best paired with the same targeting logic behind your [Google Ads](/services/google-ads) campaigns.",
      },

      { type: "heading", text: "What's Included" },
      { type: "subheading", text: "Audience Targeting" },
      {
        type: "paragraph",
        text: "Campaigns built around who's actually likely to need your service — by location, interests, and behavior — not a generic broad-reach setup.",
      },
      { type: "subheading", text: "Retargeting Campaigns" },
      {
        type: "paragraph",
        text: "Most website visitors don't convert on the first visit. Retargeting keeps you in front of the ones who left without booking, until they're ready.",
      },
      { type: "subheading", text: "Creative That Doesn't Look Like an Ad" },
      {
        type: "paragraph",
        text: "Native-feeling creative outperforms obvious sales pitches in every account we've run — real work, real results people can picture themselves needing, not stock imagery.",
      },
      { type: "subheading", text: "Performance Reporting" },
      {
        type: "paragraph",
        text: "One plain-English report alongside the rest of your marketing, not a separate dashboard you have to learn — the same reporting approach covered in [SEO reporting and analytics](/services/seo-reporting-analytics).",
      },

      { type: "heading", text: "How Meta Ads Works With Search" },
      {
        type: "paragraph",
        text: "Meta ads and search ads solve different problems — one reaches people actively searching, the other reaches people before they start. Run together, they reinforce each other rather than compete for budget attention, and both ultimately depend on a site that converts once someone arrives, which is where [conversion rate optimization](/services/conversion-rate-optimization) comes in.",
      },

      { type: "heading", text: "Measuring What Actually Matters" },
      {
        type: "paragraph",
        text: "Leads, calls, and form fills — vanity metrics like likes and follows don't appear in your report. We can't promise a specific number of leads or a guaranteed return, but every dollar spent is tied back to what it actually produced.",
      },
    ],
  },
  {
    slug: "seo-audit",
    icon: FileSearch,
    title: "SEO Audit",
    shortDescription:
      "A comprehensive, no-obligation look at your site's technical health, content gaps, local visibility, and competitor positioning — the fastest way to see where you actually stand.",
    points: [
      "Technical, on-page & content review",
      "Local SEO, backlink & competitor analysis",
      "Keyword gaps & strategic recommendations",
    ],
    metaTitle: "SEO Audit Services",
    metaDescription:
      "Comprehensive SEO audits for local service businesses — technical, on-page, content, and local SEO, plus backlinks, competitors, and strategic next steps.",
    heroIntro:
      "Before any strategy gets built, we look at where you actually stand — technical health, on-page gaps, content coverage, local visibility, your backlink profile, and exactly where competitors are beating you. This is the audit that becomes the foundation for everything else we do together, and it's also available as a completely free, no-obligation starting point.",
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
          "This audit is broader — technical, on-page, content, local SEO, and backlinks. The Technical SEO Audit goes deeper into just the technical layer — crawling, indexing, Core Web Vitals, and schema — for sites that need focused remediation.",
      },
      {
        question: "Do I have to sign up for anything to get the audit?",
        answer: "No — it's free and comes with no obligation.",
      },
      {
        question: "How will I actually receive my audit results?",
        answer:
          "We reply directly — by email or WhatsApp, whichever you used to reach out — with your findings and the three prioritized quick-wins. No gated PDF, no automated report, no sales sequence in between.",
      },
    ],
    relatedSlugs: ["technical-seo-audit", "on-page-seo", "local-seo-google-business-profile"],
    lastUpdated: "2026-08-10",
    richContent: [
      { type: "heading", text: "Comprehensive SEO Audits for Businesses" },
      {
        type: "paragraph",
        text: "An SEO audit looks at the overall SEO health of a website — not just one layer. It covers technical health, on-page optimization, content, local visibility, backlinks, and where competitors are currently outperforming you, so you know exactly where to focus before committing budget to any one strategy.",
      },
      {
        type: "paragraph",
        text: "Technical health is one input into that picture, not the whole audit. If you already know technical issues are the main concern and want a deeper, technical-only review, a [technical SEO audit](/services/technical-seo-audit) goes further into crawling, indexing, and Core Web Vitals specifically.",
      },

      { type: "heading", text: "What Our SEO Audit Covers" },
      {
        type: "paragraph",
        text: "Every SEO audit works through the same six areas, combining a technical review with a broader SEO analysis of content, authority, and competitors:",
      },

      { type: "subheading", text: "Technical SEO" },
      {
        type: "paragraph",
        text: "A pass through crawlability, indexation, Core Web Vitals, and schema — enough to flag whether technical issues are holding the site back, without duplicating the depth of a dedicated technical audit.",
      },

      { type: "subheading", text: "On-Page SEO" },
      {
        type: "paragraph",
        text: "How well each page's [on-page SEO](/services/on-page-seo) — titles, headings, metadata, and keyword targeting — matches what searchers are actually looking for.",
      },

      { type: "subheading", text: "Content and Keyword Analysis" },
      {
        type: "paragraph",
        text: "Where content is missing, thin, or not targeting the keywords your buyers actually search for, mapped against real [content strategy](/services/content-strategy-seo) opportunities and dedicated [keyword research](/services/keyword-research) where a deeper gap analysis is warranted.",
      },

      { type: "subheading", text: "Backlink and Authority Analysis" },
      {
        type: "paragraph",
        text: "A review of your current backlink profile — quality, relevance, and gaps — compared against what it would take to build the kind of authority [link building](/services/link-building) is designed to grow.",
      },

      { type: "subheading", text: "Local SEO" },
      {
        type: "paragraph",
        text: "For businesses that depend on local customers, we check Google Business Profile completeness, citation consistency, and map pack visibility — the same factors covered in depth in our [Local SEO and Google Business Profile](/services/local-seo-google-business-profile) service.",
      },

      { type: "subheading", text: "Competitor Analysis" },
      {
        type: "paragraph",
        text: "We look at who's currently outranking you for your priority keywords and what they're doing differently — content depth, backlinks, or technical advantages — so recommendations are grounded in your actual competitive landscape, not generic best practices.",
      },

      { type: "heading", text: "How an SEO Audit Helps Your Business" },
      {
        type: "paragraph",
        text: "Rather than guessing which service to invest in first, an SEO audit shows you where the real gaps are before any [SEO strategy](/blog/seo-strategy-for-local-service-businesses) gets built, so budget goes toward what will actually move the needle for your site specifically. We can't guarantee a specific ranking or traffic outcome, but every recommendation in the audit is tied back to a finding, not a generic checklist.",
      },

      { type: "heading", text: "Our SEO Audit Process" },
      {
        type: "orderedList",
        items: [
          "We review technical health, on-page optimization, and content coverage across the site.",
          "We check local visibility factors if the business serves a local market.",
          "We analyze your backlink profile and compare it against competitors.",
          "We identify where competitors are currently outperforming you and why.",
          "You get a single report with findings prioritized by impact, and a clear starting point.",
        ],
      },
      {
        type: "paragraph",
        text: "For restoration and emergency service businesses, this same audit is the starting point for our [restoration SEO](/industries/restoration-seo) and [emergency service SEO](/industries/emergency-service-seo) work — free, and specifically framed around Google Maps visibility and call conversion.",
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
        question: "What is keyword research?",
        answer:
          "It's the process of identifying the exact terms your buyers search — and understanding the intent behind each one — so your pages, content, and local optimization all target terms that actually convert.",
      },
      {
        question: "How many keywords will I end up targeting?",
        answer:
          "It depends on your services and area — quality of match matters more than raw count.",
      },
      {
        question: "Should service businesses target location-based keywords?",
        answer:
          "Usually, yes — most of the highest-intent searches for a local service business combine a service with a location, so location-based terms are typically part of the research, not an afterthought.",
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
    relatedSlugs: ["content-strategy-seo", "on-page-seo", "seo-audit"],
    relatedArticleSlug: "seo-strategy-for-local-service-businesses",
    richContent: [
      { type: "heading", text: "What Keyword Research Includes" },
      {
        type: "paragraph",
        text: "Keyword research connects five things: the services you actually offer, the locations or areas you serve, the specific problems your customers are trying to solve, the intent behind how they search, and what you're actually trying to achieve — leads and booked jobs, not just traffic. Done well, it's the foundation everything else in your SEO work gets built on top of.",
      },
      {
        type: "paragraph",
        text: "This isn't about chasing the highest search volume. A keyword with modest volume but clear buying intent is often worth far more than a high-volume term where most searchers are still just browsing.",
      },

      { type: "heading", text: "Search Intent and Local Keyword Mapping" },
      {
        type: "paragraph",
        text: "Every keyword carries intent, whether that's someone actively looking to hire (\"emergency plumber near me\"), comparing options (\"best roofing company in [city]\"), or still researching (\"how much does a new roof cost\"). We map your target keywords to where a buyer actually is in that decision, so the right page gets built for the right search — not one generic page trying to catch everything.",
      },
      {
        type: "paragraph",
        text: "For a local service business, this includes mapping keywords by service and location combination, not just by service alone — the searches that actually generate calls are usually specific to both.",
      },

      { type: "heading", text: "Competitor Keyword Analysis" },
      {
        type: "paragraph",
        text: "We also look at what your competitors are ranking for that you aren't — a clear, prioritized list of realistic gaps to close, rather than a generic list of industry keywords pulled from a tool without context for your specific market.",
      },

      { type: "heading", text: "How Keyword Research Supports Everything Else" },
      {
        type: "paragraph",
        text: "Keyword research isn't a standalone deliverable — it's the input that makes [on-page SEO](/services/on-page-seo) and [content strategy](/services/content-strategy-seo) work target the right terms instead of guessing, and it's often one of the first gaps an [SEO audit](/services/seo-audit) surfaces. For a local business, it also feeds directly into [Local SEO and Google Business Profile](/services/local-seo-google-business-profile) work — the services and areas you're optimized for locally should match the terms this research actually finds.",
      },
    ],
  },
  {
    slug: "off-page-seo",
    icon: Globe,
    title: "Off-Page SEO",
    shortDescription:
      "Building your reputation and relevance signals beyond your own site — brand mentions, trust signals, and citations that support everything link building earns.",
    points: [
      "Brand mention monitoring & reclamation",
      "Digital reputation & trust signals",
      "Backlinks as part of a broader off-site strategy",
    ],
    metaTitle: "Off-Page SEO Services",
    metaDescription:
      "Off-page SEO for local service businesses — brand mentions, digital reputation, and the trust signals search engines weigh beyond backlinks and citations.",
    heroIntro:
      "What happens off your website matters as much as what's on it. We monitor and reclaim brand mentions that should be linking back to you, build the broader trust and reputation signals that support your rankings, and keep your business information consistent across the directories and citations that still matter — with backlinks treated as one signal among several, not the whole strategy.",
    benefits: [
      {
        title: "Unlinked mentions, reclaimed",
        description:
          "Many businesses are mentioned online without a link back. We find those and turn them into real links.",
      },
      {
        title: "Signals beyond backlinks",
        description:
          "Off-page SEO is bigger than link building alone — it's your digital reputation and trust signals across the web, not just who's linking to you.",
      },
      {
        title: "Consistency everywhere you're listed",
        description:
          "Inconsistent business information across the web quietly undermines the trust signals search engines rely on — a supporting signal alongside reputation and mentions, not the headline.",
      },
    ],
    faqs: [
      {
        question: "How is this different from link building?",
        answer:
          "Link building is one part of off-page SEO. This service covers the broader picture — brand mentions, trust and reputation signals, and consistency across the citations and directories that still matter.",
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
    relatedSlugs: ["link-building", "local-seo-google-business-profile", "seo-audit"],
    richContent: [
      { type: "heading", text: "Off-Page SEO for Local Service Businesses" },
      {
        type: "paragraph",
        text: "What happens off your website matters as much as what's on it. This covers the brand mentions, reputation, and trust signals search engines weigh beyond your own pages — with backlinks treated as one signal among several, not the whole strategy.",
      },

      { type: "heading", text: "What's Included" },
      { type: "subheading", text: "Unlinked Brand Mention Monitoring and Reclamation" },
      {
        type: "paragraph",
        text: "Many businesses are mentioned online without a link back — a news article, a directory listing, a community post. We find those and turn them into real, linked citations.",
      },
      { type: "subheading", text: "Digital Reputation and Trust Signals" },
      {
        type: "paragraph",
        text: "Off-page SEO is bigger than link building alone — it's your reputation and trust signals across the web, not just who's linking to you.",
      },
      { type: "subheading", text: "Citation and Listing Consistency" },
      {
        type: "paragraph",
        text: "Inconsistent business information across the web quietly undermines the trust signals search engines rely on. This is a supporting signal here, working alongside the deeper citation work covered in [Local SEO and Google Business Profile](/services/local-seo-google-business-profile) services.",
      },

      { type: "heading", text: "Off-Page SEO vs. Link Building" },
      {
        type: "paragraph",
        text: "[Link building](/services/link-building) is one part of off-page SEO — earning specific, relevant backlinks. Off-page SEO is the broader picture: brand mentions, reputation, and consistency across every place your business appears online, not just the sites linking to you.",
      },

      { type: "heading", text: "Ongoing, Not One-Time" },
      {
        type: "paragraph",
        text: "New mentions and citation opportunities come up regularly, so this is monitored on an ongoing basis rather than treated as a single cleanup pass — though if your business information is already inconsistent, especially after a rebrand or move, that cleanup audit is the natural starting point.",
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
    relatedSlugs: ["technical-seo-audit", "website-design", "on-page-seo"],
    lastUpdated: "2026-08-10",
    richContent: [
      { type: "heading", text: "Website Speed Optimization for Local Service Businesses" },
      {
        type: "paragraph",
        text: "Every extra second of load time costs you both rankings and visitors who give up and leave. We diagnose exactly what's slowing your site down and fix it in priority order, measured against real Core Web Vitals data — the same metrics covered as part of a broader [technical SEO audit](/services/technical-seo-audit), but with speed as the sole focus here.",
      },

      { type: "heading", text: "What's Included" },
      { type: "subheading", text: "Image and Asset Optimization" },
      {
        type: "paragraph",
        text: "Oversized, unoptimized images are often the single biggest fix available — compressed, correctly sized, and served in modern formats where supported.",
      },
      { type: "subheading", text: "Core Web Vitals Fixes" },
      {
        type: "paragraph",
        text: "Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift addressed directly — render-blocking scripts removed or deferred, layout shift eliminated by reserving space for images and embeds.",
      },
      { type: "subheading", text: "Hosting and Caching Review" },
      {
        type: "paragraph",
        text: "Sometimes hosting is the real bottleneck — we'll tell you plainly if that's the case, but many sites can be fixed without switching providers at all.",
      },

      { type: "heading", text: "How Speed Affects Rankings and Conversions" },
      {
        type: "paragraph",
        text: "Speed sits at an unusual intersection: it's both a confirmed Google ranking factor and a direct driver of whether a visitor sticks around long enough to become a lead. For the full picture of how this connects to your rankings specifically, see [Website Speed and Google Rankings](/blog/website-speed-and-google-rankings).",
      },

      { type: "heading", text: "Measured, Not Assumed" },
      {
        type: "paragraph",
        text: "Before-and-after data on every optimization, so you can see exactly what improved — an initial pass, with ongoing monitoring available if new issues creep in.",
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
        question: "What is conversion rate optimization?",
        answer:
          "It's the work of turning more of your existing traffic into a call, a message, or a completed form — without necessarily needing more visitors in the first place.",
      },
      {
        question: "What should a service business optimize first?",
        answer:
          "Usually the highest-traffic pages with the least clear next step — a page getting real visits but a buried phone number or confusing form is often the fastest fix available.",
      },
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
    relatedSlugs: ["website-design", "google-ads", "seo-reporting-analytics"],
    richContent: [
      { type: "heading", text: "What Conversion Rate Optimization Means" },
      {
        type: "paragraph",
        text: "Conversion rate optimization is the work of turning more of your existing traffic into a call, a message, or a completed form — without necessarily needing more visitors in the first place. For many businesses, fixing what's costing conversions is faster and cheaper than driving additional traffic to a page that isn't converting well.",
      },

      { type: "heading", text: "Calls to Action and Contact Paths" },
      {
        type: "paragraph",
        text: "A visitor who has to hunt for your phone number or dig for a contact form is a visitor you're about to lose. We audit every important page for a clear, unmissable next step — and make sure that step actually works on mobile, where most local searches happen.",
      },

      { type: "heading", text: "Trust Signals and Service Clarity" },
      {
        type: "paragraph",
        text: "Beyond the obvious calls to action, conversion often comes down to whether a visitor trusts what they're looking at and understands exactly what you offer within a few seconds. Vague service descriptions, missing trust signals, and cluttered pages all quietly cost conversions before a visitor ever reaches your contact form.",
      },

      { type: "heading", text: "How CRO Works With the Rest of Your SEO" },
      {
        type: "paragraph",
        text: "None of your ranking or traffic work matters much if the pages it sends visitors to don't convert — this is closely tied to [on-page SEO](/services/on-page-seo), since a well-structured page and a converting page are usually the same page. It's also where [SEO reporting](/services/seo-reporting-analytics) becomes genuinely useful: tracking conversions, not just traffic, is what shows whether these changes are actually working.",
      },
      {
        type: "paragraph",
        text: "For a local business specifically, this connects to [Local SEO and Google Business Profile](/services/local-seo-google-business-profile) too — a visitor who calls directly from your Google Business Profile has already converted before they even reach your website, which is part of why that listing deserves the same attention as your landing pages.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
