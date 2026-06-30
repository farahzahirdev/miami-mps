"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

export function Footer() {
  const { copy, site } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mps-brand-gradient border-t border-mps-blue/10">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src={site.logo}
              alt={site.name}
              width={140}
              height={56}
              className="mb-4 h-10 w-auto"
            />
            <p className="text-small leading-relaxed text-mps-navy/70">{copy.footer.tagline}</p>
          </div>

          <div>
            <h3 className="section-eyebrow mb-3">{copy.footer.contactHeading}</h3>
            <ul className="text-small space-y-2 text-mps-navy/80">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-mps-blue"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="section-eyebrow mb-3">{copy.footer.quickLinksHeading}</h3>
            <ul className="text-small space-y-2 text-mps-navy/80">
              <li>
                <a href="#tms" className="hover:text-mps-blue">
                  {copy.header.nav.tms}
                </a>
              </li>
              <li>
                <a href="#spravato" className="hover:text-mps-blue">
                  {copy.header.nav.spravato}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-mps-blue">
                  {copy.header.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-mps-blue">
                  {copy.header.nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-small mt-10 border-t border-mps-blue/10 pt-8 text-mps-navy/60">
          <p>{copy.footer.notEmergency}</p>
          <p className="mt-2">{copy.footer.disclaimer}</p>
          <p className="mt-4">
            © {year} {site.name}. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
