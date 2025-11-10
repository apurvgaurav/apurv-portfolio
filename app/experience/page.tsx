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
          My work spans large-scale network platforms at Comcast and an
          independent AI product lab focused on deterministic safety, edge
          deployment, and governance frameworks. Both sides inform how I operate
          as an AI Product Leader.
        </p>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Download Resume (PDF)
            </p>
            <p className="text-xs text-slate-600">
              Recruiter-ready summary of roles, education, and patent-backed
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

      {/* Comcast Experience */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Industry Experience
        </h2>

        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm space-y-6">
          {/* Role header */}
          <div>
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              Product Manager – AI Systems
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Comcast Corporation · 2014 – Present · Philadelphia, PA (Hybrid / Contractor)
            </p>
          </div>

          {/* Resume View */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">
              Resume View
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>
                Led cross-functional initiatives to integrate AI-driven analytics and
                automation across Comcast&apos;s broadband and device ecosystem
                (RDK-B gateways, telemetry, and network optimization).
              </li>
              <li>
                Defined product strategy for intelligent monitoring and risk-mitigation
                features that improved field reliability, reduced mean-time-to-repair
                (MTTR), and enhanced user experience metrics by &gt; 30%.
              </li>
              <li>
                Partnered with data science and engineering teams to deploy scalable
                ML-based anomaly detection pipelines for Wi-Fi QoE and predictive
                diagnostics.
              </li>
              <li>
                Collaborated with security, compliance, and platform teams to introduce
                privacy-aligned edge inference workflows, laying groundwork for future
                on-device AI systems.
              </li>
              <li>
                Drove stakeholder alignment across operations, product, and leadership
                groups — translating technical findings into business impact and
                measurable KPIs.
              </li>
              <li>
                Mentored junior PMs and engineers, evangelizing best practices in AI
                product lifecycle management and deterministic design approaches.
              </li>
              <li>
                Supported enterprise-wide innovation by contributing to internal AI
                frameworks, patent disclosures, and next-gen edge-AI proof-of-concepts.
              </li>
            </ul>
          </div>

          {/* Narrative View */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Narrative View
            </p>
        <p className="text-sm text-slate-700 leading-relaxed">
  At Comcast, I work on how large-scale network platforms evolve with AI.
  I operate at the intersection of data, reliability, and innovation —
  translating system telemetry into predictive intelligence that keeps
  millions of homes connected. My focus has been on building
  privacy-preserving, edge-optimized AI systems that reduce downtime,
  improve customer experience, and prepare Comcast for the next wave of
  intelligent network management.
</p>

            <p className="text-sm text-slate-700 leading-relaxed">
              This role strengthened my belief that AI product management isn&apos;t just
              about algorithms; it&apos;s about orchestration — aligning people,
              processes, and technology to make machine intelligence genuinely useful
              and scalable.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold">Core Skills:</span>{" "}
              AI Product Strategy · Edge &amp; Network AI · Data-Driven Roadmapping ·
              Cross-Functional Leadership · AWS · MLOps · Privacy &amp; Compliance ·
              Patent Innovation
            </p>
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
        <p className="text-xs text-slate-600 max-w-3xl">
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
              (hallucination, bias, safety violations, latency anomalies) in real
              time.
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
<section className="space-y-5 mt-10">
  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Education</h2>

  <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-slate-900">
        🧠 Doctor of Engineering (DEng), Artificial Intelligence (In Progress)
      </h3>
      <p className="text-sm text-slate-600">Penn State World Campus</p>
    </div>
    <p className="mt-1 text-sm text-slate-700">Focus: Applied AI Systems · Product Innovation · Governance Frameworks</p>
  </div>

 <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <h3 className="text-base font-semibold text-slate-900">
      🎓 Master of Science (MS), Urban Spatial Analytics
    </h3>
    <p className="text-sm text-slate-600">University of Pennsylvania</p>
  </div>
  <p className="mt-1 text-sm text-slate-700">
    Focus: Geospatial Data Science · Urban Systems Modeling · Predictive Analytics
  </p>
</div>


  <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-slate-900">
        💻 Bachelor of Information Technology
      </h3>
      <p className="text-sm text-slate-600">
        Acropolis Institute of Technology and Research, Indore, India
      </p>
    </div>
    <p className="mt-1 text-sm text-slate-700">
      Focus: Software Engineering · Networks · Applied Computer Science
    </p>
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
