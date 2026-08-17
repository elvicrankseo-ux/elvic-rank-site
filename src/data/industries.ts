import {
  Droplets,
  Flame,
  Sprout,
  CloudLightning,
  ShieldAlert,
  Biohazard,
  Truck,
  Wrench,
  Thermometer,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ContentBlock } from "@/lib/content-blocks";

/**
 * Industry acquisition pages — /industries/[slug]. Mirrors the pattern
 * established by src/data/services.ts + src/app/services/[slug]/page.tsx
 * on purpose: a new vertical is added by appending one entry here, not
 * by building new page/routing/schema logic.
 *
 * Distinct from src/data/services.ts: services describe WHAT Elvic Rank
 * does (SEO, Local SEO, Website Design, ...); industries describe WHO a
 * page is written for, and each industry page routes that visitor
 * toward the relevant existing service pages rather than duplicating
 * their content — this keeps keyword ownership clean.
 *
 * Restoration & Emergency Service pivot (see docs/phase-31-*): two
 * "hub" (isHub: true) pillar pages — restoration-seo and
 * emergency-service-seo — sit above 10 individual vertical pages,
 * grouped by `group`. Hub pages link down to every niche in their
 * group (relatedIndustrySlugs); niche pages link back up to their hub.
 *
 * Deliberately NOT built as a separate "flood restoration" page: flood
 * and water damage restoration share almost identical search intent,
 * customer, and content — a separate page would be exactly the kind of
 * thin, keyword-swapped duplicate this project's standing rules
 * prohibit. Flood is covered explicitly within water-damage-restoration
 * instead. Documented in docs/phase-31-niche-pivot.md.
 */
export type IndustryFaq = { question: string; answer: string };

export type Industry = {
  slug: string;
  icon: LucideIcon;
  /** Short label used in nav/homepage cards. */
  label: string;
  group: "restoration" | "emergency";
  /** True only for the two pillar/overview pages. */
  isHub?: boolean;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  richContent: ContentBlock[];
  faqs: IndustryFaq[];
  /** Slugs into src/data/services.ts — only real, existing service pages. */
  relatedServiceSlugs: string[];
  /** Slugs into this same file — hub↔niche cross-links. */
  relatedIndustrySlugs?: string[];
  ctaHeading?: string;
};

export const industries: Industry[] = [
  // ---------------------------------------------------------------
  // HUB: RESTORATION SEO
  // ---------------------------------------------------------------
  {
    slug: "restoration-seo",
    icon: Droplets,
    label: "Restoration SEO",
    group: "restoration",
    isHub: true,
    title: "Restoration SEO Services That Generate More Calls",
    metaTitle: "Restoration SEO Services",
    metaDescription:
      "SEO for restoration companies — Google Business Profile, local SEO, and service-area strategy built around how customers search after water, fire, storm, or mold damage.",
    heroIntro:
      "Nobody plans for a restoration job — a pipe bursts, a fire starts, a storm hits, and the customer is on their phone searching Google within minutes, not researching for weeks. We build the local SEO, Google Business Profile, and website foundation that puts restoration companies in front of that search at the exact moment it happens.",
    ctaHeading: "Get Your Free Restoration SEO Audit",
    relatedServiceSlugs: [
      "local-seo-google-business-profile",
      "technical-seo-audit",
      "seo-audit",
      "google-ads",
    ],
    relatedIndustrySlugs: [
      "water-damage-restoration",
      "fire-smoke-restoration",
      "mold-remediation",
      "storm-damage-restoration",
      "disaster-restoration",
      "biohazard-cleanup",
    ],
    richContent: [
      { type: "heading", text: "Why Restoration Companies Need Local SEO" },
      {
        type: "paragraph",
        text: "Restoration is one of the purest examples of emergency, high-intent local search. A homeowner with water pooling in the basement or smoke damage after a fire isn't comparison-shopping — they're searching \"water damage restoration near me\" or \"emergency fire damage cleanup\" and calling whoever looks credible and available in the next few minutes. If a restoration company isn't visible in that moment — in the Google Local Pack, on Maps, with a fast-loading site and a click-to-call number — the job goes to a competitor instead, regardless of the actual quality of the work.",
      },
      {
        type: "paragraph",
        text: "That's what makes restoration SEO different from generic SEO: the entire strategy has to be built around emergency, local, mobile-first search behavior — not slow-building brand awareness or long-tail informational content that a comparison-shopper reads over a week.",
      },

      { type: "heading", text: "How Emergency Restoration Searches Actually Work" },
      {
        type: "paragraph",
        text: "Searches like \"water damage restoration near me,\" \"24 hour fire damage cleanup,\" or \"mold remediation company [city]\" are almost entirely bottom-of-funnel — the damage has already happened, and the searcher wants a phone number, not an explainer article. These searches are also disproportionately mobile: someone standing in a flooded basement is pulling out a phone, not sitting at a desktop. That combination — urgent, local, mobile — is exactly the profile Google's Local Pack and Maps results are built to serve, which is why Google Business Profile and local SEO carry more weight for restoration than almost any other category.",
      },

      { type: "heading", text: "Google Maps Visibility for Restoration Companies" },
      {
        type: "paragraph",
        text: "The three-listing Local Pack shown above standard organic results is often the entire game for a restoration search — a customer in genuine distress will frequently call the first credible-looking result without scrolling further. Winning that placement depends on the same core signals across every restoration category: profile completeness, category accuracy, review volume and recency, citation consistency, and accurate service-area configuration. We cover the mechanics of this in depth in [Google Business Profile Optimization](/services/local-seo-google-business-profile).",
      },

      { type: "heading", text: "Google Business Profile Optimization for Restoration" },
      {
        type: "paragraph",
        text: "For a restoration company, Google Business Profile often IS the first real interaction a customer has with the business — before the website, before a phone call. That means primary category accuracy (\"Water Damage Restoration Service\" vs. a vague \"Contractor\" listing), a complete and specific services list, service-area configuration that matches where the company actually responds, and an active review pipeline all matter directly to whether the phone rings.",
      },

      { type: "heading", text: "Service-Area SEO and Location Pages" },
      {
        type: "paragraph",
        text: "Most restoration companies serve a defined radius or a specific set of counties/cities rather than operating from a single walk-in location — and Google needs to understand that coverage accurately, both in Google Business Profile's service-area settings and, where the coverage area is large or spans genuinely distinct markets, in dedicated location content on the website. This is built deliberately, not by mass-producing near-identical city pages — a location page only earns its place when there's real, distinct value to say about that market, never as a thin keyword-swap exercise.",
      },

      { type: "heading", text: "Review Generation and Reputation" },
      {
        type: "paragraph",
        text: "Review volume and recency are consistently among the strongest local ranking signals, and for restoration they double as the trust signal that convinces someone in a genuinely stressful moment to call a stranger into their home. A simple, repeatable system for asking real customers for reviews right after the job — and responding to every review professionally — is one of the highest-leverage, lowest-cost levers available. We never fabricate, buy, or manipulate reviews, for any client, under any circumstance.",
      },

      { type: "heading", text: "Local Citations and NAP Consistency" },
      {
        type: "paragraph",
        text: "Consistent name, address, and phone number across the directories that matter reinforces to Google that the business is real, operating, and reachable at the stated location — a meaningful trust signal, especially for a category where fly-by-night operators are a real competitive concern for legitimate companies.",
      },

      { type: "heading", text: "Technical SEO Foundation" },
      {
        type: "paragraph",
        text: "None of the above matters if the website itself can't be crawled, indexed, or loaded quickly on a phone with a weak signal. A [technical SEO audit](/services/technical-seo-audit) is usually the right starting point — it tells you exactly what's capping visibility before any content or local optimization work begins.",
      },

      { type: "heading", text: "Conversion: Turning Visibility Into Calls" },
      {
        type: "paragraph",
        text: "A restoration website's only real job is getting the phone to ring or the emergency form filled out. That means a click-to-call number visible without scrolling on every page, clear service-area and service coverage, and a site that loads fast on mobile — a customer standing in water damage won't wait for a bloated page. We audit and fix exactly this kind of conversion friction as part of [technical SEO](/services/technical-seo-audit) and website work.",
      },

      { type: "heading", text: "Measuring What Actually Matters" },
      {
        type: "paragraph",
        text: "Rankings and traffic are inputs, not the outcome — the metric that matters is calls and booked jobs. A useful reporting approach ties organic and local visibility directly to what happens after someone finds you, which is the same principle behind our [SEO reporting and analytics](/services/seo-reporting-analytics) approach applied specifically to a restoration company's call volume.",
      },

      { type: "heading", text: "Where to Start" },
      {
        type: "paragraph",
        text: "The individual restoration categories — [water damage restoration](/industries/water-damage-restoration), [fire and smoke damage](/industries/fire-smoke-restoration), [mold remediation](/industries/mold-remediation), [storm damage](/industries/storm-damage-restoration), [large-scale disaster restoration](/industries/disaster-restoration), and [biohazard cleanup](/industries/biohazard-cleanup) — each have their own specific search behavior and customer situation worth understanding on their own terms, which is why each has its own dedicated page rather than being folded into generic restoration copy.",
      },
    ],
    faqs: [
      {
        question: "Does Elvic Rank only work with restoration companies?",
        answer:
          "No — Elvic Rank specializes in restoration and emergency service businesses broadly, because they share the same core dynamic: customers searching Google urgently, right now, because something has already gone wrong. Restoration is one half of that focus; see our Emergency Service SEO page for the other.",
      },
      {
        question: "How is restoration SEO different from general local SEO?",
        answer:
          "The fundamentals are the same — Google Business Profile, local relevance, citations, reviews, technical health. What differs is priority: restoration searches are almost entirely urgent and immediate, so service-area accuracy, review velocity, and mobile speed matter more than they would for a business with a longer buying cycle.",
      },
      {
        question: "Do you guarantee a specific ranking or number of calls?",
        answer:
          "No — no honest agency can guarantee a specific ranking or call volume, and we won't pretend otherwise. We commit to doing the work that actually influences the factors Google weighs, and reporting honestly on what's happening.",
      },
      {
        question: "What's the first step?",
        answer:
          "A free SEO and Google Business Profile audit — a real look at where your visibility currently stands, what's likely costing you calls, and what to prioritize first.",
      },
    ],
  },

  // ---------------------------------------------------------------
  // RESTORATION NICHES
  // ---------------------------------------------------------------
  {
    slug: "water-damage-restoration",
    icon: Droplets,
    label: "Water Damage Restoration",
    group: "restoration",
    title: "Water Damage Restoration SEO",
    metaTitle: "Water Damage Restoration SEO",
    metaDescription:
      "SEO for water damage and flood restoration companies — Google Business Profile, local visibility, and service pages built around emergency water damage searches.",
    heroIntro:
      "\"Water damage restoration near me\" and \"emergency flood cleanup\" are searches from someone with active water in their home right now, not someone planning ahead. We build the local SEO and Google Business Profile foundation that puts water damage and flood restoration companies in front of that search first.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit", "website-design"],
    relatedIndustrySlugs: ["restoration-seo", "disaster-restoration"],
    richContent: [
      { type: "heading", text: "How Water Damage Customers Search" },
      {
        type: "paragraph",
        text: "Water damage and flood cleanup searches split into two real patterns: the true emergency (\"water damage restoration near me,\" \"emergency flood cleanup,\" \"burst pipe cleanup\") from someone with active water right now, and the slightly less urgent but still time-sensitive follow-up (\"water damage repair,\" \"structural drying company\") from someone already dealing with an insurance claim. Both are overwhelmingly local and mobile, and both convert on speed of response as much as on reputation.",
      },
      {
        type: "heading", text: "Google Business Profile for Water Damage Companies" },
      {
        type: "paragraph",
        text: "Category accuracy matters more here than almost anywhere — \"Water Damage Restoration Service\" is a distinct, specific Google category, and a listing filed under a generic \"General Contractor\" category competes at a real disadvantage for these exact searches. Beyond category, 24/7 availability should be reflected accurately in hours, and the services list should specifically mention water extraction, structural drying, and any flood or storm-related services actually offered.",
      },
      { type: "heading", text: "Local SEO and Service-Area Coverage" },
      {
        type: "paragraph",
        text: "Water damage companies frequently serve a wide radius, since flooding events can spike demand across an entire region at once. Accurate service-area configuration in Google Business Profile — not an inflated area that dilutes local relevance, and not an underclaimed one that misses real coverage — is worth getting right specifically for this reason.",
      },
      { type: "heading", text: "Content That Matches Real Search Intent" },
      {
        type: "paragraph",
        text: "A single generic \"water damage\" page trying to rank for every related term performs worse than clear coverage of the specific situations customers actually search: burst pipes, basement flooding, storm/flood water intrusion, and the structural drying and dehumidification process itself. This is exactly the kind of intent-mapping [on-page SEO](/services/on-page-seo) and [keyword research](/services/keyword-research) are built to get right.",
      },
      { type: "heading", text: "Reviews and Speed of Response" },
      {
        type: "paragraph",
        text: "Because water damage compounds by the hour, response-time language in reviews (\"they were there within 30 minutes\") carries unusual weight for this category specifically — a reason to actively encourage customers to mention response time when asking for reviews, not just overall satisfaction.",
      },
      { type: "heading", text: "Turning Visibility Into Calls" },
      {
        type: "paragraph",
        text: "A visible click-to-call number and a fast-loading, mobile-first site matter directly here — someone dealing with active water damage will call the first credible, easy-to-reach result rather than dig through a slow site. This is the same conversion-focused work covered in our broader [restoration SEO](/industries/restoration-seo) approach.",
      },
    ],
    faqs: [
      {
        question: "Do you cover flood damage too, or just water damage?",
        answer:
          "Both — flood and water damage restoration share nearly identical search behavior and customer situations, so we treat them as one coordinated strategy rather than splitting them into separate, thin pages.",
      },
      {
        question: "How fast can SEO help with 24/7 emergency visibility?",
        answer:
          "Google Business Profile improvements are often visible within weeks; broader organic ranking movement typically takes longer. There's no honest universal timeline, and we won't promise a specific one.",
      },
      {
        question: "We already have a Google Business Profile — can you just improve it?",
        answer:
          "Yes — this is one of the most common starting points. A profile set up once and left alone is very different from one actively managed, and the gap between the two is often the fastest lever available.",
      },
    ],
  },
  {
    slug: "fire-smoke-restoration",
    icon: Flame,
    label: "Fire & Smoke Restoration",
    group: "restoration",
    title: "Fire & Smoke Damage Restoration SEO",
    metaTitle: "Fire & Smoke Damage Restoration SEO",
    metaDescription:
      "SEO for fire and smoke damage restoration companies — Google visibility, Google Business Profile, and content built around how fire damage customers actually search.",
    heroIntro:
      "Fire damage searches happen in the aftermath of one of the most stressful events a homeowner can face — and they happen fast, often from a phone, often involving an insurance company already in the picture. We build the local SEO and Google visibility that puts fire and smoke restoration companies in front of that search.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit", "content-strategy-seo"],
    relatedIndustrySlugs: ["restoration-seo", "disaster-restoration"],
    richContent: [
      { type: "heading", text: "How Fire Damage Customers Search" },
      {
        type: "paragraph",
        text: "\"Fire damage restoration near me\" and \"smoke damage cleanup\" searches come from a genuinely traumatic moment — often within hours of a fire, frequently already coordinating with an insurance adjuster. The searcher wants a company that looks established, credentialed, and immediately reachable, more than they want to read an in-depth article.",
      },
      { type: "heading", text: "Insurance-Adjacent Search Behavior" },
      {
        type: "paragraph",
        text: "Fire restoration is one of the categories where insurance involvement genuinely shapes search and decision behavior — customers frequently search for companies that \"work with insurance\" or handle the claims process directly. If that's genuinely true of the business, it belongs clearly on the Google Business Profile and website, since it's a real differentiator this category's searchers specifically look for.",
      },
      { type: "heading", text: "Google Business Profile for Fire & Smoke Restoration" },
      {
        type: "paragraph",
        text: "Accurate primary category (\"Fire Damage Restoration Service\"), a complete services list covering both fire and smoke/soot cleanup separately (they're related but distinct concerns to a searcher), and genuine before/after photo documentation where the business has real examples all directly support visibility and trust for this category.",
      },
      { type: "heading", text: "Content for a Two-Stage Decision" },
      {
        type: "paragraph",
        text: "Fire damage customers often make an immediate emergency call, then do a second round of more careful research once the adjuster is involved and options are being compared. Content that speaks honestly to both moments — an unmissable emergency CTA plus a clear explanation of process and credentials — serves the full real customer journey, not just the first click.",
      },
      { type: "heading", text: "Reviews and Trust for a High-Stakes Category" },
      {
        type: "paragraph",
        text: "Because fire damage is high-value and high-stress, review content that speaks to communication, professionalism, and handling the insurance process smoothly tends to matter as much as raw star rating. A simple, ongoing system for requesting genuine reviews after the job — never fabricated — is a real, compounding asset.",
      },
    ],
    faqs: [
      {
        question: "Does SEO help with insurance-related fire damage searches?",
        answer:
          "It can, if the business genuinely handles insurance claims — making that clear on the Google Business Profile and website is a real, honest positioning move, not an SEO trick, since it directly answers what many fire-damage searchers are actually looking for.",
      },
      {
        question: "How is fire damage SEO different from water damage SEO?",
        answer:
          "The core local SEO mechanics are the same, but fire damage searches skew slightly more toward insurance-process and credential-related trust signals, given the typically higher value and complexity of a fire damage job.",
      },
    ],
  },
  {
    slug: "mold-remediation",
    icon: Sprout,
    label: "Mold Remediation",
    group: "restoration",
    title: "Mold Remediation SEO",
    metaTitle: "Mold Remediation SEO",
    metaDescription:
      "SEO for mold remediation and mold removal companies — local visibility, Google Business Profile, and content built around health-concern-driven mold searches.",
    heroIntro:
      "Mold searches are driven by a mix of urgency and health concern — \"mold remediation near me,\" \"black mold removal,\" \"mold inspection company.\" We build the local SEO and Google Business Profile foundation that puts mold remediation companies in front of that search.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "content-strategy-seo", "seo-audit"],
    relatedIndustrySlugs: ["restoration-seo"],
    richContent: [
      { type: "heading", text: "How Mold Remediation Customers Search" },
      {
        type: "paragraph",
        text: "Mold searches carry a distinct emotional register from flood or fire — health concern rather than pure property-damage panic. \"Mold remediation near me,\" \"black mold removal,\" and \"mold inspection\" often come from someone who's noticed a health symptom or visible growth and is trying to understand the problem as much as find a company immediately. That means mold content earns real value from being genuinely informative, not purely a lead-capture page.",
      },
      { type: "heading", text: "Google Business Profile for Mold Companies" },
      {
        type: "paragraph",
        text: "\"Mold Remediation Service\" as a specific, accurate primary category — separate from generic restoration — helps Google match the listing to mold-specific searches directly. A services list that distinguishes inspection/testing from actual remediation work (these are sometimes searched separately) also helps match intent precisely.",
      },
      { type: "heading", text: "Content That Builds Trust Through Understanding" },
      {
        type: "paragraph",
        text: "Because mold searchers are often trying to understand what they're dealing with, genuinely useful explanatory content — what black mold actually is, when remediation is necessary vs. a smaller cleanup — builds real trust and supports [content strategy](/services/content-strategy-seo) work that earns organic visibility beyond just the local pack, while still linking clearly to the remediation service itself as the next step.",
      },
      { type: "heading", text: "Local SEO and Reviews for Mold Remediation" },
      {
        type: "paragraph",
        text: "The same core local SEO fundamentals apply — citation consistency, service-area accuracy, and a genuine review pipeline — with reviews that speak to thoroughness and follow-up testing carrying particular weight, since a mold customer is often specifically worried about the problem actually being resolved, not just papered over.",
      },
    ],
    faqs: [
      {
        question: "Is mold remediation SEO different from general restoration SEO?",
        answer:
          "The core mechanics are shared, but mold searches skew more informational and health-concern-driven than pure emergency searches — which means genuinely useful educational content plays a bigger role here than it does for, say, an active flood.",
      },
      {
        question: "Do you write medical or health claims about mold?",
        answer:
          "No — content focuses on the remediation service and process, not health or medical claims, which should come from qualified health sources, not an SEO agency.",
      },
    ],
  },
  {
    slug: "storm-damage-restoration",
    icon: CloudLightning,
    label: "Storm Damage Restoration",
    group: "restoration",
    title: "Storm Damage Restoration SEO",
    metaTitle: "Storm Damage Restoration SEO",
    metaDescription:
      "SEO for storm damage restoration companies — Google visibility built for the surge demand and local competition that follow major storm events.",
    heroIntro:
      "Storm damage demand doesn't arrive evenly — it spikes hard after a specific weather event, and companies visible in that exact window win a disproportionate share of the work. We build the local SEO and Google Business Profile foundation that keeps storm restoration companies visible before, during, and after that surge.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit", "seo-reporting-analytics"],
    relatedIndustrySlugs: ["restoration-seo", "disaster-restoration"],
    richContent: [
      { type: "heading", text: "The Unique Shape of Storm Damage Demand" },
      {
        type: "paragraph",
        text: "Unlike water or fire damage, which happen at a relatively steady individual rate, storm damage demand arrives in sharp spikes tied to actual weather events — a hailstorm, a hurricane, a major wind event. Search volume for \"storm damage repair near me\" or \"emergency roof tarping\" can jump dramatically for days after a storm, then drop off. A company that isn't already visible before the surge starts loses ground to competitors who are.",
      },
      { type: "heading", text: "Why Visibility Has to Be Built in Advance" },
      {
        type: "paragraph",
        text: "Google Business Profile authority, citation consistency, and review volume all build up over time — they can't be assembled in the 48 hours after a storm hits. This is the strongest argument for storm-damage-focused companies to treat local SEO as standing infrastructure, maintained continuously, rather than something to scramble on only once a storm is already in the news.",
      },
      { type: "heading", text: "Google Business Profile for Storm Restoration" },
      {
        type: "paragraph",
        text: "Beyond the standard fundamentals, storm-specific services (emergency tarping, board-up, debris removal, structural assessment) should be explicitly listed, since searchers immediately after a storm are often looking for that exact specific service, not a generic \"storm damage\" listing.",
      },
      { type: "heading", text: "Content and Seasonal Preparedness" },
      {
        type: "paragraph",
        text: "Content genuinely useful before storm season (what to do when a storm damages your home, how to document damage for insurance) can earn organic visibility and trust ahead of the surge, complementing the pure local-pack strategy — the same principle behind [content strategy](/services/content-strategy-seo) work applied to a seasonal-demand category.",
      },
    ],
    faqs: [
      {
        question: "Does SEO help if demand is this unpredictable?",
        answer:
          "Yes, precisely because it's unpredictable — the companies with strong, continuously-maintained local SEO before a storm hits are positioned to capture the surge; the ones starting from zero after the fact are not. It's infrastructure work, not a reactive tactic.",
      },
      {
        question: "Should we pause SEO work in the off-season?",
        answer:
          "No — review velocity, citation consistency, and Google Business Profile authority all build cumulatively, and pausing risks losing exactly the visibility that matters most when the next storm hits.",
      },
    ],
  },
  {
    slug: "disaster-restoration",
    icon: ShieldAlert,
    label: "Disaster Restoration",
    group: "restoration",
    title: "Disaster Restoration SEO",
    metaTitle: "Disaster Restoration SEO",
    metaDescription:
      "SEO for full-service disaster restoration companies covering multiple damage types — local visibility, Google Business Profile, and service-area strategy at scale.",
    heroIntro:
      "Full-service disaster restoration companies cover water, fire, mold, and storm damage under one roof — which means competing for visibility across several distinct search categories at once, each with its own search behavior. We build the local SEO strategy that covers that full range without diluting focus on any one of them.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "on-page-seo", "seo-audit"],
    relatedIndustrySlugs: ["restoration-seo", "water-damage-restoration", "fire-smoke-restoration", "storm-damage-restoration"],
    richContent: [
      { type: "heading", text: "The Multi-Category Challenge" },
      {
        type: "paragraph",
        text: "A full-service disaster restoration company faces a specific SEO challenge a single-category competitor doesn't: real customers search \"water damage restoration,\" \"fire damage cleanup,\" and \"storm damage repair\" as genuinely distinct queries, even when one company legitimately handles all three. A single generic \"disaster restoration\" page trying to rank for everything at once typically performs worse than clear, dedicated coverage of each service the company actually offers.",
      },
      { type: "heading", text: "Structuring the Site Around Real Search Intent" },
      {
        type: "paragraph",
        text: "The fix is architectural: dedicated pages for each major damage category the company genuinely handles, all linking to and reinforcing each other, rather than one page attempting to cover everything. This is exactly the [on-page SEO](/services/on-page-seo) and site-architecture work that lets a multi-service company compete for every relevant search instead of diluting its own authority across too broad a page.",
      },
      { type: "heading", text: "Google Business Profile at Scale" },
      {
        type: "paragraph",
        text: "A complete, specific services list matters even more for a multi-category company — every service actually offered should be explicitly listed, since Google Business Profile's own categorization and matching depends on that completeness, not just the primary category alone.",
      },
      { type: "heading", text: "One Coordinated Local SEO Strategy" },
      {
        type: "paragraph",
        text: "Despite covering multiple categories, the underlying local SEO fundamentals — citation consistency, service-area accuracy, review generation — are managed as one coordinated strategy, not a separate campaign per damage type. See [restoration SEO](/industries/restoration-seo) for the shared foundation every category builds on.",
      },
    ],
    faqs: [
      {
        question: "We handle water, fire, and mold — do we need three separate strategies?",
        answer:
          "You need three sets of dedicated content and keyword targeting under one coordinated local SEO strategy — not three disconnected campaigns, but not one generic page trying to cover everything either.",
      },
      {
        question: "Will separate pages for each damage type compete with each other?",
        answer:
          "No, if built correctly — each page targets a genuinely distinct search intent (water vs. fire vs. storm), so there's no overlap or cannibalization risk when they're structured around real, different customer situations.",
      },
    ],
  },
  {
    slug: "biohazard-cleanup",
    icon: Biohazard,
    label: "Biohazard Cleanup",
    group: "restoration",
    title: "Biohazard & Trauma Cleanup SEO",
    metaTitle: "Biohazard Cleanup SEO",
    metaDescription:
      "SEO for biohazard, trauma, and hoarding cleanup companies — discreet, trust-focused local visibility built for a uniquely sensitive category.",
    heroIntro:
      "Biohazard, trauma, and hoarding cleanup searches come from some of the most sensitive moments a customer will ever search Google — which changes what trust and visibility actually need to look like. We build local SEO for this category with the discretion and professionalism it genuinely requires.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "seo-audit"],
    relatedIndustrySlugs: ["restoration-seo"],
    richContent: [
      { type: "heading", text: "A Uniquely Sensitive Search Category" },
      {
        type: "paragraph",
        text: "Biohazard, trauma scene, and hoarding cleanup searches are driven by circumstances that are often deeply personal and difficult — an unattended death, a crime scene, a hoarding situation involving a family member. Search behavior here is still local and urgent, but the tone of everything the business communicates matters more than in almost any other category: discreet, professional, respectful, never sensationalized.",
      },
      { type: "heading", text: "Google Business Profile and Discretion" },
      {
        type: "paragraph",
        text: "Accurate category selection (\"Biohazard Cleanup Service\") and a clear, calm services list still matter for visibility, but photo and description choices should be handled with real sensitivity — this is not a category where dramatic before/after imagery serves the business or its customers well.",
      },
      { type: "heading", text: "Trust Signals for This Category" },
      {
        type: "paragraph",
        text: "Licensing, certification, and discreet/unmarked-vehicle service (where genuinely true) are the kind of real, verifiable trust signals that matter most here — never fabricated credentials, only what's actually true of the business, stated clearly.",
      },
      { type: "heading", text: "Local SEO Fundamentals Still Apply" },
      {
        type: "paragraph",
        text: "The underlying local SEO mechanics — citation consistency, service-area accuracy, technical site health — are the same fundamentals covered in [Local SEO and Google Business Profile](/services/local-seo-google-business-profile), applied with the tone this category requires rather than generic urgency-driven copy.",
      },
    ],
    faqs: [
      {
        question: "Does biohazard cleanup SEO work differently from other restoration categories?",
        answer:
          "The core local SEO mechanics are the same, but tone and content approach differ significantly — this category calls for discretion and professionalism over urgency-driven marketing language.",
      },
      {
        question: "Can you help with reviews for such a sensitive service?",
        answer:
          "Yes, though request timing and phrasing should be handled thoughtfully given the circumstances — we never push for reviews in a way that feels inappropriate to the situation.",
      },
    ],
  },

  // ---------------------------------------------------------------
  // HUB: EMERGENCY SERVICE SEO
  // ---------------------------------------------------------------
  {
    slug: "emergency-service-seo",
    icon: Zap,
    label: "Emergency Service SEO",
    group: "emergency",
    isHub: true,
    title: "Emergency Service SEO for Businesses Customers Need Right Now",
    metaTitle: "Emergency Service SEO",
    metaDescription:
      "SEO for emergency service businesses — towing, plumbing, HVAC, and electrical — built around near-me, mobile-first, immediate-need search behavior.",
    heroIntro:
      "Towing, emergency plumbing, no-heat HVAC calls, power outages — these businesses share one defining trait: the customer needs help right now, is searching from a phone, and will call whoever shows up first in the moment. We build the local SEO and Google visibility system built specifically around that behavior.",
    ctaHeading: "Get Your Free Emergency Service SEO Audit",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit", "google-ads"],
    relatedIndustrySlugs: ["towing-companies", "emergency-plumbing", "emergency-hvac", "emergency-electrical"],
    richContent: [
      { type: "heading", text: "What Makes an \"Emergency Service\" Business Different" },
      {
        type: "paragraph",
        text: "Towing, emergency plumbing, HVAC, and electrical services share a common search profile even though they're completely different trades: the customer has an active, urgent problem, they're searching from a phone (often in a stressful moment — a stalled car, a burst pipe, no heat in winter, no power), and they will call whichever business is visible, credible, and reachable first. Comparison-shopping is minimal; speed and visibility in that exact moment decide the outcome.",
      },
      { type: "heading", text: "Near-Me and Mobile-First Search Behavior" },
      {
        type: "paragraph",
        text: "\"Near me\" and \"[service] open now\" searches dominate this category. Google's Local Pack and Maps results are built specifically to serve this kind of query, which is why Google Business Profile completeness, category accuracy, and service-area configuration matter more here than broad organic content strategy.",
      },
      { type: "heading", text: "Phone-Call Conversion Above All" },
      {
        type: "paragraph",
        text: "For every business in this category, the phone call is the conversion — not a form fill, not a newsletter signup. That means a click-to-call number visible without scrolling, on every page, and a site that loads fast enough on a weak mobile connection to actually deliver that number before the visitor gives up and calls a competitor instead.",
      },
      { type: "heading", text: "24/7 Availability and Google Business Profile" },
      {
        type: "paragraph",
        text: "If a business genuinely offers 24/7 or after-hours emergency service, that needs to be stated accurately in Google Business Profile hours and prominently on the website — this is one of the most directly search-relevant facts for this entire category, and getting it wrong (or leaving it ambiguous) costs real calls.",
      },
      { type: "heading", text: "Local Competition and Google Maps" },
      {
        type: "paragraph",
        text: "Emergency service categories are often genuinely competitive in the map pack — multiple towing companies, multiple emergency plumbers, all competing for the same handful of visible positions. Winning that competition depends on the same core levers across every trade in this group: profile completeness, review velocity, citation consistency, and technical site health — covered in depth in [Local SEO and Google Business Profile Optimization](/services/local-seo-google-business-profile).",
      },
      { type: "heading", text: "Where to Start" },
      {
        type: "paragraph",
        text: "Each emergency trade has its own specific search patterns worth understanding on their own terms — [towing and roadside assistance](/industries/towing-companies), [emergency plumbing](/industries/emergency-plumbing), [emergency HVAC](/industries/emergency-hvac), and [emergency electrical](/industries/emergency-electrical) each have a dedicated page rather than being folded into generic copy.",
      },
    ],
    faqs: [
      {
        question: "What emergency service businesses does Elvic Rank work with?",
        answer:
          "Currently towing and roadside assistance, emergency plumbing, emergency HVAC, and emergency electrical — trades that share the same urgent, local, mobile-first search behavior. See each dedicated page for specifics.",
      },
      {
        question: "How is emergency service SEO different from restoration SEO?",
        answer:
          "Both share urgent, local, high-intent search behavior — the difference is mainly in the trigger. Restoration follows property damage (water, fire, storm, mold); emergency services cover breakdowns and failures (a car, a pipe, a furnace, an electrical system). The underlying SEO strategy is closely related, which is why both fall under Elvic Rank's specialization.",
      },
    ],
  },

  {
    slug: "towing-companies",
    icon: Truck,
    label: "Towing",
    group: "emergency",
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
    relatedIndustrySlugs: ["emergency-service-seo"],
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
        text: "We apply the same core local SEO system we use for any [emergency service business](/industries/emergency-service-seo) — [Local SEO and Google Business Profile optimization](/services/local-seo-google-business-profile), [technical SEO](/services/technical-seo-audit), and conversion-ready [website design](/services/website-design) — specifically tuned to how towing customers search and decide.",
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
        text: "Not every towing company offers the same services, and we don't assume otherwise. Depending on what your company actually provides, this can include dedicated pages for services such as emergency towing, roadside assistance, flatbed towing, long-distance towing, accident recovery, motorcycle towing, or heavy-duty towing — each built around how customers actually search for that specific service, not a single generic \"towing\" page trying to rank for everything at once.",
      },

      { type: "heading", text: "Turning Visitors Into Calls" },
      {
        type: "paragraph",
        text: "A towing website's only real job is getting the phone to ring. That means a click-to-call phone number visible without scrolling, on every page, on a site that loads fast on mobile — a stranded customer with a weak signal won't wait for a bloated page to render. We audit and fix exactly this kind of friction as part of a [technical SEO audit](/services/technical-seo-audit) and, where the site itself is the bottleneck, [website design](/services/website-design) work built around getting the call, not winning a design award.",
      },

      { type: "heading", text: "Understanding the Competitive Landscape" },
      {
        type: "paragraph",
        text: "Towing is often a genuinely competitive local category — multiple operators frequently compete for the same map pack positions in a metro area. Before recommending anything, we look at who's actually outranking you locally and why: stronger review volume, better citation consistency, more complete profiles, or content gaps you can realistically close.",
      },

      { type: "heading", text: "Reviews and Local Trust" },
      {
        type: "paragraph",
        text: "Review volume and recency are consistently among the strongest local ranking signals, and for a towing company they double as a trust signal at the exact moment someone is deciding whether to call a stranger to tow their car. We help build a simple, repeatable system for asking real customers for reviews right after the job, and for responding to reviews professionally — we never fabricate, buy, or manipulate reviews, for any client, under any circumstance.",
      },

      { type: "heading", text: "Our Process for Towing Companies" },
      {
        type: "orderedList",
        items: [
          "Audit — a full review of your Google Business Profile, website, citations, and local competitive position.",
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
          "No — towing is one of several emergency service categories Elvic Rank specializes in, alongside emergency plumbing, HVAC, electrical, and the restoration trades. See our Emergency Service SEO page for the full picture.",
      },
      {
        question: "How is towing SEO different from general local SEO?",
        answer:
          "The fundamentals are the same — Google Business Profile, local relevance, citations, reviews, technical health. What differs is priority and emphasis: towing searches are overwhelmingly high-intent, mobile, and immediate, so service-area accuracy, mobile speed, and click-to-call visibility matter more than they would for a business with a longer buying cycle.",
      },
      {
        question: "What does a towing SEO engagement actually include?",
        answer:
          "It depends on what your audit finds and what you actually need — typically Google Business Profile optimization, technical and on-page SEO, service pages matched to the services you actually offer, and ongoing local SEO management.",
      },
      {
        question: "Can you help if our Google Business Profile is already set up but underperforming?",
        answer:
          "Yes — this is one of the most common starting points. A profile that was set up once and never maintained is very different from one actively managed, and the gap between the two is often the fastest lever available.",
      },
      {
        question: "Do you guarantee more calls or a specific ranking?",
        answer:
          "No — no honest agency can guarantee a specific ranking or call volume. What we commit to is doing the work that actually influences the factors Google weighs, and reporting honestly on what's happening.",
      },
    ],
  },
  {
    slug: "emergency-plumbing",
    icon: Wrench,
    label: "Emergency Plumbing",
    group: "emergency",
    title: "Emergency Plumbing SEO",
    metaTitle: "Emergency Plumbing SEO",
    metaDescription:
      "SEO for emergency plumbing companies — Google Business Profile, local visibility, and mobile-first conversion built around burst-pipe, no-water, and after-hours searches.",
    heroIntro:
      "A burst pipe or an overflowing toilet doesn't wait for business hours — \"emergency plumber near me\" and \"24 hour plumber\" are searches from someone with active water damage happening right now. We build the local SEO and Google Business Profile foundation that puts emergency plumbers in front of that search.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit", "google-ads"],
    relatedIndustrySlugs: ["emergency-service-seo", "water-damage-restoration"],
    richContent: [
      { type: "heading", text: "How Emergency Plumbing Customers Search" },
      {
        type: "paragraph",
        text: "\"Emergency plumber near me,\" \"24 hour plumber,\" and \"burst pipe repair\" are searches from someone with an active, worsening problem — every minute matters, and the searcher is calling the first credible, available result, not comparing quotes. This overlaps meaningfully with water damage search behavior (see [water damage restoration](/industries/water-damage-restoration)), since an unaddressed plumbing emergency often becomes a water damage job.",
      },
      { type: "heading", text: "Google Business Profile and After-Hours Visibility" },
      {
        type: "paragraph",
        text: "If 24/7 or after-hours emergency service is genuinely offered, this needs to be stated accurately in Google Business Profile hours and prominent on the site — it's one of the single most search-relevant facts for this category, and ambiguity here costs real calls at exactly the moment they'd otherwise convert.",
      },
      { type: "heading", text: "Local Competition in Emergency Plumbing" },
      {
        type: "paragraph",
        text: "Emergency plumbing is often a genuinely crowded local category. Winning map pack visibility depends on the same core levers as any local emergency trade — profile completeness, review velocity, citation consistency — covered in depth in [Local SEO and Google Business Profile Optimization](/services/local-seo-google-business-profile).",
      },
      { type: "heading", text: "Conversion: The Click-to-Call Number Is Everything" },
      {
        type: "paragraph",
        text: "For this category more than almost any other, a visible, working click-to-call number on a fast-loading mobile page is the entire conversion path — someone with water actively spraying will call the first number they can reach, not fill out a contact form.",
      },
    ],
    faqs: [
      {
        question: "Do you cover general plumbing, or just emergency plumbing?",
        answer:
          "This page is built around the emergency-search side of plumbing specifically — near-me, urgent, after-hours searches — since that's the search behavior most aligned with Elvic Rank's specialization.",
      },
      {
        question: "Does emergency plumbing overlap with water damage restoration SEO?",
        answer:
          "Yes, meaningfully — an unaddressed plumbing emergency often becomes a water damage restoration job, and the search behavior and local SEO fundamentals are closely related. See our Water Damage Restoration page for that side of the picture.",
      },
    ],
  },
  {
    slug: "emergency-hvac",
    icon: Thermometer,
    label: "Emergency HVAC",
    group: "emergency",
    title: "Emergency HVAC SEO",
    metaTitle: "Emergency HVAC SEO",
    metaDescription:
      "SEO for emergency HVAC companies — Google Business Profile and local visibility built around no-heat, no-AC, and after-hours emergency searches.",
    heroIntro:
      "No heat in the middle of winter or no AC during a heat wave both create the same urgent search: \"emergency HVAC repair near me,\" \"furnace repair tonight.\" We build the local SEO and Google Business Profile foundation that puts emergency HVAC companies in front of that search.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit", "google-ads"],
    relatedIndustrySlugs: ["emergency-service-seo"],
    richContent: [
      { type: "heading", text: "How Emergency HVAC Customers Search" },
      {
        type: "paragraph",
        text: "HVAC emergency searches are strongly seasonal and weather-triggered — a cold snap drives \"no heat emergency repair,\" a heat wave drives \"AC repair same day.\" Search volume genuinely spikes around these events, which means visibility has to already exist before the spike, not be built reactively during it.",
      },
      { type: "heading", text: "Google Business Profile for HVAC Emergencies" },
      {
        type: "paragraph",
        text: "Accurate hours reflecting genuine after-hours/emergency availability, a services list that clearly separates emergency repair from routine maintenance/installation, and consistent review generation all directly support visibility for the specific emergency searches this category depends on.",
      },
      { type: "heading", text: "Building Visibility Ahead of Seasonal Spikes" },
      {
        type: "paragraph",
        text: "Because demand is genuinely seasonal, the same principle covered in [storm damage restoration](/industries/storm-damage-restoration) applies here: local SEO authority — citations, reviews, technical health — has to be built and maintained continuously, so the business is already visible when the next cold snap or heat wave hits, not scrambling to catch up after it starts.",
      },
      { type: "heading", text: "Conversion for a Same-Day-Decision Category" },
      {
        type: "paragraph",
        text: "A visible click-to-call number and a fast mobile site matter directly — someone without heat or AC is deciding same-day, often within the hour, and won't wait for a slow-loading page.",
      },
    ],
    faqs: [
      {
        question: "Is this only for emergency repair, or does it help with installations too?",
        answer:
          "This page focuses on the emergency-search side specifically, since that's the urgent, local, high-intent behavior Elvic Rank specializes in — but the same Google Business Profile and local SEO foundation supports visibility for maintenance and installation searches too.",
      },
      {
        question: "How do you handle the seasonal spikes in demand?",
        answer:
          "By treating local SEO as continuous infrastructure rather than a reactive tactic — the visibility that captures a demand spike has to already be built before the spike starts.",
      },
    ],
  },
  {
    slug: "emergency-electrical",
    icon: Zap,
    label: "Emergency Electrical",
    group: "emergency",
    title: "Emergency Electrical SEO",
    metaTitle: "Emergency Electrical SEO",
    metaDescription:
      "SEO for emergency electrical companies — Google Business Profile and local visibility built around power outage, electrical fault, and after-hours emergency searches.",
    heroIntro:
      "A power outage limited to one home, a burning smell from an outlet, sparking wiring — these are searches driven by genuine safety concern, not routine maintenance planning. We build the local SEO and Google Business Profile foundation that puts emergency electricians in front of that search.",
    relatedServiceSlugs: ["local-seo-google-business-profile", "technical-seo-audit"],
    relatedIndustrySlugs: ["emergency-service-seo"],
    richContent: [
      { type: "heading", text: "How Emergency Electrical Customers Search" },
      {
        type: "paragraph",
        text: "\"Emergency electrician near me,\" \"power out in my house,\" and \"electrical fire risk\" searches carry a safety-concern dimension that's somewhat distinct even within the emergency service category — the searcher isn't just inconvenienced, they're often genuinely worried about safety. That urgency and concern should be met with clear, credible, fast-loading content, not alarmist marketing copy.",
      },
      { type: "heading", text: "Google Business Profile and Licensing" },
      {
        type: "paragraph",
        text: "Licensing and certification are especially important trust signals for electrical work specifically — stating real, verifiable credentials clearly on the Google Business Profile and website matters more here than in most other emergency categories, given the genuine safety stakes involved.",
      },
      { type: "heading", text: "Local SEO and After-Hours Visibility" },
      {
        type: "paragraph",
        text: "The same core mechanics apply as any [emergency service business](/industries/emergency-service-seo): accurate hours reflecting real after-hours availability, complete and accurate service listings, and a genuine review pipeline — covered in depth in [Local SEO and Google Business Profile Optimization](/services/local-seo-google-business-profile).",
      },
      { type: "heading", text: "Conversion for a Safety-Driven Category" },
      {
        type: "paragraph",
        text: "A clearly visible click-to-call number, fast mobile loading, and calm, credible messaging (not fear-driven urgency tactics) serve this category's actual customers best — someone concerned about electrical safety wants a competent, reachable professional, not a scare-tactic landing page.",
      },
    ],
    faqs: [
      {
        question: "Do you help communicate licensing and credentials?",
        answer:
          "We help make sure real, verifiable licensing and credentials are stated clearly and consistently across the Google Business Profile and website — we never invent or exaggerate credentials that don't genuinely exist.",
      },
      {
        question: "Is this different from general electrician SEO?",
        answer:
          "This page focuses specifically on the emergency, safety-driven side of electrical search behavior — near-me, urgent, after-hours — which is the specific intent Elvic Rank's local SEO approach is built around.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustriesByGroup(group: Industry["group"]) {
  return industries.filter((industry) => industry.group === group && !industry.isHub);
}

export function getHubIndustries() {
  return industries.filter((industry) => industry.isHub);
}
