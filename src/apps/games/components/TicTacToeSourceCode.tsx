const TicTacToeSourceCode = () => {
    return(
        `import { useState, useCallback, useEffect } from "react";
        import { Link } from "react-router-dom";
        import { ArrowLeft, RotateCcw, Trophy, Gamepad2, Code, X } from "lucide-react";
        import {
          Dialog,
          DialogContent,
          DialogHeader,
          DialogTitle,
          DialogClose,
        } from "@/components/ui/dialog";
        
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
          
           
`
    )
}

export default TicTacToeSourceCode;