
import React from 'react';

const SherpaLegacySection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted saturate-100 contrast-110" 
             style={{ backgroundColor: '#b6c5c5' }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1 className="font-BOONE text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-primary tracking-wide leading-tight">
          More Than a Lodge,
        </h1>
        <h2 className="font-BOONE text-4xl md:text-5xl lg:text-6xl font-serif italic mb-12 text-primary tracking-wide leading-tight">
          a Sherpa Legacy
        </h2>
        
        <div className="font-AvenirLight space-y-6 text-foreground max-w-4xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed">
            Since 1975, Khumbu Lodge has stood as a beacon of warmth and tradition in Namche Bazaar—the vibrant gateway to Everest.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed">
            Family-run for over four decades, it has welcomed trekkers, climbers, and adventurers from around the world, offering comfort, culture, and a sense of home at 3,443 meters above sea level. Khumbu Lodge is more than just a place to rest—it's a gateway to adventure and a testament to the enduring spirit of the Himalayas.
          </p>
        </div>
        
        <div className="mt-12">
          <div className="w-24 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-primary tracking-[0.2em] text-sm">
            About Khumbu Lodge
          </p>
        </div>
      </div>
    </section>
  );
};

export default SherpaLegacySection;
