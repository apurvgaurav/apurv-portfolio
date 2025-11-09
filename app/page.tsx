<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
=======
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-10 py-12 md:grid-cols-[3fr,2fr] md:py-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              AI Product Leadership · Edge AI · Governance
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Patent-Backed{" "}
              <span className="text-blue-400">AI Product Leader</span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Building deterministic AI governance systems that make models
              safer, faster, and auditable — from edge devices to enterprise
              platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-400"
              >
                View Portfolio
              </Link>
              <Link
                href="/story"
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400 hover:text-blue-400"
              >
                Read My Story
              </Link>
            </div>
          </div>

          {/* Right hero panel */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Focus Areas
            </div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>• Edge-deployed LLM architectures with strict privacy guarantees</li>
              <li>• Deterministic AI safety and governance frameworks</li>
              <li>• Rule-based risk engines for hallucination and bias detection</li>
              <li>• Product strategy at L7/L8 scope and depth</li>
            </ul>
          </div>
        </section>

        {/* Proof bar */}
        <section>
          <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:grid-cols-3 md:p-6">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                USPTO Filings
              </p>
              <p className="text-lg font-semibold text-slate-50">8+ AI patents</p>
              <p className="text-xs text-slate-400">
                Non-provisional applications filed pro se.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Research Track
              </p>
              <p className="text-lg font-semibold text-slate-50">
                DEng @ Penn State
              </p>
              <p className="text-xs text-slate-400">
                Doctor of Engineering – AI safety & alignment focus.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Systems Built
              </p>
              <p className="text-lg font-semibold text-slate-50">
                4 governance frameworks
              </p>
              <p className="text-xs text-slate-400">
                EdgeLLM V2, AI Risk Navigator, PromptPilot, Code Safety Auditor.
              </p>
            </div>
          </div>
        </section>

        {/* Mini story */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            From release ops to deterministic AI governance
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
            I started in release operations, where reliability and metrics
            mattered more than hype. That discipline evolved into a career
            designing deterministic AI governance systems that behave as
            predictably as the infrastructure they run on. My focus now is
            building frameworks that let enterprises ship aligned AI as
            confidently as they ship code.
          </p>
          <div className="mt-4">
            <Link
              href="/story"
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Read full story →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-r from-slate-900 to-slate-950 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Ready to build trustworthy AI products?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              I partner with teams to design and ship deterministic AI
              governance systems — from edge deployments to enterprise-scale
              safety tooling.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-400"
              >
                Contact / Work with Me
              </Link>
              <Link
                href="/patents"
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400 hover:text-blue-400"
              >
                View patents & publications
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
>>>>>>> d7f43bc (Initial portfolio site)
  );
}
