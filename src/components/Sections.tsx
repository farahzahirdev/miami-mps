"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { InquiryForm } from "./InquiryForm";
import { Button } from "./Button";
import { FaqList } from "./FaqList";

export function About() {
  const { copy } = useLocale();

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 bg-mps-blue-light/40 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
            <Image
              src="/images/about-clinic.png"
              alt={copy.media.aboutClinicAlt}
              width={700}
              height={500}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <p className="section-eyebrow mb-3">{copy.about.eyebrow}</p>
            <h2 id="about-heading" className="text-mps-navy">
              {copy.about.headline}
            </h2>
            <p className="mt-4 text-mps-navy/80">{copy.about.description}</p>

            <ul className="mt-6 space-y-3">
              {copy.about.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-mps-navy/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mps-blue" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact-inquiry" variant="primary">
                {copy.about.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { copy } = useLocale();

  return (
    <section id="how-it-works" aria-labelledby="process-heading" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-3">{copy.howItWorks.eyebrow}</p>
          <h2 id="process-heading" className="text-mps-navy">
            {copy.howItWorks.headline}
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.howItWorks.steps.map((step) => (
            <li
              key={step.step}
              className="list-none rounded-2xl border border-mps-blue/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span
                className="btn-font inline-flex h-10 w-10 items-center justify-center rounded-full bg-mps-accent text-mps-accent-dark"
                aria-hidden
              >
                {step.step}
              </span>
              <h3 className="mt-4 text-mps-navy">{step.title}</h3>
              <p className="text-small mt-2 text-mps-navy/70">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
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
    <section
      id="doctor"
      aria-labelledby="doctor-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-mps-blue/10">
              <Image
                src="/images/dr-myuna-ruiz.png"
                alt={copy.doctor.imageAlt}
                width={500}
                height={700}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="section-eyebrow mb-3">{copy.doctor.eyebrow}</p>
            <h2 id="doctor-heading" className="text-mps-navy">
              {copy.doctor.headline}
            </h2>
            <p className="mt-2 font-heading text-mps-h3 text-mps-blue">{copy.doctor.name}</p>
            <p className="text-small mt-1 text-mps-navy/70">{copy.doctor.credentials}</p>

            <p className="mt-6 leading-relaxed text-mps-navy/80">{copy.doctor.bio}</p>
            <p className="mt-4 leading-relaxed text-mps-navy/75">{copy.doctor.trustCopy}</p>

            <div className="mt-8">
              <Button href="#contact-inquiry" variant="primary">
                {copy.doctor.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const { copy } = useLocale();

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-24 bg-mps-blue-light/50 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-3">{copy.reviews.eyebrow}</p>
          <h2 id="reviews-heading" className="text-mps-navy">
            {copy.reviews.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.reviews.items.map((review) => (
            <blockquote
              key={review.author}
              className="rounded-2xl border border-mps-blue/10 bg-white p-6 shadow-sm"
            >
              <p className="leading-relaxed text-mps-navy/85">&ldquo;{review.quote}&rdquo;</p>
              <footer className="section-eyebrow mt-4">— {review.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
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
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-3">{copy.faq.eyebrow}</p>
          <h2 id="faq-heading" className="text-mps-navy">
            {copy.faq.headline}
          </h2>
        </div>

        <FaqList />
      </div>
    </section>
  );
}

export function Contact() {
  const { copy, site } = useLocale();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-gradient-to-b from-mps-blue-light/50 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow mb-3">{copy.contact.eyebrow}</p>
            <h2 id="contact-heading" className="text-mps-navy">
              {copy.contact.headline}
            </h2>
            <p className="text-lead mt-4 text-mps-navy/80">
              {copy.contact.description}
            </p>

            <dl className="mt-8 space-y-4">
              <div>
                <dt className="section-eyebrow">{copy.contact.phoneLabel}</dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="font-heading text-mps-h3 text-mps-navy hover:text-mps-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mps-blue"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="section-eyebrow">{copy.contact.addressLabel}</dt>
                <dd className="mt-1 text-mps-navy/80">{site.address}</dd>
              </div>
              <div>
                <dt className="section-eyebrow">{copy.contact.hoursLabel}</dt>
                <dd className="mt-1 text-mps-navy/80">{copy.contact.hours}</dd>
              </div>
            </dl>

            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title={copy.contact.mapTitle}
                src="https://maps.google.com/maps?q=7100+SW+99th+Ave+Suite+203+Miami+FL+33173&output=embed"
                className="min-h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <InquiryForm id="contact-inquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}
