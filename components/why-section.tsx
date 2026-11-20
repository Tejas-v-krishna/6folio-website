"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./why-section.module.css";

gsap.registerPlugin(ScrollTrigger);

const INK = "#2834b8";
const HEADER_OFFSET = 61;
const MORPH_END = 0.9;

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

const GLYPH_6 = [
  "01110",
  "10000",
  "10000",
  "11110",
  "10001",
  "10001",
  "01110",
];

const GLYPH_F = [
  "11111",
  "10000",
  "10000",
  "11110",
  "10000",
  "10000",
  "10000",
];

type MorphDot = {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  ox: number;
  oy: number;
  delay: number;
  radius: number;
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

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function activeIndex(progress: number) {
  return progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
}

function buildDots(width: number, height: number): MorphDot[] {
  const markWidth = Math.min(width * 0.76, height * 1.08);
  const cell = markWidth / 12;
  const spacing = cell / 3.25;
  const markHeight = cell * 7;
  const originX = (width - markWidth) / 2;
  const originY = (height - markHeight) / 2;
  const clusterRadius = Math.min(width, height) * 0.31;
  const jitter = Math.min(width, height) * 0.075;
  const dots: MorphDot[] = [];
  const glyphs = [
    { col: 0, rows: GLYPH_6 },
    { col: 7, rows: GLYPH_F },
  ];

  for (const glyph of glyphs) {
    for (let row = 0; row < glyph.rows.length; row += 1) {
      const line = glyph.rows[row];

      for (let column = 0; column < line.length; column += 1) {
        if (line[column] !== "1") continue;

        for (let subRow = 0; subRow < 3; subRow += 1) {
          for (let subColumn = 0; subColumn < 3; subColumn += 1) {
            const index = dots.length;
            const group = index % 6;
            const angle = (group / 6) * Math.PI * 2 + 0.4;
            const centerX = width / 2 + Math.cos(angle) * clusterRadius;
            const centerY = height / 2 + Math.sin(angle) * clusterRadius;
            const targetX =
              originX +
              (glyph.col + column + 0.5) * cell +
              (subColumn - 1) * spacing;
            const targetY =
              originY +
              (row + 0.5) * cell +
              (subRow - 1) * spacing;
            const startX =
              centerX + (seeded(index, 1) - 0.5) * jitter * 2;
            const startY =
              centerY + (seeded(index, 2) - 0.5) * jitter * 2;
            const arcMagnitude =
              (seeded(index, 3) - 0.5) * Math.min(width, height) * 0.16;

            dots.push({
              sx: startX,
              sy: startY,
              tx: targetX,
              ty: targetY,
              ox: Math.cos(angle + Math.PI / 2) * arcMagnitude,
              oy: Math.sin(angle + Math.PI / 2) * arcMagnitude,
              delay: 0.02 + (group / 6) * 0.06 + seeded(index, 4) * 0.24,
              radius: Math.max(1.4, cell * 0.115),
            });
          }
        }
      }
    }
  }

  return dots;
}

export default function WhySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d") ?? null;

    if (!section || !visual || !canvas || !context) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let dots: MorphDot[] = [];
    let width = 0;
    let height = 0;
    let progress = 0;
    let trigger: ScrollTrigger | null = null;
    let frame = 0;
    let disposed = false;

    const draw = (value: number) => {
      if (!context || width === 0 || height === 0) return;

      context.clearRect(0, 0, width, height);
      context.fillStyle = INK;

      const eased = easeInOutCubic(clamp(value / MORPH_END));

      for (const dot of dots) {
        const local = clamp((eased - dot.delay) / (1 - dot.delay));
        const t = easeOutCubic(local);
        const arc = Math.sin(Math.PI * t);
        const x = dot.sx + (dot.tx - dot.sx) * t + dot.ox * arc;
        const y = dot.sy + (dot.ty - dot.sy) * t + dot.oy * arc;
        const radius = dot.radius * (0.8 + 0.2 * t);

        context.globalAlpha = 0.58 + 0.42 * t;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
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
      if (!visual || !canvas || !context) return;

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
      dots = buildDots(width, height);
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

          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleY(${progress})`;
          }

          requestDraw();
        },
      });

      progress = trigger.progress;
      setActive(activeIndex(progress));

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
        <style>{`[data-why-section]{min-height:auto!important}[data-why-sticky]{position:static!important;height:auto!important;min-height:auto!important}[data-why-grid]{grid-template-columns:1fr!important}[data-why-visual]{display:none!important}[data-why-rail]{display:none!important}[data-why-title]{opacity:1!important}[data-why-body]{grid-template-rows:1fr!important}`}</style>
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
            data-why-visual
            className={styles.figure}
            aria-hidden="true"
          >
            <div ref={visualRef} className={styles.visual}>
              <canvas ref={canvasRef} className={styles.canvas} />
            </div>
            <figcaption className={styles.caption}>
              <span>Six perspectives</span>
              <span className={styles.captionRule} />
              <span>One direction</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
