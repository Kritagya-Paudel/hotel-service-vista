
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Utensils, Plane, BookOpen, WashingMachine, Wifi, Package, ShoppingBag, Droplets, Info } from 'lucide-react';

const services = [
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: Utensils,
    content: `Serving Sherpa delicacies to international cuisine, our restaurant offers a diverse culinary experience complemented by fresh local coffee and Lavazza coffee. Guests can relax in a comfortable seating arrangement while enjoying access to a well-stocked library and Wi-Fi. And of course, you’ll be treated to the best view in all of Namche.`
  },
  {
    id: 'heli-rescue',
    title: 'Heli Rescue & Sight Seeing',
    icon: Plane,
    content: `Ticketing and booking reconfirmation while you are in Namche or anywhere else in Sagarmatha National Park. 
In case you need a rescue or need to change or book your air ticket, we will do that. 
We also provide heli sight seeing.`
  },
  {
    id: 'mini-library',
    title: 'Mini Library',
    icon: BookOpen,
    content: `For those guests staying here for an acclimatization day, enjoy reading a large collection of books on mountaineering, Sherpa culture, and Buddhism.`
  },
  {
    id: 'laundry',
    title: 'Laundry',
    icon: WashingMachine,
    content: `Quick laundry service is available for our guests.`
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: Wifi,
    content: `Khumbu Lodge is the first to introduce Internet and Wi-Fi facilities in Namche using V-SAT technology. 
We also have a postal service facility for our hotel guests.`
  },
  {
    id: 'storage',
    title: 'Storage',
    icon: Package,
    content: `You can have your own storage facility while you trek higher up in the mountain.`
  },
  {
    id: 'valley-shop',
    title: 'Valley Shop',
    icon: ShoppingBag,
    content: `Khumbu Valley shop has almost everything needed for trekkers. 
Those who are staying in the lodge will get the best deal.`
  },
  {
    id: 'uv-filter',
    title: 'Ultraviolet Filter',
    icon: Droplets,
    content: `In an effort to minimize pollution in Sagarmatha National Park, KL introduced ultraviolet water with a 0.5 micron filter.`
  },
  {
    id: 'free-info',
    title: 'Free Information',
    icon: Info,
    content: `Free information on trekking and altitude sickness.`
  }
];

export const ServiceAccordion = () => {
  return (
    <div className="space-y-2">
      <Accordion type="single" collapsible className="w-full">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <AccordionItem 
              key={service.id} 
              value={service.id}
              className="border-muted/20 hover:border-muted/40 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline group py-6 [&>svg]:text-white">
                <div className="flex items-center space-x-4">
                  <IconComponent className="h-5 w-5 text-muted group-hover:text-background transition-colors" />
                  <span className="text-background font-semibold tracking-wide text-sm md:text-base group-hover:text-background transition-colors">
                    {service.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted pb-6 pl-9">
                <p className="leading-relaxed">
                  {service.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
