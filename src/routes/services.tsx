import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pulseflow" },
      { name: "description", content: "Agentic pipelines, data orchestration, and observability for AI automation — built end to end by Pulseflow." },
      { property: "og:title", content: "Services — Pulseflow" },
      { property: "og:description", content: "Agentic pipelines, data orchestration, and observability for AI automation — built end to end by Pulseflow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Agentic pipelines",
      description:
        "Multi-step agents that read, decide, and act across your tools with guardrails you can audit. We scope each pipeline around a single business outcome, wire it into your existing stack, and leave it with full traceability.",
      details: [
        "Intent classification & routing",
        "Tool-use with structured outputs",
        "Human-in-the-loop handoffs",
        "Audit logs on every decision",
      ],
    },
    {
      number: "02",
      title: "Data orchestration",
      description:
        "Stream, transform, and reconcile data in real time so every downstream agent works from one source of truth. We build resilient pipelines that self-heal around schema drift and late-arriving data.",
      details: [
        "Real-time sync between CRM, ERP, and warehouse",
        "Schema validation and lineage",
        "Backfill and replay tooling",
        "SLA monitoring and alerting",
      ],
    },
    {
      number: "03",
      title: "Evaluation & observability",
      description:
        "Regression suites, tracing, and drift detection so automation quality stays measurable long after launch. We instrument every agent so you know when performance changes before your customers do.",
      details: [
        "Offline eval datasets",
        "Online drift detection",
        "Cost and latency dashboards",
        "Incident runbooks",
      ],
    },
  ];

  const process = [
    {
      step: "Audit",
      description:
        "We map your manual hand-offs, quantify their cost, and identify the highest-leverage automation candidates.",
    },
    {
      step: "Blueprint",
      description:
        "A scoped architecture with tool integrations, data flows, guardrails, and a clear success metric.",
    },
    {
      step: "Build",
      description:
        "We ship the system in tight iterations, testing against real data and integrating with your team’s review cycle.",
    },
    {
      step: "Operate",
      description:
        "Post-launch monitoring, retraining, and incident response so the system keeps getting better, not brittle.",
    },
  ];

  return (
    <main className="bg-ink">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/4 size-[500px] rounded-full bg-mint/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute top-20 right-10 size-[380px] rounded-full bg-pine/40 blur-[100px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            Services
          </span>
          <h1 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-6xl">
            What we build, end to end.
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-lg text-white/55">
            Three core disciplines, delivered as one system. We don't sell
            point-solutions — we own the loop from first audit to ongoing
            operations.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="border-t border-mint/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="grid gap-8 border-b border-black/5 pb-16 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <span className="inline-grid size-10 place-items-center rounded-xl bg-mint/10 font-display text-lg font-semibold text-mint">
                    {service.number}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-pretty text-lg text-ink/60">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-ink/70"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-pine">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mintbright">
              How we work
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-5xl">
              A four-step pulse.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <span className="font-display text-sm font-semibold text-mintbright">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.description}
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
                Not sure which discipline fits first?
              </h2>
              <p className="mt-4 text-white/55">
                We'll audit your stack and tell you exactly where to start — and
                what the payoff looks like.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-mint px-6 py-3 text-sm font-semibold text-ink ring-1 ring-mint/40 transition-colors hover:bg-mintbright"
              >
                Book the audit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
