export function SixFBoxes({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "light";
}) {
  const firstCell =
    tone === "light" ? "bg-white text-accent" : "bg-accent text-white";
  const secondCell =
    tone === "light" ? "bg-white/80 text-accent" : "bg-white text-accent";

  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 grid-cols-2 overflow-hidden rounded-[3px] ${className}`}
    >
      <span
        className={`flex items-center justify-center font-bold leading-none ${firstCell}`}
      >
        6
      </span>
      <span
        className={`flex items-center justify-center font-bold leading-none ${secondCell}`}
      >
        F
      </span>
    </span>
  );
}

export function SixFPattern({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 560 560"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <pattern
          id={id}
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <rect width="28" height="28" fill="#1636f8" />
          <text
            x="14"
            y="19"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="700"
            fill="#ffffff"
          >
            6
          </text>

          <rect x="28" width="28" height="28" fill="#ffffff" />
          <text
            x="42"
            y="19"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="700"
            fill="#1636f8"
          >
            F
          </text>

          <rect y="28" width="28" height="28" fill="#ffffff" />
          <text
            x="14"
            y="47"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="700"
            fill="#1636f8"
          >
            F
          </text>

          <rect x="28" y="28" width="28" height="28" fill="#1636f8" />
          <text
            x="42"
            y="47"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="700"
            fill="#ffffff"
          >
            6
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
