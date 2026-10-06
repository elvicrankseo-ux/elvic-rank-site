"use client";

import { useId, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SearchCheck, MapPinCheck, ListChecks, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildMailtoLink } from "@/lib/mailto";
import { trackEvent } from "@/lib/analytics";

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
    trackEvent("generate_lead", { form: "free_audit" });
    setStatus("sent");
  }

  return (
    <section id="audit" className="relative overflow-hidden pt-4 pb-10 lg:pt-8 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Side: Hyper-Minimalist Typography */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-deep border border-accent/20">
                Free SEO audit
              </span>
              <h2 className="mt-8 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                See exactly where you're losing rankings.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-dark max-w-md">
                No generic PDF. Get a real look at your site, your competitors, and the fastest wins available to you.
              </p>

              <ul className="mt-10 flex flex-col gap-6">
                {included.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-flat)] text-accent-deep">
                        <Icon size={18} aria-hidden />
                      </span>
                      <span className="text-base font-medium leading-relaxed text-foreground pt-2">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Side: Naked Form */}
          <div className="mt-16 lg:mt-0 lg:col-span-7 lg:pl-16 lg:border-l lg:border-black/5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              {status === "sent" ? (
                <div role="status" className="flex flex-col items-center gap-4 py-20 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-flat)] text-accent-deep">
                    <Send size={32} aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-3xl font-bold text-foreground">
                    Opening your email...
                  </p>
                  <p className="mt-2 max-w-sm text-base text-muted-dark">
                    If nothing happened, email us directly at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-accent-deep font-bold hover:underline">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setValues(initialState);
                      setStatus("idle");
                    }}
                    className="mt-8"
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <label htmlFor={`${formId}-name`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                      Full name
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      value={values.name}
                      onChange={handleChange("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                      className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <p id={`${formId}-name-error`} className="mt-2 text-xs font-bold text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-email`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Work email
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                        className="mt-3 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="jane@business.com"
                      />
                      {errors.email && (
                        <p id={`${formId}-email-error`} className="mt-2 text-xs font-bold text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={`${formId}-phone`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Phone <span className="font-normal normal-case text-muted/70">(optional)</span>
                      </label>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        value={values.phone}
                        onChange={handleChange("phone")}
                        className="mt-3 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={`${formId}-website`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                      Website URL
                    </label>
                    <input
                      id={`${formId}-website`}
                      type="text"
                      value={values.website}
                      onChange={handleChange("website")}
                      aria-invalid={Boolean(errors.website)}
                      aria-describedby={errors.website ? `${formId}-website-error` : undefined}
                      className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                      placeholder="yourbusiness.com"
                    />
                    {errors.website && (
                      <p id={`${formId}-website-error`} className="mt-2 text-xs font-bold text-red-500">
                        {errors.website}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-message`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                      Biggest SEO challenge <span className="font-normal normal-case text-muted/70">(optional)</span>
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      value={values.message}
                      onChange={handleChange("message")}
                      rows={4}
                      className="mt-2 w-full resize-none rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                      placeholder="e.g. we rank fine in our own city but nowhere in the next town over"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent-deep hover:bg-accent text-white shadow-xl hover:-translate-y-1 transition-transform px-8 py-4 text-base rounded-2xl">
                      Send Me My Free Audit
                      <Send size={18} aria-hidden className="ml-2" />
                    </Button>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-muted-dark">
                      Submitting opens your email app with your details pre-filled. No obligation and no automated sales sequence.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
