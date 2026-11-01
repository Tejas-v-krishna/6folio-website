import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import Marquee from "@/components/marquee";
import Manifesto from "@/components/manifesto";
import Accordion from "@/components/accordion";
import HeroSculpture from "@/components/hero-sculpture";
import ProjectCard from "@/components/project-card";
import { services, projects, questions, studioFacts } from "@/lib/content";

const manifestoItems = services.map((service) => ({
  index: service.index,
  label: service.shortTitle,
  title: service.title,
  short: service.purpose,
  description: service.summary,
}));

export default function HomePage() {
  return (
    <main>
      <h1 className="visually-hidden">
        6FOLIO, an independent creative growth studio. Six perspectives, one clear direction.
      </h1>

      <section className="relative overflow-hidden border-b border-rule">
        <div className="shell pb-10 pt-6 md:pb-14 md:pt-10">
          <div className="flex items-center justify-between gap-4 border-b border-rule pb-3">
            <span className="mono">Independent creative growth studio</span>
            <span className="mono hidden md:block">Scroll to explore</span>
            <span className="mono">2026</span>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-12 md:items-center md:pt-10">
            <div className="order-2 md:order-1 md:col-span-3">
              <p className="mono leading-relaxed">
                We build brands people notice, content people remember, and digital
                experiences that move business forward.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/work" className="btn btn-primary">
                  Explore our work
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Start a project
                </Link>
              </div>
              <p className="mono mt-6">Six collaborators. Connected disciplines.</p>
            </div>

            <div className="order-1 h-[44vh] md:order-2 md:col-span-6 md:h-[64vh]">
              <HeroSculpture />
            </div>

            <div className="order-3 md:col-span-3">
              <div className="border border-rule p-4">
                <p className="mono">Studio note / 001</p>
                <p className="type-h4 mt-4">Six perspectives. One clear direction.</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Strategy, content, image, motion, growth, and digital experience
                  working from one brief.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-rule pt-3">
                <span className="mono">01 / 06</span>
                <span className="mono">Independent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule py-3 md:py-4">
        <Marquee
          items={[
            "Brand direction",
            "Content and storytelling",
            "Photography and film",
            "Social and community",
            "Marketing and growth",
            "Web and digital experience",
          ]}
        />
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="mono">The studio / 01</p>
            </div>
            <div className="md:col-span-9">
              <SplitReveal
                as="h2"
                text="One brief. Six ways of looking at it."
                className="type-h2 max-w-4xl text-balance"
                type="lines"
              />
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <ScrollReveal>
                  <p className="type-body-lg text-ink-soft">
                    6FOLIO is an{" "}
                    <span className="text-accent">independent creative growth studio</span>{" "}
                    connecting strategy, brand, content, production, marketing, and
                    digital experience. A brand is not built in separate pieces. The words
                    affect the visuals, the visuals shape the campaign, and the campaign
                    leads people to an experience.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-muted">
                    We bring the people behind those decisions into the same
                    conversation. That means fewer disconnected outputs and more
                    thought behind how everything fits together.
                  </p>
                  <Link href="/about" className="mono link-underline mt-6 inline-block">
                    About the studio
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
            <div>
              <p className="mono mb-3">Selected work / 02</p>
              <SplitReveal as="h2" text="Our work" className="type-hero" />
            </div>
            <Link href="/work" className="mono link-underline">
              See all work (03)
            </Link>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <ProjectCard project={projects[0]} index={0} aspect="aspect-[4/5]" />
            </div>
            <div className="md:col-span-6 md:mt-20">
              <ProjectCard project={projects[1]} index={1} aspect="aspect-[4/5]" />
            </div>
            <div className="md:col-span-12 md:mt-4">
              <ProjectCard
                project={projects[2]}
                index={2}
                aspect="aspect-[16/10] md:aspect-[2.15/1]"
              />
            </div>
          </div>

          <p className="mono mt-8 max-w-lg leading-relaxed">
            All three projects are independent concept studies by 6FOLIO. No client
            relationship or measured result is implied.
          </p>
        </div>
      </section>

      <Manifesto
        items={manifestoItems}
        eyebrow="What we do / 03"
        note="Six disciplines. One connected process."
      />

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="mono mb-3">The studio / 04</p>
              <SplitReveal
                as="h2"
                text="New studio. Not new to this."
                className="type-h2"
              />
              <p className="mt-6 max-w-sm text-muted">
                We are building 6FOLIO around a simple belief: the best work happens
                when different perspectives share the same brief and the same standard.
              </p>
              <Link href="/about" className="btn btn-secondary mt-7">
                Meet the team
              </Link>
            </div>

            <div className="md:col-span-8">
              <div className="border-t border-rule">
                {studioFacts.map((fact, index) => (
                  <ScrollReveal
                    key={fact.title}
                    className="grid gap-3 border-b border-rule py-5 md:grid-cols-12 md:items-baseline md:gap-4"
                    delay={index * 0.05}
                  >
                    <span className="mono md:col-span-1">0{index + 1}</span>
                    <h3 className="type-h4 md:col-span-4">{fact.title}</h3>
                    <p className="text-sm leading-relaxed text-muted md:col-span-7">
                      {fact.description}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="mono mb-3">Before we work together / 05</p>
              <SplitReveal
                as="h2"
                text="Questions worth asking."
                className="type-h2"
              />
              <p className="mt-6 max-w-sm text-muted">
                A good first conversation is more useful than a polished pitch. These
                are the questions we start with.
              </p>
            </div>

            <div className="md:col-span-8">
              <Accordion
                defaultOpen="change"
                items={questions.map((question) => ({
                  id: question.id,
                  title: question.question,
                  meta: "Q",
                  content: <p className="max-w-2xl text-muted">{question.answer}</p>,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-20 md:py-28">
          <SplitReveal
            as="h2"
            text="Tell us where you want to go."
            className="type-hero max-w-5xl"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="type-body-lg max-w-xl text-muted md:col-span-7">
              A new brand, a sharper digital presence, a campaign that needs a stronger
              idea, or a growth problem that needs a closer look. Tell us what is
              happening. We will help work out what should happen next.
            </p>
            <div className="flex md:col-span-5 md:justify-end">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
