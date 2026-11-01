"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: 0.2,
          },
        }
      );
    });

    return () => mm.revert();
  }, { scope: ref });

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-accent"
      aria-hidden="true"
    />
  );
}
