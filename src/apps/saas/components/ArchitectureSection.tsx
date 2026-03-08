import { Server, Shield, Cpu, Database, Cog } from "lucide-react";

const items = [
  { icon: Server, title: "Scalable API Architecture", desc: "RESTful & event-driven APIs designed for horizontal scaling and high throughput." },
  { icon: Shield, title: "Secure Authentication (JWT)", desc: "Token-based auth with refresh tokens, role-based access, and rate limiting." },
  { icon: Cpu, title: "AI API Integrations", desc: "Seamless integration with Claude, OpenAI, and custom ML pipelines." },
  { icon: Database, title: "Database Optimization", desc: "Query optimization, indexing strategies, and read-replica configurations." },
  { icon: Cog, title: "Background Job Processing", desc: "Queue-based async processing with retry logic and dead-letter handling." },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="relative py-24 px-4">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-glow-blue/5 blur-[120px]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">System Design & Architecture</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Core architectural patterns powering every project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="glass gradient-border rounded-xl p-6 hover:-translate-y-1 glass-hover fade-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-glow-indigo/20 to-glow-purple/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-glow-indigo" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
