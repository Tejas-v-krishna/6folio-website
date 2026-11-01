"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    document.body.classList.add("has-custom-cursor");
    el.style.opacity = "0";
    gsap.set(el, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(el, "x", { duration: 0.18, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.18, ease: "power3.out" });
    const scaleTo = gsap.quickTo(el, "scale", { duration: 0.25, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      el.style.opacity = "1";
      xTo(event.clientX);
      yTo(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest("a, button, [role='button'], input, select, textarea, label")) {
        scaleTo(2.8);
      }
    };

    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const related = event.relatedTarget as HTMLElement | null;
      if (target && target.closest("a, button, [role='button'], input, select, textarea, label")) {
        if (!related || !related.closest("a, button, [role='button'], input, select, textarea, label")) {
          scaleTo(1);
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-3 w-3 rounded-full bg-white mix-blend-difference"
      aria-hidden="true"
    />
  );
}
