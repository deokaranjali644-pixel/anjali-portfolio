import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowUpRight, Copy, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/data/site";

async function copyToClipboard(text, label) {
  await navigator.clipboard.writeText(text);
  toast.success(`${label} copied to clipboard`);
}

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32" data-testid="contact-section">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <p className="font-mono text-xs tracking-[0.22em] text-blaze">CONTACT</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let's craft the <span className="italic text-muted-foreground">next story</span> together.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Have a project in mind, a design challenge to solve, or simply want to connect? I’d love to hear from you. Whether it’s UI/UX, visual design, branding, marketing communication, or digital experiences — let’s turn ideas into thoughtful and impactful designs.
          </p>
          <p className="mt-8 flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            <MapPin className="h-4 w-4 text-blaze" />
            {CONTACT.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-4 lg:col-span-6"
        >
          <div className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-blaze/60">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background">
                <Mail className="h-4 w-4 text-blaze" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  data-testid="contact-email-link"
                  className="block truncate text-sm font-medium transition-colors duration-300 hover:text-blaze sm:text-base"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT.email, "Email")}
              data-testid="contact-email-copy-button"
              className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-blaze hover:text-blaze"
              aria-label="Copy email address"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>

          <div className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-blaze/60">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background">
                <Phone className="h-4 w-4 text-blaze" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Phone</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  data-testid="contact-phone-link"
                  className="block truncate text-sm font-medium transition-colors duration-300 hover:text-blaze sm:text-base"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT.phone, "Phone number")}
              data-testid="contact-phone-copy-button"
              className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-blaze hover:text-blaze"
              aria-label="Copy phone number"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-linkedin-link"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-blaze/60"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">LinkedIn</p>
                <p className="mt-1 text-sm font-medium">/{CONTACT.linkedinHandle}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blaze" />
            </a>
            <a
              href={CONTACT.behance}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-behance-link"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-blaze/60"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Behance</p>
                <p className="mt-1 text-sm font-medium">/{CONTACT.behanceHandle}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blaze" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
