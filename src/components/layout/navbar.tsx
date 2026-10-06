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
