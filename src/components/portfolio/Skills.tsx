import { motion } from "framer-motion";
import { Code2, Cpu, ShieldCheck, Brain, Crown, Users, Calendar, ShieldAlert } from "lucide-react";
import SectionTitle from "./SectionTitle";

const technical = [
  { icon: Code2, label: "C Programming", level: "Strong foundation", color: "bg-pastel-peach" },
  { icon: Cpu, label: "C++ Programming", level: "Growing", color: "bg-pastel-yellow" },
  { icon: ShieldCheck, label: "Cybersecurity", level: "Foundations", color: "bg-pastel-mint" },
  { icon: Brain, label: "Artificial Intelligence", level: "Foundations", color: "bg-pastel-sky" },
];

const professional = [
  { icon: Crown, label: "Management & Leadership" },
  { icon: Calendar, label: "Community & Event Mgmt" },
  { icon: Users, label: "Team Collaboration" },
  { icon: ShieldAlert, label: "Crisis Management" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle eyebrow="Skills" title="What I'm working with." />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Technical */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> Technical
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technical.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group bg-card rounded-2xl p-6 border border-border/60 hover:-translate-y-1 hover:shadow-soft transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                    <s.icon className="w-6 h-6 text-foreground" strokeWidth={2} />
                  </div>
                  <div className="font-display font-semibold">{s.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.level}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-foreground" /> Professional
            </h3>
            <div className="space-y-3">
              {professional.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-center gap-4 bg-card rounded-2xl px-5 py-4 border border-border/60 hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-background/10">
                    <s.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="font-display font-medium">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;