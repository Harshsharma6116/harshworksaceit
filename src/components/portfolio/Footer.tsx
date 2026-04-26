const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div className="font-display font-semibold text-foreground">harshit<span className="text-accent">.</span></div>
      <div>© {new Date().getFullYear()} Harshit Sharma. Built with curiosity.</div>
      <div className="flex gap-5">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;