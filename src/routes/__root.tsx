import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-white/55">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-mint px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mintbright"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-white/55">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-mint px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mintbright"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pulseflow — AI Automation Agency" },
      { name: "description", content: "Pulseflow designs and ships agentic AI systems that move data, decisions, and workflows through your stack." },
      { property: "og:title", content: "Pulseflow — AI Automation Agency" },
      { property: "og:description", content: "Pulseflow designs and ships agentic AI systems that move data, decisions, and workflows through your stack." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mint/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="size-2.5 shrink-0 animate-aurora-drift rounded-full bg-mint"></span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            Pulseflow
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/60 sm:flex">
          <Link to="/services" className="transition-colors hover:text-mint">
            Services
          </Link>
          <Link to="/about" className="transition-colors hover:text-mint">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-mint">
            Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="rounded-md bg-mint px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mintbright"
        >
          Start a build
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mint/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <Link to="/" className="flex items-center gap-2">
          <span className="size-2 shrink-0 rounded-full bg-mint"></span>
          <span className="font-display text-sm font-semibold text-white">
            Pulseflow
          </span>
        </Link>
        <p className="text-xs text-white/35">
          &copy; 2025 Pulseflow Systems. Automation, engineered.
        </p>
        <div className="flex items-center gap-6 text-xs text-white/45">
          <Link to="/services" className="transition-colors hover:text-mint">
            Services
          </Link>
          <Link to="/about" className="transition-colors hover:text-mint">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-mint">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-ink font-body text-white antialiased">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
