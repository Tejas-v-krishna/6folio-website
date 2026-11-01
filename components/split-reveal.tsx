"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/components/gsap";

type SplitRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  type?: "lines" | "words" | "chars";
  delay?: number;
  scroll?: boolean;
  start?: string;
};

export default function SplitReveal({
  text,
  as: Tag = "h2",
  className = "",
  type = "lines",
  delay = 0,
  scroll = true,
  start = "top 88%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = new SplitText(el, {
          type,
          linesClass: "split-line",
          mask: type === "lines" ? "lines" : undefined,
          aria: "auto",
        });

        const targets =
          type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

        gsap.from(targets, {
          yPercent: 115,
          opacity: 0,
          duration: 1.05,
          stagger: type === "chars" ? 0.02 : 0.085,
          ease: "power4.out",
          delay,
          immediateRender: false,
          scrollTrigger: scroll
            ? {
                trigger: el,
                start,
                once: true,
              }
            : undefined,
        });

        return () => split.revert();
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as never} className={className}>
      {text}
    </Tag>
  );
}
