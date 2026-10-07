import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "@/data/site";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32" data-testid="experience-section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-xs tracking-[0.22em] text-blaze">CAREER — 2015 TO NOW</p>
        <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          A decade across studios, <span className="italic text-muted-foreground">newsrooms & brands.</span>
        </h2>
      </motion.div>

      <div className="relative mt-16 ml-3 space-y-14 border-l border-border pl-8 md:ml-6 md:pl-12" data-testid="experience-timeline">
        {EXPERIENCE.map((job, i) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="relative"
            data-testid={`experience-item-${job.id}`}
          >
            <span className="absolute top-2 -left-[41px] h-4 w-4 rounded-full border-2 border-blaze bg-background md:-left-[57px]" />
            <p className="font-mono text-xs tracking-[0.18em] text-blaze">{job.period}</p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{job.company}</h3>
              <p className="text-sm text-muted-foreground">
                {job.role} · {job.location}
              </p>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {job.highlights}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-2xl border border-border bg-card p-8"
        data-testid="education-card"
      >
        <p className="font-mono text-xs tracking-[0.22em] text-blaze">EDUCATION</p>
        <p className="mt-3 font-heading text-xl font-semibold sm:text-2xl">{EDUCATION.degree}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {EDUCATION.institution} · {EDUCATION.year}
        </p>
      </motion.div>
    </section>
  );
}
