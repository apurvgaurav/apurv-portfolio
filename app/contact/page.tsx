export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 space-y-12 md:px-6 md:pb-24 md:pt-16">
      {/* Page header */}
      <header className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Contact
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Reach out with real work, real constraints, and real impact.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          The best conversations start with a clear problem and real constraints. If you&apos;re
          hiring for senior AI product roles, working on AI safety and governance, or exploring
          collaborations around edge LLMs, code security, or research, I&apos;m open to talking.
        </p>
      </header>

      {/* Primary contact block */}
      <section className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-4">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Primary contact
          </h2>

          <div className="space-y-2 text-sm text-slate-200 md:text-[0.94rem]">
            <p>
              Email is the fastest and most reliable way to reach me. Please include enough
              context so I can respond thoughtfully instead of guessing.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4 text-sm text-slate-200">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400 uppercase mb-2">
              Email
            </p>
            <p className="font-mono text-sm text-slate-50">
              apurvgaurav@gmail.com
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              I typically respond to focused, relevant messages within a few days.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="mailto:apurvgaurav@gmail.com?subject=AI%20Product%20Role%20-%20Intro&body=Hi%20Apurv%2C%0D%0A%0D%0AWe%27re%20reaching%20out%20about%20a%20role%20that%20may%20fit%20your%20AI%20product%20background.%20Here%20are%20the%20details%3A%0D%0A-%20Company%3A%0D%0A-%20Role%20level%20%28eg.%20L7%20AI%20PM%29%3A%0D%0A-%20Team%2FOrg%3A%0D%0A-%20Location%20%2F%20Remote%3A%0D%0A-%20Comp%20band%20%28base%20%2B%20equity%29%3A%0D%0A-%20Why%20you%20think%20it%27s%20a%20fit%3A%0D%0A%0D%0ABest%2C%0D%0A"
              className="rounded-full bg-sky-500 px-4 py-1.5 font-medium text-slate-950 hover:bg-sky-400"
            >
              Email about a role
            </a>
            <a
              href="mailto:apurvgaurav@gmail.com?subject=Collaboration%20%2F%20Research%20-%20AI%20Safety&body=Hi%20Apurv%2C%0D%0A%0D%0AI%27m%20reaching%20out%20about%20a%20potential%20collaboration%20around%20AI%20safety%2C%20governance%2C%20or%20edge%20LLMs.%20Here%20are%20the%20details%3A%0D%0A-%20Context%20%2F%20project%3A%0D%0A-%20Org%20%2F%20team%3A%0D%0A-%20What%20you%27re%20looking%20for%3A%0D%0A-%20Timeline%3A%0D%0A%0D%0ABest%2C%0D%0A"
              className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-slate-400"
            >
              Email about collaboration
            </a>
          </div>
        </div>

        {/* For hiring managers / recruiters */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-3">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            For hiring managers &amp; recruiters
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
            I&apos;m most relevant for roles at the intersection of{" "}
            <span className="text-slate-100">
              AI product, safety, and platform
            </span>
            , typically at senior staff / L7+ scope.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
            <li>• AI Product Manager – safety, governance, or platform.</li>
            <li>• Product lead for edge AI, privacy-preserving ML, or code security.</li>
            <li>• Roles where patents + prototypes + real constraints actually matter.</li>
          </ul>
        </div>
      </section>

      {/* What to include */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          What helps me respond quickly
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <p className="text-xs font-semibold text-slate-100">
              If you&apos;re reaching out about a role
            </p>
            <ul className="mt-1 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
              <li>• Company, team, and high-level charter.</li>
              <li>• Level / scope (eg. L7 AI PM, Principal PM, etc.).</li>
              <li>• Location / remote policy and comp band.</li>
              <li>• Why you think my work (EdgeLLM V2, AI Risk Navigator, Code Safety Auditor, etc.) is relevant.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <p className="text-xs font-semibold text-slate-100">
              If you&apos;re reaching out about collaboration
            </p>
            <ul className="mt-1 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
              <li>• Problem space and why it matters now.</li>
              <li>• What you&apos;re hoping I can contribute (product thinking, architecture, patents, research, etc.).</li>
              <li>• Timeframe and any constraints (regulatory, security, infra).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="space-y-3 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          One line summary
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          If you have serious work at the intersection of{" "}
          <span className="text-slate-100">
            AI product, safety, privacy, and code security
          </span>
          , I&apos;m interested. Send a clear note, include the constraints, and we&apos;ll see if it&apos;s a fit.
        </p>
      </section>
    </div>
  );
}
