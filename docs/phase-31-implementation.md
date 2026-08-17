# Phase 31 — Implementation Log

## New Files

| File | Purpose |
|---|---|
| `src/app/industries/[slug]/page.tsx` change only (route already existed from Phase 30) | Added `relatedIndustries` support (hub↔niche cross-link grid) and fixed the hardcoded "Towing" CTA text to be dynamic per industry — see below. |

## Modified Files

### `src/data/industries.ts` — full rewrite
Extended the `Industry` type with `group` ("restoration" | "emergency"),
`isHub`, and `relatedIndustrySlugs`. Grew from 1 entry (towing) to 12:
2 hub pages + 6 restoration niches + 4 emergency niches (including the
updated towing entry). Every entry has unique `metaTitle`, unique
`richContent` (not a keyword-swapped template — verified by reading
each page's distinct angle: water damage emphasizes speed-of-response,
fire damage emphasizes insurance-adjacent search behavior, mold
emphasizes health-concern-driven informational search, storm
emphasizes seasonal demand spikes, disaster covers the multi-category
architecture problem, biohazard covers discretion/tone, towing/
plumbing/HVAC/electrical each cover their specific emergency trigger),
and a distinct FAQ set (no copy-pasted questions).

### `src/app/industries/[slug]/page.tsx`
- Added `relatedIndustries` lookup and a new "Related industries" /
  "Explore each category" section (renders only when
  `relatedIndustrySlugs` is present) — the hub↔niche cross-linking
  Section 12 asks for.
- **Fixed:** the header CTA button previously hardcoded "Get a Free
  Towing SEO Audit" — harmless when only one industry existed, broken
  once more were added. Replaced with a computed `auditCtaLabel` that
  avoids "Restoration SEO **SEO** Audit" on the two hub pages (whose
  `label` already ends in "SEO") while still producing the full
  "Get a Free Towing SEO Audit" / "Get a Free Water Damage Restoration
  SEO Audit" phrasing for niche pages. Found and fixed via direct
  in-browser verification before deployment.

### `src/lib/schema.ts` (Phase 30, unchanged this phase)
No change needed — `getIndustryPageSchema()` already worked generically
for any industry entry.

### `src/config/site.ts`
- `description`, `location.servingLine`: rewritten around restoration/
  emergency positioning.
- `nav`: 8 items → 7, restructured (Services / Restoration SEO /
  Emergency SEO / Industries / Resources / About / FAQ).
- `cta.primary.label`: unchanged in spirit, same href; `cta.secondary`:
  now points to `/industries/restoration-seo` with new label.

### `src/app/layout.tsx`
`homeTitle` changed to "Elvic Rank | Restoration & Emergency Service
SEO Agency".

### `src/components/sections/hero.tsx`
New eyebrow badge text, H1, subheadline, specialty badges (Restoration
SEO / Emergency Service SEO / Google Business Profile — replaced
Technical SEO / Local SEO / Website Design, which are still real
services but less differentiating as hero badges under the new
positioning), and hero-specific (not `siteConfig`-derived) primary
button text for the longer, more descriptive phrasing.

### `src/components/sections/why-us.tsx`
`SectionHeading` title/description reframed; added a new "Restoration
& Emergency Service Specialists" reason; 2 existing reason descriptions
lightly reframed (GBP, Technical SEO) to reference the niche's specific
stakes (Google Maps dependence, weak-connection mobile searches).

### `src/components/sections/industries.tsx`
Full rewrite: now derives its card list directly from
`src/data/industries.ts`'s non-hub entries instead of a separately
maintained hardcoded array — removes any risk of the homepage grid
drifting out of sync with what pages actually exist.

### `src/components/sections/services.tsx`
`SectionHeading` title/description reframed around the niche. No
change to the underlying `services` array or which services render —
all 14 remain, unreordered.

### `src/components/sections/faq.tsx`
Added one new Q&A ("Do you only work with restoration and emergency
service companies?"); reworded the "outside the US" answer from
"local service businesses" to "restoration and emergency service
businesses" for consistency.

### `src/app/site-map/page.tsx`
- **Fixed a real bug:** filtered nav items by the literal string
  `"Blog"`, which no longer exists after the nav rename to
  "Resources" — TypeScript's strict literal-union type checking on
  `siteConfig.nav`'s labels caught this immediately as a compile
  error (`This comparison appears to be unintentional because the
  types [...] have no overlap`), before it could ship as a silent
  logic bug. Fixed to filter `"Resources"` instead.
- Added a new "Industries" column listing all 12 industry pages —
  this was a genuine pre-existing gap (Phase 30's towing page was
  never added to the sitemap listing page either); grid widened from
  4 to 5 columns to fit it.

### `src/data/services.ts` — 5 pages lightly expanded
Added one closing paragraph each to `local-seo-google-business-profile`,
`technical-seo-audit`, `google-ads`, `website-design`, and `seo-audit`,
cross-linking to the new restoration/emergency hub pages. No existing
paragraph, heading, title, H1, or FAQ was removed or altered — purely
additive.

## A Real Bug Found and Fixed: FAQ Answers Don't Support Markdown Links

`src/components/ui/faq-accordion.tsx` renders `{faq.answer}` as plain
text — confirmed by reading the component source directly. Three FAQ
answers in the initial `industries.ts` draft used the `[text](/url)`
inline-link syntax that `ArticleContent`/`richContent` supports, which
would have rendered literal, broken-looking brackets and parentheses
to real visitors. Found via a `grep` sweep of the initial build's
output HTML (`.next/server/app/industries/*.html`) before deployment,
and fixed by rewriting those 3 answers as plain, unlinked text —
consistent with how every other FAQ answer on the site (services,
blog, homepage) has always been written.

## Verification Performed

- TypeScript: clean (after fixing the `site-map` literal-type error).
- ESLint: clean.
- Production build: **44/44 routes** (33 → 44, +11 for the new
  industry pages; the 12th, towing, already existed).
- Sitemap (`.next/server/app/sitemap.xml.body`): **37 URLs** (26 → 37),
  all 12 industry pages present, all under `www.elvicrank.com`.
- Checked all 12 industry pages' built HTML for unique `<title>` —
  confirmed no duplicates (keyword ownership: one clear primary page
  per query cluster, per Section 23).
- Checked both hub pages' rendered `href` attributes — every link
  resolves to a real, existing route (12 industries + 5 real service
  slugs); zero broken links found.
- Checked `siteConfig.url`-derived canonical tags on the homepage, both
  hubs, and a niche page — all correctly `https://www.elvicrank.com/...`
  (Phase 28's domain fix untouched and unaffected).
- Mobile: 375px and 768px both checked directly in-browser (screenshot
  + `scrollWidth` comparison) on the homepage, both hub pages, and a
  niche page — no horizontal overflow anywhere.
- Confirmed no raw `](` markdown syntax renders anywhere on any checked
  page (the FAQ bug fix, verified).
- Confirmed 5 existing service pages' titles/H1s are **unchanged** —
  only additive closing paragraphs were added.
