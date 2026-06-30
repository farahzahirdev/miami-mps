"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Languages } from "lucide-react";
import { localeLabels, locales, type Locale } from "@/content";
import { useLocale } from "@/context/LocaleProvider";

export function LanguageSwitcher({
  className = "",
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  const { locale, setLocale, copy } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLocale = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-mps-blue/20 bg-white px-2.5 py-2 text-sm font-medium text-mps-navy transition hover:border-mps-blue/40 hover:text-mps-blue sm:px-3 ${
          fullWidth ? "w-full justify-center" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={copy.header.languageLabel}
      >
        <Languages className="h-4 w-4 shrink-0 text-mps-blue" aria-hidden />
        <span className="max-w-[5.5rem] truncate sm:max-w-none">{localeLabels[locale]}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-mps-navy/60 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={copy.header.languageLabel}
          className={`absolute top-full z-50 mt-1 min-w-[9.5rem] overflow-hidden rounded-lg border border-mps-blue/15 bg-white py-1 shadow-lg shadow-mps-blue/10 ${
            fullWidth ? "left-0 right-0" : "right-0"
          }`}
        >
          {locales.map((code) => (
            <li key={code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                lang={code}
                onClick={() => selectLocale(code)}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition hover:bg-mps-blue-light ${
                  locale === code ? "font-semibold text-mps-blue" : "text-mps-navy/80"
                }`}
              >
                <span>{localeLabels[code]}</span>
                <span className="text-xs uppercase tracking-wide text-mps-navy/50">
                  {code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
