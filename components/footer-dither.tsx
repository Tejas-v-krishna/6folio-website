"use client";

import { useEffect, useRef } from "react";

const BAYER = [
  0, 8, 2, 10,
  12, 4, 14, 6,
  3, 11, 1, 9,
  15, 7, 13, 5,
];

function clamp(value: number) {
  return Math.max(0, Math.min(255, value));
}

export default function FooterDither() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    let lastDraw = 0;
    let width = 0;
    let height = 0;
    let image: ImageData | null = null;
    let visible = true;

    const draw = (time: number) => {
      if (!image) return;

      const data = image.data;
      const phase = time * 0.00035;

      for (let y = 0; y < height; y += 1) {
        const ny = y / Math.max(1, height - 1);

        for (let x = 0; x < width; x += 1) {
          const nx = x / Math.max(1, width - 1);
          const wave =
            Math.sin(nx * 5.4 + ny * 3.6 + phase) * 0.045 +
            Math.sin(nx * 2.1 - ny * 6.2 - phase * 1.7) * 0.025;
          const glow =
            Math.exp(
              -(
                Math.pow(nx - 0.52, 2) / 0.18 +
                Math.pow(ny - 0.92, 2) / 0.035
              ),
            ) * 0.14;
          const t = Math.max(
            0,
            Math.min(1, 0.04 + Math.pow(ny, 0.82) * 0.92 + wave + glow),
          );

          let red: number;
          let green: number;
          let blue: number;

          if (t < 0.55) {
            const k = t / 0.55;
            red = 5 + (18 - 5) * k;
            green = 18 + (48 - 18) * k;
            blue = 88 + (200 - 88) * k;
          } else {
            const k = (t - 0.55) / 0.45;
            red = 18 + (47 - 18) * k;
            green = 48 + (107 - 48) * k;
            blue = 200 + (255 - 200) * k;
          }

          const bayer = (BAYER[(y & 3) * 4 + (x & 3)] / 16 - 0.5) * 17;
          const index = (y * width + x) * 4;

          data[index] = clamp(red + bayer * 0.55);
          data[index + 1] = clamp(green + bayer * 0.8);
          data[index + 2] = clamp(blue + bayer * 1.15);
          data[index + 3] = 255;
        }
      }

      context.putImageData(image, 0, 0);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.max(90, Math.round(rect.width / 3));
      const nextHeight = Math.max(120, Math.round(rect.height / 3));

      if (nextWidth === width && nextHeight === height) return;

      width = nextWidth;
      height = nextHeight;
      canvas.width = width;
      canvas.height = height;
      image = context.createImageData(width, height);
      draw(reducedMotion ? 0 : performance.now());
    };

    const loop = (time: number) => {
      if (visible && time - lastDraw > 90) {
        draw(time);
        lastDraw = time;
      }
      frame = requestAnimationFrame(loop);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { rootMargin: "120px" },
    );
    visibilityObserver.observe(canvas);

    if (!reducedMotion) {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full [image-rendering:pixelated]"
    />
  );
}
