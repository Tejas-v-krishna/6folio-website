"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";
import { projects } from "@/lib/content";

type Item = {
  label: string;
  className: string;
};

const capabilities: Item[] = [
  { label: "Brand strategy", className: "font-semibold uppercase tracking-[0.16em]" },
  { label: "content", className: "font-medium lowercase tracking-[-0.04em] text-2xl" },
  { label: "PHOTOGRAPHY", className: "font-bold uppercase tracking-[-0.03em]" },
  { label: "Film", className: "font-light uppercase tracking-[0.3em]" },
  { label: "social", className: "font-semibold lowercase tracking-[-0.02em]" },
  { label: "GROWTH", className: "font-medium uppercase tracking-[0.14em]" },
  { label: "Digital", className: "font-bold tracking-[-0.05em] text-2xl" },
  { label: "Positioning", className: "font-normal uppercase tracking-[0.22em]" },
];

const projectItems: Item[] = projects.map((project, index) => ({
  label: project.title,
  className:
    index % 3 === 0
      ? "font-bold uppercase tracking-[-0.03em]"
      : index % 3 === 1
        ? "font-medium tracking-[-0.02em]"
        : "font-normal uppercase tracking-[0.18em]",
}));

function MarqueeRow({
  items,
  speed,
  direction,
}: {
  items: Item[];
  speed: number;
  direction: 1 | -1;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const width = track.scrollWidth / 2;
        const tween = gsap.fromTo(
          track,
          { x: direction === 1 ? 0 : -width },
          {
            x: direction === 1 ? -width : 0,
            duration: speed,
            ease: "none",
            repeat: -1,
          }
        );
        return () => tween.kill();
      });

      return () => mm.revert();
    },
    { scope: trackRef }
  );

  const row = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div
        ref={trackRef}
        className="marquee-track gap-12 md:gap-20"
      >
        {row.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className={`whitespace-nowrap text-paper/80 ${item.className}`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LogoWall() {
  return (
    <section className="border-b border-rule bg-ink py-10 text-paper md:py-14">
      <div className="shell mb-7 flex items-center justify-between gap-4">
        <span className="mono text-paper/40">Capabilities and concept studies</span>
        <span className="mono text-paper/40">2026</span>
      </div>

      <div className="space-y-7 md:space-y-9">
        <MarqueeRow items={capabilities} speed={40} direction={1} />
        <MarqueeRow items={projectItems} speed={52} direction={-1} />
      </div>
    </section>
  );
}
