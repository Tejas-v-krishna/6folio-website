"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { createNoise3D } from "simplex-noise";
import { ToggleMark } from "@/components/marks";

const THEME_BLUE = "#1636f8";
const CELL_SIZE = 14;
const LOAD_MS = 2200;
const EXIT_MS = 900;

const lines = ["Six perspectives.", "One clear direction."];

type DissolveTile = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  delay: number;
  duration: number;
};

function createDissolveTiles(width: number, height: number): DissolveTile[] {
  const columns = width >= 1024 ? 10 : width >= 640 ? 8 : 6;
  const size = Math.ceil(width / columns);
  const rows = Math.ceil(height / size);
  const tiles: DissolveTile[] = [];
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDistance = Math.hypot(centerX, centerY);

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const left = column * size;
      const top = row * size;
      const tileWidth = Math.min(size, width - left);
      const tileHeight = Math.min(size, height - top);

      if (tileWidth <= 0 || tileHeight <= 0) continue;

      const tileCenterX = left + tileWidth / 2;
      const tileCenterY = top + tileHeight / 2;
      const distance =
        Math.hypot(tileCenterX - centerX, tileCenterY - centerY) / maxDistance;

      tiles.push({
        id: `${row}-${column}`,
        left,
        top,
        width: tileWidth,
        height: tileHeight,
        delay: 0.02 + distance * 0.32 + Math.random() * 0.08,
        duration: 0.28 + Math.random() * 0.08,
      });
    }
  }

  return tiles;
}

function getChar(x: number, y: number) {
  const hash = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return hash - Math.floor(hash) > 0.5 ? "6" : "F";
}

export default function AsciiPreloader() {
  const [phase, setPhase] = useState<"load" | "exit" | "done">("load");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.dispatchEvent(new Event("6folio:revealed"));
      return;
    }

    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") ?? null;
    const panel = textRef.current;
    const simplex = createNoise3D();
    let raf = 0;
    let time = 0;
    let stopped = false;
    let lastDraw = 0;
    const revealStart = performance.now();

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener("resize", resize);
    resize();

    const bayer = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ];

    const draw = (timestamp: number) => {
      if (!canvas || !ctx || stopped) return;

      if (timestamp - lastDraw < 32) {
        raf = requestAnimationFrame(draw);
        return;
      }

      lastDraw = timestamp;
      time += 0.008;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Start on a clean blue field, then ease the white 6/F grid in.
      const revealProgress = Math.min(
        1,
        (performance.now() - revealStart) / 1200,
      );
      const revealEase =
        revealProgress * revealProgress * (3 - 2 * revealProgress);

      ctx.globalAlpha = 1;
      ctx.fillStyle = THEME_BLUE;
      ctx.fillRect(0, 0, width, height);

      ctx.font = "bold 11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = revealEase;

      for (let y = 0; y < height; y += CELL_SIZE) {
        for (let x = 0; x < width; x += CELL_SIZE) {
          const noiseValue = simplex(x * 0.0025, y * 0.0025, time);

          const gridX = Math.floor(x / CELL_SIZE);
          const gridY = Math.floor(y / CELL_SIZE);
          const ditherValue = bayer[gridY % 4][gridX % 4] / 16 - 0.5;
          const isBlueState = noiseValue + ditherValue * 0.6 > 0;

          ctx.fillStyle = isBlueState ? THEME_BLUE : "#ffffff";
          ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);

          ctx.fillStyle = isBlueState ? "#ffffff" : THEME_BLUE;
          ctx.fillText(
            getChar(x, y),
            x + CELL_SIZE / 2,
            y + CELL_SIZE / 2,
          );
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const textLines = textRef.current?.querySelectorAll(".stagger-element");
    if (textLines) {
      gsap.to(textLines, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      });
    }

    const exitTimer = window.setTimeout(() => {
      stopped = true;
      setPhase("exit");

      if (!canvas || !ctx) return;

      cancelAnimationFrame(raf);

      const dpr = canvas.width / Math.max(1, window.innerWidth);
      const tiles = createDissolveTiles(
        window.innerWidth,
        window.innerHeight,
      );
      const snapshot = document.createElement("canvas");
      snapshot.width = canvas.width;
      snapshot.height = canvas.height;
      snapshot.getContext("2d")?.drawImage(canvas, 0, 0);

      const started = performance.now();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const animateExit = (now: number) => {
        if (!ctx) return;

        const elapsed = (now - started) / 1000;
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;

        ctx.clearRect(0, 0, viewWidth, viewHeight);
        let visible = 0;

        for (const tile of tiles) {
          const progress = Math.min(
            1,
            Math.max(0, (elapsed - tile.delay) / tile.duration),
          );
          const opacity = 1 - progress;

          if (opacity <= 0) continue;

          visible += 1;
          ctx.globalAlpha = opacity;
          ctx.drawImage(
            snapshot,
            tile.left * dpr,
            tile.top * dpr,
            tile.width * dpr,
            tile.height * dpr,
            tile.left,
            tile.top,
            tile.width,
            tile.height,
          );
        }

        ctx.globalAlpha = 1;

        if (visible > 0) {
          raf = requestAnimationFrame(animateExit);
        }
      };

      raf = requestAnimationFrame(animateExit);

      if (panel) {
        gsap.to(panel, {
          opacity: 0,
          duration: 0.45,
          delay: 0.08,
          ease: "power2.inOut",
        });
      }
    }, LOAD_MS);

    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      window.dispatchEvent(new Event("6folio:revealed"));
    }, LOAD_MS + EXIT_MS + 60);

    return () => {
      stopped = true;
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      if (panel) gsap.killTweensOf(panel);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Loading 6FOLIO"
      className={`ascii-preloader fixed inset-0 z-[200] flex h-screen w-full items-center justify-center overflow-hidden ${
        phase === "load" ? "bg-[#1636f8]" : "bg-transparent"
      }`}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      />

      <div
        ref={textRef}
        className="relative z-10 flex aspect-square w-[min(86vw,70svh,520px)] flex-col items-center justify-center bg-[#1636f8] px-6 py-8 text-center text-white md:px-10"
      >
        <div className="stagger-element mb-8 opacity-0">
          <ToggleMark className="h-12 w-24 text-white" />
        </div>

        <div className="text-[22px] font-medium leading-[1.4] tracking-[-0.01em] md:text-[32px]">
          {lines.map((line) => (
            <div key={line} className="overflow-hidden pb-[2px]">
              <div className="stagger-element translate-y-full opacity-0">
                {line}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
