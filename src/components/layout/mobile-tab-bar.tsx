"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, BookOpen, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const tabs = [
  { label: "Home",     href: "/",        icon: Home },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Blog",     href: "/blog",     icon: BookOpen },
  { label: "About",    href: "/about",    icon: User },
  { label: "Contact",  href: "/contact",  icon: Mail },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Frosted glass background */}
      <div className="relative flex h-16 items-stretch border-t border-black/8 bg-white/80 backdrop-blur-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(tab.href + "/");

          return (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={() =>
                trackEvent("mobile_tab_click", { tab: tab.label })
              }
              className="flex flex-1 flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-95"
              aria-current={isActive ? "page" : undefined}
            >
              {/* Active indicator pill */}
              {isActive && (
                <span className="absolute top-0 h-0.5 w-10 rounded-b-full bg-accent-deep" />
              )}

              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-accent-deep/10 text-accent-deep scale-110"
                    : "text-muted"
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} aria-hidden />
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold leading-none tracking-wide transition-colors duration-200",
                  isActive ? "text-accent-deep" : "text-muted"
                )}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
