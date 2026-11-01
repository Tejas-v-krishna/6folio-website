import Link from "next/link";
import { site } from "@/lib/site";
import ScrollReveal from "@/components/scroll-reveal";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 bg-accent text-paper">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-10 py-4 md:grid-cols-12 md:py-8">
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="type-h2 text-paper text-balance">
                Have a project to discuss?
              </p>
              <Link href="/contact" className="btn btn-light mt-7">
                Start a conversation
              </Link>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <ul className="flex flex-col gap-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="link-underline text-paper">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/30 pt-6">
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
          <Link href="/privacy" className="mono link-underline text-paper/60">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
