"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // We map the state to a reactive mailto link 
  // so the button acts naturally as an anchor tag, avoiding form submission blocks.
  const mailtoLink = `mailto:hello@sentr.digital?subject=${encodeURIComponent(
    subject || "Contact from Sentr Website"
  )}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;

  return (
    <div className="mt-12 rounded-3xl border bg-card p-6 shadow-sm sm:p-10">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              placeholder="Your name"
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
              placeholder="you@company.com"
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            placeholder="Write your message here..."
          />
        </div>
        <a
          href={mailtoLink}
          className="w-full inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 justify-center items-center"
        >
          Send Email
        </a>
      </div>
    </div>
  );
}