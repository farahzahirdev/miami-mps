"use client";

import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

export function InsuranceStrip() {
  const { copy } = useLocale();

  return (
    <section
      id="insurance"
      aria-labelledby="insurance-heading"
      className="border-b border-mps-navy/8 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-fade-up mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{copy.insurance.eyebrow}</p>
          <h2 id="insurance-heading" className="mt-3">
            {copy.insurance.headline}
          </h2>
          <p className="text-lead mt-4">{copy.insurance.description}</p>
        </div>

        <ul className="mps-fade-up mx-auto mt-8 grid max-w-4xl gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {copy.insurance.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-mps-navy/8 bg-mps-blue-light/40 px-4 py-3.5 text-sm text-mps-navy/90 sm:px-5 sm:py-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mps-green" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mps-fade-up mx-auto mt-10 max-w-3xl text-center">
          <h3 className="text-lg font-semibold text-mps-navy">{copy.insurance.inNetworkHeading}</h3>
          <p className="text-small mt-2">{copy.insurance.inNetworkNote}</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {copy.insurance.inNetworkPlans.map((plan) => (
              <li
                key={plan}
                className="rounded-full border border-mps-navy/10 bg-white px-4 py-2 text-sm font-medium text-mps-navy/85"
              >
                {plan}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.insurance.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
