"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateIn(targets: HTMLElement[]) {
  if (targets.length === 0) return () => {};

  const timeline = gsap.timeline({ paused: true });
  targets.forEach((el, index) => {
    const delay = Number(el.dataset.delay ?? 0) / 1000 + index * 0.05;
    timeline.to(
      el,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      delay,
    );
  });

  const totalMs = Math.max(1, timeline.duration() * 1000);
  const start = performance.now();
  const tick = () => {
    const now = performance.now();
    timeline.progress(Math.min(1, (now - start) / totalMs));
    if (timeline.progress() < 1) {
      window.setTimeout(tick, 16);
    }
  };
  window.setTimeout(tick, 0);

  return () => {};
}

export default function RevealController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const aboveFold = elements.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    });

    const belowFold = elements.filter((el) => !aboveFold.includes(el));

    // Reveal the page behind the preloader so the dissolve uncovers a finished
    // composition, not an empty page.
    const cancellers: (() => void)[] = [animateIn(aboveFold)];

    const triggers = belowFold.map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: () => {
          cancellers.push(animateIn([el]));
        },
      }),
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      cancellers.forEach((cancel) => cancel());
    };
  }, []);

  return null;
}
