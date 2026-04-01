import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '@/sections/Header';
import HeroSection from '@/sections/HeroSection';
import PriceLotSection from '@/sections/PriceLotSection';
import WhyTulumSection from '@/sections/WhyTulumSection';
import BeforeAfterSection from '@/sections/BeforeAfterSection';
import BlueZoneSection from '@/sections/BlueZoneSection';
import ConceptSection from '@/sections/ConceptSection';
import ArchitectureSection from '@/sections/ArchitectureSection';
import LifestyleSection from '@/sections/LifestyleSection';
import RareOpportunitySection from '@/sections/RareOpportunitySection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import FinalCTASection from '@/sections/FinalCTASection';
import StickyCTA from '@/sections/StickyCTA';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  useEffect(() => {
    // Let pinned sections handle their own scroll behavior
    // No global snap — it fights with natural scroll momentum
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <Header />
      <main className="relative">
        <HeroSection />
        <PriceLotSection />
        <WhyTulumSection />
        <BeforeAfterSection />
        <BlueZoneSection />
        <ConceptSection />
        <ArchitectureSection />
        <LifestyleSection />
        <RareOpportunitySection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <StickyCTA />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
