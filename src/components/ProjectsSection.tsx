import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Mini JavaScript Games",
    description:
      "A collection of small interactive games built using JavaScript and React to demonstrate UI logic, state management, and browser-based game mechanics.",
    tech: ["React", "state", "logic", "UX", "Grid"],
    gitHubLink: "https://github.com/jatinpatel1508",
    routeLink: "/games"
  },
  {
    title: "SaaS Projects",
    description:
      "Real-time analytics dashboard with API aggregation and data visualization.",
    tech: ["Laravel", "MySQL", "ChartJS"],
    gitHubLink: "https://github.com/jatinpatel1508",
    routeLink: "/saas-demo/"
  },
  {
    title: "Enterprise REST API System",
    description:
      "High-performance REST API with JWT authentication and optimized database queries.",
    tech: ["Node.js", "PostgreSQL"],
    gitHubLink: "https://github.com/jatinpatel1508",
    routeLink: ""
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent mb-2 text-center">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured{" "}
            <span className="text-gradient">work</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="glass-card p-6 flex flex-col hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    to={project.gitHubLink}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </Link>
                  <Link
                    to={project.routeLink}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
