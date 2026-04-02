import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlueZoneSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const desc = descRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !headline || !desc || !cta) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      // Headline words
      const words = headline.querySelectorAll('.word');
      scrollTl.fromTo(words,
        { opacity: 0, y: 32, rotateX: 25 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.02, ease: 'none' },
        0
      );

      // Description
      scrollTl.fromTo(desc,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, ease: 'none' },
        0.14
      );

      // CTA
      scrollTl.fromTo(cta,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, ease: 'none' },
        0.18
      );

      // Background parallax (0% - 70%)
      scrollTl.fromTo(bg,
        { y: 0 },
        { y: '-4vh', ease: 'none' },
        0
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(words,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -18, ease: 'power2.in', stagger: 0.01 },
        0.7
      );

      scrollTl.fromTo(desc,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(cta,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(bg,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.7, ease: 'power2.in' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToLifestyle = () => {
    const el = document.getElementById('lifestyle');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineText = t('blueZoneTitle') as string;
  const words = headlineText.split(' ');

  return (
    <section 
      ref={sectionRef}
      id="blue-zone"
      className="section-pinned relative flex items-center justify-center"
      style={{ zIndex: 40 }}
    >
      {/* Background image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/cenote_water_surface.webp"
          alt="Crystal-clear cenote water surface at Selvadentro wellness community in Tulum"
          loading="lazy"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: '50% 35%' }}
        />
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="font-serif text-section text-sand-cream tracking-wider mb-8"
          style={{ lineHeight: 1.1 }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </h2>

        {/* Description */}
        <p 
          ref={descRef}
          className="text-base lg:text-lg text-sand-cream/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          {t('blueZoneDesc')}
        </p>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={scrollToLifestyle}
          className="btn-outline-dark"
        >
          {t('blueZoneCta')}
        </button>
      </div>
    </section>
  );
}