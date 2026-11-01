"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const leftLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

const rightLinks = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

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
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <div className="relative mx-auto flex h-14 w-full max-w-[600px] items-center justify-center rounded-xl border border-rule bg-[#fbfaf7]/95 px-4 shadow-[0_12px_40px_rgba(10,10,10,0.08)] backdrop-blur-md md:px-6">
        <nav
          className="absolute left-6 hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {leftLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mono link-underline transition-colors hover:text-ink ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="shrink-0 text-[1.45rem] font-bold leading-none tracking-[-0.045em] text-ink"
        >
          6FOLIO
          <sup className="ml-0.5 align-top text-[0.55em] font-normal tracking-normal">™</sup>
        </Link>

        <nav
          className="absolute right-6 hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {rightLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mono link-underline transition-colors hover:text-ink ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="absolute right-4 flex h-9 items-center gap-2 border border-rule px-3 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="mono mono-ink">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 w-full max-w-[600px] rounded-xl border border-rule bg-[#fbfaf7] p-4 shadow-[0_24px_60px_rgba(10,10,10,0.12)] md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-rule py-3 text-xl font-semibold tracking-tight ${
                  isActive(item.href) ? "text-accent" : "text-ink"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
