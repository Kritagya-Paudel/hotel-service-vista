import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-center">
  
          {/* Left Column - Contact Information (Left Aligned) */}
          <div className="flex flex-col items-center text-center">
              
              <div className="space-y-2 text-background">
                <h3 className="font-Editorial italic text-2xl mb-4">Contact Us</h3>
                <p className="font-AvenirLight">Khumbu Lodge, Namche Bazaar,</p>
                <p className="font-AvenirLight">Solukhumbu, Nepal</p>

                <div className="pt-4 space-y-2 font-AvenirLight text-sm tracking-[0.15em]">
                  <p className="text-background/70 underline underline-offset-4">INFO@KHUMBULODGE.COM</p>
                  <p className="text-background/70">+977 123-456789</p>
                </div>
              </div>
          </div>





  {/* Center Column - Logo & Description (Centered) */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-6">
        <h1 className="font-Editorial text-4xl md:text-5xl mb-3 tracking-[-0.02em]">
          Khumbu Lodge
        </h1>
        <p className="font-AvenirLight text-xs tracking-[0.35em] text-background/70 mb-4 uppercase">
          Namche Bazaar, Everest Region
        </p>
      </div>

      <p className="font-AvenirLight text-background/75 max-w-md mb-8">
        Established in 1971, Khumbu Lodge has been a warm home to trekkers and climbers 
        on their journey to Everest. Over the decades, we have welcomed adventurers, 
        dignitaries, and travelers from around the world — including former US President Jimmy Carter. 
        Here, hospitality meets the Himalayas.
      </p>
      
      <Button className="bg-secondary hover:bg-background hover:text-primary text-secondary-foreground rounded-none px-10 py-6 text-xs tracking-[0.25em] uppercase transition-colors">
        <a href="/booking">Book Your Stay</a>
      </Button>
  </div>

  {/* Right Column - Navigation & Social (Right Aligned) */}
  <div className="font-AvenirLight flex flex-col items-center text-center">
    <h3 className="font-Editorial italic text-2xl mb-4">Explore</h3>
    <nav className="space-y-3">
      {[
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Gallery', to: '/gallery' },
        { label: 'Rooms', to: '/rooms' },
        { label: 'Services', to: '/services' },
      ].map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className="block text-background/85 hover:text-background hover:italic transition-colors text-lg"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    <div className="flex space-x-4 mt-8 justify-center">
      <a href="#" className="text-background/70 hover:text-background transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="#" className="text-background/70 hover:text-background transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
    </div>
  </div>
</div>


        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">© 2025 Khumbu Lodge</p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted hover:text-background underline transition-colors">Privacy</a>
              <a href="#" className="text-muted hover:text-background underline transition-colors">Imprint</a>
              <a href="#" className="text-muted hover:text-background underline transition-colors">Careers</a>
            </div> */}
            <p className="text-background/60 text-sm">Made By Kritagya Paudel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
