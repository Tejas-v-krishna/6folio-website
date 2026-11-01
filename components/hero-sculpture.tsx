"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";

export default function HeroSculpture() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const sculptureRef = useRef<SVGSVGElement | null>(null);
  const ringRef = useRef<SVGGElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ring = ringRef.current;
        const sculpture = sculptureRef.current;
        const wrap = wrapRef.current;
        if (!ring || !sculpture || !wrap) return;

        const ringTween = gsap.to(ring, {
          rotation: 360,
          svgOrigin: "450 450",
          duration: 120,
          ease: "none",
          repeat: -1,
        });

        const floatTween = gsap.to(sculpture, {
          y: -14,
          duration: 4.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        const parallax = gsap.fromTo(
          sculpture,
          { yPercent: 3 },
          {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );

        return () => {
          ringTween.kill();
          floatTween.kill();
          parallax.scrollTrigger?.kill();
          parallax.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className="relative flex h-full w-full items-center justify-center">
      <svg
        ref={sculptureRef}
        viewBox="0 0 900 900"
        className="h-full w-full max-h-[74vh]"
        role="img"
        aria-label="A sculptural passage made of six nested stone arches, drawing the eye to a single dark opening with a blue line of light."
      >
        <defs>
          <linearGradient id="stone-1" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#dedad1" />
            <stop offset="0.5" stopColor="#b9b4a9" />
            <stop offset="1" stopColor="#8d887e" />
          </linearGradient>
          <linearGradient id="stone-2" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#ccc7bc" />
            <stop offset="0.55" stopColor="#a39e94" />
            <stop offset="1" stopColor="#7d786f" />
          </linearGradient>
          <linearGradient id="stone-3" x1="0" y1="0" x2="0.7" y2="1">
            <stop offset="0" stopColor="#b8b3a8" />
            <stop offset="0.55" stopColor="#918c83" />
            <stop offset="1" stopColor="#6d6961" />
          </linearGradient>
          <radialGradient id="floor-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#0a0a0a" stopOpacity="0.34" />
            <stop offset="1" stopColor="#0a0a0a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="450" cy="798" rx="360" ry="34" fill="url(#floor-shadow)" />
        <path d="M110 800 H790" stroke="#a9a49a" strokeWidth="1" />

        <g ref={ringRef} opacity="0.5">
          <path
            id="hero-ring"
            d="M450 450 m -392 0 a 392 392 0 1 1 784 0 a 392 392 0 1 1 -784 0"
            fill="none"
          />
          <text
            fontFamily="var(--font-mono)"
            fontSize="13"
            letterSpacing="7"
            fill="#6f6d66"
          >
            <textPath href="#hero-ring" startOffset="0">
              SIX PERSPECTIVES / ONE CLEAR DIRECTION / SIX PERSPECTIVES / ONE CLEAR DIRECTION /
            </textPath>
          </text>
        </g>

        <g fill="none" strokeLinecap="butt">
          <path
            d="M120 800 V400 A330 330 0 0 1 780 400 V800"
            stroke="url(#stone-1)"
            strokeWidth="30"
          />
          <path
            d="M170 800 V412 A280 280 0 0 1 730 412 V800"
            stroke="url(#stone-2)"
            strokeWidth="25"
          />
          <path
            d="M220 800 V424 A230 230 0 0 1 680 424 V800"
            stroke="url(#stone-3)"
            strokeWidth="20"
          />
          <path
            d="M270 800 V436 A180 180 0 0 1 630 436 V800"
            stroke="url(#stone-2)"
            strokeWidth="15"
          />
          <path
            d="M320 800 V448 A130 130 0 0 1 580 448 V800"
            stroke="url(#stone-3)"
            strokeWidth="11"
          />
          <path
            d="M370 800 V460 A80 80 0 0 1 530 460 V800"
            stroke="url(#stone-1)"
            strokeWidth="7"
          />
        </g>

        <path d="M405 800 V472 A45 45 0 0 1 495 472 V800 Z" fill="#0a0a0a" />
        <rect x="405" y="792" width="90" height="5" fill="#1a2bff" />

        <g fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="#6f6d66">
          <text x="120" y="836">01</text>
          <text x="270" y="836">02</text>
          <text x="420" y="836">03</text>
          <text x="570" y="836">04</text>
          <text x="720" y="836">05</text>
          <text x="795" y="836">06</text>
        </g>
      </svg>
    </div>
  );
}
