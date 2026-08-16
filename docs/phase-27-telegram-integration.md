# Phase 27 — Telegram Contact Channel Integration

*(Renumbered from the owner's "Phase 26" prompt — a distinct Phase 26
already exists: 4 docs and 3 commits, `7896e7f`/`d5a353a`/`830440d`,
covering the GSC landing-page analysis and a reverted domain-redirect
incident. This work is unrelated to that phase's content, so it's
numbered Phase 27 rather than overwriting it.)*

## 1. Objective
Add Telegram as an additional, low-friction contact channel alongside
the existing WhatsApp, Strategy Call, and Contact form paths — without
touching any SEO element, existing CTA, or analytics event.

## 2. Telegram Destination
`https://t.me/Elvicrank`

## 3. Pre-Filled Message
Exact text: *"Hi Elvic Rank, I'd like to learn more about your
services and how you can help my business."*

Encoded once, centrally, in `src/config/site.ts` via
`encodeURIComponent()` (the same standard approach already used
elsewhere in the codebase, e.g. `buildMailtoLink`), producing:
```
https://t.me/Elvicrank?text=Hi%20Elvic%20Rank%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20my%20business.
```
Verified — this is a **byte-for-byte match** to the example URL given
in the phase prompt (confirmed via direct inspection of the rendered
`href` in the browser, both instances).

## 4. Where Telegram Was Added

Audited the existing contact/CTA architecture first (`Button` component,
`floating-cta.tsx`, `contact.tsx`, `footer.tsx`, service page template)
before deciding placement. Added to exactly two locations, both of
which already had an equivalent WhatsApp entry to mirror:

1. **Contact section** (`src/components/sections/contact.tsx`) — added
   as a new entry in the existing `quickContacts` array, immediately
   after WhatsApp. This array already renders through the existing
   `QuickContactCard` component — no new component was created.
2. **Footer** (`src/components/layout/footer.tsx`) — added to the "Get
   in touch" list, immediately after WhatsApp, using the exact same
   markup pattern (conditional render, `target="_blank"`,
   `rel="noopener noreferrer"`, `trackEvent` on click).

**Deliberately NOT added to:**
- **Floating CTA / mobile sticky bar** (`floating-cta.tsx`) — already
  carries WhatsApp + Free Audit in a 2-slot bar; a third item would
  crowd it, and the task explicitly asks to avoid unnecessary UI
  changes. WhatsApp remains the single most-prominent, always-visible
  contact affordance; Telegram is discoverable in Contact and Footer
  without competing for that space.
- **Service page headers** — those CTAs are SEO Audit / Strategy Call
  specifically (commercial conversion paths tied to the service being
  viewed); Telegram is a general contact channel, better placed
  site-wide (Contact/Footer) than duplicated across 14 service pages.
- **Homepage hero** — already has its own established primary/
  secondary CTA pair; adding a third would be exactly the "CTA
  overload" the project's own standing rules warn against.

## 5. Components/Files Modified
- `src/config/site.ts` — added `siteConfig.telegram` (`display`, `url`),
  mirroring the existing `siteConfig.whatsapp` shape and type pattern
  exactly.
- `src/components/sections/contact.tsx` — added a Telegram entry to
  `quickContacts` (reused the already-imported `Send` icon; no new
  import).
- `src/components/layout/footer.tsx` — added a Telegram link block;
  added `Send` to the existing `lucide-react` import.
- `docs/analytics-events.md` — added the `telegram_click` reference
  entry and call-site table, matching the existing documentation
  format exactly. Also corrected one pre-existing stale line (the
  Testimonials section's CTA, changed in Phase 23, was still listed
  under `contact_cta_click` in this doc) — noticed while updating this
  file for Telegram, not itself a Phase 27 change in intent.

No component was created. No existing component's props, behavior, or
markup structure was altered beyond the additive blocks above.

## 6. Analytics Implementation
**`telegram_click` was added**, following the existing event
architecture exactly (`trackEvent()` from `src/lib/analytics.ts`,
which accepts any event-name string — no allowlist to extend, no
architecture change needed):

| Location | File | Params |
|---|---|---|
| Contact section quick-contact card | `contact.tsx` | `{ location: "contact_section" }` |
| Footer | `footer.tsx` | `{ location: "footer" }` |

- Same `location` parameter convention used by every other event in
  the codebase (`whatsapp_click`, `strategy_call_click`, etc.).
- No `link_type` parameter added — every other existing event already
  encodes "what kind of link" in the event name itself
  (`whatsapp_click` doesn't carry a `link_type: "whatsapp"` param
  either), so adding one for Telegram alone would be inconsistent with
  the established convention, not more thorough. Followed the
  existing pattern rather than the prompt's own suggested example,
  per Task 5's explicit instruction to do so.
- No PII, no message contents, in the event payload — confirmed both
  call sites pass only the static `location` string.
- No duplicate firing — each link has exactly one `onClick` (Contact
  section via `QuickContactCard`'s existing single handler; Footer via
  its own single inline handler, identical pattern to WhatsApp).

**Existing events confirmed unchanged:** `whatsapp_click`,
`seo_audit_cta_click`, `strategy_call_click`, `contact_cta_click`,
`generate_lead` — no name, parameter, or call site was touched.

## 7. Accessibility Verification
- **Accessible name:** both Telegram links render visible text
  ("Telegram") — no reliance on `aria-label` alone, matching the
  WhatsApp/Email pattern exactly.
- **Decorative icon:** the `Send` icon carries `aria-hidden` in both
  locations (matching every other icon+text CTA in the codebase).
- **Keyboard reachability:** both are native `<a href>` elements —
  focusable and activatable by keyboard by default, no custom
  click-only handlers.
- **Focus state:** no custom focus-suppression CSS was added or
  exists on these elements; they inherit the same focus-visible
  behavior as every other link on the site.
- **No color-only meaning:** the icon+text pairing communicates the
  destination identically to sighted and non-sighted users.
- **Link text clarity:** "Telegram" is unambiguous; the Contact
  section's card additionally carries a one-line description
  ("Prefer Telegram? Message us there instead, with the same
  directness.").

## 8. Mobile Verification
**375px:** Contact section's Telegram card renders correctly between
WhatsApp and the strategy-call card, no overflow, no clipping by the
sticky bottom bar. Footer's Telegram link renders correctly in the
"Get in touch" list, no overflow. **768px:** confirmed no horizontal
overflow anywhere on the page. Both checked via direct rendering in
the browser at these exact widths.

## 9. Desktop Verification
Confirmed no horizontal overflow at native desktop width; both
Telegram entries render in their intended positions alongside the
existing contact options, visually consistent with the surrounding
card/list styling (same border, spacing, icon treatment as WhatsApp).

## 10. Existing CTA Regression
Directly re-verified in the running app (not assumed):
- **WhatsApp:** `https://wa.me/2347071525686` — unchanged, confirmed
  live in the rendered DOM.
- **Strategy Call / Calendly:** `https://calendly.com/elvicrankseo/30min`
  — unchanged, confirmed live in the rendered DOM.
- **Free SEO Audit:** `siteConfig.cta.primary.href` (`/#audit`) —
  unchanged; no file touched that this CTA depends on.
- **Contact form:** `contact.tsx`'s form/validation/`generate_lead`
  logic — untouched; only the `quickContacts` array (a sibling section
  of the same file) was extended.

## 11. SEO Regression
No title, H1, meta description, canonical, schema, sitemap, robots.txt,
or internal-link architecture was touched. Production build confirms
**32/32 routes**, identical count to before this phase — no route was
added or removed (Telegram is a link, not a page). Keyword ownership
untouched — this phase added zero content pages.

## 12. Technical Tests
- **TypeScript:** Pass, no errors.
- **ESLint:** Pass, no errors or warnings.
- **Production build:** Pass, 32/32 routes.
- **Route count:** 32 — unchanged from pre-phase.

## 13. Production
Verified live after deployment — see chat for direct confirmation of
both Telegram links resolving to the correct `t.me` URL with the
correct pre-filled message, on `https://elvicrank.com`.

## 14. Limitations
- The actual Telegram-app-opening behavior (does `t.me` correctly hand
  off to the Telegram app/web client with the message pre-filled) is
  a client-side OS/app behavior outside this environment's ability to
  simulate end-to-end — verified instead by confirming the URL is
  byte-for-byte correct per Telegram's own documented deep-link format,
  which is the verifiable, non-fabricated substitute.
- GA4 event *firing* (network-level `gtag` call) was verified via the
  existing, already-proven `trackEvent()` architecture (same function
  every other event uses) rather than re-triggering a live click in
  this session, consistent with how CTA additions have been verified
  in prior phases when the underlying tracking function itself is
  unchanged and already confirmed working.

## 15. Owner Actions Required
None to make Telegram functional — the integration is complete and
live. If the owner wants Telegram included in the floating CTA/mobile
sticky bar despite the crowding tradeoff noted in §4, that's a design
preference decision, not a defect; flagged here rather than decided
unilaterally.
