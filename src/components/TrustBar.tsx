import { copy } from "@/content/en";

export function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="mps-brand-gradient border-y border-mps-blue/10 py-8">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {copy.trust.items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-heading text-mps-h3 text-mps-blue">{item.value}</p>
            <p className="text-small mt-1 text-mps-navy/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
