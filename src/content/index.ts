import { copy as enCopy } from "./en";
import { copy as esCopy } from "./es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Spanish",
};

const copies = {
  en: enCopy,
  es: esCopy,
} as const;

export type Copy = (typeof copies)[Locale];

export function getCopy(locale: Locale): Copy {
  return copies[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
