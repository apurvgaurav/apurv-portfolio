// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Apurv Gaurav – AI Product, Edge AI & LLM Safety",
  description:
    "Contact Apurv Gaurav to discuss AI Product roles, edge-deployed LLM systems, deterministic AI safety layers, and patent-backed AI platforms.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 space-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Contact
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          For senior AI Product roles, collaborations, or speaking invitations,
          the fastest way to reach me is via email. I&apos;m open to roles
          focused on Edge AI, LLM Safety, privacy-preserving architectures, and
          AI platform strategy.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Email (preferred)
          </h2>
          <p className="mt-1 text-sm text-gray-700">
            <a
              href="mailto:apurvgaurav@gmail.com?subject=AI%20Product%20Opportunity%20or%20Collaboration"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              apurvgaurav@gmail.com
            </a>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Include role details, team context, and timelines if you&apos;re
            reaching out about a position.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            LinkedIn (secondary)
          </h2>
          <p className="mt-1 text-sm text-gray-700">
            For networking, community engagement, or follow-up on my writing:
          </p>
          <p className="mt-1 text-sm">
            <a
              href="https://www.linkedin.com/in/apurvgaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              linkedin.com/in/apurvgaurav
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            What I can walk you through
          </h2>
          <ul className="mt-2 text-xs text-gray-700 space-y-1">
            <li>• Patent-backed Edge AI and offline LLM architectures</li>
            <li>• Deterministic safety and governance layers around LLMs</li>
            <li>• Turning research and IP into production-ready AI platforms</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-6 shadow-sm">
        <p className="text-sm font-semibold text-indigo-900 mb-1">
          For hiring managers &amp; recruiters
        </p>
        <p className="text-xs text-indigo-900/90">
          If you share a role, I&apos;m happy to prepare a focused walk-through
          of the patents, demos, and systems that best match your team&apos;s
          scope—whether that&apos;s Edge AI, AI Safety, or AI Platform
          leadership.
        </p>
      </section>
    </main>
  );
}
