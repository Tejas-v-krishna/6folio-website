import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="display text-[2.2rem] leading-none md:text-[3rem]">
              Six perspectives.
              <br />
              <span className="italic">One clear direction.</span>
            </p>
            <p className="mt-6 max-w-md text-muted">
              {site.shortDescription}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-4">Navigate</p>
            <ul className="flex flex-col gap-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-4">Start</p>
            <p className="text-muted">
              Have a project to discuss? Start a conversation and tell us what you are building.
            </p>
            <Link href="/contact" className="btn btn-secondary mt-5">
              Start a conversation
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label">© 2026 {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="label link-underline">
              Privacy
            </Link>
            <Link href="/contact" className="label link-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
