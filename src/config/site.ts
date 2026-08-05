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
  description:
    "SEO agency for local service businesses. Technical audits, content, and Google Business Profile growth that turn visibility into booked jobs.",
  domain: "elvicrank.com",
  url: "https://elvicrank.com",

  // No business phone number yet — deliberately absent rather than a fake
  // placeholder. Set to { display, e164 } once a real number exists.
  phone: null as { display: string; e164: string } | null,

  email: "info@elvicrank.com",

  whatsapp: {
    display: "+234 707 152 5686",
    url: "https://wa.me/2347071525686",
  } as { display: string; url: string } | null,

  // Deliberately no street address: Elvic Rank operates as a remote agency.
  location: {
    mode: "remote" as const,
    servingLine:
      "Helping local service businesses across the United States, Canada, the United Kingdom, Australia, and Africa grow through SEO, Google Business Profile optimization, website design, and digital marketing.",
  },

  social: {
    instagram: "https://instagram.com/elvicrank",
    x: "https://x.com/elvicrank",
    tiktok: "https://tiktok.com/@elvicrank",
  },

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Industries", href: "/#industries" },
    { label: "Process", href: "/#process" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/#blog" },
    { label: "FAQ", href: "/#faq" },
  ],

  // All hrefs here are root-relative (leading "/") since Navbar/Footer are
  // rendered on every page, not just the homepage — a bare "#audit" only
  // scrolls correctly when already on "/".
  cta: {
    primary: { label: "Get Your Free SEO Audit", href: "/#audit" },
    secondary: { label: "Talk to Us", href: "/#contact" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
