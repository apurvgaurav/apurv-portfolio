export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-xs font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Patent-backed AI product leader
        </p>

        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          I build edge AI, safety, and governance products that survive real
          auditors.
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          I&apos;m Apurv Gaurav — an AI Product Manager operating at L7+ scope,
          with 8+ USPTO non-provisional filings across edge-deployed LLMs,
          deterministic safety engines, and code security. I focus on products
          that can actually ship inside regulated, privacy-critical
          environments.
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
            EB-1 trajectory · patents + publications + impact
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
            Doctor of Engineering · Penn State (in progress)
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
            Ex-Release Ops · large-scale systems
          </span>
        </div>

        {/* For hiring managers strip */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 text-sm text-slate-200">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase mb-2">
            For hiring managers
          </p>
          <p className="text-sm text-slate-200">
            Looking for an AI PM who can own patents, prototypes, and
            production rollout — not just slideware? Start with{" "}
            <span className="font-medium text-sky-300">
              EdgeLLM V2, AI Risk Navigator, and LLM Code Safety Auditor.
            </span>{" "}
            They demonstrate how I think about architecture, risk, and shipping
            under regulatory and privacy constraints.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <a
              href="/projects"
              className="rounded-full bg-sky-500 px-4 py-1.5 font-medium text-slate-950 hover:bg-sky-400"
            >
              View flagship projects
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-slate-400"
            >
              Share a role / request a call
            </a>
          </div>
        </div>
      </section>

      {/* Snapshot row */}
      <section className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Snapshot
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>8 non-provisional USPTO filings</li>
            <li>1 docketed case – ready for examination</li>
            <li>Edge LLMs · Privacy · AI Risk · Code safety</li>
            <li>Working prototypes, not just decks</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Core themes
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Deterministic safety engines for LLM outputs</li>
            <li>Offline, on-device architectures for privacy</li>
            <li>Audit trails that survive real regulators</li>
            <li>Patent-backed product thinking</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
            What I ship
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Patent drafts + working prototypes in sync</li>
            <li>Research papers formatted for real venues</li>
            <li>Demo-ready dashboards and portfolio assets</li>
            <li>Clear documentation for VPs and engineers</li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
          About
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          I operate at the intersection of product strategy, systems thinking,
          and AI safety. My work focuses on making large language models
          deployable in regulated, privacy-sensitive environments — where audit
          trails, deterministic behavior, and on-device execution matter as
          much as model quality.
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Over the last few years, I&apos;ve built a portfolio of
          patent-backed platforms — including an edge-deployed LLM assistant
          with self-forgetting memory, deterministic AI risk triage for LLM
          outputs, and an offline rule-based code safety engine. Each project is
          designed as a product, not a demo: clear problem, architecture, GTM
          angle, and an execution path a VP could approve.
        </p>
      </section>

      {/* Featured projects teaser */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Featured projects
          </h2>
          <a
            href="/projects"
            className="text-xs text-sky-400 hover:text-sky-300"
          >
            View all projects →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              EdgeLLM V2: Privacy + Alignment
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Edge-deployed LLM with self-forgetting memory and on-device
              alignment debugger for regulated environments.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              AI Risk Navigator V2
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Deterministic framework for real-time LLM risk triage: hallucation
              detection, bias flags, and latency anomalies.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              LLM Code Safety Auditor
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Offline rule-based engine for source-code risk detection and
              remediation, with a docketed USPTO case.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
