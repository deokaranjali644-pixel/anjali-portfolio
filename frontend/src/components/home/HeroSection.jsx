import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { CONTACT, HERO_MARQUEE, PROFILE_IMAGE, RESUME_URL } from "@/data/site";

function MaskedLine({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 lg:pt-40" data-testid="hero-section">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#16302B 1px, transparent 1px), linear-gradient(90deg, #16302B 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-mono text-xs tracking-[0.22em] text-blaze"
            data-testid="hero-overtitle"
          >
            UI / VISUAL DESIGNER — PUNE, INDIA
          </motion.p>
          <h1
            className="font-heading text-6xl leading-[0.95] font-semibold tracking-tight sm:text-7xl lg:text-8xl"
            data-testid="hero-name-heading"
          >
            <MaskedLine delay={0.2}>Anjali</MaskedLine>
            <MaskedLine delay={0.35}>
              <span className="italic">
                Duvva<span className="text-blaze">.</span>
              </span>
            </MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            UI/Visual Designer with 10+ years of experience in UI, visual design, digital experiences, branding, and creative design. Skilled in Figma and Adobe Creative Suite, with experience creating engaging and user-focused designs across web, mobile, and digital platforms. Passionate about visual storytelling, design innovation, and creating impactful digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/portfolio"
              data-testid="hero-view-portfolio-button"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-neon px-7 py-4 text-sm font-semibold tracking-wide text-background transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_44px_-10px_rgba(109,184,164,0.6)] active:scale-[0.98]"
            >
              View Portfolio
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
            <a
              href={RESUME_URL}
              download="Anjali-Duvva-Resume.pdf"
              data-testid="hero-resume-button"
              className="group inline-flex items-center gap-3 rounded-full border border-blaze/60 px-7 py-4 text-sm font-semibold tracking-wide text-blaze transition-colors duration-300 hover:bg-blaze hover:text-background"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              data-testid="hero-email-link"
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:border-blaze/60 hover:text-blaze"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            style={{ y: glowY }}
            className="absolute -inset-10 rounded-full bg-blaze/25 blur-[110px]"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: portraitY }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={PROFILE_IMAGE}
                alt="Portrait of Anjali Duvva, UI and Visual Designer"
                data-testid="hero-portrait-image"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute -left-4 bottom-8 rounded-2xl border border-border bg-card/90 px-5 py-4 backdrop-blur-md sm:-left-10"
              data-testid="hero-experience-badge"
            >
              <p className="flex items-center gap-2 font-heading text-2xl font-semibold">
                <Sparkles className="h-4 w-4 text-blaze" />
                10+ Years
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                UI & Visual Design
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative flex justify-center px-6 pb-14">
        <div className="w-full max-w-2xl rounded-full border border-border/70 bg-card/40 py-2.5 [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)]">
          <Marquee
            items={HERO_MARQUEE}
            duration={32}
            testId="tools-marquee"
            itemClassName="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase"
          />
        </div>
      </div>
    </section>
  );
}
