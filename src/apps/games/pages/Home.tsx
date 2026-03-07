import "../styles/game.css";
import HeroSection from "../components/HeroSection";
import GamesGrid from "../components/GamesGrid";
import FeaturedGame from "../components/FeaturedGame";
import TechSection from "../components/TechSection";
import CTASection from "../components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
    return(
        <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
            <HeroSection />
            <GamesGrid />
            <FeaturedGame />
            <TechSection />
            <CTASection />
            <Footer />
        </div>
    );
}

export default Home;