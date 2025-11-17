
import React from 'react';

const HeartOfHimalayasSection = () => {
  return (
    <section className="font-BOONE relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url(/lovable-uploads/gateway-to-everest.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/10"></div>
      
      
      {/* Content */}
      <div className="relative z-10 text-center text-background px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-2 tracking-wide leading-tight">
          In the Heart
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-wide leading-tight">
          of the
        </h2>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-wide leading-tight">
          Himalayas
        </h3>
        <p className="text-lg md:text-xl tracking-[0.2em] font-light italic text-muted">
          Rare beauty and enduring tradition
        </p>
      </div>
    </section>
  );
};

export default HeartOfHimalayasSection;
