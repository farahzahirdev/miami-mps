"use client";

import { Award, Languages, MapPin, ShieldCheck } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

const statIcons = [Languages, ShieldCheck, Award, MapPin];

export function TrustBar() {
  const { copy } = useLocale();

  return (
    <section aria-label="Trust indicators" className="border-y border-mps-navy/6 bg-mps-blue-light/40 py-16 sm:py-20">
      <div className="mx-auto grid max-w-content gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {copy.trust.items.map((item, index) => {
          const Icon = statIcons[index] ?? ShieldCheck;
          return (
            <article
              key={item.value}
              className="mps-card-interactive flex flex-col items-center px-6 py-10 text-center"
            >
              <div className="mps-icon-badge mb-5">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="text-3xl font-bold tracking-tight text-mps-navy sm:text-4xl">
                {item.value}
              </p>
              <p className="text-small mt-3 max-w-[14rem] leading-relaxed">{item.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
