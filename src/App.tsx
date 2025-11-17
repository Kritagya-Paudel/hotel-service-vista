import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SingleRoom from "./pages/SingleRoom";
import NotFound from "./pages/NotFound";
import About from './pages/About';
import Booking from "./pages/Booking";
import Gallery from './pages/Gallery';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import ScrollToTop from "./components/ScrollToTop";  // ← ADD THIS


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* ← PUT ScrollToTop HERE */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/single-room" element={<SingleRoom />} />
          <Route path="/stay/double-room" element={<SingleRoom />} />
          <Route path="/stay/junior-suite" element={<SingleRoom />} />
          <Route path="/stay/suite" element={<SingleRoom />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
