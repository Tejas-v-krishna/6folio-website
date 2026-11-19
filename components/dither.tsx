type DitherVariant =
  | "fade-right"
  | "fade-left"
  | "field"
  | "wave"
  | "scatter"
  | "glyph";

function hash(x: number, y: number, seed = 7) {
  let h = (x * 374761393 + y * 668265263 + seed * 974634) | 0;
  h = (h ^ (h >> 13)) | 0;
  h = (h * 1274126177) | 0;
  h = (h ^ (h >> 16)) >>> 0;
  return h / 4294967295;
}

function visible(
  variant: DitherVariant,
  x: number,
  y: number,
  cols: number,
  rows: number,
): boolean {
  const nx = cols <= 1 ? 0 : x / (cols - 1);
  const ny = rows <= 1 ? 0 : y / (rows - 1);
  const noise = hash(x, y);

  switch (variant) {
    case "fade-right": {
      const edge = 1 - nx;
      const threshold = edge * edge * 1.15 + 0.04 * Math.sin(y * 0.9);
      return noise < threshold;
    }
    case "fade-left": {
      const threshold = nx * nx * 1.15 + 0.04 * Math.sin(y * 0.9);
      return noise < threshold;
    }
    case "wave": {
      const centre = 0.52 + 0.2 * Math.sin(nx * Math.PI * 2.1) - nx * 0.18;
      const distance = Math.abs(ny - centre);
      if (distance < 0.035) return true;
      if (distance < 0.16) return noise < 0.32 * (1 - distance / 0.16);
      return false;
    }
    case "scatter": {
      const band = Math.exp(-Math.pow((ny - 0.3) * 5, 2));
      return noise < 0.05 + band * 0.28;
    }
    case "glyph": {
      const stem = (cx: number) => {
        const dx = Math.abs(nx - cx);
        const inHead = ny > 0.18 && ny < 0.52 && dx < 0.045;
        const inStem =
          ny >= 0.42 && ny < 0.86 && dx > 0.028 && dx < 0.075 && nx < cx;
        const inFoot = ny >= 0.72 && ny < 0.88 && Math.abs(nx - cx + 0.01) < 0.075;
        return inHead || inStem || inFoot;
      };
      if (stem(0.22) || stem(0.5) || stem(0.78)) return noise > 0.12;
      return noise < 0.05;
    }
    case "field":
    default: {
      const edgeFade =
        Math.min(1, Math.min(nx, 1 - nx) * 6) *
        Math.min(1, Math.min(ny, 1 - ny) * 6);
      return noise < 0.28 + edgeFade * 0.62;
    }
  }
}

export default function Dither({
  variant = "field",
  cols = 32,
  rows = 18,
  className = "",
  dotRadius = 0.16,
  label,
}: {
  variant?: DitherVariant;
  cols?: number;
  rows?: number;
  className?: string;
  dotRadius?: number;
  label?: string;
}) {
  const dots: { x: number; y: number; key: string }[] = [];

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      if (visible(variant, x, y, cols, rows)) {
        dots.push({ x, y, key: `${x}-${y}` });
      }
    }
  }

  return (
    <svg
      viewBox={`-0.5 -0.5 ${cols} ${rows}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
      className={`dither-field ${className}`}
    >
      {dots.map((dot) => (
        <circle
          key={dot.key}
          cx={dot.x}
          cy={dot.y}
          r={dotRadius}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
