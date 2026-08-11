"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const variants = {
  primary:
    "bg-ink text-paper hover:bg-accent hover:text-accent-foreground",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-bright",
  outline:
    "border border-paper-border text-foreground hover:border-accent-deep hover:text-accent-deep",
  "outline-dark":
    "border border-ink-border text-ink-foreground hover:border-accent hover:text-accent-bright",
  ghost: "text-foreground hover:text-accent-deep",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  /**
   * Fires a GA4 event (via trackEvent) on click, in addition to whatever
   * onClick the caller also passes — centralizes CTA tracking here instead
   * of duplicating trackEvent() calls at every call site. No-op if GA4
   * isn't configured.
   */
  gaEvent?: string;
  gaParams?: Record<string, string | number | boolean>;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button({
  variant = "primary",
  size = "md",
  className,
  gaEvent,
  gaParams,
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = cn(base, variants[variant], sizes[size], className);

  function withTracking<E extends MouseEvent<HTMLElement>>(
    onClick?: (event: E) => void
  ) {
    if (!gaEvent) return onClick;
    return (event: E) => {
      trackEvent(gaEvent, gaParams);
      onClick?.(event);
    };
  }

  if (props.href) {
    const { href, onClick, ...rest } = props;
    const clickHandler = withTracking(onClick);
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} onClick={clickHandler} {...rest}>
          {props.children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} onClick={clickHandler} {...rest}>
        {props.children}
      </a>
    );
  }

  const { onClick, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} onClick={withTracking(onClick)} {...rest}>
      {props.children}
    </button>
  );
}
