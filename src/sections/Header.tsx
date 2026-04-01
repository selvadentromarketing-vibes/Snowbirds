import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = language === 'es' ? [
    { id: 'hero', label: 'Inicio' },
    { id: 'pricing', label: 'Inversión' },
    { id: 'why-tulum', label: 'Tulum' },
    { id: 'before-after', label: 'Tu nueva vida' },
    { id: 'blue-zone', label: 'Bienestar' },
    { id: 'concept', label: 'Concepto' },
    { id: 'architecture', label: 'Arquitectura' },
    { id: 'lifestyle', label: 'Estilo de vida' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'contact', label: 'Contacto' },
  ] : [
    { id: 'hero', label: 'Home' },
    { id: 'pricing', label: 'Investment' },
    { id: 'why-tulum', label: 'Tulum' },
    { id: 'before-after', label: 'Your new life' },
    { id: 'blue-zone', label: 'Wellness' },
    { id: 'concept', label: 'Concept' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-jungle-deep/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-5">
          {/* Wordmark */}
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/selvadentro-logo-cream.png"
              alt="Suspiro en Selvadentro"
              className="h-8 lg:h-9 w-auto"
            />
          </button>

          {/* Right side controls */}
          <div className="flex items-center gap-6">
            {/* Language toggle */}
            <div className="flex items-center gap-2 text-sm">
              <button 
                onClick={() => setLanguage('es')}
                className={`transition-colors ${language === 'es' ? 'text-gold' : 'text-sand-cream/60 hover:text-sand-cream'}`}
              >
                ES
              </button>
              <span className="text-sand-cream/30">|</span>
              <button 
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-gold' : 'text-sand-cream/60 hover:text-sand-cream'}`}
              >
                EN
              </button>
            </div>

            {/* Menu button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 text-sand-cream hover:text-gold transition-colors"
            >
              <span className="text-xs tracking-micro uppercase hidden sm:inline">{t('menu')}</span>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-jungle-deep/98 backdrop-blur-xl" />
        
        <div className="relative h-full flex flex-col">
          {/* Menu header */}
          <div className="flex items-center justify-between px-6 lg:px-12 py-5">
            <img
              src="/selvadentro-logo-cream.png"
              alt="Suspiro en Selvadentro"
              className="h-8 lg:h-9 w-auto"
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-sand-cream hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-sand-cream/80 hover:text-gold transition-colors tracking-wide"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.4s ease ${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Menu footer */}
          <div className="px-6 lg:px-12 py-8 flex justify-center gap-8 text-sm text-sand-cream/50">
            <a href="/privacy" className="hover:text-gold transition-colors">{t('privacy')}</a>
            <a href="/terms" className="hover:text-gold transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </>
  );
}