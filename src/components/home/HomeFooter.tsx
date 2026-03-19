import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const HomeFooter = () => (
  <footer className="py-12 bg-[hsl(213,65%,16%)] text-white">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Copyright */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Waves className="w-5 h-5" />
            <span className="font-bold">SWIM1 – Deine Schwimmschule</span>
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} SWIM1 – Alle Rechte vorbehalten
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
          <nav className="flex flex-col gap-2 text-sm text-white/70">
            <a href="#kurse" className="hover:text-white transition-colors">Kurse</a>
            <a href="#standorte" className="hover:text-white transition-colors">Standorte</a>
            <a href="#warum" className="hover:text-white transition-colors">Über uns</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </nav>
        </div>

        {/* Standorte */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Standorte</h4>
          <nav className="flex flex-col gap-2 text-sm text-white/70">
            <Link to="/" onClick={scrollTop} className="hover:text-white transition-colors">Berlin-Tempelhof</Link>
            <Link to="/schwerin" onClick={scrollTop} className="hover:text-white transition-colors">Schwerin</Link>
            <Link to="/wildau" onClick={scrollTop} className="hover:text-white transition-colors">Wildau</Link>
            <Link to="/bremen" onClick={scrollTop} className="hover:text-white transition-colors">Bremen</Link>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default HomeFooter;
