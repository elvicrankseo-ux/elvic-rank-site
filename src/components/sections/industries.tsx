import {
  Wrench,
  HardHat,
  Truck,
  Car,
  Scale,
  Building2,
  Trees,
  HeartPulse,
  Package,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const rowOne: { icon: LucideIcon; label: string }[] = [
  { icon: Wrench, label: "Home Services (HVAC, Plumbing, Electrical)" },
  { icon: HardHat, label: "Roofing & Construction" },
  { icon: Truck, label: "Towing & Roadside Assistance" },
  { icon: Car, label: "Auto Repair & Detailing" },
  { icon: Scale, label: "Legal & Professional Services" },
];

const rowTwo: { icon: LucideIcon; label: string }[] = [
  { icon: Building2, label: "Real Estate & Property Management" },
  { icon: Trees, label: "Landscaping & Outdoor Services" },
  { icon: HeartPulse, label: "Health & Wellness Clinics" },
  { icon: Package, label: "Moving & Logistics" },
  { icon: Sparkles, label: "Cleaning Services" },
];

function Chip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 rounded-full border border-paper-border bg-paper px-5 py-2.5 text-sm font-medium text-foreground">
      <Icon size={16} className="text-accent-deep" aria-hidden />
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { icon: LucideIcon; label: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((item) => (
          <Chip key={item.label} {...item} />
        ))}
        {/* display:contents keeps these as direct flex items (for a
            seamless -50% loop) while aria-hidden removes the visual
            duplicate from the accessibility tree. */}
        <div className="contents" aria-hidden="true">
          {items.map((item) => (
            <Chip key={`dup-${item.label}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for local service businesses"
          description="Different trades, same fundamentals: buyers search before they call. We rank the businesses that show up first."
        />
      </div>

      <div className="marquee-paused mt-14 flex flex-col gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
