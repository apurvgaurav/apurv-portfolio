import Link from "next/link";

export const metadata = {
  title: "Demos | Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Explore edge-deployed LLM prototypes, deterministic safety engines, and patent-backed demos built by Apurv Gaurav.",
};

export default function DemosPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-3">
          Product Demos &amp; Prototypes
        </h1>
        <p className="text-sm sm:text-base text-indigo-900/80 leading-relaxed max-w-3xl">
          I design deterministic, audit-ready AI systems.  
          These demos represent active prototypes and research artifacts built under
          my 2025 patent portfolio — all privacy-preserving, offline-ready, and
          aligned with FAANG-level product reliability.
        </p>
        <p className="mt-3 text-xs text-indigo-800">
          *All demos shown here are protected under filed U.S. patent applications.
        </p>
      </section>

      {/* DEMO GRID */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* DEMO CARD 1 */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            {/* Replace this <div> with your <video> or <Image> when ready */}
            Coming Soon — EdgeLLM V2 Demo
          </div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900">
            Edge-Deployed LLM V2
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Privacy-preserving, offline LLM assistant with self-forgetting memory and
            real-time alignment debugger. Running entirely on-device.
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            Status: Preparing 30-second video · Target: Dec 17 2025
          </p>
        </div>

        {/* DEMO CARD 2 */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            Coming Soon — PromptPilot Demo
          </div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900">PromptPilot</h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Intelligent prompt orchestration and debugging system.  
            Enables deterministic prompt evaluation and reuse with on-device policy
            logic.
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            Status: Preparing 30-second video · Target: Dec 17 2025
          </p>
        </div>

        {/* DEMO CARD 3 */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            Coming Soon — AI Risk Navigator Demo
          </div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900">
            AI Risk Navigator
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Real-time deterministic triage engine for hallucination, bias, and latency
            risks — rule-based, auditable, and explainable.
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            Status: Preparing 30-second video · Target: Dec 17 2025
          </p>
        </div>

        {/* DEMO CARD 4 */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            Coming Soon — LLM Code Safety Auditor Demo
          </div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900">
            LLM Code Safety Auditor
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Offline rule-based engine for source-code auditing and deterministic
            remediation using OWASP-mapped rule sets.
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            Status: Preparing 30-second video · Target: Dec 17 2025
          </p>
        </div>

        {/* DEMO CARD 5 */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            Coming Soon — Self-Healing Prompt Engine Demo
          </div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900">
            Self-Healing Prompt Engine
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Deterministic prompt repair and self-correction logic built without
            generative heuristics — optimized for enterprise LLM reliability.
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            Status: Preparing 30-second video · Target: Dec 17 2025
          </p>
        </div>

        {/* DEMO CARD 6 */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            Coming Soon — TraceSafe AI Demo
          </div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900">
            TraceSafe AI
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Deterministic rule tracing system for AI pipelines — ensuring end-to-end
            transparency and reproducible audit trails.
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            Status: Preparing 30-second video · Target: Dec 17 2025
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center">
        <p className="text-sm font-semibold text-gray-900 mb-2">
          Want to see these systems in action?
        </p>
        <p className="text-xs text-gray-600 mb-3">
          Full demo videos will be published here before <b>Dec 17 2025</b>.  
          Contact me for private walkthroughs or research collaboration.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
        >
          Contact for Private Demo →
        </Link>
      </section>
    </div>
  );
}
