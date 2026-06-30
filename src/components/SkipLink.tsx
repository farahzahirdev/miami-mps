"use client";

import { useLocale } from "@/context/LocaleProvider";

export function SkipLink() {
  const { copy } = useLocale();

  return (
    <a href="#main-content" className="skip-link">
      {copy.skipLink}
    </a>
  );
}
