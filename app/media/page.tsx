// app/media/page.tsx
import Link from "next/link";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-24 space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Media &amp; talks
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Demos, talks, and public-facing work.
          </h1>
          <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
            This section will collect{" "}
            <span className="text-zinc-100">
              conference talks, invited sessions, recorded demos, and interviews
            </span>{" "}
            related to edge AI, AI safety, and governance. It&apos;s the outward
            view of the same systems captured in{" "}
            <Link
              href="/projects"
              className="font-medium text-zinc-100 underline-offset-4 hover:underline"
            >
              Projects
            </Link>{" "}
            and{" "}
            <Link
              href="/patents"
              className="font-medium text-zinc-100 underline-offset-4 hover:underline"
            >
              Patents
            </Link>
            .
          </p>
        </header>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-sm text-zinc-300">
          <p className="font-medium text-zinc-100">
            No public talks listed yet.
          </p>
          <p className="mt-2 text-xs text-zinc-400">
            I&apos;m currently heads-down on patents, prototypes, and research.
            As public talks and recordings become available, they&apos;ll appear
            here with clear context for hiring managers and collaborators.
          </p>
        </div>

        <div className="pt-2 text-xs text-zinc-400">
          <p>
            If you&apos;re interested in a focused session or internal talk on
            edge AI, AI safety, or deterministic risk frameworks,{" "}
            <Link
              href="/contact"
              className="font-medium text-zinc-100 underline-offset-4 hover:underline"
            >
              contact me
            </Link>{" "}
            and mention the audience and time horizon.
          </p>
        </div>
      </section>
    </main>
  );
}
