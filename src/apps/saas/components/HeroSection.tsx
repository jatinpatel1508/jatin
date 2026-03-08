import { Code2, Cloud, Cpu, Layers } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background animate-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-glow-indigo/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-glow-purple/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow-blue/5 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating icons */}
        <div className="flex justify-center gap-6 mb-8 fade-up fade-up-delay-1">
          <div className="glass rounded-xl p-3 glow-sm animate-float" style={{ animationDelay: "0s" }}>
            <Code2 className="w-6 h-6 text-glow-indigo" />
          </div>
          <div className="glass rounded-xl p-3 glow-sm animate-float" style={{ animationDelay: "1s" }}>
            <Cloud className="w-6 h-6 text-glow-blue" />
          </div>
          <div className="glass rounded-xl p-3 glow-sm animate-float" style={{ animationDelay: "2s" }}>
            <Cpu className="w-6 h-6 text-glow-purple" />
          </div>
          <div className="glass rounded-xl p-3 glow-sm animate-float" style={{ animationDelay: "3s" }}>
            <Layers className="w-6 h-6 text-glow-indigo" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-up fade-up-delay-2">
          <span className="gradient-text">SaaS & AI Projects</span>
        </h1>

        <p className="text-lg md:text-xl text-secondary-foreground max-w-3xl mx-auto mb-6 leading-relaxed fade-up fade-up-delay-3">
          A collection of SaaS platforms and intelligent systems I have designed and developed using modern backend architecture, AI APIs, and scalable cloud infrastructure.
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 fade-up fade-up-delay-4">
          With over 10 years of backend engineering experience, I specialize in building secure, scalable, and automation-driven platforms.
        </p>

        <div className="flex justify-center gap-4 fade-up fade-up-delay-5">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-glow-indigo to-glow-purple text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-sm"
          >
            View Projects
          </a>
          <a
            href="#architecture"
            className="px-6 py-3 rounded-lg glass glass-hover font-medium text-foreground"
          >
            Architecture
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
