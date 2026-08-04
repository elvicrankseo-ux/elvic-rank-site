import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { InstagramIcon, XIcon, TikTokIcon } from "@/components/ui/social-icons";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "X", href: siteConfig.social.x, Icon: XIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, Icon: TikTokIcon },
];

type SocialLinksProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function SocialLinks({ tone = "light", className }: SocialLinksProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${siteConfig.name} on ${label} (opens in a new tab)`}
          className={cn(
            "group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep focus-visible:ring-offset-2",
            isDark
              ? "border-ink-border text-muted-dark hover:border-accent hover:bg-ink-elevated hover:text-accent-bright focus-visible:ring-offset-ink"
              : "border-paper-border text-muted hover:border-accent-deep hover:bg-paper-muted hover:text-accent-deep focus-visible:ring-offset-background"
          )}
        >
          <Icon
            size={17}
            className="transition-transform duration-200 ease-out group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}
