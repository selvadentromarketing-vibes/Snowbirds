import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConceptSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    const text = textRef.current;

    if (!section || !photo || !text) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(photo,
        { opacity: 0, x: '-6vw' },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 75%', end: 'top 45%', scrub: true }
        }
      );

      gsap.fromTo(text.children,
        { opacity: 0, x: '4vw' },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 75%', end: 'top 45%', scrub: true }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="concept"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 50, backgroundColor: '#E8DFC8' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Photo */}
          <div
            ref={photoRef}
            className="flex justify-center lg:justify-end"
          >
            <div className="rounded-xl overflow-hidden bg-sand-beige w-[240px] md:w-[280px]">
              <img
                src="/selvadentro-aerial.png"
                alt="Suspiro en Selvadentro aerial view"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div ref={textRef}>
            <span className="label-micro block mb-4 text-xs">
              {t('conceptLabel')}
            </span>

            <p
              className="font-serif text-xl lg:text-2xl text-jungle-deep tracking-wide mb-8"
              style={{ lineHeight: 1.4 }}
            >
              {t('conceptStatement')}
            </p>

            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              {t('conceptCta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
