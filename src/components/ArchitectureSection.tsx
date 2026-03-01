import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, ShieldCheck, Gauge, DatabaseZap } from "lucide-react";

const philosophies = [
  {
    icon: Layers,
    title: "Clean Architecture",
    desc: "Separation of concerns with modular, maintainable code that scales with your team and product.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    desc: "JWT-based auth systems with role-based access control and industry-standard security practices.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Query optimization, caching strategies, and efficient resource management for sub-second response times.",
  },
  {
    icon: DatabaseZap,
    title: "Scalable Database Design",
    desc: "Normalized schemas, indexing strategies, and migration patterns built for millions of records.",
  },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent mb-2 text-center">// philosophy</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How I Build{" "}
            <span className="text-gradient">Scalable Systems</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
