import { useEffect } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '@/sections/Header';
import HeroSection from '@/sections/HeroSection';
import PriceLotSection from '@/sections/PriceLotSection';
import WhyTulumSection from '@/sections/WhyTulumSection';
import BlueZoneSection from '@/sections/BlueZoneSection';
import ConceptSection from '@/sections/ConceptSection';
import ArchitectureSection from '@/sections/ArchitectureSection';
import LifestyleSection from '@/sections/LifestyleSection';
import RareOpportunitySection from '@/sections/RareOpportunitySection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import FinalCTASection from '@/sections/FinalCTASection';
import StickyCTA from '@/sections/StickyCTA';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            
            // If not in pinned section, allow free scroll
            if (!inPinned) return value;

            // Find nearest pinned center
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

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative">
        {/* Noise overlay */}
        <div className="noise-overlay" />
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="relative">
          <HeroSection />
          <PriceLotSection />
          <WhyTulumSection />
          <BlueZoneSection />
          <ConceptSection />
          <ArchitectureSection />
          <LifestyleSection />
          <RareOpportunitySection />
          <TestimonialsSection />
          <FinalCTASection />
        </main>
        
        {/* Sticky CTA */}
        <StickyCTA />
      </div>
    </LanguageProvider>
  );
}

export default App;