
import React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/about/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link, useLocation } from 'react-router-dom';

const allRooms = [
  {
    path: '/single-room',
    title: 'Single Room',
    subtitle: 'A space to call your own.',
    heroImage: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d495dda78da5679a8b9_67ba9babd4f2f9bed4b2474f_single-room-hero-shot.jpeg',
    badges: ['Single Bed', '1-2 Guests', '20m²', '25m²'],
    overviewHeading: "Ideal for solo travelers or shorter visits, our single rooms are quietly appointed for comfort, warmth, and a good night's rest after a day on the mountain.",
    overviewBody: [
      "Our smallest rooms are shaped by the same attention to comfort and calm as our grandest suites. Designed for solo stays—whether you're here for early mornings on the slopes or simply in need of a room of your own—each space offers a well-proportioned retreat: handsome woods, crisp linens, and the gentle hush that follows a day on skis.",
      "Furnished with a sportsman's sensibility and a sense of order, the room includes a comfortable single bed, a writing desk or reading chair, and a modern bath with either a walk-in shower or tub. Ranging from 20m² to 25m², these rooms are especially well-suited to seasoned skiers traveling alone or older children or teenagers in need of their own space.",
    ],
    carouselImages: [
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed76f5e733ce8316bd12ef_67baba9384b37ae060888bbe_single-room-shot1.jpeg', label: 'Single Room', caption: 'Comfortable Bed' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed7735c51b2eca2c56d71c_67babaa3cccac9623961e883_single-room-shot3.jpeg', label: 'Single Room', caption: 'Stunning Mountain Views' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed76f52f5f20f028b3f6d1_67cfb4713bdd5083ba0e7482_Zi_114_43.jpeg', label: 'Single Room', caption: 'Cosy & Warm' },
    ],
    amenities: ['Full board', 'Complimentary Wi-Fi', 'Flatscreen TV & cable channels', 'Writing desk & workspace', '24 hour room service', 'Robes & slippers', 'Mini bar', 'Safe for valuables', 'Hairdryer & luxury bath products', 'Shower', 'Telephone with concierge access', 'Single Bed'],
  },
  {
    path: '/stay/double-room',
    title: 'Double Room',
    subtitle: 'Spacious, serene, made for two.',
    heroImage: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d498111e949aab39f64_67cfb4c113e8d1dbe5ed8127_Zi_227_A.jpeg',
    badges: ['Double Bed', '2 Guests', '20m²', '25m²'],
    overviewHeading: "Our spacious double rooms offer comfort and style, perfect for couples or solo travelers seeking extra space and mountain serenity.",
    overviewBody: [
      "Thoughtfully designed for two, our double rooms balance warmth and elegance. Wake to Himalayan views, settle into a plush double bed, and enjoy every amenity you need for a restful stay in Namche Bazaar.",
      "Ranging from 20m² to 25m², the double rooms are furnished with quality linens, a modern bathroom, and the kind of quiet comfort that makes high-altitude life feel effortless.",
    ],
    carouselImages: [
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d498111e949aab39f64_67cfb4c113e8d1dbe5ed8127_Zi_227_A.jpeg', label: 'Double Room', caption: 'Spacious Double Bed' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed76f5e733ce8316bd12ef_67baba9384b37ae060888bbe_single-room-shot1.jpeg', label: 'Double Room', caption: 'Mountain Views' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed76f52f5f20f028b3f6d1_67cfb4713bdd5083ba0e7482_Zi_114_43.jpeg', label: 'Double Room', caption: 'Warm Interior' },
    ],
    amenities: ['Full board', 'Complimentary Wi-Fi', 'Flatscreen TV & cable channels', 'Writing desk & workspace', '24 hour room service', 'Robes & slippers', 'Mini bar', 'Safe for valuables', 'Hairdryer & luxury bath products', 'Bathtub & shower', 'Telephone with concierge access', 'Double Bed'],
  },
  {
    path: '/stay/junior-suite',
    title: 'Junior Suite',
    subtitle: 'Tailored for those who stay awhile.',
    heroImage: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d4954913f47bdbc1746_67bad5d3a3ae7caf3534b1ae_Zi_208_A%2520(1).jpeg',
    badges: ['Double Bed', '2 Guests', '40m²', '65m²'],
    overviewHeading: "Elegantly designed, our Junior Suites offer a refined retreat with added space, sitting area, and the comfort of a home away from home.",
    overviewBody: [
      "The Junior Suite is perfect for those seeking a little more room to breathe. With a generous layout spanning 40m² to 65m², it includes a separate sitting area, a premium double bed, and sweeping views of the Namche valley.",
      "Every detail has been considered — from the hand-selected furnishings to the deep-soak bathtub. Whether you're here for acclimatization or simply lingering in the mountains, the Junior Suite is your private sanctuary.",
    ],
    carouselImages: [
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d4954913f47bdbc1746_67bad5d3a3ae7caf3534b1ae_Zi_208_A%2520(1).jpeg', label: 'Junior Suite', caption: 'Elegant Living Space' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed76f5e733ce8316bd12ef_67baba9384b37ae060888bbe_single-room-shot1.jpeg', label: 'Junior Suite', caption: 'Premium Comfort' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d498111e949aab39f64_67cfb4c113e8d1dbe5ed8127_Zi_227_A.jpeg', label: 'Junior Suite', caption: 'Serene Retreat' },
    ],
    amenities: ['Full board', 'Complimentary Wi-Fi', 'Flatscreen TV & cable channels', 'Sitting area', '24 hour room service', 'Robes & slippers', 'Mini bar', 'Safe for valuables', 'Hairdryer & luxury bath products', 'Bathtub & shower combination', 'Telephone with concierge access', 'Double Bed'],
  },
  {
    path: '/stay/suite',
    title: 'Suite',
    subtitle: 'A private world above the snowline.',
    heroImage: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d49ff89f562bf58917a_67cfbbbb988fc9ffda14cb50_Zi_307_A.jpeg',
    badges: ['King Bed', '2 Guests', '63m²', '80m²'],
    overviewHeading: "Generous in scale and graceful in design, our suites offer the quiet luxury of space, privacy, and expansive mountain views.",
    overviewBody: [
      "The Suite is our most spacious and indulgent offering — a private world above the snowline. Spanning 63m² to 80m², it features a king-sized bed, a generous lounge, and panoramic windows framing the Himalayan peaks.",
      "Perfect for longer stays or travelers who appreciate the finest details, the Suite delivers every comfort with understated elegance. The Sherpa family's hospitality is felt in every corner — from the hand-woven textiles to the morning tea brought at your preferred hour.",
    ],
    carouselImages: [
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d49ff89f562bf58917a_67cfbbbb988fc9ffda14cb50_Zi_307_A.jpeg', label: 'Suite', caption: 'King Bed & Lounge' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d4954913f47bdbc1746_67bad5d3a3ae7caf3534b1ae_Zi_208_A%2520(1).jpeg', label: 'Suite', caption: 'Panoramic Views' },
      { src: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d498111e949aab39f64_67cfb4c113e8d1dbe5ed8127_Zi_227_A.jpeg', label: 'Suite', caption: 'Private Sanctuary' },
    ],
    amenities: ['Full board', 'Complimentary Wi-Fi', 'Flatscreen TV & cable channels', 'Private lounge area', '24 hour butler service', 'Robes & slippers', 'Fully stocked mini bar', 'In-room safe', 'Hairdryer & luxury bath products', 'Bathtub & rainfall shower', 'Telephone with concierge access', 'King Bed'],
  },
];

const SingleRoom = () => {
  const { pathname } = useLocation();
  const room = allRooms.find(r => r.path === pathname) ?? allRooms[0];
  const otherRooms = allRooms.filter(r => r.path !== pathname);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${room.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between text-white px-4 py-6">
          {/* Spacer so title sits in the upper-middle */}
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl tracking-wide font-BOONE text-center">
              {room.title}
            </h1>
          </div>

          {/* Bottom info */}
          <div className="w-full flex flex-col items-center gap-3 pb-4">
            <p className="text-lg sm:text-2xl md:text-4xl font-light italic font-AvenirLight text-center px-4">
              {room.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-[3px] font-AvenirLight">
              {room.badges.map((badge, i) => (
                <div key={i} className="border text-white px-3 py-1 border-dashed border-white text-sm md:text-base">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">OVERVIEW</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif text-primary font-BOONE leading-tight mb-8">
                  {room.overviewHeading}
                </h2>
                <Button className="bg-ocean-blue hover:bg-steel-blue text-white rounded-none px-3 md:px-6 text-sm">
                  Book this Room
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
            <div className="absolute bottom-8 right-8 flex gap-2 z-10">
              <CarouselPrevious className="static translate-y-0 bg-background/80 hover:bg-background border-[#ad1a1a] text-[#ad1a1a]" />
              <CarouselNext className="static translate-y-0 bg-background/80 hover:bg-background border-[#ad1a1a] text-[#ad1a1a]" />
            </div>
          </Carousel>
        </div>
      </section>

      <br /><br />

      {/* Features & Amenities */}
      <section className="relative min-h-screen py-20 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.prod.website-files.com/67500d660a7c1d5d2c48fbc6/67bacc129296863ae1896ae5_LoruenserZimmerservice_200-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white text-sm uppercase tracking-wider mb-4">{room.title.toUpperCase()}</p>
              <h3 className="text-white text-5xl md:text-6xl font-serif leading-tight">
                Features<br />
                <span className="italic font-light">&amp; Amenities</span>
              </h3>
            </div>
            <div className="bg-white font-AvenirLight border-1 border-ocean-blue p-1">
              <div className="bg-background border-[5px] border-double border-destructive border-ocean-blue p-8 shadow-2xl">
                <h4 className="text-center text-foreground text-sm font-medium mb-8 uppercase tracking-wider">
                  INCLUDED IN YOUR ROOM
                </h4>
                <ul className="space-y-4">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="text-foreground text-base py-2 border-b border-muted/30 last:border-b-0">
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
              Other Rooms &amp; Suites
            </h2>
            <div className="gap-x-7 gap-y-7 justify-start items-center w-full flex mt-7 mb-10 md:mb-24 flex-col lg:w-4/5">
              <p className="text-forest-green text-[19.2px] leading-[23.04px] font-normal tracking-[-0.192px] text-center my-0 sm:tracking-[-0.025rem] font-AvenirBlack">
                Choose from 20 rooms with attached bathrooms and running hot water for extra comfort, 25 budget-friendly private rooms, or 9 fully furnished apartments ideal for long-term stays, volunteers, and trekkers.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
            <CarouselContent className="-ml-4">
              {otherRooms.map((r) => (
                <CarouselItem key={r.path} className="pl-4 basis-[85%] md:basis-[90%]">
                  <Link to={r.path} className="block">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <img src={r.heroImage} alt={r.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-2xl md:text-3xl font-BOONE">{r.title}</h3>
                        <p className="text-white/90 text-sm mt-1 font-AvenirBlack">{r.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-8 right-8 flex gap-2 z-10">
              <CarouselPrevious className="static translate-y-0 bg-background/80 hover:bg-background border-[#ad1a1a] text-[#ad1a1a]" />
              <CarouselNext className="static translate-y-0 bg-background/80 hover:bg-background border-[#ad1a1a] text-[#ad1a1a]" />
            </div>
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SingleRoom;
