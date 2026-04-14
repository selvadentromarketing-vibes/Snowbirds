import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LifestyleSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const images = imagesRef.current;

    if (!section || !title || !images) return;

    // On mobile, use simple fade-in animations instead of pinned collage
    if (isMobile) {
      const ctx = gsap.context(() => {
        gsap.fromTo(title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: title, start: 'top 85%' } }
        );

        const imageElements = images.querySelectorAll('.lifestyle-image');
        imageElements.forEach((img) => {
          gsap.fromTo(img,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: img, start: 'top 90%' } }
          );
        });
      }, section);

      return () => ctx.revert();
    }

    // Desktop: original pinned collage animation
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.7,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(title,
        { opacity: 0, x: '-8vw' },
        { opacity: 1, x: 0, ease: 'none' },
        0
      );

      const imageElements = images.querySelectorAll('.lifestyle-image');
      const delays = [0, 0.06, 0.10, 0.12, 0.14];

      imageElements.forEach((img, i) => {
        scrollTl.fromTo(img,
          { opacity: 0, scale: 0.96, y: '6vh' },
          { opacity: 1, scale: 1, y: 0, ease: 'none' },
          delays[i] || 0
        );
      });

      const labels = images.querySelectorAll('.image-label');
      scrollTl.fromTo(labels,
        { opacity: 0, y: 10 },
        { opacity: 0.9, y: 0, stagger: 0.02, ease: 'none' },
        0.18
      );

      // EXIT (70% - 100%)
      const leftImages = [0, 2];
      const rightImages = [1];
      const bottomImages = [3, 4];

      leftImages.forEach(i => {
        if (imageElements[i]) {
          scrollTl.fromTo(imageElements[i],
            { x: 0, opacity: 1 },
            { x: '-6vw', opacity: 0, ease: 'power2.in' },
            0.7
          );
        }
      });

      rightImages.forEach(i => {
        if (imageElements[i]) {
          scrollTl.fromTo(imageElements[i],
            { x: 0, opacity: 1 },
            { x: '6vw', opacity: 0, ease: 'power2.in' },
            0.7
          );
        }
      });

      bottomImages.forEach(i => {
        if (imageElements[i]) {
          scrollTl.fromTo(imageElements[i],
            { y: 0, opacity: 1 },
            { y: '6vh', opacity: 0, ease: 'power2.in' },
            0.72
          );
        }
      });

      scrollTl.fromTo(title,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  const lifestyleImages = [
    {
      src: '/yoga_deck_jungle.webp',
      alt: 'Morning yoga session on jungle deck at Selvadentro Tulum',
      label: t('morningYoga'),
      desktopClass: 'left-[8vw] top-[30vh] w-[38vw] aspect-[16/10]',
    },
    {
      src: '/cenote_swim_platform.webp',
      alt: 'Natural cenote swimming platform surrounded by jungle',
      label: t('cenoteSwim'),
      desktopClass: 'right-[8vw] top-[18vh] w-[26vw] aspect-square',
    },
    {
      src: '/biking_trail_jungle.webp',
      alt: 'Biking trail through lush jungle at Selvadentro community',
      label: t('bikingTrails'),
      desktopClass: 'left-[8vw] bottom-[10vh] w-[22vw] aspect-[4/3]',
    },
    {
      src: '/tulum_beach_aerial.webp',
      alt: 'Aerial view of pristine Tulum Caribbean beach',
      label: t('beachTime'),
      desktopClass: 'left-[34vw] bottom-[10vh] w-[22vw] aspect-[4/3]',
    },
    {
      src: '/dinner_under_stars.webp',
      alt: 'Outdoor dining under the stars at Selvadentro Tulum',
      label: t('dinnerStars'),
      desktopClass: 'right-[8vw] bottom-[10vh] w-[22vw] aspect-[4/3]',
    },
  ];

  // ─── MOBILE LAYOUT ───
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        id="lifestyle"
        className="relative bg-jungle-deep py-16 px-5"
        style={{ zIndex: 70 }}
      >
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-serif text-4xl text-sand-cream tracking-wide mb-8"
          style={{ lineHeight: 1.1 }}
        >
          {t('lifestyleTitle')}
        </h2>

        {/* Images Grid */}
        <div ref={imagesRef} className="flex flex-col gap-4">
          {/* First row: large image */}
          <div className="lifestyle-image overflow-hidden rounded-xl aspect-[16/10] relative">
            <img src={lifestyleImages[0].src} alt={lifestyleImages[0].alt} loading="lazy" className="w-full h-full object-cover" />
            <div className="image-label absolute bottom-3 left-3 px-3 py-1.5 bg-jungle-deep/60 backdrop-blur-sm rounded-xl">
              <span className="text-xs text-sand-cream tracking-micro uppercase">{lifestyleImages[0].label}</span>
            </div>
            <div className="absolute inset-0 border border-sand-cream/10 rounded-xl pointer-events-none" />
          </div>

          {/* Second row: two images side by side */}
          <div className="grid grid-cols-2 gap-4">
            {lifestyleImages.slice(1, 3).map((image, index) => (
              <div key={index} className="lifestyle-image overflow-hidden rounded-xl aspect-square relative">
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
                <div className="image-label absolute bottom-3 left-3 px-2.5 py-1 bg-jungle-deep/60 backdrop-blur-sm rounded-xl">
                  <span className="text-[10px] text-sand-cream tracking-micro uppercase">{image.label}</span>
                </div>
                <div className="absolute inset-0 border border-sand-cream/10 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Third row: two images side by side */}
          <div className="grid grid-cols-2 gap-4">
            {lifestyleImages.slice(3, 5).map((image, index) => (
              <div key={index} className="lifestyle-image overflow-hidden rounded-xl aspect-[4/3] relative">
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
                <div className="image-label absolute bottom-3 left-3 px-2.5 py-1 bg-jungle-deep/60 backdrop-blur-sm rounded-xl">
                  <span className="text-[10px] text-sand-cream tracking-micro uppercase">{image.label}</span>
                </div>
                <div className="absolute inset-0 border border-sand-cream/10 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ─── DESKTOP LAYOUT (original pinned collage) ───
  return (
    <section
      ref={sectionRef}
      id="lifestyle"
      className="section-pinned relative"
      style={{ zIndex: 70 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-jungle-deep" />

      {/* Title */}
      <h2
        ref={titleRef}
        className="absolute left-[8vw] top-[12vh] font-serif text-section text-sand-cream tracking-wide max-w-[34vw]"
        style={{ lineHeight: 1.1, zIndex: 10 }}
      >
        {t('lifestyleTitle')}
      </h2>

      {/* Collage Images */}
      <div ref={imagesRef} className="absolute inset-0">
        {lifestyleImages.map((image, index) => (
          <div
            key={index}
            className={`lifestyle-image absolute overflow-hidden rounded-xl ${image.desktopClass}`}
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />

            {/* Label */}
            <div className="image-label absolute bottom-4 left-4 px-3 py-1.5 bg-jungle-deep/60 backdrop-blur-sm rounded-xl">
              <span className="text-xs text-sand-cream tracking-micro uppercase">
                {image.label}
              </span>
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-sand-cream/10 rounded-xl pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
