import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
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
        <div className="shell pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="label mb-4">Start here</p>
            <h1 className="display text-4xl md:text-6xl max-w-3xl">
              Tell us what you have in mind.
            </h1>
            <p className="mt-6 max-w-2xl text-muted">
              You do not need a finished brief. Tell us a little about the business, what you are trying to change, and where you feel stuck. We will take it from there.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="label mb-3">The form</p>
                <h2 className="display text-2xl md:text-3xl">
                  A clear first conversation is enough.
                </h2>
                <p className="mt-5 text-muted">
                  The form validates your enquiry and, once delivery is configured, sends it to the studio inbox. Until then, it is honest about its current state.
                </p>
                <div className="mt-8 border-t border-rule pt-6">
                  <p className="label mb-2">Status</p>
                  <p className="text-sm text-muted">
                    Form delivery is not configured on this preview build. No message is sent until RESEND_API_KEY, ENQUIRY_TO_EMAIL, and ENQUIRY_FROM_EMAIL are set.
                  </p>
                </div>
                <Link href="/" className="link-underline label mt-8 inline-block">
                  Back to the homepage
                </Link>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
