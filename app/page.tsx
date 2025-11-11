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
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-400/60 via-sky-500/40 to-indigo-600/50 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-slate-200/70">
              <Image
                src="/assets/apurv_photo.jpg"
                alt="Apurv Gaurav"
                width={320}
                height={380}
                priority
                className="h-[380px] w-[320px] object-cover"
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
      <section className="mx-auto max-w-5xl grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm shadow-slate-100 sm:grid-cols-4">
        <div>
          <p className="text-3xl font-bold text-sky-900">8</p>
          <p className="text-xs font-medium text-slate-600">
            Utility patent applications filed
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold text-sky-900">5</p>
          <p className="text-xs font-medium text-slate-600">
