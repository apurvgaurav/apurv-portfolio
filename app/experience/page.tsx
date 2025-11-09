// app/experience/page.tsx

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Experience & Education
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
        I separate industry roles from independent R&amp;D so ownership of IP
        stays clean. The common thread across both: systems thinking, measurable
        impact, and a bias for deterministic governance.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Industry */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Industry Experience
          </h2>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Comcast (example)
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-100">
                Release & Operations Engineer → AI-Adjacent Systems
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>
                  Owned critical release processes with strict SLAs and
                  observability requirements.
                </li>
                <li>
                  Built and tuned pipelines that informed how I design
                  observability and rollback for AI governance systems.
                </li>
                <li>
                  Worked across infra, dev teams, and product to align release
                  practices with business goals.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Independent R&D */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Independent R&amp;D
          </h2>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Personal Lab
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-100">
                Patent-Backed AI Product &amp; Governance Systems
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>
                  Designed and implemented EdgeLLM V2, AI Risk Navigator, LLM
                  Code Safety Auditor, and related systems.
                </li>
                <li>
                  Filed multiple non-provisional USPTO patents as sole inventor,
                  focused on deterministic AI governance and edge deployment.
                </li>
                <li>
                  Built prototypes end-to-end: product specs, architecture,
                  implementation, evaluation loops, and documentation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mt-10 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Education
        </h2>
        <div className="space-y-2 text-sm text-slate-300">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold text-slate-100">
              Doctor of Engineering (DEng) – Penn State World Campus
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Focus: AI safety, alignment, and deterministic governance
              frameworks.
            </p>
          </div>
          {/* Add past degrees here if you want them visible */}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-8 space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Technical Stack
        </h2>
        <p className="text-sm text-slate-300">
          Python · FastAPI · Streamlit · TypeScript · React · Next.js · Tailwind
          CSS · Docker · basic infra tooling.
        </p>
      </section>
    </main>
  );
}
