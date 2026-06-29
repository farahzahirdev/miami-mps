import Image from "next/image";
import { copy } from "@/content/en";
import { Button } from "./Button";

type TreatmentImage = {
  src: string;
  alt: string;
  className?: string;
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
  const data = variant === "tms" ? copy.tms : copy.spravato;

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="section-eyebrow mb-3">{data.eyebrow}</p>
            <h2 className="text-mps-navy">{data.headline}</h2>
            <p className="text-lead mt-4 text-mps-navy/80">{data.description}</p>
            <p className="text-small mt-4 rounded-xl bg-mps-blue-light px-4 py-3 text-mps-navy/90">
              {data.idealFor}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {data.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-mps-blue/10 bg-white p-4 shadow-sm"
                >
                  <h3 className="font-heading text-mps-h4 text-mps-navy">{benefit.title}</h3>
                  <p className="text-small mt-1 text-mps-navy/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#contact-inquiry" variant="primary" className="mt-8">
              {data.cta}
            </Button>

            {"disclaimer" in data && (
              <p className="text-small mt-4 text-mps-navy/50">{data.disclaimer}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {images.map((image) => (
              <div
                key={image.src}
                className={`overflow-hidden rounded-2xl shadow-xl shadow-mps-blue/10 ${image.className ?? "bg-white"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={750}
                  height={750}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
