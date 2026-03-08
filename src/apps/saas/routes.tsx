import { Routes, Route } from "react-router-dom";
import  Home from "./pages/Home";

const SaasRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default SaasRoutes;