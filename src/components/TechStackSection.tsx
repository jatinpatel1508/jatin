import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Backend",
    items: ["PHP", "Laravel", "CodeIgniter", "CakePHP", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Angular", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "DevOps & Tools",
    items: ["AWS EC2", "Apache2", "Nginx", "Git", "PM2"],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent mb-2 text-center">// tech stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technologies I{" "}
            <span className="text-gradient">work with</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * ci }}
                className="glass-card p-6"
              >
                <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                  {cat.title}
                </h3>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border/50 transition-all group cursor-default"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
