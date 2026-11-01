"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/components/gsap";

export type ManifestoItem = {
  index: string;
  label: string;
  title: string;
  short: string;
  description: string;
};

export default function Manifesto({ items }: { items: ManifestoItem[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!section || !track || !viewport) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => Math.max(0, track.scrollHeight - viewport.clientHeight);

        const tween = gsap.to(track, {
          y: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(0, track.scrollHeight - viewport.clientHeight)}`,
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = Math.min(
                items.length - 1,
                Math.floor(self.progress * items.length + 0.0001)
              );
              setActive((current) => (current === index ? current : index));
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: sectionRef, dependencies: [items.length] }
  );

  return (
    <section ref={sectionRef} className="relative bg-ink text-paper">
      <div className="shell flex min-h-[100svh] flex-col justify-center py-16 md:py-20">
        <div className="grid flex-1 items-center gap-8 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="border border-white/15 p-5">
              <p className="type-h4 text-paper">{items[active].short}</p>
              <p className="mt-4 text-sm leading-relaxed text-paper/55">
                {items[active].description}
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-9">
            <div ref={viewportRef} className="manifesto-viewport h-[54vh] overflow-hidden md:h-[64vh]">
              <div ref={trackRef}>
                {items.map((item, index) => (
                  <div
                    key={item.index}
                    className="manifesto-item flex h-[54vh] flex-col justify-center md:h-[64vh]"
                    data-active={index === active}
                  >
                    <h2 className="manifesto-word">{item.title}</h2>
                    <p className="mt-5 max-w-lg text-sm text-paper/55 md:text-base">
                      {item.short}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
