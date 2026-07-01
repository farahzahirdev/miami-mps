"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getCopy,
  isLocale,
  type Copy,
  type Locale,
} from "@/content";
import { site } from "@/content/site";
import { SHOW_LANGUAGE_SWITCHER } from "@/config/features";

const STORAGE_KEY = "mps-locale";

type LocaleContextValue = {
  locale: Locale;
  copy: Copy;
  site: typeof site;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (!SHOW_LANGUAGE_SWITCHER) return defaultLocale;
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && isLocale(stored) ? stored : defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const activeLocale = SHOW_LANGUAGE_SWITCHER ? locale : defaultLocale;

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = activeLocale === "es" ? "es" : "en";
  }, [activeLocale]);

  const setLocale = useCallback((next: Locale) => {
    if (!SHOW_LANGUAGE_SWITCHER) return;
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({
      locale: activeLocale,
      copy: getCopy(activeLocale),
      site,
      setLocale,
    }),
    [activeLocale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
