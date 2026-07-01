"use client";

import {
  BadgeCheck,
  ClipboardCheck,
  HeartHandshake,
  Languages,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  languages: Languages,
  badge: BadgeCheck,
  map: MapPin,
  heart: HeartHandshake,
  clipboard: ClipboardCheck,
};

export function WhyChoose() {
  const { copy } = useLocale();

  return (
    <section id="why-us" aria-labelledby="why-heading" className="mps-section bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-section-header">
          <p className="section-eyebrow">{copy.whyChoose.eyebrow}</p>
          <h2 id="why-heading" className="mt-3">
            {copy.whyChoose.headline}
          </h2>
          <p className="text-lead mt-6">{copy.whyChoose.description}</p>
        </div>

        <div className="mps-section-body grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.whyChoose.reasons.map((reason) => {
            const Icon = iconMap[reason.icon] ?? ShieldCheck;
            return (
              <article
                key={reason.title}
                className="rounded-xl border border-mps-navy/8 bg-white p-6 sm:mps-card-interactive sm:p-8"
              >
                <div className="mps-icon-badge mb-6">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="text-small mt-3 leading-relaxed">{reason.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.whyChoose.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
