import type { Metadata } from "next";
import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import { perspectives, values } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Six collaborators with different instincts and a shared standard. How 6FOLIO brings strategy, content, production, marketing, and digital experience into one conversation.",
  alternates: { canonical: `${siteUrl()}/about` },
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="mono">About 6FOLIO / 01</p>
            <p className="mono">Six collaborators</p>
          </div>
          <SplitReveal
            as="h1"
            text="Six people. Different instincts. A shared standard."
            className="type-hero mt-8 max-w-6xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            We come from different parts of the creative and digital process. What brings
            us together is the way we approach the work: listen closely, think it through,
            make it with care, and keep every part connected.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="mono">The story / 02</p>
            </div>
            <div className="md:col-span-9">
              <SplitReveal
                as="h2"
                text="A better result rarely comes from one angle."
                className="type-h2 max-w-4xl"
              />
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <ScrollReveal>
                  <p className="type-body-lg text-ink-soft">
                    A business might come to us because its identity feels unclear. The
                    real issue might be the message. A campaign might look good but
                    struggle to reach the right people. A website might attract visits but
                    make the next step difficult.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <p className="text-muted">
                    These problems do not always belong to one discipline. That is why six
                    perspectives sit at the centre of 6FOLIO. We bring the strategy, the
                    words, the still image, the moving image, the audience plan, and the
                    digital experience into one conversation. Each person brings a point of
                    view. The work gets stronger when those views meet early, not after
                    everything has been made.
                  </p>
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
              <p className="mono mb-3">Six perspectives / 03</p>
              <h2 className="type-h2">Six roles, one working rhythm.</h2>
            </div>
            <p className="mono">Roles only. Names and portraits to be confirmed.</p>
          </div>

          <div className="border-t border-rule">
            {perspectives.map((perspective, index) => (
              <ScrollReveal
                key={perspective.name}
                className="grid gap-4 border-b border-rule py-6 md:grid-cols-12 md:items-start md:gap-6 md:py-8"
                delay={index * 0.04}
              >
                <span className="mono md:col-span-1">{perspective.index}</span>
                <div className="md:col-span-4">
                  <h3 className="type-h3">{perspective.name}</h3>
                  <p className="mono mt-2">{perspective.role}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm font-medium text-ink">{perspective.brings}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {perspective.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="mono">What we value / 04</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="type-h2 max-w-3xl">Shared working principles.</h2>
              <div className="mt-10 grid gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => (
                  <ScrollReveal
                    key={value.title}
                    className="bg-paper p-6"
                    delay={index * 0.05}
                  >
                    <p className="mono">0{index + 1}</p>
                    <h3 className="type-h4 mt-6">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </ScrollReveal>
                ))}
                <div className="flex flex-col justify-between bg-accent p-6 text-paper">
                  <p className="mono text-paper/60">A shared standard</p>
                  <p className="type-h4 mt-6">
                    Different disciplines. Shared direction. Work that connects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="type-h2 max-w-3xl">Six perspectives. No six-step hand-off.</h2>
              <p className="type-body-lg mt-6 max-w-xl text-muted">
                You work with one connected team, one shared brief, and a clear point of
                contact. The specialists stay close to the work, and the decisions stay
                connected to the reason the project exists.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                Some specialisms, including dedicated brand design leadership, specialist
                search work, and community management at scale, may be supported by
                trusted partners as the team grows. We only show a capability when we can
                stand behind it.
              </p>
              <Link href="/contact" className="btn btn-primary mt-8">
                Start a conversation
              </Link>
            </div>
            <div className="md:col-span-5">
              <div className="border border-rule p-6">
                <p className="mono">Working principle</p>
                <p className="type-h3 mt-4">
                  Different minds. One clear direction.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-2" aria-hidden="true">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-20 border border-rule ${
                        index === 2 ? "bg-accent" : index === 4 ? "bg-ink" : "bg-paper-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
