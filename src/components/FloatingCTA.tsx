"use client";

import { FileText, Phone } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

export function FloatingCTA() {
  const { copy, site } = useLocale();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-mps-navy/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(35,43,117,0.1)] backdrop-blur-lg sm:hidden">
      <div className="flex gap-2">
        <a
          href={site.phoneHref}
          className="btn-primary flex flex-1 items-center justify-center gap-2 !py-3"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {copy.floatingCta.call}
        </a>
        <a
          href="#contact-inquiry"
          className="btn-secondary flex flex-1 items-center justify-center gap-2 !py-3"
        >
          <FileText className="h-4 w-4" aria-hidden />
          {copy.floatingCta.form}
        </a>
      </div>
    </div>
  );
}
