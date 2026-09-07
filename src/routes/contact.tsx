import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pulseflow" },
      { name: "description", content: "Book a systems audit with Pulseflow. Tell us where your team is losing hours and we'll come back with a scoped plan." },
      { property: "og:title", content: "Contact — Pulseflow" },
      { property: "og:description", content: "Book a systems audit with Pulseflow. Tell us where your team is losing hours and we'll come back with a scoped plan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-ink">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/4 size-[500px] rounded-full bg-mint/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute top-20 right-10 size-[380px] rounded-full bg-pine/40 blur-[100px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            Contact
          </span>
          <h1 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance lg:text-6xl">
            Let's run the first pulse through your stack.
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-lg text-white/55">
            Tell us where your team is losing hours. We'll come back with a
            scoped audit and a build plan — no slideware, no sales theater.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="border-t border-mint/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                What happens next?
              </h2>
              <ol className="mt-6 space-y-5">
                {[
                  "We read your brief within one business day.",
                  "We reply with 3–5 clarifying questions and a rough scope.",
                  "If it looks like a fit, we book a 30-minute systems audit.",
                  "You get a written build plan with timeline and investment.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-4 text-ink/65">
                    <span className="font-display text-sm font-semibold text-mint">
                      0{index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-2xl border border-black/5 bg-mint/5 p-6">
                <p className="text-sm font-semibold text-ink">Prefer email?</p>
                <a
                  href="mailto:hello@pulseflow.systems"
                  className="mt-1 text-sm text-pine hover:underline"
                >
                  hello@pulseflow.systems
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-3xl border border-mint/15 bg-ink p-8 sm:p-12">
                  <div className="size-12 rounded-full bg-mint/10 flex items-center justify-center">
                    <span className="text-2xl text-mint">✓</span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-white">
                    Brief received.
                  </h2>
                  <p className="mt-3 text-white/55">
                    We'll be in touch within one business day with questions and
                    a rough scope. Talk soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-black/5 bg-white p-8 ring-1 ring-black/5 sm:p-10"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition-colors focus:border-mint"
                        placeholder="Ada Okafor"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60"
                      >
                        Work email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition-colors focus:border-mint"
                        placeholder="ada@company.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="company"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition-colors focus:border-mint"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60"
                    >
                      The workflow
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-2 w-full resize-none rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition-colors focus:border-mint"
                      placeholder="Three ops techs, ~300 tickets a day, mostly the same five questions…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-mint px-6 py-3 text-sm font-semibold text-ink ring-1 ring-mint/40 transition-colors hover:bg-mintbright"
                  >
                    Request the audit
                    <span aria-hidden="true">&rarr;</span>
                  </button>

                  <p className="mt-4 text-xs text-ink/40">
                    We keep every conversation private. No newsletters, no drip.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
