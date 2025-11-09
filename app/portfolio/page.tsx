// app/portfolio/page.tsx
export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Portfolio
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
        Systems built for AI safety, governance, and edge deployment. Each
        project follows a simple pattern: clearly defined problem, deterministic
        solution, measurable impact.
      </p>

      <div className="mt-8 space-y-8">
        {/* EdgeLLM V2 */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-xl font-semibold text-slate-50">
            Edge-Deployed LLM V2
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Privacy-preserving edge architecture with self-forgetting memory.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-slate-200">Problem:</span>{" "}
              Cloud-only LLMs leak sensitive context and violate privacy and
              compliance constraints.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Solution:</span>{" "}
              On-device LLM execution with controlled memory vaults and a
              deterministic alignment debugger.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Impact:</span>{" "}
              4× latency reduction vs. API calls, 100% reproducible outputs,
              patent filed, paper submitted.
            </li>
          </ul>
        </section>

        {/* AI Risk Navigator */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-xl font-semibold text-slate-50">
            AI Risk Navigator
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Deterministic triage engine for LLM risk scoring.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-slate-200">Problem:</span>{" "}
              Safety systems rely on stochastic classifiers that are hard to
              audit.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Solution:</span>{" "}
              Rule-based risk engine that scores hallucination, bias, and
              compliance risk in real time.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Impact:</span>{" "}
              Designed for auditability and regulatory reporting; patent filed.
            </li>
          </ul>
        </section>

        {/* LLM Code Safety Auditor */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-xl font-semibold text-slate-50">
            LLM Code Safety Auditor
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Offline, rule-based remediation for AI-generated code.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-slate-200">Problem:</span>{" "}
              AI-generated code introduces security vulnerabilities without
              deterministic checks.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Solution:</span>{" "}
              Static analysis and rule engine that detects and remediates
              vulnerabilities without sending code to third-party APIs.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Impact:</span>{" "}
              Governance layer for enterprises; patent filed.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
