import { motion } from "framer-motion";
import { Hourglass } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card border border-border/60 p-10 lg:p-14 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-pastel-lilac flex items-center justify-center">
              <Hourglass className="w-7 h-7 text-foreground" strokeWidth={1.6} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Services
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">
                Services will be available <span className="font-serif-display italic font-normal">soon</span>.
              </h3>
              <p className="text-muted-foreground mt-2 max-w-lg">
                I'm shaping a focused list of services around development, community work and creative
                collaboration. Check back shortly.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
          >
            Get notified
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;