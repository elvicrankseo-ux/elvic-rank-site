import { Truck, type LucideIcon } from "lucide-react";
import type { ContentBlock } from "@/lib/content-blocks";

/**
 * Industry acquisition pages — /industries/[slug]. Mirrors the exact
 * pattern already established by src/data/services.ts +
 * src/app/services/[slug]/page.tsx on purpose: a new vertical (roofing,
 * HVAC, plumbing, law firms, ...) is added by appending one entry here,
 * not by building new page/routing/schema logic. See
 * docs/phase-30-growth-strategy.md for the expansion process.
 *
 * Distinct from src/data/services.ts: services describe WHAT Elvic Rank
 * does (SEO, Local SEO, Website Design, ...); industries describe WHO a
 * page is written for (a specific trade), and each industry page routes
 * that visitor toward the relevant existing service pages rather than
 * duplicating their content. This keeps keyword ownership clean — an
 * industry page owns "SEO for towing companies"-type intent, never the
 * broader "SEO"/"Local SEO" intent the service pages already own.
 */
export type IndustryFaq = { question: string; answer: string };

export type Industry = {
  slug: string;
  icon: LucideIcon;
  /** Matches the label already used in the homepage Industries section. */
  label: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  richContent: ContentBlock[];
  faqs: IndustryFaq[];
  /** Slugs into src/data/services.ts — only real, existing service pages. */
  relatedServiceSlugs: string[];
  ctaHeading?: string;
};

export const industries: Industry[] = [
  {
    slug: "towing-companies",
    icon: Truck,
    label: "Towing",
    title: "SEO for Towing Companies That Brings More Calls From Google",
    metaTitle: "Towing Company SEO Services",
    metaDescription:
      "SEO for towing companies focused on Google Business Profile, local visibility, and service pages that turn searches into calls — not vanity rankings.",
    heroIntro:
      "When someone needs a tow, they're not browsing — they're standing next to a dead car searching on their phone, ready to call whoever shows up first. We build the Google Business Profile, local SEO, and website foundation that puts your towing company in front of that searcher at the exact moment it matters.",
    ctaHeading: "Get Started With Towing SEO",
    relatedServiceSlugs: [
      "local-seo-google-business-profile",
      "technical-seo-audit",
      "website-design",
      "google-ads",
    ],
    richContent: [
      { type: "heading", text: "How Towing Customers Actually Search" },
      {
        type: "paragraph",
        text: "Towing searches are some of the highest-intent, most mobile-heavy searches in local service. Almost nobody searches for a tow truck days in advance — the searcher has a broken-down car, a flat tire, or an accident right now, and they're searching from a phone, often on a highway shoulder with poor signal. \"Tow truck near me,\" \"towing service open now,\" and \"emergency towing [city]\" are searches from someone who is calling within minutes, not comparison-shopping over days.",
      },
      {
        type: "paragraph",
        text: "That changes what actually matters for a towing company's SEO. Ranking for a broad, informational keyword weeks from now does nothing for a driver stranded right now. The strategy has to be built around showing up in the Local Pack and Google Maps at the moment of the search — mobile-first, phone-number-visible, and fast to load on a weak connection.",
      },

      { type: "heading", text: "How Elvic Rank Helps Towing Companies Get Found" },
      {
        type: "paragraph",
        text: "We apply the same core local SEO system we use for any local service business — [Local SEO and Google Business Profile optimization](/services/local-seo-google-business-profile), [technical SEO](/services/technical-seo-audit), and conversion-ready [website design](/services/website-design) — specifically tuned to how towing customers search and decide. Nothing here is towing-exclusive technology; it's the same fundamentals, applied with towing's search behavior in mind instead of treated generically.",
      },

      { type: "heading", text: "Google Business Profile for Towing Companies" },
      {
        type: "paragraph",
        text: "For a towing company, Google Business Profile often matters more than the website itself — a huge share of towing searches end in a direct call or a click-to-directions straight from the Maps listing, without ever reaching a website. We focus on:",
      },
      {
        type: "list",
        items: [
          "Choosing the correct primary category and configuring service-area coverage accurately, since most towing businesses serve a radius rather than a single fixed address.",
          "Building out a complete, specific services list rather than a generic \"towing\" listing.",
          "Keeping hours, phone number, and business information accurate and consistent — critical for a business people call at 2am.",
          "A repeatable system for earning and responding to reviews, since review volume and recency are among the strongest signals for local ranking.",
          "Regular profile activity (photos, posts, Q&A) instead of a profile that was set up once and forgotten.",
        ],
      },

      { type: "heading", text: "Local SEO and Service-Area Visibility" },
      {
        type: "paragraph",
        text: "Most towing companies aren't tied to a single storefront location — they serve a coverage area, often spanning several towns or a whole metro region. We configure and optimize around that reality: accurate service-area settings in Google Business Profile, location-relevant content, and citation consistency across the directories that matter, so Google understands exactly where you actually operate rather than guessing from a single address.",
      },

      { type: "heading", text: "Towing Service Pages That Match Real Searches" },
      {
        type: "paragraph",
        text: "Not every towing company offers the same services, and we don't assume otherwise. Depending on what your company actually provides, this can include dedicated pages for services such as emergency towing, roadside assistance, flatbed towing, long-distance towing, accident recovery, motorcycle towing, or heavy-duty towing — each built around how customers actually search for that specific service, not a single generic \"towing\" page trying to rank for everything at once. The exact page set is built around your real service list, not a template applied blindly.",
      },

      { type: "heading", text: "Turning Visitors Into Calls" },
      {
        type: "paragraph",
        text: "A towing website's only real job is getting the phone to ring. That means a click-to-call phone number visible without scrolling, on every page, on a site that loads fast on mobile — a stranded customer with a weak signal won't wait for a bloated page to render. We audit and fix exactly this kind of friction as part of a [technical SEO audit](/services/technical-seo-audit) and, where the site itself is the bottleneck, [website design](/services/website-design) work built around getting the call, not winning a design award.",
      },

      { type: "heading", text: "Understanding the Competitive Landscape" },
      {
        type: "paragraph",
        text: "Towing is often a genuinely competitive local category — multiple operators frequently compete for the same map pack positions in a metro area. Before recommending anything, we look at who's actually outranking you locally and why: stronger review volume, better citation consistency, more complete profiles, or content gaps you can realistically close. Recommendations are built around your real competitive picture, not a generic checklist.",
      },

      { type: "heading", text: "Reviews and Local Trust" },
      {
        type: "paragraph",
        text: "Review volume and recency are consistently among the strongest local ranking signals, and for a towing company they double as a trust signal at the exact moment someone is deciding whether to call a stranger to tow their car. We help build a simple, repeatable system for asking real customers for reviews right after the job, and for responding to reviews professionally — we never fabricate, buy, or manipulate reviews, for any client, under any circumstance.",
      },

      { type: "heading", text: "Why Local SEO Matters for High-Intent Towing Searches" },
      {
        type: "paragraph",
        text: "Because towing searches are almost entirely high-intent and immediate, the return on local visibility tends to show up faster than it does for lower-intent categories — once you're visible in the moment someone searches, that visibility can convert directly into a call. That doesn't mean instant or guaranteed results; it means the fundamentals (profile completeness, review signals, technical performance, accurate service-area targeting) translate more directly into calls for a category this intent-driven than they do for a business whose customers spend weeks comparing options.",
      },

      { type: "heading", text: "Our Process for Towing Companies" },
      {
        type: "orderedList",
        items: [
          "Audit — a full review of your Google Business Profile, website, citations, and local competitive position, using the same [towing SEO audit framework](/services/technical-seo-audit) we apply consistently across every prospect and client.",
          "Foundation — fix the technical and profile issues that are actively capping visibility before anything else.",
          "Optimization — build out service pages that match your real service list, strengthen your Google Business Profile, and clean up citations and service-area targeting.",
          "Conversion — make sure the traffic and calls this work generates can actually reach you, with clear, mobile-first calls to action.",
          "Ongoing management — ranking and profile health are not one-time projects; we monitor and adjust as your market and Google's own algorithm shift.",
        ],
      },
      {
        type: "paragraph",
        text: "We're currently applying this same approach to Akanaby Logistics Inc., a towing and logistics company — website design work is complete and Google Business Profile optimization is in progress. We only publish real project status, not projected results; you can see the current status on our [current projects section](/#case-studies).",
      },
    ],
    faqs: [
      {
        question: "Does Elvic Rank only work with towing companies?",
        answer:
          "No — Elvic Rank is an SEO agency for local service businesses generally. Towing is one of the industries we work with, applying the same core local SEO system with towing's specific search behavior in mind, not a separate or narrower offering.",
      },
      {
        question: "How is towing SEO different from general local SEO?",
        answer:
          "The fundamentals are the same — Google Business Profile, local relevance, citations, reviews, technical health. What differs is priority and emphasis: towing searches are overwhelmingly high-intent, mobile, and immediate, so service-area accuracy, mobile speed, and click-to-call visibility matter more than they would for a business with a longer buying cycle.",
      },
      {
        question: "What does a towing SEO engagement actually include?",
        answer:
          "It depends on what your audit finds and what you actually need — typically Google Business Profile optimization, technical and on-page SEO, service pages matched to the services you actually offer, and ongoing local SEO management. We build the plan around your specific findings, not a fixed package.",
      },
      {
        question: "Do you build a page for every type of towing service?",
        answer:
          "Only for the services you actually offer. We don't create generic pages for services outside your real capabilities — the goal is pages that match your real business and real search intent, not maximum page count.",
      },
      {
        question: "Can you help if our Google Business Profile is already set up but underperforming?",
        answer:
          "Yes — this is one of the most common starting points. A profile that was set up once and never maintained is very different from one actively managed, and the gap between the two is often the fastest lever available.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "There's no honest universal timeline — it depends on your market's competitiveness and your current starting point. Google Business Profile improvements are often visible within weeks; broader local ranking movement typically builds over a longer period. We won't promise a specific timeline or outcome, and any agency that does isn't being straight with you.",
      },
      {
        question: "Do you guarantee more calls or a specific ranking?",
        answer:
          "No — no honest agency can guarantee a specific ranking or call volume. What we commit to is doing the work that actually influences the factors Google weighs, and reporting honestly on what's happening.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
