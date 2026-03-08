import { ExternalLink, GitBranch } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  features: string[];
  techStack: string[];
  index: number;
}

const ProjectCard = ({ title, description, problem, features, techStack, index }: ProjectCardProps) => {
  return (
    <div
      className={`group glass gradient-border rounded-2xl p-8 hover:-translate-y-2 glass-hover fade-up`}
      style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold gradient-text">{title}</h3>
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-glow-indigo/20 to-glow-purple/20 flex items-center justify-center group-hover:glow-sm transition-all">
          <GitBranch className="w-5 h-5 text-glow-indigo" />
        </div>
      </div>

      <p className="text-secondary-foreground mb-4 leading-relaxed">{description}</p>

      {/* Problem */}
      <div className="mb-5 p-4 rounded-lg bg-muted/50 border border-border/30">
        <p className="text-sm font-semibold text-glow-indigo mb-1">Problem Solved</p>
        <p className="text-sm text-muted-foreground">{problem}</p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground mb-3">Key Features</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-glow-indigo shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-muted text-muted-foreground border border-border/50"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-glow-indigo to-glow-purple text-primary-foreground hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" />
          View Details
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg glass glass-hover text-foreground">
          <GitBranch className="w-4 h-4" />
          Architecture
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
