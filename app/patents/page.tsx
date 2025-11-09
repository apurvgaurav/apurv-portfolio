// app/patents/page.tsx
export default function PatentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Patents & Publications
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
        Public record of original contributions in AI safety, governance, and
        edge deployment. This section will evolve as applications are examined
        and papers are accepted.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-50">Patents</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
            <p className="font-semibold text-slate-100">
              Edge-Deployed LLM with Deterministic Memory Management
            </p>
            <p className="text-xs text-slate-400">
              USPTO non-provisional · Application number TBD
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Framework for running LLMs at the edge with controlled contextual
              memory and reproducible outputs for auditability.
            </p>
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
            <p className="font-semibold text-slate-100">
              AI Risk Navigator – Deterministic Risk Scoring Engine
            </p>
            <p className="text-xs text-slate-400">
              USPTO non-provisional · Application number TBD
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Rule-based engine for scoring hallucination, bias, and compliance
              risks across LLM outputs.
            </p>
          </li>
          {/* Add the rest of your patents here over time */}
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-50">Research</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
            <p className="font-semibold text-slate-100">
              Deterministic Risk Triage for LLM Systems
            </p>
            <p className="text-xs text-slate-400">
              Submitted to Frontiers in AI · Status: In review
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Proposes a deterministic framework for LLM risk scoring aligned
              with enterprise audit and regulatory requirements.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
