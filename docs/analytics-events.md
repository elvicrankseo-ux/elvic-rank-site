# Analytics Events

Every event listed here is implemented in the codebase today and fires via
`trackEvent()` in [`src/lib/analytics.ts`](../src/lib/analytics.ts) — either
directly, or through the `Button` component's `gaEvent` prop
([`src/components/ui/button.tsx`](../src/components/ui/button.tsx)), which
centralizes tracking for most CTAs instead of duplicating `trackEvent()`
calls at every call site.

All events are no-ops until `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured —
see [`ga4-setup.md`](./ga4-setup.md). No event payload includes personal
data (name, email, phone, or message contents) — only static context like
which section of the page the interaction happened in.

## Event Reference

| Event | Purpose | Trigger | Type |
|---|---|---|---|
| `generate_lead` | Measures successful lead submission | Successful submission of either lead form (validation must pass first) | Conversion |
| `whatsapp_click` | Measures WhatsApp contact intent | Click on any WhatsApp link | Conversion |
| `telegram_click` | Measures Telegram contact intent | Click on any Telegram link | Conversion |
| `strategy_call_click` | Measures strategy-call intent | Click on a "Book a Free Strategy Call" CTA | Engagement |
| `seo_audit_cta_click` | Measures free-audit CTA engagement | Click on a "Book Your Free SEO Audit" CTA | Engagement |
| `contact_cta_click` | Measures general contact-intent engagement | Click on a "Contact Us" / contact-section CTA | Engagement |

## Call Sites

### `generate_lead`
| Location | File | Params |
|---|---|---|
| Homepage free-audit form | `src/components/sections/free-audit.tsx` | `{ form: "free_audit" }` |
| Homepage contact form | `src/components/sections/contact.tsx` | `{ form: "contact" }` |

Fires only after client-side validation passes (`if (Object.keys(nextErrors).length > 0) return;` runs first) — a failed or empty submission never fires this event. Because both forms fall back to a `mailto:` redirect (no real form backend exists yet — see the `TODO(elvic)` comments in both files), this measures submission *intent*, not confirmed email delivery. The form UI swaps to a "sent" confirmation view immediately after, which naturally prevents an accidental double-fire from the same form instance.

### `whatsapp_click`
| Location | File | Params |
|---|---|---|
| Floating WhatsApp button (desktop/tablet) | `src/components/layout/floating-cta.tsx` | `{ location: "floating_button" }` |
| Mobile sticky bar | `src/components/layout/floating-cta.tsx` | `{ location: "mobile_sticky_bar" }` |
| Footer | `src/components/layout/footer.tsx` | `{ location: "footer" }` |
| Contact section quick-contact card | `src/components/sections/contact.tsx` | `{ location: "contact_section" }` |

All four point at the same `siteConfig.whatsapp.url` — single source of truth, no hard-coded duplicates. `onClick` never calls `preventDefault()`, so a tracking failure (or GA4 being unconfigured) can never block the WhatsApp link from opening.

### `telegram_click`
| Location | File | Params |
|---|---|---|
| Contact section quick-contact card | `src/components/sections/contact.tsx` | `{ location: "contact_section" }` |
| Footer | `src/components/layout/footer.tsx` | `{ location: "footer" }` |

Added Phase 27 as an additional, low-friction contact channel alongside
WhatsApp. Both point at the same `siteConfig.telegram.url` (a pre-built
`t.me` deep link with the pre-filled message already URL-encoded — see
`src/config/site.ts`). Deliberately **not** added to the floating
CTA/mobile sticky bar (already WhatsApp + Free Audit, and a third slot
would crowd it) — see `docs/phase-27-telegram-integration.md` for the
placement reasoning.

### `strategy_call_click`
| Location | File | Params |
|---|---|---|
| Service page header ("Book a Free Strategy Call") | `src/app/services/[slug]/page.tsx` | `{ location: "service_header", service: <slug> }` |
| Contact section quick-contact card ("Book a free strategy call") | `src/components/sections/contact.tsx` | `{ location: "contact_section" }` |

### `seo_audit_cta_click`
| Location | File | Params |
|---|---|---|
| Hero primary CTA | `src/components/sections/hero.tsx` | `{ location: "hero" }` |
| Homepage Services section closing CTA | `src/components/sections/services.tsx` | `{ location: "services_section" }` |
| Navbar (desktop) | `src/components/layout/navbar.tsx` | `{ location: "navbar" }` |
| Navbar (mobile menu) | `src/components/layout/navbar.tsx` | `{ location: "navbar_mobile" }` |
| Mobile sticky bar ("Free Audit") | `src/components/layout/floating-cta.tsx` | `{ location: "mobile_sticky_bar" }` |
| Service page header | `src/app/services/[slug]/page.tsx` | `{ location: "service_header", service: <slug> }` |
| Service page closing CTA | `src/app/services/[slug]/page.tsx` | `{ location: "service_footer", service: <slug> }` |
| Blog post closing CTA | `src/app/blog/[slug]/page.tsx` | `{ location: "blog_post", post: <slug> }` |

### `contact_cta_click`
| Location | File | Params |
|---|---|---|
| Service page closing CTA ("Contact Us") | `src/app/services/[slug]/page.tsx` | `{ location: "service_footer", service: <slug> }` |

*(Correction: this table previously listed the homepage Testimonials
section's CTA here. Phase 23 changed that button from "Share your
experience" → `#contact` to "See Current Work" → `#case-studies`,
deliberately without an event — its destination and purpose changed to
internal navigation, not a contact action, and no existing event
fits "viewed case studies." Corrected here, noticed while updating this
doc for Phase 27's Telegram addition — not itself a Phase 27 change.)*

## Deliberately not tracked

A couple of buttons exist that are **not** wired to any event, on purpose —
they aren't conversion or contact-intent actions, so inventing a new event
for them isn't warranted:

- "View All Articles" (`src/components/sections/blog.tsx`) — a browse/navigation link, not a conversion signal.
- "Send another message" / form-reset buttons in `contact.tsx` / `free-audit.tsx` — a UI reset action, not user intent toward the business.
- Email (`mailto:`) links — no event exists for this today; add `email_click` only if a real future need for it is identified, not speculatively.

## Phase 13 audit note

This documentation reflects a fresh Phase 13 audit of every `trackEvent()`
and `gaEvent` call site in the codebase. Two real gaps were found and fixed
during that audit — the homepage Services-section CTA and the Testimonials
"Share your experience" CTA were previously unwired. No duplicate-firing
events, no PII in any payload, and no broken click handlers were found.
