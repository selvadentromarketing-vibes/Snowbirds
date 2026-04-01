import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function PrivacyPolicy() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#0B3A3A]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F2EA]/95 backdrop-blur-md border-b border-[#0B3A3A]/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#0B3A3A]/70 hover:text-[#A88845] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language === 'es' ? 'Volver' : 'Back'}
            </span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setLanguage('es')}
              className={`transition-colors ${language === 'es' ? 'text-[#A88845]' : 'text-[#0B3A3A]/50 hover:text-[#0B3A3A]'}`}
            >
              ES
            </button>
            <span className="text-[#0B3A3A]/25">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-[#A88845]' : 'text-[#0B3A3A]/50 hover:text-[#0B3A3A]'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl lg:text-5xl tracking-wide mb-4">
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-[#0B3A3A]/50 mb-12">
          {language === 'es' ? 'Fecha de vigencia: 16 de octubre de 2025' : 'Effective Date: October 16, 2025'}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-[#0B3A3A]/80">
          <p>
            At Suspiro at Selvadentro, operated by JJF Creando, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information in compliance with Mexican data protection laws, including the General Law on Protection of Personal Data Held by Private Parties (Ley Federal de Protección de Datos Personales en Posesión de los Particulares), as well as international standards for global users.
          </p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">1. Who We Are</h2>
          <p><strong>Company Name:</strong> JJF Creando</p>
          <p><strong>Commercial Name:</strong> Suspiro at Selvadentro</p>
          <p><strong>Corporate Address:</strong> Loft Corporativo Sinergia, Av. Tulum, C.P. 77764, Tulum, México</p>
          <p><strong>Contact:</strong> (+52) 55 970 93403 · contacto@selvadentrotulum.com</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">2. Information We Collect</h2>
          <p><strong>Personal Information You Provide:</strong> Name, email address, phone number, and other contact details; payment information; preferences, interests, and feedback.</p>
          <p><strong>Automatically Collected Information:</strong> IP address, browser type, and operating system; website usage data; cookies and similar technologies.</p>
          <p><strong>Sensitive Personal Data:</strong> We do not intentionally collect sensitive personal data. If such data is provided voluntarily, you consent to its processing.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our services, including real estate opportunities and events</li>
            <li>To process transactions and manage payments</li>
            <li>To send updates, promotions, and event invitations (with your consent)</li>
            <li>To comply with legal obligations</li>
            <li>To analyze website performance and enhance user experience</li>
          </ul>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">4. Sharing Your Information</h2>
          <p>We do not sell or rent your personal information. We may share your information with trusted service providers, when required by law, or in case of business transfers.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">5. International Data Transfers</h2>
          <p>Your data may be transferred and stored outside Mexico. By using our services, you consent to such transfers, ensuring that your data is handled securely.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">6. Cookies and Tracking Technologies</h2>
          <p>We use cookies to analyze website traffic, remember your preferences, and deliver personalized content. You can manage or disable cookies through your browser settings.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">7. Your Rights</h2>
          <p>Under Mexican data protection laws, you have the right to: access, rectify, cancel, or oppose (ARCO Rights) the processing of your data. Contact us at contacto@selvadentrotulum.com to exercise these rights.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">8. Data Security</h2>
          <p>We implement robust security measures including encryption, secure servers, and restricted access to sensitive data.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">9. Retention of Data</h2>
          <p>We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">10. Children's Privacy</h2>
          <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect data from children.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically. Any updates will be posted on this page with the updated effective date.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">12. Contact Us</h2>
          <p>Phone: (+52) 55 970 93403</p>
          <p>Email: contacto@selvadentrotulum.com</p>
          <p>Address: Loft Corporativo Sinergia, Av. Tulum, C.P. 77764, Tulum, México</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0B3A3A]/10 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#0B3A3A]/35">© 2026 Suspiro at Selvadentro. Tulum, Mexico.</p>
          <div className="flex items-center gap-6 text-sm text-[#0B3A3A]/45">
            <span className="text-[#A88845]">{language === 'es' ? 'Privacidad' : 'Privacy'}</span>
            <Link to="/terms" className="hover:text-[#A88845] transition-colors">
              {language === 'es' ? 'Términos' : 'Terms'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
