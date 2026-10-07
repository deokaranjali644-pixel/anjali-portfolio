import { LogoMark } from "./Logo";
import { CONTACT } from "@/data/site";

const FOOTER_MARQUEE = [
  "Anjali Duvva",
  "UI × Visual",
  "Pune → Worldwide",
  "Design With Intent",
  "Est. 2015",
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <LogoMark size={18} />
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © 2026 ANJALI DUVVA — PUNE, INDIA
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs tracking-widest">
          <a
            href={`mailto:${CONTACT.email}`}
            data-testid="footer-email-link"
            className="text-muted-foreground transition-colors duration-300 hover:text-blaze"
          >
            EMAIL
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-linkedin-link"
            className="text-muted-foreground transition-colors duration-300 hover:text-blaze"
          >
            LINKEDIN
          </a>
          <a
            href={CONTACT.behance}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-behance-link"
            className="text-muted-foreground transition-colors duration-300 hover:text-blaze"
          >
            BEHANCE
          </a>
        </div>
      </div>
    </footer>
  );
}
