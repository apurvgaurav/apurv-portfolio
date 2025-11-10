// app/projects/page.tsx
import Link from "next/link";

const projects = [
  {
    id: "edge-llm-v2",
    title: "Edge-Deployed LLM V2: Privacy + Alignment",
    tag: "Flagship · Utility Patent Filed",
    problem:
      "Enterprises want LLM assistants but cannot ship anything that leaks user data, relies on the cloud, or behaves unpredictably under audit.",
    approach: [
      "Designed a fully offline LLM assistant with controllable memory vault.",
      "Introduced a self-forgetting mechanism so sensitive context can be expired or deleted deterministically.",
      "Added an on-device alignment debugger to inspect prompts, responses, and rule violations without sending data to external services.",
    ],
    outcomes: [
      "Architecture suitable for healthcare, telco, and regulated industries.",
      "Supports replayable audits and verifiable privacy boundaries.",
      "Forms the basis of a non-provisional USPTO filing and research paper submission.",
    ],
    links: [
      {
        label: "Patent summary (coming soon)",
        href: "#",
      },
      {
        label: "Architecture notes (private repo)",
        href: "#",
      },
    ],
  },
  {
    id: "ai-risk-navigator",
    title: "AI Risk Navigator V2",
    tag: "Deterministic Risk Engine",
    problem:
      "Most LLM safety stacks are probabilistic and hard to audit; compliance teams need deterministic, replayable risk judgments.",
    approach: [
      "Built a rule-based engine that evaluates hallucination, bias, latency anomalies, and policy violations without ML models.",
      "Generated multi-axis risk vectors and JSON triage policies for downstream systems.",
      "Aligned rule design with EU AI Act and NIST AI RMF principles to make the system legible to legal and compliance stakeholders.",
    ],
    outcomes: [
      "4–6× latency reduction versus API-based moderation in prototype benchmarks.",
      "Zero-variance, replayable risk evaluations suitable for audits.",
      "Backed by a non-provisional patent draft and research-style writeup.",
    ],
    links: [
      {
        label: "Risk engine overview (coming soon)",
        href: "#",
      },
      {
        label: "Prototype repo (private for now)",
        href: "#",
      },
    ],
  },
  {
    id: "llm-code-safety-auditor",
    title: "LLM Code Safety Auditor",
    tag: "Docketed – Ready for Examination",
    problem:
      "Engineering teams rely on AI code assistants, but security and compliance teams need deterministic guarantees around vulnerabilities and policy violations.",
    approach: [
      "Designed an offline, rule-based engine that analyzes source code using ASTs and security rules mapped to OWASP-style categories.",
      "Separated generative coding from deterministic safety checks: the auditor never generates code, only evaluates and recommends remediation.",
      "Introduced deterministic remediation ordering, JSON/YAML rule formats, and offline operation for air-gapped environments.",
    ],
    outcomes: [
      "Cleanly docketed non-provisional USPTO application (ready for examination).",
      "Clear separation of responsibilities between AI assistants and safety engine.",
      "Positioned as a drop-in layer for enterprises that already use Git-based workflows and CI pipelines.",
    ],
    links: [
      {
        label: "Patent status: docketed",
        href: "#",
      },
      {
        label: "Prior art comparison (planned)",
        href: "#",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Signature Projects – Deep Dive
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            These projects represent my core product thesis: deterministic,
            audit-friendly AI systems that enterprises can deploy in regulated,
            real-world environments. Each combines architecture, prototype, and
            IP into a coherent product story.
          </p>
        </header>

        <div className="space-y-6">
          {projects.map((project) => (
            <section
              key={project.id}
              id={project.id}
              className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h2>
                <p className="text-xs font-medium text-emerald-300">
                  {project.tag}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Problem
                </p>
                <p className="text-sm text-slate-300">{project.problem}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Approach
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.approach.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Outcomes
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.outcomes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                {project.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="text-xs text-slate-500">
          Additional projects, diagrams, and live demos will be added here as
          public artifacts (papers, talks, screenshots) are finalized. Some
          repositories and documents are intentionally private due to ongoing
          patent activity.
        </p>
      </div>
    </main>
  );
}
