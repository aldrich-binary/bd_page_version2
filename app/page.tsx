"use client";
import { Navbar } from "./componets/Navbar";
import { HeroSection } from "./componets/HeroSection";
import { ResultSections } from "./componets/ResultsSection";
import { CallToAction } from "./componets/CallToAction";
import { TeamSection } from "./componets/TeamSection";
import { FooterSection } from "./componets/FooterSection";

const LegalLandingPage = () => {
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
