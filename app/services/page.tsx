import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
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
        <div className="shell pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="label mb-4">Our capabilities</p>
            <h1 className="display text-4xl md:text-6xl max-w-3xl">
              The right mix of thinking and making.
            </h1>
            <p className="mt-6 max-w-2xl text-muted">
              Some projects need a clear identity. Some need a campaign with a sharper idea. Others need a better website, better content, or a more useful way to reach customers. We bring the right disciplines together around the problem, not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-12 md:py-16">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Built to connect, not to sit in silos.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              You can work with us on one focused requirement or bring us in across a larger project. Either way, we start by understanding the objective and agreeing on what good work needs to achieve.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="shell py-12 md:py-16">
          <ol className="border-t border-rule">
            {services.map((service) => (
              <li key={service.slug} className="border-b border-rule">
                <div className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
                  <div className="md:col-span-2">
                    <Reveal>
                      <span className="display text-5xl text-muted">{service.index}</span>
                    </Reveal>
                  </div>
                  <div className="md:col-span-4">
                    <Reveal delay={60}>
                      <h2 className="display text-3xl md:text-4xl">{service.title}</h2>
                      <p className="mt-3 text-ink font-medium">{service.purpose}</p>
                    </Reveal>
                  </div>
                  <div className="md:col-span-6">
                    <Reveal delay={120}>
                      <p className="text-muted">{service.summary}</p>
                      <p className="label mt-6">Can include</p>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-ink-soft">
                            <span className="text-accent" aria-hidden="true">
                              /
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {service.note && (
                        <p className="mt-6 text-sm text-muted italic">{service.note}</p>
                      )}
                    </Reveal>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              That is a useful place to start. Tell us what is not working or what you are trying to build. We can help identify the right scope before recommending a solution.
            </p>
            <Link href="/contact" className="btn btn-secondary mt-8">
              Talk to the team
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
