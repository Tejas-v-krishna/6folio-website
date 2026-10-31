export default function ConvergenceGraphic() {
  return (
    <svg
      viewBox="0 0 480 520"
      className="h-full w-full"
      aria-hidden="true"
      role="presentation"
    >
      <g stroke="var(--color-rule)" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`guide-${i}`} x1="20" y1={40 + i * 80} x2="460" y2={40 + i * 80} opacity="0.4" />
        ))}
      </g>
      <g className="converge-path" stroke="var(--color-ink)" strokeWidth="1.5" fill="none">
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={`line-${i}`}
            d={`M 20 ${40 + i * 80} C 180 ${40 + i * 80}, 300 260, 440 260`}
          />
        ))}
      </g>
      <g stroke="var(--color-accent)" strokeWidth="2" fill="none">
        <path d="M 440 260 L 470 260" />
        <path d="M 460 250 L 472 260 L 460 270" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="11" fill="var(--color-muted)" letterSpacing="0.14em">
        {["UNDERSTAND", "POSITION", "CREATE", "DISTRIBUTE", "CONVERT", "OPTIMISE"].map(
          (word, i) => (
            <text key={word} x="20" y={30 + i * 80}>
              0{i + 1} / {word}
            </text>
          )
        )}
      </g>
      <text
        x="440"
        y="246"
        fontFamily="var(--font-display)"
        fontSize="22"
        fill="var(--color-ink)"
        textAnchor="end"
        fontStyle="italic"
      >
        one direction
      </text>
    </svg>
  );
}
