import { Link } from "react-router-dom";

export function LogoMark({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="13" r="8" stroke="#D6C39A" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="3.4" fill="#6DB8A4" />
      <circle cx="11" cy="13" r="2.2" fill="#D6C39A" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link to="/" data-testid="logo-home-link" className="group flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-colors duration-300 group-hover:border-blaze/60">
        <LogoMark />
      </span>
      <span className="leading-none">
        <span className="block font-heading text-lg font-semibold tracking-tight">Anjali Duvva</span>
        <span className="mt-1 block font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
          UI & VISUAL DESIGNER
        </span>
      </span>
    </Link>
  );
}
