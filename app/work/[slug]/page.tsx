import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectArt from "@/components/project-art";
import { ArrowUpRight } from "@/components/marks";
import { nextProject, projectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) notFound();

  const next = nextProject(slug);

  return (
    <>
      <section className="sheet overflow-hidden">
        <div className="sheet-pad-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/work" className="text-link">
              <span aria-hidden="true">←</span>
              Back to all work
            </Link>
            <span className="rounded-full border border-ink/20 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.09em]">
              {project.status}
            </span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">
                {project.category} / {project.year}
              </p>
              <h1 className="display-xl mt-5 max-w-4xl">{project.title}</h1>
            </div>
            <div className="lg:col-span-4">
              <p className="body-lg max-w-md text-muted">{project.summary}</p>
            </div>
          </div>

          <dl className="mt-12 grid gap-5 border-t border-rule pt-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="eyebrow">Project type</dt>
              <dd className="mt-2 leading-6">{project.category}</dd>
            </div>
            <div>
              <dt className="eyebrow">Services</dt>
              <dd className="mt-2 leading-6">{project.discipline}</dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-2 leading-6">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Status</dt>
              <dd className="mt-2 leading-6">{project.status}</dd>
            </div>
          </dl>
        </div>

        <div className="h-[48vw] max-h-[620px] min-h-[280px] w-full">
          <ProjectArt variant={project.art} />
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <p className="max-w-3xl border-l-2 border-accent pl-4 text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.08em] text-muted">
            {project.statusNote}
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <p className="eyebrow">01 / The brief</p>
              <h2 className="display-md mt-5 lg:sticky lg:top-32">
                {project.detailTitle}
              </h2>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="body-lg">{project.challenge}</p>
              <div className="mt-10 border-t border-rule pt-8">
                <p className="eyebrow">02 / The opportunity</p>
                <p className="body-copy mt-4 max-w-2xl">{project.opportunity}</p>
              </div>
              <div className="mt-10 border-t border-rule pt-8">
                <p className="eyebrow">03 / The direction</p>
                <p className="body-copy mt-4 max-w-2xl">{project.direction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sheet card-blue">
        <div className="sheet-pad-lg">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow eyebrow-on-blue">04 / The work</p>
              <h2 className="display-lg mt-5 max-w-md">
                Small decisions, held to one standard.
              </h2>
              <p className="body-copy mt-5 max-w-sm text-white/75">
                {project.detailIntro}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-2">
                {project.details.map((detail, index) => (
                  <article
                    key={detail.title}
                    className="grid gap-3 border-t border-white/20 py-6 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="text-[0.66rem] font-semibold tracking-[0.08em] text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.35rem] font-medium tracking-[-0.04em] text-white">
                        {detail.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                        {detail.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">05 / The details</p>
            <h2 className="display-md mt-5">What the work contains.</h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-0">
              {project.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="border-t border-rule py-4 text-sm leading-6"
                >
                  {deliverable}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-rule pt-6">
              <p className="eyebrow">06 / Intended measure</p>
              <p className="body-copy mt-4 max-w-xl">{project.intendedMeasure}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <p className="eyebrow">07 / The next project</p>
              <p className="body-copy mt-5 max-w-sm">
                Continue through the studies, or bring us a challenge of your
                own.
              </p>
              <Link href="/contact" className="btn-pill mt-6">
                Start a conversation
                <span className="btn-dot" aria-hidden="true" />
              </Link>
            </div>

            <Link
              href={`/work/${next.slug}`}
              className="project-card group block lg:col-span-7 lg:col-start-6"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-cream">
                <ProjectArt variant={next.art} />
                <span className="absolute left-3 top-3 rounded-full border border-ink/20 bg-sheet/90 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.09em]">
                  {next.status}
                </span>
              </div>
              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">{next.category}</p>
                  <h2 className="mt-2 text-[clamp(1.6rem,2.8vw,2.8rem)] font-medium tracking-[-0.05em] transition-colors group-hover:text-accent">
                    {next.title}
                  </h2>
                </div>
                <ArrowUpRight className="arrow-mark h-6 w-6 shrink-0" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
