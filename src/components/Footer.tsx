import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5" />
            <span className="font-semibold">SWIM1 - Deine Schwimmschule</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-primary-foreground/80">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Berlin-Tempelhof</Link>
            <Link to="/schwerin" className="hover:text-primary-foreground transition-colors">Schwerin</Link>
            <Link to="/wildau" className="hover:text-primary-foreground transition-colors">Wildau</Link>
          </nav>
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;