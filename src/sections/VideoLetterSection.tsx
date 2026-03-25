import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoLetterSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const label = labelRef.current;
    const statement = statementRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !label || !statement || !cta) return;

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
      // Label
      scrollTl.fromTo(label,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, ease: 'none' },
        0
      );

      // Statement words
      const words = statement.querySelectorAll('.word');
      scrollTl.fromTo(words,
        { opacity: 0, y: 28, rotateX: 22 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.015, ease: 'none' },
        0.06
      );

      // CTA
      scrollTl.fromTo(cta,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, ease: 'none' },
        0.18
      );

      // Background parallax (0% - 70%)
      scrollTl.fromTo(bg,
        { y: 0 },
        { y: '-3vh', ease: 'none' },
        0
      );

      // SETTLE (30% - 70%) - elements hold position

      // EXIT (70% - 100%)
      scrollTl.fromTo(words,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -16, ease: 'power2.in', stagger: 0.01 },
        0.7
      );

      scrollTl.fromTo(label,
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
        { scale: 1.05, opacity: 0.7, ease: 'power2.in' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const statementText = t('videoStatement') as string;
  const words = statementText.split(' ');

  return (
    <section 
      ref={sectionRef}
      id="video-letter"
      className="section-pinned relative flex items-center justify-center"
      style={{ zIndex: 20 }}
    >
      {/* Background image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <img 
          src="/jungle_path_walking.jpg" 
          alt="Jungle Path"
          className="w-full h-full object-cover"
        />
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <span 
          ref={labelRef}
          className="label-micro block mb-8"
        >
          {t('videoLabel')}
        </span>

        {/* Statement */}
        <p 
          ref={statementRef}
          className="font-serif text-section text-sand-cream tracking-wide mb-12"
          style={{ lineHeight: 1.15 }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </p>

        {/* CTA */}
        <button 
          ref={ctaRef}
          className="inline-flex items-center gap-3 text-sand-cream hover:text-gold transition-colors group"
        >
          <span className="w-14 h-14 rounded-full border border-sand-cream/40 flex items-center justify-center group-hover:border-gold transition-colors">
            <Play className="w-5 h-5 ml-0.5" />
          </span>
          <span className="text-sm tracking-micro uppercase">{t('videoCta')}</span>
        </button>
      </div>
    </section>
  );
}