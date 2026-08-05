import {
  MessageCircle,
  ShieldCheck,
  FileText,
  Ban,
  Compass,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const trustPoints: { icon: LucideIcon; label: string }[] = [
  { icon: MessageCircle, label: "Transparent Communication" },
  { icon: ShieldCheck, label: "White Hat SEO Only" },
  { icon: FileText, label: "Monthly Reports" },
  { icon: Ban, label: "No Fake Guarantees" },
  { icon: Compass, label: "Custom Growth Strategy" },
  { icon: Handshake, label: "Long-Term Partnership" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-paper-border bg-paper-muted py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustPoints.map((point) => (
            <li
              key={point.label}
              className="flex items-center gap-2 text-sm font-medium text-muted"
            >
              <point.icon size={16} className="text-accent-deep" aria-hidden />
              {point.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
