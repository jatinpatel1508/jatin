import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, Trophy, Gamepad2, Code, X, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import TicTacToeSourceCode from "../components/TicTacToeSourceCode";

type Player = "X" | "O" | null;

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const checkWinner = (board: Player[]): { winner: Player; line: number[] | null } => {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: combo };
    }
  }
  return { winner: null, line: null };
};

const TicTacToe = () => {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
    const [isXTurn, setIsXTurn] = useState(true);
    const [showSource, setShowSource] = useState(false);
    const { winner, line: winningLine } = checkWinner(board);
    const isDraw = !winner && board.every((cell) => cell !== null);

    useEffect(() => {
        // Check if hash contains view-code on mount
        if (window.location.hash === "#view-code") {
            setShowSource(true);
        }
    }, []);

    const handleClick = useCallback(
        (index: number) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";
        setBoard(newBoard);

        const result = checkWinner(newBoard);
        if (result.winner) {
            setScores((s) => ({ ...s, [result.winner!]: s[result.winner! as "X" | "O"] + 1 }));
        } else if (newBoard.every((c) => c !== null)) {
            setScores((s) => ({ ...s, draws: s.draws + 1 }));
        }

        setIsXTurn(!isXTurn);
        },
        [board, isXTurn, winner]
    );

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    };

    const resetAll = () => {
        resetGame();
        setScores({ X: 0, O: 0, draws: 0 });
    };
    
    return (
    <div className="min-h-screen bg-[var(--gradient-bg)] text-foreground font-[var(--font-body)]">
      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/games"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-primary" />
            <h1 className="font-[var(--font-display)] text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Tic Tac Toe
            </h1>
          </div>
          <button
            onClick={resetAll}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Reset All
          </button>
        </div>

        {/* Scoreboard */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Player X", value: scores.X, color: "text-primary" },
            { label: "Draws", value: scores.draws, color: "text-muted-foreground" },
            { label: "Player O", value: scores.O, color: "text-secondary" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className={`text-2xl font-[var(--font-display)] font-bold ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="text-center mb-6">
          {winner ? (
            <div className="flex items-center justify-center gap-2 text-lg font-[var(--font-display)]">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>
                Player <span className={winner === "X" ? "text-primary" : "text-secondary"}>{winner}</span> Wins!
              </span>
            </div>
          ) : isDraw ? (
            <p className="text-lg font-[var(--font-display)] text-muted-foreground">It's a Draw!</p>
          ) : (
            <p className="text-lg font-[var(--font-display)]">
              <span className={isXTurn ? "text-primary" : "text-secondary"}>{isXTurn ? "X" : "O"}</span>'s Turn
            </p>
          )}
        </div>

        {/* Board */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 mb-8 max-w-sm mx-auto">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {board.map((cell, i) => {
              const isWinCell = winningLine?.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  disabled={!!cell || !!winner}
                  className={`
                    aspect-square rounded-xl text-3xl sm:text-4xl font-[var(--font-display)] font-bold
                    transition-all duration-200 
                    ${cell ? "" : "hover:bg-muted/50 cursor-pointer"}
                    ${isWinCell ? "bg-primary/20 shadow-[var(--shadow-neon)] scale-105" : "bg-muted/30"}
                    ${cell === "X" ? "text-primary" : "text-secondary"}
                    disabled:cursor-default
                  `}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        </div>

      {/* New Gane & View Source button */}
        <div className="flex justify-center items-center gap-3">
            <button
              onClick={resetGame}
              className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
            >
              <RotateCcw className="w-4 h-4" />
              New Game
            </button>
            
            <button
              onClick={() => setShowSource(true)}
              className="btn-outline-neon text-sm py-2.5 px-4 gap-2">
                <Code className="w-4 h-4" />
                  Source
              </button>
          
        </div>

        {/* Source Code Modal */}
        <Dialog open={showSource} onOpenChange={setShowSource}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                TicTacToe.tsx Source Code
              </DialogTitle>
            </DialogHeader>
            <div className="bg-muted/50 rounded-lg p-4 overflow-auto max-h-[60vh]">
              <pre className="text-sm text-foreground font-mono whitespace-pre-wrap break-words">
                <TicTacToeSourceCode />
              </pre>
            </div>
            <DialogFooter>
              <Info />
                <p> For more check TicTacToe.tsx in github repository </p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default TicTacToe;