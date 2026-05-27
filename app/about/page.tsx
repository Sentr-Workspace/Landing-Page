import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn more about the creators, the journey of Sentr, and our vision.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">About us</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            From a smart fridge to a modular inventory platform.
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              We are Siddhartha and Iulia, two 16-year-old students from Berlin with a shared passion for computer science, robotics, and solving real-world problems through technology. We have been participating in Jugend forscht for several years and enjoy turning ambitious ideas into working prototypes.
            </p>
            <p>
              The journey of Sentr started in November 2025 with a completely different idea: a smart fridge that could automatically track food and reduce waste using RFID technology. While exploring this concept, we quickly realized that the greater challenge and opportunity lay much earlier in the supply chain. Instead of focusing on consumers, we shifted our attention to supermarkets and the everyday inventory processes that still require significant manual effort.
            </p>
            <p>
              This led to the development of Sentr, a modular RFID-based inventory and logistics platform that combines intelligent scanning, automated data collection, and a flexible software architecture. What began as a supermarket solution has since evolved into a broader infrastructure that can also be adapted for applications such as libraries, laboratories, schools, and other inventory-intensive environments.
            </p>
            <p>
              Within just five months, we designed and built a complete prototype, including custom hardware, a scalable microservice-based backend, and automated scanning technology. Our work was recognized at the Berlin State Competition of Jugend forscht 2026, where we won first place and qualified to represent Berlin at the national finals in Herzogenaurach.
            </p>
            <p>
              Today, we continue to improve Sentr and explore how intelligent inventory automation can make workplaces more efficient, transparent, and future-ready.
            </p>
          </div>
        </div>

        {/* Image Placeholder on the right */}
        <div className="rounded-3xl border bg-card p-2 sm:p-4 lg:sticky lg:top-24 shadow-sm">
          {/* More rectangled / landscape shaped */}
          <Image src="/aboutus.jpg" alt="S and I demonstrating the Sentr system" width={1200} height={800} className="aspect-[3/2] w-full rounded-2xl object-cover border border-muted-foreground/30" />
        </div>
      </div>
    </div>
  );
}