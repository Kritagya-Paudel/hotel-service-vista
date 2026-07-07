
import React from 'react';

const HeartOfHimalayasSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: 'url(/lovable-uploads/gateway-to-everest.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>


      {/* Content */}
      <div className="relative z-10 text-center text-background px-6 max-w-4xl">
        <h2 className="font-Editorial text-5xl md:text-7xl lg:text-8xl tracking-[-0.02em] leading-[1.05] mb-10">
          In the Heart
          <br />
          of the
          <br />
          <em className="italic">Himalayas</em>
        </h2>
        <p className="font-AvenirLight text-xs md:text-sm uppercase tracking-[0.35em]">
          Rare beauty and enduring tradition
        </p>
      </div>
    </section>
  );
};

export default HeartOfHimalayasSection;
