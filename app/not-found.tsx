import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/marks";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you are looking for may have moved, or the address may be incorrect.",
};

export default function NotFound() {
  return (
    <section className="sheet">
      <div className="sheet-pad-lg grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow">404</p>
          <h1 className="display-xl mt-5 max-w-4xl">
            This page took a different turn.
          </h1>
        </div>
        <div className="lg:col-span-4">
          <p className="body-copy">
            The page you are looking for may have moved, or the address may be
            incorrect.
          </p>
          <Link href="/" className="btn-pill mt-6">
            Back to the homepage
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
