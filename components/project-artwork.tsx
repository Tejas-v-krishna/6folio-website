type Variant = "serein" | "goodkind" | "northstar";

type Palette = {
  bg: string;
  ink: string;
  accent: string;
  muted: string;
  soft: string;
};

const palettes: Record<Variant, Palette> = {
  serein: {
    bg: "#e7e0d3",
    ink: "#1a1814",
    accent: "#8a9484",
    muted: "#5e584f",
    soft: "#c9bfae",
  },
  goodkind: {
    bg: "#e9dcc9",
    ink: "#241a12",
    accent: "#b04a2a",
    muted: "#7a6a58",
    soft: "#cbb89a",
  },
  northstar: {
    bg: "#10141f",
    ink: "#eef0f5",
    accent: "#3346ff",
    muted: "#9aa0b2",
    soft: "#1d2333",
  },
};

export default function ProjectArtwork({
  variant,
  scene = 0,
  title,
  ariaLabel,
  className = "",
}: {
  variant: Variant;
  scene?: 0 | 1 | 2 | 3;
  title?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const p = palettes[variant];
  const label = ariaLabel ?? `Abstract cover artwork for ${title ?? "project"}`;

  if (scene === 0) {
    return (
      <div className={`artwork ${className}`} role="img" aria-label={label}>
        <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="1200" height="900" fill={p.bg} />
          {variant === "serein" && (
            <>
              <path d="M0 620 Q 300 560, 600 620 T 1200 620" stroke={p.soft} strokeWidth="1" fill="none" />
              <circle cx="920" cy="300" r="170" fill={p.soft} />
              <circle cx="920" cy="300" r="90" fill={p.accent} />
              <path d="M220 760 L220 260 Q 220 200, 280 200 L420 200 Q 480 200, 480 260 L480 760" stroke={p.ink} strokeWidth="1.5" fill="none" />
              <line x1="60" y1="760" x2="1140" y2="760" stroke={p.muted} strokeWidth="1" />
              <text x="60" y="120" fontFamily="var(--font-display)" fontSize="40" fill={p.muted} letterSpacing="0.18em">
                SEREIN / 01
              </text>
            </>
          )}
          {variant === "goodkind" && (
            <>
              <circle cx="600" cy="450" r="260" fill={p.soft} />
              <circle cx="600" cy="450" r="180" fill={p.accent} opacity="0.9" />
              <path d="M470 260 Q 600 200, 730 260" stroke={p.ink} strokeWidth="1.5" fill="none" />
              <path d="M520 230 Q 560 180, 600 200 Q 640 180, 680 230" stroke={p.ink} strokeWidth="1.2" fill="none" />
              <rect x="90" y="760" width="1020" height="1" fill={p.ink} opacity="0.3" />
              <text x="90" y="120" fontFamily="var(--font-display)" fontSize="40" fill={p.ink} letterSpacing="0.18em">
                GOODKIND / 02
              </text>
              <text x="90" y="820" fontFamily="var(--font-display)" fontSize="26" fill={p.muted} fontStyle="italic">
                the useful pause
              </text>
            </>
          )}
          {variant === "northstar" && (
            <>
              <rect width="1200" height="900" fill={p.bg} />
              <g stroke={p.soft} strokeWidth="1" opacity="0.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`v${i}`} x1={100 + i * 100} y1="0" x2={100 + i * 100} y2="900" />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={100 + i * 100} x2="1200" y2={100 + i * 100} />
                ))}
              </g>
              <path d="M200 700 L 600 200 L 1000 700" stroke={p.accent} strokeWidth="2" fill="none" />
              <circle cx="600" cy="200" r="10" fill={p.accent} />
              <rect x="560" y="420" width="80" height="80" fill="none" stroke={p.ink} strokeWidth="1.5" />
              <text x="90" y="120" fontFamily="var(--font-display)" fontSize="40" fill={p.ink} letterSpacing="0.18em">
                NORTHSTAR / 03
              </text>
            </>
          )}
          {title && (
            <text
              x="60"
              y="840"
              fontFamily="var(--font-display)"
              fontSize="78"
              fill={p.ink}
              letterSpacing="-0.02em"
            >
              {title}
            </text>
          )}
        </svg>
      </div>
    );
  }

  if (scene === 1) {
    return (
      <div className={`artwork ${className}`} role="img" aria-label={label}>
        <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="1200" height="900" fill={p.bg} />
          {variant === "serein" && (
            <>
              <rect x="120" y="120" width="960" height="660" fill={p.soft} />
              <circle cx="600" cy="450" r="200" fill={p.bg} />
              <path d="M420 450 Q 600 300, 780 450" stroke={p.ink} strokeWidth="1.5" fill="none" />
              <path d="M420 450 Q 600 600, 780 450" stroke={p.ink} strokeWidth="1.5" fill="none" />
              <line x1="600" y1="250" x2="600" y2="650" stroke={p.accent} strokeWidth="1" />
            </>
          )}
          {variant === "goodkind" && (
            <>
              <rect x="0" y="0" width="1200" height="900" fill={p.bg} />
              <g fill={p.soft}>
                <rect x="120" y="120" width="280" height="360" />
                <rect x="460" y="200" width="280" height="360" />
                <rect x="800" y="120" width="280" height="360" />
              </g>
              <g fill={p.accent}>
                <circle cx="260" cy="640" r="14" />
                <circle cx="600" cy="720" r="14" />
                <circle cx="940" cy="640" r="14" />
              </g>
              <path d="M260 640 L 600 720 L 940 640" stroke={p.ink} strokeWidth="1" fill="none" />
            </>
          )}
          {variant === "northstar" && (
            <>
              <rect x="80" y="120" width="1040" height="660" fill={p.soft} />
              <g stroke={p.ink} strokeWidth="1" fill="none">
                <rect x="160" y="200" width="360" height="220" />
                <rect x="680" y="200" width="360" height="220" />
                <rect x="160" y="480" width="880" height="220" />
              </g>
              <line x1="340" y1="310" x2="860" y2="310" stroke={p.accent} strokeWidth="2" />
              <circle cx="340" cy="310" r="6" fill={p.accent} />
              <circle cx="860" cy="310" r="6" fill={p.accent} />
            </>
          )}
        </svg>
      </div>
    );
  }

  if (scene === 2) {
    return (
      <div className={`artwork ${className}`} role="img" aria-label={label}>
        <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="1200" height="900" fill={p.bg} />
          {variant === "serein" && (
            <>
              <g stroke={p.muted} strokeWidth="1" opacity="0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <line key={i} x1={200 + i * 160} y1="0" x2={200 + i * 160} y2="900" />
                ))}
              </g>
              <text x="80" y="220" fontFamily="var(--font-display)" fontSize="140" fill={p.ink} fontStyle="italic">
                objects
              </text>
              <text x="80" y="360" fontFamily="var(--font-display)" fontSize="140" fill={p.accent}>
                with a
              </text>
              <text x="80" y="500" fontFamily="var(--font-display)" fontSize="140" fill={p.ink}>
                reason
              </text>
              <line x1="80" y1="560" x2="420" y2="560" stroke={p.ink} strokeWidth="1.5" />
            </>
          )}
          {variant === "goodkind" && (
            <>
              <text x="80" y="260" fontFamily="var(--font-display)" fontSize="120" fill={p.ink}>
                six
              </text>
              <text x="80" y="380" fontFamily="var(--font-display)" fontSize="120" fill={p.accent} fontStyle="italic">
                rituals
              </text>
              <g stroke={p.ink} strokeWidth="1" opacity="0.4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={i} x1="80" y1={460 + i * 40} x2="1120" y2={460 + i * 40} />
                ))}
              </g>
              <circle cx="980" cy="200" r="90" fill={p.accent} opacity="0.85" />
            </>
          )}
          {variant === "northstar" && (
            <>
              <text x="80" y="260" fontFamily="var(--font-display)" fontSize="120" fill={p.ink}>
                one
              </text>
              <text x="80" y="380" fontFamily="var(--font-display)" fontSize="120" fill={p.accent} fontStyle="italic">
                workflow
              </text>
              <text x="80" y="500" fontFamily="var(--font-display)" fontSize="120" fill={p.ink}>
                at a time
              </text>
              <g stroke={p.accent} strokeWidth="1.5" fill="none">
                <path d="M80 620 L 1120 620" />
                <path d="M1080 580 L 1120 620 L 1080 660" />
              </g>
            </>
          )}
        </svg>
      </div>
    );
  }

  // scene 3: a detail frame
  return (
    <div className={`artwork ${className}`} role="img" aria-label={label}>
      <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="1200" height="900" fill={p.bg} />
        <rect x="80" y="80" width="1040" height="740" fill="none" stroke={p.ink} strokeWidth="1" />
        <rect x="120" y="120" width="960" height="660" fill={p.soft} />
        <line x1="600" y1="120" x2="600" y2="780" stroke={p.ink} strokeWidth="1" opacity="0.4" />
        <line x1="120" y1="450" x2="1080" y2="450" stroke={p.ink} strokeWidth="1" opacity="0.4" />
        <circle cx="600" cy="450" r="60" fill={p.accent} />
        <text x="140" y="820" fontFamily="var(--font-mono)" fontSize="22" fill={p.muted} letterSpacing="0.18em">
          DETAIL / {variant.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}

