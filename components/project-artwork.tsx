type Variant = "serein" | "goodkind" | "northstar" | "mira" | "field";

type Palette = {
  bg: string;
  ink: string;
  accent: string;
  soft: string;
  muted: string;
};

const palettes: Record<Variant, Palette> = {
  serein: {
    bg: "#ff5a1f",
    ink: "#0a0a0a",
    accent: "#f2f0e9",
    soft: "#ff8a5c",
    muted: "#7a2a10",
  },
  goodkind: {
    bg: "#b9e6c9",
    ink: "#0a0a0a",
    accent: "#ff5a1f",
    soft: "#8fd4a8",
    muted: "#2c5a3c",
  },
  northstar: {
    bg: "#0a0a0a",
    ink: "#f2f0e9",
    accent: "#1a2bff",
    soft: "#1c1c1c",
    muted: "#8a8a82",
  },
  mira: {
    bg: "#cfe0d4",
    ink: "#171a18",
    accent: "#b06a8a",
    soft: "#a9c7b2",
    muted: "#4f6a58",
  },
  field: {
    bg: "#f0c9a8",
    ink: "#1c1712",
    accent: "#ff5a1f",
    soft: "#d9a97f",
    muted: "#6b4a33",
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
  const label = ariaLabel ?? `Abstract artwork for ${title ?? "project"}`;

  return (
    <div className={`artwork ${className}`} role="img" aria-label={label}>
      <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="1200" height="900" fill={p.bg} />

        {variant === "serein" && (
          <Serein p={p} scene={scene} title={title} />
        )}
        {variant === "goodkind" && (
          <Goodkind p={p} scene={scene} title={title} />
        )}
        {variant === "northstar" && (
          <Northstar p={p} scene={scene} title={title} />
        )}
        {variant === "mira" && <Mira p={p} scene={scene} title={title} />}
        {variant === "field" && <Field p={p} scene={scene} title={title} />}
      </svg>
    </div>
  );
}

function Mira({ p, scene, title }: { p: Palette; scene: number; title?: string }) {
  if (scene === 1) {
    return (
      <>
        <rect x="90" y="90" width="1020" height="720" fill="none" stroke={p.ink} strokeWidth="2" />
        <rect x="300" y="280" width="170" height="330" rx="24" fill={p.accent} />
        <rect x="360" y="240" width="50" height="50" fill={p.ink} />
        <rect x="560" y="360" width="220" height="250" rx="110" fill={p.soft} stroke={p.ink} strokeWidth="2" />
        <circle cx="840" cy="300" r="90" fill={p.ink} />
      </>
    );
  }

  if (scene === 2) {
    return (
      <>
        <text x="80" y="300" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.ink}>
          fewer
        </text>
        <text x="80" y="440" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.accent}>
          better
        </text>
        <line x1="80" y1="520" x2="520" y2="520" stroke={p.ink} strokeWidth="2" />
        <circle cx="900" cy="300" r="120" fill={p.soft} />
      </>
    );
  }

  if (scene === 3) {
    return (
      <>
        <rect x="120" y="120" width="960" height="660" fill={p.ink} />
        <rect x="180" y="180" width="840" height="540" fill={p.bg} />
        <circle cx="600" cy="450" r="160" fill={p.soft} />
        <rect x="540" y="330" width="120" height="240" rx="20" fill={p.accent} />
        <line x1="180" y1="450" x2="1020" y2="450" stroke={p.ink} strokeWidth="1" opacity="0.4" />
      </>
    );
  }

  return (
    <>
      <g stroke={p.ink} strokeWidth="1" opacity="0.3">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={120 + i * 110} x2="1200" y2={120 + i * 110} />
        ))}
      </g>
      <rect x="200" y="430" width="180" height="330" rx="26" fill={p.accent} />
      <rect x="260" y="390" width="60" height="50" fill={p.ink} />
      <rect x="470" y="500" width="220" height="260" rx="110" fill={p.soft} stroke={p.ink} strokeWidth="2" />
      <circle cx="870" cy="320" r="120" fill={p.ink} />
      <circle cx="870" cy="320" r="52" fill={p.bg} />
      <text x="80" y="840" fontFamily="var(--font-sans)" fontSize="78" fontWeight="700" letterSpacing="-3" fill={p.ink}>
        {title ?? "Mira Skincare"}
      </text>
    </>
  );
}

function Field({ p, scene, title }: { p: Palette; scene: number; title?: string }) {
  if (scene === 1) {
    return (
      <>
        <path d="M0 700 L280 420 L480 620 L760 300 L1200 700" stroke={p.ink} strokeWidth="3" fill="none" />
        <circle cx="900" cy="240" r="90" fill={p.accent} />
        <path d="M0 760 L1200 760" stroke={p.ink} strokeWidth="2" />
        <path d="M80 700 Q 400 620, 720 700 T 1120 700" stroke={p.muted} strokeWidth="1" fill="none" />
      </>
    );
  }

  if (scene === 2) {
    return (
      <>
        <text x="80" y="300" fontFamily="var(--font-sans)" fontSize="140" fontWeight="700" letterSpacing="-7" fill={p.ink}>
          built for
        </text>
        <text x="80" y="440" fontFamily="var(--font-sans)" fontSize="140" fontWeight="700" letterSpacing="-7" fill={p.accent}>
          the long
        </text>
        <text x="80" y="580" fontFamily="var(--font-sans)" fontSize="140" fontWeight="700" letterSpacing="-7" fill={p.ink}>
          walk
        </text>
      </>
    );
  }

  if (scene === 3) {
    return (
      <>
        <rect x="120" y="120" width="960" height="660" fill={p.ink} />
        <rect x="180" y="180" width="840" height="540" fill={p.bg} />
        <path d="M180 620 L460 360 L700 540 L980 240 L1020 620 Z" fill={p.soft} stroke={p.ink} strokeWidth="2" />
        <circle cx="840" cy="280" r="60" fill={p.accent} />
      </>
    );
  }

  return (
    <>
      <path d="M0 760 L260 430 L470 650 L720 340 L1200 760" stroke={p.ink} strokeWidth="3" fill="none" />
      <circle cx="900" cy="280" r="110" fill={p.accent} />
      <path d="M0 820 L1200 820" stroke={p.ink} strokeWidth="2" />
      <text x="80" y="840" fontFamily="var(--font-sans)" fontSize="78" fontWeight="700" letterSpacing="-3" fill={p.ink}>
        {title ?? "Field and Forge"}
      </text>
    </>
  );
}

function Serein({ p, scene, title }: { p: Palette; scene: number; title?: string }) {
  if (scene === 1) {
    return (
      <>
        <rect x="90" y="90" width="1020" height="720" fill="none" stroke={p.ink} strokeWidth="2" />
        <path
          d="M260 760 V430 A120 120 0 0 1 500 430 V760"
          fill="none"
          stroke={p.ink}
          strokeWidth="3"
        />
        <path
          d="M540 760 V360 A130 130 0 0 1 800 360 V760"
          fill={p.accent}
          stroke={p.ink}
          strokeWidth="3"
        />
        <circle cx="860" cy="270" r="76" fill={p.ink} />
      </>
    );
  }

  if (scene === 2) {
    return (
      <>
        <g stroke={p.ink} strokeWidth="1" opacity="0.45">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`v${i}`} x1={120 + i * 192} y1="0" x2={120 + i * 192} y2="900" />
          ))}
        </g>
        <text x="80" y="280" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.accent}>
          useful
        </text>
        <text x="80" y="420" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.ink}>
          objects
        </text>
        <line x1="80" y1="490" x2="520" y2="490" stroke={p.ink} strokeWidth="2" />
      </>
    );
  }

  if (scene === 3) {
    return (
      <>
        <rect x="120" y="120" width="960" height="660" fill={p.ink} />
        <rect x="180" y="180" width="840" height="540" fill={p.bg} />
        <circle cx="600" cy="450" r="170" fill={p.ink} />
        <circle cx="600" cy="450" r="84" fill={p.accent} />
        <line x1="180" y1="450" x2="1020" y2="450" stroke={p.ink} strokeWidth="1" opacity="0.5" />
      </>
    );
  }

  return (
    <>
      <g stroke={p.ink} strokeWidth="1" opacity="0.32">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`g${i}`} x1="0" y1={100 + i * 100} x2="1200" y2={100 + i * 100} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={100 + i * 110} y1="0" x2={100 + i * 110} y2="900" />
        ))}
      </g>
      <path
        d="M250 780 V400 A170 170 0 0 1 590 400 V780"
        fill={p.accent}
        stroke={p.ink}
        strokeWidth="3"
      />
      <path
        d="M640 780 V470 A115 115 0 0 1 870 470 V780"
        fill="none"
        stroke={p.ink}
        strokeWidth="3"
      />
      <circle cx="920" cy="240" r="98" fill={p.ink} />
      <circle cx="920" cy="240" r="42" fill={p.bg} />
      <text x="80" y="840" fontFamily="var(--font-sans)" fontSize="78" fontWeight="700" letterSpacing="-3" fill={p.ink}>
        {title ?? "Serein Objects"}
      </text>
    </>
  );
}

function Goodkind({ p, scene, title }: { p: Palette; scene: number; title?: string }) {
  if (scene === 1) {
    return (
      <>
        <circle cx="600" cy="430" r="260" fill={p.ink} />
        <circle cx="600" cy="430" r="190" fill={p.bg} />
        <circle cx="600" cy="430" r="140" fill={p.accent} />
        <path d="M440 240 Q 600 170, 760 240" stroke={p.ink} strokeWidth="3" fill="none" />
        <path d="M500 200 Q 540 140, 600 165 Q 660 140, 700 200" stroke={p.ink} strokeWidth="2" fill="none" />
        <text x="80" y="830" fontFamily="var(--font-sans)" fontSize="86" fontWeight="700" letterSpacing="-4" fill={p.ink}>
          Goodkind
        </text>
      </>
    );
  }

  if (scene === 2) {
    return (
      <>
        <g fill={p.accent}>
          <rect x="110" y="120" width="300" height="420" />
          <rect x="450" y="210" width="300" height="420" />
          <rect x="790" y="120" width="300" height="420" />
        </g>
        <g fill={p.ink}>
          <circle cx="260" cy="660" r="18" />
          <circle cx="600" cy="740" r="18" />
          <circle cx="940" cy="660" r="18" />
        </g>
        <path d="M260 660 L 600 740 L 940 660" stroke={p.ink} strokeWidth="2" fill="none" />
      </>
    );
  }

  if (scene === 3) {
    return (
      <>
        <rect x="80" y="80" width="1040" height="740" fill="none" stroke={p.ink} strokeWidth="2" />
        <text x="120" y="280" fontFamily="var(--font-sans)" fontSize="180" fontWeight="700" letterSpacing="-10" fill={p.ink}>
          six
        </text>
        <text x="120" y="450" fontFamily="var(--font-sans)" fontSize="180" fontWeight="700" letterSpacing="-10" fill={p.accent}>
          rituals
        </text>
        <circle cx="960" cy="220" r="70" fill={p.ink} />
        <line x1="120" y1="540" x2="1080" y2="540" stroke={p.ink} strokeWidth="1" />
      </>
    );
  }

  return (
    <>
      <rect x="70" y="70" width="1060" height="760" fill="none" stroke={p.ink} strokeWidth="2" />
      <rect x="690" y="130" width="330" height="500" fill={p.accent} />
      <rect x="720" y="160" width="270" height="440" fill={p.bg} />
      <circle cx="855" cy="300" r="60" fill={p.ink} />
      <path d="M790 380 Q 855 330, 920 380" stroke={p.ink} strokeWidth="2" fill="none" />
      <rect x="760" y="440" width="190" height="14" fill={p.ink} />
      <rect x="760" y="470" width="140" height="14" fill={p.ink} opacity="0.5" />
      <text x="110" y="310" fontFamily="var(--font-sans)" fontSize="92" fontWeight="700" letterSpacing="-5" fill={p.ink}>
        the useful
      </text>
      <text x="110" y="400" fontFamily="var(--font-sans)" fontSize="92" fontWeight="700" letterSpacing="-5" fill={p.ink}>
        pause
      </text>
      <text x="110" y="820" fontFamily="var(--font-sans)" fontSize="78" fontWeight="700" letterSpacing="-3" fill={p.ink}>
        {title ?? "Goodkind Coffee"}
      </text>
    </>
  );
}

function Northstar({ p, scene, title }: { p: Palette; scene: number; title?: string }) {
  if (scene === 1) {
    return (
      <>
        <g stroke={p.soft} strokeWidth="1" opacity="0.6">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={100 + i * 100} y1="0" x2={100 + i * 100} y2="900" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={100 + i * 100} x2="1200" y2={100 + i * 100} />
          ))}
        </g>
        <path d="M200 700 L 600 200 L 1000 700" stroke={p.accent} strokeWidth="3" fill="none" />
        <circle cx="600" cy="200" r="12" fill={p.accent} />
        <rect x="560" y="420" width="80" height="80" fill="none" stroke={p.ink} strokeWidth="2" />
      </>
    );
  }

  if (scene === 2) {
    return (
      <>
        <rect x="80" y="120" width="1040" height="660" fill={p.soft} />
        <g stroke={p.ink} strokeWidth="1.5" fill="none">
          <rect x="160" y="200" width="360" height="220" />
          <rect x="680" y="200" width="360" height="220" />
          <rect x="160" y="480" width="880" height="220" />
        </g>
        <line x1="340" y1="310" x2="860" y2="310" stroke={p.accent} strokeWidth="3" />
        <circle cx="340" cy="310" r="8" fill={p.accent} />
        <circle cx="860" cy="310" r="8" fill={p.accent} />
      </>
    );
  }

  if (scene === 3) {
    return (
      <>
        <text x="80" y="270" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.ink}>
          one
        </text>
        <text x="80" y="420" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.accent}>
          workflow
        </text>
        <text x="80" y="570" fontFamily="var(--font-sans)" fontSize="150" fontWeight="700" letterSpacing="-8" fill={p.ink}>
          at a time
        </text>
        <path d="M80 680 H1120" stroke={p.accent} strokeWidth="3" />
        <path d="M1070 640 L1120 680 L1070 720" stroke={p.accent} strokeWidth="3" fill="none" />
      </>
    );
  }

  return (
    <>
      <g stroke={p.soft} strokeWidth="1" opacity="0.75">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={120 + i * 110} y1="0" x2={120 + i * 110} y2="900" />
        ))}
      </g>
      <path
        d="M160 760 L 420 260 L 680 620 L 940 180 L 1080 520"
        fill="none"
        stroke={p.accent}
        strokeWidth="3"
      />
      <g fill={p.accent}>
        <circle cx="420" cy="260" r="10" />
        <circle cx="680" cy="620" r="10" />
        <circle cx="940" cy="180" r="10" />
      </g>
      <text x="80" y="840" fontFamily="var(--font-sans)" fontSize="78" fontWeight="700" letterSpacing="-3" fill={p.ink}>
        {title ?? "Northstar Work"}
      </text>
    </>
  );
}
