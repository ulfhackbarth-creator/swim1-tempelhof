import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Kinderschwimmen from "./pages/kurse/Kinderschwimmen";
import Wassergewoehnung from "./pages/kurse/Wassergewoehnung";
import Erwachsene from "./pages/kurse/Erwachsene";
import Aquafitness from "./pages/kurse/Aquafitness";
import AquaReha from "./pages/kurse/AquaReha";
import BerlinTempelhof from "./pages/standorte/BerlinTempelhof";
import Schwerin from "./pages/standorte/Schwerin";
import Wildau from "./pages/standorte/Wildau";
import Bremen from "./pages/standorte/Bremen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kurse/kinderschwimmen" element={<Kinderschwimmen />} />
          <Route path="/kurse/wassergewoehnung" element={<Wassergewoehnung />} />
          <Route path="/kurse/erwachsene" element={<Erwachsene />} />
          <Route path="/kurse/aquafitness" element={<Aquafitness />} />
          <Route path="/kurse/reha" element={<AquaReha />} />
          <Route path="/standorte/berlin-tempelhof" element={<BerlinTempelhof />} />
          <Route path="/schwerin" element={<Schwerin />} />
          <Route path="/wildau" element={<Wildau />} />
          <Route path="/bremen" element={<Bremen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
