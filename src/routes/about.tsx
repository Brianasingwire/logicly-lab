import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pulseflow" },
      { name: "description", content: "Pulseflow is a senior studio of ML engineers and automation architects building production AI systems since 2021." },
      { property: "og:title", content: "About — Pulseflow" },
      { property: "og:description", content: "Pulseflow is a senior studio of ML engineers and automation architects building production AI systems since 2021." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Own the loop",
      description:
        "We take responsibility for the full system — not just the model, not just the integration, but the outcome.",
    },
    {
      title: "Ship with guardrails",
      description:
        "Every agent goes live with failure modes mapped, human handoffs defined, and rollback paths tested.",
    },
    {
      title: "Measure in production",
      description:
        "We instrument everything. If we can't show you the number, we haven't finished the job.",
    },
    {
      title: "Leave the keys with you",
      description:
        "Our systems live in your repo, your cloud, your on-call. We build teams up, not dependencies.",
    },
  ];

  const stats = [
    { value: "14", label: "engineers & researchers" },
    { value: "26", label: "production automations" },
    { value: "2021", label: "shipping since" },
    { value: "92%", label: "clients who re-engage" },
  ];

  return (
    <main className="bg-ink">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/4 size-[500px] rounded-full bg-mint/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute top-20 right-10 size-[380px] rounded-full bg-pine/40 blur-[100px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            About
          </span>
          <h1 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-6xl">
            A small team that ships like a product org.
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-lg text-white/55">
            Pulseflow is a senior studio of ML engineers and automation
            architects. We design, build, and operate agentic systems for
            operators who are done papering over the same workflows.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-mint/10 bg-pine">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl font-semibold tracking-tight text-mintbright">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
                Our story
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink lg:text-4xl">
                Built by operators, for operators.
              </h2>
            </div>
            <div className="space-y-5 text-ink/65">
              <p>
                Pulseflow started in 2021 when a group of ML engineers and
                platform operators got tired of seeing AI projects die in
                slide decks. We believed the real work wasn't the demo — it was
                the thousand edge cases that show up on day two in production.
              </p>
              <p>
                So we built a practice around the hard parts: observability,
                rollback, human handoffs, and cost discipline. Today we run
                automations for logistics, healthcare, fintech, and SaaS teams
                who treat AI as infrastructure, not magic.
              </p>
              <p>
                We stay small on purpose. Every client works directly with the
                engineers who design and maintain their systems. No account
                managers, no junior handoffs, no black boxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              Principles
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-5xl">
              How we work.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-mint/15 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <h3 className="font-display text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 ring-1 ring-black/5 sm:p-14">
            <div className="pointer-events-none absolute -top-24 right-0 size-[360px] rounded-full bg-mint/15 blur-[100px]"></div>
            <div className="pointer-events-none absolute bottom-0 left-1/4 size-[260px] rounded-full bg-mintbright/10 blur-[90px]"></div>

            <div className="relative max-w-xl">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-4xl">
                Want to see if we're the right fit?
              </h2>
              <p className="mt-4 text-white/55">
                Tell us what you're trying to automate. We'll be honest about
                whether we can help — and how we'd approach it.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-mint px-6 py-3 text-sm font-semibold text-ink ring-1 ring-mint/40 transition-colors hover:bg-mintbright"
              >
                Start the conversation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
