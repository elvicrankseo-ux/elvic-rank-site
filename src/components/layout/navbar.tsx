"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
      if (window.scrollY < 100 && pathname === "/") {
        setActiveHash("");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const hashLinks = siteConfig.nav.filter(item => item.href.startsWith("/#"));
    const elements = hashLinks.map(item => document.getElementById(item.href.replace("/#", ""))).filter(Boolean);

    elements.forEach(el => el && observer.observe(el));

    // Reset hash if we are on a different route without hashes
    if (pathname !== "/") {
      setActiveHash("");
    }

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 w-full px-4 lg:px-8 transition-all duration-300">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 transition-all duration-300 rounded-full",
          isScrolled
            ? "bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent border-transparent"
        )}
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

        <ul className="hidden items-center gap-2 lg:flex">
          {siteConfig.nav.map((item) => {
            const isHashLink = item.href.startsWith("/#");
            const isActive = isHashLink 
              ? activeHash === item.href.replace("/", "") && pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative z-10 block px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-accent-deep" : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                      transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
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
              {siteConfig.nav.map((item) => {
                const isHashLink = item.href.startsWith("/#");
                const isActive = isHashLink 
                  ? activeHash === item.href.replace("/", "") && pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-paper-muted",
                        isActive ? "text-accent-deep bg-accent/5" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
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
