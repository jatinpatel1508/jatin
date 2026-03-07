import { Play, Code, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedGame = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Star className="w-5 h-5 text-neon-purple" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">Featured Game</h2>
          <Star className="w-5 h-5 text-neon-purple" />
        </div>

        <div className="glass-card-hover p-1">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Preview area */}
            <div className="relative rounded-xl overflow-hidden min-h-[280px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(var(--neon-blue) / 0.15), hsl(var(--neon-purple) / 0.15))' }}>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-glass-border bg-muted/30 flex items-center justify-center text-2xl font-display font-bold text-neon-blue/70"
                  >
                    {i % 3 === 0 ? "X" : i % 3 === 1 ? "O" : ""}
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-neon-purple mb-3">⭐ Most Popular</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Tic Tac Toe</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The classic two-player strategy game, reimagined with React. Features smooth animations, score tracking, and an intelligent game state system. Perfect for demonstrating React's component-driven architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "TypeScript", "State Management", "CSS Animations"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link to="/games/tic-tac-toe" className="btn-neon gap-2">
                  <Play className="w-4 h-4" />
                  Play Now
                </Link>
                <Link to="/games/tic-tac-toe#view-code" className="btn-outline-neon gap-2">
                  <Code className="w-4 h-4" />
                  View Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
