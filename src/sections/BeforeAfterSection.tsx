import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Snowflake, Sun } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const panels = panelsRef.current;

    if (!section || !title || !panels) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(title,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: title, start: 'top 80%', end: 'top 60%', scrub: true }
        }
      );

      const beforePanel = panels.querySelector('.before-panel');
      const afterPanel = panels.querySelector('.after-panel');

      if (beforePanel) {
        gsap.fromTo(beforePanel,
          { opacity: 0, x: '-6vw' },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: panels, start: 'top 75%', end: 'top 45%', scrub: true }
          }
        );
      }

      if (afterPanel) {
        gsap.fromTo(afterPanel,
          { opacity: 0, x: '6vw' },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: panels, start: 'top 75%', end: 'top 45%', scrub: true }
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 35, backgroundColor: '#F5F2EA' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-serif text-section text-jungle-deep tracking-wide mb-12 lg:mb-16 text-center"
          style={{ lineHeight: 1.1 }}
        >
          {t('beforeAfterTitle')}
        </h2>

        {/* Comparison Panels */}
        <div
          ref={panelsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {/* BEFORE — Winter */}
          <div className="before-panel relative overflow-hidden rounded-xl min-h-[400px] lg:min-h-[500px]">
            <img
              src="/before-winter-1.jpg"
              alt={t('beforeLabel') as string}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Cool blue-grey tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-blue-900/30 to-blue-900/10" />

            <div className="relative z-10 h-full p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
              <div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-blue-200" />
              </div>

              <div>
                <h3 className="font-serif text-2xl lg:text-3xl text-white tracking-wide mb-3">
                  {t('beforeLabel')}
                </h3>
                <p className="text-base text-white/75 leading-relaxed max-w-sm">
                  {t('beforeDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* AFTER — Tulum */}
          <div className="after-panel relative overflow-hidden rounded-xl min-h-[400px] lg:min-h-[500px]">
            <img
              src="/after-tulum-1.jpg"
              alt={t('afterLabel') as string}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm golden tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-800/15 to-transparent" />

            <div className="relative z-10 h-full p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
              <div className="w-14 h-14 rounded-full border border-gold/50 bg-gold/10 backdrop-blur-sm flex items-center justify-center">
                <Sun className="w-6 h-6 text-gold-light" />
              </div>

              <div>
                <h3 className="font-serif text-2xl lg:text-3xl text-sand-cream tracking-wide mb-3">
                  {t('afterLabel')}
                </h3>
                <p className="text-base text-sand-cream/80 leading-relaxed max-w-sm">
                  {t('afterDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
