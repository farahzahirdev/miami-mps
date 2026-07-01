"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { SHOW_LANGUAGE_SWITCHER } from "@/config/features";
import { useLocale } from "@/context/LocaleProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { copy, site } = useLocale();
  const [open, setOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "#tms", label: copy.header.nav.tms },
      { href: "#spravato", label: copy.header.nav.spravato },
      { href: "#about", label: copy.header.nav.about },
      { href: "#why-us", label: copy.header.nav.whyUs },
      { href: "#contact", label: copy.header.nav.contact },
    ],
    [copy],
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-mps-navy/10 bg-white/92 backdrop-blur-lg">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
            <Image
              src={site.logo}
              alt={site.name}
              width={160}
              height={64}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {SHOW_LANGUAGE_SWITCHER && <LanguageSwitcher />}

            <a href={site.phoneHref} className="btn-primary !px-4 !py-2.5 sm:!px-5">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">{copy.header.callCta}</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-mps-navy lg:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-mps-navy/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden={!open}
      />

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] flex flex-col bg-white transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-mps-navy/10 px-5 py-4">
          <Image src={site.logo} alt={site.name} width={140} height={56} className="h-10 w-auto" />
          <button
            type="button"
            onClick={close}
            className="rounded-lg p-2 text-mps-navy transition hover:bg-mps-blue-light"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {SHOW_LANGUAGE_SWITCHER && (
          <div className="border-b border-mps-navy/10 px-5 py-4">
            <LanguageSwitcher fullWidth />
          </div>
        )}

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link block rounded-xl px-4 py-4 text-base text-mps-navy transition hover:bg-mps-blue-light hover:text-mps-blue"
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-3 border-t border-mps-navy/10 p-5">
          <a
            href={site.phoneHref}
            onClick={close}
            className="btn-primary flex w-full items-center justify-center gap-2"
          >
            <Phone className="h-5 w-5" aria-hidden />
            {copy.header.callCta} — {site.phone}
          </a>
          <a
            href="#contact-inquiry"
            onClick={close}
            className="btn-secondary flex w-full items-center justify-center"
          >
            {copy.hero.formCta}
          </a>
        </div>
      </nav>
    </>
  );
}
