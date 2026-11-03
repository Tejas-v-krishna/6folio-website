"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MonogramMark, GlyphCaret, GlyphSearch } from "./glyphs";

type MenuItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; detail: string }[];
};

/*
 * Routes referenced here do not exist yet; they are the agreed information
 * architecture. Links point at the intended destinations rather than at "#"
 * so nothing is a dead control, and the active state will engage as each
 * route lands.
 */
const menuItems: MenuItem[] = [
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "All work", href: "/work", detail: "Case studies and selected brand work" },
      { label: "Brand identity", href: "/work?discipline=brand", detail: "Positioning, systems and guidelines" },
      { label: "Digital experience", href: "/work?discipline=web", detail: "Interfaces and interactive surfaces" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Brand strategy and identity", href: "/services#brand", detail: "Commercial direction before decoration" },
      { label: "Content strategy", href: "/services#content", detail: "Systems that keep teams publishing" },
      { label: "Photography and film", href: "/services#production", detail: "Images, motion and campaign films" },
      { label: "Performance marketing", href: "/services#performance", detail: "Audience, creative and measurement" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Six collaborators", href: "/about#team", detail: "The six roles behind the work" },
      { label: "How we work", href: "/about#process", detail: "Discovery to delivery, connected" },
    ],
  },
  { label: "Contact", href: "/contact", children: undefined },
];

export function TopBar() {
  const [open, setOpen] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [searchMounted, setSearchMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    setSearchMounted(false);
  }, []);

  /* Close whatever surface is open on Escape. */
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (searchMounted) {
          setSearchMounted(false);
          return;
        }
        close();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, searchMounted]);

  /* Close the open menu when clicking outside it. */
  useEffect(() => {
    if (open === null) return;
    function onPointer(event: PointerEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(null);
      }
    }
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [open]);

  /* Close the search field when clicking outside it. */
  useEffect(() => {
    if (!searchMounted) return;
    function onPointer(event: PointerEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchMounted(false);
      }
    }
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [searchMounted]);

  useEffect(() => {
    if (searchMounted) {
      searchInputRef.current?.focus();
    }
  }, [searchMounted]);

  const toggleSearch = () => {
    if (searchMounted) {
      setSearchMounted(false);
      return;
    }
    setOpen(null);
    setSearchMounted(true);
  };

  const toggleMenu = (index: number) => {
    setSearchMounted(false);
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <>
      <div className="logo-tab">
        <small>Independent studio</small>
        <span className="logo-word">
          <MonogramMark size={30} />
          6FOLIO
        </span>
      </div>

      <nav className="nav-pill" aria-label="Primary" ref={panelRef}>

        {menuItems.map((item, index) => {
          const children = item.children;
          const active = open === index;

          if (!children) {
            return (
              <span key={item.href} className="nav-item" style={{ position: "relative" }}>
                <Link href={item.href} className="nav-link" onClick={() => setOpen(null)}>
                  {item.label}
                </Link>
              </span>
            );
          }

          return (
            <span key={item.href} className="nav-item" style={{ position: "relative" }}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={active}
                aria-haspopup="true"
                onClick={() => toggleMenu(index)}
                onMouseEnter={() => setOpen(index)}
              >
                {item.label}
                <GlyphCaret />
              </button>

              {active && (
                <div
                  role="menu"
                  aria-label={item.label}
                  className="nav-panel"
                  onMouseLeave={() => setOpen(null)}
                >
                  {children.map((child) => (
                    <Link key={child.href} href={child.href} role="menuitem" className="nav-panel-link">
                      <span className="nav-panel-term">{child.label}</span>
                      <span className="nav-panel-detail">{child.detail}</span>
                    </Link>
                  ))}
                </div>
              )}
            </span>
          );
        })}

        <div className="search-slot" ref={searchRef}>
          <button
            type="button"
            className="pill-icon"
            aria-expanded={searchMounted}
            aria-controls="site-search"
            aria-label={searchMounted ? "Close search" : "Search services and work"}
            onClick={toggleSearch}
          >
            <GlyphSearch />
          </button>
          {searchMounted && (
            <form
              className="site-search"
              role="search"
              id="site-search"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label className="visually-hidden" htmlFor="site-search-input">
                Search services and work
              </label>
              <input
                id="site-search-input"
                ref={searchInputRef}
                type="search"
                placeholder="Search services, case studies, collaborators"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
              />
            </form>
          )}
        </div>
      </nav>
    </>
  );
}
