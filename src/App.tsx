import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage"; 
import ContactPage from "./pages/ContactPage";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import IotIntegrationPage from "./pages/IotIntegrationPage";
import SmartHomePage from "./pages/SmartHomePage";
import AutomaticGatePage from "./pages/AutomaticGatePage";
import IotWaterPage from "./pages/IotWaterPage";
import WoodWorkPage from "./pages/WoodWorkPage";
import WeldingWorksPage from "./pages/WeldingWorksPage";
import FurnishedWorkPage from "./pages/FurnishedWorkPage";
import CraftWorksPage from "./pages/CraftWorksPage";
import CustomerGalleryPage from "./pages/CustomerGalleryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/iot-integration" element={<IotIntegrationPage />} />
          <Route path="/services/smart-home" element={<SmartHomePage />} />
          <Route path="/services/automatic-gate" element={<AutomaticGatePage />} />
          <Route path="/services/iot-water" element={<IotWaterPage />} />
          <Route path="/works/wood-work" element={<WoodWorkPage />} />
          <Route path="/works/welding-works" element={<WeldingWorksPage />} />
          <Route path="/works/furnished-work" element={<FurnishedWorkPage />} />
          <Route path="/works/craft-works" element={<CraftWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/customer-gallery" element={<CustomerGalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
