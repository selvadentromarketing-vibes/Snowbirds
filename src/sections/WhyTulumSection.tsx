import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Plane, Umbrella } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyTulumSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !cards) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(title,
        { opacity: 0, x: '-6vw' },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: title, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      const cardElements = cards.querySelectorAll('.bento-card');
      gsap.fromTo(cardElements,
        { opacity: 0, y: '8vh', scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: cards, start: 'top 75%', end: 'top 45%', scrub: true }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: Sun,
      title: t('warmWeather'),
      description: t('warmWeatherDesc'),
      image: '/why-tulum-sun.webp',
      alt: 'Warm sunny weather in Tulum, Mexico year-round',
    },
    {
      icon: Plane,
      title: t('airportAccess'),
      description: t('airportAccessDesc'),
      image: '/why-tulum-airport.webp',
      alt: 'New Tulum International Airport providing direct access',
    },
    {
      icon: Umbrella,
      title: t('beachesWellness'),
      description: t('beachesWellnessDesc'),
      image: '/why-tulum-beaches.webp',
      alt: 'World-famous Tulum beaches and wellness lifestyle',
      featured: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-tulum"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 30, backgroundColor: '#E8DFC8' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-serif text-section text-jungle-deep tracking-wide mb-12 lg:mb-16 max-w-2xl"
          style={{ lineHeight: 1.1 }}
        >
          {t('whyTulumTitle')}
        </h2>

        {/* Bento Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bento-card relative overflow-hidden rounded-xl card-hover ${
                card.featured
                  ? 'md:col-span-2 min-h-[320px] lg:min-h-[400px]'
                  : 'min-h-[240px] lg:min-h-[280px]'
              }`}
            >
              {/* Background photo */}
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full border border-sand-cream/40 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-gold" />
                </div>

                <div>
                  <h3 className="font-serif text-xl lg:text-2xl text-sand-cream tracking-wide mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-sand-cream/80">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
