import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

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
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href) {
    const { href, ...rest } = props;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...rest}>
          {props.children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {props.children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {props.children}
    </button>
  );
}
