import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: "/privacy",
  noIndex: true,
});

const lastUpdated = "August 2026";

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
        <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Information We Collect
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              When you contact us through a form on this site, request a free
              audit, or email us directly, we collect the information you
              provide — typically your name, business name, email address,
              phone number, and website URL. We do not collect payment
              information through this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              How We Use Your Information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We use the information you provide solely to respond to your
              inquiry, prepare and deliver an SEO audit or proposal, and, if
              you become a client, to provide the services you&apos;ve engaged
              us for. We do not sell, rent, or trade your personal information
              to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Contact Forms and Email
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Forms on this site are configured to open a pre-filled email in
              your own email client rather than submitting your information
              to a third-party server — the data you enter is sent directly
              to us via the email you send, the same as any other email.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Analytics and Cookies
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We may use standard website analytics tools to understand
              general site usage (such as which pages are visited and how
              visitors found the site). These tools may use cookies or
              similar technologies. This data is aggregated and is not used
              to personally identify you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Third-Party Links
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              This site may link to third-party services (such as our social
              media profiles or WhatsApp). We aren&apos;t responsible for the
              privacy practices of those third-party sites — please review
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Your Rights
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              You can request access to, correction of, or deletion of any
              personal information we hold about you at any time by emailing{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent-deep underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Changes to This Policy
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We may update this policy from time to time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Contact Us
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent-deep underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
