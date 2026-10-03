import Header from "@/components/about/Header";
import { usePageTitle } from "@/hooks/usePageTitle";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  usePageTitle("Services | Khumbu Lodge", "What's included in your stay at Khumbu Lodge, Namche Bazaar.");
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
