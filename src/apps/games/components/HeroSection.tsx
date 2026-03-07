import { Gamepad2 } from "lucide-react";

const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`floating-particle ${className}`} />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center section-padding overflow-hidden">
      {/* Floating particles */}
      <FloatingShape className="w-32 h-32 top-20 left-[10%] opacity-30" />
      <FloatingShape className="w-20 h-20 top-40 right-[15%] opacity-20" />
      <FloatingShape className="w-24 h-24 bottom-20 left-[20%] opacity-25" />
      <FloatingShape className="w-16 h-16 bottom-32 right-[25%] opacity-15" />
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.4), transparent)' }} />
      <div className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(var(--neon-blue) / 0.4), transparent)' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-glass-border bg-glass/40">
          <Gamepad2 className="w-5 h-5 text-neon-blue" />
          <span className="text-sm font-medium text-muted-foreground">Interactive Game Collection</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Mini </span>
          <span className="gradient-text gradient-underline">JavaScript Games</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A collection of small interactive games built using JavaScript and React to demonstrate UI logic, state management, and browser-based game mechanics.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
