import type { Metadata } from "next";
import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ContactForm from "@/components/contact-form";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with 6FOLIO. Tell us what you are building and we will help work out what should happen next.",
  alternates: { canonical: `${siteUrl()}/contact` },
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <SplitReveal
            as="h1"
            text="Tell us what you have in mind."
            className="type-hero mt-8 max-w-5xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            You do not need a finished brief. Tell us a little about the business, what
            you are trying to change, and where you feel stuck. We will take it from
            there.
          </p>
        </div>
      </section>

      <section>
        <div className="shell py-12 md:py-16">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-20">
                <h2 className="type-h3">A clear first conversation is enough.</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  The form validates your enquiry and, once delivery is configured, sends
                  it to the studio inbox. Until then, it is honest about its current state.
                </p>

                <div className="mt-8 border border-rule p-4">
                  <p className="text-sm leading-relaxed text-muted">
                    Form delivery is not configured on this preview build. No message is
                    sent until the email provider keys and destination are set.
                  </p>
                  <Link href="/privacy" className="mono link-underline mt-4 inline-block">
                    Privacy information
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="border border-rule p-5 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
