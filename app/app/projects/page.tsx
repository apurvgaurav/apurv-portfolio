const projects = [
  {
    id: "edgellm-v2",
    name: "EdgeLLM V2: Privacy + Alignment",
    tagline: "Edge-deployed LLM platform with self-forgetting memory and on-device alignment debugger.",
    role: "Founder / Product Lead",
    focus: "Edge AI · Privacy · Alignment · Offline",
    status: "Utility patent filed · Prototype implemented",
    problem:
      "Most LLM assistants leak sensitive data to the cloud and cannot be deployed in regulated environments.",
    outcome:
      "Designed a fully offline assistant with controlled vault, self-forgetting memory, and deterministic alignment debugger suitable for auditors and regulators.",
    artifacts: ["USPTO non-provisional", "Prototype (Python + local LLM)", "Research paper (in progress)"],
  },
  {
    id: "ai-risk-navigator",
    name: "AI Risk Navigator V2",
    tagline: "Deterministic rule engine for real-time LLM risk detection and triage.",
    role: "Founder / Product Lead",
    focus: "AI Safety · Governance · Moderation",
    status: "Utility patent filed · Prototype in progress",
    problem:
      "LLM risk detection is often stochastic and opaque, which makes audit, replay, and regulatory defense difficult.",
    outcome:
      "Built a deterministic rule framework that turns hallucination, bias, and latency anomalies into reproducible risk vectors with JSON audit logs.",
    artifacts: ["USPTO non-provisional", "Streamlit/FastAPI dashboard", "Governance playbook (draft)"],
  },
  {
    id: "llm-code-safety-auditor",
    name: "LLM Code Safety Auditor",
    tagline: "Offline, rule-based engine for source-code risk detection and deterministic remediation.",
    role: "Founder / Product Lead",
    focus: "Code Security · DevSecOps · Offline",
    status: "Docketed – ready for USPTO examination",
    problem:
      "Most AI code assistants are generative, non-deterministic, and cannot be used as primary security controls.",
    outcome:
      "Designed a deterministic rule engine that scans code offline, maps findings to OWASP-style rules, and applies ordered, explainable remediations.",
    artifacts: ["USPTO non-provisional (docketed)", "Rule schema + JSON logs", "Design docs"],
  },
  {
    id: "promptpilot",
    name: "PromptPilot",
    tagline: "Prompt governance cockpit for evaluating, versioning, and shipping prompts safely.",
    role: "Founder / Product Lead",
    focus: "Prompt Ops · Evaluation · Governance",
    status: "Utility patent filed · Prototype v1 complete",
    problem:
      "Teams ship prompts directly to production with no governance, regression testing, or rollback plan.",
    outcome:
      "Created a governance dashboard to track prompts, variants, latency, and quality metrics, with Git-style history and rollback.",
    artifacts: ["USPTO non-provisional", "Prototype dashboard", "Conference paper (planned)"],
  },
  {
    id: "autoredact-ai",
    name: "AutoRedact AI",
    tagline: "Deterministic PII and secrets redaction engine for LLM pipelines.",
    role: "Founder / Product Lead",
    focus: "Privacy · Data Protection",
    status: "Utility patent filed",
    problem:
      "Sensitive data often passes through LLMs without consistent redaction, creating regulatory and breach risk.",
    outcome:
      "Designed a rule-based redaction layer that runs before/after LLM calls, with explainable policies and audit logs.",
    artifacts: ["USPTO non-provisional", "Policy rule schema", "Sample integration design"],
  },
  {
    id: "tracesafe-ai",
    name: "TraceSafe AI",
    tagline: "Traceability and logging framework for AI decisions and data flows.",
    role: "Founder / Product Lead",
    focus: "Observability · Compliance · Audit",
    status: "Utility patent filed",
    problem:
      "Enterprises struggle to reconstruct how an AI system reached a specific decision when auditors ask for traceability.",
    outcome:
      "Proposed an architecture that stamps each AI decision with deterministic trace IDs, policies, and replayable context.",
    artifacts: ["USPTO non-provisional", "Trace schema", "Audit log design"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 space-y-12 md:px-6 md:pb-24 md:pt-16">
      {/* Page header */}
      <header className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Projects
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Flagship, patent-backed AI products.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          These projects are designed as real products, not demos: each has a clear problem
          statement, a deterministic architecture, and artifacts ranging from patents to prototypes
          and research papers. Together they show how I think about{" "}
          <span className="text-slate-100">
            edge AI, safety, governance, and code security
          </span>{" "}
          under real-world constraints.
        </p>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
            Edge-deployed LLMs
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
            Deterministic safety engines
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
            Offline & on-device architectures
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
            Audit-ready governance
          </span>
        </div>
      </header>

      {/* For hiring managers strip */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-5 text-sm text-slate-200 md:px-5 md:py-6">
        <p className="mb-2 text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          For hiring managers
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-[0.94rem]">
          If you&apos;re evaluating me for a senior AI PM role, start with{" "}
          <span className="font-medium text-sky-300">
            EdgeLLM V2, AI Risk Navigator, and LLM Code Safety Auditor.
          </span>{" "}
          They represent my core theses on privacy-preserving edge AI, deterministic safety, and
          code security — each with a patent narrative, a prototype plan, and a story you can
          explain to legal, security, and engineering in the same meeting.
        </p>
      </section>

      {/* Projects grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Project portfolio
          </h2>
          <p className="text-[11px] text-slate-400">
            Each card summarizes: problem → outcome → artifacts.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/70 hover:bg-slate-900 md:p-5"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50 md:text-[0.98rem]">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">
                    {project.status}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-300">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1">
                    {project.role}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1">
                    {project.focus}
                  </span>
                </div>

                <div className="space-y-2 text-xs leading-relaxed text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-200">Problem: </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">Outcome: </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                {project.artifacts.map((artifact) => (
                  <span
                    key={artifact}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1"
                  >
                    {artifact}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px]">
                <p className="text-slate-400">
                  Case study pages and demos are being built into this site.
                </p>
                <span className="text-sky-400 group-hover:text-sky-300">
                  View details soon →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
