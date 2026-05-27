import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Project details",
  description:
    "An overview of Sentr's hardware architecture, moving system, and backend API.",
};

export default function ProjectPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">System Architecture</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Bridging the gap between the physical shelf and digital records.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Sentr is powered by a seamless combination of custom hardware, robotics, and horizontally scalable software. Here is a high-level overview of how the system captures, moves, and processes inventory data.
        </p>
      </div>

      <div className="mt-20 space-y-20 lg:space-y-32">
        {/* RFID Scanning System */}
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="mb-4 inline-flex h-8 items-center justify-center rounded-md bg-primary/10 px-3 text-xs font-semibold text-primary uppercase tracking-widest">
              Core Hardware
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Intelligent RFID Scanning</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At the heart of Sentr is our custom RFID infrastructure. Instead of relying on manual barcode scanning, we utilize UHF RFID technology to continuously monitor item presence. Operating via custom firmwares on dedicated microcontrollers, the system communicates with high-performance antennas to capture tagged inventory instantly. This modular architecture detects items reliably across varying shelf structures, providing real-time stock visibility without disrupting the shopping experience.
            </p>
          </div>
          <div className="order-2 lg:order-1 rounded-3xl border bg-card p-2 sm:p-4 shadow-sm">
            {/* Try to use an Image if available, otherwise this acts as a placeholder structure */}
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-muted/40 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
               {/* <svg className="h-10 w-10 text-muted-foreground/50 mb-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                 {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> */}
               {/* </svg> */}
               {/* <p className="text-sm font-medium text-foreground relative z-10">Moving System Placeholder</p> */}
               {/* <p className="text-xs text-muted-foreground mt-1 relative z-10">Insert a good photo of the stepper motor & rail mechanism here.</p> */}
               
               
                 {/* Uncomment and use the Image tag below once you add the image to the public folder. */}
                <Image src="./keonn-advantenna-p11.jpg" alt="Sentr API Microservices Documentation" fill className="object-cover object-left" />
              
            </div>
          </div>
        </section>

        {/* Moving System */}
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div className="order-2 lg:order-1 rounded-3xl border bg-card p-2 sm:p-4 shadow-sm">
            {/* Try to use an Image if available, otherwise this acts as a placeholder structure */}
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-muted/40 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
               {/* <svg className="h-10 w-10 text-muted-foreground/50 mb-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                 {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> */}
               {/* </svg> */}
               {/* <p className="text-sm font-medium text-foreground relative z-10">Moving System Placeholder</p> */}
               {/* <p className="text-xs text-muted-foreground mt-1 relative z-10">Insert a good photo of the stepper motor & rail mechanism here.</p> */}
               
               
                 {/* Uncomment and use the Image tag below once you add the image to the public folder. */}
                <Image src="./moving_system.jpeg" alt="Sentr automated moving rail system" fill className="object-cover" />
              
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-flex h-8 items-center justify-center rounded-md bg-brand-accent/10 px-3 text-xs font-semibold text-brand-accent uppercase tracking-widest">
              Robotics
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Automated Moving System</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              To maximize cost-efficiency and ensure complete shelf coverage without requiring a stationary antenna for every square inch, we engineered an automated movement mechanism. Driven by precise stepper motors along a specialized rail structure, the transceiver unit glides autonomously across consecutive shelves. This systematic scan approach allows a single reader array to process massive amounts of inventory. The hardware is designed to be highly reliable and easy to retrofit onto existing retail infrastructure.
            </p>
          </div>
        </section>

        {/* Sentr API */}
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="mb-4 inline-flex h-8 items-center justify-center rounded-md bg-success/10 px-3 text-xs font-semibold text-success uppercase tracking-widest">
              Digital Backbone
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Sentr-API Microservices</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              All physical data generated by the hardware is processed by our scalable microservice architecture. Built for high resilience and rapid parallel processing, the backend decodes raw RFID signals into actionable inventory events. It handles data deduplication, manages product metadata, and orchestrates the moving system's scanning schedules. The API serves as the central nervous system, connecting edge devices to our operational dashboard to ensure a single, consistent source of truth.
            </p>
          </div>
          <div className="order-2 lg:order-1 rounded-3xl border bg-card p-2 sm:p-4 shadow-sm">
            {/* Try to use an Image if available, otherwise this acts as a placeholder structure */}
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-muted/40 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
               {/* <svg className="h-10 w-10 text-muted-foreground/50 mb-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                 {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> */}
               {/* </svg> */}
               {/* <p className="text-sm font-medium text-foreground relative z-10">Moving System Placeholder</p> */}
               {/* <p className="text-xs text-muted-foreground mt-1 relative z-10">Insert a good photo of the stepper motor & rail mechanism here.</p> */}
               
               
                 {/* Uncomment and use the Image tag below once you add the image to the public folder. */}
                <Image src="./api.jpg" alt="Sentr API Microservices Documentation" fill className="object-cover object-left" />
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}