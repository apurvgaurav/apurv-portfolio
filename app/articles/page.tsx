// app/articles/page.tsx

import Link from "next/link";

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Articles & Writing
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          I write about AI product strategy, deterministic safety frameworks,
          and how continuous delivery thinking applies to AI governance. These
          pieces are written for leaders who need to ship AI that is reliable by
          design, not by hope.
        </p>
      </section>

      {/* Featured article */}
      <section className="mt-8 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Featured
        </h2>
        <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            From Infra to Intelligence
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-50">
            What AI PMs Can Learn from Continuous Delivery
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            How the discipline that scaled software reliability — observability,
            rollbacks, blast radius control — can be re-used to govern large
            language models and AI products.
          </p>
          <p className="mt-2 text-xs text-slate-500">Published on LinkedIn</p>
          <div className="mt-3">
            <Link
              href="https://www.linkedin.com" // TODO: replace with real URL
              target="_blank"
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Read on LinkedIn →
            </Link>
          </div>
        </article>
      </section>

      {/* Recent articles list (placeholders for now) */}
      <section className="mt-10 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Recent Articles
        </h2>
        <div className="space-y-3 text-sm text-slate-300">
          <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-100">
              Bridging Release Management to Model Governance
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Series: From Infra to Intelligence · LinkedIn
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Turning ops metrics like MTTR and deployment frequency into
              alignment metrics for AI systems.
            </p>
          </article>

          <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-100">
              Deterministic AI Product Strategy
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Strategy · LinkedIn
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Why auditability and reproducibility will matter more than raw
              model performance for enterprise AI platforms.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
        <p className="text-sm text-slate-300">
          New articles are published first on{" "}
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </Link>
          . This page keeps a curated list for recruiters, hiring managers, and
          collaborators who want the full context.
        </p>
      </section>
    </main>
  );
}
