import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/50 text-xs text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            10+ Years Building Scalable Systems
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Jatin{" "}
            <span className="text-gradient">Patel</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
            Senior Backend Engineer{" "}
            <span className="text-accent">|</span>{" "}
            SaaS Architect
          </p>

          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            I design and build secure, scalable, and performance-driven backend systems using PHP, Laravel, Node.js, and modern JavaScript technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
