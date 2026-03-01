import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Cloud, Zap } from "lucide-react";

const highlights = [
  { icon: Server, title: "Backend Architecture", desc: "Laravel, CodeIgniter, Node.js" },
  { icon: Database, title: "Database Design", desc: "MySQL, PostgreSQL optimization" },
  { icon: Cloud, title: "Cloud Deployment", desc: "AWS EC2, Nginx, PM2" },
  { icon: Zap, title: "API Engineering", desc: "REST APIs, JWT, performance" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Text */}
          <div>
            <p className="text-sm font-mono text-accent mb-2">// about me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building the{" "}
              <span className="text-gradient">backbone</span> of web applications
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in backend development, I specialize in
                crafting robust, scalable systems that power modern web applications. My
                expertise spans PHP ecosystems including Laravel and CodeIgniter, as well as
                Node.js for high-performance applications.
              </p>
              <p>
                I bring deep knowledge in REST API design, database architecture with MySQL
                and PostgreSQL, and cloud deployment on AWS EC2. I'm passionate about clean
                architecture, performance optimization, and delivering reliable solutions.
              </p>
              <p>
                My approach combines strong technical skills with effective client communication
                and the ability to manage multiple projects simultaneously without compromising
                quality.
              </p>
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card p-5 hover:border-primary/30 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
