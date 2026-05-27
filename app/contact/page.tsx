import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Sentr team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Have a question or want to discuss Sentr? Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}