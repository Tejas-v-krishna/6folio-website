import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";
import ProjectCard from "@/components/project-card";
import CtaBand from "@/components/cta-band";
import { ArrowUpRight } from "@/components/marks";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work and self-initiated concept studies by 6FOLIO, showing how strategy, content, production, marketing, and digital experience connect.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        tone="blue"
        eyebrow="Selected work and studies"
        title="The thinking behind the finished thing."
        description="A collection of projects, experiments, and self-initiated studies. Look beyond the final image and into the choices that shaped the work."
      >
        <p className="mt-6 max-w-sm border-t border-white/25 pt-4 text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.09em] text-white/70">
          Every project on this page is an independent concept study by 6FOLIO.
          No client engagements are implied.
        </p>
      </PageIntro>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="flex items-end justify-between gap-6 border-b border-rule pb-5">
            <p className="eyebrow">The index</p>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.09em] text-muted">
              {String(projects.length).padStart(2, "0")} studies
            </p>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-x-6">
            <ProjectCard project={projects[0]} className="lg:col-span-7" />
            <ProjectCard
              project={projects[1]}
              aspect="portrait"
              className="lg:col-span-5 lg:mt-24"
            />
            <div className="lg:col-span-4 lg:col-start-2 lg:self-end">
              <p className="text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.09em] text-muted">
                Different categories
                <br />
                One connected approach
              </p>
            </div>
            <ProjectCard
              project={projects[2]}
              aspect="wide"
              className="lg:col-span-7"
            />
          </div>
        </div>
      </section>

      <section className="sheet card-blue">
        <div className="sheet-pad-lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-on-blue">A working principle</p>
              <h2 className="display-md mt-5 max-w-3xl">
                A concept can still be rigorous. It can still show judgement,
                craft, and a clear reason for every choice.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="body-copy body-copy-on-blue">
                We use concept work to test ideas, explore a category, and show
                how our disciplines connect. It is always labelled honestly so
                the thinking is clear.
              </p>
              <Link href="/contact" className="text-link mt-5 text-white">
                Talk through a brief
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a challenge of your own?"
        body="Let us look at it from six angles. Bring the problem, the ambition, or the unfinished thought. We can help find the shape of the next move."
      />
    </>
  );
}
