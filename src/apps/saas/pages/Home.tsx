import "../styles/saas.css";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ArchitectureSection from "../components/ArchitectureSection";
import ApproachSection from "../components/ApproachSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
            <HeroSection />
            <ProjectsSection />
            <ArchitectureSection />
            <ApproachSection />
            <CTASection />
            <Footer />
        </div>
    );
}

export default Home;