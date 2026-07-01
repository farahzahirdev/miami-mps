"use client";

import { Clock, Languages, MapPin, ShieldCheck } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

const statIcons = [Languages, Clock, ShieldCheck, MapPin];

export function TrustBar() {
  const { copy } = useLocale();

  return (
    <section aria-label="Trust indicators" className="border-y border-mps-navy/6 bg-mps-blue-light/40 py-10 sm:py-14">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-mps-navy/8 sm:grid-cols-4 sm:rounded-none sm:bg-transparent sm:gap-6">
          {copy.trust.items.map((item, index) => {
            const Icon = statIcons[index] ?? ShieldCheck;
            return (
              <article
                key={item.value}
                className="flex flex-col items-center bg-white px-4 py-7 text-center sm:mps-card-interactive sm:px-6 sm:py-10"
              >
                <div className="mps-icon-badge mb-4 sm:mb-5">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </div>
                <p className="text-2xl font-bold tracking-tight text-mps-navy sm:text-3xl lg:text-4xl">
                  {item.value}
                </p>
                <p className="text-small mt-2 max-w-[14rem] leading-relaxed sm:mt-3">{item.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
