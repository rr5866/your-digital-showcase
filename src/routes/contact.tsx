import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhishek Ganvir" },
      {
        name: "description",
        content: "Get in touch with Abhishek Ganvir — let's build something great together.",
      },
      { property: "og:title", content: "Contact — Abhishek Ganvir" },
      {
        property: "og:description",
        content: "Have something to discuss? Send me a message and let's talk.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="Contact Me"
        title="Get in Touch"
        description="Got a question or a project in mind? Send me a message and I'll get back to you soon."
      />

      <div className="mt-16 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@abhishek.dev" },
            { icon: Phone, label: "Phone", value: "+91 00000 00000" },
            { icon: MapPin, label: "Location", value: "India" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="gradient-card border border-border rounded-2xl p-5 flex items-center gap-4 transition-smooth hover:border-primary/40"
            >
              <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="text-sm font-medium text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            (e.target as HTMLFormElement).reset();
          }}
          className="md:col-span-3 gradient-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                required
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
            <input
              type="text"
              placeholder="What's it about?"
              className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
