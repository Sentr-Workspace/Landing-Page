import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sentr about demos, collaboration, and project questions.",
};

const contactOptions = [
  {
    title: "Email",
    value: "hello@sentr.example",
    detail: "Best for demo requests, partnerships, and project questions.",
  },
  {
    title: "Project updates",
    value: "Request the latest release notes",
    detail: "Useful for presentations, reports, or technical reviews.",
  },
  {
    title: "Response format",
    value: "Short summary, technical walkthrough, or live demo",
    detail: "Tell us the format that fits your audience.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in touch about demos, collaboration, or implementation details.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Email is the fastest way to reach the team. If you are asking about the project for an
          event or partnership, include the context and the preferred follow-up format.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">Reach out</p>
          <div className="mt-6 space-y-4">
            {contactOptions.map((option) => (
              <div key={option.title} className="rounded-2xl bg-muted/50 p-5 ring-1 ring-border">
                <p className="text-sm font-semibold">{option.title}</p>
                <p className="mt-2 text-base">{option.value}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{option.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@sentr.example"
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Email the team
            </a>
            <a
              href="/project"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Read project details
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-accent/30 bg-brand-accent/10 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand-accent uppercase">Message guide</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
            <li>1. Tell us who you are and what you want to discuss.</li>
            <li>2. Mention whether you need a summary or a full walkthrough.</li>
            <li>3. For demos, share the audience and time window.</li>
          </ul>
          <div className="mt-8 rounded-2xl bg-background p-5 ring-1 ring-brand-accent/20">
            <p className="text-sm font-semibold">Expected follow-up</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Replies can include a project summary, technical breakdown, or a contact point for
              next steps depending on the request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}