import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";

const GamesRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe/>} />
        </Routes>
    );
}

export default GamesRoutes;