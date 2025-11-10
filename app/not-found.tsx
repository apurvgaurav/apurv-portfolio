// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
        This page isn&apos;t in the roadmap.
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-md">
        You&apos;ve hit a route that doesn&apos;t exist on this site. Let&apos;s
        get you back to the actual work: patents, products, and impact.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
