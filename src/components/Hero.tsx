"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { InquiryForm } from "./InquiryForm";
import { Button } from "./Button";

/** Single wash applied over the whole hero — text column and photo share the same tint */
const heroWash = `linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.96) 0%,
  rgba(255, 255, 255, 0.92) 28%,
  rgba(235, 247, 253, 0.88) 55%,
  rgba(235, 247, 253, 0.78) 78%,
  rgba(212, 239, 250, 0.65) 100%
)`;

const heroWashMobile = `linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.97) 0%,
  rgba(255, 255, 255, 0.94) 35%,
  rgba(235, 247, 253, 0.9) 65%,
  rgba(235, 247, 253, 0.85) 100%
)`;

export function Hero() {
  const { copy, site } = useLocale();

  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-mps-blue-light/50">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 lg:inset-y-0 lg:left-[28%] lg:right-0">
          <Image
            src="/images/hero-services.png"
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-[58%_38%] opacity-40 lg:opacity-100"
            sizes="100vw"
          />
        </div>

        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: heroWashMobile }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: heroWash }}
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
            <div className="mps-float-card border-white/80 bg-white/90 shadow-[6px_24px_56px_-10px_rgba(35,43,117,0.14)] backdrop-blur-md">
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
