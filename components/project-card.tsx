import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectArt from "@/components/project-art";

export default function ProjectCard({
  project,
  aspect = "wide",
  className = "",
}: {
  project: Project;
  aspect?: "wide" | "portrait" | "landscape";
  className?: string;
}) {
  const aspectClass = {
    wide: "aspect-[4/3]",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[16/9]",
  }[aspect];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`project-card block ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-[18px] border border-ink/10 ${aspectClass}`}
      >
        <ProjectArt variant={project.art} className="h-full w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.09em] text-sheet">
          {project.status}
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-muted">
            <span>{project.category}</span>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
          </div>
          <h3 className="project-title mt-2 text-[clamp(1.45rem,2.2vw,2.1rem)] font-medium tracking-[-0.05em] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            {project.summary}
          </p>
        </div>
        <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-muted sm:block">
          View project
        </span>
      </div>
    </Link>
  );
}
