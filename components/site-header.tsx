"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Work", href: "/work" },
  { label: "What we do", href: "/services" },
  { label: "How we work", href: "/approach" },
  { label: "About us", href: "/about" },
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
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-ink/45 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
        <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-lg border border-[#3a3a3a] bg-[#1b1b1b] text-[#f2f0e9] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="relative flex h-12 items-center justify-between px-4">
            <Link href="/" aria-label="6FOLIO home" className="flex items-center">
              <PixelMark />
            </Link>

            <span className="mono absolute left-1/2 -translate-x-1/2 text-[#f2f0e9]/60">
              Six perspectives
            </span>

            <button
              type="button"
              className="relative ml-auto flex h-10 w-10 items-center justify-end"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-[2px] w-5 bg-[#f2f0e9] transition-transform duration-300 ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-[#f2f0e9] transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 bg-[#f2f0e9] transition-transform duration-300 ${
                    open ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>

          {open && (
            <div id="site-menu" className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-[#3a3a3a]">
              <nav aria-label="Primary">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[#303030] px-6 py-5 text-[1.35rem] font-medium tracking-[-0.02em] text-[#f2f0e9] transition-colors hover:bg-[#232323]"
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="p-3">
                <Link
                  href="/approach"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center border border-[#4a4a4a] px-4 py-3 text-[0.68rem] uppercase tracking-[0.12em] text-[#f2f0e9]/80 transition-colors hover:border-[#f2f0e9] hover:text-[#f2f0e9]"
                >
                  Our approach
                </Link>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Link
                    href="/work"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center bg-[#f2f0e9] px-3 py-3 text-center text-[0.68rem] uppercase tracking-[0.08em] text-[#0a0a0a] transition-colors hover:bg-white"
                  >
                    Explore our work
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center bg-[#f2f0e9] px-3 py-3 text-center text-[0.68rem] uppercase tracking-[0.08em] text-[#0a0a0a] transition-colors hover:bg-white"
                  >
                    Start a project
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

function PixelMark() {
  const cells = [
    // 6
    [0, 0], [1, 0], [2, 0],
    [0, 1],
    [0, 2], [1, 2], [2, 2],
    [0, 3], [2, 3],
    [0, 4], [1, 4], [2, 4],
    // F
    [4, 0], [5, 0], [6, 0],
    [4, 1],
    [4, 2], [5, 2], [6, 2],
    [4, 3],
    [4, 4],
  ];

  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 21 15"
      aria-hidden="true"
      fill="currentColor"
      className="text-[#f2f0e9]"
    >
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * 3} y={y * 3} width="3" height="3" />
      ))}
    </svg>
  );
}
