// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-zinc-50">
      {/* Hero */}
      <section
        id="hero"
        className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-16 pt-20 sm:flex-row sm:items-center"
      >
        {/* Soft glow background */}
        <div className="absolute inset-0">
          <div className="hero-glow" />
        </div>

        <div className="relative z-10 flex-1 space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Patent-backed AI Product Leader
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            APURV GAURAV
          </h1>

          <h2 className="text-lg font-medium text-zinc-100 sm:text-xl">
            PATENT-BACKED AI PRODUCT LEADER
          </h2>

          <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
            I build <span className="text-zinc-100">edge AI</span>,{" "}
            <span className="text-zinc-100">safety</span>, and{" "}
            <span className="text-zinc-100">governance</span> products that
            survive real auditors.
          </p>

          <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
            DEng (in progress, Penn State) · Master’s, University of
            Pennsylvania
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              EB-1 trajectory · patents + publications + impact
            </span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Doctor of Engineering · Penn State (in progress)
            </span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Ex-Release Ops · large-scale systems
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black hover:bg-[var(--accent-hover)]"
            >
              View flagship projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-[var(--accent)]"
            >
              For hiring managers
            </Link>
          </div>
        </div>
      </section>

      {/* For Hiring Managers Strip */}
      <section className="border-y border-zinc-900 bg-zinc-950/70">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              For hiring managers
            </p>
            <p className="text-sm text-zinc-200 sm:text-base">
              Looking for an AI PM who can own{" "}
              <span className="text-zinc-50">
                patents, prototypes, and production rollout
              </span>{" "}
              – not just slideware?
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-medium text-black hover:bg-[var(--accent-hover)] sm:text-sm"
            >
              Share a role / request a call
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-100 hover:border-[var(--accent)] sm:text-sm"
            >
              Review project portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 space-y-4"
      >
        <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          About
        </h2>
        <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
          I operate at the intersection of{" "}
          <span className="text-zinc-100">
            product strategy, systems thinking, and AI safety
          </span>
          . My work focuses on making large language models deployable in{" "}
          <span className="text-zinc-100">
            regulated, privacy-sensitive environments
          </span>{" "}
          – where audit trails, deterministic behavior, and on-device execution
          matter as much as model quality.
        </p>
        <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
          Over the last few years, I’ve built a portfolio of{" "}
          <span className="text-zinc-100">patent-backed platforms</span> –
          including an edge-deployed LLM assistant with self-forgetting memory,
          deterministic AI risk triage for LLM outputs, and an offline
          rule-based code safety engine. Each project is designed as a product,
          not a demo: clear problem, architecture, GTM angle, and an execution
          path a VP could approve.
        </p>
      </section>

      {/* Featured Projects */}
      <section
        id="featured-projects"
        className="mx-auto w-full max-w-5xl px-4 pb-16 space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-xs text-zinc-400 underline-offset-4 hover:text-[var(--accent)] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "EdgeLLM V2",
              subtitle: "Privacy + Alignment at the edge",
              desc: "Offline LLM assistant with self-forgetting memory and on-device alignment debugger for highly regulated environments.",
            },
            {
              title: "AI Risk Navigator V2",
              subtitle: "Deterministic AI risk engine",
              desc: "Rule-based triage for hallucination, bias, and latency anomalies with reproducible scoring and audit-grade logs.",
            },
            {
              title: "LLM Code Safety Auditor",
              subtitle: "Offline code safety engine",
              desc: "OWASP-style, non-generative static analysis for LLM-era code bases, designed for air-gapped environments.",
            },
          ].map((p) => (
            <Link
              key={p.title}
              href="/projects"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-300 hover:border-[var(--accent)]"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {p.title}
                </p>
                <p className="font-medium text-zinc-50">{p.subtitle}</p>
                <p className="text-xs text-zinc-400">{p.desc}</p>
              </div>
              <p className="mt-3 text-xs font-medium text-zinc-200 group-hover:text-[var(--accent-hover)]">
                View details →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Signals */}
      <section
        id="signals"
        className="mx-auto w-full max-w-5xl px-4 pb-20 space-y-4"
      >
        <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Signals I bring
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/patents"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-sm text-zinc-300 hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Patents
            </p>
            <p className="mt-1 text-sm font-medium text-zinc-50">
              8+ non-provisional filings
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Focused on edge LLMs, deterministic safety, privacy, and code
              security – filed pro se with end-to-end product thinking.
            </p>
          </Link>

          <Link
            href="/articles"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-sm text-zinc-300 hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Research &amp; writing
            </p>
            <p className="mt-1 text-sm font-medium text-zinc-50">
              Papers &amp; long-form content
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Bridging release engineering, observability, and modern AI product
              strategy into publishable work and executive-level narratives.
            </p>
          </Link>

          <Link
            href="/experience"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-sm text-zinc-300 hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </p>
            <p className="mt-1 text-sm font-medium text-zinc-50">
              Systems, ops, and AI product
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Experience in large-scale release operations and telemetry, now
              focused on AI product management in high-stakes environments.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
