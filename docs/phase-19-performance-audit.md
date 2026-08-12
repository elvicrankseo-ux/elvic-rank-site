# Phase 19 — Performance Audit

Every finding is labeled **MEASURED** (a real number captured via the
browser's Navigation/Resource Timing APIs or direct code inspection),
**OBSERVED** (confirmed via live DOM/network inspection but not a precise
metric), **INFERRED** (a reasonable conclusion from measured evidence), or
**NOT MEASURABLE** (genuinely unavailable in this environment).

## 1. Executive Summary
No Lighthouse or PageSpeed Insights tool is available in this environment.
Using the browser's real Navigation Timing and Resource Timing APIs
instead (genuine measured data, not a substitute score), the site is
already lean: ~444KB of core resources on the homepage, fast TTFB, no
render-blocking third-party scripts beyond GA4. One real, confirmed issue
was found and fixed: an entirely unused font (Geist Mono) was being loaded
on every page. No other performance defect was found — no other code
change was made.

## 2. Current Performance State
**MEASURED** (via `performance.getEntriesByType('resource')` and
`performance.getEntriesByType('navigation')`, homepage, production, single
clean page load in a fresh tab):

| Metric | Value |
|---|---|
| Total resource count | 20 |
| Total encoded transfer (fonts+JS+CSS+image) | ~454,740 bytes (~444 KB) — **before** the font fix |
| Font weight | 173,196 bytes across 3 files — **before** the fix |
| JS weight (10 script chunks) | ~264,217 bytes encoded |
| CSS weight | 7,744 bytes encoded (37,126 decoded) |
| Logo image | 436 bytes (properly optimized via `next/image`, 32×32 @ q=75) |
| TTFB | 254 ms |
| DOMContentLoaded | 328 ms |
| `load` event | 840 ms |

After the font fix (verified locally, same methodology): font weight drops
to 150,088 bytes across 2 files — **a measured ~23KB reduction on every
single page load.**

## 3. Measurement Limitations
No Lighthouse/PageSpeed tool exists in this environment. No CrUX
(Chrome User Experience Report) field-data access exists either.

## 4. Lighthouse Availability Status
**NOT AVAILABLE.** Searched for a performance-testing tool in this
environment; none exists. Per the honesty rule governing this phase, no
Lighthouse score of any kind is reported.

## 5. Core Web Vitals Measurement Status
**LCP, INP, CLS, TBT, FCP, Speed Index: NOT MEASURABLE in this
environment.** No real-user-monitoring or synthetic Lighthouse tool is
available. What *is* measured instead (TTFB, DOMContentLoaded, load event
— via the standards-based Navigation Timing API) is reported above as a
genuine substitute data point, not presented as a Core Web Vital.
CLS specifically could not be measured even retroactively, since a
`PerformanceObserver` for `layout-shift` must be attached before the page
finishes loading to catch real shifts — not something that can be
retrofitted onto an already-loaded page from this environment.

## 6. Resource Audit
See §2. All resource weight was captured via `encodedBodySize` (actual
over-the-wire bytes), not `transferSize` (which read near-zero due to
browser cache reuse from earlier navigation in this same session — noted
and worked around, not silently reported as if it were a true cold-load
number).

## 7. JavaScript Audit
**OBSERVED + MEASURED:** 10 JS chunks, ~264KB encoded total. This is
Next.js's own code-splitting (React, Next runtime, Framer Motion, and
page-specific logic) — not unusually bloated for a Next.js 16 + Framer
Motion site. **No single oversized or duplicated script was found.**
Framer Motion (used extensively for the site's animation-driven design
across every phase of this project) is a deliberate, established design
choice — removing it would be a major visual regression, not a
performance bug, and was correctly out of scope ("do not alter... unless
a genuine technical problem requires it").

## 8. CSS Audit
Single compiled Tailwind stylesheet, 7.7KB encoded — no bloat found, no
action needed.

## 9. Image Audit
Only 2 `<Image>` usages exist site-wide (the logo, in the navbar and
footer) — both already use `next/image` correctly (explicit width/height,
`priority` on the above-the-fold navbar instance, default lazy-loading
behavior everywhere else). **No image optimization issue found.**

## 10. Font Audit
**Issue found and fixed.** 3 font families were registered
(`Geist`, `Geist_Mono`, `Fraunces`) via `next/font/google`, but a
codebase-wide search confirmed `Geist_Mono` / `font-mono` /
`var(--font-geist-mono)` was never applied to any actual element —
imported and loaded on every page for zero visual benefit. Removed (see
§16). The other two fonts are both genuinely used (`Geist` for body text,
`Fraunces` for display/headings) and are already self-hosted via
`next/font` — the correct, performance-optimal loading strategy (no
external request to fonts.googleapis.com, automatic `font-display`
handling).

## 11. Third-Party Script Audit
**OBSERVED:** exactly one third-party script — Google Analytics
(`googletagmanager.com/gtag/js`), loaded via `next/script` with
`strategy="afterInteractive"` (does not block initial render). No other
third-party scripts exist. This is already the correct, minimal-impact
loading strategy for analytics.

## 12. Next.js Architecture Audit
**OBSERVED:** all service and blog pages use `generateStaticParams` +
static generation (confirmed via build output: `●` SSG markers on every
dynamic route). `Button` and a handful of interactive components are
correctly scoped `"use client"` (required for `onClick`/analytics
tracking — a real Server/Client boundary issue was found and fixed in an
earlier phase, not reintroduced here). No unnecessary client-component
boundaries were found this phase. Metadata generation (`generateMetadata`)
runs per-page as expected. No caching misconfiguration found.

## 13. Issues Found

| # | Issue | Severity | Evidence |
|---|---|---|---|
| 1 | Unused `Geist_Mono` font loaded on every page | Low-Medium (real, measured ~23KB/page, zero functional impact) | Codebase-wide search: zero usages of `font-mono` or `var(--font-geist-mono)` in any component |
| 2 | 6 unused public assets (`logo.png` + 5 default create-next-app SVG icons) | Cosmetic/repo-hygiene only — confirmed zero references, so they were never fetched by any real page and had zero effect on any page's performance | Codebase-wide search: zero references anywhere in `src/` |

No other issues — technical, resource, or architectural — were found.

## 14. Severity
Both issues above are low-severity by nature (neither was causing a
user-visible problem); both were fixed because the fix was small, safe,
and unambiguously evidence-backed — not because of urgency.

## 15. Evidence
See §2, §10, §13 — all findings are grounded in direct codebase search
results and live Resource Timing API measurements, cited inline above.

## 16. Changes Implemented

| # | Problem | Evidence | Change | Expected benefit | Risk | Verification |
|---|---|---|---|---|---|---|
| 1 | Unused Geist Mono font | Zero usages found codebase-wide | Removed `Geist_Mono` import/instantiation from `src/app/layout.tsx`; removed the dangling `--font-mono` mapping in `src/app/globals.css` | ~23KB less transferred per page load (measured before/after) | Very low — confirmed no element referenced it | `tsc`/`eslint`/build all pass; live-verified body text still renders in Geist, headings still render in Fraunces, no visual change |
| 2 | 6 unused public assets | Zero references found codebase-wide | Deleted `public/logo.png`, `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` | Smaller deployment artifact, less confusing repo — no page-load-time benefit since these were never fetched by any real page | None — confirmed unreferenced | Build succeeds; live logo (`logo.jpg`, the one actually used) still renders correctly |

## 17. Changes Deliberately NOT Implemented
- Removing or lazy-loading Framer Motion — no evidence of a problem, would be a major visual regression, explicitly out of scope.
- Any title/meta/H1/content change — outside this phase's scope, no evidence justified one.
- Any new resource hints (`preload`/`prefetch`) — no evidence of a render-blocking resource that would benefit; Next.js already handles font preloading automatically via `next/font`.
- Any caching configuration change — Vercel's default static-generation caching for this fully-SSG site is already close to optimal; no evidence of a misconfiguration.

## 18. Mobile Findings
No horizontal overflow at 375px on the homepage (re-verified after the
font fix). GA4 remained active. No layout shift observed from the font
change (Geist Mono was never rendered, so removing it cannot shift any
visible layout).

## 19. Analytics Regression
GA4 script, `window.gtag`, and `dataLayer` all confirmed intact after the
change (verified live, both locally and — see production verification —
on production). No event was renamed. No PII introduced.

## 20. Technical SEO Regression
Sitemap: 25/25, unchanged. Robots.txt: unchanged, correct. Canonical URLs:
unchanged. Schema: unchanged. No broken internal links introduced (the
font/asset changes touch no content or links).

## 21. Production Verification
See the final Phase 19 report for live production confirmation.

## 22. Recommended Next Steps
- Once real GSC/GA4 data exists, revisit whether a genuine field-data
  (CrUX) Core Web Vitals picture becomes available — that would be the
  first opportunity for real LCP/INP/CLS numbers, since no synthetic
  Lighthouse tool exists in this environment and none is expected to.
- No further performance work is indicated by current evidence — this
  phase's own rule applies: "no code changes were necessary" is an
  acceptable outcome, and largely was, apart from the two small confirmed
  fixes above.
