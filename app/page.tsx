import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Box,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Layers,
  Radio,
  Server,
  Shield,
  TrendingUp,
  Workflow,
} from "lucide-react";

const signals = [
  "RFID sensing",
  "Real-time inventory state",
  "Automation-ready backend",
  "Operational dashboard",
];

const challenges = [
  "No real-time feedback on actual shelf availability",
  "Time-consuming, manual expiry date and stock checks",
  "Inventory discrepancies due to shrinkage, misplacement, or theft",
  "High personnel effort for repetitive checking processes",
];

const solutions = [
  "Real-time stock and expiry monitoring directly on the shelf",
  "Reduction of manual checking routines and error sources",
  "Privacy-friendly alternative to camera monitoring systems",
  "Automated RFID detection for faster recalls and better automation",
];

const features = [
  {
    icon: Radio,
    title: "RFID sensing layer",
    description:
      "UHF readers capture item identity without manual scanning, even at shelf level.",
  },
  {
    icon: Cpu,
    title: "Mobile reader coverage",
    description:
      "A moving reader system reduces hardware footprint while covering long aisles.",
  },
  {
    icon: Server,
    title: "Event processing",
    description:
      "Backend services decode reads, update inventory state, and coordinate workflows.",
  },
  {
    icon: Layers,
    title: "Inventory state model",
    description:
      "The digital layer keeps a clean view of present, missing, sold, or expiring items.",
  },
];

const benefits = [
  {
    icon: CalendarClock,
    title: "Expiry awareness",
    description: "Track freshness and best-before windows with less manual checking.",
  },
  {
    icon: Shield,
    title: "Loss signals",
    description: "Security workflows respond faster when paid items leave the system.",
  },
  {
    icon: TrendingUp,
    title: "Restock clarity",
    description: "Managers get a more reliable picture of shelf and backroom status.",
  },
  {
    icon: Workflow,
    title: "Operational alignment",
    description: "Store and backend teams work from the same inventory timeline.",
  },
];

const quickLinks = [
  {
    title: "About the team",
    description: "Meet the people and principles behind the project.",
    href: "/about",
    icon: Box,
  },
  {
    title: "Project details",
    description: "See how hardware, software, and workflows connect.",
    href: "/project",
    icon: Layers,
  },
  {
    title: "Contact and demo",
    description: "Reach the team for demos, events, or collaboration.",
    href: "/contact",
    icon: BarChart3,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-brand-accent/5" />
        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-24 lg:py-32 text-center">
            <div className="mb-8 flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground animate-fade-in">
              <Radio className="h-4 w-4 text-primary animate-pulse" />
              <span className="font-medium">Next-generation supermarket inventory</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in-up">
              Automated shelf visibility for modern retail.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
              Sentr eliminates manual scanning with intelligent RFID tracking. We empower supermarkets with real-time stock insights, expiry monitoring, and operational clarity.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/project"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Explore the project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-base font-medium text-foreground transition hover:bg-muted"
              >
                Contact the team
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-border/70 bg-background/80 px-4 py-2"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/20">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Retail operations need clearer signals.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Sentr turns RFID reads into an operational view that helps staff and managers react
              faster, with less manual work and fewer blind spots.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <Shield className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">The challenges</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-destructive/60 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-success/20 bg-success/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <h3 className="text-xl font-semibold">The Sentr answer</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-success shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Sentr works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hardware, software, and data processing stay aligned to create a single source of
              truth for inventory state.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-2 text-xs font-medium text-primary/60 uppercase tracking-wider">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Designed for retail teams under pressure.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The goal is operational calm: clear status, faster actions, and fewer manual tasks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border bg-background transition-all duration-300 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10">
                    <benefit.icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Quick access</h2>
              <p className="mt-1 text-muted-foreground">
                Explore the project, the team, or contact options.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="h-full rounded-2xl border bg-card transition-all duration-200 hover:shadow-md hover:border-primary/30">
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold">{link.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Want to see the system in action?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Request a demo or a technical walkthrough of the project modules and workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Request a demo
              </Link>
              <Link
                href="/project"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                View project scope
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
