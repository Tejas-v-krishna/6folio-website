import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import ProjectArtwork from "@/components/project-artwork";
import { getProject, getNextProject, projects } from "@/lib/content";
import { siteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${siteUrl()}/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pt-12 pb-10 md:pt-20 md:pb-16">
          <Link href="/work" className="label link-underline">
            Back to all work
          </Link>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="label mb-4">{project.label}</p>
                <h1 className="display text-4xl md:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg text-ink-soft max-w-2xl">
                  {project.description}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={120}>
                <dl className="border-t border-rule">
                  {[
                    ["Project type", project.type],
                    ["Industry", project.industry],
                    ["Year", project.year],
                    ["Services", project.services.join(", ")],
                  ].map(([term, value]) => (
                    <div
                      key={term}
                      className="grid grid-cols-2 gap-4 border-b border-rule py-3"
                    >
                      <dt className="label">{term}</dt>
                      <dd className="text-sm text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-8 md:py-12">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <ProjectArtwork
              variant={project.artwork}
              scene={0}
              title={project.title}
              ariaLabel={`Cover artwork for ${project.title}`}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="label mb-3">01. The brief</p>
                <h2 className="display text-3xl md:text-4xl">What needed solving.</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft">{project.brief}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="label mb-3">02. The opportunity</p>
                <h2 className="display text-3xl md:text-4xl">What we noticed.</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft">{project.opportunity}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="label mb-3">03. The direction</p>
                <h2 className="display text-3xl md:text-4xl">The decisions behind the work.</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft">{project.direction}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-paper-2">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="label mb-3">04. The work</p>
            <h2 className="display text-3xl md:text-4xl">Outputs of the concept.</h2>
            <p className="mt-6 max-w-2xl text-muted">{project.work}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {project.gallery.map((item, index) => (
              <Reveal key={item.caption} delay={index * 80}>
                <div className="aspect-[4/3]">
                  <ProjectArtwork
                    variant={project.artwork}
                    scene={item.scene}
                    title={project.title}
                    ariaLabel={item.caption}
                    className="h-full w-full"
                  />
                </div>
                <p className="mt-3 text-sm text-muted">{item.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="label mb-3">05. The details</p>
            <h2 className="display text-3xl md:text-4xl">Meaningful decisions.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {project.details.map((detail, index) => (
              <Reveal key={detail.title} delay={index * 80}>
                <div className="border-t border-rule pt-6">
                  <h3 className="display text-2xl">{detail.title}</h3>
                  <p className="mt-4 text-muted">{detail.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="label mb-3">06. The outcome or intended measure</p>
                <h2 className="display text-3xl md:text-4xl">How it would be judged.</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft">{project.measure}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-ink text-paper">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="label text-paper/60 mb-3">07. The next project</p>
              <h2 className="display text-3xl md:text-4xl text-paper">
                Have a challenge of your own? Let us look at it from six angles.
              </h2>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact" className="btn bg-paper text-ink border-paper hover:bg-accent hover:text-paper hover:border-accent">
                Start a conversation
              </Link>
              <Link
                href={`/work/${nextProject.slug}`}
                className="btn border-paper text-paper hover:bg-paper hover:text-ink"
              >
                Next: {nextProject.title}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
