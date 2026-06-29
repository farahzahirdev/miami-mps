import { FileText, Phone } from "lucide-react";
import { copy, site } from "@/content/en";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-mps-blue/10 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(6,18,129,0.1)] backdrop-blur-md sm:hidden">
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
