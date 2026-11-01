import Link from "next/link";
import ProjectArtwork from "@/components/project-artwork";
import Parallax from "@/components/parallax";
import type { Project } from "@/lib/content";

const surfaces: Record<Project["surface"], string> = {
  orange: "bg-orange text-ink",
  mint: "bg-mint text-ink",
  ink: "bg-ink text-paper",
};

export default function ProjectCard({
  project,
  aspect = "aspect-[4/5] md:aspect-[4/3]",
  compact = false,
  parallax = true,
}: {
  project: Project;
  aspect?: string;
  compact?: boolean;
  parallax?: boolean;
}) {
  const dark = project.surface === "ink";

  return (
    <article className="project-card group">
      <Link href={`/work/${project.slug}`} className="block">
        <div className={`project-surface ${surfaces[project.surface]}`}>
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 p-4 md:p-6">
            <span className={`badge ${dark ? "border-paper/40 text-paper" : ""}`}>
              Concept project
            </span>
          </div>

          <div className={`${aspect} w-full pt-12 md:pt-14`}>
            {parallax ? (
              <Parallax className="h-full w-full" amount={4} scale={1.05}>
                <div className="project-art h-full w-full">
                  <ProjectArtwork
                    variant={project.artwork}
                    scene={0}
                    title={project.title}
                    ariaLabel={`Abstract cover artwork for ${project.title}`}
                    className="h-full w-full"
                  />
                </div>
              </Parallax>
            ) : (
              <div className="project-art h-full w-full">
                <ProjectArtwork
                  variant={project.artwork}
                  scene={0}
                  title={project.title}
                  ariaLabel={`Abstract cover artwork for ${project.title}`}
                  className="h-full w-full"
                />
              </div>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-end p-4 md:p-6">
            <span className="arrow text-2xl leading-none" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>

        <h3 className="type-h3 mt-4 transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        {!compact && (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        )}
      </Link>
    </article>
  );
}
