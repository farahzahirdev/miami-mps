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
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-3">{copy.whyChoose.eyebrow}</p>
          <h2 id="why-heading" className="text-mps-navy">
            {copy.whyChoose.headline}
          </h2>
          <p className="text-lead mt-4 text-mps-navy/80">{copy.whyChoose.description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.whyChoose.reasons.map((reason) => {
            const Icon = iconMap[reason.icon] ?? ShieldCheck;
            return (
              <article
                key={reason.title}
                className="rounded-2xl border border-mps-blue/10 bg-mps-blue-light/30 p-6 transition hover:border-mps-blue/25 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-mps-blue/10 p-3 text-mps-blue">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-mps-navy">{reason.title}</h3>
                <p className="text-small mt-2 text-mps-navy/75">{reason.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.whyChoose.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
