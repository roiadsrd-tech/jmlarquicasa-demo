import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Instagram, 
  ExternalLink,
  Menu,
  X,
  Compass,
  Layers,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

// Constantes Verificadas de Marca (CERO datos inventados)
const CLIENT_DATA = {
  name: "ARQUICASA",
  legalName: "JML ARQUICASA SRL",
  tagline: "Empresa de Arquitectura y Construcción. Inmobiliaria.",
  director: "Arq. Josué Mallén Lizardo",
  directorRole: "Arquitectura, Construcción e Interiorismo",
  quote: "Todo lo puedo en Cristo que me fortalece.",
  phone: "809-389-0799",
  location: "Santo Domingo, República Dominicana",
  coordinates: "18°28'N 69°53'W",
  yearsExperience: "15+",
  projectsCount: "181",
  whatsappUrl: "https://wa.me/8093890799?text=Hola%2C%20vi%20el%20portafolio%20web%20de%20JML%20ARQUICASA%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.",
  instagramUrl: "https://www.instagram.com/jmlarquicasa/",
  sectors: [
    "Santo Domingo",
    "Naco",
    "Evaristo Morales",
    "Villa Mella",
    "Santo Domingo Norte",
    "Santo Domingo Este"
  ],
  materials: [
    "Madera natural",
    "Sheetrock",
    "Iluminación LED lineal",
    "Estructuras metálicas",
    "Mármol y porcelanato"
  ]
};

// Catálogo de Servicios con Arquitectura Multi-Página
const SERVICES = [
  {
    number: "01",
    title: "Arquitectura y Construcción",
    slug: "arquitectura-y-construccion",
    kicker: "desarrollo integral de obras",
    shortDesc: "Planificación técnica, diseño estructural y ejecución física de obras residenciales, comerciales e institucionales.",
    fullDesc: "Servicio integral que abarca desde la conceptualización arquitectónica y planimetría ejecutiva hasta la entrega final de la obra, garantizando los más altos estándares de durabilidad y rigor normativo.",
    challenge: "Resolvemos la complejidad de la gestión de obra mediante supervisión técnica continua en terreno y optimización de recursos.",
    specs: [
      { label: "Tipología", value: "Residencial, Comercial e Institucional" },
      { label: "Alcance", value: "Anteproyecto, Planos Ejecutivos y Construcción" },
      { label: "Ubicación", value: "Santo Domingo y Cobertura Nacional" },
      { label: "Supervisión", value: "Fiscalización técnica continua" }
    ],
    features: [
      "Desarrollo de planos arquitectónicos y estructurales de alta precisión.",
      "Cálculo métrico y presupuestos detallados por partida de obra.",
      "Coordinación integral de gremios constructivos y suministros.",
      "Entrega llave en mano con estricto apego al cronograma pactado."
    ],
    photos: [
      { url: "./media/post_22.jpg", caption: "Fachada contemporánea en tonos neutros con detalles en madera" },
      { url: "./media/post_25.jpg", caption: "Edificación comercial con ventanales amplios y volumetría limpia" },
      { url: "./media/post_27.jpg", caption: "Residencia contemporánea integrada al entorno tropical" }
    ]
  },
  {
    number: "02",
    title: "Diseño de Interiores & Remodelaciones",
    slug: "diseno-de-interiores",
    kicker: "arquitectura interior y acabados",
    shortDesc: "Interiorismo corporativo, comercial y residencial con revestimientos en madera, iluminación lineal y mármol.",
    fullDesc: "Concebimos espacios interiores donde la funcionalidad operativa dialoga con la nobleza de los materiales. Especialistas en consultorios médicos, salones corporativos y residencias de alto confort.",
    challenge: "Transformamos plantas convencionales en atmósferas de distinción que optimizan la acústica, la luz natural y la circulación.",
    specs: [
      { label: "Tipología", value: "Oficinas, Clínicas, Salones y Residencias" },
      { label: "Materiales", value: "Madera tratada, Mármol, Cristal y Sheetrock" },
      { label: "Iluminación", value: "Luz lineal LED indirecta 2700K/3000K" },
      { label: "Acabados", value: "Panelería acústica y uñeros arquitectónicos" }
    ],
    features: [
      "Diseño y fabricación de mobiliario contemporáneo a medida.",
      "Muros decorativos con listonería de madera e iluminación integrada.",
      "Optimización acústica y espacial para salas de conferencias y reuniones.",
      "Remodelaciones integrales sin interrupción de actividades comerciales."
    ],
    photos: [
      { url: "./media/post_11.jpg", caption: "Interior comercial con barra de madera y señalética moderna" },
      { url: "./media/post_12.jpg", caption: "Área de comensales con luminarias suspendidas y revestimientos" },
      { url: "./media/post_24.jpg", caption: "Espacio comercial con estanterías modulares y plafón geométrico" }
    ]
  },
  {
    number: "03",
    title: "Supervisión de Obra & Gestión Técnica",
    slug: "supervision-de-obra",
    kicker: "control de calidad y fiscalización",
    shortDesc: "Dirección facultativa, control de tolerancias estructurales e inspección de estructuras metálicas y hormigón.",
    fullDesc: "Fiscalización rigurosa de cada fase constructiva para proteger el capital de inversión del cliente. Verificamos resistencia de hormigones, plomadas, soldaduras en acero y correcta instalación hidrosanitaria y eléctrica.",
    challenge: "Eliminamos vicios de construcción y sobrecostos mediante auditorías técnicas sistemáticas antes de cada vaciado o cierre de obra.",
    specs: [
      { label: "Inspección", value: "Estructuras de hormigón armado y metálicas" },
      { label: "Normativa", value: "R-079 / CODIA y estándares sismorresistentes" },
      { label: "Control", value: "Tolerancias milimétricas en encofrados" },
      { label: "Reportes", value: "Certificación periódica de avance de obra" }
    ],
    features: [
      "Supervisión directa de cimentaciones, vigas, columnas y losas.",
      "Control de calidad en soldaduras y anclajes de estructuras metálicas.",
      "Verificación de trazos y niveles con instrumentación de precisión.",
      "Certificación técnica de partidas para desembolsos transparentes."
    ],
    photos: [
      { url: "./media/post_4.jpg", caption: "Interior de estructura en construcción con vigueta y bovedilla" },
      { url: "./media/post_5.jpg", caption: "Estructura metálica con tragaluces cenitales en fase de montaje" },
      { url: "./media/post_6.jpg", caption: "Encofrado y vaciado de escalera helicoidal de hormigón" },
      { url: "./media/post_23.jpg", caption: "Instalación de división arquitectónica en listones de madera" }
    ]
  }
];

// Obras Seleccionadas (Home Portfolio - Cero fotos repetidas)
const FEATURED_PROJECTS = [
  {
    code: "OBRA 01",
    title: "Consultorios Amerident Sucursal Lincoln",
    category: "Comercial Corporativo",
    location: "Naco, Santo Domingo",
    scope: "Diseño Interior, Mobiliario a Medida & Remodelación",
    materials: "Madera natural · Pisos de mármol · Iluminación lineal LED",
    description: "Ampliación y adecuación de clínica médica corporativa. Se implementaron muros divisorios en listonería de madera cálida, iluminación empotrada y recepción contemporánea de alto flujo.",
    mainPhoto: "./media/post_1.jpg",
    subPhotos: [
      { url: "./media/post_9.jpg", label: "Revestimiento de madera e iluminación integrada" },
      { url: "./media/post_10.jpg", label: "Pasillo central en mármol con luz lineal rasante" }
    ]
  },
  {
    code: "OBRA 02",
    title: "Salón Multiusos ICC",
    category: "Institucional & Interiorismo",
    location: "Santo Domingo",
    scope: "Acondicionamiento Acústico & Remodelación Espacial",
    materials: "Paneles acústicos · Barandillas de cristal templado · Madera",
    description: "Espacio versátil para conferencias y eventos con capacidad extendida. Integración de muros geométricos en madera, barandillas transparentes de cristal y cielos rasos acústicos.",
    mainPhoto: "./media/post_13.jpg",
    subPhotos: [
      { url: "./media/post_14.jpg", label: "Auditorio principal con muro geométrico de madera" },
      { url: "./media/post_19.jpg", label: "Perspectiva de butacas y control acústico perimetral" }
    ]
  },
  {
    code: "OBRA 03",
    title: "Residencial Evaristo Morales & Obras Urbanas",
    category: "Arquitectura Residencial",
    location: "Evaristo Morales, Santo Domingo",
    scope: "Edificación en Altura & Suites Contemporáneas",
    materials: "Hormigón visto · Celosías de protección solar · Porcelanato",
    description: "Edificación residencial con modulación rítmica de balcones, parasoles bioclimáticos y diseño interior sobrio con carpintería suspendida y visuales abiertas hacia la ciudad.",
    mainPhoto: "./media/post_7.jpg",
    subPhotos: [
      { url: "./media/post_8.jpg", label: "Master suite contemporánea con mobiliario suspendido" },
      { url: "./media/post_2.jpg", label: "Edificio de tres niveles con escalinatas de acceso" }
    ]
  }
];

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Enrutamiento Hash Multi-Página
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Detector de Scroll para Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar si estamos en una página de servicio
  const isServicePage = currentHash.startsWith('#/servicios/');
  const serviceSlug = isServicePage ? currentHash.replace('#/servicios/', '') : null;
  const currentService = serviceSlug ? SERVICES.find(s => s.slug === serviceSlug) : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] text-[#121417]">
      {/* 1. Header / Navegación Arquitectónica Fija */}
      <header 
        className={`header-nav ${scrolled ? 'header-scrolled text-white' : 'text-[#121417]'}`}
        style={{
          backgroundColor: scrolled ? 'rgba(18, 20, 23, 0.94)' : 'rgba(246, 246, 244, 0.88)',
          borderBottom: scrolled ? '1px solid rgba(246, 247, 248, 0.12)' : '1px solid rgba(18, 20, 23, 0.1)'
        }}
      >
        <div className="container flex-between" style={{ height: '100%' }}>
          {/* Logo Oficial Real */}
          <a 
            href="#/" 
            className="flex items-center gap-3 group"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <div 
              style={{ 
                backgroundColor: '#121417', 
                padding: '0.35rem 0.65rem', 
                border: '1px solid rgba(246, 247, 248, 0.2)',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img 
                src="./media/logo_real.jpg" 
                alt="ARQUICASA" 
                style={{ height: '32px', width: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>
                ARQUICASA
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', opacity: 0.7, textTransform: 'uppercase', marginTop: '0.2rem' }}>
                JML ARQUICASA SRL
              </span>
            </div>
          </a>

          {/* Menú Desktop Limpio */}
          <nav style={{ display: 'none' }} className="md-flex items-center gap-8">
            <a 
              href="#/" 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                opacity: currentHash === '#/' ? 1 : 0.75
              }}
            >
              Inicio
            </a>
            <a 
              href="#disciplinas" 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                opacity: 0.75
              }}
            >
              Disciplinas
            </a>
            <a 
              href="#planimetria" 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                opacity: 0.75
              }}
            >
              Planimetría CAD
            </a>
            <a 
              href="#obras" 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                opacity: 0.75
              }}
            >
              Obras
            </a>
            <a 
              href="#estudio" 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                opacity: 0.75
              }}
            >
              Estudio
            </a>
          </nav>

          {/* Botón WhatsApp CTA Navbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href={CLIENT_DATA.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className={scrolled ? 'btn-dark' : 'btn-primary'}
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem' }}
            >
              <span>Consultar Proyecto</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Toggle Menú Móvil */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md-hide"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                border: '1px solid currentColor',
                opacity: 0.85
              }}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Desplegable Móvil */}
        {mobileMenuOpen && (
          <div 
            style={{
              backgroundColor: '#121417',
              color: '#F6F7F8',
              padding: '2rem 1.5rem',
              borderBottom: '1px solid rgba(246, 247, 248, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <a 
              href="#/" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Inicio
            </a>
            <a 
              href="#disciplinas" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Disciplinas
            </a>
            <a 
              href="#planimetria" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Planimetría CAD
            </a>
            <a 
              href="#obras" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Obras Seleccionadas
            </a>
            <a 
              href="#estudio" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Estudio & Dirección
            </a>
            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(246, 247, 248, 0.12)' }}>
              <a 
                href={CLIENT_DATA.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-dark"
                style={{ width: '100%', textAlign: 'center' }}
              >
                WhatsApp Directo (809-389-0799)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* RENDERIZADO CONDICIONAL: PÁGINA DE SERVICIO DEDICADA O PORTADA */}
      {isServicePage && currentService ? (
        <ServiceDetailView service={currentService} />
      ) : (
        <HomeView />
      )}

      {/* Footer Monolítico & Mega-Wordmark */}
      <footer 
        className="section-dark"
        style={{ 
          paddingTop: 'clamp(4rem, 8vw, 6rem)', 
          paddingBottom: '2.5rem',
          borderTop: '1px solid var(--hairline-dark)' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '3rem',
              paddingBottom: '3.5rem',
              borderBottom: '1px solid var(--hairline-dark)'
            }}
          >
            {/* Columna 1: Firma & Membresía CODIA */}
            <div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  letterSpacing: '0.16em', 
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}
              >
                Firma Profesional
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F6F7F8', marginBottom: '0.5rem' }}>
                {CLIENT_DATA.legalName}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {CLIENT_DATA.tagline} Más de 15 años de trayectoria en el desarrollo técnico de obras en la República Dominicana.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(246, 247, 248, 0.6)' }}>
                Dirección Técnica: {CLIENT_DATA.director}
              </div>
            </div>

            {/* Columna 2: Disciplinas Directas */}
            <div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  letterSpacing: '0.16em', 
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}
              >
                Disciplinas
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {SERVICES.map(s => (
                  <li key={s.slug}>
                    <a 
                      href={`#/servicios/${s.slug}`}
                      style={{ 
                        fontSize: '0.9rem', 
                        color: 'var(--text-light-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-light-muted)'}
                    >
                      <span>→</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Ubicación & Contacto Directo */}
            <div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  letterSpacing: '0.16em', 
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}
              >
                Contacto & Sede
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)', marginBottom: '0.75rem' }}>
                {CLIENT_DATA.location}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <a 
                  href={`tel:${CLIENT_DATA.phone.replace(/-/g, '')}`}
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.95rem', 
                    color: '#F6F7F8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Phone size={15} style={{ color: 'var(--accent-gold)' }} />
                  <span>{CLIENT_DATA.phone}</span>
                </a>
                <a 
                  href={CLIENT_DATA.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-light-muted)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light-muted)'}
                >
                  <Instagram size={15} style={{ color: 'var(--accent-gold)' }} />
                  <span>@jmlarquicasa</span>
                </a>
              </div>
              <a 
                href={CLIENT_DATA.whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-dark"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem' }}
              >
                <span>Conversar en WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Línea de Base & Derechos */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              gap: '1rem',
              paddingTop: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(246, 247, 248, 0.45)'
            }}
          >
            <div>
              © {new Date().getFullYear()} {CLIENT_DATA.legalName}. Todos los derechos reservados.
            </div>
            <div>
              SANTO DOMINGO · {CLIENT_DATA.coordinates}
            </div>
          </div>

          {/* Mega Wordmark Escultórico */}
          <div className="mega-wordmark">
            ARQUICASA
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * 2. VISTA PRINCIPAL (HOME) — MINIMALISMO ABSOLUTO & RETÍCULA ARQUITECTÓNICA
 * Cumple estrictamente: 5+ etiquetas <section> con layouts distintos y CERO tarjetas repetidas.
 */
function HomeView() {
  return (
    <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
      {/* SECCIÓN 1: HERO MONOLÍTICO & FICHA DE APERTURA (LAYOUT ASIMÉTRICO) */}
      <section 
        className="section-light border-b-hairline"
        style={{ 
          position: 'relative',
          paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          {/* Ficha Técnica Superior con Coordenadas */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              gap: '1rem',
              paddingBottom: '1.25rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--hairline-light)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }}
          >
            <div>
              REPÚBLICA DOMINICANA · {CLIENT_DATA.coordinates}
            </div>
            <div>
              {CLIENT_DATA.yearsExperience} AÑOS DE PRÁCTICA PROFESIONAL
            </div>
            <div>
              ESTUDIO · {CLIENT_DATA.director}
            </div>
          </div>

          {/* Gran Titular Editorial Arquitectónico */}
          <div style={{ maxWidth: '960px', marginBottom: '3.5rem' }}>
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 6.2vw, 5.2rem)', 
                lineHeight: 1.02, 
                fontWeight: 600,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                textTransform: 'none'
              }}
            >
              Arquitectura de excelencia para tu inversión.
            </h1>
            <p 
              style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
                maxWidth: '720px', 
                color: 'var(--text-muted)',
                lineHeight: 1.55 
              }}
            >
              Transformamos espacios mediante diseño arquitectónico, interiorismo y construcción de alta precisión en Santo Domingo y todo el territorio nacional.
            </p>
          </div>

          {/* Celda Central: Fotografía Principal de Residencia Contemporánea y Ficha Técnica de Portada */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2.5rem',
              alignItems: 'end'
            }}
          >
            {/* Fotografía de Alto Impacto (post_26.jpg - Residencia con sello Arquicasa) */}
            <div 
              className="arch-img-frame"
              style={{ 
                border: '1px solid var(--hairline-light)',
                minHeight: '440px',
                aspectRatio: '16 / 10'
              }}
            >
              <img 
                src="./media/post_26.jpg" 
                alt="ARQUICASA — Arquitectura Contemporánea y Construcción" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Dossier de Portada & Acciones Inmediatas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <table className="dossier-table">
                <tbody>
                  <tr>
                    <td>Firma</td>
                    <td>{CLIENT_DATA.legalName}</td>
                  </tr>
                  <tr>
                    <td>Dirección</td>
                    <td>{CLIENT_DATA.director}</td>
                  </tr>
                  <tr>
                    <td>Trayectoria</td>
                    <td>{CLIENT_DATA.yearsExperience} años en diseño y ejecución</td>
                  </tr>
                  <tr>
                    <td>Proyectos</td>
                    <td>{CLIENT_DATA.projectsCount} obras documentadas</td>
                  </tr>
                  <tr>
                    <td>Sede Activa</td>
                    <td>Santo Domingo, R.D.</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a 
                  href={CLIENT_DATA.whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Iniciar Proyecto vía WhatsApp</span>
                  <ArrowUpRight size={16} />
                </a>
                <a 
                  href="#disciplinas"
                  className="btn-outline"
                >
                  <span>Explorar Disciplinas ↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: DISCIPLINAS & SERVICIOS (ÍNDICE EDITORIAL ASIMÉTRICO CON LÍNEAS 1PX) */}
      <section 
        id="disciplinas"
        className="section-secondary border-b-hairline"
        style={{ 
          paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6.5rem)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              alignItems: 'baseline',
              gap: '1.5rem',
              marginBottom: '3.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--hairline-light)'
            }}
          >
            <div>
              <div className="cad-label" style={{ marginBottom: '0.4rem' }}>
                Índice de Práctica
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 600 }}>
                Disciplinas & Alcance Técnico
              </h2>
            </div>
            <p style={{ maxWidth: '420px', fontSize: '0.95rem' }}>
              Enfoque riguroso desde el anteproyecto hasta la entrega definitiva, con supervisión técnica permanente en terreno.
            </p>
          </div>

          {/* Lista Lineal con Divisores Hairline 1px */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SERVICES.map((service, idx) => (
              <div 
                key={service.slug}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  alignItems: 'center',
                  gap: '2rem',
                  paddingTop: '2.5rem',
                  paddingBottom: '2.5rem',
                  borderBottom: '1px solid var(--hairline-light)',
                  transition: 'background-color 0.2s ease'
                }}
              >
                {/* Columna A: Ícono Hecho a Medida & Número de Disciplina */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    [{service.number}]
                  </div>
                  <BespokeServiceIcon 
                    title={service.title} 
                    category={service.kicker} 
                    index={idx}
                    size={48}
                  />
                  <div>
                    <div className="cad-label" style={{ marginBottom: '0.2rem' }}>
                      {service.kicker}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Columna B: Breve Descripción Limpia (Sin muros de texto) */}
                <div>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-muted)' }}>
                    {service.shortDesc}
                  </p>
                </div>

                {/* Columna C: Enlace Directo a Subpágina Multi-Página */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }} className="md-justify-end">
                  <a 
                    href={`#/servicios/${service.slug}`}
                    className="btn-outline"
                    style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem' }}
                  >
                    <span>Conocer más</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PLANIMETRÍA CAD & ANÁLISIS ESTRUCTURAL (TECHNICAL SCHEMATIC VECTORIAL INTERACTIVO) */}
      <section 
        id="planimetria"
        className="section-dark"
        style={{ 
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          borderBottom: '1px solid var(--hairline-dark)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              maxWidth: '820px', 
              marginBottom: '3rem'
            }}
          >
            <div 
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                letterSpacing: '0.18em', 
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                marginBottom: '0.6rem'
              }}
            >
              Control Dimensional & Ingeniería
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 600, color: '#F6F7F8', marginBottom: '1rem' }}>
              Precisión estructural y planimetría previa a obra.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-light-muted)' }}>
              Cada proyecto se modula sobre ejes de carga calculados, cotas milimétricas y especificaciones de materiales antes de iniciar la ejecución física.
            </p>
          </div>

          {/* Visualizador Vectorial Técnico Hecho a Medida */}
          <div style={{ marginBottom: '3rem' }}>
            <TechnicalSchematic darkOverride={true} />
          </div>

          {/* Ficha de Materiales Reales Verificados */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--hairline-dark)'
            }}
          >
            {CLIENT_DATA.materials.map((mat, i) => (
              <div 
                key={i}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'rgba(246, 247, 248, 0.85)'
                }}
              >
                <span style={{ color: 'var(--accent-gold)' }}>+</span>
                <span>{mat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: OBRAS DESTACADAS (PORTAFOLIO EDITORIAL ASIMÉTRICO — CERO CARDS REPETITIVAS) */}
      <section 
        id="obras"
        className="section-light border-b-hairline"
        style={{ 
          paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              alignItems: 'baseline',
              gap: '1.5rem',
              marginBottom: '4.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--hairline-light)'
            }}
          >
            <div>
              <div className="cad-label" style={{ marginBottom: '0.4rem' }}>
                Registro Fotográfico Verificado
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 600 }}>
                Obras Seleccionadas
              </h2>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              SANTO DOMINGO · PORTAFOLIO OFICIAL
            </div>
          </div>

          {/* Ritmo de Proyectos Asimétricos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {FEATURED_PROJECTS.map((proj, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <article 
                  key={proj.code}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                  }}
                >
                  {/* Bloque Fotográfico Asimétrico */}
                  <div style={{ order: isEven ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div 
                      className="arch-img-frame"
                      style={{ 
                        border: '1px solid var(--hairline-light)',
                        aspectRatio: '16 / 10',
                        minHeight: '340px'
                      }}
                    >
                      <img 
                        src={proj.mainPhoto} 
                        alt={proj.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Vistas Secundarias Específicas del Proyecto */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      {proj.subPhotos.map((sub, sIdx) => (
                        <div 
                          key={sIdx}
                          className="arch-img-frame"
                          style={{ 
                            border: '1px solid var(--hairline-light)',
                            aspectRatio: '4 / 3'
                          }}
                        >
                          <img 
                            src={sub.url} 
                            alt={sub.label} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ficha Técnica & Descripción Editorial */}
                  <div style={{ order: isEven ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div>
                      <div className="cad-label" style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                        {proj.code} — {proj.category}
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '0.5rem' }}>
                        {proj.title}
                      </h3>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {proj.location}
                      </div>
                    </div>

                    <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                      {proj.description}
                    </p>

                    {/* Tabla de Especificaciones de Obra */}
                    <table className="dossier-table">
                      <tbody>
                        <tr>
                          <td>Alcance</td>
                          <td>{proj.scope}</td>
                        </tr>
                        <tr>
                          <td>Materialidad</td>
                          <td>{proj.materials}</td>
                        </tr>
                        <tr>
                          <td>Ubicación</td>
                          <td>{proj.location}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div>
                      <a 
                        href={CLIENT_DATA.whatsappUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.75rem 1.5rem', fontSize: '0.82rem' }}
                      >
                        <span>Consultar Obra Similar</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: ESTUDIO, DIRECCIÓN & PRESENCIA NACIONAL */}
      <section 
        id="estudio"
        className="section-secondary border-b-hairline"
        style={{ 
          paddingTop: 'clamp(4.5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4.5rem, 8vw, 7rem)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            {/* Foto de Edificio / Obra Institucional Real (post_3.jpg - Centro Educativo Curvo) */}
            <div 
              className="arch-img-frame"
              style={{ 
                border: '1px solid var(--hairline-light)',
                aspectRatio: '4 / 5',
                minHeight: '380px'
              }}
            >
              <img 
                src="./media/post_3.jpg" 
                alt="JML ARQUICASA — Centro Educativo y Obras Institucionales" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Narrativa del Estudio & Fundador */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div className="cad-label" style={{ marginBottom: '0.5rem' }}>
                  Liderazgo Técnico
                </div>
                <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '0.75rem' }}>
                  {CLIENT_DATA.director}
                </h2>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {CLIENT_DATA.directorRole} · {CLIENT_DATA.legalName}
                </div>
              </div>

              <blockquote 
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  paddingLeft: '1.25rem',
                  borderLeft: '2px solid var(--text-primary)',
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                "{CLIENT_DATA.quote}"
              </blockquote>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                JML ARQUICASA SRL es una empresa de arquitectura, construcción e inmobiliaria con sede en Santo Domingo. Nos especializamos en la ejecución de proyectos residenciales, diseño de interiores corporativos y supervisión rigurosa de obras, garantizando la plusvalía y durabilidad de cada inversión.
              </p>

              {/* Sectores de Intervención Verificados */}
              <div>
                <div className="cad-label" style={{ marginBottom: '0.75rem' }}>
                  Sectores de Operación Activa
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {CLIENT_DATA.sectors.map((sec, sIdx) => (
                    <span 
                      key={sIdx}
                      style={{ 
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        padding: '0.35rem 0.75rem',
                        border: '1px solid var(--hairline-light)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón WhatsApp */}
              <div>
                <a 
                  href={CLIENT_DATA.whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Conversar con el Arq. Josué Mallén</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CONVERSIÓN INMEDIATA & DIÁLOGO DIRECTO */}
      <section 
        className="section-dark"
        style={{ 
          paddingTop: 'clamp(5rem, 9vw, 8rem)',
          paddingBottom: 'clamp(5rem, 9vw, 8rem)'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <div 
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.75rem', 
              letterSpacing: '0.18em', 
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}
          >
            Contacto & Desarrollo
          </div>
          <h2 
            style={{ 
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', 
              fontWeight: 600, 
              color: '#F6F7F8',
              lineHeight: 1.05,
              marginBottom: '1.5rem' 
            }}
          >
            Comencemos a proyectar tu próxima obra.
          </h2>
          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
              color: 'var(--text-light-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.6
            }}
          >
            Consulta directa de alcance, presupuesto preliminar o asesoría en sitio en Santo Domingo y todo el territorio nacional.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
            <a 
              href={CLIENT_DATA.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ padding: '1rem 2.25rem', fontSize: '0.92rem' }}
            >
              <span>Abrir Conversación WhatsApp (809-389-0799)</span>
              <ArrowUpRight size={18} />
            </a>
            <a 
              href={CLIENT_DATA.instagramUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-dark"
              style={{ padding: '1rem 2.25rem', fontSize: '0.92rem' }}
            >
              <Instagram size={18} />
              <span>Ver Portafolio en Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/**
 * 3. SUBPÁGINA DEDICADA DE SERVICIO (ARQUITECTURA MULTI-PÁGINA)
 * Renderiza fotografías reales específicas de esta disciplina, ficha técnica detallada y conversión directa.
 */
function ServiceDetailView({ service }) {
  const serviceWhatsAppUrl = `https://wa.me/8093890799?text=Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20${encodeURIComponent(service.title)}%20con%20JML%20ARQUICASA.`;

  return (
    <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
      {/* Cabecera Editorial de la Disciplina */}
      <section 
        className="section-light border-b-hairline"
        style={{ 
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)'
        }}
      >
        <div className="container">
          {/* Botón de Regreso Suave */}
          <div style={{ marginBottom: '2.5rem' }}>
            <a 
              href="#/" 
              style={{ 
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-muted)'
              }}
              onMouseEnter={(e) => e.target.style.color = '#121417'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              <ArrowLeft size={16} />
              <span>Volver a la portada</span>
            </a>
          </div>

          <div style={{ maxWidth: '920px' }}>
            <div className="cad-label" style={{ marginBottom: '0.5rem' }}>
              Disciplina [{service.number}] — {service.kicker}
            </div>
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', 
                fontWeight: 600, 
                lineHeight: 1.05,
                marginBottom: '1.5rem' 
              }}
            >
              {service.title}
            </h1>
            <p 
              style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}
            >
              {service.fullDesc}
            </p>

            <a 
              href={serviceWhatsAppUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Consultar este servicio vía WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Galería de Fotografías Reales Específicas de esta Disciplina */}
      <section 
        className="section-secondary border-b-hairline"
        style={{ 
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)'
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="cad-label" style={{ marginBottom: '0.4rem' }}>
              Evidencia en Terreno
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600 }}>
              Registro Fotográfico de Obras
            </h2>
          </div>

          {/* Grid Asimétrico de Fotos Reales */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {service.photos.map((photo, pIdx) => (
              <div 
                key={pIdx}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <div 
                  className="arch-img-frame"
                  style={{ 
                    border: '1px solid var(--hairline-light)',
                    aspectRatio: '16 / 11',
                    minHeight: '260px'
                  }}
                >
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha Técnica & Metodología de Ejecución */}
      <section 
        className="section-light border-b-hairline"
        style={{ 
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'start'
            }}
          >
            {/* Beneficios y Puntos Clave */}
            <div>
              <div className="cad-label" style={{ marginBottom: '0.5rem' }}>
                Metodología Rigurosa
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, marginBottom: '1.5rem' }}>
                Garantías y Alcance Operativo
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                {service.challenge}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {service.features.map((feat, fIdx) => (
                  <div 
                    key={fIdx}
                    style={{ 
                      display: 'flex', 
                      gap: '1rem',
                      alignItems: 'flex-start',
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid var(--hairline-light)'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
                      [0{fIdx + 1}]
                    </span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sheet de la Disciplina */}
            <div 
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                border: '1px solid var(--hairline-light)'
              }}
            >
              <div className="cad-label" style={{ marginBottom: '1rem' }}>
                Especificaciones de Disciplina
              </div>
              <table className="dossier-table" style={{ marginBottom: '2rem' }}>
                <tbody>
                  {service.specs.map((sp, sIdx) => (
                    <tr key={sIdx}>
                      <td>{sp.label}</td>
                      <td>{sp.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <a 
                href={serviceWhatsAppUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <span>Solicitar Asesoría para este Servicio</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Otras Disciplinas del Estudio */}
      <section 
        className="section-dark"
        style={{ 
          paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)'
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div 
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.72rem', 
                letterSpacing: '0.14em', 
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                marginBottom: '0.4rem'
              }}
            >
              Explorar Otras Especialidades
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#F6F7F8', fontWeight: 600 }}>
              Disciplinas Complementarias
            </h3>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {SERVICES.filter(s => s.slug !== service.slug).map((other) => (
              <a
                key={other.slug}
                href={`#/servicios/${other.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.5rem',
                  border: '1px solid var(--hairline-dark)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--hairline-dark)'}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                  [{other.number}]
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#F6F7F8', marginBottom: '0.5rem' }}>
                  {other.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', marginBottom: '1rem', flex: 1 }}>
                  {other.shortDesc}
                </p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-light)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>Ver detalles</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
