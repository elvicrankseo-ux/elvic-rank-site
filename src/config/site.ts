/**
 * Single source of truth for business/brand facts. Every component that
 * renders NAP (name/address/phone), social links, or CTA targets should
 * pull from here — never hardcode them in a component.
 *
 * TODO(elvic): swap PLACEHOLDER values before launch.
 */

export const siteConfig = {
  name: "Elvic Rank",
  legalName: "Elvic Rank",
  // Phase 33 positioning refinement: the core promise, not yet rendered
  // anywhere directly (kept as the single source of truth in case a
  // future component wants it) — Hero.tsx's H1 is the visible expression
  // of this same promise.
  tagline: "SEO, Websites & Google Growth for Restoration & Emergency Service Businesses",
  // Phase 31 repositioning: Elvic Rank specializes in restoration and
  // emergency service businesses (water/fire/mold/storm/disaster/biohazard
  // restoration, plus towing, emergency plumbing, HVAC, and electrical) —
  // categories that share one defining trait: customers search Google
  // urgently, because something has already gone wrong, and decide fast.
  // See docs/phase-31-niche-pivot.md for the full reasoning.
  description:
    "SEO and lead generation for restoration and emergency service businesses. Local SEO, Google Business Profile, and technical audits that turn urgent Google searches into booked jobs.",
  domain: "elvicrank.com",
  // Phase 28: confirmed via direct HTTP testing (twice, across two phases)
  // that Vercel's platform-level redirect goes apex -> www (a single,
  // stable, non-looping 308), and www is the domain that actually serves
  // the app (Next.js response headers present only on www, not apex).
  // This is the real, currently-serving production URL — every
  // canonical/OG/sitemap/schema URL in the app derives from this single
  // constant, so this one change is the entire fix. Do NOT add a
  // next.config.ts redirect alongside this — Vercel's existing redirect
  // already handles apex -> www correctly; adding another one caused the
  // Phase 26 outage. See docs/phase-28-domain-canonicalization-audit.md.
  url: "https://www.elvicrank.com",

  // No business phone number yet — deliberately absent rather than a fake
  // placeholder. Set to { display, e164 } once a real number exists.
  phone: null as { display: string; e164: string } | null,

  email: "info@elvicrank.com",

  // Technical SEO cleanup: points directly at WhatsApp's final destination
  // rather than the wa.me short-link (wa.me returns a 302 to this exact
  // URL — verified via direct HTTP request) to remove an unnecessary
  // redirect hop from every internal reference to it. Same phone number,
  // same resulting chat — no behavior change.
  whatsapp: {
    display: "+234 707 152 5686",
    url: "https://api.whatsapp.com/send?phone=2347071525686",
  } as { display: string; url: string } | null,


  // Strategy-call booking destination. Every "Book a Free Strategy Call"
  // CTA site-wide should link here — never hardcode this URL directly in
  // a component.
  calendlyUrl: "https://calendly.com/elvicrankseo/30min",

  // Deliberately no street address: Elvic Rank operates as a remote agency.
  location: {
    mode: "remote" as const,
    servingLine:
      "Helping U.S. restoration and emergency service businesses turn urgent Google searches into booked jobs through local SEO, Google Business Profile optimization, and technical SEO.",
  },

  // instagram/tiktok point directly at their final destinations (both
  // https://instagram.com/... and https://tiktok.com/@... 301-redirect to
  // the www. form — verified via direct HTTP request) to remove an
  // unnecessary redirect hop. Same profiles, same usernames.
  social: {
    instagram: "https://www.instagram.com/elvicrank",
    x: "https://x.com/elvicrank",
    tiktok: "https://www.tiktok.com/@elvicrank",
  },

  // Phase 31: restructured around the restoration/emergency-service
  // specialization (first 4 items are the ones Footer's quickLinks slice
  // surfaces — kept the most important entries there deliberately).
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Restoration SEO", href: "/industries/restoration-seo" },
    { label: "Emergency SEO", href: "/industries/emergency-service-seo" },
    { label: "Industries", href: "/#industries" },
    { label: "Resources", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],

  // All hrefs here are root-relative (leading "/") since Navbar/Footer are
  // rendered on every page, not just the homepage — a bare "#audit" only
  // scrolls correctly when already on "/".
  cta: {
    // Kept compact deliberately — this label is reused in tight spaces
    // (navbar, mobile sticky bar) as well as full-size buttons.
    primary: { label: "Get a Free Growth Audit", href: "/#audit" },
    // Only consumed by Hero — points at the testimonials section since case studies were removed.
    secondary: { label: "View Our Work", href: "/#testimonials" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
