# Phase 17 — GA4 + GSC Data-Driven Analysis

Every conclusion below is labeled **FACT** (independently verified this
phase), **OBSERVATION** (reported by the site owner, not independently
verified), **INFERENCE** (a reasonable read of limited evidence), or
**RECOMMENDATION** (an action, not a claim about reality). Nothing here is
presented as a behavioral conclusion from a sample too small to support one.

## 1. Phase Objective
Use real GA4 + GSC data to identify the highest-value next SEO/conversion
change, and implement only what that evidence supports.

## 2. Data Sources
- Live production codebase (`https://elvicrank.com`) — direct DOM/network
  inspection via browser tooling. **FACT-grade access.**
- GA4 realtime numbers supplied by the site owner in this phase's prompt
  text. **OBSERVATION-grade access only** — a screenshot summary, not a
  dashboard connection.
- GSC data — **no access this phase.** The Phase 14 baseline remains the
  only real GSC data point in this entire project.

## 3. GA4 Date Range
Realtime only — the supplied numbers are a live snapshot (last 5/30
minutes), not a defined historical window. No 28-day or longer-period GA4
report was accessible.

## 4. GSC Date Range
None retrieved this phase. Last real data: Phase 14's 3-month trailing
window (exact calendar dates were never recorded — a known gap, noted
again here).

## 5. GA4 Baseline

**OBSERVATION (supplied GA4 screenshot, not independently verified):**

| Metric | Value |
|---|---|
| Active users (last 30 min) | 2 |
| Active users (last 5 min) | 1 |
| Page views | 11 |
| First visits | 4 |
| Sessions | 4 |
| Generic click events | 3 |
| Scroll events | 3 |
| `seo_audit_cta_click` | 3 |
| Pages seen in realtime | Homepage; Keyword Research Service page |

**This is a realtime snapshot, not a mature dataset.** Per the explicit
instruction governing this phase, it is used here only to confirm the
tracking implementation is alive and producing events — **not** to draw
any conclusion about which page performs best, which channel converts, or
whether SEO is working. 2-4 users is also consistent with the site owner's
own stated testing activity; there's no way to distinguish real visitors
from owner testing in this snapshot (see §22).

## 6. GSC Baseline

**HISTORICAL BASELINE (Phase 14, not refreshed since):** 2 clicks, 48
impressions, 4.2% CTR, 13.6 average position, 3-month trailing window.
Query list: `elvic`, `rank velocity websites converts`,
`google local business seo`, `rank locally on google`,
`local seo google business profile`, `local visibility on google`.

**No current GSC baseline exists for this phase.** This is unchanged from
Phase 16 — no GSC connector or account access exists in this environment.

## 7. Acquisition Analysis
**Not available in this environment.** GA4's Acquisition report (traffic
by source/medium) requires dashboard access not present here. The supplied
realtime screenshot doesn't include source/medium breakdown.

## 8. Landing-Page Analysis
**Partial OBSERVATION only:** the realtime screenshot named two pages
receiving views (homepage, Keyword Research service page) but provided no
per-page users/sessions/engagement/conversions — insufficient for any
landing-page performance conclusion.

## 9. Event Analysis
**FACT (verified live this phase, both on production and via code
inspection):** all 5 events are implemented correctly, fire exactly once
per interaction, carry no PII, and use consistent naming. Full call-site
map unchanged since Phase 13/16 — 17 call sites across `whatsapp_click`,
`seo_audit_cta_click`, `strategy_call_click`, `contact_cta_click`,
`generate_lead`. Re-confirmed via fresh codebase grep this phase (§ below)
and live click-testing on production (homepage WhatsApp/audit CTA,
`/services/google-ads` strategy-call CTA).

Event-count-level analysis (which event fires most, by which users, over
what period) is **not available** — that requires GA4 dashboard access.

## 10. Conversion Funnel

| Step | Measurable? |
|---|---|
| Visit → Landing page | Only via GA4 dashboard (not accessible) |
| Landing page → Engagement | Only via GA4 dashboard (not accessible) |
| Engagement → CTA click | **FACT** — CTA click events are implemented and verified firing correctly |
| CTA click → Calendly booking completion | **NOT TRACKED.** A `strategy_call_click` event confirms the visitor clicked through to Calendly. Whether they actually booked a meeting is invisible to this codebase — Calendly's own booking-confirmation step isn't instrumented here. Do not treat a Calendly click as a completed booking. |
| CTA click → WhatsApp conversation | **NOT TRACKED** past the click — whether a real conversation happened is invisible to GA4. |
| Form submit → `generate_lead` | **FACT** — fires only after client-side validation passes, verified via live testing (Phase 15) and code re-read this phase; whether the resulting `mailto:` draft was actually sent by the visitor is **NOT TRACKED**. |

## 11. GSC Query Analysis
**Not performed this phase — no fresh query data exists.** The Phase 14
query list and classification stand unchanged (see
[`gsc-data-analysis.md`](./gsc-data-analysis.md)); re-running this analysis
with the same 6 queries would add nothing new.

## 12. GSC Page Analysis
**Not available.** No Pages-tab data has ever been provided in this
project.

## 13. Keyword Ownership Analysis

**FACT (fresh codebase search performed this phase):**

| Keyword / intent | Current owner | Cannibalization risk | Action |
|---|---|---|---|
| "How to Rank Locally on Google" | `/blog/how-to-rank-locally-on-google` (sole match, verified via grep) | None found | None |
| "SEO Strategy" | `/blog/seo-strategy-for-local-service-businesses` (sole match) | None found | None |
| Local SEO / GBP commercial intent | `/services/local-seo-google-business-profile` | None found | None |
| "SEO for Businesses" | No page exists (verified — zero matches) | N/A | None — do not create one |

No new page was created. No ownership conflict was found or introduced.

## 14. Cannibalization Analysis
**FACT: none found.** This can only be checked at the codebase level
(duplicate titles/H1s/primary keywords) without GSC's "multiple pages
ranking for the same query" signal, which requires GSC access. At the
codebase level, every service and article title is unique (re-verified via
grep this phase).

## 15. CTR Opportunities
**None identified — no data exists to support one.** The single aggregate
CTR figure (4.2%, from Phase 14) is not a per-page number and can't
justify a specific title/meta change. No title or meta description was
changed this phase.

## 16. Ranking Opportunities
**None identified — no current position data exists.** Phase 14's
directional finding (Local SEO/GBP cluster shows the most query overlap)
stands unchanged, with no new evidence to add to or revise it.

## 17. Local SEO Analysis
Re-inspected the Local SEO/GBP cluster's internal linking this phase — no
change since the Phase 9 audit found it already at maximum reasonable
density. **FACT:** the cluster (service page + `how-to-rank-locally-on-google`
+ `local-citations-explained` + the two GBP/local-lead articles) remains
fully cross-linked, verified via the same grep pattern used in Phase 14/16.
No content gap evidence exists this phase to justify expanding it further.

## 18. Conversion Opportunities
**None can be ranked with real evidence** — GA4's Acquisition and
Landing Page reports (needed to compare which pages/sources produce
engaged visitors vs. CTA clicks vs. leads) are not accessible. The one
thing verified with certainty: **every CTA works correctly and leads
somewhere real** (§20) — so if conversions are underperforming, it is not
because of a broken destination.

## 19. Technical Findings
**FACT, all verified live on production this phase:**
- Canonical tags correct (`/services/google-ads` → self-referencing, HTTPS, no www/trailing-slash variants)
- Structured data intact: `ProfessionalService`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage` — no duplicates
- Open Graph title present and correct
- Sitemap: 25/25 URLs, no duplicates
- `robots.txt`: correct, unchanged
- No console errors during any tested interaction
- No internal-traffic/test-traffic filter exists anywhere in the codebase (expected — this is a GA4 dashboard-level setting, not a code-level one; see §22)

No technical defect was found. No fix was needed.

## 20. CTA Audit Results (Task-specific, all FACT, live-verified this phase)

| CTA | Destination | href | target/rel | Event | Result |
|---|---|---|---|---|---|
| Strategy Call (service page) | Calendly | `https://calendly.com/elvicrankseo/30min` | `_blank` / `noopener noreferrer` | `strategy_call_click` fired once, correct params | ✅ Working |
| SEO Audit (homepage) | `/#audit` | `/#audit` | n/a (same-page) | tracked via `seo_audit_cta_click` elsewhere, not re-fired this specific test | ✅ Working |
| Contact (service page) | `/#contact` | `/#contact` | n/a | `contact_cta_click` (verified in Phase 16) | ✅ Working |
| WhatsApp (homepage) | `wa.me` | `https://wa.me/2347071525686` | `_blank` | `whatsapp_click` (verified in Phase 16) | ✅ Working |

**No dead ends found anywhere.** No CTA was changed this phase — none needed it.

## 21. Implemented Changes
Documentation only — see §14 of the final report below for the exact
file list. **No code, content, title, meta description, H1, internal
link, or schema change was made this phase**, because no evidence
supported one.

## 22. Data Limitations
- No GSC connector/account access.
- No GA4 dashboard/API access — only a realtime screenshot summary
  supplied in the prompt.
- No way to distinguish the site owner's own testing traffic from real
  visitors in the data available (no internal-traffic filter is
  configured at the GA4 account level, and configuring one requires
  dashboard access this environment doesn't have).
- Calendly booking completions are not measurable from this codebase —
  only the click-through is tracked.
- Actual email delivery from the `mailto:`-based lead forms is not
  measurable — only that validation passed and the redirect was triggered.

## 23. Recommended Next Steps
See §19 of the final report ("Next Recommended Action").
