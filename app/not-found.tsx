import Link from "next/link";
import SplitReveal from "@/components/split-reveal";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <div className="shell py-20 md:py-28">
        <p className="mono">404 / Wrong turn</p>
        <SplitReveal
          as="h1"
          text="This page took a different turn."
          className="type-hero mt-6 max-w-4xl"
          type="lines"
        />
        <p className="mt-6 max-w-xl text-muted">
          The page you are looking for may have moved, or the address may be incorrect.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to the homepage
          </Link>
          <Link href="/work" className="btn btn-secondary">
            View the work
          </Link>
        </div>
      </div>
    </main>
  );
}
