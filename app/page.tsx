import Link from "next/link";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import ConvergenceGraphic from "@/components/convergence";
import { services, method, perspectives, projects } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="shell pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="label mb-8 flex flex-wrap items-center justify-between gap-3">
            <span>Independent creative growth studio</span>
            <span className="hidden md:inline">Six collaborators. Connected disciplines.</span>
          </div>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <h1 className="display text-[3.4rem] leading-[0.9] sm:text-[4.8rem] md:text-[6.4rem] lg:text-[7.6rem]">
                  Six perspectives.
                  <br />
                  <span className="editorial text-accent">One clear direction.</span>
                </h1>
              </Reveal>
            </div>
            <div className="md:col-span-5 md:pb-3">
              <Reveal delay={120}>
                <p className="text-lg text-ink-soft max-w-md">
                  We bring strategy, content, photography, film, marketing, and digital experience together to help ambitious businesses make their next move with clarity.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/work" className="btn btn-primary">
                    Explore our work
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Tell us what you are building
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-stretch">
            <div className="md:col-span-7">
              <Reveal delay={200}>
                <div className="border border-rule bg-paper-2 p-6 md:p-8">
                  <p className="label mb-4">The idea behind 6FOLIO</p>
                  <p className="display text-2xl md:text-3xl max-w-2xl">
                    A better story needs more than one angle. We bring the thinking, making, and marketing behind a brand into one conversation.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5 h-[260px] md:h-[360px]">
              <Reveal delay={280}>
                <ConvergenceGraphic />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="label mb-4">The idea behind 6FOLIO</p>
            <h2 className="display text-4xl md:text-6xl max-w-3xl">
              One brief. Six ways of looking at it.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft max-w-2xl">
                  A brand is not built in separate pieces. The words affect the visuals. The visuals shape the campaign. The campaign leads people to an experience. The experience decides whether they stay, enquire, or leave.
                </p>
                <p className="mt-5 text-muted max-w-2xl">
                  We bring the people behind those decisions into the same conversation. That means fewer disconnected outputs and more thought behind how everything fits together.
                </p>
                <Link href="/about" className="link-underline label mt-8 inline-block">
                  Get to know the team
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label mb-4">Selected work</p>
                <h2 className="display text-4xl md:text-6xl">
                  Made with intent.
                  <br />
                  Built around the brief.
                </h2>
              </div>
              <p className="max-w-md text-muted">
                A look at the ideas, decisions, and craft behind our work. Each project begins with a different challenge. The common thread is a clear reason for every choice.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <ProjectCard project={projects[0]} />
              </Reveal>
            </div>
            <div className="md:col-span-5 md:mt-24">
              <Reveal delay={120}>
                <ProjectCard project={projects[1]} />
              </Reveal>
            </div>
            <div className="md:col-span-8 md:col-start-3">
              <Reveal delay={200}>
                <ProjectCard project={projects[2]} />
              </Reveal>
            </div>
          </div>
          <div className="mt-14">
            <Link href="/work" className="btn btn-secondary">See all work</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="label mb-4">What we bring to the table</p>
            <h2 className="display text-4xl md:text-6xl max-w-3xl">
              Six disciplines. One connected process.
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              We do not treat each service as an isolated hand-off. We look at the full journey, then bring in the right mix of people to move the work forward.
            </p>
          </Reveal>
          <ol className="mt-14 border-t border-rule">
            {services.map((service, index) => (
              <Reveal key={service.slug} as="li" className="border-b border-rule py-8 md:py-10" delay={index * 60}>
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-2">
                    <span className="display text-4xl md:text-5xl text-muted">{service.index}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="display text-2xl md:text-3xl">{service.title}</h3>
                    <p className="mt-2 text-ink font-medium">{service.purpose}</p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted">{service.summary}</p>
                    <p className="label mt-4">Typical work</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {service.deliverables.slice(0, 4).join(", ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10">
            <Link href="/services" className="btn btn-secondary">
              Talk through a project
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="label mb-4">How we work</p>
            <h2 className="display text-4xl md:text-6xl max-w-3xl">
              Six perspectives, moving in one direction.
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              A strong result starts before the first design or campaign goes live. We use a shared process to keep the business goal, creative decisions, and delivery connected.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px border-t border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
            {method.map((stage, index) => (
              <Reveal key={stage.name} className="bg-paper p-6 md:p-8" delay={index * 60}>
                <div className="flex items-baseline justify-between">
                  <span className="display text-3xl text-muted">{stage.index}</span>
                  <span className="label">{stage.name}</span>
                </div>
                <h3 className="display text-2xl mt-6">{stage.headline}</h3>
                <p className="mt-4 text-muted text-sm">{stage.description}</p>
                <p className="label mt-6">Output</p>
                <p className="mt-1 text-sm text-ink-soft">{stage.output}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Not every project needs all six stages or all six disciplines. We shape the team and process around the brief.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="label mb-4">A team of different minds</p>
            <h2 className="display text-4xl md:text-6xl max-w-3xl">
              We work better when the perspectives meet.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft">
                  We are six collaborators with different skills and a shared respect for good work. Our size keeps the conversations close. Our mix of disciplines lets us look beyond a single deliverable and consider the experience around it.
                </p>
                <p className="mt-5 text-muted">
                  We like clear briefs, honest conversations, considered decisions, and work that earns its place.
                </p>
                <Link href="/about" className="btn btn-secondary mt-8">
                  Meet 6FOLIO
                </Link>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-px bg-rule border border-rule">
                {perspectives.map((perspective, index) => (
                  <Reveal key={perspective.name} className="bg-paper p-5 md:p-6" delay={index * 50}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="display text-xl text-muted">{perspective.index}</span>
                      <span className="label text-right">{perspective.name}</span>
                    </div>
                    <p className="mt-3 text-sm text-ink-soft">{perspective.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="label text-paper/60 mb-4">Have something in mind?</p>
            <h2 className="display text-4xl md:text-6xl max-w-3xl text-paper">
              Tell us where you want to go.
            </h2>
            <p className="mt-6 max-w-xl text-paper/70">
              A new brand, a sharper digital presence, a campaign that needs a stronger idea, or a growth problem that needs a closer look. Tell us what is happening. We will help work out what should happen next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn bg-paper text-ink border-paper hover:bg-accent hover:text-paper hover:border-accent"
              >
                Start a conversation
              </Link>
            </div>
            <p className="label mt-6 text-paper/50">No prepared pitch needed. A clear first conversation is enough.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
