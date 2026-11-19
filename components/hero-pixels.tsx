function hash(x: number, y: number, seed = 3) {
  let h = (x * 374761393 + y * 668265263 + seed * 974634) | 0;
  h = (h ^ (h >> 13)) | 0;
  h = (h * 1274126177) | 0;
  h = (h ^ (h >> 16)) >>> 0;
  return h / 4294967295;
}

export function PixelField({
  variant,
  className = "",
}: {
  variant: "noir" | "paper";
  className?: string;
}) {
  const cols = 56;
  const rows = 36;
  const cell = 12;
  const width = cols * cell;
  const height = rows * cell;
  const path: string[] = [];

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const nx = x / (cols - 1);
      const ny = y / (rows - 1);
      const n = hash(x, y);

      let threshold = 0;

      if (variant === "noir") {
        const band = Math.exp(-Math.pow((ny - 0.55) * 3.2, 2));
        const mass = Math.exp(
          -Math.pow((nx - 0.48) * 3.1, 2) - Math.pow((ny - 0.52) * 2.4, 2),
        );
        const ribs = 0.5 + 0.5 * Math.sin(nx * 19 + ny * 7);
        threshold = 0.08 + band * 0.55 + mass * 0.45 + ribs * 0.12;
      } else {
        const body = Math.exp(
          -Math.pow((nx - 0.52) * 3.3, 2) - Math.pow((ny - 0.5) * 2.8, 2),
        );
        const diagonal = Math.abs(nx - (0.15 + ny * 0.7)) < 0.24 ? 0.35 : 0;
        const gaps = Math.sin(nx * 22 + ny * 18) > 0.75 ? -0.3 : 0;
        threshold = 0.05 + body * 0.75 + diagonal + gaps;
      }

      if (n < Math.max(0, threshold)) {
        const px = x * cell + 1;
        const py = y * cell + 1;
        const size = cell - 2;
        path.push(`M${px} ${py}h${size}v${size}h-${size}z`);
      }
    }
  }

  const dark = variant === "noir";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    >
      <rect width={width} height={height} fill={dark ? "#0a0a0a" : "#e8e6df"} />
      <path d={path.join("")} fill={dark ? "#e8e6df" : "#0a0a0a"} opacity="0.92" />
    </svg>
  );
}

export function Waveform({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 180 }, (_, index) => {
    const n = hash(index, 9, 11);
    const height = 4 + n * 26;
    return { x: index * 4.4 + 1, height };
  });

  return (
    <svg
      viewBox="0 0 800 34"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`h-7 w-full ${className}`}
    >
      {bars.map((bar, index) => (
        <rect
          key={index}
          x={bar.x}
          y={(34 - bar.height) / 2}
          width="2"
          height={bar.height}
          fill="currentColor"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}
