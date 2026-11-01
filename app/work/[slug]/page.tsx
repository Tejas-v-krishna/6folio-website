import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import Parallax from "@/components/parallax";
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
        <div className="shell pb-12 pt-8 md:pb-16 md:pt-12">
          <Link href="/work" className="mono link-underline">
            Back to all work
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mono">
                {project.label} / {project.year}
              </p>
              <SplitReveal
                as="h1"
                text={project.title}
                className="type-hero mt-4"
                type="lines"
                scroll={false}
              />
              <p className="type-body-lg mt-6 max-w-2xl text-muted">
                {project.description}
              </p>
            </div>

            <div className="md:col-span-4">
              <dl className="border-t border-rule">
                {[
                  ["Project type", project.type],
                  ["Industry", project.industry],
                  ["Services", project.services.join(", ")],
                  ["Label", "Independent concept project by 6FOLIO"],
                ].map(([term, value]) => (
                  <div key={term} className="grid grid-cols-2 gap-4 border-b border-rule py-3">
                    <dt className="mono">{term}</dt>
                    <dd className="text-sm leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-rule">
        <div className="h-[52vh] md:h-[72vh]">
          <Parallax className="h-full" amount={7} scale={1.14}>
            <ProjectArtwork
              variant={project.artwork}
              scene={0}
              title={project.title}
              ariaLabel={`Cover artwork for ${project.title}`}
              className="h-full w-full"
            />
          </Parallax>
        </div>
      </section>

      <section className="border-b border-rule bg-ink text-paper">
        <div className="shell py-16 md:py-24">
          <p className="mono text-paper/50">The central idea</p>
          <SplitReveal
            as="p"
            text={project.principle}
            className="type-hero mt-4 text-paper"
            type="lines"
          />
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell space-y-16 py-16 md:space-y-24 md:py-24">
          <SectionBlock number="01" title="The brief">
            <p className="type-body-lg text-ink-soft">{project.brief}</p>
          </SectionBlock>

          <SectionBlock number="02" title="The opportunity">
            <p className="type-body-lg text-ink-soft">{project.opportunity}</p>
          </SectionBlock>

          <SectionBlock number="03" title="The direction">
            <p className="type-body-lg text-ink-soft">{project.direction}</p>
          </SectionBlock>

          <SectionBlock number="04" title="The work">
            <p className="max-w-2xl text-muted">{project.work}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {project.gallery.map((item, index) => (
                <ScrollReveal key={item.caption} delay={index * 0.06}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <ProjectArtwork
                      variant={project.artwork}
                      scene={item.scene}
                      title={project.title}
                      ariaLabel={item.caption}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="mono mt-3 leading-relaxed">{item.caption}</p>
                </ScrollReveal>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock number="05" title="The details">
            <div className="grid gap-8 md:grid-cols-3">
              {project.details.map((detail, index) => (
                <ScrollReveal key={detail.title} delay={index * 0.06}>
                  <div className="border-t border-rule pt-5">
                    <h3 className="type-h4">{detail.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {detail.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock number="06" title="The outcome or intended measure">
            <p className="type-body-lg text-ink-soft">{project.measure}</p>
          </SectionBlock>
        </div>
      </section>

      <section className="bg-accent text-paper">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mono text-paper/60">07 / The next project</p>
              <p className="type-h2 mt-4 text-paper">
                Have a challenge of your own? Let us look at it from six angles.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Link href="/contact" className="btn btn-light">
                Start a conversation
              </Link>
              <Link
                href={`/work/${nextProject.slug}`}
                className="btn border-paper/40 text-paper hover:bg-paper hover:text-ink"
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

function SectionBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <div className="md:sticky md:top-20">
          <p className="mono">{number}</p>
          <h2 className="type-h3 mt-2">{title}</h2>
        </div>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}
