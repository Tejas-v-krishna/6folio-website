"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, useGSAP } from "@/components/gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            immediateRender: false,
          }
        );
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
