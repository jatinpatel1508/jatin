import { Layers } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-neon-blue" />
          <span className="font-display text-sm font-semibold text-foreground">SaaS Projects</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
