import { ClipboardList, PenTool, Database, Code2, Layout, CloudUpload } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "Deep-dive into business needs, user flows, and edge cases." },
  { icon: PenTool, title: "System Architecture Design", desc: "High-level design with scalability, security, and performance in mind." },
  { icon: Database, title: "Database Modeling", desc: "Normalized schemas, migration strategies, and indexing plans." },
  { icon: Code2, title: "API Development", desc: "Clean, versioned APIs with comprehensive documentation and tests." },
  { icon: Layout, title: "Frontend Integration", desc: "Responsive UI connected via typed API clients and state management." },
  { icon: CloudUpload, title: "Cloud Deployment", desc: "CI/CD pipelines, containerization, and monitoring setup." },
];

const ApproachSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-glow-indigo/5 blur-[120px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">How I Build SaaS Products</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A proven methodology from ideation to production.</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-glow-indigo/40 via-glow-purple/40 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex items-start gap-6 fade-up ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-glow-indigo to-glow-purple flex items-center justify-center glow-sm">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="glass gradient-border rounded-xl p-5 flex-1 md:w-1/2 hover:-translate-y-1 glass-hover">
                  <span className="text-xs font-mono text-glow-indigo mb-1 block">Step {i + 1}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
