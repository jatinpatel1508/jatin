import { Play, Code } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  routeName: string;
}

const GameCard = ({ icon, title, description, tags, routeName }: GameCardProps) => {
  return (
    <div className="glass-card-hover group p-6 flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-muted/50 text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
        {icon}
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full border border-glass-border bg-muted/30 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Link to={`/games/`+routeName} className="btn-neon flex-1 text-sm py-2.5 gap-2">
          <Play className="w-4 h-4" />
          Play Game
        </Link>
        <Link to={`/games/`+routeName+`#view-code`} className="btn-outline-neon text-sm py-2.5 px-4 gap-2">
          <Code className="w-4 h-4" />
          Source
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
