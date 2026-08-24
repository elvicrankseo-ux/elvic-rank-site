# Phase 33 — Positioning Refresh: "SEO, Websites & Google Growth"

Refines Phase 31's restoration/emergency positioning with a sharper
core promise and a new "how we help" framework, per the owner's Master
Positioning Prompt. This is a targeted homepage update, not another
architecture change — no new routes, no nav restructure, no schema
change.

## Scope
Explicitly limited to what the positioning brief actually specified:
core tagline, homepage hero (headline/subheadline/CTAs), and a new
"Three Pillars" section. The brief's "Content Strategy" topic list
overlaps almost entirely with industry pages already built in Phase
31 (Restoration SEO, Water Damage SEO, Fire Damage SEO, Mold SEO,
Disaster Restoration SEO, Towing SEO, Emergency Plumbing/HVAC SEO,
etc.) — nothing new to build there. The two genuinely new topics
("Restoration Web Design," "How Restoration Companies Get More
Leads") read as blog-article ideas, which Phase 31 already explicitly
deferred to a future dedicated content phase; not written here, to
avoid producing rushed, thin content under time pressure.

## Changes

### `src/config/site.ts`
- `tagline`: "SEO That Compounds" → "SEO, Websites & Google Growth for
  Restoration & Emergency Service Businesses" (not yet rendered
  anywhere directly — kept as the single source of truth for this
  promise; Hero.tsx's H1 is its visible expression).
- `cta.primary.label`: "Get Your Free SEO Audit" → "Get a Free Growth
  Audit" (same `href`, same `seo_audit_cta_click` event — no
  destination or tracking change, purely a copy update, per the
  brief's explicit CTA text).
- `cta.secondary`: label "See How We Help Restoration Companies" →
  "View Our Work"; href `/industries/restoration-seo` →
  `/#case-studies` — "View Our Work" should mean actual work, and the
  case-studies section is the site's one place that shows real,
  factual project status (Akanaby Logistics), not a services
  description page.

### `src/components/sections/hero.tsx`
New H1 ("SEO, Websites & Google Growth for Restoration & Emergency
Service Businesses") and subheadline, per the brief's exact wording.
Primary CTA now reads from `siteConfig.cta.primary.label` directly
(reverted the Phase-31-era hero-specific override) since "Get a Free
Growth Audit" is compact enough to work everywhere — one less special
case.

### `src/components/sections/growth-pillars.tsx` (new)
The "Get Found → Get Chosen → Get More Jobs" framework from the
positioning brief, built as a new, deliberately compact 3-card section
(not another long grid) — sits between Hero and TrustStrip, framing
the detailed 14-service grid that follows rather than duplicating it.

### `src/app/page.tsx`
Mounted `<GrowthPillars />` between `<Hero />` and `<TrustStrip />`.

## Deliberately NOT Changed
- Navigation, service pages, industry pages, schema, sitemap, robots,
  analytics event names — none touched.
- No new content/blog articles written (see "Scope" above).
- `src/data/industries.ts`'s disaster-restoration expansion from the
  prior conversation turn remains **uncommitted and unaffected** —
  still awaiting the owner's explicit review before deployment, kept
  entirely separate from this commit.

## Verification
TypeScript clean, ESLint clean, production build **44/44 routes**
(unchanged — homepage-only change, no new pages). Confirmed in build
output: new H1, new CTA button text, Growth Pillars section all render
correctly. Checked in-browser at 375px, 1280px (desktop, 3-column
pillar grid confirmed active), and via `scrollWidth` comparison at
each — no horizontal overflow anywhere. Navbar's CTA button confirmed
to fit the new, slightly different-length label without wrapping or
overflow.
