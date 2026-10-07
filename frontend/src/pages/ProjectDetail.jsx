import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, ZoomIn } from "lucide-react";
import { CASE_STUDIES, PROJECT_DETAILS } from "@/data/projects";

function SectionImage({ image }) {
  return (
    <figure className="mt-10">
      <a
        href={image.src}
        target="_blank"
        rel="noreferrer"
        data-testid="section-image-link"
        className="group/img relative block overflow-hidden rounded-2xl border border-border"
      >
        <img src={image.src} alt={image.alt} loading="lazy" className="w-full" />
        <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/img:opacity-100">
          <ZoomIn className="h-4 w-4" />
        </span>
      </a>
      {image.caption && (
        <figcaption className="mt-3 text-center font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function HeuristicCards({ items }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2" data-testid="heuristic-grid">
      {items.map((h, i) => (
        <motion.div
          key={h.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          className="rounded-2xl border border-border bg-background p-6"
          data-testid={`heuristic-card-${i + 1}`}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-blaze">{String(i + 1).padStart(2, "0")}</span>
            <h4 className="font-heading text-lg font-semibold tracking-tight">{h.title}</h4>
          </div>
          <p className="mt-5 font-mono text-[10px] tracking-[0.2em] text-red-400/90 uppercase">Pain Points</p>
          <ul className="mt-2 space-y-1.5">
            {h.pains.map((p) => (
              <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-400/70" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-cyan-neon uppercase">Solutions</p>
          <ul className="mt-2 space-y-1.5">
            {h.solutions.map((s) => (
              <li key={s} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-neon" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-l-2 border-blaze pl-3 text-sm font-medium text-blaze">
            Impact — {h.impact}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function Section({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="border-t border-border py-14 first:border-t-0 first:pt-0"
    >
      <p className="font-mono text-xs tracking-[0.22em] text-blaze">{section.label}</p>
      <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        {section.title}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}

      {section.heuristics && <HeuristicCards items={section.heuristics} />}

      {section.cards && (
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {section.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-background p-6">
              <h4 className="font-heading text-lg font-semibold tracking-tight">{card.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      )}

      {section.lists?.map((list) => (
        <div key={list.heading} className="mt-10">
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{list.heading}</p>
          <ul className="mt-4 space-y-2.5">
            {list.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <span className="mt-2 text-[8px] text-blaze">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {section.image && <SectionImage image={section.image} />}

      {section.gallery && (
        <div
     className={`mt-10 grid grid-cols-1 gap-4 ${section.gallery.length > 1 ? "sm:grid-cols-2" : ""}`}
     data-testid="project-gallery"
   >
          {section.gallery.map((img) => (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:scale-[1.01]"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
            </a>
          ))}
        </div>
      )}
    </motion.section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const index = CASE_STUDIES.findIndex((p) => p.id === id);
  if (index === -1) return <Navigate to="/portfolio" replace />;

  const project = CASE_STUDIES[index];
  const details = PROJECT_DETAILS[id] || { sections: [] };
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];
  const accentText = project.section === "ui" ? "text-blaze" : "text-cyan-neon";

  const meta = [
    { label: "CLIENT", value: project.client },
    { label: "PROJECT TYPE", value: details.type || project.category },
    { label: "ROLE", value: project.role },
    { label: "TOOLS", value: project.tools.join(" · ") },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 sm:px-8 lg:pt-40" data-testid="project-detail-page">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Link
          to="/portfolio"
          data-testid="back-to-portfolio-link"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:text-blaze"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <p className={`mt-10 font-mono text-xs tracking-[0.22em] uppercase ${accentText}`} data-testid="project-category">
          {project.category}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" data-testid="project-title">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4" data-testid="project-meta">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{m.label}</p>
              <p className="mt-2 text-sm font-medium leading-relaxed">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border" data-testid="project-cover">
          <img src={project.image} alt={project.title} className="w-full" />
        </div>
      </motion.div>

      <div className="mt-16 space-y-14" data-testid="project-sections">
        {details.sections.map((section) => (
          <Section key={section.label} section={section} />
        ))}
      </div>

      {details.takeaway && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex items-start gap-4 rounded-2xl border border-blaze/40 bg-blaze/10 p-8"
          data-testid="project-takeaway"
        >
          <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-blaze" />
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-blaze">{details.takeaway.label}</p>
            <p className="mt-3 text-sm leading-relaxed font-medium sm:text-base">{details.takeaway.text}</p>
          </div>
        </motion.div>
      )}

      {details.process && (
        <div className="mt-10" data-testid="project-process">
          <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Design Process</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {details.process.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-card px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {String(i + 1).padStart(2, "0")} · {step}
                </span>
                {i < details.process.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-blaze" />}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        to={`/portfolio/${next.id}`}
        data-testid="next-project-link"
        className="group mt-20 flex items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 transition-colors duration-300 hover:border-blaze/60"
      >
        <div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Next Project</p>
          <p className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{next.title}</p>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-blaze group-hover:bg-blaze group-hover:text-background">
          <ArrowRight className="h-5 w-5" />
        </span>
      </Link>
    </main>
  );
}
