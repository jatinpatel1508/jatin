import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card p-10 sm:p-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Want to see more interactive projects?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Check out the full portfolio or get in touch to collaborate on exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-neon gap-2">
              <ArrowRight className="w-4 h-4" />
              View Main Projects
            </Link>
            <button className="btn-outline-neon gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
