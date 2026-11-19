import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";
import CtaBand from "@/components/cta-band";
import { ArrowUpRight } from "@/components/marks";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand direction, content, photography, film, marketing, and digital experience, brought together around the problem that needs solving.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        tone="default"
        eyebrow="Our capabilities"
        title="The right mix of thinking and making."
        description="Some projects need a clear identity. Some need a campaign with a sharper idea. Others need a better website, better content, or a more useful way to reach customers. We bring the right disciplines together around the problem, not the other way around."
      >
        <div className="mt-6 flex items-end justify-between gap-6 border-t border-ink/15 pt-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-muted">
            <span>Strategy</span>
            <span>Content</span>
            <span>Production</span>
            <span>Distribution</span>
            <span>Experience</span>
          </div>

        </div>
      </PageIntro>

      <section className="sheet card-blue">
        <div className="sheet-pad-lg">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-on-blue">
                Built to connect, not to sit in silos
              </p>
              <p className="display-md mt-5 max-w-3xl">
                You can work with us on one focused requirement or bring us in
                across a larger project. Either way, we start by understanding the
                objective and agreeing on what good work needs to achieve.
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="micro max-w-xs text-white/70">
                Strategy, content, production, distribution, and experience stay
                in the same conversation from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="grid gap-6 border-b border-rule pb-6 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-3">The service index</p>
            <p className="max-w-xl text-sm leading-6 text-muted lg:col-span-7">
              The headings are separate disciplines. The work is not. We shape
              the team around the brief, then keep the thinking connected from
              first conversation to launch.
            </p>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-muted lg:col-span-2 lg:text-right">
              01 to 06
            </p>
          </div>

          <div>
            {services.map((service) => (
              <article
                key={service.number}
                id={`service-${service.number}`}
                className="scroll-mt-32 border-b border-rule py-10 transition-colors hover:bg-accent-soft/50 md:py-12"
              >
                <div className="grid gap-7 lg:grid-cols-12 lg:gap-6">
                  <p className="text-[0.72rem] font-semibold tracking-[0.08em] text-accent lg:col-span-1">
                    {service.number}
                  </p>

                  <div className="lg:col-span-5">
                    <h2 className="text-[clamp(1.8rem,3.2vw,3.2rem)] font-medium leading-none tracking-[-0.055em]">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-md text-[1.05rem] leading-6">
                      {service.strapline}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="body-copy max-w-md">{service.description}</p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="eyebrow">Can include</p>
                    <ul className="mt-3 grid gap-1.5">
                      {service.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="text-[0.78rem] leading-5 text-muted"
                        >
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-center">
            <p className="max-w-2xl text-sm leading-6 text-muted lg:col-span-6">
              Marketing results depend on the offer, market, budget, timing,
              tracking, website, and sales process. We report honestly and do
              not promise a guaranteed result.
            </p>
            <div className="lg:col-span-6 lg:text-right">
              <Link href="/contact" className="text-link">
                Talk through a project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure which service you need?"
        title="That is a useful place to start."
        body="Tell us what is not working or what you are trying to build. We can help identify the right scope before recommending a solution."
        actionLabel="Talk to the team"
      />
    </>
  );
}
