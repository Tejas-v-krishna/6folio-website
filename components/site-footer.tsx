import Link from "next/link";
import { site } from "@/lib/site";
import ScrollReveal from "@/components/scroll-reveal";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 bg-accent text-paper">
      <div className="shell py-14 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/30 pb-4">
          <span className="mono text-paper/70">Independent creative growth studio</span>
          <span className="mono hidden text-paper/70 md:block">
            Six perspectives. One clear direction.
          </span>
          <span className="mono text-paper/70">Est. 2026</span>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-6">
            <ScrollReveal>
              <p className="type-h2 text-paper text-balance">
                Have a project to discuss?
              </p>
              <Link href="/contact" className="btn btn-light mt-7">
                Start a conversation
              </Link>
              <p className="mono mt-5 text-paper/60">
                No prepared pitch needed. A clear first conversation is enough.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-2 md:justify-items-end">
            <div>
              <p className="mono mb-4 text-paper/50">Navigate</p>
              <ul className="flex flex-col gap-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono mb-4 text-paper/50">Information</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/work" className="link-underline text-paper">
                    Selected work
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="link-underline text-paper">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-underline text-paper">
                    Project enquiry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-6">
          <Link href="/" aria-label={`${site.name} home`} className="block">
            <span className="type-mega flex items-start text-paper">
              6FOLIO
              <sup className="mt-[0.35em] ml-1 text-[0.16em] font-normal tracking-normal">
                ™
              </sup>
            </span>
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="mono text-paper/60">© 2026 {site.name}. All rights reserved.</p>
          <p className="mono hidden text-paper/60 md:block">
            Concept work is labelled honestly.
          </p>
          <Link href="/privacy" className="mono link-underline text-paper/60">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
