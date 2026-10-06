/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileSideDrawer } from "@/components/layout/mobile-side-drawer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
      if (window.scrollY < 100 && pathname === "/") setActiveHash("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.scrollY < 100 && pathname === "/") setActiveHash("");
            else setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const hashLinks = siteConfig.nav.filter(item => item.href.startsWith("/#"));
    const elements = hashLinks.map(item => document.getElementById(item.href.replace("/#", ""))).filter(Boolean);
    elements.forEach(el => el && observer.observe(el));
    if (pathname !== "/") setActiveHash("");
    return () => { elements.forEach(el => el && observer.unobserve(el)); };
  }, [pathname]);

  return (
    <>
      <header className="sticky top-4 z-50 w-full px-4 lg:px-8 transition-all duration-300">
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex h-14 max-w-7xl items-center justify-between px-5 transition-all duration-300 rounded-full",
            "bg-white/50 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
          )}
        >
          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-black/5 sm:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Logo — centered on mobile, left on desktop */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveHash("");
              }
            }}
            className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight text-foreground sm:ml-0 absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <Image src="/logo.jpg" alt="" width={32} height={32} className="rounded-lg" priority />
            Elvic<span className="text-accent-deep">Rank</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-2 lg:flex">
            {/* Services Dropdown */}
            <li className="relative group">
              <Link
                href="/services"
                className={cn(
                  "relative z-10 flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors text-muted hover:text-foreground",
                  pathname.startsWith("/services") && "text-accent-deep"
                )}
              >
                Services
                <span className="transition-transform duration-200 group-hover:rotate-180">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {pathname.startsWith("/services") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                    transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.5 }}
                  />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-[600px] rounded-2xl bg-white p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border border-paper-border flex gap-8">
                  {siteConfig.navServices.map((section) => (
                    <div key={section.group} className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent-deep mb-3">
                        {section.group}
                      </p>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block text-sm font-medium text-muted hover:text-accent-deep transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

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

          {/* Desktop CTA */}
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

          {/* Mobile right spacer to balance the hamburger */}
          <div className="h-9 w-9 sm:hidden" aria-hidden />
        </nav>
      </header>

      {/* Mobile side drawer */}
      <MobileSideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

