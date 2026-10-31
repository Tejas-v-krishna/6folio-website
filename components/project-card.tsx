import Link from "next/link";
import ProjectArtwork from "@/components/project-artwork";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] md:aspect-[5/4]">
          <ProjectArtwork
            variant={project.artwork}
            scene={0}
            title={project.title}
            ariaLabel={`Cover artwork for ${project.title}`}
            className="h-full w-full"
          />
          <div className="absolute left-4 top-4">
            <span className="badge badge-concept">Concept project</span>
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="label mb-2">
              {project.category} / {project.industry}
            </p>
            <h3 className="display text-2xl md:text-3xl transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </div>
          <span className="label link-underline mt-2 shrink-0">View project</span>
        </div>
        <p className="mt-3 text-muted max-w-prose">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <li key={service} className="badge">
              {service}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
