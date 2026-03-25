import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Mail, Send, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTASection() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const form = formRef.current;
    const contact = contactRef.current;

    if (!section || !content || !form || !contact) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(content.children,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Form animation
      gsap.fromTo(form,
        { opacity: 0, y: 24, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Contact row animation
      gsap.fromTo(contact,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contact,
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    try {
      const response = await fetch(
        'https://backend.leadconnectorhq.com/forms/submit',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formId: 'ptxW4bYKZSJLPPLX59ua',
            location_id: '',
            fields: [
              { field_key: 'full_name', value: formData.name },
              { field_key: 'email', value: formData.email },
              { field_key: 'phone', value: formData.phone },
              { field_key: 'country', value: formData.country },
            ],
            source: 'snowbirds-landing-page',
          }),
        }
      );

      if (!response.ok) throw new Error('Submit failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', country: '' });

      // Fire Meta Pixel lead event
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.fbq) w.fbq('track', 'Lead', { content_name: 'Snowbirds Landing Page' });
    } catch {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="section-flowing relative py-24 lg:py-32"
      style={{ zIndex: 100, backgroundColor: '#0B3A3A' }}
    >
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/jungle_architecture_aerial.jpg" 
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep via-jungle-deep/90 to-jungle-deep/80" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-3xl mx-auto">
        {/* Content */}
        <div ref={contentRef} className="text-center mb-12">
          <h2 
            className="font-serif text-section text-sand-cream tracking-wide mb-4"
            style={{ lineHeight: 1.1 }}
          >
            {t('finalTitle')}
          </h2>
          <p className="text-base lg:text-lg text-sand-cream/70 font-light">
            {t('finalDesc')}
          </p>
        </div>

        {/* Form */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('formName') as string}
                required
                className="w-full bg-transparent border-b border-sand-cream/30 py-3 text-sand-cream placeholder:text-sand-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('formEmail') as string}
                required
                className="w-full bg-transparent border-b border-sand-cream/30 py-3 text-sand-cream placeholder:text-sand-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('formPhone') as string}
                className="w-full bg-transparent border-b border-sand-cream/30 py-3 text-sand-cream placeholder:text-sand-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={t('formCountry') as string}
                className="w-full bg-transparent border-b border-sand-cream/30 py-3 text-sand-cream placeholder:text-sand-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          <div className="pt-6 text-center">
            {isSubmitted ? (
              <div className="py-4 text-gold font-medium tracking-wide">
                {language === 'es'
                  ? 'Gracias. Nos pondremos en contacto pronto.'
                  : 'Thank you. We\'ll be in touch soon.'}
              </div>
            ) : (
              <button
                type="submit"
                className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="w-4 h-4" />
                {t('formSubmit')}
              </button>
            )}
            {submitError && (
              <p className="mt-3 text-sm text-red-400">
                {language === 'es'
                  ? 'Error al enviar. Intenta de nuevo o contáctanos por WhatsApp.'
                  : 'Submission error. Please try again or contact us via WhatsApp.'}
              </p>
            )}
          </div>
        </form>

        {/* Contact alternatives */}
        <div 
          ref={contactRef}
          className="text-center pt-8 border-t border-sand-cream/10"
        >
          <p className="text-sm text-sand-cream/50 mb-4">{t('preferContact')}</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/529841374927"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sand-cream/70 hover:text-gold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{t('whatsapp')}</span>
            </a>
            <a
              href="mailto:d.comercial@selvadentrotulum.com"
              className="flex items-center gap-2 text-sand-cream/70 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{t('email')}</span>
            </a>
            <a
              href="tel:+529841374927"
              className="flex items-center gap-2 text-sand-cream/70 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+52 984 137 4927</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-8 border-t border-sand-cream/10">
        <div className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="/selvadentro-logo.webp"
            alt="Selvadentro Tulum"
            className="h-7 w-auto opacity-60"
          />
          <div className="flex items-center gap-6 text-sm text-sand-cream/50">
            <a href="#" className="hover:text-gold transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-gold transition-colors">{t('terms')}</a>
          </div>
          <p className="text-xs text-sand-cream/40">
            © 2026 Selvadentro Tulum. Av. Tulum, CP 77764, Tulum, Mexico.
          </p>
        </div>
      </footer>
    </section>
  );
}