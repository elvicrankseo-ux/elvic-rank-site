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
    <section className="py-12 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6">
          {trustPoints.map((point) => (
            <li
              key={point.label}
              className="flex items-center gap-2.5 text-sm font-bold text-foreground bg-ink rounded-full px-6 py-3 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)] hover:-translate-y-0.5 cursor-default"
            >
              <point.icon size={18} className="text-accent-deep" aria-hidden />
              {point.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
