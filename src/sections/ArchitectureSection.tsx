import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ArchitectureSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const gallery = galleryRef.current;

    if (!section || !title || !gallery) return;

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

      // Gallery cards animation
      const cards = gallery.querySelectorAll('.gallery-card');
      gsap.fromTo(cards,
        { opacity: 0, y: '10vh', scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gallery,
            start: 'top 75%',
            end: 'top 45%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const images = [
    {
      src: '/architecture_craft_01.webp',
      alt: 'Mexican artisan craft details in Selvadentro architecture',
      caption: t('mexicanCraft'),
    },
    {
      src: '/architecture_craft_02.webp',
      alt: 'Balinese-inspired calm interior design at Selvadentro Tulum',
      caption: t('balineseCalm'),
    },
    {
      src: '/architecture_craft_03.webp',
      alt: 'Tropical modern architecture blending jungle and design in Tulum',
      caption: t('tropicalModern'),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="architecture"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 60, backgroundColor: '#F5F2EA' }}
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          ref={titleRef}
          className="font-serif text-section text-jungle-deep tracking-wide mb-12 lg:mb-16 max-w-2xl"
          style={{ lineHeight: 1.1 }}
        >
          {t('architectureTitle')}
        </h2>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="gallery-card relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep/80 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-sm text-sand-cream/90 tracking-micro uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  {image.caption}
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-jungle-deep/10 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}