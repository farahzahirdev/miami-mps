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
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { copy } from "@/content/en";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        {copy.skipLink}
      </a>
      <Header />
      <main id="main-content" className="pb-20 sm:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <WhyChoose />
        <TreatmentSection
          id="tms"
          variant="tms"
          images={[
            {
              src: "/images/tms.png",
              alt: "Transcranial Magnetic Stimulation (TMS) illustration",
              className: "bg-white",
            },
            {
              src: "/images/tms-equipment.png",
              alt: "TMS treatment equipment at Miami Psychiatric Services",
              className: "bg-white",
            },
          ]}
        />
        <div className="bg-mps-blue-light/30">
          <TreatmentSection
            id="spravato"
            variant="spravato"
            images={[
              {
                src: "/images/spravato.png",
                alt: "Spravato (esketamine) nasal spray treatment",
                className: "bg-white",
              },
              {
                src: "/images/spravato-product.png",
                alt: "Spravato (esketamine) nasal spray treatment kits",
                className: "bg-black",
              },
            ]}
            reversed
          />
        </div>
        <HowItWorks />
        <MeetDoctor />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
