"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { InquiryForm } from "./InquiryForm";
import { Button } from "./Button";

export function Hero() {
  const { copy, site } = useLocale();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-services.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-[42%_36%] sm:object-[48%_34%] lg:object-[56%_32%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/97 via-white/88 to-mps-blue-light/80 lg:bg-gradient-to-r lg:from-white/97 lg:via-white/90 lg:to-mps-blue/25" />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-48 w-52 bg-gradient-to-tl from-white/92 via-white/55 to-transparent sm:h-56 sm:w-64 lg:h-64 lg:w-80"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="mps-fade-up min-w-0 space-y-6">
            <div className="space-y-4">
              <p className="section-eyebrow">{copy.hero.eyebrow}</p>
              <h1 id="hero-heading">{copy.hero.headline}</h1>
              <p className="text-lead max-w-xl">{copy.hero.subheadline}</p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2" aria-label="Treatment highlights">
              {copy.hero.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-mps-body text-mps-navy/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mps-green" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#hero-form" variant="primary">
                {copy.hero.formCta}
              </Button>
              <Button href={site.phoneHref} variant="secondary" icon>
                {copy.header.callCta}
              </Button>
            </div>

            <p className="text-small text-mps-slate/80">{copy.hero.emergencyNote}</p>
          </div>

          <div
            id="hero-form"
            className="mps-fade-up min-w-0 scroll-mt-24 lg:relative lg:z-20 lg:-mb-4"
            style={{ animationDelay: "120ms" }}
          >
            <div className="mps-float-card shadow-float">
              <div className="border-b border-mps-navy/8 bg-mps-blue-light/50 px-6 py-4 sm:px-7">
                <p className="text-lg font-semibold text-mps-navy">{copy.hero.formCta}</p>
              </div>
              <InquiryForm id="hero-inquiry" compact embedded />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
