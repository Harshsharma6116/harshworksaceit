import { motion } from "framer-motion";
import { Users, Calendar, Crown, ShieldAlert } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    n: "01",
    role: "Community Manager",
    org: "Multiple Discord communities",
    period: "Active",
    desc: "Managing daily operations across multiple servers — moderation, member engagement and growth strategy.",
    icon: Users,
  },
  {
    n: "02",
    role: "Event Manager",
    org: "Independent",
    period: "Active",
    desc: "Planning and executing online events end-to-end: scheduling, coordination, and live operations.",
    icon: Calendar,
  },
  {
    n: "03",
    role: "Collaborator",
    org: "Not Your Type",
    period: "Recent",
    desc: "Worked alongside the creator on community projects, audience engagement and operational support.",
    icon: Crown,
  },
];

const strengths = [
  { icon: Users, label: "Team Collaboration" },
  { icon: Crown, label: "Leadership" },
  { icon: ShieldAlert, label: "Crisis Handling" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've led, built and shipped."
          description="Community work has taught me as much as code — both reward patience, clarity and showing up."
        />

        <div className="mt-14 space-y-3">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-center gap-4 lg:gap-6 px-5 lg:px-8 py-5 lg:py-6 rounded-2xl bg-card border border-border/60 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <div className="col-span-2 md:col-span-1 font-display text-xl font-semibold text-muted-foreground group-hover:text-background/60">
                {it.n}
              </div>
              <div className="col-span-10 md:col-span-4">
                <div className="font-display font-semibold text-lg">{it.role}</div>
                <div className="text-sm text-muted-foreground group-hover:text-background/70">{it.org}</div>
              </div>
              <div className="hidden md:block col-span-5 text-sm text-muted-foreground group-hover:text-background/80 leading-relaxed">
                {it.desc}
              </div>
              <div className="hidden md:flex col-span-2 items-center justify-end gap-2 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/70">
                <it.icon className="w-4 h-4" />
                {it.period}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strengths */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 bg-secondary/60 border border-border/60 hover:shadow-card transition-shadow"
            >
              <s.icon className="w-6 h-6 text-accent" strokeWidth={2} />
              <div className="mt-4 font-display font-semibold text-lg">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;