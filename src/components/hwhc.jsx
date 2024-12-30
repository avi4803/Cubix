import React from 'react';
import { ArrowRight } from 'lucide-react';

function HowWeHelpBrands() {
  const contentCards = [
    { id: 1, title: 'Brand Strategy', description: 'We help define your brand voice and positioning' },
    { id: 2, title: 'Content Creation', description: 'Create engaging content that resonates with your audience' },
    { id: 3, title: 'Marketing Solutions', description: 'Drive growth through targeted marketing campaigns' },
  ];

  return (
    <div className='min-h-screen bg-black flex justify-center relative z-10'>
    <div className="self-center w-[1803px]  bg-[#DFFFCB] p-4 md:p-8 lg:p-12 rounded-[50px] m-4 md:m-8 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-bowlby-one-sc-regular">
          How we help Brands
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-inter-regular">
          Transform your brand's digital presence with our comprehensive solutions
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 font-inter-regular gap-20">
        {contentCards.map((card) => (
          <div
            key={card.id}
            
            className="relative bg-[#1a3a1a]  rounded-[40px]  md:p-5 transform transition-transform hover:scale-105"
          >
            {/* Number */}
            <div className="absolute top-4 right-6 -mx-[1.5vw]">
              <span className="text-[#4dff4d]  text-[200px] font-inter-regular">
                {card.id}
              </span>
            </div>

            {/* Image Container */}
            <div className="mb-4 rounded-2xl flex justify-center md:justify-start ">
              <img
                src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&q=80&w=800"
                alt="Brand Marketing"
                className="size-56  self-center md:-mx-20 mt-6  object-cover rounded-[40px]"
              />
            </div>

            {/* Content */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-300 mb-4">{card.description}</p>
              <button className="flex items-center text-[#4dff4d] hover:text-white transition-colors">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default HowWeHelpBrands;