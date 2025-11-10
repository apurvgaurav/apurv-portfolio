// app/experience/page.tsx
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-24 space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            From large-scale systems to AI product strategy.
          </h1>
          <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
            My career spans{" "}
            <span className="text-zinc-100">release operations, telemetry, and
            large-scale platforms</span>, now focused on{" "}
            <span className="text-zinc-100">
              AI product management in safety-critical and privacy-sensitive
              environments
            </span>
            . I care about products that can survive audits, not just demos.
          </p>
        </header>

        {/* Current focus */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Current focus
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-300">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                AI Product &amp; Research
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                Edge AI · Safety · Governance
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                Driving patent-backed prototypes (EdgeLLM V2, AI Risk
                Navigator, LLM Code Safety Auditor) with the depth required
                for both real deployments and peer-reviewed research.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-300">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Doctor of Engineering
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                Penn State University (in progress)
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                Focusing on applied AI, systems thinking, and innovation
                frameworks – treating each patent and prototype as a real
                engineering system, not just a paper exercise.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Selected experience
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-100">
                    AI / Platform Product Work – Independent
                  </p>
                  <p className="text-xs text-zinc-500">
                    Edge AI · AI Safety · Code Security · 2023 – Present
                  </p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                <li>
                  • Designed and built patent-backed systems for edge-deployed
                  LLMs, deterministic AI risk triage, and offline code safety –
                  each with working prototypes and complete USPTO filings.
                </li>
                <li>
                  • Structured each project end-to-end: problem framing,
                  architecture, risk model, measurement, and executive-ready
                  narrative for VPs and hiring managers.
                </li>
                <li>
                  • Aligned all work with EB-1 trajectory – focusing on
                  originality, technical depth, and clearly demonstrable impact.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-100">
                    Release Operations &amp; Telemetry – Comcast (Contract)
                  </p>
                  <p className="text-xs text-zinc-500">
                    Broadband firmware / RDK-B platform · Past role
                  </p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                <li>
                  • Worked on large-scale broadband firmware and telemetry,
                  triaging issues across production gateways and Wi-Fi devices.
                </li>
                <li>
                  • Deep exposure to real-world reliability problems, negative
                  telemetry signals, and the operational reality that modern AI
                  products must integrate with.
                </li>
                <li>
                  • Experience here directly informs how I design AI safety and
                  observability into products from day zero.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-100">
                    Master&apos;s – University of Pennsylvania
                  </p>
                  <p className="text-xs text-zinc-500">
                    Master&apos;s, University of Pennsylvania
                  </p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                <li>
                  • Built a strong foundation in engineering and systems, now
                  applied to AI product work and doctoral-level research.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How I work */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            How I like to work
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">Systems-first</p>
              <p className="mt-2">
                I start from constraints, telemetry, and risk surfaces – then
                build AI into the system, not the other way around.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">
                Determinism where it matters
              </p>
              <p className="mt-2">
                I prefer deterministic, replayable components around LLMs so
                audits, debugging, and compliance are actually possible.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-100">
                Patents + prototypes + people
              </p>
              <p className="mt-2">
                I like shipping things people can touch: live demos, dashboards,
                and clear documents that let leaders make fast decisions.
              </p>
            </div>
          </div>
        </section>

        <div className="pt-4 text-center text-sm text-zinc-300">
          <p>
            If you want to understand how this experience maps into a specific
            Staff / L7 AI PM role,{" "}
            <Link
              href="/contact"
              className="font-medium text-zinc-100 underline-offset-4 hover:underline"
            >
              contact me
            </Link>{" "}
            and I&apos;ll share a role-specific view of my portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}
