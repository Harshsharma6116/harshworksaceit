import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionTitle = ({ eyebrow, title, description, align = "left" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="w-8 h-px bg-foreground" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;