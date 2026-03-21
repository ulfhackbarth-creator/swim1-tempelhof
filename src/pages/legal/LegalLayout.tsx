import { Link } from "react-router-dom";
import { Waves, ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Waves className="w-5 h-5" />
            SWIM1
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container px-4 py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">{title}</h1>
        <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-primary text-primary-foreground">
        <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <span className="text-primary-foreground/70">© {new Date().getFullYear()} SWIM1 Service GmbH</span>
          <nav className="flex items-center gap-4 text-primary-foreground/80">
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-primary-foreground transition-colors">AGB</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
