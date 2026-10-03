
import React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/about/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link, useLocation } from 'react-router-dom';
import { usePageTitle } from "@/hooks/usePageTitle";

const allRooms = [
  {
    path: '/stay/basic-standard-room',
    title: 'Basic Standard Room',
    subtitle: 'Simple comfort, warmly kept.',
    heroImage: '/lovable-uploads/rooms/basic-standard-01.jpeg',
    badges: ['1 Bed', '1-2 Guests'],
    overviewHeading: "A quiet, well-kept private room with a comfortable bed and warm wood panelling, kept simple on purpose and looked after with care.",
    overviewBody: [
      "Our standard rooms are the heart of the lodge: warm wood panelling, crisp white linen, and a bed made up fresh each morning. They are the rooms trekkers come back to season after season, kept simple on purpose and looked after with care.",
      "Reading lamps at the bedside, a luggage rack, and a window onto Namche. Ideal for solo walkers and couples spending a night or two acclimatising before heading further up the valley.",
    ],
    carouselImages: [
      { src: '/lovable-uploads/rooms/basic-standard-01.jpeg', label: 'Basic Standard Room', caption: 'Twin Beds and Windows onto Namche' },
    ],
    amenities: ['Fresh linen and warm bedding', 'Wood-panelled interior', 'Bedside reading lamps', 'Luggage rack', 'Daily housekeeping', 'Wi-Fi available', 'Charging points', 'Dining room meals', 'Hot drinks service'],
  },
  {
    path: '/stay/deluxe-double-room',
    title: 'Deluxe Double Room',
    subtitle: 'More space, more light, room for two.',
    heroImage: '/lovable-uploads/rooms/deluxe-double-01.jpeg',
    badges: ['2 Beds', '2-3 Guests', 'Mountain Views'],
    overviewHeading: "Our largest rooms, with two beds, a sitting area by the window, and views out over Namche Bazaar.",
    overviewBody: [
      "The deluxe rooms give you space to spread out: two full beds, corner windows on two walls, and armchairs set around a low table where the afternoon light comes in. Good for friends travelling together, families, or anyone settling in for a few days.",
      "They come with an attached bathroom and running hot water, and the same Sherpa hospitality that has kept guests returning to Namche since 1973.",
    ],
    carouselImages: [
      { src: '/lovable-uploads/rooms/deluxe-double-01.jpeg', label: 'Deluxe Double Room', caption: 'Two Beds, Made Up Fresh' },
      { src: '/lovable-uploads/rooms/deluxe-double-02.jpeg', label: 'Deluxe Double Room', caption: 'Windows Over the Village' },
      { src: '/lovable-uploads/rooms/deluxe-double-03.jpeg', label: 'Deluxe Double Room', caption: 'Sitting Area by the Window' },
      { src: '/lovable-uploads/rooms/deluxe-double-04.jpeg', label: 'Deluxe Double Room', caption: 'Corner Windows on Two Walls' },
      { src: '/lovable-uploads/rooms/deluxe-double-05.jpeg', label: 'Deluxe Double Room', caption: 'Room to Spread Out' },
      { src: '/lovable-uploads/rooms/deluxe-double-06.jpeg', label: 'Deluxe Double Room', caption: 'Warm Wooden Interior' },
    ],
    amenities: ['Attached bathroom with running hot water', 'Two full beds', 'Sitting area with armchairs', 'Windows on two walls', 'Views over Namche Bazaar', 'Fresh linen and warm bedding', 'Luggage rack', 'Daily housekeeping', 'Wi-Fi available', 'Charging points', 'Dining room meals', 'Hot drinks service'],
  },
];

const SingleRoom = () => {
  const { pathname } = useLocation();
  const room = allRooms.find(r => r.path === pathname) ?? allRooms[0];
  const otherRooms = allRooms.filter(r => r.path !== pathname);
  usePageTitle(`${room.title} | Khumbu Lodge`, room.overviewHeading);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen-safe flex overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${room.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between text-white px-4 pt-32 pb-12 md:pt-36 md:pb-16">
          {/* Spacer so title sits in the upper-middle */}
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-8xl tracking-wide font-BOONE text-center">
              {room.title}
            </h1>
          </div>

          {/* Bottom info */}
          <div className="w-full flex flex-col items-center gap-4">
            <p className="text-lg sm:text-2xl md:text-4xl font-light italic font-AvenirLight text-center px-4">
              {room.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-[3px] font-AvenirLight">
              {room.badges.map((badge, i) => (
                <div key={i} className="border text-white px-3 py-1 border-dashed border-white text-[13px] sm:text-sm md:text-base">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 px-5 sm:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">OVERVIEW</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16">
              <div>
                <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl text-primary font-BOONE leading-tight mb-6 md:mb-8">
                  {room.overviewHeading}
                </h2>
                <Button asChild className="bg-ocean-blue hover:bg-steel-blue text-white rounded-none px-3 md:px-6 text-sm">
                  <Link to="/booking">Book this Room</Link>
                </Button>
              </div>
              <div className="space-y-6 lg:text-base font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
                {room.overviewBody.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
          </div>
        </div>

        {/* Room Carousel */}
        <div className="relative w-full">
          {/* One photo has nothing to page through, and inside a peeking
              carousel it sat off to the left. Show it centred instead. */}
          {room.carouselImages.length === 1 ? (
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={room.carouselImages[0].src}
                  alt={room.carouselImages[0].label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl md:text-3xl font-BOONE">{room.carouselImages[0].label}</h3>
                  <p className="text-white/90 text-sm mt-1 font-AvenirBlack">{room.carouselImages[0].caption}</p>
                </div>
              </div>
            </div>
          ) : (
          <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
            <CarouselContent className="-ml-4">
              {room.carouselImages.map((img, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%] md:basis-[90%]">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl md:text-3xl font-BOONE">{img.label}</h3>
                      <p className="text-white/90 text-sm mt-1 font-AvenirBlack">{img.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Arrows sit under the strip: over the slides they landed on top of
                the captions, and on a phone there was nowhere to put a thumb. */}
            <div className="flex justify-end gap-2 px-5 sm:px-8 lg:px-16 mt-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-background/90 hover:bg-background border-primary text-primary" />
              <CarouselNext className="static translate-y-0 h-10 w-10 bg-background/90 hover:bg-background border-primary text-primary" />
            </div>
          </Carousel>
          )}
        </div>
      </section>

      <br /><br />

      {/* Features & Amenities */}
      <section className="relative min-h-screen py-20 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/lovable-uploads/rooms/room-amenities.jpeg')` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-AvenirLight text-white text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">{room.title.toUpperCase()}</p>
              <h3 className="font-Editorial text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
                Features<br />
                <span className="italic font-light">&amp; Amenities</span>
              </h3>
            </div>
            <div className="bg-white font-AvenirLight border-1 border-ocean-blue p-1">
              <div className="bg-background border-[5px] border-double border-ocean-blue p-5 sm:p-8 shadow-2xl">
                <h4 className="text-center text-foreground text-sm font-medium mb-8 uppercase tracking-wider">
                  INCLUDED IN YOUR ROOM
                </h4>
                <ul className="space-y-2 sm:space-y-4">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="text-foreground text-[15px] sm:text-base py-2 border-b border-muted/30 last:border-b-0">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms Section */}
      <section className="block z-[2] relative pb-16 md:pb-40 px-4 md:px-6 h-full">
        <div className="justify-start items-center w-full flex pt-24 pb-7 flex-col">
          <div className="justify-start items-center flex blur-none opacity-100 flex-col">
            <h2 className="font-normal text-[2.5rem] leading-tight tracking-[-1px] sm:text-[3.5rem] md:text-[5rem] lg:text-[88px] lg:leading-[88px] lg:tracking-[-3.52px] text-ocean-blue text-center my-0 font-BOONE">
              Other Rooms
            </h2>
            <div className="gap-x-7 gap-y-7 justify-start items-center w-full flex mt-7 mb-10 md:mb-24 flex-col lg:w-4/5">
              <p className="text-forest-green text-[17px] sm:text-[19.2px] leading-[1.45] font-normal tracking-[-0.192px] text-center my-0 sm:tracking-[-0.025rem] font-AvenirLight">
                Choose from 25 rooms with attached bathrooms and running hot water for extra comfort, 20 budget-friendly private rooms, or 9 fully furnished apartments ideal for long-term stays, volunteers, and trekkers.
              </p>
            </div>
          </div>
        </div>

        {/* With a single other room there is nothing to scroll, so show it centred
            rather than as a one-slide carousel stuck to the left edge. */}
        {otherRooms.length === 1 ? (
          <div className="w-full max-w-5xl mx-auto">
            <Link to={otherRooms[0].path} className="block group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={otherRooms[0].heroImage}
                  alt={otherRooms[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl md:text-3xl font-BOONE">{otherRooms[0].title}</h3>
                  <p className="text-white/90 text-sm mt-1 font-AvenirBlack">{otherRooms[0].subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
        <div className="relative w-full">
          <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
            <CarouselContent className="-ml-4">
              {otherRooms.map((r) => (
                <CarouselItem key={r.path} className="pl-4 basis-[85%] md:basis-[90%]">
                  <Link to={r.path} className="block">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <img src={r.heroImage} alt={r.title} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-2xl md:text-3xl font-BOONE">{r.title}</h3>
                        <p className="text-white/90 text-sm mt-1 font-AvenirBlack">{r.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Arrows sit under the strip: over the slides they landed on top of
                the captions, and on a phone there was nowhere to put a thumb. */}
            <div className="flex justify-end gap-2 px-5 sm:px-8 lg:px-16 mt-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-background/90 hover:bg-background border-primary text-primary" />
              <CarouselNext className="static translate-y-0 h-10 w-10 bg-background/90 hover:bg-background border-primary text-primary" />
            </div>
          </Carousel>
        </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default SingleRoom;
