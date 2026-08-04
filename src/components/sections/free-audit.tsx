"use client";

import { useId, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SearchCheck, MapPinCheck, ListChecks, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildMailtoLink } from "@/lib/mailto";

const included = [
  {
    icon: SearchCheck,
    text: "Technical health check — crawl errors, Core Web Vitals, indexation issues",
  },
  {
    icon: MapPinCheck,
    text: "Local pack & Google Business Profile visibility snapshot",
  },
  {
    icon: ListChecks,
    text: "3 prioritized quick-wins you could implement this week",
  },
];

type FormState = {
  name: string;
  email: string;
  website: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  website: "",
  phone: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (!values.website.trim()) errors.website = "Please enter your website URL.";
  return errors;
}

/**
 * TODO(elvic): no email/form backend is wired up yet. This falls back to
 * a mailto: link (works with zero configuration on Vercel) — swap for a
 * real endpoint (Formspree / a Resend-backed route handler) once you've
 * set one up, and this component won't need to change much beyond the
 * submit handler.
 */
function buildMailto(values: FormState) {
  return buildMailtoLink(
    siteConfig.email,
    `Free SEO Audit Request — ${values.website || values.name}`,
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Website: ${values.website}`,
      values.phone ? `Phone: ${values.phone}` : null,
      values.message ? `\nBiggest SEO challenge:\n${values.message}` : null,
    ]
  );
}

export function FreeAudit() {
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

    window.location.href = buildMailto(values);
    setStatus("sent");
  }

  return (
    <section id="audit" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Free SEO audit"
            title="See exactly where you're losing rankings — free"
            description="No generic PDF. A real look at your site, your competitors, and the fastest wins available to you."
            align="left"
            tone="dark"
          />

          <ul className="mt-8 space-y-5">
            {included.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-bright">
                    <Icon size={16} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-foreground">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="rounded-2xl border border-ink-border bg-ink-elevated p-6 sm:p-8"
        >
          {status === "sent" ? (
            <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
                <Send size={20} aria-hidden />
              </span>
              <p className="font-display text-lg font-medium text-ink-foreground">
                Opening your email client…
              </p>
              <p className="max-w-xs text-sm text-muted-dark">
                If nothing happened, email us directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent-bright underline">
                  {siteConfig.email}
                </a>
                .
              </p>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => {
                  setValues(initialState);
                  setStatus("idle");
                }}
                className="mt-2"
              >
                Send another request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor={`${formId}-name`}
                  className="text-sm font-medium text-ink-foreground"
                >
                  Full name
                </label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  className="mt-1.5 w-full rounded-lg border border-ink-border bg-ink px-4 py-2.5 text-sm text-ink-foreground placeholder:text-muted-dark focus:border-accent focus:outline-none"
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p id={`${formId}-name-error`} className="mt-1.5 text-xs text-accent-bright">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="text-sm font-medium text-ink-foreground"
                  >
                    Work email
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    className="mt-1.5 w-full rounded-lg border border-ink-border bg-ink px-4 py-2.5 text-sm text-ink-foreground placeholder:text-muted-dark focus:border-accent focus:outline-none"
                    placeholder="jane@business.com"
                  />
                  {errors.email && (
                    <p id={`${formId}-email-error`} className="mt-1.5 text-xs text-accent-bright">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-phone`}
                    className="text-sm font-medium text-ink-foreground"
                  >
                    Phone{" "}
                    <span className="font-normal text-muted-dark">(optional)</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    className="mt-1.5 w-full rounded-lg border border-ink-border bg-ink px-4 py-2.5 text-sm text-ink-foreground placeholder:text-muted-dark focus:border-accent focus:outline-none"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`${formId}-website`}
                  className="text-sm font-medium text-ink-foreground"
                >
                  Website URL
                </label>
                <input
                  id={`${formId}-website`}
                  type="text"
                  value={values.website}
                  onChange={handleChange("website")}
                  aria-invalid={Boolean(errors.website)}
                  aria-describedby={errors.website ? `${formId}-website-error` : undefined}
                  className="mt-1.5 w-full rounded-lg border border-ink-border bg-ink px-4 py-2.5 text-sm text-ink-foreground placeholder:text-muted-dark focus:border-accent focus:outline-none"
                  placeholder="yourbusiness.com"
                />
                {errors.website && (
                  <p id={`${formId}-website-error`} className="mt-1.5 text-xs text-accent-bright">
                    {errors.website}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor={`${formId}-message`}
                  className="text-sm font-medium text-ink-foreground"
                >
                  Biggest SEO challenge{" "}
                  <span className="font-normal text-muted-dark">(optional)</span>
                </label>
                <textarea
                  id={`${formId}-message`}
                  value={values.message}
                  onChange={handleChange("message")}
                  rows={3}
                  className="mt-1.5 w-full resize-none rounded-lg border border-ink-border bg-ink px-4 py-2.5 text-sm text-ink-foreground placeholder:text-muted-dark focus:border-accent focus:outline-none"
                  placeholder="e.g. we rank fine in our own city but nowhere in the next town over"
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full">
                Send Me My Free Audit
                <Send size={16} aria-hidden />
              </Button>

              <p className="text-center text-xs text-muted-dark">
                No spam, no obligation. We&apos;ll reply from a real person, not a bot.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
