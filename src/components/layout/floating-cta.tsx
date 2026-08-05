import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Site-wide floating contact affordance. Desktop/tablet gets a round
 * WhatsApp button in the corner; mobile gets a full-width sticky bar
 * instead (more useful on a narrow screen, and avoids showing both at
 * once). Renders nothing if WhatsApp isn't configured, consistent with
 * how Contact handles the same "coming soon" case.
 */
export function FloatingCta() {
  if (!siteConfig.whatsapp) return null;

  return (
    <>
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp (opens in a new tab)`}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-ink/20 transition-transform duration-200 hover:scale-105 sm:flex"
      >
        <MessageCircle size={24} aria-hidden />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-paper-border bg-paper sm:hidden">
        <a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-foreground"
        >
          <MessageCircle size={17} aria-hidden />
          WhatsApp
        </a>
        <a
          href={siteConfig.cta.primary.href}
          className="flex flex-1 items-center justify-center gap-2 border-l border-paper-border bg-accent py-3.5 text-sm font-medium text-accent-foreground"
        >
          <Send size={16} aria-hidden />
          Free Audit
        </a>
      </div>
    </>
  );
}
