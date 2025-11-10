// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50 rounded-3xl px-6 py-12 sm:px-10 sm:py-14 shadow-lg">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">
              AI Product · Edge AI · Safety &amp; Governance
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Apurv Gaurav —{" "}
              <span className="text-blue-300">Patent-Backed AI Product Leader</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
              Designing and scaling deterministic AI systems that protect privacy,
              enforce alignment, and survive real-world constraints.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-colors"
              >
                View Experience
              </Link>
              <Link
                href="/patents"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 transition-colors"
              >
                Explore Patents
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-slate-100 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="border border-slate-700/60 rounded-2xl p-4 sm:p-6 bg-slate-900/40">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Snapshot
            </p>
            <ul className="space-y-2 text-sm text-slate-100 leading-relaxed">
              <li>
                • Edge-deployed LLMs, deterministic safety engines, and
                code-security frameworks.
              </li>
              <li>
                • Architectures designed for environments with security, legal,
                and regulatory scrutiny.
              </li>
              <li>
                • Prototypes that run, patents filed, and research in submission
                — not just slideware.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="bg-white rounded-2xl px-4 py-4 sm:px-6 sm:py-5 shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧠</span>
            <span className="font-medium">
              8 Non-Provisional AI Patent Applications Filed Pro Se
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">📘</span>
              <span className="text-sm">
                DEng (In Progress), Penn State World Campus
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎓</span>
              <span className="text-sm">MS, University of Pennsylvania</span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Focus Areas
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-semibold text-slate-900">
              Edge AI &amp; Privacy
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Architectures that keep sensitive data on-device while still enabling
              powerful LLM capabilities.
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-semibold text-slate-900">
              Deterministic AI Safety
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Rule-based evaluation pipelines that make model behavior reproducible,
              auditable, and regulator-friendly.
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-semibold text-slate-900">
              Code Security &amp; Traceability
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Offline analysis and remediation engines that harden LLM-generated
              code before it ever hits production.
            </p>
          </div>
        </div>
      </section>

      {/* For Hiring Managers */}
      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
          For Hiring Managers
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          I work where AI product strategy, system design, and governance intersect.
          I don&apos;t just ship demos. I design deterministic safety frameworks,
          edge-deployed architectures, and patent-backed systems that can be
          defended in front of legal, security, and regulators.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          If you&apos;re hiring for senior or strategic AI Product roles,
this site shows how I think, what I&apos;ve built, and how I execute.

        </p>
      </section>

      {/* Navigation Cards */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
          Jump to What You Need
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/experience"
            className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-blue-500 hover:bg-blue-50/40 hover:shadow-md transition-colors transition-shadow"
          >
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Experience
            </p>
            <p className="text-xs text-slate-600">
              How I&apos;ve delivered across enterprise platforms and an independent
              AI product lab.
            </p>
          </Link>
          <Link
            href="/patents"
            className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-blue-500 hover:bg-blue-50/40 hover:shadow-md transition-colors transition-shadow"
          >
            <p className="text-sm font-semibold text-slate-900 mb-1">Patents</p>
            <p className="text-xs text-slate-600">
              High-level view of my original architectures for deterministic AI
              safety, edge deployment, and code security.
            </p>
          </Link>
          <Link
            href="/contact"
            className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-blue-500 hover:bg-blue-50/40 hover:shadow-md transition-colors transition-shadow"
          >
            <p className="text-sm font-semibold text-slate-900 mb-1">Contact</p>
            <p className="text-xs text-slate-600">
              Direct line for roles, collaboration, and media.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
