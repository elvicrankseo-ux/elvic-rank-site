// mobile-side-drawer — v3
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Briefcase,
  BookOpen,
  User,
  Mail,
  X,
  ChevronRight,
  Globe,
  Camera,
  AtSign,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { label: "Home",     href: "/",        icon: Home },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Blog",     href: "/blog",     icon: BookOpen },
  { label: "About",    href: "/about",    icon: User },
  { label: "Contact",  href: "/contact",  icon: Mail },
];

const quickLinks = siteConfig.nav.slice(0, 4);
const resourceLinks = siteConfig.nav.slice(4);

const legalLinks = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap",          href: "/site-map" },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileSideDrawer({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => { onClose(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape + lock scroll
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const year = new Date().getFullYear();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm sm:hidden"
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 40 }}
            className="fixed inset-y-0 left-0 z-[70] flex w-[82vw] max-w-[310px] flex-col bg-paper sm:hidden overflow-hidden"
            style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
            aria-label="Mobile navigation drawer"
            role="dialog"
            aria-modal="true"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/5 shrink-0">
              <Link href="/" className="flex items-center gap-2.5" onClick={onClose}>
                <Image src="/logo.jpg" alt="" width={30} height={30} className="rounded-lg" />
                <span className="font-display text-lg font-bold text-foreground">
                  Elvic<span className="text-accent-deep">Rank</span>
                </span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* ── Scrollable body ── */}
            <div className="flex-1 overflow-y-auto">

              {/* Main Navigation */}
              <nav className="px-3 py-4">
                <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Navigation</p>
                <ul className="space-y-0.5">
                  {navItems.map((item, i) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(item.href + "/");
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.22 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => { trackEvent("mobile_drawer_click", { item: item.label }); onClose(); }}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200",
                            isActive ? "bg-accent/10 text-accent-deep" : "text-foreground hover:bg-black/5"
                          )}
                        >
                          <span className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                            isActive ? "bg-accent-deep text-white" : "bg-black/5 text-muted"
                          )}>
                            <Icon size={18} aria-hidden />
                          </span>
                          <span className="font-semibold text-sm">{item.label}</span>
                          {isActive && <ChevronRight size={14} className="ml-auto text-accent-deep" />}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mx-4 border-t border-black/5" />

              {/* Services Menu */}
              <div className="px-4 py-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">All Services</p>
                <div className="space-y-4">
                  {siteConfig.navServices.map((section) => (
                    <div key={section.group}>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-accent-deep mb-2 pl-2">
                        {section.group}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-foreground hover:bg-black/5 transition-all"
                            >
                              <ChevronRight size={13} className="text-accent/50 shrink-0" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-4 pb-4">
                <Button
                  href={siteConfig.cta.primary.href}
                  variant="accent"
                  size="md"
                  className="w-full"
                  onClick={onClose}
                  gaEvent="seo_audit_cta_click"
                  gaParams={{ location: "mobile_drawer" }}
                >
                  Get a Free Audit
                </Button>
              </div>

              <div className="mx-4 border-t border-black/5" />

              {/* Quick Links */}
              <div className="px-4 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Quick Links</p>
                <ul className="space-y-1">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-foreground/70 hover:bg-black/5 hover:text-foreground transition-all"
                      >
                        <ChevronRight size={13} className="text-accent/50 shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="px-4 pb-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Resources</p>
                <ul className="space-y-1">
                  {resourceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-foreground/70 hover:bg-black/5 hover:text-foreground transition-all"
                      >
                        <ChevronRight size={13} className="text-accent/50 shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mx-4 border-t border-black/5" />

              {/* Get in Touch */}
              <div className="px-4 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Get in Touch</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-foreground/70 hover:bg-black/5 hover:text-foreground transition-all"
                >
                  <Mail size={14} className="text-accent shrink-0" />
                  {siteConfig.email}
                </a>
                <p className="mt-3 px-2 text-xs leading-relaxed text-muted">
                  {siteConfig.location.servingLine}
                </p>
              </div>

              {/* Social Links */}
              <div className="px-4 pb-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Follow Us</p>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-muted hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Camera size={16} />
                  </a>
                  <a
                    href={siteConfig.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-muted hover:text-foreground transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <AtSign size={16} />
                  </a>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-muted hover:text-foreground transition-colors"
                    aria-label="TikTok"
                  >
                    <Globe size={16} />
                  </a>
                </div>
              </div>

              <div className="mx-4 border-t border-black/5" />

              {/* Legal */}
              <div className="px-4 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Legal</p>
                <ul className="space-y-1">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-xl px-2 py-2 text-xs text-muted hover:bg-black/5 hover:text-foreground transition-all"
                      >
                        <ExternalLink size={11} className="shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Copyright */}
              <div className="px-6 pb-6 pt-1">
                <p className="text-[11px] text-muted">
                  © {year} {siteConfig.legalName}. All rights reserved.
                </p>
              </div>

            </div>{/* end scrollable body */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
