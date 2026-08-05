export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

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
        text: "Google Business Profile isn't a set-it-and-forget-it listing — it's an active asset that rewards ongoing attention with real visibility in the exact moment someone is deciding who to call. If yours hasn't been touched in months, that's very likely the fastest lever available to pull before anything else on this list.",
      },
    ],
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
        text: "If you only have time to check one thing this week, run your homepage and your top service page through a Core Web Vitals test. Slow, shifting pages are the single most common issue we find, and they're usually fixable without a full rebuild — a properly scoped technical SEO audit will tell you exactly what's costing you and in what order to fix it.",
      },
    ],
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
        text: "Google Ads is rented visibility — you pay per click, you show up at the top of the results (marked \"Sponsored\"), and the moment you stop paying, you disappear. SEO is earned visibility — you invest in your site's technical health, content, and authority so Google ranks you organically, and once you've built that position, it keeps working with far lower ongoing cost.",
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
          "If you can afford both — run them together from day one. Ads fill the gap while SEO builds, and the keyword research for one directly informs the other.",
        ],
      },
      {
        type: "heading",
        text: "The Real Answer",
      },
      {
        type: "paragraph",
        text: "Most local service businesses that grow steadily over multiple years end up running both, in different proportions at different stages. The mistake to avoid isn't picking the \"wrong\" one first — it's treating them as competing budgets instead of a coordinated strategy built around the same buyer intent.",
      },
    ],
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
          "Service + location pages built around specific, high-intent keyword combinations.",
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
        text: "If your SEO reporting stops at rankings and traffic, you're missing the metric that actually matters. Call tracking and form tracking, tied back to specific pages and keywords, are what turn \"we moved up three positions\" into \"that page generated eleven calls this month.\" That's the version of reporting worth paying attention to.",
      },
      {
        type: "heading",
        text: "The Takeaway",
      },
      {
        type: "paragraph",
        text: "Local SEO done well isn't a traffic strategy — it's a lead interception strategy, built around showing up in the specific moment someone nearby has a problem and is ready to pay to solve it. Everything else is a supporting metric.",
      },
    ],
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
        text: "Google's own PageSpeed Insights tool will score your site and point to specific opportunities, using the same Core Web Vitals data Google uses for ranking. It's free, it's specific to your actual pages, and it's the right starting point before assuming you need a full rebuild — many speed problems are fixable without touching the design at all.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Speed optimization is one of the rare pieces of SEO work that pays off on both sides at once — better rankings and a visitor who's still there long enough to actually call. If it's been a while since anyone checked, it's worth a look before investing further budget in traffic that a slow page will only partly convert.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
