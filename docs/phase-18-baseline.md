# Phase 18 — Foundational SEO + Measurement Baseline

Every claim below is labeled by category:
**A. CURRENT VERIFIED DATA** · **B. HISTORICAL DATA** · **C. REALTIME OBSERVATION** · **D. QUALITATIVE/CODEBASE FINDING** · **E. DATA THAT DOES NOT EXIST YET**

## 1. Website Status
**[D]** Elvic Rank is a newly-launched site (first content-complete deploy: 2026-08-11, Phase 12). 32 routes, 25 sitemap URLs, 14 service pages, 8 blog articles. GA4 confirmed live on production since between Phases 15–16. GSC connected since between Phases 13–14, but with minimal accumulated history.

## 2. GSC Current Baseline
**[E]** No current (fresh) GSC pull exists. No GSC connector/account access is available in this implementation environment — this has been true in every phase since GSC was mentioned (11, 14, 16, 17), and remains true here. **"Insufficient historical GSC data because the website/property is newly established"** is accurate, but the deeper reason this phase can't refresh it is environment access, not just site age.

## 3. GSC Historical Baseline
**[B]** The only real GSC data point in this project: **2 clicks, 48 impressions, 4.2% CTR, 13.6 average position**, 3-month trailing window, captured Phase 14. Query list: `elvic`, `rank velocity websites converts`, `google local business seo`, `rank locally on google`, `local seo google business profile`, `local visibility on google`. This is not current — treat it as a historical reference point only.

## 4. GA4 Current Baseline (28-day or longer)
**[E]** Not available. No GA4 dashboard/API access exists in this environment.

## 5. GA4 Historical Limitations
**[D]** The site has been live with GA4 active for a short period. Even with dashboard access, a 28/90-day report would still be immature — this is expected for a new property, not a defect.

## 6. Realtime Observations
**[C]** Supplied by the site owner (Phase 17): 2 active users (30 min) / 1 (5 min), 11 page views, 4 first visits, 4 sessions, 3 click events, 3 scroll events, 3 `seo_audit_cta_click`. Pages seen: homepage, Keyword Research service page. **This is not a historical baseline and is not used as one anywhere in this document.**

## 7. Event Inventory
**[A]** Verified fresh this phase via codebase search — 17 call sites, 5 event types, unchanged since Phase 13:

| Event | Call sites | Params |
|---|---|---|
| `whatsapp_click` | 4 (floating button, mobile sticky bar, footer, contact card) | `location` |
| `seo_audit_cta_click` | 7 (hero, navbar ×2, mobile sticky, services section, 2× per service page, blog post) | `location`, `service`/`post` where applicable |
| `strategy_call_click` | 2 (service page header, contact card) | `location`, `service` |
| `contact_cta_click` | 2 (service page footer, testimonials section) | `location`, `service` |
| `generate_lead` | 2 (contact form, free-audit form) | `form` |

No PII in any payload (verified by reading every call site). No duplicate firing (each interaction maps to exactly one `trackEvent()` call).

## 8. Key Events
**[E]** Whether any event is marked as a GA4 "Key Event" is an account-level setting not visible from this environment. **[D] Recommendation:** if not already configured, `generate_lead` and `whatsapp_click` are the two events that represent genuine business intent strongly enough to mark as Key Events; `strategy_call_click`, `seo_audit_cta_click`, and `contact_cta_click` are meaningful engagement signals but represent an intermediate step, not a completed action, so marking them as conversions would overstate what actually happened.

## 9. Conversion Measurement Limitations
**[A]** Verified by code architecture, not inferred:
- CTA click → **measurable** (the event fires, confirmed).
- Click → Calendly booking **completed** → **NOT measurable.** `strategy_call_click` confirms a click into Calendly; nothing reports back whether a meeting was actually booked.
- Click → WhatsApp **conversation** → **NOT measurable.** `whatsapp_click` confirms the link was clicked; the resulting conversation happens entirely off-site.
- Form submit → `generate_lead` → **measurable**, confirmed only after validation passes.
- `generate_lead` → **email actually sent** → **NOT measurable.** Both lead forms use a `mailto:` redirect (no backend), so GA4 sees the redirect trigger, not delivery confirmation.

## 10. Technical SEO Findings
**[A]** All verified fresh this phase (live browser + code inspection):
- Canonical URLs: correct on every page checked, self-referencing, HTTPS, no www/trailing-slash duplication (centralized via `buildMetadata()`).
- Structured data: `ProfessionalService`, `WebSite`, `Service`/`Article`, `BreadcrumbList`, `FAQPage` — present, no duplicates.
- Open Graph / Twitter metadata: present via `buildMetadata()`, includes explicit `images` array (a real bug fixed in an earlier phase — root layout's OG image doesn't auto-inherit to child pages with their own `openGraph` object).
- `robots.txt`: `Allow: /`, correct sitemap reference.
- Sitemap: 25/25 unique URLs, no query strings, no malformed entries.
- HTTPS: enforced (`siteConfig.url` is `https://`, no http variant exists anywhere).
- Image alt text: only 2 `<Image>` usages exist site-wide (the logo, in navbar + footer) — both correctly use `alt=""` since the logo sits next to visible "ElvicRank" text in the same link (avoids redundant screen-reader announcement — this is the *correct* pattern, not a defect).
- Lazy loading: handled automatically by `next/image` for every image except the navbar logo, which correctly uses `priority` (above-the-fold, should NOT lazy-load).
- 404 handling: verified live — a nonexistent URL returns real HTTP 404 with Next.js's default not-found page. No custom-branded 404 exists; this is a cosmetic gap, not a defect (**[D] optional future enhancement, not implemented — no evidence it matters yet**).
- Redirects: no redirect rules exist in `next.config.ts`; none are needed since no URL has ever changed in this project's history.
- Broken links: swept all 14 service pages + 8 blog articles' internal link targets this phase (22 URLs) — all return 200. Zero broken links found.

**No technical SEO defect was found.** Nothing required a fix in this category.

## 11. Indexation Findings
**[A]** Sitemap URLs cross-checked against actual app routes: all 14 services + 8 articles + homepage + blog index + site-map = 25, matches exactly. `/privacy` and `/terms` correctly `noindex`'d and correctly excluded from the sitemap (intentional, not a gap). No orphan pages — every service/article reachable from the homepage grid or blog index and present in the sitemap. No canonical conflicts found.

## 12. Keyword Ownership Findings
**[A]** Fresh codebase-wide search this phase: "How to Rank Locally on Google" and "SEO Strategy" each remain owned by exactly one page (their respective blog articles); Local SEO/GBP commercial intent remains solely owned by `/services/local-seo-google-business-profile`; no "SEO for Businesses" page exists. All 14 service titles are unique. **No cannibalization found.**

## 13. Content Opportunities (implemented this phase)
**[D]** A fresh service-page quality audit (see table below) found a genuine, evidence-based gap: **4 of 14 service pages were still on the generic template** (no `richContent`) while the other 10 had substantial pillar-style content built across Phases 2, 3, 4, and 10. This is a real architectural asymmetry, not a fabricated opportunity — the same pattern already validated 4 times previously.

| Page | Primary intent | Prior strength | Weakness found | Action | Priority |
|---|---|---|---|---|---|
| `/services/website-design` | Commercial | Solid FAQ/benefits copy | No body content, no internal links beyond related-cards | Added `richContent` (4 H2s) | P2 |
| `/services/meta-ads` | Commercial | Solid FAQ/benefits copy | Same | Added `richContent` (4 H2s) | P2 |
| `/services/off-page-seo` | Commercial | Solid FAQ/benefits copy, already differentiated from Link Building in copy (Phase 1) | Differentiation existed only in FAQ, not reinforced in body | Added `richContent` (4 H2s), reinforces the Link Building distinction | P2 |
| `/services/website-speed-optimization` | Commercial | Had a `relatedArticleSlug` link to its supporting blog article | Same generic-template thinness; **and** its one blog link would have silently disappeared if richContent were ever added without care | Added `richContent` (4 H2s), the blog link moved inline so it's preserved | P2 |

All 4 other service pages (`on-page-seo`, `content-strategy-seo`, `link-building`, `conversion-rate-optimization`, `seo-reporting-analytics`, `keyword-research`) were already enriched in Phase 10 — re-confirmed unchanged, no further action needed.

**No new blog articles were created.** No new service pages were created. This satisfies Phase 18's content-strategy rule: existing architecture was strengthened, not expanded with new pages, because the evidence (structural asymmetry across existing pages) pointed at the existing pages, not a content gap.

## 14. Internal Linking Findings
**[A]** The 4 newly-enriched pages add 11 new internal links total, every one contextual (embedded in a sentence discussing that exact topic, not appended for link-count):
- `website-design` → `website-speed-optimization`, `conversion-rate-optimization`, `on-page-seo`
- `meta-ads` → `google-ads`, `conversion-rate-optimization`, `seo-reporting-analytics`
- `off-page-seo` → `local-seo-google-business-profile`, `link-building`
- `website-speed-optimization` → `technical-seo-audit`, `/blog/website-speed-and-google-rankings`

All verified live (200, no self-links, no duplicates). Every other page's existing internal-linking architecture (built across Phases 1, 2, 8, 9) was re-audited and found to need no changes — no links were added elsewhere.

## 15. Implemented Changes
`src/data/services.ts` only — `richContent` added to `website-design`, `meta-ads`, `off-page-seo`, `website-speed-optimization`; the latter's `relatedArticleSlug` field removed since its rendering path (only used by the generic template) is superseded by the same link now embedded directly in `richContent`.

## 16. Recommended Next Actions
1. Real GSC/GA4 dashboard access — the single most important unblock for every future phase's ability to make evidence-backed SEO decisions (same recommendation as Phases 16/17, unchanged because the blocker is unchanged).
2. Once 30 days of real data exist, follow [`measurement-roadmap.md`](./measurement-roadmap.md).
3. Optional, not urgent: a custom-branded 404 page (cosmetic only — the default works correctly).
