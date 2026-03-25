export type Language = 'es' | 'en';

export interface Translations {
  [key: string]: string | Translations;
}

export const translations = {
  es: {
    // Navigation
    wordmark: 'SELVADENTRO',
    menu: 'Menú',

    // Hero Section
    heroSubheadline: 'Una comunidad privada de bienestar con 9 cenotes naturales, escondida en la selva de Tulum.',
    ctaPrimary: 'Agendar presentación privada',
    ctaSecondary: 'Descubrir Selvadentro',

    // Sticky CTA
    stickyTagline: '9 cenotes naturales · 65% selva preservada · Tulum, México',

    // Video Letter Section
    videoLabel: 'CARTA EN VIDEO',
    videoStatement: 'La mayoría de los lugares prometen una vida hermosa. Muy pocos están diseñados para ayudarte a vivir mejor y más tiempo.',
    videoCta: 'Ver el video',

    // Why Tulum Section
    whyTulumTitle: 'Por qué los snowbirds eligen Tulum',
    warmWeather: 'Clima cálido todo el año',
    warmWeatherDesc: 'Promedio 27°C / 80°F con más de 300 días de sol al año. Sin inviernos.',
    airportAccess: 'Aeropuerto internacional a minutos',
    airportAccessDesc: 'Vuelos directos desde Toronto, Montreal, Nueva York, Houston, Dallas y más.',
    beachesWellness: 'Playas de clase mundial + cultura de bienestar',
    beachesWellnessDesc: 'Riviera Maya al alcance. Yoga, meditación, cenotes y cocina orgánica como estilo de vida cotidiano.',

    // Blue Zone Section
    blueZoneTitle: 'VIVIR MÁS. VIVIR MEJOR.',
    blueZoneDesc: 'Las comunidades más longevas del mundo comparten principios simples: movimiento natural, conexión con la naturaleza, vida en comunidad y propósito diario. Selvadentro integra estos principios en cada detalle — desde senderos en la selva hasta pabellones de yoga al amanecer.',
    blueZoneCta: 'Explorar bienestar',

    // Concept Section
    conceptLabel: 'EL CONCEPTO',
    conceptStatement: 'La mayoría de los desarrollos eliminan la selva. Selvadentro preserva el 65% como naturaleza intacta — 9 cenotes naturales, corredores verdes y arquitectura que respira con la tierra.',
    conceptCta: 'Ver el plan maestro',

    // Architecture Section
    architectureTitle: 'Arquitectura diseñada para integrarse con la selva',
    mexicanCraft: 'Artesanía mexicana',
    balineseCalm: 'Calma balinesa',
    tropicalModern: 'Modernismo tropical',

    // Lifestyle Section
    lifestyleTitle: 'Un día en Selvadentro',
    morningYoga: 'Yoga matutino',
    cenoteSwim: 'Nado en cenote',
    bikingTrails: 'Senderos en bicicleta',
    beachTime: 'Tiempo en la playa',
    dinnerStars: 'Cena bajo las estrellas',

    // Rare Opportunity Section
    rareTitle: 'UNA OPORTUNIDAD ÚNICA',
    rareDesc: 'Tulum crece un +12% anual y los proyectos verdaderamente únicos son cada vez más escasos. Selvadentro protege uno de los paisajes más extraordinarios de la región — con solo 35% de superficie construible y 9 cenotes naturales que no se pueden replicar.',
    rareCta: 'Solicitar disponibilidad',

    // Testimonials Section
    testimonialsTitle: 'Lo que dicen nuestros compradores',
    testimonial1: 'Después de visitar muchos desarrollos en Tulum, Selvadentro fue el único que realmente se sintió como un santuario. Los cenotes, la selva preservada — no hay nada comparable.',
    testimonial1Name: 'Robert & Linda',
    testimonial1Loc: 'Canadá',
    testimonial2: 'Buscábamos calidez, comunidad y tranquilidad para nuestros inviernos. Encontramos las tres cosas aquí, además de una inversión sólida.',
    testimonial2Name: 'Margaret & James',
    testimonial2Loc: 'Estados Unidos',

    // Final CTA Section
    finalTitle: 'Tu siguiente capítulo comienza aquí.',
    finalDesc: 'Únete a un pequeño grupo de futuros residentes para una presentación privada y una primera mirada exclusiva a Selvadentro Tulum.',
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
    wordmark: 'SELVADENTRO',
    menu: 'Menu',

    // Hero Section
    heroSubheadline: 'A private wellness community with 9 natural cenotes, hidden in the jungle of Tulum.',
    ctaPrimary: 'Schedule private presentation',
    ctaSecondary: 'Discover Selvadentro',

    // Sticky CTA
    stickyTagline: '9 natural cenotes · 65% preserved jungle · Tulum, Mexico',

    // Video Letter Section
    videoLabel: 'VIDEO LETTER',
    videoStatement: 'Most places promise a beautiful lifestyle. Very few are designed to help you live longer and better.',
    videoCta: 'Watch the film',

    // Why Tulum Section
    whyTulumTitle: 'Why snowbirds are choosing Tulum',
    warmWeather: 'Warm weather year-round',
    warmWeatherDesc: 'Average 27°C / 80°F with 300+ sunny days a year. No winters.',
    airportAccess: 'International airport minutes away',
    airportAccessDesc: 'Direct flights from Toronto, Montreal, New York, Houston, Dallas and more.',
    beachesWellness: 'World-class beaches + wellness culture',
    beachesWellnessDesc: 'Riviera Maya within reach. Yoga, meditation, cenotes and organic cuisine as an everyday lifestyle.',

    // Blue Zone Section
    blueZoneTitle: 'LIVE LONGER. LIVE BETTER.',
    blueZoneDesc: 'The world\'s longest-living communities share simple principles: natural movement, connection with nature, community living, and daily purpose. Selvadentro integrates these principles into every detail — from jungle trails to sunrise yoga pavilions.',
    blueZoneCta: 'Explore wellness',

    // Concept Section
    conceptLabel: 'THE CONCEPT',
    conceptStatement: 'Most developments remove the jungle. Selvadentro preserves 65% as untouched nature — 9 natural cenotes, green corridors, and architecture that breathes with the land.',
    conceptCta: 'See the masterplan',

    // Architecture Section
    architectureTitle: 'Architecture designed to blend into the jungle',
    mexicanCraft: 'Mexican craft',
    balineseCalm: 'Balinese calm',
    tropicalModern: 'Tropical modernism',

    // Lifestyle Section
    lifestyleTitle: 'A day at Selvadentro',
    morningYoga: 'Morning yoga',
    cenoteSwim: 'Cenote swim',
    bikingTrails: 'Biking trails',
    beachTime: 'Beach time',
    dinnerStars: 'Dinner under the stars',

    // Rare Opportunity Section
    rareTitle: 'A RARE OPPORTUNITY',
    rareDesc: 'Tulum is growing +12% annually and truly unique projects are increasingly scarce. Selvadentro protects one of the most extraordinary landscapes in the region — with only 35% buildable surface and 9 natural cenotes that cannot be replicated.',
    rareCta: 'Request availability',

    // Testimonials Section
    testimonialsTitle: 'What our buyers say',
    testimonial1: 'After visiting many developments in Tulum, Selvadentro was the only one that truly felt like a sanctuary. The cenotes, the preserved jungle — there\'s nothing comparable.',
    testimonial1Name: 'Robert & Linda',
    testimonial1Loc: 'Canada',
    testimonial2: 'We were looking for warmth, community, and peace for our winters. We found all three here, plus a solid investment.',
    testimonial2Name: 'Margaret & James',
    testimonial2Loc: 'United States',

    // Final CTA Section
    finalTitle: 'Your next chapter begins here.',
    finalDesc: 'Join a small group of future residents for a private presentation and an exclusive first look at Selvadentro Tulum.',
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
