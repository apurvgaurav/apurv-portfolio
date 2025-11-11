// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Patent-backed AI Product Leader building edge-deployed, safety-first LLM systems. Focused on deterministic AI safety, privacy, and real-world reliability.",
  keywords: [
    "AI Product Manager",
    "Edge AI",
    "LLM Safety",
    "AI Risk",
    "Apurv Gaurav",
    "AI Product Leadership",
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-20 md:grid-cols-2 md:pt-28 lg:px-8">
        {/* Left side - photo */}
        <div className="flex flex-col items-center justify-center gap-6 md:items-start">
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-400/60 via-sky-500/40 to-indigo-600/50 blur-xl" />

            {/* Card with image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-slate-200/70">
              <Image
                src="/assets/apurv_photo.jpg"
                alt="Apurv Gaurav"
                width={360}
                height={460}
                priority
                className="h-[440px] w-[340px] object-cover object-top md:h-[460px] md:w-[360px]"
              />
            </div>
          </div>

          <div className="rounded-full border border-emerald-500/40 bg-emerald-50 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
            AI Product Leadership · Edge AI · LLM Safety
          </div>
        </div>

        {/* Right side - headline */}
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            APURV GAURAV · AI PRODUCT MANAGER
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Patent-backed AI Product Leader{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-emerald-600">
              building edge-deployed, safety-first LLM systems.
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
            I design and ship deterministic, audit-ready AI products—Edge LLMs, LLM risk
            triage, and code safety engines—built to meet FAANG-level reliability,
            privacy, and compliance standards.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#"
              className="rounded-full bg-sky-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800"
            >
              Download Leadership Summary
            </Link>
            <Link
              href="/patents"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-200/70 transition duration-200 hover:-translate-y-[1px] hover:border-emerald-500 hover:text-emerald-700"
            >
              View Patents ↗
            </Link>
          </div>

          <p className="pt-1 text-xs text-slate-500">
            Or contact me directly ·{" "}
            <Link
              href="/contact"
              className="text-emerald-700 hover:text-emerald-600 underline underline-offset-2"
            >
              Contact
            </Link>
          </p>
        </div>
      </section>

      {/* SNAPSHOT METRICS */}
      <section className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-sky-900">8</p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Utility patent applications filed
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-sky-900">5</p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Production-ready prototypes
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-sky-900">3</p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Research papers & deep dives
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-sky-900">250+</p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Pages of technical & product docs
            </p>
          </div>
        </div>
      </section>

      {/* FOR HIRING MANAGERS STRIP */}
      <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-emerald-200 bg-emerald-50/70 px-6 py-5 text-center shadow-sm shadow-emerald-100">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
          FOR HIRING MANAGERS
        </h2>
        <p className="mt-2 text-sm text-slate-800 sm:text-base">
          You’re not hiring someone who is “getting into AI.” You’re hiring someone
          already building edge-deployed LLM systems, deterministic safety layers, and
          audit-ready governance with patents and prototypes to back it up.
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <h2 className="mb-6 text-center text-2xl font-semibold text-slate-900">
          Flagship AI Systems
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="EdgeLLM V2: Privacy + Alignment"
            description="Offline LLM assistant with self-forgetting memory and on-device alignment debugger for privacy-critical workflows."
            tag="Edge AI · Privacy"
            href="/patents#edge-llm-v2"
          />
          <ProjectCard
            title="AI Risk Navigator"
            description="Deterministic risk triage engine scoring hallucination, bias, and policy violations with reproducible vectors."
            tag="LLM Safety · Governance"
            href="/patents#ai-risk-navigator"
          />
          <ProjectCard
            title="LLM Code Safety Auditor"
            description="Offline, rule-based static analysis engine evaluating AI-generated code with OWASP-style checks."
            tag="Code Safety · Compliance"
            href="/patents#llm-code-safety-auditor"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
        <p>
          “Ship AI products that legal, infra, and users can all trust.” —{" "}
          <span className="font-medium">Apurv Gaurav</span>
        </p>
        <div className="mt-3 flex justify-center gap-4 text-xs text-slate-500">
          <Link
            href="https://www.linkedin.com/in/apurvgaurav"
            target="_blank"
            className="hover:text-emerald-600"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:apurvgaurav@gmail.com"
            className="hover:text-emerald-600"
          >
            Email
          </Link>
          <Link href="/contact" className="hover:text-emerald-600">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* --- Reusable components --- */

type ProjectCardProps = {
  title: string;
  description: string;
  tag: string;
  href: string;
};

function ProjectCard({ title, description, tag, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-[2px] hover:border-emerald-500/70 hover:shadow-md hover:shadow-emerald-500/15"
    >
      <div>
        <p className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
          {tag}
        </p>
        <h3 className="mt-3 text-base font-semibold text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 group-hover:text-sky-950">
        View details
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
