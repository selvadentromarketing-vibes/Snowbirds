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
      gsap.fromTo(title,
        { opacity: 0, x: '-6vw' },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: title, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      const statCards = stats.querySelectorAll('.stat-card');
      gsap.fromTo(statCards,
        { opacity: 0, y: '6vh', scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: stats, start: 'top 75%', end: 'top 45%', scrub: true }
        }
      );

      gsap.fromTo(table,
        { opacity: 0, y: '4vh' },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: table, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      gsap.fromTo(cta,
        { opacity: 0, y: '3vh' },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: cta, start: 'top 85%', end: 'top 65%', scrub: true }
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
      title: t('lotPriceTitle'),
      value: t('lotPriceFrom'),
      label: t('lotPriceLabel'),
    },
    {
      icon: TrendingUp,
      title: t('lotAppreciationTitle'),
      value: '+134%',
      label: t('lotAppreciationLabel'),
    },
    {
      icon: TreePine,
      title: t('lotPreservedTitle'),
      value: '65%',
      label: t('lotPreservedLabel'),
    },
    {
      icon: Shield,
      title: t('lotFinancingTitle'),
      value: '0%',
      label: t('lotFinancingLabel'),
    },
  ];

  const phases = [
    {
      phase: t('lotPhase1'),
      current: true,
      usd: '$70,000',
      mxn: '~$1,400,000 MXN',
      gain: '—',
      desc: t('lotPhase1Desc'),
    },
    {
      phase: t('lotPhase2'),
      current: false,
      usd: '$85,400',
      mxn: '~$1,708,000 MXN',
      gain: '+22%',
      desc: t('lotPhase2Desc'),
    },
    {
      phase: t('lotPhase3'),
      current: false,
      usd: '$130,900',
      mxn: '~$2,618,000 MXN',
      gain: '+87%',
      desc: t('lotPhase3Desc'),
    },
    {
      phase: t('lotPhase4'),
      current: false,
      usd: '$163,800',
      mxn: '~$3,276,000 MXN',
      gain: '+134%',
      desc: t('lotPhase4Desc'),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 20, backgroundColor: '#F5F2EA' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-serif text-section text-jungle-deep tracking-wide mb-12 lg:mb-16 max-w-3xl"
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
              className="stat-card relative overflow-hidden rounded-xl p-6 lg:p-8 card-hover bg-white/60 border border-jungle-deep/10"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mb-3">
                  <stat.icon className="w-4 h-4 text-gold" />
                </div>
                <p className="text-xs font-medium tracking-wider uppercase text-gold-dark mb-1">
                  {stat.title}
                </p>
                <p className="font-serif text-2xl lg:text-3xl text-jungle-deep tracking-wide mb-1">
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm text-jungle-deep/60">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Table — Simplified */}
        <div
          ref={tableRef}
          className="relative overflow-hidden rounded-xl mb-10 bg-white/60 border border-jungle-deep/10"
        >
          <div className="relative z-10 p-6 lg:p-8">
            <h3 className="font-serif text-xl lg:text-2xl text-jungle-deep tracking-wide mb-6">
              {t('lotPhaseTitle')}
            </h3>

            <div className="space-y-0 divide-y divide-jungle-deep/10">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row md:items-center justify-between py-4 gap-2 md:gap-4 ${
                    phase.current ? 'bg-gold/5 -mx-4 px-4 rounded-lg' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-[140px]">
                    <span className={`font-medium ${phase.current ? 'text-gold-dark' : 'text-jungle-deep'}`}>
                      {phase.phase}
                    </span>
                    {phase.current && (
                      <span className="text-[10px] font-medium tracking-wider uppercase text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full">
                        {t('lotCurrent')}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-xl text-jungle-deep font-medium">{phase.usd} USD</span>
                    <span className="text-sm text-jungle-deep/50">{phase.mxn}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {phase.gain !== '—' && (
                      <span className="text-sm font-medium text-gold-dark">{phase.gain}</span>
                    )}
                    <span className="text-sm text-jungle-deep/60">{phase.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-jungle-deep/45">
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
