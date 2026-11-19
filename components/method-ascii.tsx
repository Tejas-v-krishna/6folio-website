"use client";

import { useEffect, useRef } from "react";

const WIDTH = 420;
const HEIGHT = 300;
const CELL = 7;

function hash(x: number, y: number) {
  let value = (x * 374761393 + y * 668265263 + 1442695040) | 0;
  value = (value ^ (value >> 13)) | 0;
  value = (value * 1274126177) | 0;
  value = (value ^ (value >> 16)) >>> 0;
  return value / 4294967295;
}

export default function MethodAscii({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const mask = document.createElement("canvas");
    mask.width = WIDTH;
    mask.height = HEIGHT;
    const maskContext = mask.getContext("2d");
    if (!maskContext) return;

    const draw = () => {
      const family = getComputedStyle(canvas).fontFamily || "sans-serif";

      context.clearRect(0, 0, WIDTH, HEIGHT);
      maskContext.clearRect(0, 0, WIDTH, HEIGHT);

      let fontSize = 270;
      maskContext.font = `700 ${fontSize}px ${family}`;
      const measured = maskContext.measureText("6F");
      const maxWidth = WIDTH * 0.88;

      if (measured.width > maxWidth) {
        fontSize = Math.floor(fontSize * (maxWidth / measured.width));
      }

      maskContext.font = `700 ${fontSize}px ${family}`;
      maskContext.fillStyle = "#ffffff";
      maskContext.textAlign = "center";
      maskContext.textBaseline = "middle";
      maskContext.fillText("6F", WIDTH / 2, HEIGHT / 2 + fontSize * 0.03);

      const maskData = maskContext.getImageData(0, 0, WIDTH, HEIGHT).data;

      context.font = `${CELL - 0.5}px "Courier New", monospace`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      for (let y = CELL / 2; y < HEIGHT; y += CELL) {
        for (let x = CELL / 2; x < WIDTH; x += CELL) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const alpha = maskData[(py * WIDTH + px) * 4 + 3];

          if (alpha < 80) continue;

          const noise = hash(px, py);
          if (noise < 0.08) continue;

          context.fillStyle = `rgba(193, 218, 255, ${0.42 + noise * 0.5})`;
          context.fillText(noise > 0.5 ? "6" : "F", x, y);
        }
      }
    };

    draw();

    let cancelled = false;
    document.fonts?.ready
      .then(() => {
        if (!cancelled) draw();
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      aria-hidden="true"
      className={className}
    />
  );
}
