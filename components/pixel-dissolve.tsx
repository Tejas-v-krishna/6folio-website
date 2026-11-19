"use client";

import { useEffect, useRef } from "react";

function hash(x: number, y: number, seed: number) {
  let h = (x * 374761393 + y * 668265263 + seed * 974634) | 0;
  h = (h ^ (h >> 13)) | 0;
  h = (h * 1274126177) | 0;
  h = (h ^ (h >> 16)) >>> 0;
  return h / 4294967295;
}

export default function PixelDissolve({
  seed = 7,
  cols = 56,
  rows = 36,
  speed = 1,
  className = "",
}: {
  seed?: number;
  cols?: number;
  rows?: number;
  speed?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let mouseX: number | null = null;
    const parent = canvas.parentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };

    const draw = (t: number) => {
      const { width: w, height: h } = canvas;
      if (w === 0 || h === 0) return;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#1636f8";

      const cellW = w / cols;
      const cellH = h / rows;
      const size = Math.min(cellW, cellH) * 0.72;

      for (let y = 0; y < rows; y += 1) {
        const ny = rows <= 1 ? 0 : y / (rows - 1);
        for (let x = 0; x < cols; x += 1) {
          const nx = cols <= 1 ? 0 : x / (cols - 1);
          const n = hash(x, y, seed);

          const wave =
            0.09 * Math.sin(nx * 6 + t * 1.3 * speed + seed) +
            0.05 * Math.sin(ny * 8 - t * 0.8 * speed);

          let lift = 0;
          if (mouseX !== null) {
            const dx = nx - mouseX;
            lift = 0.16 * Math.exp(-(dx * dx) / 0.015);
          }

          const density = ny * 1.25 - 0.18 + wave + lift;
          if (n > density) continue;

          const flicker = hash(x, y, seed + Math.floor(t * 2) + 1);
          if (flicker < 0.05) continue;

          const alpha = 0.55 + 0.45 * n;
          ctx.globalAlpha = alpha;
          const px = x * cellW + (cellW - size) / 2;
          const py = y * cellH + (cellH - size) / 2;
          ctx.fillRect(px, py, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) / Math.max(1, rect.width);
    };
    const onMouseLeave = () => {
      mouseX = null;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        running = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);
    parent?.addEventListener("mousemove", onMouseMove);
    parent?.addEventListener("mouseleave", onMouseLeave);

    if (reduced) {
      draw(1.7);
      return () => {
        resizeObserver.disconnect();
        io.disconnect();
        parent?.removeEventListener("mousemove", onMouseMove);
        parent?.removeEventListener("mouseleave", onMouseLeave);
      };
    }

    const start = performance.now();
    const loop = (now: number) => {
      if (running) draw((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      io.disconnect();
      parent?.removeEventListener("mousemove", onMouseMove);
      parent?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [cols, rows, seed, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
