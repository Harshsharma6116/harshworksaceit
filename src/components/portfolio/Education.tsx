import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle eyebrow="Education" title="Building the foundations." />

        <div className="mt-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border/60 shadow-card"
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center">
                <GraduationCap className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="inline-flex items-center gap-1.5 bg-pastel-mint text-foreground px-3 py-1 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                    Ongoing
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> First Year
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">
                  B.Tech in Information Technology
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Currently pursuing my undergraduate degree, building strong fundamentals in
                  programming, computer systems, and emerging tech. Focused on developing both
                  theoretical depth and practical skill.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Programming", "Data Structures", "Computer Systems", "Mathematics"].map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;