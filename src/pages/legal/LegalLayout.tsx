import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <GlobalHeader />

      <main className="flex-1 container px-4 py-12 md:py-20 max-w-3xl mx-auto mt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">{title}</h1>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-[#1B4F8A] hover:prose-a:text-[#0F2D52]">
          {children}
        </div>
      </main>

      <HomeFooter />
    </div>
  );
};

export default LegalLayout;
