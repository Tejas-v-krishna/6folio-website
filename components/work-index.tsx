"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
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
        <div className="shell pb-10 pt-10 md:pb-14 md:pt-16">
          <SplitReveal
            as="h1"
            text="The thinking behind the finished thing."
            className="type-hero mt-8 max-w-6xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            A collection of projects, experiments, and self-initiated studies. Look
            beyond the final image and into the choices that shaped the work.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-10 md:py-14">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter work by service">
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
            <p className="py-20 text-muted">New work is taking shape. Check back soon.</p>
          ) : (
            <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
              {visible.map((project, index) => (
                <div
                  key={project.slug}
                  className={
                    index % 3 === 2
                      ? "md:col-span-12 md:mt-4"
                      : index % 3 === 1
                        ? "md:col-span-6 md:mt-16"
                        : "md:col-span-6"
                  }
                >
                  <ScrollReveal delay={index * 0.06}>
                    <ProjectCard
                      project={project}
                      aspect={
                        index % 3 === 2
                          ? "aspect-[16/10] md:aspect-[2.15/1]"
                          : "aspect-[4/5]"
                      }
                    />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 border-t border-rule pt-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <h2 className="type-h2">Let us look at it from six angles.</h2>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link href="/contact" className="btn btn-primary">
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
