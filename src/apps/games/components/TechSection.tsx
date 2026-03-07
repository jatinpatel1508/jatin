import { Layers, MousePointerClick, Palette, Cpu, Keyboard } from "lucide-react";

const concepts = [
  { icon: <Layers className="w-7 h-7" />, title: "React State Management", desc: "Managing complex game states with hooks and reducers." },
  { icon: <MousePointerClick className="w-7 h-7" />, title: "Event Handling", desc: "Click, drag, and touch interactions for gameplay." },
  { icon: <Palette className="w-7 h-7" />, title: "Canvas API", desc: "Drawing graphics and animations directly on canvas." },
  { icon: <Cpu className="w-7 h-7" />, title: "Game Logic Algorithms", desc: "Win conditions, scoring, and AI opponent logic." },
  { icon: <Keyboard className="w-7 h-7" />, title: "Keyboard Input Handling", desc: "Real-time keyboard listeners for game controls." },
];

const TechSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">
          Game Development Concepts Used
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Core technologies and patterns powering these mini games
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((c) => (
            <div key={c.title} className="glass-card-hover p-6 text-center">
              <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 bg-muted/50 text-neon-cyan">
                {c.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
