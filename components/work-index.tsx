"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import { projects } from "@/lib/content";

const filters = ["All", "Brand", "Content", "Production", "Social", "Growth", "Digital"];

function matches(project: (typeof projects)[number], filter: string) {
  if (filter === "All") return true;
  const map: Record<string, string[]> = {
    Brand: ["Brand direction"],
    Content: ["Content and storytelling"],
    Production: ["Photography and film"],
    Social: ["Social and community"],
    Growth: ["Marketing and growth"],
    Digital: ["Web and digital experience"],
  };
  return (map[filter] ?? []).some((service) => project.services.includes(service));
}

export default function WorkIndex() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => projects.filter((project) => matches(project, active)), [active]);

  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="label mb-4">Selected work and studies</p>
            <h1 className="display text-4xl md:text-6xl max-w-3xl">
              The thinking behind the finished thing.
            </h1>
            <p className="mt-6 max-w-2xl text-muted">
              A collection of projects, experiments, and self-initiated studies. Look beyond the final image and into the choices that shaped the work.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="shell py-12 md:py-16">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter work by service">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="chip"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-16 text-muted">New work is taking shape. Check back soon.</p>
          ) : (
            <div className="mt-12 grid gap-10 md:grid-cols-12">
              {visible.map((project, index) => (
                <div
                  key={project.slug}
                  className={
                    index === 0
                      ? "md:col-span-7"
                      : index === 1
                        ? "md:col-span-5 md:mt-16"
                        : "md:col-span-8 md:col-start-3"
                  }
                >
                  <Reveal delay={index * 80}>
                    <ProjectCard project={project} />
                  </Reveal>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 border-t border-rule pt-12">
            <p className="label mb-3">Have a challenge of your own?</p>
            <h2 className="display text-3xl md:text-4xl">
              Let us look at it from six angles.
            </h2>
            <Link href="/contact" className="btn btn-secondary mt-6">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
