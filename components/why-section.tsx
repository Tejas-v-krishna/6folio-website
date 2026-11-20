"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/content/services";
import styles from "./why-section.module.css";

gsap.registerPlugin(ScrollTrigger);

const INK = "#2834b8";
const HEADER_OFFSET = 61;
const FORMED_AT = 0.64;

const principles = [
  {
    title: "Joined-up thinking",
    body: "The people behind the words, visuals, campaign, and experience sit in the same conversation.",
  },
  {
    title: "Fewer disconnected outputs",
    body: "Every part has a job to do and a reason to exist. The work stays connected from first thought to final interaction.",
  },
  {
    title: "A standard you can feel",
    body: "Clear thinking, careful craft, honest outcomes. The details are not decoration. They are how the work earns trust.",
  },
];

const WHEEL_OUTER = 0.455;
const WHEEL_RING = 0.965;
const WHEEL_HUB = 0.185;
const WHEEL_BLADE_INNER = 0.24;
const WHEEL_BLADE_OUTER = 0.92;
const WHEEL_CURVE_START = 0.14;
const WHEEL_CURVE_END = 0.72;
const WHEEL_LABEL_RADIUS = 0.6;
const WHEEL_BASE_ANGLE = -Math.PI / 2 + 0.08;
const WHEEL_LABEL_T =
  (WHEEL_LABEL_RADIUS - WHEEL_BLADE_INNER) /
  (WHEEL_BLADE_OUTER - WHEEL_BLADE_INNER);
const WHEEL_LABEL_OFFSET =
  WHEEL_CURVE_START +
  (WHEEL_CURVE_END - WHEEL_CURVE_START) * WHEEL_LABEL_T;
const LABEL_PERCENT = WHEEL_OUTER * WHEEL_LABEL_RADIUS * 100;

const wheelOffers = services.map((service, index) => {
  const angle =
    WHEEL_BASE_ANGLE + (index * Math.PI) / 3 + WHEEL_LABEL_OFFSET;

  return {
    ...service,
    left: 50 + Math.cos(angle) * LABEL_PERCENT,
    top: 50 + Math.sin(angle) * LABEL_PERCENT,
  };
});

type EmblemDot = {
  x: number;
  y: number;
  size: number;
  alpha: number;
};

type Particle = {
  startRadius: number;
  targetRadius: number;
  startAngle: number;
  angleDelta: number;
  swirl: number;
  delay: number;
  startSize: number;
  targetSize: number;
  startAlpha: number;
  targetAlpha: number;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function smoothstep(value: number) {
  const clamped = clamp(value);
  return clamped * clamped * (3 - 2 * clamped);
}

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function activeIndex(progress: number) {
  return progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
}

function buildEmblem(width: number, height: number): EmblemDot[] {
  const size = Math.min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = size * WHEEL_OUTER;
  const ringRadius = outerRadius * WHEEL_RING;
  const ringHalf = size * 0.012;
  const hubRadius = outerRadius * WHEEL_HUB;
  const hubHalf = size * 0.007;
  const bladeInner = outerRadius * WHEEL_BLADE_INNER;
  const bladeOuter = outerRadius * WHEEL_BLADE_OUTER;
  const step = Math.max(2.6, size * 0.0048);
  const cols = Math.ceil(width / step);
  const rows = Math.ceil(height / step);
  const dots: EmblemDot[] = [];

  for (let gy = 0; gy < rows; gy += 1) {
    for (let gx = 0; gx < cols; gx += 1) {
      const salt = gx + gy * cols;
      const x = (gx + 0.5 + (seeded(salt, 1) - 0.5) * 0.82) * step;
      const y = (gy + 0.5 + (seeded(salt, 2) - 0.5) * 0.82) * step;
      const dx = x - centerX;
      const dy = y - centerY;
      const radius = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);
      let density = 0;

      const ringDistance = Math.abs(radius - ringRadius) / ringHalf;

      if (ringDistance < 1) {
        density = (1 - ringDistance * ringDistance) * 0.98;
      }

      const hubDistance = Math.abs(radius - hubRadius) / hubHalf;

      if (hubDistance < 1) {
        density = Math.max(
          density,
          (1 - hubDistance * hubDistance) * 0.9,
        );
      }

      const bladeT =
        (radius - bladeInner) / (bladeOuter - bladeInner);

      if (bladeT >= 0 && bladeT <= 1) {
        for (let blade = 0; blade < 6; blade += 1) {
          const center =
            WHEEL_BASE_ANGLE +
            (blade * Math.PI) / 3 +
            WHEEL_CURVE_START +
            (WHEEL_CURVE_END - WHEEL_CURVE_START) * bladeT;
          const halfWidth = 0.14 + 0.34 * bladeT;
          const difference = Math.atan2(
            Math.sin(angle - center),
            Math.cos(angle - center),
          );
          const ratio = Math.abs(difference) / halfWidth;

          if (ratio <= 1) {
            const edge = 1 - Math.pow(ratio, 4);
            const grain =
              0.86 + 0.14 * Math.sin(blade * 7.1 + bladeT * 9.3);

            density = Math.max(density, 0.94 * edge * grain);
          }
        }
      }

      if (density < 0.18) continue;

      const threshold = seeded(salt, 3);

      if (threshold > density) continue;

      const dotSize = Math.min(
        step * 0.84,
        1.1 + density * 2.3 + seeded(salt, 4) * 0.55,
      );

      dots.push({
        x,
        y,
        size: dotSize,
        alpha: 0.82 + density * 0.18,
      });
    }
  }

  return dots;
}

function buildParticles(
  dots: EmblemDot[],
  width: number,
  height: number,
): Particle[] {
  if (dots.length === 0) return [];

  const centerX = width / 2;
  const centerY = height / 2;
  const cols = Math.ceil(Math.sqrt((dots.length * width) / height));
  const rows = Math.ceil(dots.length / cols);
  const particles: Particle[] = [];

  dots.forEach((dot, index) => {
    const column = index % cols;
    const row = Math.floor(index / cols);
    const startX =
      ((column + 0.5 + (seeded(index, 11) - 0.5) * 0.92) * width) / cols;
    const startY =
      ((row + 0.5 + (seeded(index, 12) - 0.5) * 0.92) * height) / rows;
    const startDx = startX - centerX;
    const startDy = startY - centerY;
    const startRadius = Math.hypot(startDx, startDy);
    const targetRadius = Math.hypot(dot.x - centerX, dot.y - centerY);
    const startAngle = Math.atan2(startDy, startDx);
    const targetAngle = Math.atan2(dot.y - centerY, dot.x - centerX);
    const angleDelta = Math.atan2(
      Math.sin(targetAngle - startAngle),
      Math.cos(targetAngle - startAngle),
    );
    const direction = angleDelta >= 0 ? 1 : -1;
    const delay =
      0.02 +
      clamp(targetRadius / (Math.min(width, height) * WHEEL_OUTER)) *
        0.14 +
      seeded(index, 13) * 0.16;

    particles.push({
      startRadius,
      targetRadius,
      startAngle,
      angleDelta,
      swirl: direction * (0.25 + seeded(index, 14) * 0.6),
      delay,
      startSize: 1.3 + seeded(index, 15) * 1.7,
      targetSize: dot.size,
      startAlpha: 0.36 + seeded(index, 16) * 0.5,
      targetAlpha: dot.alpha,
    });
  });

  return particles;
}

function renderEmblem(
  dots: EmblemDot[],
  width: number,
  height: number,
  dpr: number,
) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * dpr));
  canvas.height = Math.max(1, Math.round(height * dpr));
  const context = canvas.getContext("2d");

  if (!context) return null;

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  context.clearRect(0, 0, width, height);
  context.fillStyle = INK;

  for (const dot of dots) {
    context.globalAlpha = dot.alpha;
    context.fillRect(
      dot.x - dot.size / 2,
      dot.y - dot.size / 2,
      dot.size,
      dot.size,
    );
  }

  context.globalAlpha = 1;
  return canvas;
}

export default function WhySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const figureRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const figure = figureRef.current;
    const visual = visualRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d") ?? null;

    if (!section || !figure || !visual || !canvas || !context) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let width = 0;
    let height = 0;
    let progress = 0;
    let trigger: ScrollTrigger | null = null;
    let emblemCanvas: HTMLCanvasElement | null = null;
    let particles: Particle[] = [];
    let frame = 0;
    let disposed = false;
    let formed = false;

    const setFormed = (value: number) => {
      const next = value >= FORMED_AT;

      if (next === formed) return;
      formed = next;
      figure.dataset.formed = String(next);
    };

    const draw = (value: number) => {
      if (width === 0 || height === 0) return;

      context.clearRect(0, 0, width, height);

      const emblemAlpha = smoothstep((value - 0.28) / 0.52);

      if (emblemCanvas && emblemAlpha > 0) {
        context.globalAlpha = emblemAlpha;
        context.drawImage(emblemCanvas, 0, 0, width, height);
      }

      const formation = easeInOutCubic(clamp(value / 0.82));
      const particleAlpha = 1 - smoothstep((value - 0.84) / 0.14);
      const centerX = width / 2;
      const centerY = height / 2;

      if (particleAlpha > 0.01 && particles.length > 0) {
        context.fillStyle = INK;

        for (const particle of particles) {
          const local = clamp(
            (formation - particle.delay) / (1 - particle.delay),
          );
          const t = easeOutCubic(local);
          const radius =
            particle.startRadius +
            (particle.targetRadius - particle.startRadius) * t;
          const angle =
            particle.startAngle +
            particle.angleDelta * t +
            particle.swirl * Math.sin(Math.PI * t);
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          const size =
            particle.startSize +
            (particle.targetSize - particle.startSize) * t;

          context.globalAlpha =
            (particle.startAlpha +
              (particle.targetAlpha - particle.startAlpha) * t) *
            particleAlpha;
          context.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }

      context.globalAlpha = 1;
    };

    const requestDraw = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        draw(progress);
      });
    };

    const resize = () => {
      const rect = visual.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const dots = buildEmblem(width, height);
      emblemCanvas = renderEmblem(dots, width, height, dpr);
      particles = buildParticles(dots, width, height);
      draw(progress);
    };

    const setupMode = () => {
      if (disposed) return;

      trigger?.kill();
      trigger = null;

      const interactive = desktopQuery.matches && !motionQuery.matches;

      if (!interactive) {
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = "scaleY(0)";
        }
        setActive(-1);
        setFormed(1);
        progress = 1;
        draw(1);
        return;
      }

      trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${HEADER_OFFSET}px`,
        end: "bottom bottom",
        onUpdate: (self) => {
          progress = self.progress;
          const nextActive = activeIndex(progress);

          setActive((current) =>
            current === nextActive ? current : nextActive,
          );
          setFormed(progress);

          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleY(${progress})`;
          }

          requestDraw();
        },
      });

      progress = trigger.progress;
      setActive(activeIndex(progress));
      setFormed(progress);

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleY(${progress})`;
      }
      draw(progress);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(visual);
    resize();

    const onModeChange = () => {
      setupMode();
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    motionQuery.addEventListener("change", onModeChange);
    desktopQuery.addEventListener("change", onModeChange);

    setupMode();
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      disposed = true;
      trigger?.kill();
      resizeObserver.disconnect();
      cancelAnimationFrame(frame);
      motionQuery.removeEventListener("change", onModeChange);
      desktopQuery.removeEventListener("change", onModeChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-why-section
      className={styles.section}
      aria-labelledby="why-title"
    >
      <noscript>
        <style>{`
          [data-why-section] { min-height: auto !important; }
          [data-why-sticky] { position: static !important; height: auto !important; min-height: auto !important; }
          [data-why-grid] { grid-template-columns: 1fr !important; }
          [data-why-visual] { max-width: none !important; justify-self: stretch !important; }
          [data-why-wheel] { aspect-ratio: auto !important; border: 0 !important; overflow: visible !important; container-type: normal !important; }
          [data-why-canvas] { display: none !important; }
          [data-why-offers] { position: static !important; display: grid !important; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important; gap: 0.8rem 1.5rem !important; }
          [data-why-offer] { position: static !important; width: auto !important; padding: 0.55rem 0 !important; transform: none !important; opacity: 1 !important; border-top: 1px solid rgba(10, 10, 15, 0.14) !important; background: transparent !important; transition: none !important; }
          [data-why-offer] > span:first-child { font-size: 0.58rem !important; }
          [data-why-offer] > span:last-child { font-size: 0.78rem !important; line-height: 1.3 !important; }
          [data-why-rail] { display: none !important; }
          [data-why-title] { opacity: 1 !important; }
          [data-why-body] { grid-template-rows: 1fr !important; }
          @media (min-width: 900px) {
            [data-why-offers] { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </noscript>

      <div data-why-sticky className={styles.sticky}>
        <div data-why-grid className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.eyebrowRow}>
              <span className="badge-icon" aria-hidden="true">
                6
              </span>
              <p className="eyebrow">Why 6FOLIO</p>
            </div>

            <h2 id="why-title" className={styles.heading}>
              A clearer way to build the whole picture.
            </h2>

            <p className={`body-copy ${styles.intro}`}>
              A brand is not built in separate pieces. The words affect the
              visuals. The visuals shape the campaign. The campaign leads people
              to an experience. The experience decides whether they stay,
              enquire, or leave.
            </p>

            <div className={styles.listWrap}>
              <div data-why-rail className={styles.rail} aria-hidden="true">
                <span ref={progressBarRef} className={styles.progress} />
              </div>

              <ol className={styles.list}>
                {principles.map((principle, index) => (
                  <li
                    key={principle.title}
                    data-why-item
                    className={`${styles.item} ${
                      active === index ? styles.active : ""
                    }`}
                  >
                    <div className={styles.itemHead}>
                      <span className={styles.number} aria-hidden="true">
                        0{index + 1}
                      </span>
                      <h3 data-why-title className={styles.title}>
                        {principle.title}
                      </h3>
                    </div>
                    <div data-why-body className={styles.bodyWrap}>
                      <div className={styles.bodyInner}>
                        <p className={styles.body}>{principle.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <figure
            ref={figureRef}
            data-why-visual
            data-formed="false"
            className={styles.figure}
          >
            <div
              ref={visualRef}
              data-why-wheel
              className={styles.wheel}
            >
              <canvas
                ref={canvasRef}
                data-why-canvas
                className={styles.canvas}
                aria-hidden="true"
              />
              <ul
                className={styles.offers}
                aria-label="Six offers"
                data-why-offers
              >
                {wheelOffers.map((offer) => (
                  <li
                    key={offer.number}
                    data-why-offer
                    className={styles.offer}
                    style={{ left: `${offer.left}%`, top: `${offer.top}%` }}
                  >
                    <span className={styles.offerNumber}>
                      {offer.number}
                    </span>
                    <span className={styles.offerName}>{offer.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figcaption className={styles.caption}>
              <span>Six offers</span>
              <span className={styles.captionRule} />
              <span>One team</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
