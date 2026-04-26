import { motion } from "framer-motion";
import { Brain, Sparkles, Compass, Gamepad2, BookOpen, Music, Pencil, Globe2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const traits = [
  { icon: Compass, label: "Curiosity", desc: "Always asking why and chasing the next idea." },
  { icon: Sparkles, label: "Adaptability", desc: "Comfortable across tech, leadership and creative work." },
  { icon: Brain, label: "Creativity", desc: "Mixing analytical thinking with artistic expression." },
];

const interests = [
  { icon: Globe2, label: "Geopolitics" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: BookOpen, label: "Reading" },
  { icon: Pencil, label: "Writing" },
  { icon: Music, label: "Singing" },
  { icon: Pencil, label: "Sketching" },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle eyebrow="About me" title="A multi-dimensional builder, learner and storyteller." />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Bio block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border/60"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a first-year B.Tech IT undergraduate with a deep love for solving real problems through
              code. My foundations are in <span className="font-medium">C</span> and growing in{" "}
              <span className="font-medium">C++</span>, while I keep one eye on{" "}
              <span className="font-medium">AI</span> and another on{" "}
              <span className="font-medium">cybersecurity</span>.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Beyond the terminal, I lead and manage communities, organise events, and explore the
              creative side of life — from sketching to singing. I believe the most interesting people
              live at the intersection of disciplines, and I'm doing my best to live there.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl border border-border/60 p-4 hover:bg-secondary/60 transition-colors"
                >
                  <t.icon className="w-5 h-5 text-accent" strokeWidth={2} />
                  <div className="mt-3 font-display font-semibold">{t.label}</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl p-8 lg:p-10 bg-foreground text-background relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-rainbow blur-3xl opacity-30 rounded-full" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">Beyond tech</div>
              <h3 className="font-display text-3xl font-bold leading-tight">
                Things that keep me <span className="font-serif-display italic font-normal">curious</span>.
              </h3>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {interests.map((i) => (
                  <div
                    key={i.label}
                    className="flex items-center gap-3 rounded-2xl border border-background/15 px-4 py-3 hover:bg-background/10 transition-colors"
                  >
                    <i.icon className="w-4 h-4 text-accent" strokeWidth={2} />
                    <span className="text-sm font-medium">{i.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;