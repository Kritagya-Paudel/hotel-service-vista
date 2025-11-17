
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import Header from "@/components/about/Header";
import Footer from "@/components/Footer";

const SingleRoom = () => {
  const amenities = [
    "Full board",
    "Complimentary Wi-Fi", 
    "Flatscreen TV & cable channels",
    "Writing desk & workspace",
    "24 hour room service",
    "Robes & slippers",
    "Mini bar",
    "Safe for valuables",
    "Hairdryer & luxury bath products",
    "Bathtub & shower Combination",
    "Telephone with concierge access",
    "Single Bed"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d495dda78da5679a8b9_67ba9babd4f2f9bed4b2474f_single-room-hero-shot.jpeg')` 
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-wide">
            Single Room
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-8">
            A space to call your own.
          </p>
          
          {/* Room Details Box */}
          <div className="inline-flex bg-white/90 text-primary rounded-lg overflow-hidden text-sm font-medium">
            <div className="px-6 py-3 border-r border-primary/20">
              <span className="text-destructive">Single Bed</span>
            </div>
            <div className="px-6 py-3 border-r border-primary/20">
              1-2 Guests
            </div>
            <div className="px-6 py-3 border-r border-primary/20">
              20m²
            </div>
            <div className="px-6 py-3">
              25m²
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - New Layout */}
      <section className="min-h-screen bg-amber-50 flex flex-col">
        {/* Text Content - Two Columns at Top */}
        <div className="flex-1 px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                OVERVIEW
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif text-destructive leading-tight mb-8">
                  Ideal for solo travelers or shorter visits, our single rooms are quietly appointed for comfort, warmth, and a good night's rest after a day on the mountain.
                </h2>
                
                <Button 
                  className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-base font-medium"
                >
                  Book this Room
                </Button>
              </div>

              {/* Right Column */}
              <div className="space-y-6 text-foreground leading-relaxed text-sm lg:text-base">
                <p>
                  Our smallest rooms are shaped by the same attention to comfort and calm as our grandest suites. Designed for solo stays—whether you're here for early mornings on the slopes or simply in need of a room of your own—each space offers a well-proportioned retreat: handsome woods, crisp linens, and the gentle hush that follows a day on skis.
                </p>
                
                <p>
                  Furnished with a sportsman's sensibility and a sense of order, the room includes a comfortable single bed, a writing desk or reading chair, and a modern bath with either a walk-in shower or tub. Ranging from 20m² to 25m², these rooms are especially well-suited to seasoned skiers traveling alone or older children or teenagers in need of their own space.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image at Bottom */}
        <div className="h-96 lg:h-[500px] relative overflow-hidden">
          <img
            src="/lovable-uploads/c2e4f0c5-b385-4f5c-96af-cc2d9a887833.png"
            alt="Single Room Lounge Area"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features & Amenities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/96c05c75-e999-4b86-a196-7e2f3aa11453.png"
                alt="Room Features"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8">
                <p className="text-white text-sm uppercase tracking-wider mb-4">
                  SINGLE ROOM
                </p>
                <h3 className="text-white text-5xl md:text-6xl font-serif leading-tight">
                  Features<br />
                  <span className="italic font-light">&amp; Amenities</span>
                </h3>
              </div>
            </div>

            {/* Right Column - Amenities List */}
            <div className="bg-background border-2 border-primary p-8 rounded-lg">
              <h4 className="text-center text-primary text-lg font-medium mb-8 uppercase tracking-wider">
                INCLUDED IN YOUR ROOM
              </h4>
              
              <ul className="space-y-4">
                {amenities.map((amenity, index) => (
                  <li key={index} className="text-foreground text-base py-2 border-b border-muted/30 last:border-b-0">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* More Rooms Section with Carousel */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-destructive mb-8 tracking-wide">
              More Rooms <span className="italic font-light">&amp; Suites</span>
            </h2>
            <p className="text-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our range of thoughtfully designed accommodations, each offering unique comfort and alpine elegance.
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-6xl mx-auto">
            <PhotoCarousel />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SingleRoom;
