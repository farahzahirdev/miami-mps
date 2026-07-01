"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

const quickLinks = [
  { href: "#tms", key: "tms" as const },
  { href: "#spravato", key: "spravato" as const },
  { href: "#why-us", key: "whyUs" as const },
  { href: "#contact", key: "contact" as const },
];

export function Footer() {
  const { copy, site } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mps-navy/8 bg-gradient-to-b from-white via-mps-blue/[0.06] to-mps-blue/[0.12]">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={site.logo}
              alt={site.name}
              width={160}
              height={64}
              className="h-10 w-auto sm:h-11"
            />
            <p className="text-small mt-4 max-w-xs leading-relaxed">{copy.footer.tagline}</p>
            <a href={site.phoneHref} className="btn-primary mt-6 inline-flex">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {copy.header.callCta}
            </a>
          </div>

          <div>
            <h3 className="section-eyebrow mb-4">{copy.footer.contactHeading}</h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 text-sm font-medium text-mps-navy transition hover:text-mps-blue"
                >
                  <span className="mps-icon-badge p-2.5 transition group-hover:ring-mps-blue/20">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="group flex items-center gap-3 text-sm font-medium text-mps-navy transition hover:text-mps-blue"
                >
                  <span className="mps-icon-badge p-2.5 transition group-hover:ring-mps-blue/20">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-mps-navy/85">
                <span className="mps-icon-badge shrink-0 p-2.5">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <span className="pt-1.5 leading-relaxed">{site.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="section-eyebrow mb-4">{copy.footer.quickLinksHeading}</h3>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link text-mps-navy/80 hover:text-mps-blue">
                    {copy.header.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-card border border-mps-navy/8 bg-white/70 px-5 py-5 shadow-soft sm:px-6 sm:py-6">
          <p className="text-xs leading-relaxed text-mps-slate">{copy.footer.notEmergency}</p>
          <p className="mt-2 text-xs leading-relaxed text-mps-slate/90">{copy.footer.disclaimer}</p>
          <p className="mt-4 border-t border-mps-navy/8 pt-4 text-xs text-mps-slate/80">
            © {year} {site.name}. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
