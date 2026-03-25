import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar } from 'lucide-react';

export default function StickyCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (about 100vh)
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-jungle-deep/95 backdrop-blur-md border-t border-sand-cream/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-3">
            <img
              src="/selvadentro-logo.webp"
              alt="Selvadentro Tulum"
              className="h-6 w-auto"
            />
            <span className="text-sand-cream/50">|</span>
            <span className="text-sm text-sand-cream/70">
              {t('stickyTagline')}
            </span>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="btn-primary flex items-center gap-2 text-xs py-3 px-6"
          >
            <Calendar className="w-4 h-4" />
            {t('ctaPrimary')}
          </button>
        </div>
      </div>
    </div>
  );
}