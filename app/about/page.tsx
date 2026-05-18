import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn why Sentr exists, who it serves, and how the project is built.",
};

const values = [
  {
    title: "Clarity over noise",
    text: "Every workflow aims to reduce uncertainty for store staff during daily operations.",
  },
  {
    title: "Practical automation",
    text: "We build for real retail routines, not theoretical demo flows.",
  },
  {
    title: "System thinking",
    text: "Hardware, data pipelines, and dashboards evolve together, not in isolation.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">About us</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          We build Sentr to make inventory status obvious.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Sentr focuses on the operational layer behind modern retail: fast shelf visibility,
          RFID-driven detection, and a shared inventory picture for staff and managers.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{value.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 rounded-2xl border bg-muted/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">Team focus</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            From hardware to dashboard, the full path matters.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            The work spans RFID readers, moving systems, automation APIs, inventory logic, and
            the interface that teams see every day.
          </p>
          <p>
            That keeps the project grounded in real use: fast, reliable, and easy to understand.
          </p>
        </div>
      </div>
    </div>
  );
}