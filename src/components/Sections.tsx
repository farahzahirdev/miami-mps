"use client";

import Image from "next/image";
import { BadgeCheck, CheckCircle2, Star } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { InquiryForm } from "./InquiryForm";
import { Button } from "./Button";
import { FaqList } from "./FaqList";

export function About() {
  const { copy } = useLocale();

  return (
    <section id="about" aria-labelledby="about-heading" className="mps-section bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="mps-fade-up mps-image-wrap aspect-[16/10] w-full min-w-0">
            <Image
              src="/images/about-team.webp"
              alt={copy.media.aboutClinicAlt}
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="mps-fade-up space-y-6" style={{ animationDelay: "80ms" }}>
            <div>
              <p className="section-eyebrow mb-3">{copy.about.eyebrow}</p>
              <h2 id="about-heading">{copy.about.headline}</h2>
              <p className="text-lead mt-4">{copy.about.description}</p>
            </div>

            <ul className="space-y-3.5">
              {copy.about.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-mps-body text-mps-navy/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mps-green" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Button href="#contact-inquiry" variant="primary">
              {copy.about.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { copy } = useLocale();

  return (
    <section id="how-it-works" aria-labelledby="process-heading" className="mps-section bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-section-header">
          <p className="section-eyebrow">{copy.howItWorks.eyebrow}</p>
          <h2 id="process-heading" className="mt-3">
            {copy.howItWorks.headline}
          </h2>
        </div>

        <ol className="mps-section-body grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.howItWorks.steps.map((step) => (
            <li key={step.step} className="mps-card-interactive list-none p-6">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mps-navy text-sm font-bold text-white"
                aria-hidden
              >
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="text-small mt-2">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.howItWorks.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export function MeetDoctor() {
  const { copy } = useLocale();

  return (
    <section id="doctor" aria-labelledby="doctor-heading" className="mps-section mps-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="mps-fade-up mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="mps-image-blob" aria-hidden />
              <div className="mps-image-wrap relative">
                <Image
                  src="/images/dr-myuna-ruiz.png"
                  alt={copy.doctor.imageAlt}
                  width={401}
                  height={601}
                  quality={90}
                  className="aspect-[4/5] w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
            </div>
          </div>

          <div className="mps-fade-up space-y-6" style={{ animationDelay: "80ms" }}>
            <div>
              <p className="section-eyebrow mb-3">{copy.doctor.eyebrow}</p>
              <h2 id="doctor-heading">{copy.doctor.headline}</h2>
              <p className="mt-3 text-xl font-semibold text-mps-blue">{copy.doctor.name}</p>
              <p className="text-small mt-1">{copy.doctor.credentials}</p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {copy.doctor.badges.map((badge) => (
                <span key={badge} className="mps-chip">
                  <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-mps-green" aria-hidden />
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-mps-body leading-relaxed text-mps-navy/85">{copy.doctor.bio}</p>
            <p className="text-mps-body leading-relaxed text-mps-slate">{copy.doctor.trustCopy}</p>

            <Button href="#contact-inquiry" variant="primary">
              {copy.doctor.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const { copy } = useLocale();

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="mps-section bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-section-header">
          <p className="section-eyebrow">{copy.reviews.eyebrow}</p>
          <h2 id="reviews-heading" className="mt-3">
            {copy.reviews.headline}
          </h2>
        </div>

        <div className="mps-section-body grid gap-6 sm:grid-cols-2">
          {copy.reviews.items.map((review) => (
            <blockquote key={review.author} className="mps-card-interactive flex h-full flex-col p-8">
              <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-5 flex-1 leading-relaxed text-mps-navy/85">&ldquo;{review.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-mps-navy/8 pt-5">
                <cite className="text-sm font-semibold not-italic text-mps-navy">{review.author}</cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#contact-inquiry" variant="primary">
            {copy.reviews.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const { copy } = useLocale();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="mps-section mps-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mps-section-header">
          <p className="section-eyebrow">{copy.faq.eyebrow}</p>
          <h2 id="faq-heading" className="mt-3">
            {copy.faq.headline}
          </h2>
        </div>

        <div className="mps-section-body mx-auto max-w-3xl">
          <div className="mps-card px-8 py-8 sm:px-10 sm:py-10">
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { copy, site } = useLocale();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mps-section bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <p className="section-eyebrow mb-3">{copy.contact.eyebrow}</p>
              <h2 id="contact-heading">{copy.contact.headline}</h2>
              <p className="text-lead mt-4">{copy.contact.description}</p>
            </div>

            <dl className="space-y-5">
              <div>
                <dt className="section-eyebrow">{copy.contact.phoneLabel}</dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="text-2xl font-semibold text-mps-navy transition hover:text-mps-blue"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="section-eyebrow">{copy.contact.addressLabel}</dt>
                <dd className="text-small mt-2 text-mps-navy/85">{site.address}</dd>
              </div>
              <div>
                <dt className="section-eyebrow">{copy.contact.hoursLabel}</dt>
                <dd className="text-small mt-2 text-mps-navy/85">{copy.contact.hours}</dd>
              </div>
            </dl>

            <div className="mps-card overflow-hidden">
              <iframe
                title={copy.contact.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.3132738820327!2d-80.39689652387777!3d25.760214108665185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bf1a234773a7%3A0x6ae274a78d35a90c!2sMiami%20Psychiatric%20Services.%20LLC.!5e0!3m2!1sen!2sus!4v1782911556816!5m2!1sen!2sus"
                className="min-h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mps-float-card shadow-float">
            <div className="border-b border-mps-navy/8 bg-mps-blue-light/40 px-6 py-5 sm:px-8 sm:py-6">
              <h3 className="text-xl font-semibold text-mps-navy">{copy.contact.formTitle}</h3>
              <p className="text-small mt-1">{copy.contact.formSubtext}</p>
            </div>
            <InquiryForm id="contact-inquiry" embedded />
          </div>
        </div>
      </div>
    </section>
  );
}
