import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Kinderschwimmen from "./pages/kurse/Kinderschwimmen";
import Erwachsene from "./pages/kurse/Erwachsene";
import Aquafitness from "./pages/kurse/Aquafitness";
import AquaReha from "./pages/kurse/AquaReha";
import Schwerin from "./pages/Schwerin";
import Wildau from "./pages/Wildau";
import Bremen from "./pages/Bremen";
import NotFound from "./pages/NotFound";
import BerlinTempelhof from "./pages/standorte/BerlinTempelhof";

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
          <Route path="/kurse/erwachsene" element={<Erwachsene />} />
          <Route path="/kurse/aquafitness" element={<Aquafitness />} />
          <Route path="/kurse/reha" element={<AquaReha />} />
          <Route path="/schwerin" element={<Schwerin />} />
          <Route path="/wildau" element={<Wildau />} />
          <Route path="/standorte/berlin-tempelhof" element={<BerlinTempelhof />} />
          <Route path="/bremen" element={<Bremen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
