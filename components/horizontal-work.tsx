"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/components/gsap";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/content";

export default function HorizontalWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-rule">
      <div className="shell flex flex-wrap items-end justify-between gap-6 border-b border-rule py-10 md:py-16">
        <h2 className="type-hero">Our work</h2>
        <Link href="/work" className="mono link-underline">
          See all work
        </Link>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 px-6 pb-16 pt-8 md:gap-10 md:px-10 md:pt-10"
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="min-w-[82vw] md:min-w-[74vw] lg:min-w-[70vw]"
          >
            <ProjectCard
              project={project}
              aspect="aspect-[4/5] md:aspect-[5/4]"
              compact
              parallax={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
