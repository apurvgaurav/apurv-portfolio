// app/experience/page.tsx

import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      {/* Intro + Resume */}
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Experience
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
          My career sits on two rails: enterprise-scale reliability and releases,
          and an independent AI product lab focused on deterministic safety,
          edge-deployed LLMs, and governance frameworks. Both inform how I
          operate as an AI Product Leader.
        </p>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Download Resume (PDF)
            </p>
            <p className="text-xs text-slate-600">
              Concise, recruiter-ready summary of roles, education, and patent-backed
              projects.
            </p>
          </div>
          {/* TODO: update href to actual resume link when you have it */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Industry Experience
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Platform &amp; Release Operations
                </p>
                <p className="text-xs text-slate-600">Comcast</p>
              </div>
              <p className="text-xs text-slate-500">Recent Role</p>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li>
                • Led cross-team triage and release readiness for broadband firmware
                platforms (RDK-B, Wi-Fi telemetry, customer gateways).
              </li>
              <li>
                • Analyzed logs and field data to debug issues across millions of
                deployed devices.
              </li>
              <li>
                • Collaborated with engineering, product, and operations to stabilize
                releases and reduce regressions.
              </li>
              <li>
                • Focused on reliability, observability, and controlled rollouts
                instead of &quot;fire and forget&quot; launches.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Independent AI Product Lab */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Independent AI Product Lab
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          I run an independent AI lab focused on systems that can be audited,
          regulated, and trusted. The work centers on deterministic AI safety,
          edge deployment, and code-security frameworks.
        </p>
        <p className="text-xs text-slate-600">
          Filed eight non-provisional AI patent applications with the USPTO as
          independent inventor (pro se), covering deterministic AI safety,
          privacy-preserving architectures, and code-security frameworks. Authoring
          research papers aligned with these systems, currently under review at
          Frontiers in AI and IEEE venues.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              EdgeLLM V2 – Privacy + Alignment
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Offline, self-forgetting LLM architecture with on-device alignment
              debugger for regulated environments.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              AI Risk Navigator
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deterministic rule engine that scores and triages LLM risks
              (hallucination, bias, safety violations, latency anomalies) in
              real time.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              LLM Code Safety Auditor
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Offline, rule-based source code evaluation and remediation engine
              for LLM-generated or human-written code.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              PromptPilot, AutoRedact AI, TraceSafe AI, Self-Healing Prompt Engine
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Governance-focused systems for prompt policies, data redaction,
              traceability, and self-healing prompt chains.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Education
        </h2>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Doctor of Engineering (DEng), Engineering
            </p>
            <p className="text-xs text-slate-600">Penn State World Campus · In Progress</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Master of Science
            </p>
            <p className="text-xs text-slate-600">University of Pennsylvania · 2010</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Bachelor of Technology
            </p>
            <p className="text-xs text-slate-600">
              {/* Replace with your institution and discipline */}
              [Your Institution Name] · [Discipline]
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Ready for the deep technical side?
          </p>
          <p className="text-xs text-slate-600">
            Explore the high-level themes of my patent portfolio or reach out
            directly.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/patents"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
          >
            View Patents
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
