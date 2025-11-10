// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Let&apos;s Talk.
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
          The fastest way to reach me is email. I personally review every
          relevant message and usually reply within two business days.
        </p>
      </section>

      {/* Direct Contact */}
      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 space-y-3">
        <p className="text-sm font-semibold text-slate-900">Direct Contact</p>
        <div className="space-y-2 text-sm text-slate-700">
          <p>
            📧{" "}
            <a
              href="mailto:apurvgaurav@gmail.com"
              className="text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline"
            >
              apurvgaurav@gmail.com
            </a>
          </p>
          <p>
            🔗{" "}
            <a
              href="https://linkedin.com/in/apurvgaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline"
            >
              linkedin.com/in/apurvgaurav
            </a>
          </p>
        </div>
      </section>

      {/* Role + Collaboration Cards */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm space-y-3">
          <p className="text-sm font-semibold text-slate-900">
            For Roles (Hiring Managers / Recruiters)
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            If you&apos;re reaching out about a role, including senior AI Product
            roles (L7/L8 scope or equivalent), please include:
          </p>
          <ul className="text-xs text-slate-700 leading-relaxed list-disc list-inside space-y-1">
            <li>Company, team, and level.</li>
            <li>Location or remote expectations.</li>
            <li>Compensation range / band (ballpark is fine).</li>
            <li>
              Why this role aligns with my focus on Edge AI, privacy, and
              deterministic AI safety.
            </li>
          </ul>
          <a
            href="mailto:apurvgaurav@gmail.com?subject=Role%20Inquiry%20-%20AI%20Product%20Leader&body=Company%3A%0ATeam%20%2F%20Level%3A%0ALocation%20%2F%20Remote%3A%0AComp%20Band%20(approx.)%3A%0AWhy%20this%20role%20fits%3A"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
          >
            Email About a Role
          </a>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm space-y-3">
          <p className="text-sm font-semibold text-slate-900">
            For Collaboration or Media
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            For collaborations, talks, podcasts, or guest lectures, please
            include:
          </p>
          <ul className="text-xs text-slate-700 leading-relaxed list-disc list-inside space-y-1">
            <li>Topic and format (talk, podcast, guest lecture, workshop).</li>
            <li>Audience profile and approximate size.</li>
            <li>Desired timing and timezone.</li>
            <li>
              Any specific outcomes you&apos;re targeting (recording, internal
              training, public content, etc.).
            </li>
          </ul>
          <a
            href="mailto:apurvgaurav@gmail.com?subject=Collaboration%20or%20Media%20Inquiry&body=Topic%3A%0AFormat%3A%0AAudience%3A%0ATimeline%3A%0AExpected%20Outcome%3A"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
          >
            Email About Collaboration
          </a>
        </div>
      </section>

      {/* Closing */}
      <section className="space-y-2">
        <p className="text-sm text-slate-700 leading-relaxed">
          I&apos;m selective about opportunities, but if the scope, ownership, and
          problem space are a strong match, I&apos;ll come prepared.
        </p>
      </section>
    </div>
  );
}
