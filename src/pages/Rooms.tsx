import Header from "@/components/about/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeartOfHimalayasSection from "@/components/HeartOfHimalayasSection";
import SherpaLegacySection from "@/components/SherpaLegacySection";
import RoomsSection from "@/components/RoomsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import HotelInformationSection from "@/components/HotelInformationSection";
import Footer from "@/components/Footer";

const Rooms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RoomsSection />
      <Footer />
    </div>
  );
};

export default Rooms;
