// app/patents/page.tsx
import Link from "next/link";

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 lg:px-8">
        {/* HERO */}
        <section className="border-b border-slate-200 pb-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              PATENT PORTFOLIO
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A focused portfolio on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-700">
                Edge AI, LLM Safety, and Deterministic Governance.
              </span>
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              These filings are not academic ideas—they’re system designs I’ve implemented
              as working prototypes. The portfolio centers on privacy-preserving edge LLMs,
              deterministic risk triage, and offline, rule-based safety engines for AI code
              and content.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/assets/apurv_patent_portfolio_overview.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-900/40"
              >
                Download patent portfolio overview
                <span className="text-xs">↘</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-[1px] hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20"
              >
                Request NDA discussion
              </Link>
            </div>
          </div>

          {/* Top summary strip */}
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm shadow-slate-200/60 sm:grid-cols-4">
            <Metric value="8" label="Utility patent applications filed (sole inventor)" />
            <Metric value="4" label="Edge & LLM safety platforms implemented as prototypes" />
            <Metric value="100%+" label="Focus on privacy, safety & governance" />
            <Metric value="2024–2025" label="Filing window · aligned with modern AI stack" />
          </div>
        </section>

        {/* MAIN CONTENT: GRID + TIMELINE */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.2fr)]">
          {/* GRID OF PATENTS */}
          <div className="space-y-5">
            <PatentCard
              id="edge-llm-v2"
              title="Edge-Deployed LLM V2: Privacy-Preserving Offline Architecture with Self-Forgetting Memory and On-Device Alignment Debugger"
              appNumber="US 19/268,142"
              year="2024"
              status="Filed · In USPTO review"
              problem="LLM assistants leak sensitive data and depend on cloud connectivity."
              solution="An offline, edge-deployed LLM architecture with vault-based memory, policy-driven forgetting, and a deterministic alignment debugger running fully on device."
              pdfHref="/assets/patents/edge-llm-v2_brief.pdf"
            />

            <PatentCard
              id="prompt-pilot"
              title="PromptPilot: Deterministic Prompt Evaluation and Self-Healing Prompt Engine"
              appNumber="US 19/269,169"
              year="2024"
              status="Filed · In USPTO review"
              problem="Prompt behavior is fragile and hard to debug across models and releases."
              solution="A rule-driven prompt evaluation and self-healing engine that scores prompts, detects regressions, and automatically rewrites or routes prompts using deterministic logic."
              pdfHref="/assets/patents/prompt-pilot_brief.pdf"
            />

            <PatentCard
              id="ai-risk-navigator"
              title="AI Risk Navigator: Deterministic LLM Risk Scoring and Triage Engine"
              appNumber="US 19/275,864"
              year="2024"
              status="Filed · In USPTO review"
              problem="LLM safety reviews are manual, inconsistent, and hard to audit."
              solution="A deterministic risk-scoring engine that tags LLM inputs/outputs for hallucination, bias, and policy violations and routes them through configurable triage workflows."
              pdfHref="/assets/patents/ai-risk-navigator_brief.pdf"
            />

            <PatentCard
              id="llm-code-safety-auditor"
              title="LLM Code Safety Auditor: Offline, Rule-Based Source Code Evaluation and Remediation Engine"
              appNumber="US 19/283,236"
              year="2025"
              status="Docketed new case · Ready for examination"
              problem="AI-generated code introduces security and compliance risks that are hard to review at scale."
              solution="An offline, non-generative engine that statically evaluates AI-generated code using OWASP-style rules and emits deterministic remediation guidance and redaction actions."
              pdfHref="/assets/patents/llm-code-safety-auditor_brief.pdf"
            />

            <PatentCard
              id="auto-redact-ai"
              title="AutoRedact AI: Deterministic Redaction Engine for Sensitive Data in Unstructured Content"
              appNumber="US 19/281,903"
              year="2025"
              status="Filed · In USPTO review"
              problem="Documents and logs contain PII and secrets that must be redacted before use in AI workflows."
              solution="A rule-based, offline redaction engine that detects and masks sensitive fields while retaining utility for analytics and downstream LLM pipelines."
              pdfHref="/assets/patents/auto-redact-ai_brief.pdf"
            />

            <PatentCard
              id="trace-safe-ai"
              title="TraceSafe AI: Deterministic Traceability and Audit Layer for AI Systems"
              appNumber="US 19/281,714"
              year="2025"
              status="Filed · In USPTO review"
              problem="Teams struggle to reconstruct how AI decisions were made across prompts, models, and policies."
              solution="A traceability layer that records deterministic audit trails for AI systems, linking prompts, rules, model versions, and outputs into an inspectable, replayable history."
              pdfHref="/assets/patents/trace-safe-ai_brief.pdf"
            />

            <PatentCard
              id="self-healing-prompt-engine"
              title="Self-Healing Prompt Engine (SHPE): Rule-Driven Fault Detection and Prompt Recovery"
              appNumber="US 19/281,647"
              year="2025"
              status="Filed · In USPTO review"
              problem="Prompt failures lead to unstable UX and manual intervention."
              solution="A self-healing engine that detects prompt failures using deterministic rules and applies structured corrections, fallbacks, or escalations without relying on more generative calls."
              pdfHref="/assets/patents/self-healing-prompt-engine_brief.pdf"
            />

            <PatentCard
              id="auto-judge"
              title="AutoJudge: Offline, Deterministic Evaluation Framework for AI Outputs"
              appNumber="US 19/279,355"
              year="2025"
              status="Filed · In USPTO review"
              problem="Evaluation of AI outputs is often subjective, manual, and not reproducible."
              solution="An offline evaluation framework that scores AI outputs using pluggable rule sets, deterministic scoring functions, and audit-ready logs for content, safety, and quality."
              pdfHref="/assets/patents/auto-judge_brief.pdf"
            />
          </div>

          {/* TIMELINE SIDEBAR */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/70">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                PORTFOLIO TIMELINE
              </p>
              <div className="mt-4 space-y-4 text-sm">
                <YearBlock
                  year="2024"
                  items={[
                    "EdgeLLM V2 architecture defined and implemented as working prototype.",
                    "PromptPilot and AI Risk Navigator designed to bring deterministic governance to LLM workflows.",
                  ]}
                />
                <YearBlock
                  year="2025"
                  items={[
                    "Expansion into code safety, redaction, traceability, and self-healing prompt systems.",
                    "LLM Code Safety Auditor docketed as a new case · ready for examination.",
                  ]}
                />
                <YearBlock
                  year="2026+"
                  items={[
                    "Plan to evolve these inventions into production-grade, enterprise AI products.",
                    "Focus on edge deployment, offline safety layers, and regulatory alignment.",
                  ]}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-sm shadow-emerald-100/60">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                FOR HIRING MANAGERS & INVESTORS
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                This portfolio is intentionally narrow. Instead of filing scattered ideas,
                I’ve gone deep on one theme: AI systems that are safe, observable, and
                deployable in the real world—edge devices, regulated industries, and
                environments where you can’t hide behind &ldquo;it’s just a beta.&rdquo;
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-800">
                <li>• All filings are backed by working prototypes and technical docs.</li>
                <li>• Architectures are model-agnostic and designed for offline use where needed.</li>
                <li>• The goal is simple: make it easy for you to ship AI products without regretting the risk profile later.</li>
              </ul>
              <div className="mt-4 flex flex-col gap-2 text-xs">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900 shadow-md shadow-emerald-500/40 transition duration-200 hover:-translate-y-[1px] hover:bg-emerald-400"
                >
                  Request NDA access or deep dive
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/70 px-4 py-2 font-semibold text-emerald-900 transition duration-200 hover:border-emerald-400"
                >
                  See how I talk about this work →
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

/* --- Reusable components --- */

type MetricProps = {
  value: string;
  label: string;
};

function Metric({ value, label }: MetricProps) {
  return (
    <div className="space-y-1">
      <p className="text-lg font-semibold text-slate-900 sm:text-xl">
        {value}
      </p>
      <p className="text-xs leading-snug text-slate-500">{label}</p>
    </div>
  );
}

type PatentCardProps = {
  id: string;
  title: string;
  appNumber: string;
  year: string;
  status: string;
  problem: string;
  solution: string;
  pdfHref: string;
};

function PatentCard({
  id,
  title,
  appNumber,
  year,
  status,
  problem,
  solution,
  pdfHref,
}: PatentCardProps) {
  return (
    <article
      id={id}
      className="group rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/15"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Utility Patent Application · {year}
        </p>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
          {status}
        </span>
      </div>
      <h2 className="mt-2 text-sm font-semibold text-slate-900">
        {title}
      </h2>
      <p className="mt-1 text-[11px] text-slate-500">Application No. {appNumber}</p>

      <div className="mt-3 grid gap-3 text-xs text-slate-700 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Problem
          </p>
          <p className="mt-1 leading-relaxed">{problem}</p>
        </div>
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Solution
          </p>
          <p className="mt-1 leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
        <Link
          href={pdfHref}
          className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-4 py-2 font-semibold text-white shadow-sm shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800"
        >
          View redacted brief (PDF)
          <span className="text-[10px]">↗</span>
        </Link>
        <Link
          href={`/contact?context=${encodeURIComponent(`Patent discussion: ${id}`)}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-800 transition duration-200 hover:border-emerald-500"
        >
          Request NDA access
        </Link>
      </div>
    </article>
  );
}

type YearBlockProps = {
  year: string;
  items: string[];
};

function YearBlock({ year, items }: YearBlockProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-semibold text-slate-900">{year}</p>
      <ul className="space-y-1 text-xs text-slate-600">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
