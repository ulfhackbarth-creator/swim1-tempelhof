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
import Erlangen from "./pages/standorte/Erlangen";
import Impressum from "./pages/legal/Impressum";
import Datenschutz from "./pages/legal/Datenschutz";
import AGB from "./pages/legal/AGB";
import UeberUns from "./pages/UeberUns";
import FAQ from "./pages/FAQ";
import Kontakt from "./pages/Kontakt";
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
          <Route path="/standorte/schwerin" element={<Schwerin />} />
          <Route path="/standorte/wildau" element={<Wildau />} />
          <Route path="/standorte/bremen" element={<Bremen />} />
          <Route path="/standorte/erlangen" element={<Erlangen />} />
          {/* Legacy routes redirect */}
          <Route path="/schwerin" element={<Schwerin />} />
          <Route path="/wildau" element={<Wildau />} />
          <Route path="/bremen" element={<Bremen />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
