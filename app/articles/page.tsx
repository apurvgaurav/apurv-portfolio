// app/articles/page.tsx
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-24 space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Articles
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Writing on edge AI, safety, and governance.
          </h1>
          <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
            I use writing to stress-test ideas before turning them into
            products and patents. This section will gradually collect my best
            pieces on{" "}
            <span className="text-zinc-100">
              edge-deployed LLMs, deterministic safety, and AI governance
            </span>
            .
          </p>
        </header>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-sm text-zinc-300">
          <p className="font-medium text-zinc-100">
            Long-form articles are being ported from LinkedIn and research notes.
          </p>
          <p className="mt-2 text-xs text-zinc-400">
            For now, if you&apos;re evaluating me for a role, start with{" "}
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
            . They represent the current state of my thinking on AI safety and
            deployable systems.
          </p>
        </div>

        <div className="space-y-3 text-xs text-zinc-400">
          <p className="uppercase tracking-[0.25em]">Planned topics</p>
          <ul className="space-y-1.5">
            <li>• Designing edge-deployed LLM systems that don&apos;t leak data</li>
            <li>• Deterministic safety layers around non-deterministic models</li>
            <li>• What &quot;auditability&quot; should actually mean for AI systems</li>
            <li>• Lessons from patents: turning ideas into examinable systems</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
