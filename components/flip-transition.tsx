"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/components/gsap";

export default function FlipTransition({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const raw = window.sessionStorage.getItem("flipState");
    if (!raw) return;

    let state: { slug: string; top: number; left: number; width: number; height: number } | null = null;
    try {
      state = JSON.parse(raw);
    } catch {
      window.sessionStorage.removeItem("flipState");
      return;
    }
    window.sessionStorage.removeItem("flipState");

    if (!state || state.slug !== slug) return;

    const container = containerRef.current;
    if (!container) return;

    const cover = container.firstElementChild as HTMLElement | null;
    if (!cover) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finalRect = cover.getBoundingClientRect();

    const clone = cover.cloneNode(true) as HTMLElement;
    clone.style.position = "fixed";
    clone.style.top = `${state.top}px`;
    clone.style.left = `${state.left}px`;
    clone.style.width = `${state.width}px`;
    clone.style.height = `${state.height}px`;
    clone.style.zIndex = "60";
    clone.style.pointerEvents = "none";
    clone.style.overflow = "hidden";
    clone.style.margin = "0";
    document.body.appendChild(clone);

    cover.style.opacity = "0";

    const fallback = window.setTimeout(() => {
      clone.remove();
      cover.style.opacity = "1";
    }, 1200);

    gsap.to(clone, {
      top: finalRect.top,
      left: finalRect.left,
      width: finalRect.width,
      height: finalRect.height,
      duration: 0.65,
      ease: "power3.inOut",
      onComplete: () => {
        window.clearTimeout(fallback);
        clone.remove();
        cover.style.opacity = "1";
      },
    });

    return () => {
      window.clearTimeout(fallback);
      clone.remove();
      cover.style.opacity = "1";
    };
  }, [slug]);

  return <div ref={containerRef}>{children}</div>;
}
