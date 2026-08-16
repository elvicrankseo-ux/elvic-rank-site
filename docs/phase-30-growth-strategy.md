# Phase 30 — Growth Strategy & Niche Expansion Architecture

## Strategic Positioning

Elvic Rank remains positioned as **"SEO Agency for Local Service
Businesses"** — the homepage H1, hero copy, and primary navigation are
unchanged. Towing is the **first specialized acquisition vertical**,
not a repositioning. This is implemented architecturally, not just as
a policy statement: industry pages live in their own route family
(`/industries/[slug]`), completely separate from the site's core
identity (`siteConfig.name`, `siteConfig.description`, the homepage
hero) and from the core service pages (`/services/[slug]`), so adding
a vertical never touches the agency's general positioning.

## Why `/industries/[slug]` (and Not a One-Off Page)

The repository already has one proven, working pattern for "a family
of similar pages driven by one typed data file": `src/data/services.ts`
+ `src/app/services/[slug]/page.tsx`. Rather than hand-build a single
static towing page, this phase extended that exact pattern to a second
family:

```
src/data/industries.ts          <- one typed Industry per vertical
src/app/industries/[slug]/page.tsx  <- one shared template, reused for every vertical
```

This directly satisfies the phase's core requirement — swapping in a
new vertical later means **adding one object to `industries.ts`**, not
rebuilding routing, metadata, schema, or the page layout. No new
architecture is needed for roofing, HVAC, plumbing, or law firms; the
template already handles any number of entries via
`generateStaticParams()`.

## How to Add the Next Vertical (e.g. Roofing)

1. Add a new `Industry` object to `src/data/industries.ts` — slug,
   icon (pick a relevant `lucide-react` icon already available, no new
   dependency), label, title/H1, `metaTitle`/`metaDescription`,
   `heroIntro`, `richContent` (written specifically for that trade's
   real search behavior — do not copy-paste towing content and
   find/replace the word "towing"), `faqs`, and `relatedServiceSlugs`
   (only real, existing `/services/[slug]` slugs).
2. If the trade already has a homepage `industryCards` entry
   (`src/components/sections/industries.tsx`), add an `href` pointing
   to the new page — same pattern used for Towing this phase.
3. Nothing else needs to change. Sitemap inclusion, canonical URL,
   Open Graph, `Service` + `BreadcrumbList` + `FAQPage` schema, the CTA
   pair (Free Audit / Strategy Call, both using the *existing*
   `seo_audit_cta_click`/`strategy_call_click` events with an
   `industry` parameter), and the FAQ accordion are all automatic —
   they're the shared template, not something written per vertical.
4. Verify: `tsc --noEmit`, `eslint src`, `next build` (route count
   should increase by exactly 1), check the new page's rendered
   title/H1/canonical, check it appears in `sitemap.xml`, check mobile
   at 375px.

**Explicitly not done this phase, per the phase's own instructions:**
roofing, HVAC, plumbing, and law-firm pages were **not** built —
only the template and the one real towing implementation.

## Content-Ownership Rule (Prevents Cannibalization by Design)

Industry pages **describe who a page is for**; service pages
**describe what Elvic Rank does**. An industry page never re-explains
what Local SEO or Google Business Profile *is* — it links to the
service page that already owns that explanation, and instead focuses
on how that trade's customers search, what's specific to that
vertical, and why the general service applies to it. This is the
mechanism that keeps `/industries/towing-companies` from competing with
`/services/local-seo-google-business-profile` for the same keyword
intent — confirmed on this phase's implementation (see
`docs/phase-30-implementation.md` for the specific link/anchor-text
audit).

## Relationship to the Other Phase 30 Documents

- `docs/towing-seo-audit-framework.md` — the repeatable diagnostic used
  both to qualify towing prospects and to deliver value before a sale.
- `docs/elvic-rank-prospecting-machine.md` — the end-to-end
  find→qualify→audit→contact→close→onboard workflow, lead scoring,
  pipeline stages, prospect database spec, daily workflow, and
  acquisition math. Built to be niche-agnostic — swap "towing" for the
  next vertical without rebuilding the process.
- `docs/towing-outreach-templates.md` — towing-specific message
  templates for the outreach step of that workflow.
- `docs/phase-30-summary.md` — the executive report.

## Proof Strategy (No Fabrication)

Per the phase's explicit rules, this system does not, and will not,
invent case-study results, testimonials, reviews, rankings, or client
counts. The towing page's one reference to real work
(`/#case-studies`, Akanaby Logistics Inc.) states only what is
factually true and already published elsewhere on the site: website
design is complete, Google Business Profile work is in progress, and
no SEO campaign results are claimed. The towing SEO audit framework
itself doubles as a legitimate proof asset — a real, specific,
free diagnostic delivered to a prospect is evidence of competence
without requiring a fabricated result.
