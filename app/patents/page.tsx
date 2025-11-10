// app/patents/page.tsx

import Link from "next/link";

export default function PatentsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Patent Portfolio (High-Level Overview)
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
          I&apos;ve filed eight non-provisional AI patent applications with the USPTO
          as independent inventor (pro se). These filings cover deterministic AI
          safety, edge LLM deployment, and code-security architectures.
        </p>
        <p className="text-xs text-slate-600 max-w-3xl">
          To protect confidentiality and ongoing prosecution, this page shares
          only sanitized, high-level themes. Full documentation is available
          under NDA for qualified reviewers or collaborators. Related research
          papers are currently under review at Frontiers in AI and IEEE venues.
        </p>
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4 text-xs">
          <p className="font-semibold mb-1">Confidentiality Notice</p>
          <p>
            Application numbers, full claim language, and detailed diagrams are
            intentionally omitted from this public site. Full details are shared
            only under NDA.
          </p>
        </div>
      </section>

      {/* Thematic Cards */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Thematic Areas
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Edge AI &amp; Privacy
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Architectures for running powerful LLM capabilities locally,
              without leaking sensitive data into external services.
            </p>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Includes offline, self-forgetting memory patterns and on-device
              alignment debugging and policy enforcement.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              AI Safety &amp; Governance
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deterministic frameworks that turn &quot;AI safety&quot; from
              marketing language into auditable systems.
            </p>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Rule-based risk scoring for LLM responses and reproducible,
              offline evaluation pipelines designed for regulated industries.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Code Security &amp; Traceability
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Systems for hardening and tracing LLM-generated code before it ever
              hits production.
            </p>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Offline rule engines, deterministic remediation flows, and
              traceability layers linking code back to prompts, rules, and
              policies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 space-y-3">
        <p className="text-sm font-semibold text-slate-900">
          Interested in the IP detail?
        </p>
        <p className="text-xs text-slate-600 max-w-3xl">
          For serious hiring discussions, collaborations, or legal review, I can
          share a structured overview of the portfolio under NDA, including
          application numbers, drawings, and claim summaries.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:apurvgaurav@gmail.com?subject=Request%20for%20Patent%20Portfolio%20Overview%20(Under%20NDA)&body=Please%20briefly%20describe%20who%20you%20are%2C%20your%20organization%2C%20and%20the%20context%20for%20reviewing%20this%20IP."
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
          >
            Request Patent Details (NDA)
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Go to Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
