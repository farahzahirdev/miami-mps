import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { copy, site } from "@/content/en";
import { InquiryForm } from "./InquiryForm";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-mps-blue-light via-white to-mps-cyan/15"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-mps-cyan/30 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-mps-blue/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-content gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <p className="section-eyebrow mb-4">{copy.hero.eyebrow}</p>
          <h1 id="hero-heading" className="text-mps-navy">
            {copy.hero.headline}
          </h1>
          <p className="text-lead mt-5 max-w-xl text-mps-navy/80">{copy.hero.subheadline}</p>

          <ul className="mt-6 space-y-3" aria-label="Treatment highlights">
            {copy.hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-mps-navy/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mps-blue" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#hero-form" variant="primary" className="lg:hidden">
              {copy.hero.formCta}
            </Button>
            <p className="text-small text-mps-navy/70">
              {copy.hero.callPrompt}{" "}
              <a
                href={site.phoneHref}
                className="font-heading text-mps-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mps-blue"
              >
                {site.phone}
              </a>
            </p>
          </div>

          <p className="text-small mt-6 text-mps-navy/60">{copy.hero.emergencyNote}</p>
        </div>

        <div
          id="hero-form"
          className="scroll-mt-24 overflow-hidden rounded-2xl border border-mps-blue/10 bg-white shadow-xl shadow-mps-blue/10"
        >
          <div className="px-5 pt-5 sm:px-6 sm:pt-6">
            <Image
              src="/images/tms.png"
              alt={copy.hero.tmsImageAlt}
              width={320}
              height={320}
              className="mx-auto h-32 w-auto object-contain sm:h-40"
              priority
            />
            <h2 className="mt-4 text-mps-navy">{copy.hero.formTitle}</h2>
            <p className="text-small mt-1 text-mps-navy/70">{copy.hero.formSubtitle}</p>
          </div>
          <InquiryForm id="hero-inquiry" compact embedded />
        </div>
      </div>
    </section>
  );
}
