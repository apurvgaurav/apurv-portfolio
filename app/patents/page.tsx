// app/patents/page.tsx

export default function PatentsPage() {
  const projects = [
    {
      name: "Edge-Deployed LLM V2: Privacy-Preserving Offline Architecture",
      pillar: "Edge AI · Privacy · Alignment",
      description:
        "Offline LLM assistant with self-forgetting memory and an on-device alignment debugger for privacy-critical, low-connectivity environments.",
      applicationNo: "19/268,142",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Prototype implemented · Expanding for Dec 17 demo set",
      researchStatus: "Journal paper in preparation · Target: submission by Dec 17, 2025",
    },
    {
      name: "PromptPilot: Deterministic Prompt Evaluation & Orchestration Engine",
      pillar: "LLM Safety · Prompt Governance",
      description:
        "Rule-driven prompt evaluation layer that scores, routes, and rewrites prompts deterministically across multiple models and tools.",
      applicationNo: "19/269,169",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Prototype implemented · Productized demo planned for Dec 17, 2025",
      researchStatus: "Conference paper concept drafted · Target: submission by Dec 17, 2025",
    },
    {
      name: "AI Risk Navigator: Deterministic LLM Risk Scoring & Triage",
      pillar: "LLM Safety · Governance · Compliance",
      description:
        "Rule-based engine that scores hallucination, bias, and policy violations and produces reproducible JSON risk vectors for regulators and audit teams.",
      applicationNo: "19/275,864",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Core engine prototyped · UI and policy packs expanding by Dec 17, 2025",
      researchStatus: "Journal/whitepaper in preparation · Target: submission by Dec 17, 2025",
    },
    {
      name: "LLM Code Safety Auditor: Offline Rule-Based Source Code Evaluation",
      pillar: "Code Safety · Security · Compliance",
      description:
        "Offline static analysis framework for AI-generated code using deterministic, OWASP-aligned rules without sending code to external APIs.",
      applicationNo: "19/283,236",
      patentStatus: "Filed 2025 · Docketed for examination",
      demoStatus: "CLI prototype implemented · Expanded report flows by Dec 17, 2025",
      researchStatus: "Applied security paper concept drafted · Target: submission by Dec 17, 2025",
    },
    {
      name: "AutoRedact AI: Deterministic Sensitive-Data Redaction for Unstructured Content",
      pillar: "Privacy · Data Protection",
      description:
        "Rule-driven redaction engine for documents and logs that identifies and masks sensitive entities before any AI or analytics workflow.",
      applicationNo: "19/281,903",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Rules and examples designed · Demo pipeline targeted by Dec 17, 2025",
      researchStatus: "Privacy/DP-focused paper planned · Target: submission by Dec 17, 2025",
    },
    {
      name: "TraceSafe AI: Audit-First LLM Tracing & Policy Enforcement Layer",
      pillar: "Observability · Governance",
      description:
        "Tracing and policy-check layer that logs LLM inputs/outputs, applies deterministic checks, and produces audit-ready evidence bundles.",
      applicationNo: "19/281,714",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Initial flow and figures defined · Prototype targeted by Dec 17, 2025",
      researchStatus: "Governance/observability paper planned · Target: submission by Dec 17, 2025",
    },
    {
      name: "Self-Healing Prompt Engine (SHPE)",
      pillar: "Reliability · Prompt Recovery",
      description:
        "Engine that detects failing prompt behaviors using rules and logs, then applies deterministic corrections and fallbacks without retraining models.",
      applicationNo: "19/281,647",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Core logic defined · Demo flows targeted by Dec 17, 2025",
      researchStatus: "Reliability-focused paper planned · Target: submission by Dec 17, 2025",
    },
    {
      name: "AutoJudge: Offline, Rule-Based LLM Output Adjudication Engine",
      pillar: "Evaluation · Safety · Governance",
      description:
        "Local, non-generative evaluation engine that scores LLM outputs against deterministic policies and routes them to safe fallbacks.",
      applicationNo: "19/279,355",
      patentStatus: "Filed 2025 · Pending examination",
      demoStatus: "Architecture and rulesets defined · Demo targeted by Dec 17, 2025",
      researchStatus: "Evaluation/governance paper concept · Target: submission by Dec 17, 2025",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Patents &amp; AI Product Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          This portfolio represents a unified line of work: deterministic, offline, and
          privacy-preserving AI systems. Each project has a corresponding U.S. patent
          application, a working or planned demo, and a research paper targeting journal
          or conference submission.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Application numbers are listed for transparency. Full claims and detailed
          specifications are shared privately with hiring teams and collaborators.
        </p>
      </section>

      {/* Projects grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-xs uppercase tracking-wide text-indigo-600">
              {p.pillar}
            </div>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">{p.name}</h2>
            <p className="mt-3 text-sm text-gray-700">{p.description}</p>

            <div className="mt-4 space-y-1 text-xs text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">Patent:</span>{" "}
                {p.patentStatus}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Application No.:</span>{" "}
                {p.applicationNo}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Demo:</span>{" "}
                {p.demoStatus}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Research:</span>{" "}
                {p.researchStatus}
              </p>
            </div>

            <p className="mt-4 text-[11px] text-gray-500">
              Protected under U.S. patent law. Demonstrations and manuscripts are shared
              under NDA or as part of interview loops.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
