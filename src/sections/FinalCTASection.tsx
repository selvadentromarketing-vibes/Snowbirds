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
    countryCode: '',
    phone: '',
    country: '',
    budget: '',
    timeline: '',
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
      gsap.fromTo(content.children,
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: content, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      gsap.fromTo(form,
        { opacity: 0, y: 24, scale: 0.99 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: form, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      gsap.fromTo(contact,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: contact, start: 'top 90%', end: 'top 70%', scrub: true }
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
        'https://services.leadconnectorhq.com/hooks/crN2IhAuOBAl7D8324yI/webhook-trigger/98e418a0-4298-4e13-b8c9-3ca61b88c91c',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`.trim(),
            country: formData.country,
            budget: formData.budget,
            investment_timeline: formData.timeline,
            source: 'snowbirds-landing-page',
          }),
        }
      );

      if (!response.ok) throw new Error('Submit failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', countryCode: '', phone: '', country: '', budget: '', timeline: '' });

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
      style={{ zIndex: 100, backgroundColor: '#F5F2EA' }}
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-3xl mx-auto">
        {/* Content */}
        <div ref={contentRef} className="text-center mb-12">
          <h2
            className="font-serif text-section text-jungle-deep tracking-wide mb-4"
            style={{ lineHeight: 1.1 }}
          >
            {t('finalTitle')}
          </h2>
          <p className="text-base lg:text-lg text-jungle-deep/65 font-light">
            {t('finalDesc')}
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 mb-10 bg-white/50 rounded-xl p-8 border border-jungle-deep/10"
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
                className="w-full bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep placeholder:text-jungle-deep/40 focus:outline-none focus:border-gold transition-colors"
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
                className="w-full bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep placeholder:text-jungle-deep/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-[120px] shrink-0 bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" disabled>Code</option>
                  <option value="+1">+1 US/CA</option>
                  <option value="+52">+52 MX</option>
                  <option value="+44">+44 UK</option>
                  <option value="+34">+34 ES</option>
                  <option value="+33">+33 FR</option>
                  <option value="+49">+49 DE</option>
                  <option value="+39">+39 IT</option>
                  <option value="+55">+55 BR</option>
                  <option value="+57">+57 CO</option>
                  <option value="+54">+54 AR</option>
                  <option value="+56">+56 CL</option>
                  <option value="+51">+51 PE</option>
                  <option value="+593">+593 EC</option>
                  <option value="+61">+61 AU</option>
                  <option value="+91">+91 IN</option>
                  <option value="+81">+81 JP</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="555 123 4567"
                  className="flex-1 bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep placeholder:text-jungle-deep/40 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={t('formCountry') as string}
                className="w-full bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep placeholder:text-jungle-deep/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep focus:outline-none focus:border-gold transition-colors"
              >
                <option value="" disabled>{language === 'es' ? 'Presupuesto' : 'Budget'}</option>
                <option value="70k-100k">$70,000 – $100,000 USD</option>
                <option value="100k-150k">$100,000 – $150,000 USD</option>
                <option value="150k+">$150,000+ USD</option>
              </select>
            </div>
            <div>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-jungle-deep/20 py-3 text-jungle-deep focus:outline-none focus:border-gold transition-colors"
              >
                <option value="" disabled>{language === 'es' ? 'Plazo de inversión' : 'Investment timeline'}</option>
                <option value="immediate">{language === 'es' ? 'Inmediato (1-3 meses)' : 'Immediate (1-3 months)'}</option>
                <option value="short">{language === 'es' ? 'Corto plazo (3-6 meses)' : 'Short-term (3-6 months)'}</option>
                <option value="medium">{language === 'es' ? 'Mediano plazo (6-12 meses)' : 'Medium-term (6-12 months)'}</option>
                <option value="exploring">{language === 'es' ? 'Explorando opciones' : 'Just exploring'}</option>
              </select>
            </div>
          </div>

          <div className="pt-6 text-center">
            {isSubmitted ? (
              <div className="py-4 text-gold-dark font-medium tracking-wide">
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
              <p className="mt-3 text-sm text-red-600">
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
          className="text-center pt-8 border-t border-jungle-deep/10"
        >
          <p className="text-sm text-jungle-deep/45 mb-4">{t('preferContact')}</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/529841374927"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-jungle-deep/60 hover:text-gold-dark transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{t('whatsapp')}</span>
            </a>
            <a
              href="mailto:d.comercial@selvadentrotulum.com"
              className="flex items-center gap-2 text-jungle-deep/60 hover:text-gold-dark transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{t('email')}</span>
            </a>
            <a
              href="tel:+529841374927"
              className="flex items-center gap-2 text-jungle-deep/60 hover:text-gold-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+52 984 137 4927</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-8 border-t border-jungle-deep/10">
        <div className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="/selvadentro-logo-white.webp"
            alt="Suspiro at Selvadentro logo"
            width="140"
            height="28"
            loading="lazy"
            className="h-7 w-auto opacity-40"
          />
          <div className="flex items-center gap-6 text-sm text-jungle-deep/45">
            <a href="/privacy" className="hover:text-gold-dark transition-colors">{t('privacy')}</a>
            <a href="/terms" className="hover:text-gold-dark transition-colors">{t('terms')}</a>
          </div>
          <p className="text-xs text-jungle-deep/35">
            © 2026 Suspiro at Selvadentro. Av. Tulum, CP 77764, Tulum, Mexico.
          </p>
        </div>
      </footer>
    </section>
  );
}
