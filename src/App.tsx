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
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);

      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );

            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value)
                ? r.center
                : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        }
      });

      ScrollTrigger.refresh();
    }, 100);

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
