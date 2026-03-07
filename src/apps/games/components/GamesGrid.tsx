import { Grid3X3, Bug, Brain, Hand, HelpCircle, LayoutGrid } from "lucide-react";
import GameCard from "./GameCard";

const games = [
  {
    icon: <Grid3X3 className="w-7 h-7" />,
    title: "Tic Tac Toe",
    description: "Classic two-player game built with React state management.",
    tags: ["React", "State", "Logic"],
    routeName: "tic-tac-toe"
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Memory Card Game",
    description: "Flip cards to match pairs and test your memory.",
    tags: ["React", "CSS", "Logic"],
    routeName: "memory-game"
  },
  {
    icon: <LayoutGrid className="w-7 h-7" />,
    title: "2048 Puzzle",
    description: "Sliding tile puzzle game with scoring system.",
    tags: ["Grid", "Keyboard", "Algorithm"],
    routeName: "2048-puzzle"
  },
];

const GamesGrid = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Game Collection</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Explore interactive games showcasing different programming concepts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesGrid;
