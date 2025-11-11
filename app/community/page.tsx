// app/community/page.tsx
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 lg:px-8">
        {/* HERO */}
        <section className="border-b border-slate-200 pb-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              COMMUNITY & THOUGHT LEADERSHIP
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Building the conversation around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-700">
                Edge AI, LLM Safety, and AI Product Strategy.
              </span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              I actively engage with the AI community through meetups, panels, conferences,
              and long-form content—sharing what I learn from building patent-backed,
              production-grade AI systems.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-900/40"
              >
                Invite me to speak
                <span className="text-xs">↗</span>
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-[1px] hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20"
              >
                View media & features
              </Link>
            </div>
          </div>
        </section>

        {/* STRIP: WHAT THIS PAGE COVERS */}
        <section className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-sky-950 px-5 py-5 text-slate-50 shadow-md shadow-slate-900/60">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                AT A GLANCE
              </p>
              <h2 className="text-lg font-semibold">
                Where I share, test, and refine AI product ideas in public.
              </h2>
              <p className="max-w-2xl text-sm text-slate-300">
                Meetups, panels, conferences, and podcasts where I speak about edge-deployed
                LLMs, deterministic safety engines, and what &ldquo;FAANG-grade&rdquo; AI
                actually requires in production.
              </p>
            </div>
            <div className="grid gap-2 text-xs text-slate-200">
              <p>• Meetups & panels · AI & product communities</p>
              <p>• Product & AI conferences · invited talks</p>
              <p>• Podcasts & guest articles · long-form thinking</p>
            </div>
          </div>
        </section>

        {/* MEETUPS & PANELS */}
        <section className="mt-10 space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Meetups & Panels
              </h2>
              <p className="text-sm text-slate-600">
                Sessions where I share practical lessons from building and shipping AI
                systems—not just slideware.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Example entry — replace with real events */}
            <CommunityCard
              type="Panel"
              title="Designing Deterministic Safety Layers for LLM Products"
              org="(Example) Philly AI & Product Meetup"
              date="Coming 2025"
              location="Philadelphia, PA"
              description="Panel on how to layer rule-based safety, observability, and rollout controls on top of LLM systems in production."
              ctaLabel="Add to media when recording is live"
              ctaHref="/media"
            />
            <CommunityCard
              type="Meetup Talk"
              title="Edge-Deployed LLMs: Privacy, Latency, and Offline UX"
              org="(Example) Local Edge AI Builders Group"
              date="Coming 2025"
              location="Philadelphia, PA"
              description="Talk on why offline, on-device LLMs matter for privacy-sensitive and low-connectivity environments."
              ctaLabel="Share slides on media page"
              ctaHref="/media"
            />
          </div>
        </section>

        {/* CONFERENCES */}
        <section className="mt-10 space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Conferences & Product-Led Events
              </h2>
              <p className="text-sm text-slate-600">
                Invitations and submissions focused on AI product strategy, safety, and
                edge deployments.
              </p>
            </div>
            <Link
              href="/articles"
              className="hidden text-xs font-medium text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline md:inline-flex"
            >
              Read related articles →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Example entries — replace/duplicate with real ones */}
            <ConferenceCard
              status="Invited"
              title="(Example) Edge AI & Safety Summit"
              role="Speaker · Session on Edge-Deployed LLM Architectures"
              date="Planned 2025"
              location="Virtual / Hybrid"
              description="Deep dive into EdgeLLM V2: self-forgetting memory, on-device alignment debugging, and privacy-preserving UX."
            />
            <ConferenceCard
              status="Submitted"
              title="(Example) AI Product Leadership Forum"
              role="Talk · Deterministic AI Risk Scoring for LLM Products"
              date="Planned 2025"
              location="San Francisco, CA"
              description="Session on building reproducible risk scores for hallucination, bias, and policy violations in LLM-based workflows."
            />
          </div>
        </section>

        {/* PODCASTS & GUEST ARTICLES */}
        <section className="mt-10 space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Podcasts & Guest Contributions
              </h2>
              <p className="text-sm text-slate-600">
                Long-form conversations and articles that go beyond demos into how to run
                AI products responsibly.
              </p>
            </div>
            <Link
              href="/media"
              className="hidden text-xs font-medium text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline md:inline-flex"
            >
              View all media →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Example place-holders */}
            <PodcastCard
              kind="Podcast"
              title="(Future) Designing AI Products That Survive Production"
              host="Example: AI Product Leaders Podcast"
              description="Discussion on why infra, observability, and deterministic safeguards matter as much as prompts and UX."
              linkLabel="Mark as upcoming"
              linkHref="/media"
            />
            <PodcastCard
              kind="Guest Article"
              title="(Future) From Infra to Intelligence: Lessons for AI PMs"
              host="Example: Lenny’s Newsletter–style platform"
              description="Guest article on how release engineering, canaries, and field metrics translate into modern AI product strategy."
              linkLabel="Cross-link from Articles page"
              linkHref="/articles"
            />
          </div>
        </section>

        {/* SPEAKER BIO + CTA */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/70">
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Speaker & Moderator Bio (short)
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">
                Apurv Gaurav is an AI Product Manager focused on edge-deployed LLMs, LLM
                safety, and deterministic governance. He has filed multiple utility
                patents across edge AI, risk triage, and code safety, and designs systems
                that legal, infra, and end users can all trust.
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Typical topics include: edge LLM architectures, self-forgetting memory,
                deterministic risk scoring, rule-based safety layers for LLM apps, and how
                to run AI products with production-grade observability and rollout
                controls.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl bg-slate-900 px-4 py-4 text-slate-50 shadow-md shadow-slate-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                INVITE ME TO SPEAK
              </p>
              <p className="text-sm text-slate-100">
                I’m open to panels, fireside chats, technical deep dives, and
                product-leadership conversations.
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900 shadow-md shadow-emerald-500/40 transition duration-200 hover:-translate-y-[1px] hover:bg-emerald-400"
                >
                  Send speaking request
                </Link>
                <Link
                  href="https://calendly.com"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/70 px-4 py-2 font-semibold text-emerald-100 transition duration-200 hover:border-emerald-200 hover:text-white"
                >
                  Propose a 20-minute intro call ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* --- Reusable components for this page --- */

type CommunityCardProps = {
  type: string;
  title: string;
  org: string;
  date: string;
  location: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

function CommunityCard({
  type,
  title,
  org,
  date,
  location,
  description,
  ctaLabel,
  ctaHref,
}: CommunityCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60">
      <div className="space-y-2">
        <p className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
          {type}
        </p>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs font-medium text-slate-600">{org}</p>
        <p className="text-[11px] text-slate-500">
          {date} · {location}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <Link
        href={ctaHref}
        className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline"
      >
        {ctaLabel}
        <span className="transition-transform duration-200">→</span>
      </Link>
    </div>
  );
}

type ConferenceCardProps = {
  status: "Invited" | "Submitted" | "Confirmed" | string;
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
};

function ConferenceCard({
  status,
  title,
  role,
  date,
  location,
  description,
}: ConferenceCardProps) {
  const statusColor =
    status === "Confirmed"
      ? "bg-emerald-100 text-emerald-800"
      : status === "Invited"
      ? "bg-sky-100 text-sky-800"
      : "bg-slate-100 text-slate-700";

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${statusColor}`}
          >
            {status}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs font-medium text-slate-600">{role}</p>
        <p className="text-[11px] text-slate-500">
          {date} · {location}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}

type PodcastCardProps = {
  kind: string;
  title: string;
  host: string;
  description: string;
  linkLabel: string;
  linkHref: string;
};

function PodcastCard({
  kind,
  title,
  host,
  description,
  linkLabel,
  linkHref,
}: PodcastCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60">
      <div className="space-y-2">
        <p className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
          {kind}
        </p>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs font-medium text-slate-600">{host}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <Link
        href={linkHref}
        className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline"
      >
        {linkLabel}
        <span className="transition-transform duration-200">→</span>
      </Link>
    </div>
  );
}
