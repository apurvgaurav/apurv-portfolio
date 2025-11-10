// app/patents/page.tsx
import Link from "next/link";

const patents = [
  {
    title:
      "LLM Code Safety Auditor: Offline, Rule-Based Source Code Evaluation and Remediation Engine",
    appNumber: "19/283,236",
    status: "✅ Docketed – Ready for Examination",
    year: "2025",
    summary:
      "Offline deterministic engine for static code analysis using OWASP-style rules and reproducible remediation logic. Designed for air-gapped environments.",
  },
  {
    title:
      "Edge-Deployed LLM V2: Privacy-Preserving Offline Architecture with Self-Forgetting Memory and On-Device Alignment Debugger",
    appNumber: "19/268,142",
    status: "⚠️ Formatting Issue – To Refile",
    year: "2025",
    summary:
      "Edge-deployed large language model with privacy vault and on-device rule-based alignment debugger, enabling full offline inference.",
  },
  {
    title:
      "Prompt Pilot: Adaptive Prompt Governance and Evaluation Framework",
    appNumber: "19/269,169",
    status: "⚠️ Claims Rejected – Revision in Progress",
    year: "2025",
    summary:
      "Prompt orchestration and governance layer for multi-model evaluation and reproducibility across enterprise LLM workflows.",
  },
  {
    title:
      "AI Risk Navigator: Deterministic Framework for Real-Time LLM Risk Detection and Triage",
    appNumber: "19/275,864",
    status: "⚠️ Formatting Issue",
    year: "2025",
    summary:
      "Model-agnostic, rule-based system for hallucination, bias, and latency anomaly detection in large language model outputs.",
  },
  {
    title:
      "Trace Safe AI: Deterministic Traceability and Safety Enforcement System for AI Outputs",
    appNumber: "19/281,714",
    status: "⚠️ Formatting Issue (>30 claims)",
    year: "2025",
    summary:
      "End-to-end AI traceability and risk logging framework supporting deterministic replay and regulatory compliance.",
  },
  {
    title:
      "Auto Redact AI: Offline Rule-Based Data Redaction and Compliance Engine",
    appNumber: "19/281,903",
    status: "⚠️ Formatting Issue",
    year: "2025",
    summary:
      "Local rule-based system for redacting PII and sensitive data across text and code, with deterministic audit trails.",
  },
  {
    title:
      "Self-Healing Prompt Engine: Rule-Guided Autonomous Prompt Correction Framework",
    appNumber: "19/281,647",
    status: "⚠️ Formatting Issue",
    year: "2025",
    summary:
      "Non-generative engine that applies deterministic rule sequences to repair and self-correct prompt logic in LLM workflows.",
  },
  {
    title:
      "Auto Judge: Deterministic Rule-Based AI Decision Evaluation and Audit System",
    appNumber: "19/279,355",
    status: "⚠️ Formatting Issue",
    year: "2025",
    summary:
      "Offline evaluation layer for deterministic scoring and audit trail generation across AI-generated decisions and responses.",
  },
];

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-24 space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Patents
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Patent Portfolio
          </h1>
          <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
            Each patent reflects a distinct AI system — all focused on{" "}
            <span className="text-zinc-100">edge deployment, determinism, and safety.</span>{" "}
            These filings support my EB-1 trajectory by demonstrating original
            technical contributions in privacy-preserving and auditable AI.
          </p>
        </header>

        <div className="grid gap-6">
          {patents.map((p) => (
            <div
              key={p.appNumber}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-lg font-medium text-zinc-50">
                    {p.title}
                  </h2>
                  <span className="text-xs text-zinc-400">
                    Filed {p.year}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Application No: {p.appNumber}
                </p>
                <p className="text-xs text-zinc-400">{p.status}</p>
                <p className="mt-2 text-sm text-zinc-300">{p.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-400 sm:text-sm">
          <p>
            USPTO filings prepared and submitted <strong>pro se</strong> without
            legal counsel. Track-One priority filings and clean docket entries
            demonstrate independent research, enablement, and inventive
            contribution across deterministic AI systems.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-100 hover:border-zinc-400"
          >
            Request detailed patent summaries →
          </Link>
        </div>
      </section>
    </main>
  );
}
