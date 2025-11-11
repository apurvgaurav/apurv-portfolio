import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Publications – Apurv Gaurav",
  description:
    "Research work on edge-deployed LLMs, deterministic safety layers, governance, and privacy-preserving AI architectures.",
};

const researchItems = [
  {
    title: "Edge-Deployed LLM V2: Privacy + Alignment",
    tag: "Edge AI · Privacy",
    venue: "Frontiers in AI (Under Review)",
    description:
      "Proposes a self-forgetting memory and deterministic on-device alignment debugger for edge-deployed LLMs in privacy-critical environments.",
    applicationNo: "19/268,142",
  },
  {
    title: "Deterministic AI Risk Scoring for LLM Governance",
    tag: "LLM Safety · Governance",
    venue: "Journal Submission (In Preparation)",
    description:
      "Rule-based hallucination and bias scoring engine that produces reproducible risk vectors and audit-ready traces for LLM outputs.",
    applicationNo: "19/275,864",
  },
  {
    title: "LLM Code Safety Auditor: Offline Rule-Based Evaluation",
    tag: "Code Safety · Compliance",
    venue: "Conference Submission (Planned)",
    description:
      "Offline static analysis framework for AI-generated code using deterministic OWASP-style checks without sending code to cloud services.",
    applicationNo: "19/283,236",
  },
];

export default function ResearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Research &amp; Publications
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          I publish on edge-deployed LLMs, deterministic safety layers, and
          privacy-preserving AI architectures. Below is a curated view of
          active and planned work. Full manuscripts are shared privately with
          hiring teams and collaborators on request.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {researchItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-xs uppercase tracking-wide text-indigo-600">
              {item.tag}
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">
              {item.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{item.venue}</p>
            <p className="mt-3 text-sm text-gray-700">{item.description}</p>
            <p className="mt-4 text-xs text-gray-500">
              Protected under U.S. Patent Application No. {item.applicationNo}
              . Abstracts and drafts available upon request.
            </p>
            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="text-gray-500">
                Status:{" "}
                <span className="font-medium text-gray-800">
                  Under Review / In Preparation
                </span>
              </span>
              <Link
                href="/contact"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Request manuscript →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
