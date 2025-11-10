// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-20 pt-24">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            For hiring managers, VPs, and collaborators.
          </h1>
          <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
            If you&apos;re evaluating candidates for{" "}
            <span className="text-zinc-100">
              Senior / Staff / L7+ AI Product roles
            </span>{" "}
            – or exploring a collaboration around AI safety, edge LLMs, or code
            security – this is the fastest way to reach me.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[3fr,2fr]">
          {/* Left: Context + what I can help with */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-zinc-100">
                What I can help you evaluate
              </h2>
              <p className="text-sm text-zinc-300">
                I specialize in taking AI products from idea → architecture →{" "}
                <span className="text-zinc-100">working prototype</span> →{" "}
                <span className="text-zinc-100">
                  patent and publication–ready
                </span>
                , especially in regulated and privacy-sensitive environments.
              </p>
            </div>

            <div className="space-y-3 text-sm text-zinc-300">
              <div>
                <p className="font-medium text-zinc-100">
                  EdgeLLM V2 – Privacy + Alignment
                </p>
                <p className="text-xs text-zinc-400">
                  Edge-deployed LLM assistant with self-forgetting memory and
                  on-device alignment debugger. Useful if you care about
                  shipping AI into environments where cloud is not acceptable.
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-100">
                  AI Risk Navigator V2
                </p>
                <p className="text-xs text-zinc-400">
                  Deterministic risk triage for LLM outputs (hallucination,
                  bias, latency anomalies) with audit-grade logs – relevant for
                  compliance, governance, and &quot;AI safety in production&quot;
                  conversations.
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-100">
                  LLM Code Safety Auditor
                </p>
                <p className="text-xs text-zinc-400">
                  Offline, rule-based engine for scanning code using OWASP-style
                  rules, designed for air-gapped engineering environments –
                  helpful if you&apos;re thinking about secure AI engineering
                  workflows.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">
                How I usually structure a first conversation
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>• 10 minutes: your context and what you&apos;re hiring for</li>
                <li>• 10–15 minutes: 1–2 flagship projects (EdgeLLM V2, AI Risk Navigator, etc.)</li>
                <li>• 5 minutes: Q&amp;A on scope, org fit, and next steps</li>
              </ul>
            </div>
          </div>

          {/* Right: Direct contact options */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
              <h2 className="text-sm font-medium text-zinc-100">
                Contact details
              </h2>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <p>
                  <span className="text-zinc-500">Email:</span>{" "}
                  <a
                    href="mailto:apurvgaurav@gmail.com"
                    className="font-medium text-zinc-100 hover:underline"
                  >
                    apurvgaurav@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-zinc-500">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/apurvgaurav"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-zinc-100 hover:underline"
                  >
                    linkedin.com/in/apurvgaurav
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">
                Suggested email subject line
              </p>
              <p className="mt-2 rounded-lg bg-zinc-900 px-3 py-2 font-mono text-[11px] text-zinc-300">
                &quot;Staff / L7 AI PM opportunity – Edge AI / Safety / Governance&quot;
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">
                If you&apos;re a recruiter
              </p>
              <p className="mt-2">
                Send a short note with the role, scope, team, and reporting
                structure. I&apos;ll respond with a tailored overview of which
                projects (and patents) are most relevant to your search.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">If you&apos;re a VP</p>
              <p className="mt-2">
                If you want to sanity-check an AI roadmap, discuss edge/safety
                architecture, or explore a focused consulting-style engagement,
                mention that in your email and we can structure something
                concrete.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
