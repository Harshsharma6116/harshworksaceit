import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19.27 5.33A18 18 0 0 0 14.86 4l-.2.4a16 16 0 0 1 4 1.94 14.6 14.6 0 0 0-13.31 0 16 16 0 0 1 4-1.94L9.14 4a18 18 0 0 0-4.41 1.33A19.34 19.34 0 0 0 1 17.5a18.16 18.16 0 0 0 5.5 2.78l1.1-1.55a11.5 11.5 0 0 1-1.84-.9c.16-.12.32-.24.47-.37a13.06 13.06 0 0 0 11.55 0c.15.13.31.25.47.37a11.5 11.5 0 0 1-1.84.9l1.1 1.55A18.16 18.16 0 0 0 23 17.5a19.34 19.34 0 0 0-3.73-12.17ZM8.52 15.33c-1.05 0-1.92-.97-1.92-2.16s.85-2.17 1.92-2.17 1.94.98 1.92 2.17-.86 2.16-1.92 2.16Zm6.96 0c-1.05 0-1.92-.97-1.92-2.16s.85-2.17 1.92-2.17 1.93.98 1.92 2.17-.86 2.16-1.92 2.16Z" />
  </svg>
);

const socials = [
  { Icon: LinkedInIcon, label: "LinkedIn", handle: "@harshitsharma", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", handle: "@harshit", href: "#" },
  { Icon: DiscordIcon, label: "Discord", handle: "harshit#0001", href: "#" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    try {
      setSending(true);
      await emailjs.send(
        "service_yw9dtpn",
        "template_oy43qlb",
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: "PAL2BJnVpKJX9nyDK" }
      );
      toast({ title: "Message sent ✨", description: "I'll get back to you soon, promise." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Couldn't send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1]">
            Say <span className="text-muted-foreground/50">Hi!</span>{" "}
            <span className="font-serif-display italic font-normal">and tell me</span>
            <br />
            about your idea.
          </h2>
          <p className="mt-5 text-muted-foreground">Have a new project? Reach out and let's chat.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card rounded-3xl p-8 lg:p-10 border border-border/60 shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@email.com"
              />
            </div>
            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me a bit about it…"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground placeholder:text-muted-foreground/60 resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-8 group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium hover:bg-accent hover:shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending…" : "Send Message"}
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex items-center justify-between bg-card border border-border/60 rounded-2xl px-6 py-5 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary group-hover:bg-background/10 flex items-center justify-center transition-colors">
                    <s.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{s.label}</div>
                    <div className="text-xs text-muted-foreground group-hover:text-background/70">
                      {s.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground placeholder:text-muted-foreground/60 transition-colors"
    />
  </div>
);

export default Contact;