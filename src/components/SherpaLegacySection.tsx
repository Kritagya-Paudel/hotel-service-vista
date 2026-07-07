
import React from 'react';

const SherpaLegacySection = () => {
  return (
    <section className="relative bg-background py-28 md:py-40">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-AvenirLight text-xs uppercase tracking-[0.35em] text-secondary mb-8">
          About Khumbu Lodge
        </p>

        <h2 className="font-Editorial text-4xl md:text-6xl lg:text-7xl text-primary tracking-[-0.02em] leading-[1.08] mb-12">
          More than a lodge,
          <br />
          <em className="italic">a Sherpa legacy</em>
        </h2>

        <div className="font-AvenirLight space-y-6 text-foreground max-w-2xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed">
            Since 1975, Khumbu Lodge has stood as a beacon of warmth and tradition in Namche Bazaar—the vibrant gateway to Everest.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Family-run for over four decades, it has welcomed trekkers, climbers, and adventurers from around the world, offering comfort, culture, and a sense of home at 3,443 meters above sea level. Khumbu Lodge is more than just a place to rest—it's a gateway to adventure and a testament to the enduring spirit of the Himalayas.
          </p>
        </div>

        <div className="mt-16">
          <div className="w-16 h-px bg-secondary mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SherpaLegacySection;
