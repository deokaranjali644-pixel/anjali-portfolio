import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/data/site";

const LINKS = [
  { to: "/", label: "Home", testId: "nav-home-link" },
  { to: "/portfolio", label: "Portfolio", testId: "nav-portfolio-link" },
];

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Logo />
        <nav className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={l.testId}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {pathname === l.to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-border bg-secondary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${pathname === l.to ? "text-foreground" : ""}`}>{l.label}</span>
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${CONTACT.email}`}
          data-testid="nav-contact-link"
          className="group hidden items-center gap-2 rounded-full border border-blaze/50 px-4 py-2 font-mono text-xs tracking-widest text-blaze transition-colors duration-300 hover:bg-blaze hover:text-background sm:flex"
        >
          SAY HELLO
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
