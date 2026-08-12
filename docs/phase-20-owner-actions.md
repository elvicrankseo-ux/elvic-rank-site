# Phase 20 — Owner Execution Checklist

Everything below requires the site owner's own credentials, judgment, or
participation — none of it can or should be done from this environment.
Check items off as they're completed; this file is meant to be a living
checklist, not a one-time report.

## A. Google Business Profile
- [ ] **P0** — Decide on a phone number (see §B) before starting GBP setup, since most verification paths expect one.
  *Why it matters:* GBP is the single highest-priority off-page asset for a local/service-area agency.
  *What's needed:* A real business phone number.
  *Where:* business.google.com
  *Expected outcome:* A verified, live GBP listing configured as a service-area business (no public address).
- [ ] **P0** — Claim/create the listing using the exact values in `docs/business-identity-reference.md`.
- [ ] **P1** — Complete all 13 checklist items from `docs/phase-20-off-page-execution.md` §A.
- [ ] **P1** — Verify the listing (Google will require phone/video/postcard verification for a service-area business).
- [ ] **P2** — Once verified, begin ongoing maintenance (posts, Q&A, review responses) — this is literally what `/services/local-seo-google-business-profile` describes doing for clients; practicing it on the agency's own listing is good proof-of-work too.

## B. Phone Decision
- [ ] **P0** — Decide: get a real business number (even a VOIP/Google Voice number is legitimate), or formally commit to WhatsApp/form-only contact indefinitely.
  *Why it matters:* Blocks GBP setup and several directory categories; also a real, previously-flagged conversion-path gap (a site promising "more calls" with no phone).
  *What's needed:* A decision, then (if getting a number) the actual number.
  *Where:* N/A — business decision.
  *Expected outcome:* Either `siteConfig.phone` gets populated in a future phase, or the decision to stay WhatsApp/form-only is confirmed as permanent.

## C. Business Identity
- [ ] **P1** — Confirm the exact legal business name if it differs from "Elvic Rank" as used on the site (relevant for any formal directory/registration).
- [ ] **P2** — Confirm the exact GBP category wording against Google's live category list (cannot be verified from this codebase).

## D. Directory Accounts
- [ ] **P1** — Research and sign up for 2-3 Tier 1 digital-marketing/agency directories (see `phase-20-off-page-execution.md` §B for the quality bar — do not use directories that sell links).
- [ ] **P2** — Evaluate Tier 2 general business directories once Tier 1 is done.

## E. Founder Identity
- [ ] **P1** — Decide whether to introduce a named founder/expert identity on the site.
  *Why it matters:* Unlocks guest-contribution and expert-commentary opportunities that are currently completely closed off.
  *What's needed:* Real name, role, experience, specialties — see the template in `phase-20-off-page-execution.md` §C.
  *Where:* Would require a future website content phase to add.
  *Expected outcome:* A real, credible author/founder presence.

## F. Social / Entity Profiles
- [ ] **P2** — Decide whether to add LinkedIn (likely the highest-value missing profile for a B2B agency) and/or Facebook.
- [ ] **P2** — If added, update `siteConfig.social` in a future code change so schema/footer stay consistent (do not just create the profile without wiring it in).

## G. Outreach
- [ ] **P1** — Review the researched target categories in `phase-20-off-page-execution.md` §G and the templates in `off-page-outreach-templates.md`.
- [ ] **P1** — Identify 3-5 specific, real, currently-active targets per category (this requires live research the owner or a future phase with live web access should do — this phase intentionally did not name unverified specific targets).
- [ ] **P2** — Send personalized outreach using the templates as a starting point, never unedited.

## H. Case Studies
- [ ] **P2** — Once the Akanaby Logistics SEO campaign produces real, measurable results, update the case study with real numbers (never before that point).
- [ ] **P2** — Consider the case-study/reference outreach template (`off-page-outreach-templates.md` §5) once results exist and the client is willing.

## I. Reviews / Testimonials
- [ ] **P2** — As real client relationships mature, collect real, genuine testimonials/reviews — never fabricate one in the meantime. The site currently has zero testimonials/reviews, which is honest but also a real trust-signal gap worth closing organically over time.

## J. Measurement
- [ ] **P0** — Continue supplying real GSC/GA4 data (screenshots or exports) to future phases — this remains the single most-repeated blocker across Phases 11–19.
- [ ] **P1** — If/when Calendly, WhatsApp, or email completion tracking becomes a priority, that requires a future architecture decision (e.g. a Calendly webhook) — flagged, not built speculatively.

---

**Priority key:** P0 = do immediately, P1 = next, P2 = later. See the
final Phase 20 report for the single highest-leverage recommendation.
