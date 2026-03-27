import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Shield, TreePine, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PriceLotSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const stats = statsRef.current;
    const table = tableRef.current;
    const cta = ctaRef.current;

    if (!section || !title || !stats || !table || !cta) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(title,
        { opacity: 0, x: '-6vw' },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Stats cards animation
      const statCards = stats.querySelectorAll('.stat-card');
      gsap.fromTo(statCards,
        { opacity: 0, y: '6vh', scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stats,
            start: 'top 75%',
            end: 'top 45%',
            scrub: true,
          }
        }
      );

      // Table animation
      gsap.fromTo(table,
        { opacity: 0, y: '4vh' },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: table,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // CTA animation
      gsap.fromTo(cta,
        { opacity: 0, y: '3vh' },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 85%',
            end: 'top 65%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      icon: DollarSign,
      value: t('lotPriceFrom'),
      label: t('lotPriceLabel'),
    },
    {
      icon: TrendingUp,
      value: '+134%',
      label: t('lotAppreciationLabel'),
    },
    {
      icon: TreePine,
      value: '65%',
      label: t('lotPreservedLabel'),
    },
    {
      icon: Shield,
      value: '0%',
      label: t('lotFinancingLabel'),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 20, backgroundColor: '#0B3A3A' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-serif text-section text-sand-cream tracking-wide mb-12 lg:mb-16 max-w-3xl"
          style={{ lineHeight: 1.1 }}
        >
          {t('lotSectionTitle')}
        </h2>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card relative overflow-hidden rounded-sm p-6 lg:p-8 card-hover"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-jungle-emerald/40 to-jungle-deep/80" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-sand-cream/30 flex items-center justify-center mb-4">
                  <stat.icon className="w-4 h-4 text-gold" />
                </div>
                <p className="font-serif text-2xl lg:text-3xl text-gold tracking-wide mb-1">
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm text-sand-cream/70">
                  {stat.label}
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-sand-cream/10 rounded-sm pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div
          ref={tableRef}
          className="relative overflow-hidden rounded-sm mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-jungle-emerald/20 to-jungle-deep/60" />
          <div className="absolute inset-0 border border-sand-cream/10 rounded-sm pointer-events-none" />

          <div className="relative z-10 p-6 lg:p-8">
            <h3 className="font-serif text-xl lg:text-2xl text-sand-cream tracking-wide mb-6">
              {t('lotPhaseTitle')}
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-sand-cream/20">
                    <th className="text-left py-3 pr-4 text-sand-cream/60 font-medium tracking-wider uppercase text-xs">
                      {t('lotPhaseCol')}
                    </th>
                    <th className="text-left py-3 px-4 text-sand-cream/60 font-medium tracking-wider uppercase text-xs">
                      {t('lotPriceCol')}
                    </th>
                    <th className="text-left py-3 pl-4 text-sand-cream/60 font-medium tracking-wider uppercase text-xs">
                      {t('lotGainCol')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-sand-cream/10 bg-gold/5">
                    <td className="py-3 pr-4 text-gold font-medium">
                      {t('lotPhase1')} <span className="text-xs text-gold/70 ml-1">{t('lotCurrent')}</span>
                    </td>
                    <td className="py-3 px-4 text-sand-cream">$15.50 USD/sqft</td>
                    <td className="py-3 pl-4 text-sand-cream/60">—</td>
                  </tr>
                  <tr className="border-b border-sand-cream/10">
                    <td className="py-3 pr-4 text-sand-cream">{t('lotPhase2')}</td>
                    <td className="py-3 px-4 text-sand-cream">$18.91 USD/sqft</td>
                    <td className="py-3 pl-4 text-gold">+22%</td>
                  </tr>
                  <tr className="border-b border-sand-cream/10">
                    <td className="py-3 pr-4 text-sand-cream">{t('lotPhase3')}</td>
                    <td className="py-3 px-4 text-sand-cream">$28.99 USD/sqft</td>
                    <td className="py-3 pl-4 text-gold">+87%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-sand-cream">{t('lotPhase4')}</td>
                    <td className="py-3 px-4 text-sand-cream">$36.27 USD/sqft</td>
                    <td className="py-3 pl-4 text-gold font-medium">+134%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-sand-cream/50">
              {t('lotPriceNote')}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            {t('lotCta')}
          </button>
        </div>
      </div>
    </section>
  );
}
