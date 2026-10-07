import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/projects";

const TABS = [
  { key: "ui", label: "UI Design", testId: "tab-ui-design" },
  { key: "visual", label: "Visual Design", testId: "tab-visual-design" },
];

const SPANS = [
  "md:col-span-2 lg:col-span-7",
  "md:col-span-2 lg:col-span-5",
  "md:col-span-2 lg:col-span-5",
  "md:col-span-2 lg:col-span-7",
];

export default function Portfolio() {
  const [section, setSection] = useState("ui");
  const [toolFilter, setToolFilter] = useState(null);
  const navigate = useNavigate();

  const sectionProjects = useMemo(
    () => CASE_STUDIES.filter((p) => p.section === section),
    [section]
  );
  const availableTools = useMemo(
    () => [...new Set(sectionProjects.flatMap((p) => p.tools))],
    [sectionProjects]
  );
  const projects = toolFilter
    ? sectionProjects.filter((p) => p.tools.includes(toolFilter))
    : sectionProjects;

  const switchSection = (key) => {
    setSection(key);
    setToolFilter(null);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:px-8 lg:px-12 lg:pt-40" data-testid="portfolio-page">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-xs tracking-[0.22em] text-blaze">SELECTED WORK — UI × VISUAL DESIGN</p>
        <h1 className="mt-4 max-w-3xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
          Case studies in <span className="italic text-muted-foreground">two crafts.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Interfaces engineered for use, and visuals built to be remembered. Open any project
          for the full story — problem, process and proof.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-col gap-6 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-max items-center gap-1 rounded-full border border-border bg-card p-1" data-testid="portfolio-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => switchSection(tab.key)}
              data-testid={tab.testId}
              className="relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {section === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className={`absolute inset-0 rounded-full ${tab.key === "ui" ? "bg-blaze" : "bg-cyan-neon"}`}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${section === tab.key ? "text-background font-semibold" : ""}`}>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2" data-testid="tool-filters">
          <button
            onClick={() => setToolFilter(null)}
            data-testid="tool-filter-all"
            className={`cursor-pointer rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${
              toolFilter === null
                ? "border-blaze bg-blaze/15 text-blaze"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {availableTools.map((tool) => (
            <button
              key={tool}
              onClick={() => setToolFilter(toolFilter === tool ? null : tool)}
              data-testid={`tool-filter-${tool.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={`cursor-pointer rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                toolFilter === tool
                  ? "border-blaze bg-blaze/15 text-blaze"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12" data-testid="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => (
            <motion.button
              layout
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => navigate(`/portfolio/${project.id}`)}
              data-testid={`project-card-${project.id}`}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card text-left transition-colors duration-300 hover:border-blaze/50 ${
                SPANS[Math.min(i, SPANS.length - 1)]
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-background/70 px-3 py-1 font-mono text-[10px] tracking-widest text-foreground uppercase backdrop-blur-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/15 bg-background/70 px-5 py-2.5 font-mono text-[10px] tracking-[0.22em] text-foreground uppercase backdrop-blur-md">
                    View Case Study
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className={`font-mono text-[10px] tracking-[0.22em] uppercase ${project.section === "ui" ? "text-blaze" : "text-cyan-neon"}`}>
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    {project.client} · {project.tools.join(" / ")}
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-blaze group-hover:bg-blaze group-hover:text-background">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
