import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos & Prototypes – Patent-Backed AI Systems – Apurv Gaurav",
  description:
    "Working demos built around patent-backed AI systems, including EdgeLLM V2, AI Risk Navigator, and LLM Code Safety Auditor.",
};


const demos = [
  {
    name: "EdgeLLM V2: Privacy + Alignment",
    pillar: "Edge AI · Privacy",
    description:
      "Offline LLM assistant running fully on-device with self-forgetting memory and an on-device alignment debugger for high-sensitivity workflows.",
    status: "Internal demo · Video walkthrough available on request.",
    applicationNo: "19/268,142",
  },
  {
    name: "AI Risk Navigator",
    pillar: "LLM Safety · Governance",
    description:
      "Deterministic triage engine that scores hallucination, bias, and policy violations, producing reproducible risk vectors and JSON audit trails.",
    status: "Prototype deployed · Policy JSON examples available.",
    applicationNo: "19/275,864",
  },
  {
    name: "LLM Code Safety Auditor",
    pillar: "Code Safety · Compliance",
    description:
      "Offline, rule-based static analysis engine for AI-generated code using OWASP-aligned checks, operating without external API calls.",
    status: "Prototype implemented · CLI and report samples available.",
    applicationNo: "19/283,236",
  },
];

export default function DemosPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Demos &amp; Prototypes
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          These are working prototypes and demo flows built around my patent
          portfolio. All demos are sanitized for IP protection and can be
          walked through live in a 15–30 minute session with hiring teams.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {demos.map((demo) => (
          <article
            key={demo.name}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-slate-900 text-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-xs uppercase tracking-wide text-teal-300">
              {demo.pillar}
            </div>
            <h2 className="mt-2 text-xl font-semibold">{demo.name}</h2>
            <p className="mt-3 text-sm text-slate-100/90">
              {demo.description}
            </p>
            <p className="mt-3 text-xs text-slate-300">{demo.status}</p>
            <p className="mt-4 text-[11px] text-slate-400">
              Protected under U.S. Patent Application No. {demo.applicationNo}.
              Demo clips and architecture diagrams shared privately with
              interview loops and hiring managers.
            </p>
            <div className="mt-4 flex justify-between items-center text-sm">
              <Link
                href="/contact"
                className="font-medium text-indigo-300 hover:text-indigo-200"
              >
                Request live demo →
              </Link>
              <span className="rounded-full border border-slate-600 px-3 py-1 text-[11px] uppercase tracking-wide">
                Patent-backed
              </span>
            </div>

            <div className="pointer-events-none absolute inset-x-[-20%] bottom-[-40%] h-40 bg-gradient-to-tr from-indigo-500/30 via-teal-400/20 to-transparent blur-3xl" />
          </article>
        ))}
      </section>
    </main>
  );
}
