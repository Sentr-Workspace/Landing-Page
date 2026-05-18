import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project details",
  description:
    "A focused overview of Sentr's hardware, backend services, and operational workflows.",
};

const architecture = [
  {
    title: "Hardware layer",
    text: "RFID readers and movement systems capture item identity at the shelf and exits.",
  },
  {
    title: "Backend services",
    text: "APIs process reads, update inventory state, and coordinate automations.",
  },
  {
    title: "Operations layer",
    text: "Dashboards and workflows keep store teams and managers aligned.",
  },
];

const modules = [
  "Inventory visibility and status tracking",
  "RFID read and write workflows",
  "Security gate detection",
  "Automation for scans and alerts",
  "Data decoding between services",
  "Retail-ready dashboard experience",
];

export default function ProjectPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">Project details</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Sentr is a connected retail system built around real inventory signals.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          The project combines RFID data capture, backend processing, and user-facing tools so
          stock state is visible when it matters most.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {architecture.map((item) => (
          <article key={item.title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border bg-primary text-primary-foreground p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary-foreground/70 uppercase">Modules</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            What the project brings together
          </h2>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
            Each module supports a distinct operational need while keeping the same inventory
            picture for every team.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <div key={module} className="rounded-2xl border bg-card p-5 shadow-sm">
              <p className="text-sm leading-7 text-muted-foreground">{module}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}