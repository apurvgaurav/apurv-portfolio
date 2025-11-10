export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-14 space-y-16 md:px-6 md:pb-24 md:pt-20">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Patent-backed AI product leader
        </p>

        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.5rem] md:leading-tight">
          I build edge AI, safety, and governance products that survive real auditors.
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          I&apos;m Apurv Gaurav — an AI Product Manager operating at L7+ scope, with 8+ USPTO
          non-provisional filings across edge-deployed LLMs, deterministic safety engines, and
          code security. I focus on products that can actually ship inside regulated,
          privacy-critical environments.
        </p>

        {/* Proof bar */}
        <div className="grid gap-4 text-[11px] text-slate-300 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-100">8+</p>
            <p>USPTO non-provisional filings, drafted and filed pro se.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">DEng in progress</p>
            <p>Doctor of Engineering at Penn State, focused on innovation &amp; systems.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Edge AI &amp; safety</p>
            <p>Portfolio of platforms: EdgeLLM V2, AI Risk Navigator, Code Safety Auditor.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs mt-2">
          <a
            href="/projects"
            className="rounded-full bg-sky-500 px-4 py-1.5 font-medium text-slate-950 hover:bg-sky-400"
          >
            View flagship projects
          </a>
          <a
            href="/experience"
            className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-slate-400"
          >
            For hiring managers
          </a>
        </div>
      </section>

      {/* For hiring managers */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          For hiring managers
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          If you&apos;re hiring for senior AI product roles, treat this site as a portfolio of
          <span className="text-slate-100">
            {" "}patent-backed, prototype-backed AI platforms
          </span>{" "}
          — not slideware. The projects and patents here show how I think about architecture,
          risk, and shipping under regulatory and privacy constraints.
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
          <li>• Edge-deployed LLMs with real privacy constraints.</li>
          <li>• Deterministic safety and governance engines, not model-on-model vibes.</li>
          <li>• Code security and traceability designed for auditors and security teams.</li>
        </ul>
      </section>

      {/* Explore the portfolio */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Explore the portfolio
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="/projects"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/70 hover:bg-slate-900"
          >
            <p className="text-xs font-semibold text-slate-100 mb-1">
              Projects
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              Flagship AI platforms like EdgeLLM V2, AI Risk Navigator, and LLM Code Safety
              Auditor — with problem, solution, and impact.
            </p>
            <p className="mt-3 text-[11px] text-sky-400 group-hover:text-sky-300">
              View projects →
            </p>
          </a>

          <a
            href="/experience"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/70 hover:bg-slate-900"
          >
            <p className="text-xs font-semibold text-slate-100 mb-1">
              Experience
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              How release ops, systems thinking, and a DEng track map into L7+ AI product work.
            </p>
            <p className="mt-3 text-[11px] text-sky-400 group-hover:text-sky-300">
              View experience →
            </p>
          </a>

          <a
            href="/patents"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/70 hover:bg-slate-900"
          >
            <p className="text-xs font-semibold text-slate-100 mb-1">
              Patents &amp; publications
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              8+ non-provisional filings plus research papers in progress, all aligned to edge
              AI, safety, and code security.
            </p>
            <p className="mt-3 text-[11px] text-sky-400 group-hover:text-sky-300">
              View IP portfolio →
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
