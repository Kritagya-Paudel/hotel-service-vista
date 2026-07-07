
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const hotelInfo = [
  {
    id: 'cancellation',
    number: '01',
    title: 'CANCELLATION POLICY',
    content: 'Free cancellation up to 48 hours before arrival. Cancellations made within 48 hours of arrival will be charged one night\'s accommodation. No-show reservations will be charged the full stay amount.'
  },
  {
    id: 'combinations',
    number: '02', 
    title: 'ROOM COMBINATIONS',
    content: 'Our rooms can be combined to create larger accommodations for families or groups. Connecting rooms are available upon request and subject to availability. Please contact us directly to arrange special room configurations.'
  },
  {
    id: 'arrival',
    number: '03',
    title: 'ARRIVAL INFORMATION',
    content: 'Check-in begins at 3:00 PM. Early check-in may be available upon request. We recommend arriving before 6:00 PM to enjoy our welcome reception. Airport transfers can be arranged through our concierge service.'
  },
  {
    id: 'checkin',
    number: '04',
    title: 'CHECK-IN & CHECK OUT',
    content: 'Standard check-in: 3:00 PM | Standard check-out: 11:00 AM. Late check-out is available until 2:00 PM for an additional fee. Express check-out service is available through your in-room tablet or mobile app.'
  },
  {
    id: 'rates',
    number: '05',
    title: 'RATES',
    content: 'All rates include breakfast, access to spa facilities, and Wi-Fi. Seasonal rates apply during peak periods. Children under 12 stay free when sharing with parents. Group discounts available for bookings of 5+ rooms.'
  }
];

const HotelInformationSection = () => {
  return (
    <section className="py-10 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-AvenirLight text-secondary text-xs uppercase tracking-[0.35em] mb-6">
            Additional Info
          </p>
          <h2 className="font-Editorial text-4xl md:text-6xl tracking-[-0.02em] text-primary mb-6">
            Hotel &amp; Room <em className="italic">Information</em>
          </h2>
          <p className="font-AvenirLight text-foreground/80 text-lg max-w-2xl mx-auto">
            Information for your stay at Khumbu Lodge
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-1">
          <Accordion type="single" collapsible className="w-full">
            {hotelInfo.map((info) => (
              <AccordionItem 
                key={info.id} 
                value={info.id}
                className="border-b border-border hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline group py-8 [&[data-state=open]>div>svg]:rotate-45">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-6">
                      <span className="font-Editorial italic text-secondary text-lg min-w-[2rem]">
                        {info.number}
                      </span>
                      <span className="font-AvenirLight text-foreground font-medium text-base md:text-lg uppercase tracking-wide">
                        {info.title}
                      </span>
                    </div>
                    {/* <Plus className="h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4" /> */}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-8 pl-12">
                  <p className="font-AvenirLight leading-relaxed">
                    {info.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HotelInformationSection;
