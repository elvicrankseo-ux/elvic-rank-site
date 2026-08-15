# Phase 23 — Trust and Conversion-Clarity Implementation

## Decision basis

Phase 22 correctly found no evidence for a title rewrite, keyword expansion,
service-page rewrite, CTA-template change, or additional internal links. The
GSC evidence identifies pages and countries, not reliable page/query metrics;
the supplied GA4 page samples are too small for causal conclusions.

This phase therefore addresses two code-visible issues that do not depend on
missing performance data:

1. The homepage's testimonial area visually resembled three five-star client
   testimonials, even though its text labelled them as placeholders. That
   presentation is inconsistent with the site's stated policy of publishing
   only real proof.
2. The free-audit form uses the existing mailto handoff. The submit control did
   not explain that the visitor's email app opens, which is useful decision
   information before a visitor submits their details.

## Implemented changes

### Honest proof section

`src/components/sections/testimonials.tsx` retains its established
`#testimonials` anchor, but replaces placeholder rating, quotation, and avatar
UI with a truthful “Proof before promises” section. It explains that verified
results and testimonials will be published only when real and approved, and
links to the existing Current Projects section. No client quote, rating,
result, credential, or new tracked event was added.

### Free-audit expectation setting

`src/components/sections/free-audit.tsx` now states that form submission opens
the visitor's email app with their details pre-filled. It preserves the same
form fields, validation, mailto destination, CTA label, and `generate_lead`
event. The replacement copy also avoids implying a response time or outcome
that the site cannot prove.

## Deliberately not changed

- Service-page titles, H1s, rich content, FAQs, keyword ownership, and
  related-service links.
- Existing CTA labels, destinations, and the five established GA4 event names.
- Testimonials, case-study results, founder identity, phone number, address,
  links/backlinks, or customer claims.
- New country pages, articles, schema types, or analytics architecture.

## Data-dependent follow-up

Page/query GSC metrics and a larger, internally consistent GA4 export remain
necessary before making page-level SEO or behavioral optimizations. Conversion
completion (Calendly booking, WhatsApp conversation, and email reply) remains
untracked and requires an owner-approved architecture decision.
