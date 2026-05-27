import type { Metadata } from "next";

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

      <div className="mt-12 rounded-3xl border bg-card p-6 shadow-sm sm:p-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-2 block w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="mt-2 block w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 flex justify-center items-center"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}