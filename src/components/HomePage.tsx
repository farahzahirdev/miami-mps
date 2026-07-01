"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { TreatmentSection } from "@/components/TreatmentSection";
import {
  About,
  Contact,
  FAQ,
  HowItWorks,
  MeetDoctor,
  Reviews,
} from "@/components/Sections";
import { WhyChoose } from "@/components/WhyChoose";
import { InsuranceStrip } from "@/components/InsuranceStrip";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useLocale } from "@/context/LocaleProvider";

export function HomePage() {
  const { copy } = useLocale();

  return (
    <>
      <Header />
      <main id="main-content" className="pb-20 sm:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <WhyChoose />
        <TreatmentSection id="tms" variant="tms" images={[...copy.tms.images]} />
        <div className="mps-section-alt">
          <TreatmentSection
            id="spravato"
            variant="spravato"
            images={[...copy.spravato.images]}
            reversed
          />
        </div>
        <HowItWorks />
        <MeetDoctor />
        <Reviews />
        <FAQ />
        <InsuranceStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
