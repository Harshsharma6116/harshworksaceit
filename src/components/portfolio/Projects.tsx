import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Projects"
          title="Coming soon — the lab is warming up."
          description="I'm currently building, breaking and learning. The first projects will land here shortly."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-foreground text-background p-10 lg:p-16"
        >
          <div className="absolute inset-0 bg-gradient-rainbow opacity-20" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/30 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full text-xs font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                In the workshop
              </div>
              <h3 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
                Currently working on exciting projects —
                <span className="font-serif-display italic font-normal"> stay tuned.</span>
              </h3>
              <p className="mt-5 text-background/70 max-w-xl leading-relaxed">
                From small CLI utilities to security explorations and AI experiments — every project
                here will be a step in a clear, intentional direction.
              </p>
            </div>
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-44 h-44 rounded-full bg-background text-foreground flex items-center justify-center shadow-glow"
              >
                <Rocket className="w-20 h-20" strokeWidth={1.4} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Placeholder cards for future scalability */}
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-card/40 flex items-center justify-center text-muted-foreground/60 text-sm font-medium"
            >
              Project slot 0{i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;