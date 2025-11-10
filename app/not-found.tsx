import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-center px-4 py-12 md:px-6">
      <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-500 uppercase">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
        This page doesn&apos;t exist (yet).
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
        Either the URL is wrong, or this is a future part of the portfolio I
        haven&apos;t shipped. Use the navigation above or jump back to the
        homepage.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-xs">
        <Link
          href="/"
          className="rounded-full bg-sky-500 px-4 py-1.5 font-medium text-slate-950 hover:bg-sky-400"
        >
          Go to homepage
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-slate-400"
        >
          View flagship projects
        </Link>
      </div>
    </div>
  );
}
