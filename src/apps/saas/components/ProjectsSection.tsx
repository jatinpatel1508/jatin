import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Question Paper Solver",
    description: "An AI-powered educational tool that analyzes and solves academic question papers using Claude AI API.",
    problem: "Students often struggle to find accurate explanations and solutions for complex questions.",
    features: [
      "Upload question paper images or text",
      "AI-based question analysis",
      "Automatic step-by-step answers",
      "Claude API integration",
      "Smart question classification",
    ],
    techStack: ["Node.js", "Claude API", "React", "REST APIs"],
  },
  {
    title: "AMC Service Management Platform",
    description: "A SaaS platform for managing Annual Maintenance Contracts for service-based businesses.",
    problem: "Companies struggle to track service contracts, maintenance schedules, and technician visits.",
    features: [
      "Contract lifecycle management",
      "Service scheduling",
      "Technician assignment",
      "Customer dashboard",
      "Notification system",
    ],
    techStack: ["Laravel", "MySQL", "React", "REST APIs"],
  },
  {
    title: "AI Lead Generation System",
    description: "An intelligent lead automation system that fetches emails dynamically using IMAP and analyzes them using AI to identify potential leads.",
    problem: "Businesses receive hundreds of emails but struggle to identify real sales opportunities.",
    features: [
      "IMAP email fetching",
      "AI-based email analysis",
      "Automatic lead extraction",
      "Lead scoring system",
      "CRM-style dashboard",
    ],
    techStack: ["Node.js", "IMAP", "AI APIs", "PostgreSQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-glow-purple/5 blur-[150px]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade SaaS platforms and AI-driven systems built with scalable architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
