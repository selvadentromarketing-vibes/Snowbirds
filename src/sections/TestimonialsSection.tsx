import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
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

      // Cards animation
      const cardElements = cards.querySelectorAll('.testimonial-card');
      gsap.fromTo(cardElements,
        { opacity: 0, y: '8vh' },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 75%',
            end: 'top 45%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: t('testimonial1'),
      name: t('testimonial1Name'),
      location: t('testimonial1Loc'),
    },
    {
      quote: t('testimonial2'),
      name: t('testimonial2Name'),
      location: t('testimonial2Loc'),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 90, backgroundColor: '#0B3A3A' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          ref={titleRef}
          className="font-serif text-section text-sand-cream tracking-wide mb-12 lg:mb-16 max-w-2xl"
          style={{ lineHeight: 1.1 }}
        >
          {t('testimonialsTitle')}
        </h2>

        {/* Testimonial Cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card relative p-8 lg:p-10 border border-sand-cream/20 rounded-sm"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/40 mb-6" />
              
              {/* Quote text */}
              <blockquote className="font-serif text-xl lg:text-2xl text-sand-cream leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-sm font-medium">
                    {(testimonial.name as string).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sand-cream font-medium">{testimonial.name}</p>
                  <p className="text-sand-cream/60 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}