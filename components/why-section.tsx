"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/content/services";
import styles from "./why-section.module.css";

gsap.registerPlugin(ScrollTrigger);

const INK = "#2834b8";
const HEADER_OFFSET = 61;
const INTRO_HIDE_AT = 0.2;
const FORMED_AT = 0.36;
const SERVICE_START = 0.38;
const MORPH_START = 0.12;
const MORPH_END = 0.32;
const STATIC_PROGRESS = 0.34;
const SERVICE_SPAN = services.length - 1;

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
const WHEEL_LABEL_T =
  (WHEEL_LABEL_RADIUS - WHEEL_BLADE_INNER) /
  (WHEEL_BLADE_OUTER - WHEEL_BLADE_INNER);
const WHEEL_LABEL_OFFSET =
  WHEEL_CURVE_START +
  (WHEEL_CURVE_END - WHEEL_CURVE_START) * WHEEL_LABEL_T;
const WHEEL_BASE_ANGLE = -Math.PI / 2 - WHEEL_LABEL_OFFSET;
const LABEL_PERCENT = WHEEL_OUTER * WHEEL_LABEL_RADIUS * 100;

const wheelOffers = services.map((service, index) => {
  const angle = -Math.PI / 2 + (index * Math.PI) / 3;

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

type Stage = {
  formed: boolean;
  introHidden: boolean;
  rotation: number;
  active: number;
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

function getStage(value: number): Stage {
  const formed = value >= FORMED_AT;
  const serviceFloat =
    clamp((value - SERVICE_START) / (1 - SERVICE_START)) *
    SERVICE_SPAN;
  const rotation =
    value >= SERVICE_START ? -serviceFloat * (Math.PI / 3) : 0;
  const active = formed
    ? Math.min(services.length - 1, Math.round(serviceFloat))
    : -1;

  return {
    formed,
    introHidden: value >= INTRO_HIDE_AT,
    rotation,
    active,
  };
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
  const offersRef = useRef<HTMLUListElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);
  const hudNumberRef = useRef<HTMLSpanElement | null>(null);
  const hudTitleRef = useRef<HTMLHeadingElement | null>(null);
  const hudBodyRef = useRef<HTMLParagraphElement | null>(null);
  const hudIndexRef = useRef<HTMLSpanElement | null>(null);

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
    let interactive = false;
    let trigger: ScrollTrigger | null = null;
    let emblemCanvas: HTMLCanvasElement | null = null;
    let particles: Particle[] = [];
    let activeService = -1;
    let frame = 0;
    let fieldActive = false;
    let disposed = false;

    const updateHud = (index: number) => {
      if (index === activeService) return;

      activeService = index;

      const offers = offersRef.current?.children;

      if (offers) {
        for (let offerIndex = 0; offerIndex < offers.length; offerIndex += 1) {
          offers[offerIndex].classList.toggle(
            styles.active,
            offerIndex === index,
          );
        }
      }

      if (index < 0) return;

      const service = services[index];

      if (!service) return;

      if (hudNumberRef.current) {
        hudNumberRef.current.textContent = service.number;
      }
      if (hudTitleRef.current) {
        hudTitleRef.current.textContent = service.title;
      }
      if (hudBodyRef.current) {
        hudBodyRef.current.textContent = service.strapline;
      }
      if (hudIndexRef.current) {
        hudIndexRef.current.textContent = `${String(index + 1).padStart(
          2,
          "0",
        )} / ${String(services.length).padStart(2, "0")}`;
      }
    };

    const positionOffers = (rotation: number) => {
      const offers = offersRef.current;

      if (!offers || width === 0 || height === 0) return;

      const centerX = width / 2;
      const centerY = height / 2;
      const radius =
        Math.min(width, height) * WHEEL_OUTER * WHEEL_LABEL_RADIUS;

      for (let index = 0; index < offers.children.length; index += 1) {
        const offer = offers.children[index] as HTMLElement;
        const angle =
          -Math.PI / 2 +
          (index * Math.PI) / 3 +
          rotation;

        offer.style.left = `${centerX + Math.cos(angle) * radius}px`;
        offer.style.top = `${centerY + Math.sin(angle) * radius}px`;
      }
    };

    const updateInteractiveStage = (value: number) => {
      const stage = getStage(value);

      section.dataset.intro = stage.introHidden ? "hidden" : "visible";
      figure.dataset.formed = String(stage.formed);

      if (hudRef.current) {
        hudRef.current.dataset.visible = String(stage.formed);
      }

      positionOffers(stage.rotation);
      updateHud(stage.active);
    };

    const updateStaticStage = () => {
      section.dataset.intro = "visible";
      figure.dataset.formed = "true";

      if (hudRef.current) {
        hudRef.current.dataset.visible = "false";
      }

      positionOffers(0);
      updateHud(-1);
    };

    const draw = (value: number) => {
      if (width === 0 || height === 0) return;

      const stage = getStage(value);
      const emblemAlpha = smoothstep(
        (value - MORPH_START) / (MORPH_END - MORPH_START),
      );

      context.clearRect(0, 0, width, height);

      if (emblemCanvas && emblemAlpha > 0) {
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(stage.rotation);
        context.globalAlpha = emblemAlpha;
        context.drawImage(
          emblemCanvas,
          -width / 2,
          -height / 2,
          width,
          height,
        );
        context.restore();
      }

      const formation = easeInOutCubic(clamp(value / MORPH_END));
      const particleAlpha = 1 - smoothstep((value - 0.26) / 0.08);
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
      if (!fieldActive) return;

      const rect = visual.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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

      if (interactive) {
        updateInteractiveStage(progress);
      } else {
        updateStaticStage();
      }

      draw(progress);
    };

    const setupMode = () => {
      if (disposed) return;

      trigger?.kill();
      trigger = null;

      interactive = desktopQuery.matches && !motionQuery.matches;

      if (!interactive) {
        progress = STATIC_PROGRESS;
        updateStaticStage();
        draw(progress);
        return;
      }

      trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${HEADER_OFFSET}px`,
        end: "bottom bottom",
        onUpdate: (self) => {
          progress = self.progress;
          updateInteractiveStage(progress);
          requestDraw();
        },
      });

      progress = trigger.progress;
      updateInteractiveStage(progress);
      draw(progress);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(visual);
    resize();

    const fieldObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        fieldActive = true;
        fieldObserver.disconnect();
        resize();
      },
      { rootMargin: "0px 0px -25% 0px" },
    );
    fieldObserver.observe(section);

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
      fieldObserver.disconnect();
      cancelAnimationFrame(frame);
      motionQuery.removeEventListener("change", onModeChange);
      desktopQuery.removeEventListener("change", onModeChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-why-section
      data-intro="visible"
      className={styles.section}
      aria-labelledby="why-title"
    >
      <noscript>
        <style>{`
          [data-why-section] { min-height: auto !important; }
          [data-why-sticky] { position: static !important; display: block !important; width: min(calc(100% - 2rem), 1240px) !important; height: auto !important; margin-inline: auto !important; padding-block: 3rem !important; }
          [data-why-intro] { position: static !important; width: auto !important; max-width: none !important; transform: none !important; opacity: 1 !important; }
          [data-why-scrim] { display: none !important; }
          [data-why-visual] { position: static !important; display: block !important; width: 100% !important; height: auto !important; max-width: none !important; margin-top: 2rem !important; }
          [data-why-wheel] { aspect-ratio: auto !important; width: 100% !important; height: auto !important; border: 0 !important; overflow: visible !important; container-type: normal !important; }
          [data-why-canvas] { display: none !important; }
          [data-why-offers] { position: static !important; display: grid !important; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important; gap: 0.8rem 1.5rem !important; }
          [data-why-offer] { position: static !important; width: auto !important; padding: 0.55rem 0 !important; transform: none !important; opacity: 1 !important; border-top: 1px solid rgba(10, 10, 15, 0.14) !important; background: transparent !important; box-shadow: none !important; transition: none !important; }
          [data-why-offer] > span:first-child { font-size: 0.58rem !important; opacity: 1 !important; }
          [data-why-offer] > span:last-child { font-size: 0.78rem !important; line-height: 1.3 !important; opacity: 1 !important; }
          [data-why-caption] { position: static !important; width: auto !important; margin-top: 1rem !important; opacity: 1 !important; transform: none !important; }
          [data-why-hud] { display: none !important; }
          @media (min-width: 900px) {
            [data-why-offers] { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </noscript>

      <div data-why-sticky className={styles.sticky}>
        <div data-why-scrim className={styles.introScrim} aria-hidden="true" />

        <div data-why-intro className={styles.intro}>
          <div className={styles.eyebrowRow}>
            <span className="badge-icon" aria-hidden="true">
              6
            </span>
            <p className="eyebrow">Why 6FOLIO</p>
          </div>

          <h2 id="why-title" className={styles.heading}>
            A clearer way to build the whole picture.
          </h2>

          <p className={`body-copy ${styles.introCopy}`}>
            A brand is not built in separate pieces. The words affect the
            visuals. The visuals shape the campaign. The campaign leads people
            to an experience. The experience decides whether they stay,
            enquire, or leave.
          </p>

          <ol className={styles.principles}>
            {principles.map((principle, index) => (
              <li key={principle.title} className={styles.principle}>
                <div className={styles.principleHead}>
                  <span className={styles.number} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3 className={styles.principleTitle}>
                    {principle.title}
                  </h3>
                </div>
                <p className={styles.principleBody}>{principle.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <figure
          ref={figureRef}
          data-why-visual
          data-formed="false"
          className={styles.figure}
        >
          <div ref={visualRef} data-why-wheel className={styles.wheel}>
            <canvas
              ref={canvasRef}
              data-why-canvas
              className={styles.canvas}
              aria-hidden="true"
            />
            <ul
              ref={offersRef}
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
                  <span className={styles.offerNumber}>{offer.number}</span>
                  <span className={styles.offerName}>{offer.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <figcaption data-why-caption className={styles.caption}>
            <span>Six offers</span>
            <span className={styles.captionRule} />
            <span>One team</span>
          </figcaption>
        </figure>

        <div
          ref={hudRef}
          data-why-hud
          data-visible="false"
          className={styles.hud}
          aria-hidden="true"
        >
          <div className={styles.hudTop}>
            <span className="eyebrow">Six offers</span>
            <span ref={hudIndexRef} className={styles.hudIndex}>
              01 / 06
            </span>
          </div>

          <div className={styles.hudMain}>
            <span ref={hudNumberRef} className={styles.hudNumber}>
              01
            </span>
            <div>
              <h3 ref={hudTitleRef} className={styles.hudTitle}>
                Brand direction
              </h3>
              <p ref={hudBodyRef} className={styles.hudBody}>
                Give the business a point of view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
