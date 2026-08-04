"use client";

import { useId, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Send,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/config/site";
import { buildMailtoLink } from "@/lib/mailto";

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about what you need.";
  return errors;
}

const strategyCallMailto = buildMailtoLink(
  siteConfig.email,
  "Free Strategy Call Request",
  [
    "Hi Elvic Rank,",
    "",
    "I'd like to book a free strategy call. Here's some info to help you prepare:",
    "",
    "Business name:",
    "Website:",
    "Preferred days/times (with timezone):",
  ]
);

type QuickContact = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string | null;
  external?: boolean;
};

const quickContacts: QuickContact[] = [
  {
    icon: Mail,
    title: "Email us",
    description: "Best for detailed questions or sending over your website.",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "The fastest way to reach us directly.",
    href: siteConfig.whatsapp?.url ?? null,
    external: true,
  },
  {
    icon: CalendarCheck,
    title: "Book a free strategy call",
    description: "30 minutes, no pitch — just a plan for your rankings.",
    href: strategyCallMailto,
  },
];

function QuickContactCard({ icon: Icon, title, description, href, external }: QuickContact) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
        <Icon size={19} aria-hidden />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="mt-0.5 block text-sm text-muted">{description}</span>
      </span>
      {href && (
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-deep"
          aria-hidden
        />
      )}
    </>
  );

  if (!href) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-dashed border-paper-border bg-paper-muted p-4 opacity-70">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-muted-dark">
          <Icon size={19} aria-hidden />
        </span>
        <span className="flex-1">
          <span className="block text-sm font-medium text-foreground">{title}</span>
          <span className="mt-0.5 block text-sm text-muted">Coming soon</span>
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-start gap-4 rounded-2xl border border-paper-border bg-paper p-4 transition-colors hover:border-accent/40"
    >
      {content}
    </a>
  );
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const formId = useId();

  function handleChange(field: keyof FormState) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.location.href = buildMailtoLink(
      siteConfig.email,
      `Message from ${values.name} via elvicrank.com`,
      [`Name: ${values.name}`, `Email: ${values.email}`, "", values.message]
    );
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your rankings"
            description="Questions, partnership ideas, or you're just not sure where to start — reach out directly."
            align="left"
          />

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-paper-border bg-paper-muted p-5">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent-deep" aria-hidden />
            <p className="text-sm leading-relaxed text-muted">
              {siteConfig.location.servingLine}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {quickContacts.map((contact) => (
              <QuickContactCard key={contact.title} {...contact} />
            ))}
          </div>

          <div className="mt-10 border-t border-paper-border pt-6">
            <SocialLinks />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="h-fit rounded-2xl border border-paper-border bg-paper-muted p-6 sm:p-8"
        >
          {status === "sent" ? (
            <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                <Send size={20} aria-hidden />
              </span>
              <p className="font-display text-lg font-medium text-foreground">
                Opening your email client…
              </p>
              <p className="max-w-xs text-sm text-muted">
                If nothing happened, email us directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent-deep underline">
                  {siteConfig.email}
                </a>
                .
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setValues(initialState);
                  setStatus("idle");
                }}
                className="mt-2"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor={`${formId}-name`} className="text-sm font-medium text-foreground">
                  Full name
                </label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  className="mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-deep focus:outline-none"
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p id={`${formId}-name-error`} className="mt-1.5 text-xs text-accent-deep">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={`${formId}-email`} className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id={`${formId}-email`}
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  className="mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-deep focus:outline-none"
                  placeholder="jane@business.com"
                />
                {errors.email && (
                  <p id={`${formId}-email-error`} className="mt-1.5 text-xs text-accent-deep">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={`${formId}-message`} className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id={`${formId}-message`}
                  value={values.message}
                  onChange={handleChange("message")}
                  rows={4}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                  className="mt-1.5 w-full resize-none rounded-lg border border-paper-border bg-paper px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-deep focus:outline-none"
                  placeholder="What can we help with?"
                />
                {errors.message && (
                  <p id={`${formId}-message-error`} className="mt-1.5 text-xs text-accent-deep">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
                <Send size={16} aria-hidden />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
