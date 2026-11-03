export function GlyphArrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path d="M5 12L12 5M12 5H6.5M12 5v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlyphDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlyphCaret() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="nav-caret">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlyphSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7.2" cy="7.2" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.8 10.8L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/*
 * Geometric wordmark monogram: six bars in two grouped columns, standing in
 * for the six collaborators before the approved 6F mark is supplied.
 * Decorative only, always paired with the textual wordmark.
 */
export function MonogramMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.44} viewBox="0 0 48 21" fill="none" aria-hidden="true">
      <path d="M2 19V2" stroke="var(--ink)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M9 19V2" stroke="var(--ink)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M16 19V2" stroke="var(--ink)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M30 19V2" stroke="var(--ink)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M37 19V2" stroke="var(--accent)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M44 19V2" stroke="var(--ink)" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

function MiniGlyph() {
  return (
    <svg viewBox="0 0 90 76" fill="none" aria-hidden="true" className="hero-art-glyph">
      {[16, 15, 12, 9, 6].map((r, index) => (
        <circle
          key={index}
          cx="45"
          cy={6 + index * 16}
          r={r}
          fill={index === 4 ? "var(--accent)" : "var(--ink)"}
        />
      ))}
    </svg>
  );
}

/*
 * Original generative reef artwork: layered organic tentacle forms in warm
 * golds with soft depth, grain and vignette. Pure vector, no photography.
 * Decorative; meaning lives in the copy around it.
 */
export function ReefArt({ dense = true }: { dense?: boolean }) {
  const back = [
    "M -80 750 C 300 700, 500 950, 900 850 S 1500 700, 1700 760",
    "M -80 250 C 350 200, 700 380, 1100 300 S 1500 220, 1720 260",
    "M 200 -80 C 300 300, 180 600, 320 900 S 380 1050, 360 1080",
    "M 1200 -80 C 1150 350, 1350 650, 1280 1080",
  ];
  const mid = [
    "M -80 550 C 400 480, 650 700, 1000 620 S 1450 560, 1700 600",
    "M -80 880 C 400 820, 800 980, 1250 900",
    "M 600 -80 C 650 300, 500 650, 620 1080",
    "M 950 -80 C 900 350, 1080 700, 1000 1080",
    "M -80 120 C 500 60, 900 200, 1300 120 S 1600 100, 1720 120",
  ];
  const front = [
    "M -80 680 C 350 620, 700 780, 1100 700 S 1500 660, 1700 700",
    "M 300 -80 C 340 250, 260 500, 330 800 S 360 1000, 350 1080",
    "M 800 -80 C 780 300, 880 600, 850 900 S 840 1020, 845 1080",
    "M -80 380 C 400 330, 750 450, 1150 380",
  ];
  const polyps: Array<[number, number, number]> = dense
    ? [[420, 660, 14], [880, 690, 11], [330, 480, 9], [830, 320, 12], [620, 830, 10], [1090, 470, 9], [180, 700, 11], [1250, 760, 13]]
    : [[420, 660, 12], [880, 690, 10], [620, 830, 9]];

  return (
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="reef-svg">
      <defs>
        <linearGradient id="reef-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8f1de" />
          <stop offset="0.52" stopColor="#f3dd9f" />
          <stop offset="1" stopColor="#e0a83f" />
        </linearGradient>
        <radialGradient id="reef-glow" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#fff6df" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#fff6df" stopOpacity="0" />
        </radialGradient>
        <filter id="reef-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="38" />
        </filter>
        <filter id="reef-mid" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <radialGradient id="reef-shade" cx="0.5" cy="0.42" r="0.85">
          <stop offset="0.55" stopColor="#783c07" stopOpacity="0" />
          <stop offset="1" stopColor="#783c07" stopOpacity="0.32" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#reef-base)" />
      <g filter="url(#reef-soft)" opacity="0.8" stroke="#c97a1e" strokeWidth="150" strokeLinecap="round" fill="none">
        {back.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g filter="url(#reef-mid)" opacity="0.9" fill="none" strokeLinecap="round">
        {mid.map((d, i) => (
          <path key={d} d={d} stroke={i % 2 ? "#e8a83e" : "#f2c14e"} strokeWidth={i % 2 ? 84 : 96} />
        ))}
      </g>
      <rect width="1600" height="1000" fill="url(#reef-glow)" />
      <g opacity="0.95" fill="none" stroke="#faf3df" strokeLinecap="round">
        {front.map((d) => (
          <path key={d} d={d} strokeWidth="44" />
        ))}
      </g>
      <g fill="#fff8e6">
        {polyps.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>
      <rect width="1600" height="1000" fill="url(#reef-shade)" />
    </svg>
  );
}

/*
 * Original studio artwork for the hero canvas: six collaborator marks
 * anchored to the right edge, echoing the reference's image block without
 * borrowing its shape. Pure geometry, no photography. Decorative.
 */
export function Composition() {
  const colX = [16, 38, 60, 82];
  return (
    <svg viewBox="0 0 120 140" fill="none" className="hero-art-svg" aria-hidden="true">
      <rect x="0" y="0" width="118" height="140" fill="none" />
      {colX.map((x, index) => (
        <rect
          key={index}
          x={x}
          y={8 + index * 4}
          width="16"
          height="124"
          rx="2"
          fill="var(--ink)"
          fillOpacity={0.1 + index * 0.04}
        />
      ))}
      <MiniGlyph />
    </svg>
  );
}

/* Small original glyphs, one per discipline, used on the preview tiles. */
export function GlyphGrid() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 36V10h32v22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 26h32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="30" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function GlyphQuote() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 30c0-8 5-13 12-13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 30c0-8 5-13 12-13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6 38h36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function GlyphCamera() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M4 16h17M23 16l3-4h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="16" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="28" r="7" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="22" cy="26" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function GlyphWave() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M4 24h10l4-12 6 22 6-16 4 6h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlyphArrowTrend() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M4 36l12-12 8 8 20-20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 12h10v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlyphApp() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.2" />
      <path d="M6 16h36M16 6v36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="11" cy="11" r="1.6" fill="currentColor" />
      <circle cx="20" cy="11" r="1.6" fill="currentColor" />
      <circle cx="29" cy="11" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function FeaturedGlyph({ variant }: { variant: string }) {
  switch (variant) {
    case "strategy":
      return <GlyphGrid />;
    case "content":
      return <GlyphQuote />;
    case "photography":
      return <GlyphCamera />;
    case "film":
      return <GlyphWave />;
    case "marketing":
      return <GlyphArrowTrend />;
    case "web":
      return <GlyphApp />;
    default:
      return <GlyphGrid />;
  }
}
