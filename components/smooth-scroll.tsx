"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import {
  SCROLL_LOCK_EVENT,
  type ScrollLockDetail,
} from "@/lib/scroll-lock";

function scrollToLocation(lenis: Lenis, smooth: boolean) {
  lenis.resize();

  const hash = window.location.hash;
  if (hash) {
    const id = decodeURIComponent(hash.slice(1));
    if (id && document.getElementById(id)) {
      lenis.scrollTo(`#${id}`, smooth ? { duration: 1.1 } : { immediate: true });
      return;
    }
  }

  lenis.scrollTo(0, { immediate: true });
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const lockedRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let disposed = false;
    let frame = 0;

    const onScrollLock = (event: Event) => {
      const locked = (event as CustomEvent<ScrollLockDetail>).detail?.locked;
      lockedRef.current = Boolean(locked);

      const lenis = lenisRef.current;
      if (!lenis) return;

      if (locked) lenis.stop();
      else lenis.start();
    };

    window.addEventListener(SCROLL_LOCK_EVENT, onScrollLock);

    const init = () => {
      if (disposed || lenisRef.current) return;

      const lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.1,
        anchors: { duration: 1.1 },
        respectReducedMotion: true,
      });

      lenisRef.current = lenis;

      if (lockedRef.current) {
        lenis.stop();
      }

      frame = requestAnimationFrame(() => {
        if (!disposed) scrollToLocation(lenis, false);
      });
    };

    const onReveal = () => {
      requestAnimationFrame(() => init());
    };

    const preloader = document.querySelector(".ascii-preloader");
    const preloaderSkipped = document.documentElement.classList.contains(
      "preloaded",
    );

    if (preloader && !preloaderSkipped) {
      window.addEventListener("6folio:revealed", onReveal, { once: true });
    } else {
      init();
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener(SCROLL_LOCK_EVENT, onScrollLock);
      window.removeEventListener("6folio:revealed", onReveal);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const frame = requestAnimationFrame(() => {
      scrollToLocation(lenis, true);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
