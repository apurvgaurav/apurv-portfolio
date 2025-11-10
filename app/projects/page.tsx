// app/projects/page.tsx
import Link from "next/link";

const projects = [
  {
    title: "EdgeLLM V2 – Privacy + Alignment",
    badge: "Flagship",
    timeframe: "2024 – Present",
    summary:
      "Offline LLM assistant with self-forgetting memory and on-device alignment debugger. Designed for regulated enterprises that cannot send data to the cloud.",
    highlights: [
      "Non-provisional USPTO patent filed",
      "End-to-end prototype (local LLM, Vault, Debugger)",
      "Optimized for edge devices and privacy-critical workflows",
    ],
    tags: ["Edge LLM", "Privacy", "Alignment", "Offline"],
  },
  {
    title: "AI Risk Navigator V2",
    badge: "Deterministic Safety Engine",
    timeframe: "2024 – Present",
    summary:
      "Rule-based risk triage for LLM outputs – hallucination, bias, latency anomalies – with deterministic, reproducible scoring for audits and compliance.",
    highlights: [
      "Deterministic, non-ML moderation logic",
      "Streamlit/FastAPI prototype with dashboards",
      "Research paper targeting Frontiers in AI",
    ],
    tags: ["AI Safety", "Deterministic", "Governance"],
  },
  {
    title: "LLM Code Safety Auditor",
    badge: "Docketed at USPTO",
    timeframe: "2024 – Present",
    summary:
      "Offline, rule-based engine to scan source code for insecure patterns with OWASP-style rules and deterministic remediation suggestions.",
    highlights: [
      "Non-provisional patent: docketed, ready for examination",
      "AST-based rule engine, no generative models",
      "Designed for air-gapped engineering environments",
    ],
    tags: ["AppSec", "LLM-free", "Static Analysis"],
  },
  {
    title: "PromptPilot",
    badge: "Prompt Governance",
    timeframe: "2023 – 2024",
    summary:
      "Governance layer for prompts and LLM configurations with versioning, evaluation and latency tracking for enterprise prompt libraries.",
    highlights: [
      "Local LLM support via Ollama",
      "Dashboard for latency / quality comparisons",
      "Forms the base for multiple patent filings",
    ],
    tags: ["Prompt Ops", "Governance", "Observability"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-20 pt-24">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
            Projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Patent-backed AI product portfolio.
          </h1>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            These are not toy demos. Each project is designed as a{" "}
            <span className="text-zinc-100">
              real enterprise product surface
            </span>{" "}
            – with a working prototype, patent strategy, and a clear narrative
            for VPs and hiring managers.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-lg font-medium text-zinc-50">
                    {project.title}
                  </h2>
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
                    {project.badge}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {project.timeframe}
                </p>
                <p className="text-sm text-zinc-300">{project.summary}</p>
                <ul className="mt-2 space-y-1.5 text-xs text-zinc-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-zinc-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-zinc-100 underline-offset-4 hover:underline"
                >
                  Discuss this project →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-400 sm:text-sm">
          <p>
            For full technical deep dives (architectures, patents, and research
            papers),{" "}
            <Link
              href="/contact"
              className="font-medium text-zinc-100 underline-offset-4 hover:underline"
            >
              contact me
            </Link>{" "}
            and I’ll share privileged material under NDA.
          </p>
        </div>
      </section>
    </main>
  );
}
