import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
        <title>{title} | SWIM1</title>
        <link rel="canonical" href={`https://swim1.de${pathname}`} />
      </Helmet>
      <GlobalHeader />

      <main className="flex-1 px-4 py-12 md:py-20 mt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h1>
          <div className="h-1 w-16 bg-[#1B4F8A] rounded-full mb-10" />

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="prose prose-slate max-w-none
              prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:font-bold
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:border-b prose-h3:border-slate-100 prose-h3:pb-3
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-li:text-slate-600 prose-li:leading-relaxed
              prose-strong:text-slate-800
              prose-a:text-[#1B4F8A] prose-a:font-semibold hover:prose-a:text-[#0F2D52] prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ul:pl-0 prose-li:pl-0
            ">
              {children}
            </div>
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
};

export default LegalLayout;
