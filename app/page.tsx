import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import Marquee from "@/components/marquee";
import Manifesto from "@/components/manifesto";
import Accordion from "@/components/accordion";
import StudioCard from "@/components/studio-card";
import HorizontalWork from "@/components/horizontal-work";
import Magnetic from "@/components/magnetic";
import HeroMark3D from "@/components/hero-mark-3d";
import { services, questions, studioFacts, notes } from "@/lib/content";

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
        <div
          className="pointer-events-none absolute inset-3 z-10 border border-accent/35 md:inset-4"
          aria-hidden="true"
        />

        <div className="shell relative flex min-h-[68svh] flex-col justify-between pb-8 pt-8 md:min-h-[76svh] md:pb-10 md:pt-10">
          <div className="relative z-20">
            <span className="type-mega flex items-start">
              6FOLIO
              <sup className="mt-[0.35em] ml-1 text-[0.16em] font-normal tracking-normal">
                ™
              </sup>
            </span>
          </div>

          <div className="relative z-10 flex flex-1 items-center justify-center py-4 md:py-0">
            <div className="h-[26vh] w-full max-w-[420px] md:h-[38vh] md:max-w-[560px]">
              <HeroMark3D />
            </div>
          </div>

          <div className="relative z-20 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-sm">
              <p className="type-body-lg text-ink-soft">
                We turn ambitious ideas into brands, products, and digital experiences
                people believe in.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Magnetic strength={0.25} className="inline-block">
                  <Link href="/contact" className="btn btn-primary">
                    Build with us
                  </Link>
                </Magnetic>
                <Magnetic strength={0.25} className="inline-block">
                  <Link href="/work" className="btn btn-secondary">
                    Explore our work
                  </Link>
                </Magnetic>
              </div>
            </div>

            <div className="w-full md:w-[280px]">
              <StudioCard />
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
                connecting strategy, brand, content, production, marketing, and digital
                experience. A brand is not built in separate pieces. The words affect the
                visuals, the visuals shape the campaign, and the campaign leads people to
                an experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted">
                We bring the people behind those decisions into the same conversation.
                That means fewer disconnected outputs and more thought behind how
                everything fits together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <HorizontalWork />

      <Manifesto items={manifestoItems} />

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
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
                    <h3 className="type-h4 md:col-span-4">{fact.title}</h3>
                    <p className="text-sm leading-relaxed text-muted md:col-span-8">
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
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
            <SplitReveal as="h2" text="Notes from the studio." className="type-h2" />
            <Link href="/notes" className="mono link-underline">
              Read all notes
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {notes.map((note, index) => (
              <ScrollReveal key={note.slug} delay={index * 0.06}>
                <Link href={`/notes/${note.slug}`} className="group block border-t border-rule pt-5">
                  <p className="mono">
                    {note.date} / {note.readingTime}
                  </p>
                  <h3 className="type-h3 mt-4 transition-colors group-hover:text-accent">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {note.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
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
