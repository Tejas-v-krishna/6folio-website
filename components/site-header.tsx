"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/components/gsap";

const menuItems = [
  { label: "Work", href: "/work" },
  { label: "What we do", href: "/services" },
  { label: "How we work", href: "/approach" },
  { label: "About us", href: "/about" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);
  const settleTimer = useRef<number | null>(null);
  const lineTop = useRef<HTMLSpanElement | null>(null);
  const lineMid = useRef<HTMLSpanElement | null>(null);
  const lineBottom = useRef<HTMLSpanElement | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(header, {
          y: -18,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.05,
          immediateRender: false,
        });
      });

      return () => mm.revert();
    },
    { scope: headerRef }
  );

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      const items = panel.querySelectorAll("[data-menu-item]");
      const actions = panel.querySelectorAll("[data-menu-action]");

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        panel,
        { height: 0, opacity: 0.6 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.55,
          ease: "expo.inOut",
        },
        0
      ).fromTo(
        [...actions, ...items],
        {
          opacity: 0,
          y: -14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.035,
          ease: "power3.out",
          force3D: true,
        },
        0.08
      );

      // Start in the closed state.
      tl.progress(0);
      menuTl.current = tl;

      const top = lineTop.current;
      const mid = lineMid.current;
      const bottom = lineBottom.current;

      if (top && mid && bottom) {
        const icon = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.inOut" },
        });
        icon
          .to(top, { y: 7, rotate: 45, duration: 0.25 }, 0)
          .to(mid, { opacity: 0, duration: 0.15 }, 0)
          .to(bottom, { y: -7, rotate: -45, duration: 0.25 }, 0);
        iconTl.current = icon;
      }

      return () => {
        if (settleTimer.current !== null) {
          window.clearTimeout(settleTimer.current);
          settleTimer.current = null;
        }
        tl.kill();
        iconTl.current?.kill();
        menuTl.current = null;
        iconTl.current = null;
      };
    },
    { scope: headerRef }
  );

  const clearSettleTimer = useCallback(() => {
    if (settleTimer.current !== null) {
      window.clearTimeout(settleTimer.current);
      settleTimer.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearSettleTimer();
    const tl = menuTl.current;
    const icon = iconTl.current;
    setOpen(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tl?.progress(1);
      icon?.progress(1);
      return;
    }
    tl?.play();
    icon?.play();
    settleTimer.current = window.setTimeout(() => {
      if (tl && tl.progress() === 0) tl.progress(1);
      if (icon && icon.progress() === 0) icon.progress(1);
    }, 300);
  }, [clearSettleTimer]);

  const closeMenu = useCallback(() => {
    clearSettleTimer();
    const tl = menuTl.current;
    const icon = iconTl.current;
    setOpen(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tl?.progress(0);
      icon?.progress(0);
      return;
    }
    tl?.reverse();
    icon?.reverse();
    settleTimer.current = window.setTimeout(() => {
      if (tl && tl.progress() === 1) tl.progress(0);
      if (icon && icon.progress() === 1) icon.progress(0);
    }, 300);
  }, [clearSettleTimer]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeMenu]);

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default"
          onClick={closeMenu}
          aria-label="Close navigation"
        />
      )}

      <header ref={headerRef} className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
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
              onClick={() => (open ? closeMenu() : openMenu())}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span ref={lineTop} className="absolute left-0 top-0 h-[2px] w-5 bg-[#f2f0e9]" />
                <span ref={lineMid} className="absolute left-0 top-[7px] h-[2px] w-5 bg-[#f2f0e9]" />
                <span ref={lineBottom} className="absolute left-0 top-[14px] h-[2px] w-5 bg-[#f2f0e9]" />
              </span>
            </button>
          </div>

          <div
            ref={panelRef}
            id="site-menu"
            inert={!open}
            data-lenis-prevent
            className="menu-scroll h-0 max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-[#3a3a3a]"
          >
            <nav aria-label="Primary">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  data-menu-item
                  className="menu-row flex items-center justify-between border-b border-[#303030] px-4 py-3 text-[1rem] font-medium tracking-[-0.02em] text-[#f2f0e9] transition-colors hover:bg-[#232323] md:px-6 md:py-5 md:text-[1.35rem]"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  <span data-menu-label className="menu-label inline-block">
                    {item.label}
                  </span>
                  {isActive(item.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="p-3">
              <Link
                href="/approach"
                onClick={closeMenu}
                data-menu-action
                className="flex w-full items-center justify-center border border-[#4a4a4a] px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.1em] text-[#f2f0e9]/80 transition-colors hover:border-[#f2f0e9] hover:text-[#f2f0e9] md:py-3 md:text-[0.68rem] md:tracking-[0.12em]"
              >
                Our approach
              </Link>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/work"
                  onClick={closeMenu}
                  data-menu-action
                  className="flex items-center justify-center bg-[#f2f0e9] px-2 py-2.5 text-center text-[0.6rem] uppercase leading-tight tracking-[0.06em] text-[#0a0a0a] transition-colors hover:bg-white md:px-3 md:py-3 md:text-[0.68rem] md:tracking-[0.08em]"
                >
                  Our work
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  data-menu-action
                  className="flex items-center justify-center bg-[#f2f0e9] px-2 py-2.5 text-center text-[0.6rem] uppercase leading-tight tracking-[0.06em] text-[#0a0a0a] transition-colors hover:bg-white md:px-3 md:py-3 md:text-[0.68rem] md:tracking-[0.08em]"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function PixelMark() {
  const cells = [
    [0, 0], [1, 0], [2, 0],
    [0, 1],
    [0, 2], [1, 2], [2, 2],
    [0, 3], [2, 3],
    [0, 4], [1, 4], [2, 4],
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
