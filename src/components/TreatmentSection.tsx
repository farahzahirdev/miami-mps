"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

type TreatmentImage = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
};

type TreatmentSectionProps = {
  id: string;
  variant: "tms" | "spravato";
  images: TreatmentImage[];
  reversed?: boolean;
};

export function TreatmentSection({
  id,
  variant,
  images,
  reversed = false,
}: TreatmentSectionProps) {
  const { copy } = useLocale();
  const data = variant === "tms" ? copy.tms : copy.spravato;
  const image = images[0];
  const useContain = image?.fit === "contain";
  const imageWidth = image?.width ?? 900;
  const imageHeight = image?.height ?? 675;
  const isSquare = imageWidth === imageHeight;

  return (
    <section id={id} className="mps-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="mps-fade-up space-y-6">
            <div>
              <p className="section-eyebrow mb-3">{data.eyebrow}</p>
              <h2>{data.headline}</h2>
              <p className="text-lead mt-4">{data.description}</p>
            </div>

            <p className="text-small rounded-xl border border-mps-navy/10 bg-mps-blue-light/80 px-5 py-4 text-mps-navy/90">
              {data.idealFor}
            </p>

            {"conditions" in data && data.conditions && (
              <div>
                <p className="text-sm font-semibold text-mps-navy">{data.conditionsHeading}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {data.conditions.map((condition) => (
                    <li key={condition.id}>
                      <a
                        id={condition.id}
                        href={`#${condition.id}`}
                        className="inline-block scroll-mt-28 rounded-full border border-mps-navy/12 bg-white px-3.5 py-1.5 text-sm font-medium text-mps-navy/85 transition hover:border-mps-blue/30 hover:text-mps-blue"
                      >
                        {condition.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {data.benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl border border-mps-navy/8 bg-white p-5 sm:mps-card-interactive">
                  <h3 className="text-base font-semibold text-mps-navy">{benefit.title}</h3>
                  <p className="text-small mt-2">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Button href="#contact-inquiry" variant="primary">
              {data.cta}
            </Button>

            {"disclaimer" in data && (
              <p className="text-small text-mps-slate/80">{data.disclaimer}</p>
            )}
          </div>

          {image && (
            <div className="mps-fade-up relative" style={{ animationDelay: "100ms" }}>
              <div className="mps-image-blob" aria-hidden />
              <div
                className={`mps-image-wrap relative ${image.className ?? ""} ${
                  useContain ? "flex min-h-[18rem] items-center justify-center bg-white sm:min-h-[22rem]" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={imageWidth}
                  height={imageHeight}
                  quality={95}
                  className={
                    useContain
                      ? "h-auto max-h-[20rem] w-full max-w-[26rem] object-contain"
                      : isSquare
                        ? "aspect-square w-full object-cover"
                        : "aspect-[4/3] w-full object-cover"
                  }
                  sizes={
                    useContain
                      ? "(max-width: 1024px) 90vw, 420px"
                      : "(max-width: 1024px) 100vw, 675px"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
