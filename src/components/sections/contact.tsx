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
import { services } from "@/data/services";
import { buildMailtoLink } from "@/lib/mailto";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  serviceNeeded: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  serviceNeeded: "",
  message: "",
};

const inputClass =
  "mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-deep focus:outline-none";

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

type QuickContact = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string | null;
  external?: boolean;
  gaEvent?: string;
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
    gaEvent: "whatsapp_click",
  },
  {
    icon: CalendarCheck,
    title: "Book a free strategy call",
    description: "30 minutes, no pitch — just a plan for your rankings.",
    href: siteConfig.calendlyUrl,
    external: true,
    gaEvent: "strategy_call_click",
  },
];

function QuickContactCard({
  icon: Icon,
  title,
  description,
  href,
  external,
  gaEvent,
}: QuickContact) {
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
      onClick={gaEvent ? () => trackEvent(gaEvent, { location: "contact_section" }) : undefined}
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
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      [
        `Name: ${values.name}`,
        values.businessName ? `Business name: ${values.businessName}` : null,
        `Email: ${values.email}`,
        values.phone ? `Phone: ${values.phone}` : null,
        values.website ? `Website: ${values.website}` : null,
        values.serviceNeeded ? `Service needed: ${values.serviceNeeded}` : null,
        "",
        values.message,
      ]
    );
    trackEvent("generate_lead", { form: "contact" });
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
              <div className="grid gap-5 sm:grid-cols-2">
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
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p id={`${formId}-name-error`} className="mt-1.5 text-xs text-accent-deep">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-business`} className="text-sm font-medium text-foreground">
                    Business name{" "}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id={`${formId}-business`}
                    type="text"
                    value={values.businessName}
                    onChange={handleChange("businessName")}
                    className={inputClass}
                    placeholder="Jane's Plumbing Co."
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
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
                    className={inputClass}
                    placeholder="jane@business.com"
                  />
                  {errors.email && (
                    <p id={`${formId}-email-error`} className="mt-1.5 text-xs text-accent-deep">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-foreground">
                    Phone{" "}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    className={inputClass}
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-website`} className="text-sm font-medium text-foreground">
                    Website{" "}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id={`${formId}-website`}
                    type="text"
                    value={values.website}
                    onChange={handleChange("website")}
                    className={inputClass}
                    placeholder="yourbusiness.com"
                  />
                </div>

                <div>
                  <label htmlFor={`${formId}-service`} className="text-sm font-medium text-foreground">
                    Service needed{" "}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <select
                    id={`${formId}-service`}
                    value={values.serviceNeeded}
                    onChange={handleChange("serviceNeeded")}
                    className={inputClass}
                  >
                    <option value="">Not sure yet</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
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
                  className={`${inputClass} resize-none`}
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
              <p className="text-center text-xs text-muted">
                Sending opens your email app with this message pre-filled —
                no backend, no automated reply.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
