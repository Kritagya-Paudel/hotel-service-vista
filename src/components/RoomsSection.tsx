
import React from 'react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 'basic-standard-room',
    title: 'Basic Standard Room',
    subtitle: 'Simple comfort, warmly kept.',
    image: '/lovable-uploads/rooms/basic-standard-01.jpeg',
    description: 'A quiet, well-kept private room with a comfortable bed, wood-panelled walls, and an attached bathroom with running hot water — everything you need after a day on the trail.',
    link: '/stay/basic-standard-room',
    badges: ['1 Bed', '1-2 Guests', 'Attached Bath']
  },
  {
    id: 'deluxe-double-room',
    title: 'Deluxe Double Room',
    subtitle: 'More space, more light, room for two.',
    image: '/lovable-uploads/rooms/deluxe-double-01.jpeg',
    description: 'Our largest rooms, with two beds, a sitting area by the window, and views over Namche — ideal for friends, families, or anyone who likes room to spread out.',
    link: '/stay/deluxe-double-room',
    badges: ['2 Beds', '2-3 Guests', 'Mountain Views']
  },
];

const RoomsSection = () => {
  return (
    <section className="block z-[2] relative bg-background pb-16 md:pb-40 px-4 md:px-6">

      {/* Header section */}
      <div className="justify-start items-center w-full flex pt-24 pb-7 flex-col lg:pb-7 sm:pb-7">
        <div className="justify-start items-center flex blur-none opacity-100 flex-col lg:pb-0">
          {/* Decorative SVG
          <img
            className="align-middle max-w-full inline-block w-40 -rotate-[26deg] mb-7 border-0"
            alt=""
            loading="lazy"
            src="https://cdn.prod.website-files.com/67500d660a7c1d5d2c48fbc6/67e75c805b1fb6a6f39b00ed_g14%20(1).svg"
          />
           */}
          {/* Eyebrow */}
          <p className="font-AvenirLight text-xs uppercase tracking-[0.35em] text-secondary mb-6">
            Stay
          </p>
          {/* Main heading */}
          <h2 className="font-Editorial text-[2.5rem] leading-tight tracking-[-1px] sm:text-[3.5rem] md:text-[5rem] lg:text-[88px] lg:leading-[88px] lg:tracking-[-3.52px] text-primary text-center my-0">
            Our <em className="italic">Rooms</em>
          </h2>

          {/* Description */}
          <div className="font-AvenirLight gap-x-7 gap-y-7 justify-start items-center w-full flex mt-7 mb-10 md:mb-24 flex-col lg:w-[42vw]">
            <p className="text-foreground text-[19.2px] leading-[23.04px] font-normal tracking-[-0.192px] text-center my-0 sm:tracking-[-0.025rem]">
              Choose from 20 rooms with attached bathrooms and running hot water for extra comfort, 25 budget-friendly private rooms, or 9 fully furnished apartments ideal for long-term stays, volunteers, and trekkers.
            </p>
          </div>
        </div>
      </div>

      {/* Rooms grid */}
      <div className="font-AvenirLight w-full">
        <div className="gap-x-[12.8px] gap-y-16 md:gap-y-24 grid-cols-1 md:grid-cols-2 auto-cols-[1fr] grid" role="list">
          {rooms.map((room) => (
            <div key={room.id} className="w-dyn-item" role="listitem">
              <Link
                to={room.link}
                className="bg-[rgba(0,0,0,0)] max-w-full flex text-primary no-underline gap-x-6 gap-y-6 justify-start items-start w-full flex-col group"
              >
                {/* Room image with badges */}
                <div className="aspect-[3/2] w-full relative overflow-hidden">
                  <img
                    className="align-middle max-w-none inline-block object-cover w-full h-[100%] sm:h-[110%] lg:h-[112%] border-0 transition-transform duration-500 scale-100 lg:group-hover:scale-105"
                    alt={`${room.title} interior`}
                    loading="lazy"
                    src={room.image}
                  />

                  
                  {/* Badges overlay */}
                  <div className="gap-[3px] bg-background justify-center items-center flex z-[5] absolute bottom-0 left-0 pt-0.5 pb-0 sm:top-0 sm:bottom-auto sm:pt-0 sm:pb-0.5">
                    {room.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="border text-primary px-[0.8rem] py-[0.3rem] border-dashed border-primary lg:text-[15.2px]"
                      >
                        <div>{badge}</div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Room content */}
                <div className="gap-x-[12.8px] gap-y-[12.8px] justify-start items-start flex w-[92%] blur-none opacity-100 flex-col lg:w-full sm:w-full">
                  <h3 className="font-Editorial font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[60px] lg:tracking-[-1.8px] my-0">
                    {room.title}
                  </h3>
                  <h4 className="font-Editorial font-normal text-[19.2px] leading-[23.04px] tracking-[-0.384px] italic my-0">
                    {room.subtitle}
                  </h4>
                <p className="text-foreground text-[15.2px] leading-[21.28px] font-normal tracking-[-0.152px] my-0">
                  {room.description}
                </p>
                  
                  {/* Learn more link with underline animation */}
                  <div className="gap-[0.2rem] text-foreground uppercase justify-center items-end text-[0.8rem] font-bold leading-none flex relative overflow-hidden mt-[12.8px] flex-col">
                    <div>Learn more</div>
                    <div className="w-[0%] h-px absolute border-b-primary border-b border-solid bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
                    <div className="w-full h-px border-b-primary border-b border-solid"></div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
