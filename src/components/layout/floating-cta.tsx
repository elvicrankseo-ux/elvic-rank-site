"use client";

import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

/**
 * Site-wide floating contact affordance.
 * Mobile gets a full-width sticky bar with the Free Audit CTA.
 * Desktop has no floating button (WhatsApp removed).
 */
export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-paper-border bg-paper sm:hidden">
      <a
        href={siteConfig.cta.primary.href}
        onClick={() => trackEvent("seo_audit_cta_click", { location: "mobile_sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-medium text-accent-foreground"
      >
        <Send size={16} aria-hidden />
        Get a Free Audit
      </a>
    </div>
  );
}
