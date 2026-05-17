import { useEffect } from "react";
import Header from "@/components/about/Header";
import HeroSection from "@/components/HeroSection";
import HeartOfHimalayasSection from "@/components/HeartOfHimalayasSection";
import SherpaLegacySection from "@/components/SherpaLegacySection";
import RoomsSection from "@/components/RoomsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import HotelInformationSection from "@/components/HotelInformationSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="reveal"><HeartOfHimalayasSection /></div>
      <div className="reveal"><SherpaLegacySection /></div>
      <div className="reveal"><TestimonialSection /></div>
      <div className="reveal"><RoomsSection /></div>
      <div className="reveal"><ServicesSection /></div>
      <div className="reveal"><HotelInformationSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
