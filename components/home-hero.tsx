"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "@/components/marks";
import styles from "./home-hero.module.css";

const PAPER = "#f0ead9";
const INK = "#2834b8";
const LOOP_SECONDS = 6;

const PIVOT = { x: 0.65, y: 0.175 };
const LENS = { x: 0.797, y: 0.475 };
const CHAIN_MASK_PATH = [
  { x: 0.67, y: 0.205 },
  { x: 0.69, y: 0.245 },
  { x: 0.715, y: 0.3 },
  { x: 0.74, y: 0.355 },
  { x: 0.765, y: 0.41 },
  { x: 0.79, y: 0.465 },
];
const LENS_RING_RADIUS = 0.075;
const LENS_MASK = { x: 0.797, y: 0.49, rx: 0.094, ry: 0.11 };
const CHAIN_MASK_RADIUS = 0.025;
const SWING = 0.075;
const EYES = [
  { x: 0.419, y: 0.44, rx: 0.032, ry: 0.024 },
  { x: 0.586, y: 0.435, rx: 0.032, ry: 0.024 },
];

type Dot = {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  phase: number;
  eyeWeight: number;
};

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function distanceToSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;

  if (lengthSquared === 0) return Math.hypot(px - ax, py - ay);

  const t = Math.max(
    0,
    Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared),
  );
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

export default function HomeHero() {
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const baseCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    const image = imageRef.current;
    const baseCanvas = baseCanvasRef.current;
    const canvas = canvasRef.current;
    const baseContext = baseCanvas?.getContext("2d") ?? null;
    const context = canvas?.getContext("2d") ?? null;

    if (!portrait || !image || !baseCanvas || !baseContext || !canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Keep the engraving static while the preloader is up. It starts once the
    // page is revealed, which avoids running a second full-screen animation
    // during loading.
    const preloader = document.querySelector(".ascii-preloader");
    const preloaderSkipped = document.documentElement.classList.contains(
      "preloaded",
    );
    const preloaderActive = Boolean(preloader) && !preloaderSkipped;
    let reduced = motionQuery.matches;
    let revealed = !preloaderActive || reduced;
    let revealFallback = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let baseDots: Dot[] = [];
    let eyeDots: Dot[] = [];
    let phase = 0;
    let pivotX = 0;
    let pivotY = 0;
    let lensOrbit = 0;
    let lensRing = 0;
    let baseChainAngle = 0;
    let baseLensX = 0;
    let baseLensY = 0;
    let gridCell = 0;
    let gridCols = 0;
    let gridRows = 0;
    let densityMap: Float32Array | null = null;
    let touchedCells: number[] = [];
    let frame = 0;
    let lastPaint = 0;

    const setDensity = (gx: number, gy: number, value: number) => {
      if (!densityMap) return;
      if (gx < 0 || gy < 0 || gx >= gridCols || gy >= gridRows) return;

      const index = gy * gridCols + gx;
      const current = densityMap[index];

      if (value <= current) return;
      if (current === 0) touchedCells.push(index);
      densityMap[index] = value;
    };

    const buildPendantDensity = (
      chainAngle: number,
      lensCenterX: number,
      lensCenterY: number,
      wave: number,
    ) => {
      const directionX = Math.sin(chainAngle);
      const directionY = Math.cos(chainAngle);
      const chainEndX = lensCenterX - directionX * lensRing;
      const chainEndY = lensCenterY - directionY * lensRing;
      const chordX = chainEndX - pivotX;
      const chordY = chainEndY - pivotY;
      const chordLength = Math.hypot(chordX, chordY);

      if (chordLength < 1) return;

      const normalX = -chordY / chordLength;
      const normalY = chordX / chordLength;
      const angularVelocity = reduced
        ? 0
        : SWING *
          Math.cos(wave - 0.22) *
          ((Math.PI * 2) / LOOP_SECONDS);
      const bow = Math.max(
        -10,
        Math.min(10, -angularVelocity * lensOrbit * 0.32),
      );
      const controlX = (pivotX + chainEndX) / 2 + normalX * bow;
      const controlY = (pivotY + chainEndY) / 2 + normalY * bow;

      const chainPoint = (t: number) => {
        const inverse = 1 - t;
        return {
          x:
            inverse * inverse * pivotX +
            2 * inverse * t * controlX +
            t * t * chainEndX,
          y:
            inverse * inverse * pivotY +
            2 * inverse * t * controlY +
            t * t * chainEndY,
        };
      };

      const linkSpacing = Math.max(gridCell * 3.5, lensRing * 0.16);
      const linkCount = Math.max(1, Math.round(chordLength / linkSpacing));
      const linkRadiusX = linkSpacing * 0.52;
      const linkRadiusY = Math.max(gridCell * 0.9, lensRing * 0.04);

      for (let index = 0; index <= linkCount; index += 1) {
        const t = index / linkCount;
        const point = chainPoint(t);
        const behind = chainPoint(Math.max(0, t - 0.01));
        const ahead = chainPoint(Math.min(1, t + 0.01));
        let tangentX = ahead.x - behind.x;
        let tangentY = ahead.y - behind.y;
        const tangentLength = Math.hypot(tangentX, tangentY) || 1;

        tangentX /= tangentLength;
        tangentY /= tangentLength;

        const linkNormalX = -tangentY;
        const linkNormalY = tangentX;

        for (let pointIndex = 0; pointIndex < 12; pointIndex += 1) {
          const angle = (pointIndex / 12) * Math.PI * 2;
          const along = Math.cos(angle) * linkRadiusX;
          const across = Math.sin(angle) * linkRadiusY;
          const x = point.x + tangentX * along + linkNormalX * across;
          const y = point.y + tangentY * along + linkNormalY * across;
          const gx = Math.floor(x / gridCell);
          const gy = Math.floor(y / gridCell);
          const density =
            0.68 + 0.18 * Math.abs(Math.sin(index * 1.7 + pointIndex));

          setDensity(gx, gy, density);
        }
      }

      const rMax = lensRing * 1.24;
      const minGx = Math.floor((lensCenterX - rMax) / gridCell);
      const maxGx = Math.ceil((lensCenterX + rMax) / gridCell);
      const minGy = Math.floor((lensCenterY - rMax) / gridCell);
      const maxGy = Math.ceil((lensCenterY + rMax) / gridCell);
      const bladeRotation = reduced
        ? 0
        : wave * (Math.PI / 6) + 0.08 * Math.sin(wave - 0.8);

      for (let gy = minGy; gy <= maxGy; gy += 1) {
        for (let gx = minGx; gx <= maxGx; gx += 1) {
          const x = (gx + 0.5) * gridCell;
          const y = (gy + 0.5) * gridCell;
          const dx = x - lensCenterX;
          const dy = y - lensCenterY;
          const radius = Math.hypot(dx, dy);

          if (radius > rMax) continue;

          const angle = Math.atan2(dy, dx);
          const ringNoise =
            1 +
            0.018 * Math.sin(angle * 7 + 1.2) +
            0.01 * Math.sin(angle * 13 - 0.9);
          const ringRadius = lensRing * ringNoise;
          const ringWidth = Math.max(gridCell * 0.85, lensRing * 0.07);
          const ringDistance = Math.abs(radius - ringRadius) / ringWidth;
          let density = 0;

          if (ringDistance < 1) {
            density = (1 - ringDistance * ringDistance) * 0.95;
          }

          const innerRingDistance =
            Math.abs(radius - lensRing * 0.84) / (ringWidth * 0.72);

          if (innerRingDistance < 1) {
            density = Math.max(
              density,
              (1 - innerRingDistance * innerRingDistance) * 0.72,
            );
          }

          const rimShadow = Math.max(0, Math.cos(angle - 2.5));

          if (
            rimShadow > 0 &&
            radius > ringRadius - ringWidth * 0.5 &&
            radius < ringRadius + ringWidth * 1.25
          ) {
            density = Math.max(density, rimShadow * 0.55);
          }

          const bladeT = (radius / lensRing - 0.14) / 0.66;

          if (bladeT >= 0 && bladeT <= 1) {
            for (let blade = 0; blade < 6; blade += 1) {
              const bladeBase =
                bladeRotation + (blade * Math.PI) / 3;
              const center = bladeBase + 0.15 + 0.55 * bladeT;
              const halfWidth = 0.06 + 0.22 * bladeT;
              const difference = Math.atan2(
                Math.sin(angle - center),
                Math.cos(angle - center),
              );
              const ratio = Math.abs(difference) / halfWidth;

              if (ratio <= 1) {
                const edge = 1 - Math.pow(ratio, 5);
                const bladeDensity =
                  0.92 *
                  edge *
                  (0.88 +
                    0.12 *
                      Math.sin(blade * 7.1 + bladeT * 9.3));

                density = Math.max(density, bladeDensity);
              }
            }
          }

          if (radius > ringRadius && radius < lensRing * 1.23) {
            const side = Math.max(0, Math.cos(angle - 2.6));

            if (side > 0.04) {
              const falloff =
                1 - (radius - ringRadius) / (lensRing * 0.23);

              if (falloff > 0) {
                density = Math.max(density, side * falloff * 0.42);
              }
            }
          }

          if (density > 0.08) {
            setDensity(gx, gy, density);
          }
        }
      }
    };

    const draw = () => {
      if (width === 0 || height === 0) return;

      context.clearRect(0, 0, width, height);
      context.fillStyle = INK;

      const wave = reduced ? 0 : (phase / LOOP_SECONDS) * Math.PI * 2;
      const swingWave = reduced ? 0 : wave - 0.22;
      const chainAngle =
        baseChainAngle + SWING * Math.sin(swingWave);
      const lensCenterX = pivotX + Math.sin(chainAngle) * lensOrbit;
      const lensCenterY = pivotY + Math.cos(chainAngle) * lensOrbit;
      const eyeAngle = reduced
        ? baseChainAngle
        : baseChainAngle + SWING * Math.sin(wave - 0.34);
      const eyeShiftX =
        (Math.sin(eyeAngle) - Math.sin(baseChainAngle)) *
        lensOrbit *
        0.22;
      const eyeShiftY = eyeShiftX * 0.14;
      const lensHoleRadius = lensRing * 1.04;

      for (const dot of eyeDots) {
        const x = dot.x + eyeShiftX * dot.eyeWeight;
        const y = dot.y + eyeShiftY * dot.eyeWeight;
        const pulse = 0.9 + 0.1 * Math.sin(wave - dot.phase);
        const size = Math.min(dot.size * pulse, dot.maxSize);

        if (size < 0.45) continue;

        context.fillRect(x - size / 2, y - size / 2, size, size);
      }

      context.fillStyle = PAPER;
      context.beginPath();
      context.arc(lensCenterX, lensCenterY, lensHoleRadius, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = INK;

      buildPendantDensity(chainAngle, lensCenterX, lensCenterY, wave);

      if (densityMap) {
        for (const index of touchedCells) {
          const density = densityMap[index];
          const gx = index % gridCols;
          const gy = Math.floor(index / gridCols);
          const x = (gx + 0.5) * gridCell;
          const y = (gy + 0.5) * gridCell;
          const dotPhase =
            Math.hypot(x - baseLensX, y - baseLensY) * 0.03;
          const pulse = 0.78 + 0.22 * Math.sin(wave - dotPhase);
          const size = Math.min(
            Math.pow(density, 0.6) * gridCell * 0.96 * pulse,
            gridCell,
          );

          if (size < 0.45) continue;

          context.fillRect(x - size / 2, y - size / 2, size, size);
        }

        for (const index of touchedCells) {
          densityMap[index] = 0;
        }
        touchedCells.length = 0;
      }
    };

    const stop = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const tick = (timestamp: number) => {
      if (reduced || !visible || !revealed || document.hidden) {
        frame = 0;
        return;
      }

      if (lastPaint === 0) lastPaint = timestamp;

      if (timestamp - lastPaint < 50) {
        frame = requestAnimationFrame(tick);
        return;
      }

      const elapsed = Math.min(0.1, (timestamp - lastPaint) / 1000);
      phase = (phase + elapsed) % LOOP_SECONDS;
      lastPaint = timestamp;
      draw();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      stop();

      if (reduced || !visible || !revealed || document.hidden) return;

      lastPaint = 0;
      frame = requestAnimationFrame(tick);
    };

    const build = () => {
      if (!image.complete || image.naturalWidth === 0) return;

      const rect = portrait.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;

      for (const target of [baseCanvas, canvas]) {
        target.width = Math.max(1, Math.round(width * dpr));
        target.height = Math.max(1, Math.round(height * dpr));
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
      }

      baseContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cell = Math.max(3, Math.round(width / 220));
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);

      gridCell = cell;
      gridCols = cols;
      gridRows = rows;
      densityMap = new Float32Array(cols * rows);
      touchedCells = [];

      const grid = document.createElement("canvas");
      grid.width = cols;
      grid.height = rows;
      const gridContext = grid.getContext("2d", { willReadFrequently: true });
      if (!gridContext) return;

      const scale = Math.max(
        cols / image.naturalWidth,
        rows / image.naturalHeight,
      );
      const sourceWidth = cols / scale;
      const sourceHeight = rows / scale;
      const sourceX = (image.naturalWidth - sourceWidth) * 0.5;
      const sourceY = (image.naturalHeight - sourceHeight) * 0.5;

      gridContext.imageSmoothingEnabled = true;
      gridContext.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        cols,
        rows,
      );

      const data = gridContext.getImageData(0, 0, cols, rows).data;
      const naturalWidth = image.naturalWidth;
      const naturalHeight = image.naturalHeight;
      const pivotSourceX = PIVOT.x * naturalWidth;
      const pivotSourceY = PIVOT.y * naturalHeight;
      const lensSourceX = LENS.x * naturalWidth;
      const lensSourceY = LENS.y * naturalHeight;
      const orbitSource = Math.hypot(
        lensSourceX - pivotSourceX,
        lensSourceY - pivotSourceY,
      );

      baseChainAngle = Math.atan2(
        lensSourceX - pivotSourceX,
        lensSourceY - pivotSourceY,
      );
      pivotX = ((pivotSourceX - sourceX) / sourceWidth) * width;
      pivotY = ((pivotSourceY - sourceY) / sourceHeight) * height;
      lensOrbit = (orbitSource / sourceWidth) * width;
      lensRing =
        ((LENS_RING_RADIUS * naturalWidth) / sourceWidth) * width;

      baseLensX = pivotX + Math.sin(baseChainAngle) * lensOrbit;
      baseLensY = pivotY + Math.cos(baseChainAngle) * lensOrbit;
      const lensMaskCenterX = LENS_MASK.x * naturalWidth;
      const lensMaskCenterY = LENS_MASK.y * naturalHeight;
      const lensMaskRadiusX = LENS_MASK.rx * naturalWidth;
      const lensMaskRadiusY = LENS_MASK.ry * naturalHeight;
      const chainMaskRadius = CHAIN_MASK_RADIUS * naturalWidth;
      const chainMaskPoints = CHAIN_MASK_PATH.map((point) => ({
        x: point.x * naturalWidth,
        y: point.y * naturalHeight,
      }));
      const eyeData = EYES.map((eye) => ({
        x: eye.x * naturalWidth,
        y: eye.y * naturalHeight,
        rx: eye.rx * naturalWidth,
        ry: eye.ry * naturalHeight,
      }));

      baseDots = [];
      eyeDots = [];

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const index = (y * cols + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          const density = Math.max(0, Math.min(1, (244 - luminance) / 196));

          if (density < 0.07) continue;

          const sourceDotX = sourceX + ((x + 0.5) / cols) * sourceWidth;
          const sourceDotY = sourceY + ((y + 0.5) / rows) * sourceHeight;

          const maskX =
            (sourceDotX - lensMaskCenterX) / lensMaskRadiusX;
          const maskY =
            (sourceDotY - lensMaskCenterY) / lensMaskRadiusY;

          let chainMasked = false;

          for (let index = 0; index < chainMaskPoints.length - 1; index += 1) {
            const start = chainMaskPoints[index];
            const end = chainMaskPoints[index + 1];

            if (
              distanceToSegment(
                sourceDotX,
                sourceDotY,
                start.x,
                start.y,
                end.x,
                end.y,
              ) < chainMaskRadius
            ) {
              chainMasked = true;
              break;
            }
          }

          if (maskX * maskX + maskY * maskY < 1 || chainMasked) {
            continue;
          }

          let eyeWeight = 0;

          for (const eye of eyeData) {
            const eyeX = (sourceDotX - eye.x) / eye.rx;
            const eyeY = (sourceDotY - eye.y) / eye.ry;
            const eyeDistance = eyeX * eyeX + eyeY * eyeY;

            if (eyeDistance < 1) {
              const weight = Math.pow(1 - eyeDistance, 1.3);
              if (weight > eyeWeight) eyeWeight = weight;
            }
          }

          const dotX = (x + 0.5) * cell;
          const dotY = (y + 0.5) * cell;
          const lensDistance = Math.hypot(
            dotX - baseLensX,
            dotY - baseLensY,
          );
          const dot: Dot = {
            x: dotX,
            y: dotY,
            size: Math.pow(density, 0.6) * cell * 0.96,
            maxSize: cell,
            phase: lensDistance * 0.03,
            eyeWeight,
          };

          if (eyeWeight > 0.02) {
            eyeDots.push(dot);
          } else {
            baseDots.push(dot);
          }
        }
      }

      baseContext.clearRect(0, 0, width, height);
      baseContext.fillStyle = INK;

      for (const dot of baseDots) {
        const size = Math.min(dot.size * 0.94, dot.maxSize);

        if (size < 0.45) continue;

        baseContext.fillRect(
          dot.x - size / 2,
          dot.y - size / 2,
          size,
          size,
        );
      }

      phase = 0;
      draw();
      image.style.opacity = "0";
      start();
    };

    const onImageLoad = () => build();

    if (image.complete && image.naturalWidth > 0) {
      build();
    } else {
      image.addEventListener("load", onImageLoad);
    }

    const resizeObserver = new ResizeObserver(() => build());
    resizeObserver.observe(portrait);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);

        if (visible) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(portrait);

    const onRevealed = () => {
      if (revealFallback) {
        window.clearTimeout(revealFallback);
        revealFallback = 0;
      }

      revealed = true;
      phase = 0;
      draw();
      start();
    };

    if (preloaderActive) {
      window.addEventListener("6folio:revealed", onRevealed, { once: true });
      revealFallback = window.setTimeout(onRevealed, 8000);
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const onMotionChange = () => {
      reduced = motionQuery.matches;

      if (reduced) {
        stop();
        draw();
      } else {
        start();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      stop();
      image.removeEventListener("load", onImageLoad);
      window.removeEventListener("6folio:revealed", onRevealed);
      if (revealFallback) window.clearTimeout(revealFallback);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <section
      className={styles.hero}
      data-home-hero
      aria-labelledby="home-hero-title"
    >
      <div className={styles.stage}>
        <div className={styles.stageTop}>
          <Link href="/" aria-label="6folio home" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <span>6</span>
              <span>F</span>
            </span>
            <span className={styles.brandName}>6folio</span>
          </Link>
        </div>

        <div className={styles.portrait} ref={portraitRef}>
          {/* The image is both the canvas source and the no-JS fallback. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imageRef}
            src="/hero-engraving.webp"
            alt=""
            width={900}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={styles.engravingImage}
            draggable={false}
          />
          <canvas
            ref={baseCanvasRef}
            aria-hidden="true"
            className={styles.baseDither}
          />
          <canvas ref={canvasRef} aria-hidden="true" className={styles.dither} />
        </div>

        <div className={styles.copy}>
          <h1 id="home-hero-title">
            six perspectives.{" "}
            <br />
            <span>one clear direction.</span>
          </h1>
          <p>
            An independent creative growth studio connecting brand, content,
            production, marketing, and digital experience around one clear
            business objective.
          </p>
        </div>
      </div>

      <aside className={styles.rail} aria-label="Navigation and contact">
        <nav className={styles.verticalNav} aria-label="Hero navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={styles.cta}>
          <span className={styles.ctaLabel}>Start a project</span>
          <ArrowUpRight className={styles.ctaArrow} />
        </Link>
      </aside>
    </section>
  );
}
