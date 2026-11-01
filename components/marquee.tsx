"use client";

import { useRef } from "react";
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
