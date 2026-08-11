import type { ContentBlock } from "@/lib/content-blocks";

export type { ContentBlock };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishDate: string; // ISO date
  readingTime: string;
  content: ContentBlock[];
  /**
   * Curated "More from the blog" slugs, in display order — replaces the old
   * positional blogPosts.filter(...).slice(0, 2) so related articles are
   * actually topically relevant instead of "whatever happens to sit next in
   * the array." Optional so a new article without an explicit editorial
   * relationship still falls back to a sensible default (see the blog post
   * page template) rather than rendering nothing.
   */
  relatedSlugs?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-google-business-profile-helps-local-businesses",
    title: "How Google Business Profile Helps Local Businesses",
    category: "Local SEO",
    metaTitle: "How Google Business Profile Helps Local Businesses",
    metaDescription:
      "A practical breakdown of how Google Business Profile drives calls, visits, and leads for local businesses — and how to actually optimize it.",
    excerpt:
      "Your Google Business Profile is often the first thing a potential customer sees — before your website, before a review, before anything else. Here's what it actually does, and how to make it work harder.",
    publishDate: "2026-07-14",
    readingTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "For most local service businesses, the first real interaction a potential customer has with you isn't your website — it's your Google Business Profile. It shows up before your homepage in a local search, it's what populates the map pack, and it's often the only thing someone glances at before deciding whether to call. If that profile is thin, inconsistent, or unmanaged, you're losing jobs to competitors whose profile simply looks more credible.",
      },
      {
        type: "heading",
        text: "What Google Business Profile Actually Is",
      },
      {
        type: "paragraph",
        text: "Google Business Profile (formerly Google My Business) is the free listing that controls how your business appears in Google Search and Google Maps — your name, address, service area, hours, photos, reviews, and posts. It's separate from your website, but it's tightly connected to your local rankings: Google uses signals from your profile (category accuracy, review volume and recency, photo activity, completeness) as part of how it decides who shows up in the local map pack for a given search.",
      },
      {
        type: "heading",
        text: "Why It Matters More Than Most Businesses Realize",
      },
      {
        type: "paragraph",
        text: "A well-optimized profile does several things at once, most of which a website alone can't do:",
      },
      {
        type: "list",
        items: [
          "Map pack visibility — the three local results shown above the standard organic listings for most local searches, often the highest-visibility real estate on the entire results page.",
          "Zero-click actions — a searcher can call you, get directions, or message you directly from the profile without ever visiting your website.",
          "Trust signals at a glance — review count, star rating, and response behavior tell a stranger whether you're worth calling before they read a single word of your site.",
          "Free advertising real estate — photos, posts, and Q&A let you show your work and answer common questions without paying for placement.",
        ],
      },
      {
        type: "heading",
        text: "What Actually Moves the Needle in Your Profile",
      },
      {
        type: "paragraph",
        text: "Not every field in your profile carries equal weight. In our experience, the following consistently matter most:",
      },
      {
        type: "list",
        items: [
          "Primary category accuracy — choosing the single most specific, accurate category available, not the broadest one.",
          "A complete, specific services list — vague listings rank for vague searches; specific ones rank for the searches that actually convert.",
          "Regular photo uploads — of real work, real vehicles, real team members, not stock imagery.",
          "Consistent posting — Google Posts aren't heavily weighted for ranking, but they keep your profile active and give searchers a reason to click through.",
          "Prompt, specific review responses — a templated \"Thanks for the review!\" reply signals less care than a response that references what the customer actually said.",
        ],
      },
      {
        type: "heading",
        text: "Reviews: The Part Everyone Underestimates",
      },
      {
        type: "paragraph",
        text: "Review volume and recency are two of the strongest local ranking signals available, and they're also the signal most businesses manage the worst. A business with 12 reviews from three years ago will often lose to a competitor with 40 reviews, even if the older business has a marginally higher average rating. The fix isn't complicated — it's a simple, repeatable system for asking happy customers at the right moment, immediately after the job is done, not weeks later when the request feels random.",
      },
      {
        type: "heading",
        text: "Common Mistakes We See",
      },
      {
        type: "list",
        items: [
          "Listing a service area business with an address that doesn't match Google's verification requirements, risking suspension.",
          "Stuffing the business name field with keywords — against Google's guidelines and a common cause of profile suspensions.",
          "Letting the profile sit untouched for months at a time, then wondering why visibility has quietly declined.",
          "Ignoring negative reviews instead of responding professionally — prospective customers read how you handle criticism as closely as the praise.",
        ],
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Google Business Profile isn't a set-it-and-forget-it listing — it's an active asset that rewards ongoing attention with real visibility in the exact moment someone is deciding who to call. If yours hasn't been touched in months, that's very likely the fastest lever available to pull before anything else on this list. That's exactly what our [Local SEO & Google Business Profile](/services/local-seo-google-business-profile) service is built to fix.",
      },
      {
        type: "paragraph",
        text: "Your profile is one input into a bigger picture — for a fuller breakdown of every factor Google actually weighs, see [how to rank locally on Google](/blog/how-to-rank-locally-on-google).",
      },
    ],
    relatedSlugs: ["how-local-seo-generates-leads", "how-to-rank-locally-on-google"],
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist: What Actually Matters in 2026",
    category: "Technical SEO",
    metaTitle: "Technical SEO Checklist (2026)",
    metaDescription:
      "A practical technical SEO checklist covering Core Web Vitals, indexation, mobile usability, and structured data — what actually moves rankings.",
    excerpt:
      "Technical SEO has a reputation for being overwhelming. Most of it isn't — a handful of issues account for the majority of ranking problems we find in audits. Here's the checklist we actually work from.",
    publishDate: "2026-07-21",
    readingTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Technical SEO gets treated like a mystery box — hundreds of possible issues, most of which don't matter much for a typical local service business site. In practice, a small number of technical issues account for the majority of ranking problems we find in audits. This is the checklist we actually work from, in the order we prioritize it.",
      },
      {
        type: "heading",
        text: "1. Crawlability and Indexation",
      },
      {
        type: "paragraph",
        text: "None of the rest of this matters if Google can't crawl and index your pages in the first place. Check for accidental noindex tags left over from staging, a robots.txt file blocking sections it shouldn't, orphaned pages with no internal links pointing to them, and a clean XML sitemap that's actually submitted to Search Console.",
      },
      {
        type: "heading",
        text: "2. Core Web Vitals",
      },
      {
        type: "paragraph",
        text: "Google measures three specific metrics as part of page experience: Largest Contentful Paint (how fast the main content loads), Interaction to Next Paint (how responsive the page feels), and Cumulative Layout Shift (how much the page jumps around while loading). The most common culprits behind poor scores:",
      },
      {
        type: "list",
        items: [
          "Unoptimized, oversized images — often the single biggest fix available.",
          "Render-blocking JavaScript and CSS loaded before anything visible on the page.",
          "No explicit width/height on images, causing layout shift as they load.",
          "Slow server response times from cheap or oversold hosting.",
        ],
      },
      {
        type: "heading",
        text: "3. Mobile Usability",
      },
      {
        type: "paragraph",
        text: "Google indexes the mobile version of your site first, not the desktop version. Text that's too small to read without zooming, buttons placed too close together, and content that requires horizontal scrolling are all usability failures that directly affect how Google evaluates the page — separate from Core Web Vitals entirely.",
      },
      {
        type: "heading",
        text: "4. Site Architecture and Internal Linking",
      },
      {
        type: "paragraph",
        text: "A flat, logical structure — homepage to category to specific service page, each linked clearly — helps Google understand what your most important pages are and helps authority flow to them. Deeply buried pages that require five clicks to reach rarely rank well, no matter how good the content is.",
      },
      {
        type: "heading",
        text: "5. Structured Data (Schema Markup)",
      },
      {
        type: "paragraph",
        text: "Schema markup doesn't directly boost rankings, but it helps search engines understand exactly what a page represents — a service, a business, an FAQ, a review — and it can unlock rich results in search (star ratings, FAQ dropdowns, breadcrumb trails) that increase click-through rate even at the same ranking position.",
      },
      {
        type: "heading",
        text: "6. Duplicate Content and Canonicalization",
      },
      {
        type: "paragraph",
        text: "URL parameters, www vs. non-www inconsistency, and http vs. https duplication can all cause the same page to be indexed multiple times under different URLs, splitting ranking signals that should be consolidated. A consistent canonical tag on every page resolves this.",
      },
      {
        type: "heading",
        text: "7. HTTPS and Security",
      },
      {
        type: "paragraph",
        text: "This one is table stakes at this point — an unsecured site (http instead of https) is flagged as \"Not Secure\" directly in the browser address bar, which damages trust before a visitor reads a word of content, and it's been a confirmed ranking factor for years.",
      },
      {
        type: "heading",
        text: "Where to Start",
      },
      {
        type: "paragraph",
        text: "If you only have time to check one thing this week, run your homepage and your top service page through a Core Web Vitals test. Slow, shifting pages are the single most common issue we find, and they're usually fixable without a full rebuild — a properly scoped [technical SEO audit](/services/technical-seo-audit) will tell you exactly what's costing you and in what order to fix it.",
      },
    ],
    relatedSlugs: ["website-speed-and-google-rankings"],
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads: Which One Should You Invest In First?",
    category: "Strategy",
    metaTitle: "SEO vs Google Ads: Which Should You Invest In First?",
    metaDescription:
      "A clear, honest comparison of SEO and Google Ads for local service businesses — cost, timeline, and how to decide which to prioritize first.",
    excerpt:
      "This isn't really an either-or question — but if you have to choose where to put your first dollar, the answer depends on how fast you need results and how long you plan to be in business.",
    publishDate: "2026-07-28",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "This question comes up in almost every strategy call: should the budget go to SEO or Google Ads first? The honest answer is that they solve different problems on different timelines, and most established businesses eventually run both. But if you have to pick one to start with, here's how to actually think about it.",
      },
      {
        type: "heading",
        text: "How Each One Actually Works",
      },
      {
        type: "paragraph",
        text: "[Google Ads](/services/google-ads) is rented visibility — you pay per click, you show up at the top of the results (marked \"Sponsored\"), and the moment you stop paying, you disappear. SEO is earned visibility — you invest in your site's technical health, content, and authority so Google ranks you organically, and once you've built that position, it keeps working with far lower ongoing cost.",
      },
      {
        type: "heading",
        text: "Speed to Results",
      },
      {
        type: "paragraph",
        text: "This is where Google Ads clearly wins. A well-set-up campaign can start generating calls within days. SEO, by contrast, typically takes 60–90 days to show meaningful movement, and longer in competitive markets — there's no honest way to speed that up, and anyone promising instant rankings is selling something else.",
      },
      {
        type: "heading",
        text: "Cost Over Time",
      },
      {
        type: "paragraph",
        text: "This is where SEO wins, usually decisively. Every click on a Google Ad costs money, indefinitely. Every visitor from an organic ranking is free once you've done the work to earn the position. Businesses running Ads for years without SEO are often paying, month after month, for visibility they could own outright.",
      },
      {
        type: "heading",
        text: "Trust and Click-Through Behavior",
      },
      {
        type: "paragraph",
        text: "Organic results still generate meaningfully more clicks than paid ads for most search categories — many searchers actively skip the \"Sponsored\" listings. That doesn't make Ads worthless (see below), but it's a real factor in why SEO tends to produce a lower cost per lead once it's established.",
      },
      {
        type: "heading",
        text: "So Which Should You Start With?",
      },
      {
        type: "list",
        items: [
          "If you need revenue now — a new location, a slow season, cash flow pressure — start with Google Ads and layer in SEO alongside it.",
          "If you're playing a longer game and can absorb a few months of ramp-up — start SEO immediately, since the sooner you start, the sooner it compounds.",
          "If you can afford both — run them together from day one. Ads fill the gap while SEO builds, and the [keyword research](/services/keyword-research) for one directly informs the other.",
        ],
      },
      {
        type: "heading",
        text: "The Real Answer",
      },
      {
        type: "paragraph",
        text: "Most local service businesses that grow steadily over multiple years end up running both, in different proportions at different stages. The mistake to avoid isn't picking the \"wrong\" one first — it's treating them as competing budgets instead of a coordinated strategy built around the same buyer intent. If you're not sure where you currently stand, a [free SEO audit](/services/seo-audit) is the fastest way to find out.",
      },
    ],
    relatedSlugs: ["how-local-seo-generates-leads"],
  },
  {
    slug: "how-local-seo-generates-leads",
    title: "How Local SEO Generates Leads (Not Just Traffic)",
    category: "Local SEO",
    metaTitle: "How Local SEO Generates Leads, Not Just Traffic",
    metaDescription:
      "Local SEO isn't about vanity traffic — it's about intercepting buyers at the exact moment they're ready to call. Here's how the lead generation actually works.",
    excerpt:
      "More website visitors mean nothing if they don't convert. Here's what actually connects local SEO work to a phone that rings.",
    publishDate: "2026-08-04",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "It's easy to conflate \"more traffic\" with \"more leads,\" but they're not the same thing, and chasing the wrong one is a common way local SEO budgets get wasted. The traffic that actually turns into a booked job comes from a specific kind of visibility, at a specific moment in someone's decision — not just any visitor landing on your homepage.",
      },
      {
        type: "heading",
        text: "The Moment That Matters: Buyer Intent",
      },
      {
        type: "paragraph",
        text: "Someone searching \"how does a water heater work\" is not the same buyer as someone searching \"water heater repair near me.\" The second search has clear commercial intent — they have a problem, right now, and they're looking for someone to fix it. Local SEO that generates leads is built around capturing that second kind of search, not just any search related to your industry.",
      },
      {
        type: "heading",
        text: "The Three Places Leads Actually Come From",
      },
      {
        type: "list",
        items: [
          "The map pack — the three local results shown for \"near me\" and service + location searches, often generating a direct call or click-to-directions without ever visiting a website.",
          "High-intent service pages — pages built around a specific service and specific area (\"emergency plumber in [city]\"), not generic pages trying to rank for everything at once.",
          "Google Business Profile actions — calls, direction requests, and website clicks generated directly from the profile itself.",
        ],
      },
      {
        type: "heading",
        text: "Why Generic Traffic Doesn't Convert the Same Way",
      },
      {
        type: "paragraph",
        text: "A blog post that ranks for a broad, informational topic can drive real traffic numbers while generating almost no leads, because the person reading it isn't ready to buy yet — they're researching. That content still has value (it builds topical authority and can nurture someone toward a decision), but it shouldn't be confused with lead-generation content, and a strategy built entirely around traffic volume will often show impressive numbers with a disappointing call count.",
      },
      {
        type: "heading",
        text: "What Actually Moves the Needle for Lead Volume",
      },
      {
        type: "list",
        items: [
          "Service + location pages built around specific, high-intent keyword combinations — the product of real [keyword research](/services/keyword-research), not guesswork.",
          "A fully optimized, actively managed Google Business Profile.",
          "Consistent, recent reviews that build enough trust for someone to actually pick up the phone.",
          "Clear, unmissable calls to action on every page — a visitor who has to hunt for your phone number is a visitor you're about to lose.",
          "Fast page load times, since a slow page loses a meaningful share of visitors before it even finishes loading.",
        ],
      },
      {
        type: "heading",
        text: "Measuring It Properly",
      },
      {
        type: "paragraph",
        text: "If your [SEO reporting](/services/seo-reporting-analytics) stops at rankings and traffic, you're missing the metric that actually matters. Call tracking and form tracking, tied back to specific pages and keywords, are what turn \"we moved up three positions\" into \"that page generated eleven calls this month.\" That's the version of reporting worth paying attention to.",
      },
      {
        type: "heading",
        text: "The Takeaway",
      },
      {
        type: "paragraph",
        text: "[Local SEO](/services/local-seo-google-business-profile) done well isn't a traffic strategy — it's a lead interception strategy, built around showing up in the specific moment someone nearby has a problem and is ready to pay to solve it. Everything else is a supporting metric.",
      },
      {
        type: "paragraph",
        text: "For a deeper look at exactly which ranking factors drive that visibility in the first place, see [how to rank locally on Google](/blog/how-to-rank-locally-on-google).",
      },
    ],
    relatedSlugs: ["how-google-business-profile-helps-local-businesses", "how-to-rank-locally-on-google"],
  },
  {
    slug: "website-speed-and-google-rankings",
    title: "Website Speed and Google Rankings: What the Data Actually Shows",
    category: "Technical SEO",
    metaTitle: "Website Speed and Google Rankings",
    metaDescription:
      "How page speed affects Google rankings and conversions for local service businesses, and the specific fixes that make the biggest difference.",
    excerpt:
      "Speed isn't just a technical nicety — it's a ranking factor and a conversion factor at the same time. Here's what actually determines how fast your site loads, and what to fix first.",
    publishDate: "2026-08-04",
    readingTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Page speed sits at an unusual intersection: it's both a confirmed Google ranking factor and a direct driver of whether a visitor sticks around long enough to become a lead. A slow site doesn't just rank worse — it loses people who never see your content in the first place, no matter how it ranks.",
      },
      {
        type: "heading",
        text: "How Google Actually Measures Speed",
      },
      {
        type: "paragraph",
        text: "Google's Core Web Vitals break page experience into three specific, measurable metrics: Largest Contentful Paint (how quickly the main content becomes visible), Interaction to Next Paint (how quickly the page responds once someone tries to interact with it), and Cumulative Layout Shift (how much the layout jumps around while everything finishes loading). These aren't vague notions of \"fast\" — they're specific numbers Google measures from real user data.",
      },
      {
        type: "heading",
        text: "Why Visitors Care Even More Than Google Does",
      },
      {
        type: "paragraph",
        text: "A meaningful share of visitors abandon a page that takes more than a few seconds to become usable — and that abandonment happens before they've seen your services, your reviews, or your phone number. For a local service business, a slow site isn't a minor inconvenience; it's a direct leak in the top of the funnel, upstream of everything else your SEO and marketing budget is trying to accomplish.",
      },
      {
        type: "heading",
        text: "The Most Common Causes of a Slow Site",
      },
      {
        type: "list",
        items: [
          "Oversized, uncompressed images — frequently the single largest contributor to slow load times, and often the easiest to fix.",
          "Too many third-party scripts — chat widgets, tracking pixels, and embedded fonts that each add their own load time.",
          "No caching or a poor hosting setup — every visitor forces the server to rebuild the page from scratch.",
          "Render-blocking CSS and JavaScript — code that has to fully load before anything on the page becomes visible.",
          "Bloated page builders and themes — some visual website builders generate far more code than a page actually needs.",
        ],
      },
      {
        type: "heading",
        text: "What Actually Fixes It",
      },
      {
        type: "list",
        items: [
          "Compressing and correctly sizing every image, and serving modern formats where supported.",
          "Lazy-loading images and content below the fold so they load only when a visitor scrolls to them.",
          "Removing or deferring third-party scripts that aren't essential to the initial page load.",
          "Using a caching layer or a hosting provider built for speed, not just the cheapest available plan.",
          "Reserving explicit space for images and embeds so the layout doesn't shift as they load.",
        ],
      },
      {
        type: "heading",
        text: "How to Check Where You Stand",
      },
      {
        type: "paragraph",
        text: "Google's own PageSpeed Insights tool will score your site and point to specific opportunities, using the same Core Web Vitals data Google uses for ranking. It's free, it's specific to your actual pages, and it's the right starting point before assuming you need a full rebuild — many speed problems are fixable without touching the design at all, which is exactly the kind of work our [Website Speed Optimization](/services/website-speed-optimization) service covers in depth.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Speed optimization is one of the rare pieces of SEO work that pays off on both sides at once — better rankings and a visitor who's still there long enough to actually call. If it's been a while since anyone checked, it's worth a look before investing further budget in traffic that a slow page will only partly convert. It's also one piece of a broader [technical SEO audit](/services/technical-seo-audit), if you want the full picture.",
      },
    ],
    relatedSlugs: ["technical-seo-checklist"],
  },
  {
    slug: "local-citations-explained",
    title: "Local Citations Explained: What They Are and Why They Matter for Local SEO",
    category: "Local SEO",
    metaTitle: "Local Citations Explained: NAP, Directories & Local SEO",
    metaDescription:
      "Learn what local citations are, why NAP consistency matters, and how accurate business listings can support a stronger local SEO strategy.",
    excerpt:
      "Not every mention of your business online is a useful signal — here's what a local citation actually is, why NAP consistency matters more than volume, and how to audit your own listings.",
    publishDate: "2026-08-11",
    readingTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "If you've had an SEO conversation about local visibility, you've probably heard the word \"citation\" thrown around without much explanation. It's a simple concept once it's actually defined — but the difference between a citation that helps and one that does nothing (or quietly causes confusion) comes down to details most business owners have never been told to look for. Here's what a local citation actually is, why consistency matters more than volume, and how to check where your own listings currently stand.",
      },

      { type: "heading", text: "What Is a Local Citation?" },
      {
        type: "paragraph",
        text: "A local citation is any online reference to your business's name, address, and phone number — usually shortened to NAP — whether or not it includes a link back to your website. The most common examples are business directories like Google Business Profile, Yelp, or Bing Places, along with industry-specific directories, local chamber of commerce listings, and other legitimate sites that publish your business information alongside your name.",
      },
      {
        type: "paragraph",
        text: "Not every mention of your business online counts as a useful citation, and not every citation is worth chasing. A citation is only meaningful when it comes from a legitimate, relevant source and accurately represents your business — a random forum post that happens to mention your business name isn't the same thing as a listing on an established local directory, and treating every possible mention as equally valuable is a common and unhelpful way to think about this.",
      },

      { type: "heading", text: "Why Local Citations Matter for Local SEO" },
      {
        type: "paragraph",
        text: "Search engines use citations as one signal, among many, to build confidence in a business's identity and location. When your name, address, and phone number appear consistently across multiple legitimate sources, it reinforces that the business is real, operating at the stated location, and reachable — the kind of confidence signal that can support local search visibility.",
      },
      {
        type: "paragraph",
        text: "It's worth being precise about what this does and doesn't mean. Citations are not a guaranteed ranking factor on their own, and accumulating more of them doesn't automatically mean higher rankings. They're one component of a broader local SEO system that also includes your Google Business Profile, on-page content, reviews, and overall relevance to a search — citations can strengthen that system, but they don't replace it.",
      },

      {
        type: "heading",
        text: "NAP Consistency: Why Your Business Information Should Match",
      },
      {
        type: "paragraph",
        text: "NAP consistency means your business Name, Address, and Phone number match across every place they appear online — your website, your Google Business Profile, and every directory listing. When this information is inconsistent, it can create genuine confusion for both searchers and the platforms trying to confirm which listing is accurate.",
      },
      {
        type: "list",
        items: [
          "A different phone number on one directory than the one listed on your website or Google Business Profile.",
          "A business name listed inconsistently — \"Smith Plumbing\" in one place and \"Smith Plumbing LLC\" or \"Smith Plumbing Co.\" in another.",
          "An outdated address left live on an old directory after a business has moved.",
          "Old business information carried over from a previous owner or location that was never updated.",
        ],
      },
      {
        type: "paragraph",
        text: "Not every inconsistency carries the same weight. A minor formatting difference — \"St.\" versus \"Street,\" or a missing suite number — is unlikely to cause real confusion. A genuinely different phone number, a wrong address, or an outdated business name is the kind of discrepancy worth prioritizing and fixing first.",
      },

      { type: "heading", text: "Structured vs Unstructured Local Citations" },
      { type: "subheading", text: "Structured Citations" },
      {
        type: "paragraph",
        text: "Structured citations are listings on dedicated business directory platforms, where your NAP information sits in defined fields — think business directories, industry-specific directories, and local or regional listing platforms. These are usually the easiest citations to find, claim, and correct, since the platform itself is built around business listings.",
      },
      { type: "subheading", text: "Unstructured Citations" },
      {
        type: "paragraph",
        text: "Unstructured citations are mentions of your business that appear in regular written content rather than a directory field — a local news article, a blog post, a community organization's website, or an industry publication that references your business by name, address, or phone number in passing. These are harder to control directly, and businesses don't need to actively pursue every possible mention — the goal is accuracy where these mentions already exist, not manufacturing new ones.",
      },

      { type: "heading", text: "Where Local Citations Matter Most" },
      {
        type: "paragraph",
        text: "Not all citation sources carry equal weight. The value of a citation depends on the relevance, quality, legitimacy, and accuracy of the source — a listing on a well-established, actively maintained directory relevant to your industry or area matters more than a listing on an obscure, rarely-visited site.",
      },
      {
        type: "list",
        items: [
          "Major business directories with real user traffic and an established reputation.",
          "Directories specific to your industry, where a searcher is more likely to be looking specifically for a business like yours.",
          "Local or community directories tied to your specific city or region.",
          "Any platform your actual customers are realistically searching or browsing.",
        ],
      },
      {
        type: "paragraph",
        text: "The practical takeaway is to prioritize a smaller number of high-quality, relevant listings over trying to create hundreds of low-quality ones. Quantity for its own sake isn't the goal, and low-quality directories can add clutter without adding real value.",
      },

      { type: "heading", text: "How to Audit Your Existing Local Citations" },
      {
        type: "paragraph",
        text: "If you've never reviewed your citations before, start with a straightforward audit rather than trying to fix everything at once:",
      },
      {
        type: "orderedList",
        items: [
          "Create a list of every existing listing you can find — search your business name, phone number, and address to surface directories you may have forgotten about.",
          "Check that the business name matches exactly across every listing, including suffixes like LLC or Inc.",
          "Check that the address is current and correctly formatted, especially if you've ever moved or changed service areas.",
          "Check that the phone number listed matches your actual current business line.",
          "Check that the website URL listed is correct and points to your live site, not an old domain.",
          "Identify outdated, duplicate, or abandoned listings that need to be corrected or removed.",
          "Prioritize the directories that matter most for your industry and area rather than trying to fix everything at once.",
          "Set a reminder to check your most important listings periodically, since business information can drift out of sync after any change.",
        ],
      },

      { type: "heading", text: "Common Local Citation Mistakes to Avoid" },
      {
        type: "list",
        items: [
          "Creating duplicate listings on the same directory, which can split or confuse the signals a single accurate listing would send.",
          "Leaving an outdated address live after moving locations.",
          "Letting business information drift out of sync across different directories over time.",
          "Listing an inaccurate or disconnected phone number.",
          "Building listings on irrelevant or low-quality websites just to increase citation count.",
          "Focusing on the number of citations instead of the accuracy and relevance of the ones that matter.",
          "Forgetting to update listings after a legitimate business change — a new name, address, or phone number.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these mistakes are catastrophic on their own, and fixing them is usually a matter of time and attention rather than urgency — but left unaddressed, they add up to a less trustworthy, harder-to-find business presence than the alternative.",
      },

      {
        type: "heading",
        text: "How Local Citations Fit Into a Local SEO Strategy",
      },
      {
        type: "paragraph",
        text: "Citations are one part of a larger system, not a strategy on their own. They work alongside your Google Business Profile, the content and structure of your website, your reviews and reputation, how relevant your business is to a given search, and the technical health of your site — all of which contribute to local search visibility together rather than independently.",
      },
      {
        type: "paragraph",
        text: "If you're not sure where your own citations and broader local presence currently stand, that's exactly the kind of gap our [Local SEO and Google Business Profile services](/services/local-seo-google-business-profile) are built to find and fix. For more on how your Google Business Profile connects to all of this, see [how Google Business Profile helps local businesses](/blog/how-google-business-profile-helps-local-businesses).",
      },
      {
        type: "paragraph",
        text: "For the fuller picture of how citations fit alongside every other local ranking factor, see [how to rank locally on Google](/blog/how-to-rank-locally-on-google).",
      },

      { type: "heading", text: "Local Citation FAQ" },
      { type: "subheading", text: "What is an example of a local citation?" },
      {
        type: "paragraph",
        text: "A listing for your business on a site like Google Business Profile, Yelp, or an industry-specific directory that includes your business name, address, and phone number is a typical example — with or without a link back to your website.",
      },
      { type: "subheading", text: "Are local citations still important for SEO?" },
      {
        type: "paragraph",
        text: "Yes, though their role has shifted over time — they're less about raw quantity than they once were, and more about accuracy and consistency as one input among several that can support local search visibility.",
      },
      { type: "subheading", text: "What is NAP consistency?" },
      {
        type: "paragraph",
        text: "NAP consistency means your business Name, Address, and Phone number match across your website, Google Business Profile, and every directory listing where your business appears.",
      },
      { type: "subheading", text: "How many local citations does a business need?" },
      {
        type: "paragraph",
        text: "There's no fixed number that applies to every business — it depends on your industry and location. A smaller number of accurate, relevant listings is generally more useful than a large number of low-quality ones.",
      },
      { type: "subheading", text: "Should I create citations on every directory?" },
      {
        type: "paragraph",
        text: "No — prioritizing directories that are relevant, reputable, and actually used by people in your area is a better use of time than listing your business everywhere possible.",
      },
    ],
    relatedSlugs: [
      "how-google-business-profile-helps-local-businesses",
      "how-local-seo-generates-leads",
    ],
  },
  {
    slug: "how-to-rank-locally-on-google",
    title: "How to Rank Locally on Google: A Practical Guide for Service Businesses",
    category: "Local SEO",
    metaTitle: "How to Rank Locally on Google: Practical Guide for Service Businesses",
    metaDescription:
      "Learn how to rank locally on Google with practical local SEO strategies for Google Business Profile, local visibility, citations, reviews, and location-based searches.",
    excerpt:
      "What actually moves the needle for local Google visibility — Google Business Profile, reviews, citations, and the ranking factors you can and can't control, explained without the guesswork.",
    publishDate: "2026-08-11",
    readingTime: "10 min read",
    content: [
      {
        type: "paragraph",
        text: "Every local service business wants to know the same thing: what actually makes Google show one business above another in local search results? The honest answer is that it's never one factor — it's a combination of signals Google evaluates together, some of which you can influence directly and some you can't influence at all. This guide walks through what actually drives local visibility, what's realistic to expect, and where to focus your time first.",
      },

      { type: "heading", text: "How Local Google Rankings Actually Work" },
      {
        type: "paragraph",
        text: "When someone searches for a local service, Google typically shows results in a few different formats depending on the search: standard organic results, a Local Pack — the block of three business listings shown with a map, usually above the organic results — and Google Maps itself, which searchers reach directly or by clicking through from the Local Pack to see more options.",
      },
      {
        type: "paragraph",
        text: "These aren't separate ranking systems competing for your attention — they're connected. The same underlying signals about your business (its Google Business Profile, its website, its reputation) feed into where you show up across all three surfaces, though the exact mix Google weighs can vary somewhat by search type and location.",
      },

      { type: "heading", text: "The Three Core Local Ranking Factors" },
      {
        type: "paragraph",
        text: "Google has publicly described three broad categories that influence local rankings. None of them is a secret, and none of them is a shortcut — but understanding what each one actually means in practice is more useful than treating them as an abstract checklist.",
      },
      {
        type: "list",
        items: [
          "Relevance — how well your business matches what someone is searching for. A plumber optimized around \"emergency plumber\" shows up for that search more reliably than a generic \"plumbing services\" listing.",
          "Distance — how close your business, or your stated service area, is to the searcher's location. This is largely outside your control, though accurately configuring your service area helps Google understand where you actually operate.",
          "Prominence — how well-known and trusted your business appears to be, based on signals like review volume, citation consistency, backlinks, and general web presence.",
        ],
      },
      {
        type: "paragraph",
        text: "No single factor guarantees a top position — Google weighs all three together, and their relative importance can shift based on the specific search.",
      },

      {
        type: "heading",
        text: "How Your Google Business Profile Affects Local Rankings",
      },
      {
        type: "paragraph",
        text: "Your Google Business Profile is one of the most direct levers you have, because it's the primary source Google uses to understand what your business does and where it operates. Several parts of it carry real weight:",
      },
      {
        type: "list",
        items: [
          "Accurate, complete business information — your name, address, phone number, and hours, kept current.",
          "Primary and secondary categories — the primary category especially should reflect the single most accurate description of your core service, not the broadest possible option.",
          "A specific, current services list rather than a vague, generic one.",
          "A clear business description that explains what you do without keyword stuffing.",
          "Service areas, if you serve a radius rather than operating from a single visible location.",
          "Regular, real photos of your work, team, and location.",
          "Review volume and recency, covered in more depth below.",
          "Overall profile completeness — an unfinished profile sends a weaker signal than a complete one.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is a one-time setup. Profiles that sit untouched for months tend to lose ground relative to competitors actively maintaining theirs — ongoing attention matters more than most business owners expect. This is the core of what our [Local SEO and Google Business Profile services](/services/local-seo-google-business-profile) are built to manage on an ongoing basis, not just configure once.",
      },

      {
        type: "heading",
        text: "How Reviews and Business Reputation Support Local Visibility",
      },
      {
        type: "paragraph",
        text: "Review signals are consistently among the strongest local ranking inputs available, though it's worth being specific about which parts actually matter: volume (how many reviews you have, generally relative to competitors), quality (your average rating), recency (how fresh your reviews are, not just how many you accumulated years ago), and relevance (whether reviews mention the services and location terms that match how people search).",
      },
      {
        type: "paragraph",
        text: "Responding to reviews, both positive and negative, is also part of this picture — a thoughtful response to a negative review often does more for trust than the negative review itself does damage.",
      },
      {
        type: "paragraph",
        text: "One thing worth being direct about: businesses should never manufacture, buy, or manipulate reviews. Beyond being against Google's policies and carrying real risk of profile suspension, fake reviews are usually easy for real customers to spot, and they undermine the trust reviews are supposed to build in the first place. More genuine reviews can support your visibility — but no specific number or rating guarantees a specific ranking position.",
      },

      { type: "heading", text: "Local Citations and NAP Consistency" },
      {
        type: "paragraph",
        text: "A citation is any online reference to your business's name, address, and phone number — usually shortened to NAP — on a business directory or similar platform. Consistency across these listings is a real, if modest, trust signal, while inconsistent or duplicate listings can create confusion for both searchers and the platforms trying to verify your business.",
      },
      {
        type: "paragraph",
        text: "Common problems worth checking for: duplicate listings on the same directory, an outdated address left live after a move, or a phone number that no longer matches your current line. For a full breakdown of what citations are, which ones actually matter, and how to audit your own, see [our guide to local citations](/blog/local-citations-explained).",
      },

      {
        type: "heading",
        text: "The Difference Between Google Maps and the Local Pack",
      },
      {
        type: "paragraph",
        text: "These two surfaces are closely related, but they're not identical. The Local Pack is the block of three listings shown directly in search results for many local queries, sitting above the standard organic results. Google Maps is a separate, dedicated interface — reachable directly, or by clicking through from the Local Pack to see more options.",
      },
      {
        type: "paragraph",
        text: "The signals that influence your position in one largely overlap with the signals that influence your position in the other, since both draw from the same underlying Google Business Profile and local ranking data. That said, the exact set of businesses shown, and their order, can differ between the two — and both can vary based on exactly where the searcher is located, which is part of why two people searching the same term from different locations sometimes see different results.",
      },

      { type: "heading", text: "What You Can Control vs What You Cannot" },
      {
        type: "paragraph",
        text: "It's worth being realistic about which parts of local ranking are actually within your influence.",
      },
      { type: "subheading", text: "Within Your Control" },
      {
        type: "list",
        items: [
          "Profile accuracy and completeness",
          "Category selection",
          "Website relevance and content quality",
          "Accurate location and service-area information",
          "Citation consistency",
          "Reviews, and how you respond to them",
          "Local, location-specific content",
          "Internal linking to your most important pages",
          "Technical SEO fundamentals",
          "Ongoing optimization and monitoring",
        ],
      },
      { type: "subheading", text: "Outside Your Direct Control" },
      {
        type: "list",
        items: [
          "Your exact ranking position on any given day",
          "What competitors choose to do",
          "Changes to Google's algorithm",
          "Where a specific searcher is physically located",
          "Personalization tied to an individual searcher's history",
          "Overall search demand for a given term",
        ],
      },

      { type: "heading", text: "A Practical Local Ranking Checklist" },
      {
        type: "list",
        items: [
          "Google Business Profile claimed and verified",
          "Correct, specific primary category selected",
          "Relevant secondary categories added where they genuinely apply",
          "Business name, address, and phone number accurate and consistent",
          "Services list current and specific",
          "Website linked and working correctly from the profile",
          "Business information consistent across your most important directories",
          "Location- or service-specific content on your website",
          "Strong relevance between your site and the services/areas you want to rank for",
          "A steady flow of legitimate customer reviews",
          "Thoughtful responses to reviews, positive and negative",
          "Core technical SEO fundamentals in place — crawlability, indexing, working links",
          "A genuinely mobile-friendly website",
          "Clear, measurable ways for a visitor to actually contact you",
          "Ongoing monitoring rather than a one-time setup",
        ],
      },

      {
        type: "heading",
        text: "How Long Does It Take to Improve Local Rankings?",
      },
      {
        type: "paragraph",
        text: "There's no honest, universal timeline here, and any answer that gives you a specific number of weeks without knowing your market is guessing. What's realistic to say: initial Google Business Profile improvements are often visible within a few weeks, while broader local ranking movement typically plays out over a longer stretch — often 60–90 days, and longer in competitive markets.",
      },
      {
        type: "paragraph",
        text: "The actual timeline depends on your level of competition, your current authority and profile condition, the quality of your website, your geographic market, and how much work is needed to fix existing gaps. Nobody can honestly promise first-page rankings, a specific Local Pack position, a specific amount of traffic, or a specific number of leads by a fixed date — treating a stated timeline as a guarantee rather than an estimate is a good way to set the wrong expectations.",
      },

      {
        type: "heading",
        text: "When to Consider Professional Local SEO Help",
      },
      {
        type: "paragraph",
        text: "Some situations are manageable on your own with consistent attention; others benefit from outside help. Signs it may be worth bringing in support include a highly competitive local market where every advantage matters, business listings that have become inconsistent across multiple directories over time, a Google Business Profile that was set up once and never maintained, visibility that's noticeably behind comparable competitors, technical problems on your website getting in the way, or simply not having the time to keep up with the ongoing maintenance this work actually requires. If any of that sounds familiar, that's exactly the gap our [local SEO team](/services/local-seo-google-business-profile) is built to close — auditing where you currently stand and handling the ongoing work rather than a one-time fix.",
      },

      { type: "heading", text: "Local Ranking FAQ" },
      { type: "subheading", text: "How do I rank my business locally on Google?" },
      {
        type: "paragraph",
        text: "Start with the fundamentals: a complete, accurate, and actively maintained Google Business Profile, consistent business information across the directories that matter, a steady flow of genuine reviews, and a website that clearly reflects what you do and where you do it. From there, ongoing attention matters more than any single fix.",
      },
      {
        type: "subheading",
        text: "How does Google decide which local businesses to show?",
      },
      {
        type: "paragraph",
        text: "Google evaluates relevance to the search, distance from the searcher (or your stated service area), and prominence — how established and trusted your business appears based on signals like reviews, citations, and overall web presence — weighing all three together rather than any one in isolation.",
      },
      { type: "subheading", text: "How long does local SEO take to work?" },
      {
        type: "paragraph",
        text: "It varies by market and starting point, but many businesses see initial Google Business Profile improvements within a few weeks, with broader ranking movement typically building over 60–90 days or longer in more competitive areas.",
      },
      {
        type: "subheading",
        text: "Does my Google Business Profile affect local rankings?",
      },
      {
        type: "paragraph",
        text: "Yes — it's one of the most direct signals Google uses to understand what your business does and where it operates, which is why profile accuracy, completeness, and ongoing maintenance matter as much as they do.",
      },
      {
        type: "subheading",
        text: "What is the difference between Google Maps and the Local Pack?",
      },
      {
        type: "paragraph",
        text: "The Local Pack is the block of three listings shown directly within search results for many local searches; Google Maps is the separate, dedicated map interface. Both draw on largely the same underlying signals, but the specific businesses shown and their order can differ between the two.",
      },
    ],
    relatedSlugs: [
      "local-citations-explained",
      "how-google-business-profile-helps-local-businesses",
    ],
  },
  {
    slug: "seo-strategy-for-local-service-businesses",
    title: "SEO Strategy for Local Service Businesses: A Practical Guide",
    category: "Strategy",
    metaTitle: "SEO Strategy for Local Service Businesses: A Practical Guide",
    metaDescription:
      "Learn how to build an SEO strategy for a local service business using keyword research, technical SEO, local SEO, content, authority building, and conversion-focused optimization.",
    excerpt:
      "SEO advice usually arrives as a list of disconnected tactics. Here's how keyword research, technical SEO, local visibility, content, authority, and conversion optimization actually fit together as one coordinated strategy.",
    publishDate: "2026-08-11",
    readingTime: "12 min read",
    content: [
      {
        type: "paragraph",
        text: "SEO advice online tends to arrive as a list of disconnected tactics — write more content, build some links, fix your Google Business Profile, optimize your title tags. Each piece of advice is defensible on its own, but none of it works particularly well in isolation. A real SEO strategy connects these pieces to your actual business: your services, your locations, the way your customers search, and what needs to happen once they land on your site. Here's how those pieces fit together for a local service business specifically.",
      },

      { type: "heading", text: "What Is an SEO Strategy?" },
      {
        type: "paragraph",
        text: "An SEO tactic is a single action — publishing a blog post, fixing a broken link, claiming a Google Business Profile listing. An SEO strategy is the reasoning that decides which tactics matter, in what order, and why — built around your specific services, your specific market, and what you're actually trying to achieve.",
      },
      {
        type: "paragraph",
        text: "Publishing content, building links, or optimizing a Google Business Profile in isolation can each produce some result, but none of them is a complete strategy on its own. A business that publishes blog posts without a technical foundation that lets Google actually index them, or builds citations without an optimized Google Business Profile to point them at, is spending effort without a clear plan for how the pieces reinforce each other.",
      },
      {
        type: "paragraph",
        text: "Most coordinated strategies start with an honest picture of where a business currently stands — which is exactly what an [SEO audit](/services/seo-audit) is built to establish before deciding what to prioritize.",
      },

      {
        type: "heading",
        text: "Why Local Service Businesses Need a Different SEO Strategy",
      },
      {
        type: "paragraph",
        text: "A national e-commerce brand and a local plumbing company are playing a fundamentally different game, even though both are technically doing \"SEO.\" A local service business lives and dies by geographic intent — searches that include a location, whether stated explicitly (\"plumber in [city]\") or implied by the searcher's own position when they search \"plumber near me.\"",
      },
      {
        type: "paragraph",
        text: "That difference shows up throughout the strategy: high-intent searches from someone with an active problem right now, not someone researching for weeks; visibility in Google Maps and the Local Pack, not just standard organic results; service-specific pages built around what you actually do and where you actually work, rather than broad national keywords; and competition that's local, not national — you're not trying to outrank a media company, you're trying to outrank the other businesses in your area doing what you do.",
      },
      {
        type: "paragraph",
        text: "None of this means faster or guaranteed results — local competition varies enormously by market, and no honest strategy promises a specific outcome. It means the strategy itself needs to be built around location and intent from the start, not adapted from generic SEO advice after the fact.",
      },

      { type: "heading", text: "Start With Keyword Research and Search Intent" },
      {
        type: "paragraph",
        text: "Strategy starts with understanding exactly what you're trying to rank for and why. That means mapping out the services you actually offer, the locations or service areas you actually cover, and the real problems your customers are searching to solve — not a generic list of industry keywords pulled from a tool.",
      },
      {
        type: "paragraph",
        text: "It also means separating commercial search terms (someone ready to hire, searching \"[service] near me\" or \"[service] in [city]\") from informational search terms (someone earlier in their decision, searching \"how much does [service] cost\" or \"do I need [service]\"), and paying attention to location modifiers that signal exactly where a searcher is or wants service. Getting this mapping right is what [keyword research services](/services/keyword-research) are built to do — it's the foundation everything else here gets built on top of.",
      },

      { type: "heading", text: "Build the Technical SEO Foundation" },
      {
        type: "paragraph",
        text: "Technical SEO doesn't win rankings by itself, but it sets the ceiling for everything else you do. If Google can't crawl your pages, can't index them properly, or struggles with basic site architecture, canonicalization, or Core Web Vitals, no amount of content or local optimization on top of that foundation performs the way it should.",
      },
      {
        type: "paragraph",
        text: "This isn't the place to turn strategy into a technical SEO tutorial — the specifics of crawlability, indexation, XML sitemaps, robots.txt, mobile usability, and structured data are covered in depth by our [technical SEO audit](/services/technical-seo-audit) service. What matters at the strategy level is simply making sure this foundation gets checked early, not treated as an afterthought once other work is already underway.",
      },

      { type: "heading", text: "Build Local Search Visibility" },
      {
        type: "paragraph",
        text: "For a local service business, this is usually where the most immediate visibility gains come from. A complete, actively maintained Google Business Profile — accurate business information, the right primary category, a specific services list, genuine reviews, and consistent activity — feeds directly into Google Maps and Local Pack visibility.",
      },
      {
        type: "paragraph",
        text: "Citation consistency, local relevance signals, and location- or service-specific landing pages all support this same goal from different angles. This entire layer of the strategy is what our [Local SEO and Google Business Profile services](/services/local-seo-google-business-profile) are built around.",
      },

      { type: "heading", text: "Create Pages That Match Search Intent" },
      {
        type: "paragraph",
        text: "Your website needs a page for every genuine search intent you're trying to capture — core service pages that clearly explain what you do, and location or service-area pages where a real, distinct audience actually searches that way. What it doesn't need is dozens of thin, near-identical location pages created purely to catch search traffic rather than to serve an actual visitor.",
      },
      {
        type: "paragraph",
        text: "Google has gotten better at recognizing pages built for search engines instead of people, and thin duplicate pages tend to underperform, or even work against the pages that actually matter. Structuring and writing each page around real intent, not just keyword coverage, is the core of what [on-page SEO](/services/on-page-seo) work does.",
      },

      { type: "heading", text: "Use Content to Support the Strategy" },
      {
        type: "paragraph",
        text: "Informational content earns its place in a strategy by doing real work: answering the questions your prospects are actually asking, supporting your service pages with topical depth, creating natural opportunities for internal links that guide both users and search engines to your most important pages, and helping someone still deciding whether to hire you get closer to a decision.",
      },
      {
        type: "paragraph",
        text: "This is where [content strategy and SEO](/services/content-strategy-seo) work connects everything else together — our own guides on [how to rank locally on Google](/blog/how-to-rank-locally-on-google) and [local citations](/blog/local-citations-explained) are both examples of exactly this kind of supporting content, written to be useful on their own while reinforcing the commercial pages they relate to.",
      },

      { type: "heading", text: "Build Authority and Trust" },
      {
        type: "paragraph",
        text: "Authority signals — relevant backlinks, legitimate local mentions, accurate citations, and genuine reputation — tell Google and prospective customers alike that your business is established and trustworthy, not just present.",
      },
      {
        type: "paragraph",
        text: "This is worth being direct about: manipulative link schemes, paid links designed purely to game rankings, or manufactured mentions carry real risk and rarely hold up over time. Building relevant, legitimate authority — through real relationships, useful resources worth referencing, and consistent local presence — is slower but is what [link building services](/services/link-building) are actually built around.",
      },

      { type: "heading", text: "Make the Website Convert the Traffic" },
      {
        type: "paragraph",
        text: "None of the visibility work above matters much if the traffic it generates can't actually turn into a call, a quote request, or a booked job. A visitor who can't find your phone number, isn't sure what you actually offer, or hits a slow, confusing page on their phone is a visitor you worked to earn and then lost anyway.",
      },
      {
        type: "paragraph",
        text: "Clear calls to action, visible phone numbers, simple quote or contact forms, genuine trust signals, mobile usability, and fast load times all determine whether the traffic your SEO strategy generates turns into something the business can actually use — which is exactly what [conversion rate optimization](/services/conversion-rate-optimization) work is for.",
      },

      { type: "heading", text: "Measure the SEO Strategy" },
      {
        type: "paragraph",
        text: "Rankings alone are not the entire measure of success — a keyword sitting in position three that never generates a call is worth less than a lower-ranking page that consistently converts. A useful measurement approach looks at organic and local visibility together with what actually happens after someone finds you: qualified leads, calls, form submissions, and conversion rate, not just position tracking.",
      },
      {
        type: "paragraph",
        text: "Google Business Profile performance and keyword movement are useful early indicators, but tying all of it back to actual business outcomes is what makes measurement genuinely useful rather than a vanity report — which is the approach behind our [SEO reporting and analytics](/services/seo-reporting-analytics) service.",
      },

      { type: "heading", text: "How the Pieces Work Together" },
      {
        type: "paragraph",
        text: "Laid out as a sequence, the strategy looks like this:",
      },
      {
        type: "orderedList",
        items: [
          "Keyword research and search intent — understand what you're actually trying to rank for and why.",
          "Technical foundation — make sure the site can be properly crawled and indexed in the first place.",
          "Local visibility — build the Google Business Profile and citation foundation that drives Maps and Local Pack presence.",
          "Optimized service pages — align each page with a real, specific search intent.",
          "Useful content — support those pages and answer real customer questions.",
          "Authority — build legitimate signals of trust and relevance.",
          "Conversion optimization — make sure the traffic that arrives can actually take action.",
          "Measurement — track outcomes, not just rankings.",
          "Ongoing improvement — revisit and adjust as data comes in, rather than treating the strategy as a one-time project.",
        ],
      },
      {
        type: "paragraph",
        text: "The order isn't rigid — a business with strong content but weak technical health might reasonably start at step two, not step one — but the logic behind the sequence holds: each piece supports the ones that follow it, and skipping one usually shows up as a ceiling on what the later pieces can achieve.",
      },

      {
        type: "heading",
        text: "A Practical SEO Strategy Checklist for Local Service Businesses",
      },
      {
        type: "list",
        items: [
          "Define the specific services you want to be found for",
          "Define the specific locations or service areas you serve",
          "Research the real search intent behind your target keywords",
          "Audit your technical SEO foundation",
          "Optimize and actively maintain your Google Business Profile",
          "Maintain consistent business information across important citations",
          "Build or refine service pages around real search intent",
          "Create useful supporting content, not content for its own sake",
          "Strengthen internal linking between related pages",
          "Build relevant, legitimate authority over time",
          "Improve conversion paths across the site",
          "Measure leads and conversions, not just rankings",
          "Review and adjust the strategy on an ongoing basis",
        ],
      },

      {
        type: "heading",
        text: "When Should a Local Business Invest in Professional SEO?",
      },
      {
        type: "paragraph",
        text: "Some of this is manageable in-house with consistent time and attention. Professional help tends to make the most sense in a genuinely competitive market, when a business covers multiple service areas that each need their own attention, when organic or local visibility has stayed weak despite effort, when technical problems are getting in the way, when business listings have become inconsistent over time, when the website isn't converting the traffic it already gets, or simply when there isn't the internal time or expertise to keep a coordinated strategy moving and measured over time. None of that is a guarantee that professional help produces a specific result — it's a description of when the coordination this article describes becomes hard to sustain without dedicated attention.",
      },

      { type: "heading", text: "SEO Strategy FAQ" },
      { type: "subheading", text: "What is an SEO strategy?" },
      {
        type: "paragraph",
        text: "An SEO strategy is the coordinated plan that decides which SEO activities matter for a specific business, in what order, and why — built around its services, market, and goals, rather than a disconnected list of tactics applied without a clear reason.",
      },
      {
        type: "subheading",
        text: "What should an SEO strategy include for a local business?",
      },
      {
        type: "paragraph",
        text: "At minimum: keyword research grounded in real search intent, a solid technical foundation, local visibility through Google Business Profile and citations, service pages that match how people actually search, supporting content, legitimate authority building, conversion-focused website design, and ongoing measurement.",
      },
      {
        type: "subheading",
        text: "How long does an SEO strategy take to produce results?",
      },
      {
        type: "paragraph",
        text: "It depends on the starting point, competition, and market — there's no honest universal timeline. Some pieces, like Google Business Profile improvements, can show movement within weeks; broader organic and local ranking gains typically build over a longer period, often several months, and longer in more competitive markets.",
      },
      { type: "subheading", text: "Is local SEO part of an SEO strategy?" },
      {
        type: "paragraph",
        text: "Yes — for a local service business, local SEO is usually one of the most important components, not a separate initiative. Google Business Profile, citations, and local relevance work alongside technical SEO, content, and authority as part of the same coordinated plan.",
      },
      {
        type: "subheading",
        text: "Should a local business focus on SEO or Google Ads?",
      },
      {
        type: "paragraph",
        text: "Most established local service businesses eventually run both, in different proportions depending on how quickly they need results versus how much they're building for the long term. For a fuller breakdown of how to think about that decision, see [SEO vs Google Ads](/blog/seo-vs-google-ads).",
      },
    ],
    relatedSlugs: [
      "how-to-rank-locally-on-google",
      "local-citations-explained",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
