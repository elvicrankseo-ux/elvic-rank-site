/**
 * Thin GA4 event-tracking helper. Every call is safe to make unconditionally
 * — if GA4 hasn't been configured (no NEXT_PUBLIC_GA_MEASUREMENT_ID) or
 * hasn't finished loading yet, this fails silently instead of throwing, so
 * conversion tracking can never break the site.
 */
type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  try {
    window.gtag("event", eventName, params);
  } catch {
    // Never let a tracking failure affect the actual user action it's
    // attached to (a CTA click, a form submit, etc.).
  }
}
