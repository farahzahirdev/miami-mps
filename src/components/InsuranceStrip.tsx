"use client";

import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

export function InsuranceStrip() {
  const { copy } = useLocale();

  return (
    <section
      aria-labelledby="insurance-heading"
      className="border-y border-mps-navy/8 bg-mps-blue-light/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-fade-up mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{copy.insurance.eyebrow}</p>
          <h2 id="insurance-heading" className="mt-3">
            {copy.insurance.headline}
          </h2>
          <p className="text-lead mt-4">{copy.insurance.description}</p>
        </div>

        <ul className="mps-fade-up mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-6">
          {copy.insurance.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-card bg-white/80 px-5 py-4 text-sm text-mps-navy/90 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mps-green" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.insurance.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
