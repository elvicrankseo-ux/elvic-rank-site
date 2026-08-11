"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/ui/social-links";
import { trackEvent } from "@/lib/analytics";

const quickLinks = siteConfig.nav.slice(0, 4);
const resourceLinks = siteConfig.nav.slice(4);

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/site-map" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/#top"
              className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight text-ink-foreground"
            >
              <Image
                src="/logo.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-lg"
              />
              Elvic<span className="text-accent-bright">Rank</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-dark">
              {siteConfig.description}
            </p>
            <SocialLinks tone="dark" className="mt-6" />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-dark">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-foreground/80 transition-colors hover:text-accent-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-dark">
              Resources
            </p>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-foreground/80 transition-colors hover:text-accent-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-accent-bright"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-dark">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-ink-foreground/80 transition-colors hover:text-accent-bright"
                >
                  <Mail size={14} aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.whatsapp && (
                <li>
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
                    className="flex items-center gap-2 text-sm text-ink-foreground/80 transition-colors hover:text-accent-bright"
                  >
                    <MessageCircle size={14} aria-hidden />
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-dark">
              {siteConfig.location.servingLine}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-dark">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted-dark transition-colors hover:text-accent-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
