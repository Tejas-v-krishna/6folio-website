import Link from "next/link";
import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import HomeHero from "@/components/home-hero";
import MethodAscii from "@/components/method-ascii";
import MethodIcon from "@/components/method-icon";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import WhySection from "@/components/why-section";
import { ArrowUpRight } from "@/components/marks";
import { SixFPattern } from "@/components/six-f";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { method } from "@/content/studio";

export const metadata: Metadata = {
  title: "Six perspectives. One clear direction.",
  description:
    "6FOLIO brings strategy, content, photography, film, marketing, and digital experience together around one clear business objective.",
};

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Ambitious businesses that need a clearer identity, a stronger story, better content, or a more useful digital experience. The work fits best when there is a real problem to solve and access to the people who make decisions.",
  },
  {
    question: "Do we have to use all six disciplines?",
    answer:
      "No. The six perspectives are how we think, not a package you have to buy. We shape the team and scope around the brief, then bring in the disciplines that the work actually needs.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. We can lead a full project, join an existing team for a focused stage, or work alongside your internal designers, developers, or marketers. The point is to keep the thinking connected.",
  },
  {
    question: "How does a project start?",
    answer:
      "With a conversation. Tell us what is happening, what you are trying to change, and what you have already tried. We will work out whether there is a useful next step before either side commits to a scope.",
  },
  {
    question: "Is the work on this site real client work?",
    answer:
      "The projects shown are self-initiated concept studies by 6FOLIO. They are labelled clearly and are not presented as client engagements or measured results.",
  },
];

const methodSteps = [
  { ...method[0], icon: "listen" as const },
  { ...method[1], icon: "focus" as const },
  { ...method[2], icon: "shape" as const },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <WhySection />

      <Reveal delay={140}>
        <section className="sheet">
          <div className="sheet-pad-lg">
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">How it works</p>
              <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
                A simple rhythm. A joined-up result.
              </h2>
              <p className="body-copy mx-auto mt-4 max-w-xl">
                Not every project needs all six stages. The process changes
                around the brief. The clarity does not.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-[1100px] overflow-hidden rounded-[26px] border-2 border-accent bg-white">
              <div className="grid md:grid-cols-[0.45fr_0.55fr]">
                <div className="relative flex min-h-[520px] flex-col bg-[linear-gradient(155deg,#0c27c2_0%,#1636f8_58%,#2450ff_100%)] p-6 text-white md:p-8">
                  <div>
                    <h3 className="max-w-[22ch] text-[1.4rem] font-semibold leading-tight tracking-[-0.04em] md:text-[1.55rem]">
                      One process, six perspectives.
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-[0.9rem] leading-6 text-white/75">
                      The six disciplines stay in the same conversation, from
                      the first question to the final handover.
                    </p>
                  </div>

                  <div className="relative flex flex-1 items-center justify-center py-7">
                    <div
                      aria-hidden="true"
                      className="absolute h-56 w-56 rounded-full bg-white/10 blur-3xl"
                    />
                    <MethodAscii className="relative h-auto w-full max-w-[360px]" />
                  </div>

                  <div className="rounded-[12px] bg-[#06133d] px-4 py-3.5 font-mono text-[10.5px] leading-[1.7] text-[#a9c6ff] shadow-[0_12px_30px_rgba(2,9,35,0.25)]">
                    <p className="whitespace-nowrap">
                      <span className="text-white/70">01</span> listen{" "}
                      <span className="text-white/25">·</span>{" "}
                      <span className="text-white/70">02</span> focus{" "}
                      <span className="text-white/25">·</span>{" "}
                      <span className="text-white/70">03</span> shape
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="text-white/70">04</span> make{" "}
                      <span className="text-white/25">·</span>{" "}
                      <span className="text-white/70">05</span> launch{" "}
                      <span className="text-white/25">·</span>{" "}
                      <span className="text-white/70">06</span> learn
                    </p>
                  </div>
                </div>

                <div className="grid auto-rows-fr gap-3 bg-white p-3">
                  {methodSteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex flex-col justify-between rounded-[16px] border border-accent/50 bg-white p-5 md:p-6"
                    >
                      <MethodIcon
                        name={step.icon}
                        className="h-6 w-6 text-accent"
                      />
                      <div className="mt-7">
                        <h3 className="text-[1.1rem] font-semibold tracking-[-0.03em] text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[0.84rem] leading-6 text-muted">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/approach" className="text-link">
                See the full six-stage process
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section className="sheet">
          <div className="sheet-pad-lg">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="badge-icon" aria-hidden="true">
                    6
                  </span>
                  <p className="eyebrow">Selected work</p>
                </div>
                <h2 className="display-lg mt-5 max-w-2xl">
                  Made with intent. Built around the brief.
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="body-copy">
                  A look at the ideas, decisions, and craft behind the work.
                  Every project starts with a different challenge.
                </p>
                <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-muted">
                  All work shown is self-initiated concept work
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-x-6">
              <ProjectCard project={projects[0]} className="lg:col-span-7" />
              <ProjectCard
                project={projects[1]}
                aspect="portrait"
                className="lg:col-span-5 lg:mt-24"
              />
              <ProjectCard
                project={projects[2]}
                aspect="wide"
                className="lg:col-span-8 lg:col-start-4"
              />
            </div>

            <div className="mt-12">
              <Link href="/work" className="btn-pill">
                See all work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={260}>
        <section className="sheet">
          <div className="sheet-pad-lg">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="badge-icon" aria-hidden="true">
                    6
                  </span>
                  <p className="eyebrow">What we bring</p>
                </div>
                <h2 className="display-lg mt-5 max-w-2xl">
                  Six disciplines. One connected process.
                </h2>
              </div>
              <p className="body-copy max-w-md lg:col-span-4 lg:col-start-9">
                We do not treat each service as an isolated hand-off. We look at
                the full journey, then bring in the right mix of people to move
                the work forward.
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <Link
                  key={service.number}
                  href={`/services#service-${service.number}`}
                  className="feature-card group p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="badge-icon" aria-hidden="true">
                      {service.number}
                    </span>
                    <ArrowUpRight className="arrow-mark h-4 w-4 text-muted" />
                  </div>
                  <h3 className="mt-6 text-[1.25rem] font-semibold tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="body-copy mt-2">{service.strapline}</p>
                </Link>
              ))}
            </div>

            <div className="mt-7">
              <Link href="/services" className="text-link">
                Explore all six services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={320}>
        <section className="sheet bg-[#eef1ff]">
          <SixFPattern id="stats-pattern" className="absolute right-0 top-0 h-full w-[34%] opacity-[0.06]" />
          <div className="sheet-pad-lg relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="badge-icon" aria-hidden="true">
                  6
                </span>
                <p className="eyebrow">A small team, by design</p>
              </div>
              <h2 className="display-lg mt-5 max-w-md">
                Close to the work. Close to each other.
              </h2>
              <p className="body-copy mt-5 max-w-sm">
                Our size keeps the conversations close. Six people, different
                instincts, one shared standard.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
              <div>
                <p className="display-lg text-accent">06</p>
                <p className="mt-2 text-sm font-semibold">Collaborators</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  Different disciplines, one table.
                </p>
              </div>
              <div>
                <p className="display-lg text-accent">06</p>
                <p className="mt-2 text-sm font-semibold">Disciplines</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  From strategy to digital experience.
                </p>
              </div>
              <div>
                <p className="display-lg text-accent">01</p>
                <p className="mt-2 text-sm font-semibold">Direction</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  The brief stays at the centre.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={380}>
        <section className="sheet">
          <div className="sheet-pad-lg">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="badge-icon" aria-hidden="true">
                    6
                  </span>
                  <p className="eyebrow">Ways to work together</p>
                </div>
                <h2 className="display-lg mt-5 max-w-2xl">
                  Start with the problem. Shape the scope after.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-3 lg:grid-cols-2">
              <div className="card-ink rounded-[18px] p-7">
                <p className="eyebrow eyebrow-on-dark">Focused project</p>
                <h3 className="mt-5 text-[1.65rem] font-semibold tracking-[-0.04em]">
                  One clear requirement.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                  A brand refresh, a campaign idea, a website, a shoot, or a
                  growth plan. We bring the right disciplines around one focused
                  outcome.
                </p>
                <ul className="mt-8 grid gap-3 border-t border-white/15 pt-5 text-sm text-white/75">
                  <li>Focused team and scope</li>
                  <li>One shared direction</li>
                  <li>Clear next step</li>
                </ul>
                <Link href="/contact" className="btn-pill btn-pill-light mt-8">
                  Talk through a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-[18px] border border-rule bg-white p-7">
                <p className="eyebrow">Full collaboration</p>
                <h3 className="mt-5 text-[1.65rem] font-semibold tracking-[-0.04em]">
                  The whole picture.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                  A larger engagement across strategy, content, production,
                  marketing, and digital experience, shaped around a shared
                  business objective.
                </p>
                <ul className="mt-8 grid gap-3 border-t border-rule pt-5 text-sm text-ink/70">
                  <li>Connected disciplines</li>
                  <li>Shared brief and standard</li>
                  <li>One point of contact</li>
                </ul>
                <Link href="/contact" className="btn-pill mt-8">
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={440}>
        <section className="sheet">
          <div className="sheet-pad-lg grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="badge-icon" aria-hidden="true">
                  6
                </span>
                <p className="eyebrow">Questions</p>
              </div>
              <h2 className="display-lg mt-5 max-w-sm">
                A clearer first conversation.
              </h2>
              <p className="body-copy mt-5 max-w-sm">
                Still deciding what you need? Start with what is not working.
              </p>
              <Link href="/contact" className="text-link mt-5">
                Ask us directly
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-x-10 md:grid-cols-2">
                {faqs.map((faq) => (
                  <details key={faq.question} className="faq-item border-b border-rule py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[1rem] font-semibold tracking-[-0.02em]">
                      {faq.question}
                      <span className="faq-plus shrink-0 text-accent" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="body-copy pt-3 text-[0.85rem]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={500}>
        <CtaBand />
      </Reveal>
    </>
  );
}
