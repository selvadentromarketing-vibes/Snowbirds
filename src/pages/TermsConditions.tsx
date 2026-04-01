import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function TermsConditions() {
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
          {language === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}
        </h1>
        <p className="text-sm text-[#0B3A3A]/50 mb-12">
          {language === 'es' ? 'Fecha de vigencia: 16 de octubre de 2025' : 'Effective Date: October 16, 2025'}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-[#0B3A3A]/80">
          <p>
            Welcome to Suspiro at Selvadentro's website, operated by JJF Creando, a company based in Mexico. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">1. General Information</h2>
          <p><strong>Company Name:</strong> JJF Creando</p>
          <p><strong>Commercial Name:</strong> Suspiro at Selvadentro</p>
          <p><strong>Corporate Address:</strong> Loft Corporativo Sinergia, Av. Tulum, C.P. 77764, Tulum, México</p>
          <p><strong>Contact:</strong> (+52) 55 970 93403 · contacto@selvadentrotulum.com</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">2. Acceptance of Terms</h2>
          <p>By accessing and using our website, you confirm that you are at least 18 years old or have parental/guardian consent and agree to comply with all applicable laws, including those of Mexico and international jurisdictions.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">3. Use of Website</h2>
          <p>Our website is intended for informational purposes about our products, services, and events. You agree not to misuse the website by attempting unauthorized access, using the website for illegal activities, or distributing harmful technologies.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">4. Intellectual Property</h2>
          <p>All content on this website, including text, images, graphics, logos, and designs, is the property of Suspiro at Selvadentro or its licensors and is protected under Mexican and international intellectual property laws. You may not copy, reproduce, distribute, or use any content without prior written consent.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">5. Advertising and Global Reach</h2>
          <p>Suspiro at Selvadentro advertises globally, but all transactions and operations are governed by Mexican laws and regulations. Users outside Mexico should be aware of their local laws regarding real estate investments.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">6. Privacy Policy</h2>
          <p>We value your privacy and comply with Mexico's data protection laws. By using our website, you consent to the collection, use, and storage of your personal data as outlined in our <Link to="/privacy" className="text-[#A88845] hover:underline">Privacy Policy</Link>.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">7. Payments and Transactions</h2>
          <p>Any payments or transactions conducted through Suspiro at Selvadentro are processed in compliance with Mexican financial regulations. Users must ensure that their payment methods are valid and authorized.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">8. Disclaimer of Liability</h2>
          <p>Suspiro at Selvadentro strives to ensure the accuracy of information on our website. However, we cannot guarantee that all information is up-to-date or free of errors. We are not liable for any damages resulting from the use of our website or reliance on its content.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">9. Governing Law and Jurisdiction</h2>
          <p>These terms and conditions are governed by the laws of Mexico. Any disputes arising from the use of our website will be resolved in the competent courts of Tulum, Quintana Roo, Mexico.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">10. Changes to Terms</h2>
          <p>We reserve the right to update or modify these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting on the website.</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">11. Contact Us</h2>
          <p>Phone: (+52) 55 970 93403</p>
          <p>Email: contacto@selvadentrotulum.com</p>
          <p>Address: Loft Corporativo Sinergia, Av. Tulum, C.P. 77764, Tulum, México</p>

          <h2 className="font-serif text-2xl tracking-wide text-[#0B3A3A] pt-4">12. Fiscal Compliance</h2>
          <p>As a Mexican company, JJF Creando operates under the fiscal regulations outlined in our Constancia de Situación Fiscal, including obligations for IVA and ISR compliance. Users engaging in transactions with Suspiro at Selvadentro are subject to Mexican tax laws.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0B3A3A]/10 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#0B3A3A]/35">© 2026 Suspiro at Selvadentro. Tulum, Mexico.</p>
          <div className="flex items-center gap-6 text-sm text-[#0B3A3A]/45">
            <Link to="/privacy" className="hover:text-[#A88845] transition-colors">
              {language === 'es' ? 'Privacidad' : 'Privacy'}
            </Link>
            <span className="text-[#A88845]">{language === 'es' ? 'Términos' : 'Terms'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
