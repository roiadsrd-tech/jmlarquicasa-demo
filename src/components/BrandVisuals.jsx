import React, { useState } from 'react';

const BRAND_CONFIG = {
  "businessName": "ARQUICASA",
  "initial": "A",
  "schematicType": "structural-blueprint",
  "strokeWidth": 2,
  "accentHex": "#FFFFFF",
  "goldHex": "#C5A059",
  "bgDarkHex": "#121417",
  "textLightHex": "#F6F7F8",
  "geometryStyle": "geometric-block",
  "cornerRadius": "0px",
  "title": "Estructural Grid Analysis",
  "subtitle": "Interactive visualization of load-bearing axes and spatial distribution in residential projects.",
  "annotations": [
    "Eje de carga principal",
    "Nivel de desplante",
    "Cota de altura libre",
    "Módulo de fachada"
  ],
  "materials": [
    "Madera",
    "Sheetrock",
    "Iluminación LED",
    "Estructuras metálicas"
  ],
  "locations": [
    "Santo Domingo",
    "Naco",
    "Villa Mella"
  ]
};

/**
 * Ícono vectorial custom-made para cada servicio, construido con el mismo grosor de línea,
 * geometría y acento cromático del logo de la marca (CERO íconos genéricos de plantilla).
 * Detecta inteligentemente la industria y el servicio real para dibujar un símbolo auténtico.
 */
export function BespokeServiceIcon({ index = 0, name = '', title = '', category = '', size = 44, className = '' }) {
  const sw = BRAND_CONFIG.strokeWidth || 1.5;
  const stroke = BRAND_CONFIG.accentHex;
  const secondary = BRAND_CONFIG.goldHex;
  const rx = BRAND_CONFIG.cornerRadius === '999px' ? 22 : BRAND_CONFIG.cornerRadius === '0px' ? 4 : 10;
  
  const ctx = `${title} ${name} ${category}`.toLowerCase();
  const isDental = BRAND_CONFIG.schematicType === 'dental-3d-anatomy' || /ortodon|invisalign|dental|sonrisa|diente|limpieza|aquacare|est[eé]tica|carilla|pediatr|implante/i.test(ctx);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
    >
      {/* Marco sutil con esquinas redondeadas amigables */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx={rx}
        stroke={stroke}
        strokeOpacity="0.22"
        strokeWidth={sw}
        fill={stroke}
        fillOpacity="0.04"
      />

      {isDental ? (
        // ICONOGRAFÍA CONTEXTUAL PARA ODONTOLOGÍA Y SALUD
        (/invisalign|ortodon|alinead|brackets/i.test(ctx) || index === 0) ? (
          // 1. Alineador transparente Invisalign® / Arco de ortodoncia
          <g stroke={stroke} strokeWidth={sw}>
            {/* Contorno anatómico del alineador flexible */}
            <path d="M12 28C13 18 19 14 24 14C29 14 35 18 36 28" strokeLinecap="round" />
            <path d="M15 31C16 22 20 18 24 18C28 18 32 22 33 31" stroke={secondary} strokeDasharray="2 2" strokeLinecap="round" />
            {/* Destello de transparencia y alineación */}
            <path d="M24 10V14M22 12H26" stroke={secondary} strokeLinecap="round" />
            <circle cx="24" cy="24" r="1.75" fill={secondary} stroke="none" />
            <circle cx="17" cy="26" r="1.5" fill={stroke} stroke="none" />
            <circle cx="31" cy="26" r="1.5" fill={stroke} stroke="none" />
          </g>
        ) : (/limpieza|aquacare|profila|higiene|sarro/i.test(ctx) || index === 1) ? (
          // 2. Limpieza AquaCare (Brisa suave de aire/fluido purificado)
          <g stroke={stroke} strokeWidth={sw}>
            {/* Silueta de diente saludable */}
            <path d="M16 22C16 16 19 14 24 14C29 14 32 16 32 22C32 28 30 33 28 35C26 37 25 31 24 31C23 31 22 37 20 35C18 33 16 28 16 22Z" strokeLinejoin="round" />
            {/* Micro-gotas y brisa de aire purificante */}
            <path d="M12 16C12 16 14 18 14 20" stroke={secondary} strokeLinecap="round" />
            <path d="M36 16C36 16 34 18 34 20" stroke={secondary} strokeLinecap="round" />
            <circle cx="13" cy="12" r="1.5" fill={secondary} stroke="none" />
            <circle cx="35" cy="12" r="1.5" fill={secondary} stroke="none" />
            <circle cx="24" cy="22" r="1.75" fill={stroke} stroke="none" />
          </g>
        ) : (/est[eé]tica|carilla|sonrisa|blanquea|rehab/i.test(ctx) || index === 2) ? (
          // 3. Estética Dental & Carillas (Diseño armónico y destello de brillo)
          <g stroke={stroke} strokeWidth={sw}>
            {/* Curva de sonrisa estética de autor */}
            <path d="M14 21C17 29 31 29 34 21" strokeLinecap="round" />
            {/* Contorno de carilla de porcelana */}
            <path d="M18 16C18 13 30 13 30 16L29 27C29 31 19 31 19 27Z" stroke={secondary} />
            {/* Estrella de resplandor / brillo */}
            <path d="M34 12L35 15L38 16L35 17L34 20L33 17L30 16L33 15Z" fill={secondary} stroke="none" />
          </g>
        ) : (/pediatr|niñ|infan/i.test(ctx) || index === 3) ? (
          // 4. Odontopediatría (Diente amable, afectuoso y libre de ansiedad)
          <g stroke={stroke} strokeWidth={sw}>
            {/* Silueta de diente infantil redondeado */}
            <path d="M17 21C17 16 20 15 24 15C28 15 31 16 31 21C31 26 29 31 27 33C25 35 24.5 30 24 30C23.5 30 23 35 21 33C19 31 17 26 17 21Z" strokeLinejoin="round" />
            {/* Sonrisa amigable en el centro del diente */}
            <path d="M21 23C22 25 26 25 27 23" stroke={secondary} strokeLinecap="round" />
            {/* Escudo protector / halo superior amable */}
            <path d="M14 12C19 9 29 9 34 12" stroke={secondary} strokeLinecap="round" strokeDasharray="2 2" />
          </g>
        ) : (/implant|cirug/i.test(ctx) || index === 4) ? (
          // 5. Implantes y Rehabilitación (Corona y raíz de titanio de precisión)
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M18 14H30V20C30 22 28 23 24 23C20 23 18 22 18 20V14Z" strokeLinejoin="round" />
            <line x1="24" y1="23" x2="24" y2="35" stroke={secondary} />
            <path d="M21 26H27M22 29H26M22 32H26" stroke={secondary} strokeLinecap="round" />
          </g>
        ) : (
          // 6. Diagnóstico digital / Tecnología 3D
          <g stroke={stroke} strokeWidth={sw}>
            <circle cx="24" cy="24" r="11" strokeDasharray="3 3" />
            <path d="M18 24C18 20 21 17 24 17C27 17 30 20 30 24" stroke={secondary} strokeLinecap="round" />
            <circle cx="24" cy="24" r="3" fill={stroke} stroke="none" />
          </g>
        )
      ) : (
        // ICONOGRAFÍA PARA ARQUITECTURA / INTERIORISMO / MODULAR
        (index % 6 === 0) ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M14 14H34M14 24H28M14 34H34" strokeLinecap="square" />
            <path d="M14 14V34" stroke={secondary} />
            <circle cx="32" cy="24" r="2.5" fill={secondary} stroke="none" />
          </g>
        ) : (index % 6 === 1) ? (
          <g stroke={stroke} strokeWidth={sw}>
            <polygon points="24,11 36,18 36,31 24,38 12,31 12,18" strokeLinejoin="round" />
            <polyline points="12,18 24,25 36,18" stroke={secondary} />
            <line x1="24" y1="25" x2="24" y2="38" stroke={secondary} />
          </g>
        ) : (index % 6 === 2) ? (
          <g stroke={stroke} strokeWidth={sw}>
            <rect x="12" y="12" width="24" height="24" rx="2" />
            <line x1="21" y1="12" x2="21" y2="36" stroke={secondary} />
            <line x1="21" y1="22" x2="36" y2="22" stroke={secondary} />
            <circle cx="16.5" cy="24" r="2" fill={secondary} stroke="none" />
          </g>
        ) : (index % 6 === 3) ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M12 34C12 21.8497 17.3726 14 24 14C30.6274 14 36 21.8497 36 34" />
            <line x1="10" y1="34" x2="38" y2="34" stroke={secondary} />
            <line x1="24" y1="10" x2="24" y2="34" strokeDasharray="2 2" stroke={secondary} />
            <circle cx="24" cy="14" r="2.5" fill={stroke} stroke="none" />
          </g>
        ) : (index % 6 === 4) ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M12 20L24 13L36 20L24 27L12 20Z" />
            <path d="M12 26L24 33L36 26" stroke={secondary} />
            <path d="M12 31L24 38L36 31" strokeOpacity="0.6" />
          </g>
        ) : (
          <g stroke={stroke} strokeWidth={sw}>
            <circle cx="24" cy="24" r="11" />
            <line x1="24" y1="9" x2="24" y2="16" stroke={secondary} />
            <line x1="24" y1="32" x2="24" y2="39" stroke={secondary} />
            <line x1="9" y1="24" x2="16" y2="24" stroke={secondary} />
            <line x1="32" y1="24" x2="39" y2="24" stroke={secondary} />
            <circle cx="24" cy="24" r="2.5" fill={secondary} stroke="none" />
          </g>
        )
      )}
    </svg>
  );
}

/**
 * Ilustración técnica / Blueprint CAD / Esquema 3D vectorial interactivo hecho a medida para la marca.
 * Permite alternar capas de inspección y visualizar especificaciones reales del cliente.
 */
export function TechnicalSchematic({ className = '', darkOverride = null }) {
  const [activeLayer, setActiveLayer] = useState(0);
  const type = BRAND_CONFIG.schematicType;
  const sw = BRAND_CONFIG.strokeWidth;
  const accent = BRAND_CONFIG.accentHex;
  const gold = BRAND_CONFIG.goldHex;

  const layers =
    type === 'dental-3d-anatomy'
      ? [
          { id: 0, label: 'INVISALIGN® 3D', code: 'ALINEACIÓN INVISIBLE' },
          { id: 1, label: 'LIMPIEZA AQUACARE', code: 'CERO CONTACTO NI DOLOR' },
          { id: 2, label: 'ESTÉTICA & CARILLAS', code: 'DISEÑO DE SONRISA' },
          { id: 3, label: 'ODONTOPEDIATRÍA', code: 'ATENCIÓN INFANTIL' }
        ]
      : type === 'millwork-cad'
      ? [
          { id: 0, label: 'MODULACIÓN & ALZADO', code: 'CAD-MM · 01' },
          { id: 1, label: 'HERRAJES & APERTURA', code: 'BLUM/SYS · 02' },
          { id: 2, label: 'ILUMINACIÓN INTEGRADA', code: 'LED-2700K · 03' }
        ]
      : [
          { id: 0, label: 'PLANTA & EJES ESTRUCTURALES', code: 'PLANO · A-01' },
          { id: 1, label: 'VOLUMETRÍA & ELEVACIÓN', code: 'CORTE · B-02' },
          { id: 2, label: 'MATERIALIDAD & DETALLE', code: 'ESPEC · C-03' }
        ];

  if (type === 'dental-3d-anatomy') {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(105, 78, 121, 0.14)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          boxShadow: '0 12px 36px -12px rgba(105, 78, 121, 0.08)'
        }}
      >
        {/* Cabecera amigable del visualizador */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingBottom: '1.25rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(105, 78, 121, 0.1)'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: accent
              }}
            >
              Tecnología & Métodos · {layers[activeLayer]?.code}
            </span>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', fontWeight: 600, margin: '0.25rem 0 0', color: '#1E1528' }}>
              {activeLayer === 0 && 'Alineación Digital Invisalign® SmartTrack®'}
              {activeLayer === 1 && 'Profilaxis AquaCare: Brisa de Aire Sin Dolor'}
              {activeLayer === 2 && 'Diseño Facial y Carillas de Cerámica'}
              {activeLayer === 3 && 'Odontopediatría Cálida y Preventiva'}
            </h3>
          </div>

          {/* Selector de especialidades */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {layers.map((layer, idx) => (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayer(idx)}
                style={{
                  background: activeLayer === idx ? accent : 'rgba(105, 78, 121, 0.06)',
                  color: activeLayer === idx ? '#FFFFFF' : '#4A3B54',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.45rem 1rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {layer.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lienzo Vectorial de Tratamiento */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', minHeight: '280px', backgroundColor: '#FAF9FC', borderRadius: '14px', overflow: 'hidden' }}>
          <svg
            viewBox="0 0 800 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            {/* Fondo suave y limpio con gradiente sutil */}
            <rect width="800" height="450" fill="#FAF9FC" />
            <circle cx="400" cy="225" r="280" fill={accent} fillOpacity="0.03" />

            {activeLayer === 0 && (
              // VISTA 1: INVISALIGN 3D & ALINEADORES
              <g>
                {/* Arco dental simulado */}
                <path d="M 180 340 C 190 140, 610 140, 620 340" stroke="rgba(105, 78, 121, 0.25)" strokeWidth="3" strokeDasharray="4 4" fill="none" />
                {/* Alineador transparente translúcido */}
                <path d="M 175 340 C 185 130, 615 130, 625 340" stroke={accent} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.8" fill="none" />
                <path d="M 185 340 C 195 145, 605 145, 615 340" stroke={gold} strokeWidth="2" strokeOpacity="0.6" fill="none" />

                {/* Piezas dentales representadas armónicamente */}
                {[
                  { cx: 400, cy: 135, w: 42, h: 56, label: 'Central D.' },
                  { cx: 350, cy: 142, w: 40, h: 54, label: 'Central I.' },
                  { cx: 448, cy: 154, w: 34, h: 50, label: 'Lateral' },
                  { cx: 302, cy: 162, w: 34, h: 50, label: 'Lateral' },
                  { cx: 490, cy: 185, w: 32, h: 48, label: 'Canino' },
                  { cx: 260, cy: 195, w: 32, h: 48, label: 'Canino' },
                  { cx: 535, cy: 235, w: 36, h: 46, label: 'Premolar' },
                  { cx: 220, cy: 245, w: 36, h: 46, label: 'Premolar' }
                ].map((t, i) => (
                  <g key={i}>
                    <rect x={t.cx - t.w/2} y={t.cy - t.h/2} width={t.w} height={t.h} rx="8" fill="#FFFFFF" stroke={accent} strokeWidth="1.5" strokeOpacity="0.7" />
                    <line x1={t.cx} y1={t.cy - t.h/2 + 6} x2={t.cx} y2={t.cy + t.h/2 - 6} stroke={gold} strokeWidth="1" strokeOpacity="0.4" />
                  </g>
                ))}

                {/* Micro-flechas de movimiento milimétrico */}
                <g stroke={accent} strokeWidth="2" strokeLinecap="round">
                  <path d="M 375 75 L 375 105 M 370 98 L 375 105 L 380 98" />
                  <path d="M 425 75 L 425 105 M 420 98 L 425 105 L 430 98" />
                </g>

                {/* Badges de especificación */}
                <rect x="520" y="55" width="230" height="65" rx="10" fill="#FFFFFF" stroke="rgba(105, 78, 121, 0.15)" strokeWidth="1" />
                <text x="535" y="80" fill={accent} fontSize="12" fontWeight="bold">PRECISIÓN SMARTTRACK®</text>
                <text x="535" y="102" fill="#5F4B6A" fontSize="11">+0.25 mm por alineador en tiempo récord</text>

                <rect x="50" y="55" width="220" height="65" rx="10" fill="#FFFFFF" stroke="rgba(105, 78, 121, 0.15)" strokeWidth="1" />
                <text x="65" y="80" fill={accent} fontSize="12" fontWeight="bold">ESCANEO 3D iTERO 5D</text>
                <text x="65" y="102" fill="#5F4B6A" fontSize="11">Cero moldes de pasta incómodos</text>
              </g>
            )}

            {activeLayer === 1 && (
              // VISTA 2: LIMPIEZA DENTAL AQUACARE
              <g>
                {/* Diente central limpio */}
                <path d="M 320 180 C 320 120, 480 120, 480 180 L 470 310 C 470 345, 415 345, 400 315 C 385 345, 330 345, 330 310 Z" fill="#FFFFFF" stroke={accent} strokeWidth="2.5" />
                <path d="M 370 170 Q 400 195 430 170" stroke={gold} strokeWidth="1.75" strokeLinecap="round" fill="none" />

                {/* Boquilla de fluidos AquaCare */}
                <rect x="120" y="210" width="130" height="24" rx="12" fill={accent} />
                <polygon points="250,210 280,222 250,234" fill={accent} />

                {/* Ráfaga de brisa fluida purificante */}
                <g stroke={gold} strokeWidth="2" strokeLinecap="round">
                  <path d="M 285 222 L 340 200" strokeDasharray="3 3" />
                  <path d="M 285 222 L 345 222" strokeDasharray="4 2" />
                  <path d="M 285 222 L 340 244" strokeDasharray="3 3" />
                </g>

                {/* Micro-partículas y gotas de limpieza */}
                {[
                  { cx: 310, cy: 190, r: 3 },
                  { cx: 330, cy: 215, r: 4 },
                  { cx: 320, cy: 240, r: 3.5 },
                  { cx: 300, cy: 255, r: 2.5 }
                ].map((p, i) => (
                  <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={accent} fillOpacity="0.6" />
                ))}

                {/* Destellos de esmalte brillante */}
                <g fill={gold}>
                  <path d="M 450 140 L 454 150 L 464 154 L 454 158 L 450 168 L 446 158 L 436 154 L 446 150 Z" />
                  <path d="M 465 240 L 468 248 L 476 251 L 468 254 L 465 262 L 462 254 L 454 251 L 462 248 Z" />
                </g>

                {/* Ventajas sin dolor */}
                <rect x="520" y="140" width="220" height="120" rx="12" fill="#FFFFFF" stroke="rgba(105, 78, 121, 0.15)" strokeWidth="1" />
                <text x="540" y="172" fill={accent} fontSize="13" fontWeight="bold">VENTAJAS AQUACARE</text>
                <text x="540" y="198" fill="#5F4B6A" fontSize="11">✓ Cero vibraciones agresivas</text>
                <text x="540" y="218" fill="#5F4B6A" fontSize="11">✓ Cero instrumental cortante</text>
                <text x="540" y="238" fill="#5F4B6A" fontSize="11">✓ Remoción suave de manchas</text>
              </g>
            )}

            {activeLayer === 2 && (
              // VISTA 3: ESTÉTICA & CARILLAS
              <g>
                {/* Guía facial armónica */}
                <line x1="120" y1="225" x2="680" y2="225" stroke="rgba(105, 78, 121, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 180 180 Q 400 290 620 180" stroke={accent} strokeWidth="2.5" fill="none" />

                {/* 4 Carillas frontales en proporción áurea */}
                <g fill="#FFFFFF" stroke={accent} strokeWidth="1.8">
                  {/* Incisivo Central Izquierdo */}
                  <path d="M 345 130 C 345 110, 395 110, 395 130 L 393 235 C 393 248, 348 248, 347 235 Z" />
                  {/* Incisivo Central Derecho */}
                  <path d="M 405 130 C 405 110, 455 110, 455 130 L 453 235 C 452 248, 407 248, 407 235 Z" />
                  {/* Lateral Izquierdo */}
                  <path d="M 298 140 C 298 122, 338 122, 338 140 L 336 225 C 335 236, 301 236, 300 225 Z" strokeOpacity="0.8" />
                  {/* Lateral Derecho */}
                  <path d="M 462 140 C 462 122, 502 122, 502 140 L 500 225 C 499 236, 465 236, 464 225 Z" strokeOpacity="0.8" />
                </g>

                {/* Capa de carilla cerámica translúcida */}
                <path d="M 347 190 Q 400 215 453 190 L 453 235 C 452 248, 407 248, 407 235 Z" fill={accent} fillOpacity="0.08" />

                {/* Destellos de luz */}
                <path d="M 435 150 L 438 160 L 448 163 L 438 166 L 435 176 L 432 166 L 422 163 L 432 160 Z" fill={gold} />

                {/* Notas de proporción áurea */}
                <rect x="530" y="80" width="210" height="90" rx="10" fill="#FFFFFF" stroke="rgba(105, 78, 121, 0.15)" strokeWidth="1" />
                <text x="548" y="108" fill={accent} fontSize="12" fontWeight="bold">PROPORCIÓN ÁUREA 1:1.618</text>
                <text x="548" y="130" fill="#5F4B6A" fontSize="11">Armonía natural con el labio y la</text>
                <text x="548" y="148" fill="#5F4B6A" fontSize="11">morfología facial única del paciente.</text>
              </g>
            )}

            {activeLayer === 3 && (
              // VISTA 4: ODONTOPEDIATRÍA
              <g>
                {/* Diente amigo cariñoso */}
                <path d="M 340 170 C 340 120, 460 120, 460 170 C 460 220, 445 270, 430 290 C 415 310, 405 260, 400 260 C 395 260, 385 310, 370 290 C 355 270, 340 220, 340 170 Z" fill="#FFFFFF" stroke={accent} strokeWidth="2.5" />
                {/* Ojos y sonrisa dulce */}
                <circle cx="380" cy="170" r="4" fill={accent} />
                <circle cx="420" cy="170" r="4" fill={accent} />
                <path d="M 385 195 Q 400 215 415 195" stroke={accent} strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Mejillas sonrojadas */}
                <circle cx="370" cy="190" r="7" fill={gold} fillOpacity="0.4" />
                <circle cx="430" cy="190" r="7" fill={gold} fillOpacity="0.4" />

                {/* Escudo protector infantil */}
                <path d="M 280 140 C 280 80, 520 80, 520 140 C 520 280, 400 360, 400 360 C 400 360, 280 280, 280 140 Z" stroke={accent} strokeWidth="2" strokeDasharray="5 5" fill="none" strokeOpacity="0.3" />

                {/* Estrellitas lúdicas */}
                <g fill={gold}>
                  <path d="M 240 160 L 243 168 L 251 171 L 243 174 L 240 182 L 237 174 L 229 171 L 237 168 Z" />
                  <path d="M 550 170 L 553 178 L 561 181 L 553 184 L 550 192 L 547 184 L 539 181 L 547 178 Z" />
                </g>

                <rect x="70" y="270" width="220" height="95" rx="12" fill="#FFFFFF" stroke="rgba(105, 78, 121, 0.15)" strokeWidth="1" />
                <text x="88" y="298" fill={accent} fontSize="12" fontWeight="bold">CONSULTA SIN MIEDO</text>
                <text x="88" y="322" fill="#5F4B6A" fontSize="11">Espacio acogedor y afectivo pensado</text>
                <text x="88" y="340" fill="#5F4B6A" fontSize="11">para la seguridad de los más pequeños.</text>
              </g>
            )}
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border ${className}`}
      style={{
        backgroundColor: darkOverride !== false ? '#0D0E11' : '#F4F3EF',
        borderColor: 'rgba(200, 164, 100, 0.25)',
        color: '#F5F3EE',
        padding: 'clamp(1.25rem, 3vw, 2.25rem)'
      }}
    >
      {/* Cabecera del plano técnico */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingBottom: '1rem',
          marginBottom: '1.25rem',
          borderBottom: '1px solid rgba(245, 243, 238, 0.12)'
        }}
      >
        <div>
          <div
            style={{
              fontFamily: ' monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: gold
            }}
          >
            {layers[activeLayer]?.code} — {BRAND_CONFIG.businessName}
          </div>
          <h4 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', fontWeight: 500, margin: '0.2rem 0 0', color: '#F5F3EE' }}>
            {BRAND_CONFIG.title}
          </h4>
        </div>

        {/* Selector de capas interactivo */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {layers.map((layer, idx) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveLayer(idx)}
              style={{
                background: activeLayer === idx ? accent : 'transparent',
                color: activeLayer === idx ? '#0D0E11' : 'rgba(245,243,238,0.75)',
                border: `1px solid ${activeLayer === idx ? accent : 'rgba(245,243,238,0.2)'}`,
                padding: '0.38rem 0.75rem',
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lienzo Vectorial SVG */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', minHeight: '260px' }}>
        <svg
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <pattern id="cadGridSmall" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(245,243,238,0.04)" strokeWidth="0.7" />
            </pattern>
            <pattern id="cadGridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#cadGridSmall)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(245,243,238,0.09)" strokeWidth="0.9" />
            </pattern>
          </defs>

          {/* Retícula técnica de fondo */}
          <rect width="800" height="450" fill="url(#cadGridLarge)" />

          {/* Marco y cruces de calibración */}
          <rect x="20" y="20" width="760" height="410" stroke="rgba(245,243,238,0.18)" strokeWidth="1" />
          <path d="M15 20H25M20 15V25M775 20H785M780 15V25M15 430H25M20 425V435M775 430H785M780 425V435" stroke={gold} strokeWidth="1.2" />

          {type === 'dental-3d-anatomy' ? (
            <g>
              {/* Ejes de simetría facial y proporción áurea */}
              <line x1="400" y1="35" x2="400" y2="415" stroke={gold} strokeWidth="0.9" strokeDasharray="4 4" strokeOpacity="0.7" />
              <line x1="120" y1="225" x2="680" y2="225" stroke="rgba(245,243,238,0.25)" strokeWidth="0.8" />
              <path d="M 160 190 Q 400 295 640 190" stroke={gold} strokeWidth="1.5" fill="none" />
              <path d="M 180 155 Q 400 225 620 155" stroke="rgba(245,243,238,0.35)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

              {/* Geometría dental / implante vectorial en vista técnica */}
              {/* Incisivos centrales y laterales en proporción 1.618 : 1 : 0.618 */}
              <g stroke="#F5F3EE" strokeWidth={sw}>
                {/* Central Izquierdo */}
                <path d="M342 135 C342 110, 396 110, 396 135 L393 232 C393 248, 346 248, 345 232 Z" fill="rgba(245,243,238,0.03)" />
                {/* Central Derecho */}
                <path d="M404 135 C404 110, 458 110, 458 135 L455 232 C454 248, 407 248, 407 232 Z" fill="rgba(245,243,238,0.03)" />
                {/* Lateral Izquierdo */}
                <path d="M298 145 C298 124, 336 124, 336 145 L334 222 C333 235, 301 235, 300 222 Z" strokeOpacity="0.75" />
                {/* Lateral Derecho */}
                <path d="M464 145 C464 124, 502 124, 502 145 L500 222 C499 235, 467 235, 466 222 Z" strokeOpacity="0.75" />
                {/* Caninos */}
                <path d="M258 155 C258 136, 292 136, 292 155 L289 216 C284 232, 263 230, 260 216 Z" strokeOpacity="0.5" />
                <path d="M508 155 C508 136, 542 136, 542 155 L540 216 C537 230, 516 232, 511 216 Z" strokeOpacity="0.5" />
              </g>

              {/* Capa de implante / raíz digital o malla 3D */}
              {activeLayer !== 2 && (
                <g stroke={accent} strokeWidth="1.2" strokeOpacity={activeLayer === 1 ? '1' : '0.55'}>
                  <line x1="370" y1="248" x2="370" y2="365" strokeDasharray="2 3" />
                  <line x1="430" y1="248" x2="430" y2="365" strokeDasharray="2 3" />
                  {/* Espiras de titanio de precisión */}
                  <path d="M356 275 L384 280 M358 290 L382 295 M360 305 L380 310 M362 320 L378 325 M364 335 L376 340" />
                  <path d="M416 275 L444 280 M418 290 L442 295 M420 305 L440 310 M422 320 L438 325 M424 335 L436 340" />
                </g>
              )}

              {/* Cotas de proporción áurea */}
              <g stroke={gold} strokeWidth="1" fill={gold} fontFamily="monospace" fontSize="10">
                <line x1="342" y1="92" x2="396" y2="92" />
                <line x1="342" y1="86" x2="342" y2="98" />
                <line x1="396" y1="86" x2="396" y2="98" />
                <text x="352" y="84" stroke="none">1.618 φ</text>

                <line x1="298" y1="92" x2="336" y2="92" />
                <text x="306" y="84" stroke="none">1.00</text>

                <circle cx="396" cy="210" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
                <line x1="400" y1="210" x2="575" y2="115" stroke={gold} strokeDasharray="3 3" />
                <text x="580" y="118" stroke="none">TRANSLUCIDEZ INCISAL</text>
              </g>
            </g>
          ) : type === 'millwork-cad' ? (
            <g>
              {/* Alzado arquitectónico milimétrico de mobiliario / walk-in closet / cocina de autor */}
              <rect x="110" y="65" width="580" height="310" stroke="#F5F3EE" strokeWidth={sw * 1.2} fill="rgba(245,243,238,0.015)" />

              {/* Modulación vertical */}
              <line x1="245" y1="65" x2="245" y2="375" stroke="#F5F3EE" strokeWidth={sw} />
              <line x1="555" y1="65" x2="555" y2="375" stroke="#F5F3EE" strokeWidth={sw} />
              <line x1="400" y1="65" x2="400" y2="245" stroke="rgba(245,243,238,0.5)" strokeWidth="0.9" />

              {/* Repisas y gaveteros milimétricos */}
              <line x1="110" y1="135" x2="245" y2="135" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="110" y1="205" x2="245" y2="205" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="110" y1="275" x2="245" y2="275" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="555" y1="135" x2="690" y2="135" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="555" y1="205" x2="690" y2="205" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="555" y1="275" x2="690" y2="275" stroke="#F5F3EE" strokeWidth="1" />

              {/* Isla central / módulo de gavetas con uñeros arquitectónicos */}
              <rect x="245" y="245" width="310" height="130" stroke={gold} strokeWidth={sw} fill="rgba(200,164,100,0.04)" />
              <line x1="245" y1="285" x2="555" y2="285" stroke={gold} strokeWidth="0.9" />
              <line x1="245" y1="330" x2="555" y2="330" stroke={gold} strokeWidth="0.9" />
              <line x1="400" y1="245" x2="400" y2="375" stroke={gold} strokeWidth="0.9" />

              {/* Líneas de proyección de apertura (CAD) */}
              {activeLayer !== 2 && (
                <g stroke={accent} strokeWidth="0.85" strokeDasharray="4 4" strokeOpacity="0.8">
                  <polyline points="110,65 245,135 110,205" />
                  <polyline points="690,65 555,135 690,205" />
                  <polyline points="245,65 400,155 245,245" />
                  <polyline points="555,65 400,155 555,245" />
                </g>
              )}

              {/* Tiras de iluminación LED cálida 2700K */}
              {activeLayer !== 1 && (
                <g stroke={gold} strokeWidth="2.2">
                  <line x1="120" y1="72" x2="235" y2="72" />
                  <line x1="565" y1="72" x2="680" y2="72" />
                  <line x1="258" y1="72" x2="542" y2="72" />
                </g>
              )}

              {/* Cotas dimensionales */}
              <g stroke={gold} fill={gold} fontFamily="monospace" fontSize="10">
                <line x1="110" y1="45" x2="690" y2="45" strokeWidth="0.9" />
                <line x1="110" y1="39" x2="110" y2="51" strokeWidth="1" />
                <line x1="245" y1="39" x2="245" y2="51" strokeWidth="1" />
                <line x1="555" y1="39" x2="555" y2="51" strokeWidth="1" />
                <line x1="690" y1="39" x2="690" y2="51" strokeWidth="1" />
                <text x="155" y="38" stroke="none">600 mm</text>
                <text x="375" y="38" stroke="none">1800 mm</text>
                <text x="600" y="38" stroke="none">600 mm</text>

                <line x1="720" y1="65" x2="720" y2="375" strokeWidth="0.9" />
                <line x1="714" y1="65" x2="726" y2="65" strokeWidth="1" />
                <line x1="714" y1="375" x2="726" y2="375" strokeWidth="1" />
                <text x="732" y="225" stroke="none">2400 mm</text>
              </g>
            </g>
          ) : (
            <g>
              {/* Plano arquitectónico / estructural CAD con ejes, planta y elevación */}
              <g stroke="rgba(245,243,238,0.22)" strokeWidth="0.8" strokeDasharray="6 4">
                <line x1="160" y1="35" x2="160" y2="415" />
                <line x1="340" y1="35" x2="340" y2="415" />
                <line x1="520" y1="35" x2="520" y2="415" />
                <line x1="660" y1="35" x2="660" y2="415" />
                <line x1="60" y1="120" x2="740" y2="120" />
                <line x1="60" y1="310" x2="740" y2="310" />
              </g>

              {/* Volumetría principal en planta y alzado */}
              <rect x="160" y="120" width="360" height="190" stroke="#F5F3EE" strokeWidth={sw * 1.4} fill="rgba(245,243,238,0.02)" />
              <rect x="340" y="85" width="320" height="260" stroke={gold} strokeWidth={sw} fill="rgba(200,164,100,0.03)" />

              {/* Divisiones espaciales internas y escaleras */}
              <line x1="250" y1="120" x2="250" y2="310" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="160" y1="215" x2="520" y2="215" stroke="#F5F3EE" strokeWidth="1" />

              {/* Arco de giro de puerta CAD */}
              <path d="M 250 180 A 35 35 0 0 1 285 215" stroke={accent} strokeWidth="1" strokeDasharray="3 2" fill="none" />
              <line x1="250" y1="215" x2="250" y2="180" stroke={accent} strokeWidth="1.2" />

              {/* Trama de circulación / escalera técnica */}
              <g stroke="rgba(245,243,238,0.55)" strokeWidth="0.9">
                <rect x="535" y="135" width="95" height="45" />
                <line x1="550" y1="135" x2="550" y2="180" />
                <line x1="565" y1="135" x2="565" y2="180" />
                <line x1="580" y1="135" x2="580" y2="180" />
                <line x1="595" y1="135" x2="595" y2="180" />
                <line x1="610" y1="135" x2="610" y2="180" />
              </g>

              {/* Rosa náutica / Norte arquitectónico */}
              <g transform="translate(95, 75)" stroke={gold} strokeWidth="1">
                <circle cx="0" cy="0" r="18" strokeOpacity="0.5" />
                <polygon points="0,-16 5,6 0,2 -5,6" fill={gold} stroke="none" />
                <text x="-4" y="-22" fill={gold} stroke="none" fontFamily="monospace" fontSize="9">N</text>
              </g>

              {/* Burbujas de eje estructural */}
              <g fill={gold} stroke={gold} fontFamily="monospace" fontSize="9">
                <circle cx="160" cy="48" r="10" fill="none" />
                <text x="154" y="51" stroke="none">A1</text>
                <circle cx="340" cy="48" r="10" fill="none" />
                <text x="334" y="51" stroke="none">B2</text>
                <circle cx="520" cy="48" r="10" fill="none" />
                <text x="514" y="51" stroke="none">C3</text>
                <circle cx="660" cy="48" r="10" fill="none" />
                <text x="654" y="51" stroke="none">D4</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Pie del plano con cotas y materiales reales verificados */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.75rem',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(245, 243, 238, 0.12)',
          fontFamily: 'monospace',
          fontSize: '0.72rem'
        }}
      >
        {BRAND_CONFIG.annotations.map((ann, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(245,243,238,0.82)' }}>
            <span style={{ color: gold }}>[0{i + 1}]</span>
            <span>{ann}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSchematic;
