
const expeditions = [
  { year: "1962 & 1963", role: "High altitude Sherpa, Indian Everest Expeditions" },
  { year: "1963", role: "High altitude Sherpa, Japanese Langtang Expedition" },
  { year: "1964", role: "Assistant to Schneider, surveying the Hinko region for the Schneider topographical maps" },
  { year: "1965", role: "Joins Jimmy Roberts at the founding of Nepal's trekking industry" },
  { year: "1969", role: "Sardar, American Kanjiroba Expedition, led by John Tyson" },
  { year: "1970", role: "Sardar, British Annapurna I South Face Expedition, led by Chris Bonington" },
  { year: "1976", role: "Sardar, American Bicentennial Everest Expedition, led by Phil Trimble" },
];

const FounderSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-AvenirBlack text-xs md:text-sm uppercase tracking-widest text-forest-green mb-4">OUR FOUNDER</p>
          <h2 className="font-BOONE text-3xl md:text-4xl lg:text-6xl font-serif italic text-ocean-blue leading-tight">
            Pasang Kami<br />
            <span className="text-4xl md:text-5xl lg:text-7xl">Sherpa</span>
          </h2>
        </div>

        {/* Portrait, framed in the lodge's double-rule motif */}
        <figure className="max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="border-2 border-ocean-blue p-1 md:p-1.5">
            <div className="border border-steel-blue/60">
              <img
                src="/lovable-uploads/founder-pasang-kami-sherpa.jpg"
                alt="Pasang Kami Sherpa, founder of Khumbu Lodge"
                loading="lazy"
                className="w-full h-[14rem] md:h-[20rem] lg:h-[26rem] object-cover object-center"
              />
            </div>
          </div>
          <figcaption className="font-AvenirLight text-xs md:text-sm text-steel-blue text-center mt-3 md:mt-4 italic">
            Pasang Kami Sherpa, known throughout the Khumbu simply as PK
          </figcaption>
        </figure>

        {/* Story, set in two columns so neither side runs long */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-14">
          <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed first-letter:font-BOONE first-letter:text-5xl md:first-letter:text-6xl first-letter:text-ocean-blue first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-[0.85]">
            Pasang Kami Sherpa (PK) was born in the Khumbu region and grew up in the shadow of Chomolungma, Mother Goddess of the Earth, Mount Everest. In 1965 he became one of the few select Sherpas to begin working with Jimmy Roberts in his new venture, one that was to become a leading tourist industry for the Kingdom of Nepal: trekking.
          </p>
          <div className="space-y-4 md:space-y-6">
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
              His career reads like a history of Himalayan mountaineering itself: high altitude Sherpa on the Indian Everest expeditions and in Langtang, then assistant to Schneider in 1964 during the data collection in the extremely rugged Hinko region for the now famous Schneider topographical maps.
            </p>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
              From there he served as Sardar on expedition after expedition, leading the Sherpa teams that carried some of the great Himalayan climbs of the era, and the list goes on.
            </p>
          </div>
        </div>

        {/* The tump line story */}
        <blockquote className="max-w-3xl mx-auto text-center border-t border-b border-steel-blue/40 my-10 md:my-16 py-6 md:py-8">
          <p className="font-BOONE italic text-lg md:text-xl lg:text-2xl text-ocean-blue leading-relaxed">
            PK tells of the time they ate their tump lines and other pieces of leather to stave off starvation and death while returning to the villages of Khumbu.
          </p>
        </blockquote>

        {/* Expedition record */}
        <div className="max-w-5xl mx-auto">
          <p className="font-AvenirBlack text-xs md:text-sm uppercase tracking-widest text-forest-green text-center mb-6 md:mb-8">A LIFE ON THE MOUNTAIN</p>
          <ul className="font-AvenirLight grid md:grid-cols-2 gap-x-10 lg:gap-x-16">
            {expeditions.map((item) => (
              <li
                key={item.year}
                className="flex flex-col sm:flex-row sm:gap-6 py-3 border-b border-dashed border-steel-blue/50"
              >
                <span className="font-AvenirBlack text-sm md:text-base text-ocean-blue whitespace-nowrap sm:w-28 shrink-0">
                  {item.year}
                </span>
                <span className="text-sm md:text-base text-forest-green leading-relaxed">
                  {item.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
