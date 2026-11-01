"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";

const outer = "M500 55 L885 277 L885 723 L500 945 L115 723 L115 277 Z";
const inner = "M500 210 L752 355 L752 645 L500 790 L248 645 L248 355 Z";
const ring = `${outer} ${inner}`;

export default function SixMark() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const floatRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const float = floatRef.current;
      if (!wrap || !float) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const floatTween = gsap.to(float, {
          y: -16,
          rotate: 1.2,
          duration: 4.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        const parallax = gsap.fromTo(
          wrap,
          { yPercent: 2 },
          {
            yPercent: -7,
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
    <div ref={wrapRef} className="h-full w-full">
      <div ref={floatRef} className="h-full w-full">
        <svg
          viewBox="0 0 1000 1000"
          className="h-full w-full"
          role="img"
          aria-label="The 6FOLIO mark: an extruded hexagonal frame in stone and electric blue, with the 6F monogram at its centre."
        >
          <defs>
            <linearGradient id="six-front" x1="0" y1="0" x2="0.15" y2="1">
              <stop offset="0" stopColor="#ede8dd" />
              <stop offset="0.3" stopColor="#cfc8ba" />
              <stop offset="0.52" stopColor="#9b958a" />
              <stop offset="0.7" stopColor="#7773b8" />
              <stop offset="0.88" stopColor="#2a3bff" />
              <stop offset="1" stopColor="#1a2bff" />
            </linearGradient>
            <linearGradient id="six-text" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f2eee5" />
              <stop offset="0.55" stopColor="#c9c2b4" />
              <stop offset="0.78" stopColor="#7b78c1" />
              <stop offset="1" stopColor="#1a2bff" />
            </linearGradient>
            <radialGradient id="six-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#0a0a0a" stopOpacity="0.3" />
              <stop offset="1" stopColor="#0a0a0a" stopOpacity="0" />
            </radialGradient>
            <filter id="six-speckle">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="9" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.5" />
              </feComponentTransfer>
            </filter>
          </defs>

          <ellipse cx="500" cy="930" rx="330" ry="34" fill="url(#six-shadow)" />

          {Array.from({ length: 30 }).map((_, index) => {
            const depth = 30 - index;
            return (
              <path
                key={`extrude-${index}`}
                d={ring}
                fillRule="evenodd"
                transform={`translate(${depth * 0.85} ${depth * 1.15})`}
                fill={depth > 18 ? "#3a3833" : depth > 8 ? "#2a2925" : "#1d1c19"}
              />
            );
          })}

          <path
            d={ring}
            fillRule="evenodd"
            fill="url(#six-front)"
            stroke="#efeade"
            strokeWidth="2"
          />
          <path
            d={ring}
            fillRule="evenodd"
            filter="url(#six-speckle)"
            opacity="0.55"
          />

          <g transform="translate(14 18)">
            <text
              x="500"
              y="520"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="var(--font-sans)"
              fontSize="300"
              fontWeight="800"
              letterSpacing="-22"
              fill="#2a2925"
            >
              6F
            </text>
          </g>
          <text
            x="500"
            y="520"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="var(--font-sans)"
            fontSize="300"
            fontWeight="800"
            letterSpacing="-22"
            fill="url(#six-text)"
            stroke="#efeade"
            strokeWidth="1.5"
          >
            6F
          </text>

          <rect x="302" y="402" width="16" height="16" fill="#1a2bff" />

          <g
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="4"
            fill="#6f6d66"
          >
            <text x="115" y="990">SIX PERSPECTIVES</text>
            <text x="885" y="990" textAnchor="end">ONE CLEAR DIRECTION</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
