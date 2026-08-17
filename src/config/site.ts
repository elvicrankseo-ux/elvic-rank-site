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
  tagline: "SEO That Compounds",
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

  whatsapp: {
    display: "+234 707 152 5686",
    url: "https://wa.me/2347071525686",
  } as { display: string; url: string } | null,

  // Telegram — an additional, low-friction contact channel alongside
  // WhatsApp. The pre-filled message is encoded once here so no call site
  // has to duplicate the encoding logic. Message text per Phase 29's
  // explicit revision (previously "Hi Elvic Rank, I'd like to learn more
  // about your services and how you can help my business." from Phase 27).
  telegram: {
    display: "@Elvicrank",
    url: `https://t.me/Elvicrank?text=${encodeURIComponent(
      "Hello Elvic Rank, I would like to learn more about your SEO and digital marketing services."
    )}`,
  } as { display: string; url: string } | null,

  // Strategy-call booking destination. Every "Book a Free Strategy Call"
  // CTA site-wide should link here — never hardcode this URL directly in
  // a component.
  calendlyUrl: "https://calendly.com/elvicrankseo/30min",

  // Deliberately no street address: Elvic Rank operates as a remote agency.
  location: {
    mode: "remote" as const,
    servingLine:
      "Helping restoration and emergency service businesses across the United States, Canada, the United Kingdom, Australia, and Africa turn urgent Google searches into booked jobs through local SEO, Google Business Profile optimization, and technical SEO.",
  },

  social: {
    instagram: "https://instagram.com/elvicrank",
    x: "https://x.com/elvicrank",
    tiktok: "https://tiktok.com/@elvicrank",
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
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
  ],

  // All hrefs here are root-relative (leading "/") since Navbar/Footer are
  // rendered on every page, not just the homepage — a bare "#audit" only
  // scrolls correctly when already on "/".
  cta: {
    // Kept compact deliberately — this label is reused in tight spaces
    // (navbar, mobile sticky bar) as well as full-size buttons. Hero.tsx
    // uses its own longer, more descriptive button text where there's
    // room for it, rather than this shared constant.
    primary: { label: "Get Your Free SEO Audit", href: "/#audit" },
    // Only consumed by Hero — safe to point at Services rather than Contact.
    secondary: { label: "See How We Help Restoration Companies", href: "/industries/restoration-seo" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
