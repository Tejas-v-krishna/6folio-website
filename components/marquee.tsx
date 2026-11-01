"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";

export default function Marquee({
  items,
  className = "",
  speed = 28,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const totalWidth = track.scrollWidth / 2;
        const tween = gsap.to(track, {
          x: -totalWidth,
          duration: speed,
          ease: "none",
          repeat: -1,
        });

        const slow = () => tween.timeScale(0.2);
        const resume = () => tween.timeScale(1);
        track.addEventListener("mouseenter", slow);
        track.addEventListener("mouseleave", resume);

        return () => {
          track.removeEventListener("mouseenter", slow);
          track.removeEventListener("mouseleave", resume);
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: trackRef }
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let lastTime = performance.now();
    let settle: number | undefined;

    const onScroll = () => {
      const lenis = (window as unknown as { __lenis?: { velocity: number } }).__lenis;
      const now = performance.now();
      const dy = window.scrollY - lastY;
      const dt = Math.max(1, now - lastTime);
      const velocity = lenis ? lenis.velocity : dy / dt * 1000;
      lastY = window.scrollY;
      lastTime = now;

      const skew = Math.max(-8, Math.min(8, -velocity * 0.012));
      gsap.to(track, {
        skewX: skew,
        duration: 0.35,
        ease: "power2.out",
        force3D: true,
      });

      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        gsap.to(track, {
          skewX: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }, 120);
    };

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off?: (event: string, cb: () => void) => void } }).__lenis;
    if (lenis) {
      lenis.on("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      if (lenis) {
        lenis.off?.("scroll", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
      }
      window.clearTimeout(settle);
    };
  }, [trackRef]);

  const row = [...items, ...items];

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="type-h3 whitespace-nowrap">{item}</span>
            <span className="text-accent text-2xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
