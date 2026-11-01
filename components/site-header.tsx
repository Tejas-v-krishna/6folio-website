"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="relative z-40">
      <div className="shell pt-5 md:pt-7">
        <Link href="/" aria-label={`${site.name} home`} className="group block w-full">
          <span className="type-mega flex items-start">
            6FOLIO
            <sup className="mt-[0.35em] ml-1 text-[0.16em] font-normal tracking-normal transition-transform duration-300 group-hover:-translate-y-1">
              ™
            </sup>
          </span>
        </Link>
      </div>

      <div className="sticky top-0 z-50 mt-4 border-y border-rule bg-paper/92 backdrop-blur-md md:mt-6">
        <div className="shell flex h-11 items-center justify-between gap-6">
          <span className="mono hidden lg:block">Independent creative growth studio</span>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mono link-underline transition-colors hover:text-ink ${
                  isActive(item.href) ? "mono-ink" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-between gap-4 md:flex-none md:justify-end">
            <Link
              href="/contact"
              className="mono link-underline text-accent transition-colors hover:text-ink"
            >
              Start a project
            </Link>
            <button
              type="button"
              className="flex h-8 items-center gap-2 border border-rule px-3 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="mono mono-ink">{open ? "Close" : "Menu"}</span>
              <span className="relative h-3 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-transform ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-transform ${
                    open ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`mobile-nav-panel border-t border-rule bg-paper md:hidden ${
            open ? "open" : ""
          }`}
        >
          <div className="shell flex flex-col py-4">
            {site.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-baseline justify-between border-b border-rule py-4 ${
                  isActive(item.href) ? "text-accent" : "text-ink"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="type-h3">{item.label}</span>
                <span className="mono">0{index + 1}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-5 w-full"
            >
              Start a project
            </Link>
            <p className="mono mt-6">Six perspectives. One clear direction.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
