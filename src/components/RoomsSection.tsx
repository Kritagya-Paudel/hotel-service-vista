
import React from 'react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 'single-room',
    title: 'Single Room',
    subtitle: 'A space to call your own.',
    image: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d495dda78da5679a8b9_67ba9babd4f2f9bed4b2474f_single-room-hero-shot.jpeg',
    description: 'Ideal for solo travelers or shorter visits, our single rooms are quietly appointed for comfort, warmth, and a good night\'s rest after a day on the mountain.',
    link: '/single-room',
    badges: ['Single Bed', '1-2 Guests', '20m² - 25m²']
  },
  {
    id: 'double-room',
    title: 'Double Room',
    subtitle: 'Spacious, serene, made for two.',
    image: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d498111e949aab39f64_67cfb4c113e8d1dbe5ed8127_Zi_227_A.jpeg',
    description: 'Our spacious double rooms offer comfort and style, perfect for couples or solo travelers seeking extra space.',
    link: '/stay/double-room',
    badges: ['Double Bed', '2 Guests', '20m² - 25m²']
  },
  {
    id: 'junior-suite',
    title: 'Junior Suite',
    subtitle: 'Tailored for those who stay awhile.',
    image: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d4954913f47bdbc1746_67bad5d3a3ae7caf3534b1ae_Zi_208_A%2520(1).jpeg',
    description: 'Elegantly designed, our Junior Suites offer a refined retreat with added space and comfort.',
    link: '/stay/junior-suite',
    badges: ['Double Bed', '2 Guests', '40m² - 65m²']
  },
  {
    id: 'suite',
    title: 'Suite',
    subtitle: 'A private world above the snowline.',
    image: 'https://cdn.prod.website-files.com/6797112f279bdfb959535252/67ed5d49ff89f562bf58917a_67cfbbbb988fc9ffda14cb50_Zi_307_A.jpeg',
    description: 'Generous in scale and graceful in design, our suites offer the quiet luxury of space, privacy, and expansive mountain views—perfect for longer stays or those who travel with family.',
    link: '/stay/suite',
    badges: ['King Bed', '2 Guests', '63m² - 80m²']
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
            Our Rooms &amp; <em className="italic">Suites</em>
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
