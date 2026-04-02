import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Snowflake, Sun, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const panels = panelsRef.current;
    const arrow = arrowRef.current;

    if (!section || !title || !panels) return;

    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(title,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: title, start: 'top 85%', end: 'top 55%', scrub: true }
        }
      );

      const beforePanel = panels.querySelector('.before-panel');
      const afterPanel = panels.querySelector('.after-panel');

      // Before panel — slide + scale from left
      if (beforePanel) {
        gsap.fromTo(beforePanel,
          { opacity: 0, x: '-8vw', scale: 0.92 },
          {
            opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: panels, start: 'top 80%', end: 'top 40%', scrub: true }
          }
        );
      }

      // After panel — slide + scale from right, slightly delayed
      if (afterPanel) {
        gsap.fromTo(afterPanel,
          { opacity: 0, x: '8vw', scale: 0.92 },
          {
            opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: panels, start: 'top 75%', end: 'top 35%', scrub: true }
          }
        );
      }

      // Arrow pulse
      if (arrow) {
        gsap.fromTo(arrow,
          { opacity: 0, scale: 0 },
          {
            opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)',
            scrollTrigger: { trigger: panels, start: 'top 50%', end: 'top 35%', scrub: true }
          }
        );
      }
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
      id="before-after"
      className="section-flowing relative py-28 lg:py-36"
      style={{ zIndex: 35, backgroundColor: '#F5F2EA' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            ref={titleRef}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-jungle-deep tracking-wide"
            style={{ lineHeight: 1.15 }}
          >
            {t('beforeAfterTitle')}
          </h2>
        </div>

        {/* Comparison Panels */}
        <div
          ref={panelsRef}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8"
        >
          {/* BEFORE — Winter */}
          <div className="before-panel group relative overflow-hidden rounded-2xl min-h-[450px] lg:min-h-[580px] shadow-2xl">
            <img
              src="/before-winter-1.webp"
              alt="Cold snowy winter scene showing what snowbirds leave behind"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dramatic cold overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-blue-950/40 to-blue-900/20" />

            <div className="relative z-10 h-full p-8 lg:p-12 flex flex-col justify-between min-h-[450px] lg:min-h-[580px]">
              <div className="w-16 h-16 rounded-full border-2 border-blue-300/40 bg-blue-900/30 backdrop-blur-md flex items-center justify-center">
                <Snowflake className="w-7 h-7 text-blue-200" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 mb-4 text-[10px] tracking-[0.2em] uppercase bg-blue-500/20 border border-blue-300/30 text-blue-200 rounded-full backdrop-blur-sm">
                  {t('beforeLabel')}
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl text-white tracking-wide mb-4" style={{ lineHeight: 1.15 }}>
                  {t('beforeHeadline')}
                </h3>
                <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-md">
                  {t('beforeDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Center Arrow — desktop only */}
          <div
            ref={arrowRef}
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gold shadow-lg items-center justify-center"
          >
            <ArrowRight className="w-6 h-6 text-jungle-deep" />
          </div>

          {/* AFTER — Tulum */}
          <div className="after-panel group relative overflow-hidden rounded-2xl min-h-[450px] lg:min-h-[580px] shadow-2xl">
            <img
              src="/after-tulum-1.webp"
              alt="Warm tropical Tulum lifestyle awaiting snowbird residents"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Warm golden glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-800/20 to-amber-500/5" />

            <div className="relative z-10 h-full p-8 lg:p-12 flex flex-col justify-between min-h-[450px] lg:min-h-[580px]">
              <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sun className="w-7 h-7 text-white" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 mb-4 text-[10px] tracking-[0.2em] uppercase bg-gold/20 border border-gold/40 text-gold-light rounded-full backdrop-blur-sm">
                  {t('afterLabel')}
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl text-sand-cream tracking-wide mb-4" style={{ lineHeight: 1.15 }}>
                  {t('afterHeadline')}
                </h3>
                <p className="text-base lg:text-lg text-sand-cream/80 leading-relaxed max-w-md">
                  {t('afterDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 lg:mt-18">
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            {t('ctaPrimary')}
          </button>
        </div>
      </div>
    </section>
  );
}
