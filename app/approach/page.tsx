import type { Metadata } from "next";
import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import Manifesto from "@/components/manifesto";
import { method, engagements, firstNinetyDays } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The 6FOLIO Growth Loop: Understand, Position, Create, Distribute, Convert, Optimise. A shared process that keeps the business goal, creative decisions, and delivery connected.",
  alternates: { canonical: `${siteUrl()}/approach` },
};

const methodItems = method.map((stage) => ({
  index: stage.index,
  label: "Growth loop",
  title: stage.name,
  short: stage.headline,
  description: stage.description,
}));

export default function ApproachPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <SplitReveal
            as="h1"
            text="Six perspectives, moving in one direction."
            className="type-hero mt-8 max-w-6xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            A strong result starts before the first design or campaign goes live. We use
            a shared process to keep the business goal, creative decisions, and delivery
            connected.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-12 md:py-16">
          <ScrollReveal>
            <p className="type-h2 max-w-4xl">
              Every project begins with a business problem and ends with a review of what
              changed.
            </p>
            <p className="type-body-lg mt-6 max-w-2xl text-muted">
              A beautiful campaign is not automatically a successful campaign. The work is
              judged against the goal agreed with the client.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Manifesto items={methodItems} />

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <SplitReveal
            as="h2"
            text="Two simple ways to work together."
            className="type-h2 max-w-3xl"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {engagements.map((engagement, index) => (
              <ScrollReveal key={engagement.title} delay={index * 0.08}>
                <div
                  className={`h-full border border-rule p-6 md:p-8 ${
                    index === 0 ? "bg-paper-2" : "bg-ink text-paper"
                  }`}
                >
                  <h3 className="type-h3">{engagement.title}</h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      index === 0 ? "text-muted" : "text-paper/65"
                    }`}
                  >
                    {engagement.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div>
            <h2 className="type-h2 max-w-3xl">A planning model, not a promise.</h2>
            <p className="mt-5 max-w-xl text-muted">
              This is an example planning model, not a promise that every project can be
              completed in 90 days.
            </p>

            <div className="mt-10 overflow-x-auto" data-lenis-prevent>
                <table className="w-full min-w-[680px] text-left">
                  <thead>
                    <tr className="border-y border-rule">
                      <th className="mono py-3 pr-6 font-normal">Period</th>
                      <th className="mono py-3 pr-6 font-normal">Focus</th>
                      <th className="mono py-3 font-normal">Typical activities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {firstNinetyDays.map((row) => (
                      <tr key={row.period} className="border-b border-rule align-top">
                        <td className="py-4 pr-6 text-sm font-medium">{row.period}</td>
                        <td className="py-4 pr-6 text-sm text-ink-soft">{row.focus}</td>
                        <td className="py-4 text-sm leading-relaxed text-muted">
                          {row.activities}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="shell py-16 md:py-24">
          <SplitReveal
            as="h2"
            text="Have a challenge of your own?"
            className="type-h2 max-w-3xl text-paper"
          />
          <div className="mt-8">
            <Link href="/contact" className="btn btn-light">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
