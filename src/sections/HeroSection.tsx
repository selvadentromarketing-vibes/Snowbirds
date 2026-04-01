import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !headline || !subheadline || !cta) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation (on page load)
      const loadTl = gsap.timeline();
      
      // Background scale
      loadTl.fromTo(bg, 
        { scale: 1.08 },
        { scale: 1, duration: 1.2, ease: 'power2.out' },
        0
      );

      // Headline words animation
      const words = headline.querySelectorAll('.word');
      loadTl.fromTo(words,
        { opacity: 0, y: 24, rotateX: 18 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06, ease: 'power3.out' },
        0.2
      );

      // Subheadline
      loadTl.fromTo(subheadline,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        0.55
      );

      // CTAs
      loadTl.fromTo(cta.children,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        0.75
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset elements when scrolling back to top
            gsap.set(words, { opacity: 1, y: 0 });
            gsap.set(subheadline, { opacity: 1, y: 0 });
            gsap.set(cta.children, { opacity: 1, y: 0 });
            gsap.set(bg, { scale: 1, opacity: 1 });
          }
        }
      });

      // Exit animations (70% - 100%)
      scrollTl.fromTo(words,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -18, ease: 'power2.in', stagger: 0.02 },
        0.7
      );

      scrollTl.fromTo(subheadline,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -12, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(cta.children,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -12, ease: 'power2.in', stagger: 0.05 },
        0.74
      );

      scrollTl.fromTo(bg,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.75, ease: 'power2.in' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVideo = () => {
    const element = document.getElementById('video-letter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="section-pinned relative flex items-center justify-center"
      style={{ zIndex: 10 }}
    >
      {/* Background image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <img 
          src="/hero_jungle_canopy.jpg" 
          alt="Selvadentro Jungle"
          className="w-full h-full object-cover"
        />
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-hero text-sand-cream tracking-widest mb-2"
          style={{ lineHeight: 1.05 }}
        >
          <span className="word inline-block">{t('wordmark')}</span>
        </h1>
        <p className="word text-lg md:text-xl text-sand-cream/60 tracking-[0.2em] uppercase font-light mb-6">
          {t('heroSubtitle')}
        </p>

        {/* Subheadline */}
        <p 
          ref={subheadlineRef}
          className="text-lg md:text-xl text-sand-cream/80 max-w-2xl mx-auto mb-10 font-light"
        >
          {t('heroSubheadline')}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            {t('ctaPrimary')}
          </button>
          <button
            onClick={scrollToVideo}
            className="btn-outline-dark"
          >
            {t('ctaSecondary')}
          </button>
        </div>
      </div>
    </section>
  );
}