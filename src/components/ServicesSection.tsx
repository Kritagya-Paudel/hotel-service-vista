
import React from 'react';
import { ServiceAccordion } from './ServiceAccordion';
import { PhotoCarousel } from './PhotoCarousel';

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-AvenirLight text-xs uppercase tracking-[0.35em] text-background/60 mb-6">
            Services
          </p>
          <h2 className="font-Editorial text-4xl md:text-6xl tracking-[-0.02em] text-background mb-6">
            What's included
            <br />
            <em className="italic">in your stay?</em>
          </h2>
          <p className="font-AvenirLight text-background/75 max-w-2xl mx-auto text-lg leading-relaxed">
            A stay at Khumbu Lodge offers more than just a room—it’s an immersion into the heart of the Himalayas. Savor authentic Sherpa hospitality, enjoy hearty meals, and unwind with modern comforts, all while surrounded by breathtaking mountain views.
          </p>
        </div>

        {/* Main Content */}
        <div className="font-AvenirLight grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[500px]">
          {/* Services Accordion - Left Side */}
          <div className="order-2 lg:order-1 flex flex-col justify-start">
            <ServiceAccordion />
          </div>

          {/* Photo Carousel - Right Side */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
            <PhotoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
