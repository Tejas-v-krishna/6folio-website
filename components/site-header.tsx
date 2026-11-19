"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { ArrowUpRight } from "@/components/marks";
import { SixFBoxes } from "@/components/six-f";
import { SCROLL_LOCK_EVENT } from "@/lib/scroll-lock";

type MenuKey = "work" | "services" | "approach" | "about";

function subscribeToViewport(callback: () => void) {
  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      callback();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}

const menuItems: {
  key: MenuKey;
  label: string;
  items: { tag: string; label: string; href: string; body: string }[];
}[] = [
  {
    key: "work",
    label: "Work",
    items: [
      {
        tag: "Selected work",
        label: "All work",
        href: "/work",
        body: "Three self-initiated concept studies, each with a different challenge.",
      },
      {
        tag: "Concept",
        label: "Serein Objects",
        href: "/work/serein-objects",
        body: "A quieter homeware identity, shaped around material and use.",
      },
      {
        tag: "Concept",
        label: "Northstar Work",
        href: "/work/northstar-work",
        body: "A launch experience that makes a complex product easier to grasp.",
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    items: [
      {
        tag: "01",
        label: "Brand direction",
        href: "/services#service-01",
        body: "Position, message, and visual direction for a clearer business.",
      },
      {
        tag: "02",
        label: "Content and storytelling",
        href: "/services#service-02",
        body: "A voice, content system, and campaign ideas built around the audience.",
      },
      {
        tag: "06",
        label: "Web and digital experience",
        href: "/services#service-06",
        body: "Digital experiences designed around the next useful step.",
      },
    ],
  },
  {
    key: "approach",
    label: "Approach",
    items: [
      {
        tag: "01",
        label: "Listen",
        href: "/approach",
        body: "Start with the business, not the deliverable list.",
      },
      {
        tag: "03",
        label: "Shape the idea",
        href: "/approach",
        body: "Decide how the story should look, sound, read, and behave.",
      },
      {
        tag: "06",
        label: "Learn and improve",
        href: "/approach",
        body: "Review the work against the objective and carry the learning forward.",
      },
    ],
  },
  {
    key: "about",
    label: "About",
    items: [
      {
        tag: "The team",
        label: "Six perspectives",
        href: "/about",
        body: "Different instincts, one shared standard for the work.",
      },
      {
        tag: "Values",
        label: "What we value",
        href: "/about",
        body: "Clear thinking, careful craft, useful collaboration, honest outcomes.",
      },
      {
        tag: "Start here",
        label: "Start a conversation",
        href: "/contact",
        body: "Tell us what is happening and what you are trying to change.",
      },
    ],
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<MenuKey | null>(null);
  const [lastActive, setLastActive] = useState<MenuKey>("work");
  const [panelDirection, setPanelDirection] = useState<"left" | "right">(
    "right",
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent(SCROLL_LOCK_EVENT, { detail: { locked: true } }),
    );

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      window.dispatchEvent(
        new CustomEvent(SCROLL_LOCK_EVENT, { detail: { locked: false } }),
      );
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // The home hero owns its own navigation. Keep the global header out of the
  // full-screen composition until the hero has scrolled away.
  const getHeroSnapshot = useCallback(() => {
    if (!isHome) return true;

    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    if (!hero) return false;

    return hero.getBoundingClientRect().bottom <= 0;
  }, [isHome]);

  const subscribeHero = useCallback(
    (callback: () => void) =>
      isHome ? subscribeToViewport(callback) : () => {},
    [isHome],
  );

  const heroPassed = useSyncExternalStore(
    subscribeHero,
    getHeroSnapshot,
    () => false,
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const activate = (key: MenuKey) => {
    const nextIndex = menuItems.findIndex((item) => item.key === key);
    const previousIndex = menuItems.findIndex(
      (item) => item.key === (active ?? lastActive),
    );

    if (nextIndex !== previousIndex) {
      setPanelDirection(nextIndex > previousIndex ? "right" : "left");
    }

    setActive(key);
    setLastActive(key);
  };

  const currentIndex = menuItems.findIndex((item) =>
    isActive(`/${item.key}`),
  );

  const panel = menuItems.find((item) => item.key === (active ?? lastActive));
  const headerHidden = isHome && !heroPassed;

  return (
    <header
      className={`${isHome ? "fixed inset-x-0 top-0" : "sticky top-0"} z-50 border-b transition duration-300 ${
        headerHidden
          ? "pointer-events-none invisible -translate-y-full border-transparent bg-accent text-white"
          : open
            ? "visible translate-y-0 border-rule bg-white text-ink"
            : "visible translate-y-0 border-transparent bg-accent text-white"
      }`}
      aria-hidden={headerHidden || undefined}
      onMouseLeave={() => setActive(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setActive(null);
        }
      }}
    >
      <div className="site-wrap">
        <div className="relative">
          <div className="flex h-[60px] items-center gap-4 px-3 md:px-4">
            <Link
              href="/"
              aria-label="6folio home"
              className="flex shrink-0 items-center gap-2.5"
            >
              <SixFBoxes className="h-5 w-10 text-[8px]" />
              <span className="text-[20px] font-bold leading-none tracking-[-0.055em]">
                6folio
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden flex-1 items-center justify-center md:flex"
            >
              <div
                className="nav-sliding-pill"
                data-current={
                  currentIndex >= 0 ? currentIndex : undefined
                }
                data-menu-open={active ?? undefined}
              >
                {menuItems.map((item) => {
                  const href = `/${item.key}`;
                  const current = isActive(href);

                  return (
                    <Link
                      key={item.key}
                      href={href}
                      aria-expanded={active === item.key}
                      aria-controls="mega-menu"
                      aria-haspopup="true"
                      aria-current={current ? "page" : undefined}
                      onMouseEnter={() => activate(item.key)}
                      onFocus={() => activate(item.key)}
                      onClick={() => setActive(null)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden text-[0.7rem] font-medium transition-opacity hover:opacity-100 md:inline-flex ${
                  isActive("/contact")
                    ? "underline underline-offset-4 opacity-100"
                    : "opacity-80"
                }`}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn-pill btn-pill-dark hidden sm:inline-flex"
              >
                Start a project
              </Link>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label={open ? "Close navigation" : "Open navigation"}
                onClick={() => setOpen((current) => !current)}
              >
                <span className="relative block h-3.5 w-5" aria-hidden="true">
                  <span
                    className={`absolute left-0 top-[3px] block h-px w-5 bg-current transition-transform duration-300 ${
                      open ? "translate-y-[3px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-[3px] left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                      open ? "-translate-y-[3px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            id="mega-menu"
            className="nav-dropdown hidden md:block"
            data-open={active !== null}
            onMouseLeave={() => setActive(null)}
          >
            <div className="rounded-[20px] border border-rule bg-white p-3 text-ink shadow-[0_32px_90px_rgba(10,10,15,0.18)]">
              <div
                key={panel?.key ?? "work"}
                data-direction={panelDirection}
                className="nav-dropdown-content grid gap-2 md:grid-cols-3"
              >
                {panel?.items.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActive(null)}
                    className={`group/item flex min-h-[170px] flex-col justify-between rounded-[14px] p-5 transition-transform duration-300 hover:-translate-y-1 ${
                      index === 1
                        ? "bg-accent text-white"
                        : index === 2
                          ? "bg-[#e9edff] text-ink"
                          : "bg-[#f3f5f9] text-ink"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`eyebrow ${
                          index === 1 ? "text-white/80" : "text-ink/60"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1" />
                    </div>
                    <div>
                      <h2 className="text-[1.15rem] font-semibold tracking-[-0.04em]">
                        {item.label}
                      </h2>
                      <p
                        className={`mt-2 text-xs leading-5 ${
                          index === 1 ? "text-white/80" : "text-ink/60"
                        }`}
                      >
                        {item.body}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            id="site-menu"
            className="menu-shell bg-white text-ink md:hidden"
            data-open={open}
            aria-hidden={!open}
          >
            <div>
              <nav
                aria-label="Mobile primary"
                className="site-wrap border-t border-rule px-3 pb-4 pt-2"
              >
                {menuItems.map((item) => {
                  const href = `/${item.key}`;
                  const current = isActive(href);

                  return (
                    <Link
                      key={item.key}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`menu-link ${
                        current ? "font-semibold text-accent" : ""
                      }`}
                      tabIndex={open ? 0 : -1}
                      aria-current={current ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`menu-link ${
                    isActive("/contact") ? "font-semibold text-accent" : ""
                  }`}
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  <span>Contact</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/contact"
                  className="btn-pill btn-pill-dark mt-5 w-full"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                >
                  Start a project
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
