"use client";

import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

export function SideEffects() {
  const { copy } = useLocale();

  return (
    <section
      id="side-effects"
      aria-labelledby="side-effects-heading"
      className="mps-section mps-section-alt"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-section-header">
          <p className="section-eyebrow">{copy.sideEffects.eyebrow}</p>
          <h2 id="side-effects-heading" className="mt-3">
            {copy.sideEffects.headline}
          </h2>
          <p className="text-lead mt-6">{copy.sideEffects.description}</p>
        </div>

        <div className="mps-section-body grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.sideEffects.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-mps-navy/8 bg-white/80 px-6 py-7 sm:px-7 sm:py-8"
            >
              <h3 className="text-lg font-semibold text-mps-navy">{item.title}</h3>
              <p className="text-small mt-3 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.sideEffects.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
