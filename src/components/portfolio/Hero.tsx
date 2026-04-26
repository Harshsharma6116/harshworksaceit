import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";
import heroImg from "@/assets/harshit-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 lg:pt-16 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            it's me
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            Hello! <span className="font-serif-display italic font-normal text-muted-foreground">I'm</span> Harshit
            <span className="inline-block ml-3">
              <Sparkles className="inline w-10 h-10 lg:w-14 lg:h-14 text-accent" strokeWidth={1.5} />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex items-center gap-3 text-sm text-muted-foreground font-medium"
          >
            <span>IT Undergraduate</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Programmer</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Community Manager</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            A first-year B.Tech IT undergraduate passionate about using technology to tackle practical
            challenges. Strong in C, growing in C++, exploring AI and cybersecurity — always learning, always building.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg text-sm"
          >
            {["Curious & adaptable", "Creative & analytical", "Leadership & community"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-foreground/80">
                <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium hover:bg-accent transition-all hover:shadow-glow"
            >
              Connect With Me
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-border hover:bg-secondary transition-colors"
            >
              View My Work
            </a>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -top-10 -right-6 w-72 h-72 bg-gradient-rainbow blur-3xl opacity-60 rounded-full" />
          <div className="relative rounded-[2rem] overflow-hidden bg-secondary aspect-[4/5] shadow-soft">
            <img
              src={heroImg}
              alt="Harshit Sharma — IT undergraduate and programmer"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
            {/* Floating "Hello" badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: -8 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              className="absolute bottom-6 left-6 w-24 h-24 rounded-full bg-foreground text-background flex items-center justify-center font-serif-display italic text-2xl shadow-soft"
            >
              Hello
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="bg-foreground text-background py-4 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap font-display font-medium text-sm tracking-widest uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              C Programming <span className="text-accent">✦</span>
              C++ <span className="text-accent">✦</span>
              Cybersecurity <span className="text-accent">✦</span>
              AI Foundations <span className="text-accent">✦</span>
              Community <span className="text-accent">✦</span>
              Leadership <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
};

export default Hero;