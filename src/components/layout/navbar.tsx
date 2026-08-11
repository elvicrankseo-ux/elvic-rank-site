"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-paper-border shadow-[0_1px_0_0_rgba(15,17,21,0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <Link
          href="/#top"
          className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight text-foreground"
        >
          <Image
            src="/logo.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          Elvic<span className="text-accent-deep">Rank</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            href={siteConfig.cta.primary.href}
            size="sm"
            variant="accent"
            gaEvent="seo_audit_cta_click"
            gaParams={{ location: "navbar" }}
          >
            {siteConfig.cta.primary.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-paper border-t border-paper-border px-6 py-8"
          >
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-paper-muted"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
              gaEvent="seo_audit_cta_click"
              gaParams={{ location: "navbar_mobile" }}
              className="mt-6 w-full"
            >
              {siteConfig.cta.primary.label}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
