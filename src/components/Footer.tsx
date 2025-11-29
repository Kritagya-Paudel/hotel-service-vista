import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-center">
  
          {/* Left Column - Contact Information (Left Aligned) */}
          <div className="flex flex-col items-center text-center">
              
              <div className="space-y-2 text-background">
                <h3 className="font-AvenirBlack text-xl font-serif mb-4">Contact Us</h3>
                <p className="font-medium">Khumbu Lodge, Namche Bazaar,</p>
                <p className="font-medium">Solukhumbu, Nepal</p>

                <div className="pt-4 space-y-2">
                  <p className="text-muted underline">INFO@KHUMBULODGE.COM</p>
                  <p className="text-muted">+977 123-456789</p>
                </div>
              </div>
          </div>





  {/* Center Column - Logo & Description (Centered) */}
    <div className="font-AvenirBlack flex flex-col items-center text-center">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-serif mb-2 tracking-wider">
          KHUMBU LODGE
        </h1>
        <p className="text-sm tracking-[0.2em] text-muted mb-4">
          NAMCHE BAZAAR, EVEREST REGION
        </p>
      </div>

      <p className="font-AvenirLight text-muted max-w-md mb-6">
        Established in 1971, Khumbu Lodge has been a warm home to trekkers and climbers 
        on their journey to Everest. Over the decades, we have welcomed adventurers, 
        dignitaries, and travelers from around the world — including former US President Jimmy Carter. 
        Here, hospitality meets the Himalayas.
      </p>
      
      <Button className="bg-accent hover:bg-muted text-primary px-8 py-3 text-sm tracking-wide uppercase">
        <a href="/booking">Book Your Stay</a>
      </Button>
  </div>

  {/* Right Column - Navigation & Social (Right Aligned) */}
  <div className="font-AvenirLight flex flex-col items-center text-center">
    <h3 className="text-xl font-serif mb-4">Explore</h3>
    <nav className="space-y-3">
      {['Home', 'About', 'Gallery', 'Rooms', 'Services'].map((link) => (
        <a 
          key={link} 
          href="#" 
          className="block text-background hover:text-muted transition-colors text-lg font-medium"
        >
          {link}
        </a>
      ))}
    </nav>

    <div className="flex space-x-4 mt-8 justify-center">
      <a href="#" className="text-muted hover:text-background transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="#" className="text-muted hover:text-background transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
    </div>
  </div>
</div>


        {/* Bottom Footer */}
        <div className="border-t border-muted/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted text-sm">© 2025 Khumbu Lodge</p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted hover:text-background underline transition-colors">Privacy</a>
              <a href="#" className="text-muted hover:text-background underline transition-colors">Imprint</a>
              <a href="#" className="text-muted hover:text-background underline transition-colors">Careers</a>
            </div> */}
            <p className="text-muted text-sm">Made By Kritagya Paudel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
