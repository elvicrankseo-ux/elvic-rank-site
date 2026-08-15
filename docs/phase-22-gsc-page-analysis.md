# Phase 22 — GSC Page & Country Analysis

## OBSERVED DATA

The owner supplied a GSC recording (page-level and country-level views).
Per the phase instructions, some individual numbers in that recording
were not clearly readable and are therefore **not** transcribed here as
metrics — only what's confidently observable is recorded.

**Pages visibly surfaced in the recording:**
- `/blog/how-google-business-profile-helps-local-businesses`
- `/blog/how-to-rank-locally-on-google`
- `/blog/seo-vs-google-ads`
- `/` (homepage)
- `/services/technical-seo-audit`
- `/blog/website-speed-and-google-rankings`

**Countries visibly surfaced in the recording:**
- United States
- United Kingdom
- Canada
- Pakistan
- Nigeria

**What was NOT confidently readable, and is therefore treated as
unavailable rather than estimated:** per-page clicks, impressions, CTR,
or position; per-country clicks, impressions, CTR, or position.

## INTERPRETATION

- The six pages above receiving visible GSC surfacing is consistent with
  — and directly corroborates — the Phase 21 query-cluster-to-page
  mapping. Three of the four Phase 21 blog/service owner pages appear
  here by name (`how-google-business-profile-helps-local-businesses`,
  `how-to-rank-locally-on-google`, `seo-vs-google-ads`,
  `technical-seo-audit`), plus the homepage and one additional article
  (`website-speed-and-google-rankings`) not previously confirmed as
  visible.
- `local-seo-google-business-profile` was not confirmed visible in this
  particular recording, which is notable given it's the primary
  commercial page for the largest query cluster — but its absence from
  one recording is not strong evidence of a problem; it may simply not
  have appeared in the visible portion of the recording, or may be
  receiving fewer impressions than the pages shown. **This is flagged
  as a data gap to watch, not treated as evidence the page is
  underperforming.**
- Country evidence: US/UK/Canada are consistent with the site's stated
  service area (`siteConfig.location.servingLine`: US, Canada, UK,
  Australia, Africa). Nigeria falls within "Africa," already covered.
  **Pakistan is the one country appearing in GSC that is not part of
  the site's stated service area.**

## RECOMMENDATION

- **On the missing GBP page confirmation:** request a clearer GSC
  export (see `phase-22-summary.md` §17) that includes
  `local-seo-google-business-profile` explicitly, rather than assuming
  either a problem or a non-problem from one partial recording.
- **On Pakistan:** no action recommended. A single non-target country
  showing organic impressions, at unknown (likely very low) volume, is
  not evidence of a positioning problem — Google surfaces sites globally
  regardless of stated service area, and nothing in the site's
  language, currency references, or claims is inaccurate for a visitor
  from any country (the site makes no false in-region promises; it
  states its actual serving line honestly). Revisit only if a future,
  clearer country breakdown shows Pakistan generating a meaningful and
  sustained share of clicks specifically, which isn't knowable from
  this recording.
- **On language/currency/schema:** audited per Task 13 — no currency
  references exist anywhere on the site (all commercial copy avoids
  quoting prices, by design, per FAQ: "We'll give you a clear, specific
  number after the free audit"), no country-specific claims exist that
  would be inaccurate for any of the five observed countries, and
  `getOrganizationSchema().areaServed` already matches the visible
  service-area copy exactly (reconfirmed this phase, unchanged since
  Phase 20's audit). No genuine issue found.

## IMPLEMENTED CHANGE

**None.** No country-specific page, currency change, schema change, or
positioning change was made. The evidence available doesn't show a
genuine problem — only an observation (Pakistan's presence) worth
monitoring, and a data gap (GBP page visibility unconfirmed in this
recording) worth requesting clearer evidence for next phase.
