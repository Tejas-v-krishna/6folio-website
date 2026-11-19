"use client";

import Link from "next/link";
import { useState } from "react";
import FooterDither from "@/components/footer-dither";
import { SixFBoxes } from "@/components/six-f";
import { newsletterEndpoint, postForm } from "@/lib/forms";

const navigationLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const workLinks = [
  { href: "/work", label: "All work" },
  { href: "/work/serein-objects", label: "Serein Objects" },
  { href: "/work/goodkind-coffee", label: "Goodkind Coffee" },
  { href: "/work/northstar-work", label: "Northstar Work" },
];

const linkClass =
  "text-[13px] font-medium leading-[2] text-[#15151a] transition-colors hover:text-accent md:text-[14px]";

function FooterMark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-36 w-36"
    >
      <div className="absolute inset-0 rotate-[8deg] overflow-hidden rounded-[30%] bg-[linear-gradient(145deg,#a5ccff_0%,#4d88ff_34%,#1b44e8_68%,#091f9b_100%)] shadow-[0_26px_44px_rgba(22,54,248,0.32),inset_0_2px_2px_rgba(255,255,255,0.72),inset_0_-14px_24px_rgba(4,17,90,0.35)] ring-1 ring-white/25">
        <span className="absolute -left-4 top-1 h-16 w-24 rounded-full bg-white/35 blur-2xl" />
        <span className="absolute inset-x-5 top-1 h-10 rounded-full bg-white/25 blur-xl" />
        <div className="relative flex h-full items-center justify-center">
          <SixFBoxes
            tone="light"
            className="h-14 w-28 text-[20px] shadow-[0_4px_10px_rgba(4,17,90,0.18)]"
          />
        </div>
      </div>
      <span className="absolute -bottom-7 right-0 -rotate-6 font-script text-[20px] leading-none text-footer-muted">
        Always six.
      </span>
    </div>
  );
}

function SocialTiles() {
  return (
    <div
      aria-hidden="true"
      title="Social profiles are not connected yet."
      className="mt-4 flex items-center gap-2"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#04105a]/35 text-white ring-1 ring-white/10 backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-4 w-4"
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      </span>

      <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#04105a]/35 text-white ring-1 ring-white/10 backdrop-blur-sm">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M4.4 9h3v10.6h-3zM5.9 4.4a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zM10 9h2.9v1.5c.6-1 1.7-1.8 3.4-1.8 2.6 0 3.7 1.6 3.7 4.4v6.5h-3v-5.9c0-1.5-.5-2.4-1.8-2.4-1.2 0-1.9.8-1.9 2.4v5.9H10z" />
        </svg>
      </span>

      <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#04105a]/35 text-[11px] font-semibold text-white ring-1 ring-white/10 backdrop-blur-sm">
        Bē
      </span>

      <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#04105a]/35 text-white ring-1 ring-white/10 backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M5.2 7.7c4.4.5 8.7 2.3 11.4 6.5M8.1 20.2c1.7-4.7 5.2-8.2 10.5-9.1M3.4 13.4c4.6-1.2 8.8-.2 12.2 3.1" />
        </svg>
      </span>
    </div>
  );
}

export default function SiteFooter() {
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "unconfigured"
  >("idle");

  async function handleNewsletterSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!newsletterEndpoint) {
      setNewsletterStatus("unconfigured");
      return;
    }

    setNewsletterStatus("submitting");

    try {
      await postForm(newsletterEndpoint, form);
      form.reset();
      setNewsletterStatus("success");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="relative overflow-hidden bg-footer pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="relative z-10 mx-auto w-[calc(100%-1.25rem)] md:w-[calc(100%-2rem)] lg:w-[min(calc(100%-10rem),1120px)]">
        <div className="grid gap-4 lg:grid-cols-[0.34fr_0.66fr] lg:gap-5">
          <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#06145f_0%,#0e2db5_48%,#2f6bff_100%)] p-6 text-white shadow-[0_30px_70px_rgba(7,22,120,0.28)] md:min-h-[520px] md:p-8">
            <FooterDither />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(3,12,72,0.55),rgba(3,12,72,0))]" />

            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <Link
                href="/"
                aria-label="6folio home"
                className="flex w-fit items-center gap-2.5"
              >
                <SixFBoxes tone="light" className="h-6 w-12 text-[9px]" />
                <span className="text-[24px] font-bold leading-none tracking-[-0.06em]">
                  6folio
                </span>
              </Link>

              <div>
                <p className="max-w-[260px] text-[17px] font-medium leading-[1.3] tracking-[-0.025em]">
                  Six perspectives,
                  <br />
                  <span className="text-[#bcd4ff]">
                    one clear direction.
                  </span>
                </p>

                <p className="mt-8 w-fit font-script text-[24px] leading-none text-white/90">
                  <span className="relative inline-block">
                    Stay in touch!
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 120 6"
                      preserveAspectRatio="none"
                      className="absolute -bottom-1 left-0 h-[5px] w-full text-white/35"
                    >
                      <path
                        d="M2 3.5c20-2 38-2.5 58-2 18 .4 34 1.6 58 2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </p>

                <SocialTiles />
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[480px] flex-col justify-between rounded-[22px] border border-black/[0.05] bg-footer-panel p-6 shadow-[0_24px_60px_rgba(10,10,15,0.05)] md:min-h-[520px] md:p-10">
            <div className="absolute right-10 top-[-1.5rem] hidden lg:block">
              <FooterMark />
            </div>

            <div className="grid grid-cols-2 gap-6 md:max-w-[68%] lg:max-w-[60%] lg:gap-10">
              <nav aria-label="Footer navigation">
                <h2 className="font-script text-[22px] font-medium leading-none text-footer-muted">
                  Navigation
                </h2>
                <ul className="mt-4 grid gap-0.5">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Selected work">
                <h2 className="font-script text-[22px] font-medium leading-none text-footer-muted">
                  Selected work
                </h2>
                <ul className="mt-4 grid gap-0.5">
                  {workLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-6 xl:mt-16 xl:gap-10">
              <div className="order-2 md:order-1">
                <p className="text-[11px] leading-5 text-footer-muted">
                  © 2026 6FOLIO. All rights reserved.
                </p>
                <p className="mt-1 max-w-[230px] text-[10px] leading-4 text-[#5f5f66]">
                  All projects shown are self-initiated concept studies.
                </p>
              </div>

              <div className="order-1 w-full max-w-[320px] md:order-2 md:max-w-[320px] lg:max-w-[240px] xl:max-w-[286px]">
                <p className="text-[13px] leading-5 text-footer-muted">
                  New work and studio notes.
                </p>
                <p className="text-[15px] font-medium leading-6 text-[#15151a]">
                  Stay close to 6folio.
                </p>

                <form
                  className="mt-3"
                  onSubmit={handleNewsletterSubmit}
                  aria-busy={newsletterStatus === "submitting"}
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex h-12 items-center gap-1 rounded-[12px] bg-white p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.05] transition-shadow focus-within:ring-2 focus-within:ring-accent/30">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="Enter email address"
                      className="min-w-0 flex-1 bg-transparent px-2.5 text-[12px] text-ink placeholder:text-footer-muted focus-visible:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === "submitting"}
                      className="h-9 shrink-0 rounded-[8px] bg-[#0a0a0f] px-4 text-[12px] font-medium text-white transition-colors hover:bg-accent disabled:cursor-wait disabled:opacity-70"
                    >
                      {newsletterStatus === "submitting"
                        ? "Sending..."
                        : "Subscribe"}
                    </button>
                  </div>

                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-2 min-h-[32px] text-[11px] leading-4 text-footer-muted"
                  >
                    {newsletterStatus === "unconfigured"
                      ? "Newsletter delivery is not connected yet. No address was stored."
                      : null}
                    {newsletterStatus === "success"
                      ? "Thanks. Your signup was received."
                      : null}
                    {newsletterStatus === "error"
                      ? "That did not go through. Please try again."
                      : null}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
