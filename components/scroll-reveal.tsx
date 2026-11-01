"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
  start?: string;
};

export default function ScrollReveal({
  children,
  className = "",
  y = 34,
  delay = 0,
  stagger = 0,
  start = "top 88%",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? Array.from(el.children) : el;
        gsap.from(targets, {
          y,
          opacity: 0,
          duration: 0.9,
          delay,
          stagger,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
