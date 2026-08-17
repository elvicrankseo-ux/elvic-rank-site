# Phase 31 — Restoration & Emergency Service Niche Pivot

*(Numbered Phase 31 — Phase 30 already exists, towing acquisition
system, commits `37536f5`/`1cd9165`. This is a distinct, much larger
undertaking: the full brand repositioning explicitly confirmed by the
owner after a scope-confirmation question in this same session.)*

## Objective

Reposition Elvic Rank from a general local-service SEO agency into a
specialized agency for **restoration and emergency service
businesses** — two vertical groups that share one defining trait:
customers search Google urgently, because something has already gone
wrong, and decide fast. This supersedes Phase 30's "stay broad, towing
is just the first vertical" strategy — the owner explicitly confirmed
the full pivot after being asked to clarify scope.

## Step 1–2: Inspection Before Modifying

Full repository inspection performed before any change: `AGENTS.md`,
`siteConfig`, `services.ts` (14 services), `blog.ts` (8 articles),
`industries.ts` (Phase 30's towing entry — the reusable pattern this
phase extends), navigation (`site.ts` nav array, `navbar.tsx`,
`footer.tsx`), homepage sections (`hero.tsx`, `why-us.tsx`,
`industries.tsx`, `services.tsx`, `faq.tsx`), the shared page templates
(`services/[slug]/page.tsx`, `industries/[slug]/page.tsx`),
`sitemap.ts`, `schema.ts`, `metadata.ts`, and `site-map/page.tsx`.

## Step 3–4: Mapping Existing Pages to the New Architecture

| Page/area | Decision | Why |
|---|---|---|
| Homepage (title, H1, hero, nav, primary CTA) | **Rewritten in place** | This IS the pivot — no URL change, same route (`/`), so no redirect is needed. |
| All 14 `/services/[slug]` pages | **Kept, URLs unchanged** | These describe capabilities (SEO, Local SEO, GBP, Google Ads, Website Design, etc.) that are still exactly what Elvic Rank does — repositioning is about *who* they're framed for, not deleting real, working pages. |
| 5 of 14 service pages (Local SEO/GBP, Technical SEO Audit, Google Ads, Website Design, SEO Audit) | **Lightly expanded** | Added one closing paragraph each, cross-linking to the new restoration/emergency hub pages — see `docs/phase-31-implementation.md`. |
| Meta Ads, Social/Content-adjacent services | **Untouched, de-emphasized by omission** | Per the prompt's own Section 20/9 guidance ("de-emphasize," not "delete") — none of the new industry pages' `relatedServiceSlugs` link to them, which is real de-emphasis without destroying existing, working pages or their SEO equity. |
| `towing-companies` industry page (Phase 30) | **Kept at the same URL, `group` field added, folded into the new architecture** | Already exactly the right pattern — no redirect needed, no content lost. |
| Blog (8 articles) | **Untouched this phase** | Explicitly deferred — see "Deliberately Not Done" below. |
| Homepage sections (`Process`, `About`, `Testimonials`, `CaseStudies`, `TrustStrip`) | **Kept, not rewritten** | Already generic enough to remain accurate under the new positioning (process steps, honest-proof policy, Akanaby Logistics as a towing/emergency-adjacent real project) — rewriting them risked exactly the kind of unnecessary churn the phase's own rules warn against. |

**No existing URL was deleted, renamed, or required a redirect.** The
pivot was achieved entirely by (a) rewriting homepage copy in place at
its existing route, (b) adding new pages under the existing
`/industries/[slug]` pattern, and (c) light, additive cross-links from
existing service pages. This preserves 100% of whatever existing SEO
equity/impressions those service and blog URLs had — nothing to
redirect, per Section 21/28's requirement.

## What Was Actually Built

**Architecture:** extended Phase 30's `industries.ts` +
`industries/[slug]/page.tsx` pattern — not a new one — with `group`
("restoration" | "emergency"), `isHub` (marks the 2 pillar pages), and
`relatedIndustrySlugs` (hub↔niche cross-links) fields.

**12 industry pages total** (11 new + 1 existing, updated):
- **2 hub/pillar pages:** `/industries/restoration-seo`,
  `/industries/emergency-service-seo`
- **6 restoration niches:** water-damage-restoration,
  fire-smoke-restoration, mold-remediation, storm-damage-restoration,
  disaster-restoration, biohazard-cleanup
- **4 emergency niches:** towing-companies (existing, updated),
  emergency-plumbing, emergency-hvac, emergency-electrical

**Deliberately NOT built as a separate page: "flood restoration."**
Flood and water damage restoration share nearly identical search
intent, customer situation, and content — a separate page would have
been exactly the thin, keyword-swapped duplicate the prompt's own
rules explicitly prohibit ("Do not create dedicated pages where only
the keyword changes"). Flood is covered explicitly within
`water-damage-restoration` instead, stated directly in that page's
content and FAQ.

## Core Positioning Changes

- `siteConfig.description`, `siteConfig.location.servingLine`: rewritten
  around restoration/emergency positioning.
- `siteConfig.nav`: restructured to Services / Restoration SEO /
  Emergency SEO / Industries / Resources / About / FAQ — 7 items,
  simplified rather than expanded, with the 2 new hub pages directly
  reachable from primary nav (1 click from anywhere on the site).
- `siteConfig.cta.primary.label`: kept compact ("Get Your Free SEO
  Audit") since it's reused in tight spaces (navbar, mobile sticky
  bar); Hero has its own longer, more descriptive button text where
  there's room for it.
- `siteConfig.cta.secondary`: now points to the restoration hub
  ("See How We Help Restoration Companies").
- Homepage `<title>` (`layout.tsx`'s `homeTitle`): "Elvic Rank |
  Restoration & Emergency Service SEO Agency."
- `Hero.tsx`: new H1 ("SEO That Gets Restoration & Emergency Service
  Companies More Calls"), new subheadline, new specialty badges
  (Restoration SEO / Emergency Service SEO / Google Business Profile).
- `WhyUs.tsx`: heading + 3 of 6 reason descriptions reframed around the
  niche; a new "Restoration & Emergency Service Specialists" reason
  added, directly addressing the "these guys specialize in businesses
  like mine" positioning goal.
- `Industries.tsx` (homepage grid): now pulls directly from
  `industries.ts`'s 10 non-hub entries — single source of truth, can't
  drift out of sync with what pages actually exist.
- `Services.tsx` heading: reframed around the niche.
- `FAQ.tsx`: added one new Q&A ("Do you only work with restoration and
  emergency service companies?") and lightly updated one existing
  answer's wording.
- `site-map/page.tsx`: added an "Industries" column (was previously
  entirely absent from the sitemap page — a genuine pre-existing gap
  this phase also fixed) and corrected a filter bug that referenced the
  old "Blog" nav label (now "Resources"), which TypeScript's own
  strict literal-union checking caught before it could ship broken.

## Deliberately Not Done This Phase

- **Full blog restructure (Section 11)** — 15-20 new blog articles
  across 5 content clusters. Explicitly deferred: cramming this into
  the same pass as the core architecture and 11 new pages would have
  produced exactly the thin, formulaic content the prompt's own rules
  forbid. This is queued as the clear, obvious next phase.
- **Location pages (Section 13)** — explicitly deferred by the
  prompt's own instructions ("first establish strong industry
  authority... only create location pages when there is enough
  unique, useful content to justify them"). No location pages were
  created.
- **Emergency roofing/glass/locksmith/appliance/garage-door
  categories** — the original (superseded) restoration prompt listed
  these; the confirmed, final prompt narrowed the emergency group to
  towing, plumbing, HVAC, and electrical specifically. Followed the
  final, confirmed scope.
- **De-emphasizing Meta Ads/social by literal removal** — kept the
  pages live (still real, working services), de-emphasized only by
  omission from the new pages' internal linking, per the prompt's own
  "de-emphasize, don't necessarily delete" instruction.

## No Fabrication

No client results, testimonials, reviews, rankings, revenue figures,
statistics, or credentials were invented anywhere in this phase's ~20
new/modified content-bearing files. The one factual reference to real
work (Akanaby Logistics, already published on `/#case-studies`) states
only what's already true and already live: website design complete,
GBP work in progress, no SEO results claimed.

## A Real Bug Found and Fixed During This Phase

`FaqAccordion` (`src/components/ui/faq-accordion.tsx`) renders FAQ
answers as plain text with no markdown-link parsing — confirmed by
reading the component directly, not assumed. Three FAQ answers
initially written with `[text](/url)` syntax (copying the pattern used
in `richContent`, which *does* support it via `ArticleContent`) would
have rendered literal, broken-looking brackets to real visitors. Found
during the build-output verification pass (grep against
`.next/server/app/`) and fixed before deployment — see
`docs/phase-31-implementation.md`.
