import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import { SKILLS, TOOLS } from "@/data/site";

export function ToolsSection() {
  return (
    <section className="border-y border-border bg-card/40" data-testid="tools-section">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.22em] text-blaze">THE INSTRUMENTS</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Tools, <span className="italic text-muted-foreground">mastered.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-blaze/60 hover:shadow-[0_0_40px_-12px_rgba(214,195,154,0.4)] ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
              data-testid={`tool-card-${tool.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="flex items-start justify-between">
                <PenTool className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-blaze" />
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-blaze uppercase">
                  {tool.proficiency}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight">{tool.name}</h3>
              <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
          data-testid="skills-cloud"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors duration-300 hover:border-blaze/60 hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
