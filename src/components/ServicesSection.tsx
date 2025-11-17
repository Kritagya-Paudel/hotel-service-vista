
import React from 'react';
import { ServiceAccordion } from './ServiceAccordion';
import { PhotoCarousel } from './PhotoCarousel';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-BOONE text-4xl md:text-6xl font-serif text-background mb-4 italic">
            What's Included
          </h2>
          <h3 className="font-BOONE text-2xl md:text-4xl font-serif text-background italic mb-6">
            In Your Stay?
          </h3>
          <p className="font-AvenirLight text-muted max-w-2xl mx-auto text-lg leading-relaxed">
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
