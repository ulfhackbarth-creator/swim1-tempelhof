import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const HomeFooter = () => (
  <footer className="bg-slate-900 py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <Waves className="w-5 h-5 text-white" />
            <span className="font-bold text-white">SWIM1</span>
          </div>
          <p className="text-sm text-slate-400 mb-2">Sicher schwimmen lernen.</p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} SWIM1</p>
        </div>

        {/* Kurse */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Kurse</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <a href="#kurse" className="hover:text-white transition-colors">Schwimmen lernen</a>
            <a href="#kurse" className="hover:text-white transition-colors">Wassergewöhnung</a>
            <a href="#kurse" className="hover:text-white transition-colors">Aqua-Fitness</a>
            <a href="#kurse" className="hover:text-white transition-colors">Rehasport</a>
          </nav>
        </div>

        {/* Standorte */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Standorte</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <Link to="/" onClick={scrollTop} className="hover:text-white transition-colors">Berlin-Tempelhof</Link>
            <Link to="/schwerin" onClick={scrollTop} className="hover:text-white transition-colors">Schwerin</Link>
            <Link to="/wildau" onClick={scrollTop} className="hover:text-white transition-colors">Wildau</Link>
            <Link to="/bremen" onClick={scrollTop} className="hover:text-white transition-colors">Bremen</Link>
          </nav>
        </div>

        {/* Rechtliches */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Rechtliches</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default HomeFooter;
