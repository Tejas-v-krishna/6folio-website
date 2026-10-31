"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

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
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink"
          aria-label={`${site.name} home`}
        >
          <Monogram />
          <span className="display text-[1.35rem] leading-none tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`label link-underline ${isActive(item.href) ? "label-ink" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={site.cta.href} className="btn btn-primary hidden sm:inline-flex">
            {site.cta.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path d="M3 3 L15 15 M15 3 L3 15" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <>
                  <path d="M3 5 L15 5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 9 L15 9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 13 L15 13" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="mobile-nav-panel open border-t border-rule bg-paper md:hidden"
        >
          <div className="shell flex flex-col gap-1 py-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`display text-2xl py-2 ${isActive(item.href) ? "text-accent" : "text-ink"}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href={site.cta.href} className="btn btn-primary mt-4 w-full justify-center">
              {site.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Monogram() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" className="text-ink">
      <rect x="1" y="1" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7 7 C7 5.5, 8.5 5, 9.5 5 L12 5 L12 19 L9.5 19 C8.5 19, 7 18.5, 7 17 Z" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M13.5 5 L20 5 L20 7 L16 7 L16 11 L19 11 L19 13 L16 13 L16 19 L13.5 19 Z" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
