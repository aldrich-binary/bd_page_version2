"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "./componets/Navbar";
import { HeroSection } from "./componets/HeroSection";
import { ResultSections } from "./componets/ResultsSection";
import { CallToAction } from "./componets/CallToAction";
import { TeamSection } from "./componets/TeamSection";
import { FooterSection } from "./componets/FooterSection";

type AccordionKeys =
  | "corporateLaw"
  | "familyLaw"
  | "criminalDefense"
  | "personalInjury";

const LegalLandingPage = () => {
  const [accordions, setAccordions] = useState<Record<AccordionKeys, boolean>>({
    corporateLaw: false,
    familyLaw: false,
    criminalDefense: false,
    personalInjury: false,
  });
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const toggleAccordion = (key: AccordionKeys) => {
    setAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        {/* Navigation Section */}
        <section className="bg-orange-50">
          <Navbar />

          {/* Hero Section */}
          <HeroSection />
        </section>

        {/* Results Section */}

        <ResultSections />

        <TeamSection />

        {/* Contact Section */}
        <div className="bg-teal-900 py-20">
          <CallToAction />
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default LegalLandingPage;
