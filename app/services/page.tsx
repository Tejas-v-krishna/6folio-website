import type { Metadata } from "next";
import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import Accordion from "@/components/accordion";
import { services } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six connected disciplines: brand direction, content and storytelling, photography and film, social and community, marketing and growth, and web and digital experience.",
  alternates: { canonical: `${siteUrl()}/services` },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <SplitReveal
            as="h1"
            text="The right mix of thinking and making."
            className="type-hero mt-8 max-w-6xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            Some projects need a clear identity. Some need a campaign with a sharper
            idea. Others need a better website, better content, or a more useful way to
            reach customers. We bring the right disciplines together around the problem,
            not the other way around.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-12 md:py-16">
          <ScrollReveal>
            <h2 className="type-h2 max-w-4xl">
              Built to connect, not to sit in silos.
            </h2>
            <p className="type-body-lg mt-6 max-w-2xl text-muted">
              You can work with us on one focused requirement or bring us in across a
              larger project. Either way, we start by understanding the objective and
              agreeing on what good work needs to achieve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="type-h2 mb-10">Six disciplines. One connected process.</h2>
            <Accordion
              defaultOpen={services[0].slug}
              items={services.map((service) => ({
                id: service.slug,
                title: service.title,
                content: (
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-7">
                      <p className="type-body-lg text-ink-soft">{service.summary}</p>
                      <p className="mt-4 text-sm text-muted">{service.outcome}</p>
                      {service.note && (
                        <p className="mt-5 text-sm italic leading-relaxed text-muted">
                          {service.note}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-5">
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-ink-soft">
                            <span className="text-accent" aria-hidden="true">
                              /
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-accent text-paper">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="type-h2 text-paper">
                That is a useful place to start.
              </h2>
              <p className="mt-6 max-w-xl text-paper/75">
                Tell us what is not working or what you are trying to build. We can help
                identify the right scope before recommending a solution.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link href="/contact" className="btn btn-light">
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
