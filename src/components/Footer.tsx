import { Waves } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5" />
            <span className="font-semibold">SWIM1 - Deine Schwimmschule</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-primary-foreground/80">
            <a href="/impressum" onClick={(e) => handleNavClick(e, "/impressum")} className="hover:text-primary-foreground transition-colors">Impressum</a>
            <a href="/datenschutz" onClick={(e) => handleNavClick(e, "/datenschutz")} className="hover:text-primary-foreground transition-colors">Datenschutz</a>
            <a href="/agb" onClick={(e) => handleNavClick(e, "/agb")} className="hover:text-primary-foreground transition-colors">AGB</a>
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