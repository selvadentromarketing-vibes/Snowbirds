export type Language = 'es' | 'en';

export interface Translations {
  [key: string]: string | Translations;
}

export const translations = {
  es: {
    // Navigation
    wordmark: 'SUSPIRO',
    menu: 'Menú',

    // Hero Section
    heroSubheadline: 'Cambia el frío del invierno por la calidez del Caribe. Una comunidad de bienestar con 9 cenotes naturales en la selva de Tulum.',
    ctaPrimary: 'Agendar presentación privada',
    ctaSecondary: 'Descubrir Suspiro',
    heroSubtitle: 'en Selvadentro',

    // Sticky CTA
    stickyTagline: '9 cenotes naturales · 65% selva preservada · Tulum, México',

    // Price & Lot Section
    lotSectionTitle: 'Invierte en tu futuro bajo el sol',
    lotPriceFrom: '$70,000',
    lotPriceLabel: 'Lotes residenciales desde (USD)',
    lotPriceTitle: 'Precio inicial',
    lotAppreciationTitle: 'Crecimiento de valor',
    lotAppreciationLabel: 'Apreciación Fase 1 a Fase 4',
    lotPreservedTitle: 'Naturaleza primero',
    lotPreservedLabel: 'Selva preservada',
    lotFinancingTitle: 'Financiamiento fácil',
    lotFinancingLabel: 'Sin intereses · 48 meses',
    lotPhaseTitle: 'Cómo crece tu inversión',
    lotPhaseCol: 'Fase',
    lotPriceCol: 'Precio del lote',
    lotGainCol: 'Tu ganancia',
    lotPhase1: 'Fase 1',
    lotCurrent: '(AHORA)',
    lotPhase2: 'Fase 2',
    lotPhase3: 'Fase 3',
    lotPhase4: 'Fase 4',
    lotPhase1Desc: 'Compra hoy al mejor precio',
    lotPhase2Desc: 'Crecimiento temprano',
    lotPhase3Desc: 'Apreciación fuerte',
    lotPhase4Desc: 'Máximo valor',
    lotPriceNote: 'Precios en USD. Estimación en MXN a tipo de cambio de 20 MXN/USD. El tipo de cambio real puede variar. Aumento automático de +1% cada 10 lotes vendidos. Entrega del proyecto: 2029.',
    lotCta: 'Solicitar disponibilidad y precios',

    // Why Tulum Section
    whyTulumTitle: 'Por qué los que buscan retirarse eligen la Riviera Maya',
    warmWeather: 'Clima cálido todo el año',
    warmWeatherDesc: 'Promedio 27°C / 80°F con más de 300 días de sol al año. Olvida los inviernos, las palas de nieve y los abrigos.',
    airportAccess: 'Aeropuerto internacional a minutos',
    airportAccessDesc: 'Vuelos directos desde Toronto, Montreal, Nueva York, Houston, Dallas y más. Tu nuevo hogar está a solo un vuelo de distancia.',
    beachesWellness: 'Playas y bienestar como estilo de vida',
    beachesWellnessDesc: 'Riviera Maya al alcance. Yoga, meditación, cenotes y cocina orgánica — no como vacaciones, sino como tu vida cotidiana.',

    // Before / After Section
    beforeAfterTitle: 'Reimagina tus inviernos',
    beforeLabel: 'Tus inviernos ahora',
    afterLabel: 'Tus inviernos en Suspiro',
    beforeDesc: 'Nieve, frío, cielos grises y meses encerrado esperando que pase el invierno.',
    afterDesc: 'Sol, playa, selva y comunidad. Cada día se siente como las mejores vacaciones de tu vida.',

    // Blue Zone Section
    blueZoneTitle: 'VIVIR MÁS. VIVIR MEJOR.',
    blueZoneDesc: 'Las comunidades más longevas del mundo comparten principios simples: movimiento natural, conexión con la naturaleza, vida en comunidad y propósito diario. Suspiro integra estos principios en cada detalle — desde senderos en la selva hasta pabellones de yoga al amanecer.',
    blueZoneCta: 'Explorar bienestar',

    // Concept Section
    conceptLabel: 'SUSPIRO',
    conceptStatement: 'Un enclave privado dentro de Selvadentro — 103 hectáreas de selva protegida con solo 35% de área edificable. 9 cenotes naturales, corredores verdes y arquitectura que respira con la tierra. Tu refugio personal en el corazón de la Riviera Maya.',
    conceptCta: 'Ver el plan maestro',

    // Architecture Section
    architectureTitle: 'Arquitectura diseñada para integrarse con la selva',
    mexicanCraft: 'Casa de los Cenotes',
    balineseCalm: 'Spa & Bienestar',
    tropicalModern: 'Refugio en la selva',

    // Lifestyle Section
    lifestyleTitle: 'Un día en Suspiro',
    morningYoga: 'Yoga matutino',
    cenoteSwim: 'Nado en cenote',
    bikingTrails: 'Senderos en bicicleta',
    beachTime: 'Tiempo en la playa',
    dinnerStars: 'Cena bajo las estrellas',

    // Rare Opportunity Section
    rareTitle: 'UNA OPORTUNIDAD ÚNICA',
    rareDesc: 'Tulum crece un +12% anual y los proyectos verdaderamente únicos son cada vez más escasos. Suspiro at Selvadentro protege uno de los paisajes más extraordinarios de la región — con solo 35% de superficie construible y 9 cenotes naturales que no se pueden replicar.',
    rareCta: 'Solicitar disponibilidad',

    // Testimonials Section
    testimonialsTitle: 'Lo que dicen nuestros futuros residentes',
    testimonial1: 'Después de visitar muchos desarrollos en Tulum, Suspiro fue el único que realmente se sintió como un santuario. Los cenotes, la selva preservada — no hay nada comparable.',
    testimonial1Name: 'Robert & Linda',
    testimonial1Loc: 'Canadá',
    testimonial2: 'Buscábamos calidez, comunidad y tranquilidad para nuestros inviernos. Encontramos las tres cosas aquí, además de una inversión sólida.',
    testimonial2Name: 'Margaret & James',
    testimonial2Loc: 'Estados Unidos',

    // Final CTA Section
    finalTitle: 'Tu siguiente capítulo comienza aquí.',
    finalDesc: 'Únete a un pequeño grupo de futuros residentes para una presentación privada y una primera mirada exclusiva a Suspiro at Selvadentro.',
    formName: 'Nombre completo',
    formEmail: 'Correo electrónico',
    formPhone: 'Teléfono (con código de país)',
    formCountry: 'País de residencia',
    formSubmit: 'Solicitar presentación privada',
    preferContact: '¿Prefieres contactarnos directamente?',
    whatsapp: 'WhatsApp',
    email: 'Correo',

    // Footer
    privacy: 'Privacidad',
    terms: 'Términos',
  },
  en: {
    // Navigation
    wordmark: 'SUSPIRO',
    menu: 'Menu',

    // Hero Section
    heroSubheadline: 'Trade cold winters for Caribbean warmth. A wellness community with 9 natural cenotes in the jungle of Tulum.',
    ctaPrimary: 'Schedule private presentation',
    ctaSecondary: 'Discover Suspiro',
    heroSubtitle: 'at Selvadentro',

    // Sticky CTA
    stickyTagline: '9 natural cenotes · 65% preserved jungle · Tulum, Mexico',

    // Price & Lot Section
    lotSectionTitle: 'Invest in your future in the sun',
    lotPriceFrom: '$70,000',
    lotPriceLabel: 'Residential lots from (USD)',
    lotPriceTitle: 'Starting price',
    lotAppreciationTitle: 'Value growth',
    lotAppreciationLabel: 'Appreciation Phase 1 to Phase 4',
    lotPreservedTitle: 'Nature first',
    lotPreservedLabel: 'Jungle preserved',
    lotFinancingTitle: 'Easy financing',
    lotFinancingLabel: 'Zero interest · 48 months',
    lotPhaseTitle: 'How your investment grows',
    lotPhaseCol: 'Phase',
    lotPriceCol: 'Lot price',
    lotGainCol: 'Your return',
    lotPhase1: 'Phase 1',
    lotCurrent: '(NOW)',
    lotPhase2: 'Phase 2',
    lotPhase3: 'Phase 3',
    lotPhase4: 'Phase 4',
    lotPhase1Desc: 'Buy today at the best price',
    lotPhase2Desc: 'Early growth',
    lotPhase3Desc: 'Strong appreciation',
    lotPhase4Desc: 'Maximum value',
    lotPriceNote: 'Prices in USD. Estimated MXN at 20 MXN/USD exchange rate. Actual rate may vary. Automatic +1% price increase every 10 lots sold. Project delivery: 2029.',
    lotCta: 'Request availability & pricing',

    // Why Tulum Section
    whyTulumTitle: 'Why retirees are choosing the Riviera Maya',
    warmWeather: 'Warm weather year-round',
    warmWeatherDesc: 'Average 27°C / 80°F with 300+ sunny days a year. Forget the winters, snow shovels, and heavy coats.',
    airportAccess: 'International airport minutes away',
    airportAccessDesc: 'Direct flights from Toronto, Montreal, New York, Houston, Dallas and more. Your new home is just one flight away.',
    beachesWellness: 'Beaches & wellness as a way of life',
    beachesWellnessDesc: 'Riviera Maya within reach. Yoga, meditation, cenotes and organic cuisine — not as a vacation, but as your everyday life.',

    // Before / After Section
    beforeAfterTitle: 'Reimagine your winters',
    beforeLabel: 'Your winters now',
    afterLabel: 'Your winters at Suspiro',
    beforeDesc: 'Snow, cold, grey skies, and months spent indoors waiting for winter to pass.',
    afterDesc: 'Sun, beach, jungle, and community. Every day feels like the best vacation of your life.',

    // Blue Zone Section
    blueZoneTitle: 'LIVE LONGER. LIVE BETTER.',
    blueZoneDesc: 'The world\'s longest-living communities share simple principles: natural movement, connection with nature, community living, and daily purpose. Suspiro integrates these principles into every detail — from jungle trails to sunrise yoga pavilions.',
    blueZoneCta: 'Explore wellness',

    // Concept Section
    conceptLabel: 'SUSPIRO',
    conceptStatement: 'A private enclave within Selvadentro — 103 hectares of protected jungle with only 35% buildable area. 9 natural cenotes, green corridors, and architecture that breathes with the land. Your personal sanctuary in the heart of the Riviera Maya.',
    conceptCta: 'See the masterplan',

    // Architecture Section
    architectureTitle: 'Architecture designed to blend into the jungle',
    mexicanCraft: 'Casa de los Cenotes',
    balineseCalm: 'Spa & Wellness',
    tropicalModern: 'Jungle refuge',

    // Lifestyle Section
    lifestyleTitle: 'A day at Suspiro',
    morningYoga: 'Morning yoga',
    cenoteSwim: 'Cenote swim',
    bikingTrails: 'Biking trails',
    beachTime: 'Beach time',
    dinnerStars: 'Dinner under the stars',

    // Rare Opportunity Section
    rareTitle: 'A RARE OPPORTUNITY',
    rareDesc: 'Tulum is growing +12% annually and truly unique projects are increasingly scarce. Suspiro at Selvadentro protects one of the most extraordinary landscapes in the region — with only 35% buildable surface and 9 natural cenotes that cannot be replicated.',
    rareCta: 'Request availability',

    // Testimonials Section
    testimonialsTitle: 'What future residents are saying',
    testimonial1: 'After visiting many developments in Tulum, Suspiro was the only one that truly felt like a sanctuary. The cenotes, the preserved jungle — there\'s nothing comparable.',
    testimonial1Name: 'Robert & Linda',
    testimonial1Loc: 'Canada',
    testimonial2: 'We were looking for warmth, community, and peace for our winters. We found all three here, plus a solid investment.',
    testimonial2Name: 'Margaret & James',
    testimonial2Loc: 'United States',

    // Final CTA Section
    finalTitle: 'Your next chapter begins here.',
    finalDesc: 'Join a small group of future residents for a private presentation and an exclusive first look at Suspiro at Selvadentro.',
    formName: 'Full name',
    formEmail: 'Email address',
    formPhone: 'Phone (with country code)',
    formCountry: 'Country of residence',
    formSubmit: 'Request private presentation',
    preferContact: 'Prefer to contact us directly?',
    whatsapp: 'WhatsApp',
    email: 'Email',

    // Footer
    privacy: 'Privacy',
    terms: 'Terms',
  }
};

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
