import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulseflow — AI Automation Agency" },
      { name: "description", content: "Pulseflow designs and ships agentic AI systems that move data, decisions, and workflows through your stack." },
      { property: "og:title", content: "Pulseflow — AI Automation Agency" },
      { property: "og:description", content: "Pulseflow designs and ships agentic AI systems that move data, decisions, and workflows through your stack." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/4 size-[500px] rounded-full bg-mint/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute top-20 right-10 size-[380px] rounded-full bg-pine/40 blur-[100px]"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/3 size-[300px] rounded-full bg-mintbright/5 blur-[90px]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-12 lg:py-40">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs font-semibold tracking-wide text-mintbright">
              <span className="size-1.5 rounded-full bg-mintbright"></span>
              AI automation, engineered
            </span>
            <h1 className="mt-6 max-w-[20ch] font-display text-5xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-6xl">
              Your operations, running on a single green pulse.
            </h1>
            <p className="mt-6 max-w-[48ch] text-pretty text-lg text-white/60">
              We design agentic systems that move data, decisions, and workflows
              through your stack — measurable, auditable, and alive.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-mint px-6 py-3 text-sm font-semibold text-ink ring-1 ring-mint/40 transition-colors hover:bg-mintbright"
              >
                Book a systems audit
                <span aria-hidden="true" className="text-ink/70">
                  &rarr;
                </span>
              </Link>
              <span className="text-sm text-white/40">
                Avg. 4.2x workflow throughput
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-mint/15 bg-white/[0.03] p-5 ring-1 ring-white/5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-medium text-white/70">
                  pipeline.status
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-mintbright">
                  <span className="size-1.5 animate-aurora-drift rounded-full bg-mintbright"></span>
                  live
                </span>
              </div>
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2.5">
                  <span className="text-sm text-white/70">Ingest · CRM delta</span>
                  <span className="font-display text-xs text-mint">1,204</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2.5">
                  <span className="text-sm text-white/70">Classify · intent</span>
                  <span className="font-display text-xs text-mint">98.6%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2.5">
                  <span className="text-sm text-white/70">Route · agent dispatch</span>
                  <span className="font-display text-xs text-mintbright">auto</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-mint/25 bg-mint/10 px-3 py-2.5">
                  <span className="text-sm text-mintbright">Resolve · closed loop</span>
                  <span className="font-display text-xs text-mintbright">done</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric strip */}
      <section className="bg-pine">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-4">
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight text-mintbright">
              4.2x
            </div>
            <p className="mt-2 text-sm text-white/55">
              faster cycle time on average client workflows
            </p>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight text-mintbright">
              38M
            </div>
            <p className="mt-2 text-sm text-white/55">
              events processed through production agents monthly
            </p>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight text-mintbright">
              99.98%
            </div>
            <p className="mt-2 text-sm text-white/55">
              uptime across managed automation rails
            </p>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight text-mintbright">
              12 wks
            </div>
            <p className="mt-2 text-sm text-white/55">
              typical time from audit to full rollout
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
              What we build
            </span>
            <h2 className="mt-4 max-w-[40ch] font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-ink text-balance lg:text-5xl">
              Systems, not scripts.
            </h2>
            <p className="mt-5 max-w-[48ch] text-pretty text-lg text-ink/55">
              Three disciplines we run end to end — each one a checkpoint where
              the signal gets stronger.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-transform hover:-translate-y-1">
              <span className="inline-grid size-10 place-items-center rounded-xl bg-mint/10 font-display text-lg font-semibold text-mint">
                01
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink text-balance">
                Agentic pipelines
              </h3>
              <p className="mt-2 text-sm text-ink/55 text-pretty">
                Multi-step agents that read, decide, and act across your tools
                with guardrails you can audit.
              </p>
              <Link
                to="/services"
                className="mt-5 inline-block text-sm font-semibold text-pine"
              >
                See how &rarr;
              </Link>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-transform hover:-translate-y-1">
              <span className="inline-grid size-10 place-items-center rounded-xl bg-mint/10 font-display text-lg font-semibold text-mint">
                02
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink text-balance">
                Data orchestration
              </h3>
              <p className="mt-2 text-sm text-ink/55 text-pretty">
                Stream, transform, and reconcile data in real time so every
                downstream agent works from one source of truth.
              </p>
              <Link
                to="/services"
                className="mt-5 inline-block text-sm font-semibold text-pine"
              >
                See how &rarr;
              </Link>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-transform hover:-translate-y-1">
              <span className="inline-grid size-10 place-items-center rounded-xl bg-mint/10 font-display text-lg font-semibold text-mint">
                03
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink text-balance">
                Evaluation & observability
              </h3>
              <p className="mt-2 text-sm text-ink/55 text-pretty">
                Regression suites, tracing, and drift detection so automation
                quality stays measurable long after launch.
              </p>
              <Link
                to="/services"
                className="mt-5 inline-block text-sm font-semibold text-pine"
              >
                See how &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              The studio
            </span>
            <h2 className="mt-4 max-w-[40ch] font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-5xl">
              A small team that ships like a product org.
            </h2>
            <p className="mt-5 max-w-[44ch] text-pretty text-lg text-white/55">
              We are engineers and automation architects, not a reseller. Every
              system is designed, tested, and monitored by the same people who
              build it.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                Meet the team &rarr;
              </Link>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <div className="rounded-2xl border border-mint/15 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="font-display font-semibold text-white">
                Process we stand behind
              </div>
              <p className="mt-2 text-sm text-white/55 text-pretty">
                Week one is a systems audit. We map every manual hand-off,
                quantify its cost, and show you exactly where the pulse can
                carry the load.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-mint/15 bg-white/[0.04] p-5 backdrop-blur-xl">
                <div className="font-display text-2xl font-semibold text-mintbright">
                  14
                </div>
                <p className="mt-1 text-sm text-white/55">
                  specialists across ML, infra, and ops
                </p>
              </div>
              <div className="rounded-2xl border border-mint/15 bg-white/[0.04] p-5 backdrop-blur-xl">
                <div className="font-display text-2xl font-semibold text-mintbright">
                  26
                </div>
                <p className="mt-1 text-sm text-white/55">
                  production automations in active operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 ring-1 ring-black/5 sm:p-14">
            <div className="pointer-events-none absolute -top-24 right-0 size-[360px] rounded-full bg-mint/15 blur-[100px]"></div>
            <div className="pointer-events-none absolute bottom-0 left-1/4 size-[260px] rounded-full bg-mintbright/10 blur-[90px]"></div>

            <div className="relative max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                Start here
              </span>
              <h2 className="mt-4 max-w-[40ch] font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-5xl">
                Let's run the first pulse through your stack.
              </h2>
              <p className="mt-5 max-w-[48ch] text-pretty text-lg text-white/55">
                Tell us where your team is losing hours. We'll come back with a
                scoped audit and a build plan — no slideware.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-mint px-6 py-3 text-center text-sm font-semibold text-ink ring-1 ring-mint/40 transition-colors hover:bg-mintbright"
                >
                  Request the audit
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.06] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
                >
                  Explore services
                </Link>
              </div>
              <p className="mt-4 text-xs text-white/35">
                We reply within one business day. No commitment, no deck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
