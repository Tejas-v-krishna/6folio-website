import Link from "next/link";
import Reveal from "@/components/reveal";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <p className="label mb-4">404</p>
          <h1 className="display text-4xl md:text-6xl max-w-3xl">
            This page took a different turn.
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            The page you are looking for may have moved, or the address may be incorrect.
          </p>
          <Link href="/" className="btn btn-secondary mt-8">
            Back to the homepage
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
