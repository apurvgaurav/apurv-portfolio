// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="pt-8 animate-fade-in-up">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left: Main pitch */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-indigo-600">
              AI Product Leadership · Edge AI · LLM Safety
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Patent-backed AI Product Leader
              <br />
              <span className="text-indigo-700">
                building edge-deployed, safety-first LLM systems.
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              I design and ship deterministic, audit-ready AI products—edge LLM
              assistants, LLM risk triage, and code safety engines—built to meet
              FAANG-level reliability, privacy, and compliance standards.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* SINGLE CALENDLY BUTTON */}
              <a
                href="https://calendly.com/apurvgaurav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                Book a call →
              </a>

              <Link
                href="/media"
                className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-0.5 hover:shadow-sm transition"
              >
                View talks &amp; media
              </Link>
            </div>
          </div>

          {/* Right: Snapshot card */}
          <div className="hidden md:block">
            <div className="relative rounded-3xl border border-gray-200 bg-white shadow-sm p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Snapshot
              </p>
              <p className="mt-2 text-sm text-gray-900 font-semibold">
                Patent-backed AI Product Leader focused on:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-gray-700">
                <li>• Edge-deployed LLM assistants with strict privacy bounds</li>
                <li>• Deterministic safety and governance around LLM outputs</li>
                <li>• Turning IP into production-ready, compliant platforms</li>
              </ul>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-xl font-bold text-gray-900">8</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500">
                    USPTO Filings
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">5</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500">
                    Prototypes
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">3</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500">
                    Papers
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-30%] h-32 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-gray-50 py-8 rounded-2xl animate-fade-in-up">
        <div className="grid gap-6 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
              USPTO Filings
            </div>
            <p className="mt-1 text-[11px] text-gray-500">
              Edge AI, LLM safety, privacy &amp; alignment.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold text-gray-900">5</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
              Production-Ready Prototypes
            </div>
            <p className="mt-1 text-[11px] text-gray-500">
              Edge assistants, risk triage, code safety, and more.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
              Research Papers &amp; Deep Dives
            </div>
            <p className="mt-1 text-[11px] text-gray-500">
              Submitted to privacy, safety, and governance venues.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold text-gray-900">250+</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
              Pages of Technical Docs
            </div>
            <p className="mt-1 text-[11px] text-gray-500">
              Architecture, patents, whitepapers, and design specs.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK OVERVIEW STRIP */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">
            Edge AI &amp; Offline Intelligence
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Architecting LLM assistants that run on-device, respect data
            boundaries, and keep working when the network doesn&apos;t.
          </p>
          <Link
            href="/demos"
            className="mt-3 inline-flex text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Explore demos →
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">
            Deterministic Safety &amp; Governance
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Building rule-based risk engines for hallucination, bias, and policy
            violations—designed for audit trails, not vibes.
          </p>
          <Link
            href="/patents"
            className="mt-3 inline-flex text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            See patent-backed work →
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">
            Product Strategy &amp; Execution
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Turning research and IP into roadmaps, prototypes, and launch-ready
            AI features that survive real-world constraints.
          </p>
          <Link
            href="/experience"
            className="mt-3 inline-flex text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View experience →
          </Link>
        </div>
      </section>

      {/* FOR HIRING MANAGERS STRIP */}
      <section className="rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-6 shadow-sm">
        <p className="text-sm font-semibold text-indigo-900 mb-1">
          For hiring managers &amp; recruiters
        </p>
        <p className="text-xs text-indigo-900/90 max-w-3xl">
          This portfolio is a live snapshot of how I think and build: patents,
          research, and working demos across Edge AI, LLM safety, and privacy.
          If you&apos;re exploring senior AI Product roles at FAANG-level
          companies, I&apos;m happy to walk through the systems in detail with
          your engineering and leadership teams.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="https://calendly.com/apurvgaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
          >
            Share a role or opportunity →
          </a>
          <Link
            href="/media"
            className="inline-flex items-center rounded-md border border-indigo-200 px-4 py-2 text-xs font-semibold text-indigo-900 hover:bg-indigo-100 transition"
          >
            Download leadership summary (coming soon)
          </Link>
        </div>
      </section>
    </div>
  );
}
