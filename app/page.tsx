// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Outer container */}
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-12 md:px-6 lg:px-8">
        {/* HERO */}
        <section className="grid items-center gap-10 border-b border-slate-200 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
          {/* Photo + badge */}
          <div className="flex flex-col items-center justify-center gap-6 md:items-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-400/60 via-sky-500/40 to-indigo-600/50 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-slate-200/70">
             <Image
  src="/assets/apurv_photo.jpg"
  alt="Apurv Gaurav"
  width={320}
  height={320}
  className="rounded-2xl shadow-xl"
/>
              </div>
            </div>

            <div className="rounded-full border border-emerald-500/40 bg-emerald-50 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
              AI Product Leadership · Edge AI · LLM Safety
            </div>
          </div>

          {/* Text + CTAs */}
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                APURV GAURAV · AI PRODUCT MANAGER
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Patent-backed AI Product Leader
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-700">
                  building edge-deployed, safety-first LLM systems.
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                I design and ship deterministic, audit-ready AI products—Edge LLMs, LLM
                risk triage, and code safety engines—built to meet FAANG-level
                reliability, privacy, and compliance standards.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/assets/apurv_leadership_summary.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-sky-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
              >
                Download Leadership Summary
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">
                  ↘
                </span>
              </Link>

              <Link
                href="/patents"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-[1px] hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20"
              >
                View Patents
                <span className="text-xs">📄</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                Or contact me directly
              </Link>
            </div>

            {/* Snapshot metrics */}
            <div className="mt-4 grid grid-cols-2 gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm shadow-slate-200/60 sm:grid-cols-4">
              <Metric value="8" label="Utility patent applications filed" />
              <Metric value="5" label="Production-ready prototypes" />
              <Metric value="3" label="Research papers & deep-dive docs" />
              <Metric value="250+" label="Pages of technical & product docs" />
            </div>
          </div>
        </section>

        {/* FOR HIRING MANAGERS STRIP */}
        <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 px-5 py-5 text-slate-50 shadow-md shadow-slate-900/60">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                FOR HIRING MANAGERS
              </p>
              <h2 className="text-lg font-semibold">
                You’re not just hiring an IC PM—you’re hiring an architecture-level
                partner.
              </h2>
              <p className="max-w-2xl text-sm text-slate-300">
                I specialize in turning vague &ldquo;AI initiatives&rdquo; into shipped,
                compliant systems: edge-deployed LLMs, deterministic risk scoring, and
                rule-based safety layers that legal, infra, and security can all sign off
                on.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md shadow-emerald-500/40 transition duration-200 hover:-translate-y-[1px] hover:bg-emerald-400"
              >
                View leadership track record
                <span className="text-xs">↗</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-transparent px-4 py-2 text-xs font-semibold text-emerald-100 transition duration-200 hover:border-emerald-200 hover:text-white"
              >
                Schedule a conversation
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Flagship AI Systems
              </h2>
              <p className="text-sm text-slate-600">
                Patent-backed platforms focused on edge deployment, LLM safety, and
                deterministic governance.
              </p>
            </div>
            <Link
              href="/patents"
              className="hidden text-xs font-medium text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline md:inline-flex"
            >
              See all patents & systems →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <ProjectCard
              tag="Edge LLM · Privacy"
              title="EdgeLLM V2: Self-Forgetting Memory & On-Device Alignment"
              description="Offline LLM assistant with vault-based memory, policy-driven forgetting, and deterministic alignment debugger running fully on device."
              highlight="Utility patent filed · Edge privacy"
              link="/patents#edge-llm-v2"
            />
            <ProjectCard
              tag="LLM Risk · Governance"
              title="AI Risk Navigator: Deterministic LLM Risk Scoring"
              description="Rule-based engine that scores hallucination, bias, and policy violations with reproducible risk vectors and triage workflows."
              highlight="Designed for EU AI Act / NIST AI RMF"
              link="/patents#ai-risk-navigator"
            />
            <ProjectCard
              tag="Code Safety · Compliance"
              title="LLM Code Safety Auditor"
              description="Offline, non-generative engine that statically evaluates AI-generated code against OWASP-style rules and emits deterministic fixes."
              highlight="Docketed new case – ready for examination"
              link="/patents#code-safety-auditor"
            />
          </div>
        </section>

        {/* RECENT ARTICLES CAROUSEL */}
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Recent Writing & Deep Dives
              </h2>
              <p className="text-sm text-slate-600">
                How I think about AI products across infra, safety layers, and
                real-world deployment.
              </p>
            </div>
            <Link
              href="/articles"
              className="hidden text-xs font-medium text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline md:inline-flex"
            >
              View all articles →
            </Link>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-50 to-transparent" />
            <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <ArticleCard
                tag="AI Product Strategy"
                title="What AI PMs Can Learn from Continuous Delivery"
                takeaway="Using canaries, observability, and blast radius control to design safer LLM products."
                link="/articles/ai-pms-continuous-delivery"
              />
              <ArticleCard
                tag="Edge AI · Systems"
                title="EdgeLLM V2 Deep Dive: Self-Forgetting Memory & On-Device Alignment"
                takeaway="Why privacy-preserving edge architectures will define the next wave of AI products."
                link="/articles/edgellm-v2-deep-dive"
              />
              <ArticleCard
                tag="LLM Safety"
                title="Deterministic AI Risk Scoring: Lessons from AI Risk Navigator"
                takeaway="Designing reproducible risk scores that compliance, security, and product can all trust."
                link="/articles/deterministic-ai-risk-scoring"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-800">
                &ldquo;Ship AI products that legal, infra, and users can all trust.&rdquo;
              </p>
              <p className="text-xs text-slate-500">
                Focus areas: Edge AI · LLM Safety · Privacy-Preserving Architectures ·
                Deterministic Risk Engines
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link
                href="https://www.linkedin.com/in/apurvgaurav"
                target="_blank"
                className="inline-flex items-center gap-1 text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </Link>
              <Link
                href="mailto:apurvgaurav@gmail.com"
                className="inline-flex items-center gap-1 text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                Email
              </Link>
              <Link
                href="https://calendly.com"
                target="_blank"
                className="inline-flex items-center gap-1 text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                Calendly
              </Link>
              <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
              <span className="text-[11px] text-slate-400">
                © {new Date().getFullYear()} Apurv Gaurav
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* --- Reusable components --- */

type MetricProps = {
  value: string;
  label: string;
};

function Metric({ value, label }: MetricProps) {
  return (
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-slate-900 sm:text-xl">
        {value}
      </p>
      <p className="text-xs leading-snug text-slate-500">{label}</p>
    </div>
  );
}

type ProjectCardProps = {
  tag: string;
  title: string;
  description: string;
  highlight: string;
  link: string;
};

function ProjectCard({
  tag,
  title,
  description,
  highlight,
  link,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/15"
    >
      <div className="space-y-3">
        <p className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
          {tag}
        </p>
        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="text-[11px] font-medium text-emerald-700">
          {highlight}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 group-hover:text-sky-950">
          View details
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

type ArticleCardProps = {
  tag: string;
  title: string;
  takeaway: string;
  link: string;
};

function ArticleCard({ tag, title, takeaway, link }: ArticleCardProps) {
  return (
    <Link
      href={link}
      className="group flex min-w-[260px] max-w-xs flex-col justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-sky-500/70 hover:shadow-md hover:shadow-sky-500/20"
    >
      <div className="space-y-2">
        <p className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
          {tag}
        </p>
        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-slate-600">
          {takeaway}
        </p>
      </div>
      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 group-hover:text-sky-950">
        Read article
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
