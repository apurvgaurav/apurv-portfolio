type PatentTheme =
  | "Edge AI & Privacy"
  | "AI Safety & Governance"
  | "Code Security & Traceability";

type PatentItem = {
  id: string;
  title: string;
  shortName: string;
  theme: PatentTheme;
  status: string;
  role: string;
  year: string;
  focus: string;
  summary: string;
  notes?: string;
};

type Publication = {
  id: string;
  title: string;
  venue: string;
  status: string;
  year: string;
  focus: string;
  note?: string;
};

const patents: PatentItem[] = [
  {
    id: "llm-code-safety-auditor",
    title:
      "LLM Code Safety Auditor: Offline, Rule-Based Source Code Evaluation and Remediation Engine",
    shortName: "LLM Code Safety Auditor",
    theme: "Code Security & Traceability",
    status: "USPTO non-provisional · docketed – ready for examination",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Deterministic code scanning, OWASP-style rule mapping, offline operation",
    summary:
      "Defines a non-generative, rule-based engine that scans source code offline, maps findings to structured rules, and applies ordered, explainable remediation steps suitable for security programs.",
    notes: "Core anchor for code safety narrative in interviews and EB-1 track.",
  },
  {
    id: "edgellm-v2",
    title:
      "Edge-Deployed LLM V2: Privacy-Preserving Offline Architecture with Self-Forgetting Memory and On-Device Alignment Debugger",
    shortName: "EdgeLLM V2: Privacy + Alignment",
    theme: "Edge AI & Privacy",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Offline LLMs, controlled memory vault, alignment debugger, edge devices",
    summary:
      "Describes an edge-deployed LLM assistant that runs fully offline with a controlled memory vault, self-forgetting behavior, and a deterministic alignment debugger designed for regulated environments.",
  },
  {
    id: "promptpilot",
    title:
      "PromptPilot: Governance and Evaluation Framework for Production-Grade Prompt Workflows",
    shortName: "PromptPilot",
    theme: "AI Safety & Governance",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Prompt versioning, evaluation, rollout control, governance dashboards",
    summary:
      "Covers a governance cockpit for prompts: tracking variants, metrics, and regression tests, with structured rollout and rollback paths for production LLM applications.",
  },
  {
    id: "ai-risk-navigator",
    title:
      "AI Risk Navigator: Deterministic Framework for Real-Time Model Risk Detection and Triage",
    shortName: "AI Risk Navigator",
    theme: "AI Safety & Governance",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Hallucination and bias detection, latency anomalies, risk vectors, audit logs",
    summary:
      "Introduces a deterministic triage engine that converts LLM outputs into multi-axis risk vectors (hallucination, bias, latency, etc.) with reproducible logs and JSON policies for governance teams.",
  },
  {
    id: "autoredact-ai",
    title:
      "AutoRedact AI: Deterministic Redaction Engine for Sensitive Data in AI Workflows",
    shortName: "AutoRedact AI",
    theme: "Edge AI & Privacy",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "PII and secrets redaction, policy-based filters, pre/post LLM pipelines",
    summary:
      "Proposes a redaction layer that runs before and after LLM calls, using deterministic rules to strip PII, secrets, and regulated content while generating explainable audit records.",
  },
  {
    id: "tracesafe-ai",
    title:
      "TraceSafe AI: Deterministic Traceability and Replay Framework for AI Decisions",
    shortName: "TraceSafe AI",
    theme: "Code Security & Traceability",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Trace IDs, replayable decision context, audit trails",
    summary:
      "Defines a traceability framework where each AI decision is tagged with deterministic trace IDs, policies, and context that can be replayed for auditors, incident reviews, and regulators.",
  },
  {
    id: "autojudge",
    title:
      "AutoJudge: Deterministic Rule Engine for Model-Agnostic Decision Evaluation",
    shortName: "AutoJudge",
    theme: "AI Safety & Governance",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Non-generative rule engine, scoring, offline operation, model-agnostic design",
    summary:
      "Covers a deterministic, rule-driven evaluator that scores model outputs and decisions against explicit policies without using ML in the decision layer itself.",
  },
  {
    id: "self-healing-prompt-engine",
    title:
      "Self-Healing Prompt Engine: Deterministic Recovery and Guardrail Framework for Prompt Failures",
    shortName: "Self-Healing Prompt Engine",
    theme: "AI Safety & Governance",
    status: "USPTO non-provisional · filed",
    role: "Inventor (pro se)",
    year: "2025",
    focus: "Prompt failure detection, fallback sequences, recovery flows",
    summary:
      "Describes a deterministic engine that detects prompt failures and routes through guardrails, fallbacks, and remediation steps to keep LLM-powered workflows reliable.",
  },
];

const publications: Publication[] = [
  {
    id: "paper-1",
    title:
      "Deterministic AI Risk Vectors for Large Language Models in Regulated Environments",
    venue: "Frontiers in AI (target venue)",
    status: "In preparation",
    year: "2025",
    focus:
      "Formalizing the AI Risk Navigator approach as reproducible, rule-based risk vectors.",
    note: "Built on top of the AI Risk Navigator patent and prototype work.",
  },
  {
    id: "paper-2",
    title:
      "Edge-Deployed LLMs with Self-Forgetting Memory for Privacy-Critical Applications",
    venue: "Applied AI / Systems venues (target)",
    status: "In preparation",
    year: "2025",
    focus:
      "Architecture and evaluation plan for EdgeLLM V2 in privacy-sensitive environments.",
  },
  {
    id: "paper-3",
    title:
      "Non-Generative Code Safety Engines for LLM-Assisted Development",
    venue: "Security / DevSecOps venues (target)",
    status: "Concept & outline",
    year: "2025",
    focus:
      "Positioning the LLM Code Safety Auditor as a deterministic alternative to generative code scanners.",
  },
];

const themes: { key: PatentTheme; label: string; description: string }[] = [
  {
    key: "Edge AI & Privacy",
    label: "Edge AI & Privacy",
    description: "Offline, privacy-preserving architectures for LLMs and sensitive data.",
  },
  {
    key: "AI Safety & Governance",
    label: "AI Safety & Governance",
    description: "Deterministic engines for risk, safety, and policy enforcement.",
  },
  {
    key: "Code Security & Traceability",
    label: "Code Security & Traceability",
    description: "Secure code workflows and replayable AI decisions for auditors.",
  },
];

export default function PatentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 space-y-12 md:px-6 md:pb-24 md:pt-16">
      {/* Page header */}
      <header className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Patents &amp; Publications
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Patent-backed theses and research on AI safety, privacy, and code security.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          I&apos;ve independently drafted and filed a portfolio of USPTO non-provisional
          applications focused on edge AI, deterministic safety engines, and secure code
          workflows, alongside research papers under development. Together they form the
          backbone of my EB-1A and senior AI product narrative.
        </p>
        <p className="max-w-3xl text-[11px] leading-relaxed text-slate-400">
          Public details here are high-level by design. Full application numbers, claim
          sets, and drafts can be shared on request under appropriate NDA.
        </p>
      </header>

      {/* Portfolio summary */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Portfolio snapshot
          </h2>
          <p className="text-sm text-slate-100">
            8+ USPTO non-provisional applications
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
            <li>• Edge LLMs, privacy, and alignment debugging.</li>
            <li>• Deterministic safety, moderation, and governance engines.</li>
            <li>• Code security, redaction, and traceability frameworks.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Filing approach
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
            All applications were drafted and filed pro se, with a focus on clear enablement,
            non-generative decision layers, and architectures that can be implemented with
            today&apos;s infrastructure.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
            <li>• Emphasis on determinism and auditability.</li>
            <li>• Strong contrast with existing ML-heavy prior art.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            For hiring managers
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
            Treat this portfolio as proof that I can turn ambiguous frontier areas into
            concrete architectures, specs, and IP — then tie them back to prototypes and
            narratives you can take to legal, security, and leadership.
          </p>
        </div>
      </section>

      {/* Themes overview */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Thematic pillars
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {themes.map((theme) => (
            <div
              key={theme.key}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2"
            >
              <p className="text-xs font-semibold text-slate-100">
                {theme.label}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Patent list */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Individual patent filings
          </h2>
          <p className="text-[11px] text-slate-400">
            High-level view · detailed refs on request
          </p>
        </div>

        <div className="space-y-4">
          {patents.map((patent) => (
            <article
              key={patent.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-3"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {patent.theme}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50 md:text-[0.98rem]">
                    {patent.shortName}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {patent.title}
                  </p>
                </div>
                <div className="space-y-1 text-right text-[11px] text-slate-400 md:min-w-[180px]">
                  <p className="font-medium text-slate-200">{patent.status}</p>
                  <p>{patent.year}</p>
                  <p>{patent.role}</p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-300">
                {patent.summary}
              </p>

              <p className="text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Focus: </span>
                {patent.focus}
              </p>

              {patent.notes && (
                <p className="text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Notes: </span>
                  {patent.notes}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Research &amp; publications
          </h2>
          <p className="text-[11px] text-slate-400">
            Pipeline aligned to the same themes as the patent work
          </p>
        </div>

        <div className="space-y-3">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50 md:text-[0.98rem]">
                    {pub.title}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {pub.venue} · {pub.year}
                  </p>
                </div>
                <p className="text-[11px] text-slate-300 md:text-right">
                  {pub.status}
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {pub.focus}
              </p>
              {pub.note && (
                <p className="text-[11px] text-slate-400">
                  {pub.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
