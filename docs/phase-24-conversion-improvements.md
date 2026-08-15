# Phase 24 — Conversion Improvements

## Problems Discovered

1. **CTA ambiguity on all 14 service pages.** Every service page header
   shows two equal-weight buttons — "Book Your Free SEO Audit" and
   "Book a Free Strategy Call" — with zero copy distinguishing them.
   Phase 23 addressed this partially with a homepage-only FAQ entry,
   but a visitor who lands directly on a service page (the far more
   common entry point per GSC evidence, which shows service/blog pages
   receiving search visibility, not just the homepage) never sees that
   FAQ. This is a genuine, previously undocumented friction point at
   exactly the place the decision actually happens.

2. **Inconsistent mailto-honesty between the site's two lead forms.**
   Phase 23 added a "submitting opens your email app" disclaimer to the
   homepage free-audit form (`free-audit.tsx`). The general contact form
   (`contact.tsx`) — which uses the identical `mailto:` mechanism — had
   no equivalent disclaimer before submission, only an after-the-fact
   "Opening your email client…" message once already submitted. This is
   a real inconsistency in how transparently the same underlying
   mechanism is represented across the two forms.

## Changes Implemented

### 1. CTA-clarifying caption on the service page template
- **File:** `src/app/services/[slug]/page.tsx`
- **Change:** Added one sentence beneath the header CTA button pair,
  on all 14 service pages (shared template, not per-service data):
  *"Not sure which to pick? The audit is self-serve — send your
  details and we reply directly. The strategy call is a live 30-minute
  conversation if you'd rather talk it through first."*
- **Reasoning:** Directly answers Task 2's question #6 ("what is the
  difference between the available CTAs") at the exact point of
  decision, for every service page, not just the homepage.
- **Evidence:** Direct code inspection — both CTAs exist site-wide with
  no differentiation; this was true before this phase and confirmed by
  reading the shared template.
- **Verification:** TypeScript/ESLint clean, rendered correctly at
  375px/768px/desktop with no overflow (screenshots taken on
  `local-seo-google-business-profile`), production build 32/32.

### 2. Contact form mailto disclaimer
- **File:** `src/components/sections/contact.tsx`
- **Change:** Added *"Sending opens your email app with this message
  pre-filled — no backend, no automated reply."* beneath the "Send
  Message" button.
- **Reasoning:** Matches the honesty standard Phase 23 already
  established for the free-audit form; the contact form used the same
  mechanism without the same disclosure.
- **Verification:** Rendered correctly locally, `generate_lead` event
  and form handler logic untouched (only JSX text added).

### 3. SEO Audit page — "how will I receive results" FAQ
- **File:** `src/data/services.ts` (`seo-audit` service's `faqs` array)
- **Change:** Added *"How will I actually receive my audit results?"*
  answering that replies come directly by email or WhatsApp, with no
  gated PDF or automated sequence — and deliberately without inventing
  a turnaround-time promise that doesn't exist anywhere in the
  codebase.
- **Reasoning:** Task 6 explicitly asks whether the visitor understands
  "what happens after submitting" and "how they receive/respond to the
  audit" — the existing FAQ covered "is this the same as the homepage
  audit" and "do I have to sign up," but not this.
- **Verification:** Renders in the FAQ accordion, feeds
  `getFaqSchema()` automatically, no new component.

## Expected Business Impact

Framed honestly, per the phase's own instruction not to manufacture
projected percentages: these changes are **expected to reduce
decision friction** at three specific, previously-undocumented points
(which CTA to pick, what happens when a form is submitted, how audit
results actually arrive) — not claimed to increase conversion rate,
since no conversion-rate data exists yet to measure a before/after
against.

## Not Implemented (Considered and Rejected/Deferred)

- **Per-page CTA wording rewrites** (e.g., different button labels per
  service) — rejected again this phase; Phase 22 tested this against
  the only real evidence available (the two best-engaging pages use the
  uniform pattern) and no new evidence emerged to revisit it.
- **A "what happens during the strategy call" FAQ on all 14 individual
  service pages** — considered, but the new header caption (item 1
  above) already answers the core question in-context, more visibly
  than a buried accordion item would; adding 14 near-duplicate FAQ
  entries was judged lower-value than the caption and was not done.
- **Floating CTA / sticky bar copy changes** — reviewed
  (`floating-cta.tsx`); already clear ("WhatsApp" / "Free Audit"), no
  genuine ambiguity found.
