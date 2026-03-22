import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const HomeFooter = () => (
  <footer className="bg-slate-900 py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" onClick={scrollTop} className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
            <Waves className="w-5 h-5 text-white" />
            <span className="font-bold text-white">SWIM1</span>
          </Link>
          <p className="text-sm text-slate-400 mb-2">Sicher schwimmen lernen.</p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} SWIM1</p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Kurse</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <Link to="/kurse/wassergewoehnung" onClick={scrollTop} className="hover:text-white transition-colors">Wassergewöhnung</Link>
            <Link to="/kurse/kinderschwimmen" onClick={scrollTop} className="hover:text-white transition-colors">Kinderschwimmen</Link>
            <Link to="/kurse/erwachsene" onClick={scrollTop} className="hover:text-white transition-colors">Erwachsenenschwimmen</Link>
            <Link to="/kurse/aquafitness" onClick={scrollTop} className="hover:text-white transition-colors">Aquafitness</Link>
            <Link to="/kurse/reha" onClick={scrollTop} className="hover:text-white transition-colors">Aqua Reha</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Standorte</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <Link to="/standorte/berlin-tempelhof" onClick={scrollTop} className="hover:text-white transition-colors">Berlin-Tempelhof</Link>
            <Link to="/standorte/schwerin" onClick={scrollTop} className="hover:text-white transition-colors">Schwerin</Link>
            <Link to="/standorte/wildau" onClick={scrollTop} className="hover:text-white transition-colors">Wildau</Link>
            <Link to="/standorte/bremen" onClick={scrollTop} className="hover:text-white transition-colors">Bremen</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Unternehmen</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <Link to="/ueber-uns" onClick={scrollTop} className="hover:text-white transition-colors">Über uns</Link>
            <Link to="/impressum" onClick={scrollTop} className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" onClick={scrollTop} className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/agb" onClick={scrollTop} className="hover:text-white transition-colors">AGB</Link>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default HomeFooter;
