import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Define the data for the carousel
const slidesData = [
  {
    title: "TRUSupply",
    tagline: "Keep your kitchen stocked and suppliers on track with less manual effort.",
    imageText: "Streamline Your Supply Chain", // Updated imageText for better context
    description: "TRUSupply forecasts demand, auto-generates purchase orders, and confirms with suppliers — all through WhatsApp. Your kitchen stays stocked, and your staff save hours every week.",
    features: [
      "Place and track purchase orders instantly through chat",
      "Automate supplier follow-ups so nothing slips through",
      "Get real-time inventory updates linked directly to your system",
    ],
  },
  {
    title: "TRUMarketing",
    tagline: "Attract more diners and grow your restaurant brand with AI-powered campaigns. ",
    imageText: "Boost Your Marketing Efforts",
    description: "TRUMarketing creates WhatsApp broadcasts and social campaigns instantly — promotions, festival offers, chef specials — all customized to your guests. It’s like having a marketing team on call, without the cost.",
    features: [
      "Build personalized promotions for offers, menus, and events ",
      "Automate campaigns across WhatsApp, email, and social",
      "Track diner engagement with insights and re-targeting tools",
    ],
  },
  {
    title: "TRUStaff",
    tagline: "Hire, train, and manage your team from one simple dashboard.",
    imageText: "Effortless Staff Management",
    description: "TRUStaff posts jobs, scores candidates, and even schedules interviews automatically. You get a shortlist of the best fits, while the agent handles the follow-up. Less paperwork, more focus on your team.",
    features: [
      "Find and onboard staff quickly with automated workflows",
      "Manage schedules and shifts without conflicts",
      "Track performance and feedback to keep teams motivated",
    ],
  },
  {
    title: "TRUManager",
    tagline: "Seamlessly manage your restaurant operations from anywhere.", // Updated tagline
    imageText: "Your Restaurant, Managed",
    description: "Guests browse menus, place orders, and ask questions — all on WhatsApp. Orders go straight to your dashboard and kitchen, freeing staff to focus on service instead of taking calls.",
    features: [
      "Unified View of Employees in Dashboard", // Changed to make more sense for "Manager"
      "Real-time order tracking & table management",
      "Comprehensive performance analytics",
    ],
  },
];

const CheckIcon = ({ color = 'text-green-500' }) => (
  <Check className={`flex-shrink-0 w-5 h-5 mr-3 ${color}`} />
);

export default function FeatureShowcase({ autoplayInterval = 7000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slidesData.length;

  // Auto-play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [totalSlides, autoplayInterval]);

  const currentSlide = slidesData[activeIndex];

  const handleManualNav = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => handleManualNav((activeIndex + 1) % totalSlides);
  const prevSlide = () => handleManualNav((activeIndex - 1 + totalSlides) % totalSlides);

  return (
    <div
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          With TrueTable, you get <span className='text-[#0118D8]'>more traffic,</span> more sales, more repeat customers
        </h2>
      </div>

      {/* --- 1. Mobile Tab Navigation (single active tab, responsive styling) --- */}
      <div className="md:hidden max-w-lg mx-auto flex items-center justify-between mb-10 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Display only the active tab label */}
        <div className="flex flex-col items-center flex-grow mx-4">
          <span className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">
            {activeIndex + 1}. {currentSlide.title.replace('TRU', '').replace('Manager', 'Management')}
          </span>
          <div className="h-1 w-full bg-[#0118D8] rounded-full"></div>
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* --- 2. Desktop Tab Navigation (all tabs visible, manual selection) --- */}
      <div className="hidden md:flex max-w-4xl mx-auto justify-center gap-2 sm:gap-4 mb-10 md:mb-12">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleManualNav(index)}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 w-1/4 group`}
          >
            <span className={`text-lg sm:text-xl font-semibold mb-2 ${activeIndex === index ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
              {index + 1}. {slide.title.replace('TRU', '').replace('Manager', 'Management')}
            </span>
            <div className={`h-1 w-full rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#0118D8] scale-x-100' : 'bg-gray-300 scale-x-75 group-hover:scale-x-90'}`}></div>
          </div>
        ))}
      </div>

      {/* --- Main Content Area (Visual & Text) - This remains unchanged --- */}
      <div className="max-w-7xl mx-auto relative mt-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="w-full lg:w-1/2 p-4 lg:py-12 order-2 lg:order-1 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentSlide.tagline}</h3>
              <p className="text-lg text-gray-600 mb-6">{currentSlide.description}</p>
              <div className="space-y-4">
                {currentSlide.features.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon color='text-green-600'/>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[450px] lg:min-h-[550px] bg-amber-600/90 rounded-2xl flex flex-col justify-center items-center p-8 order-1 lg:order-2 shadow-xl">
              <h4 className="text-4xl sm:text-5xl font-extrabold text-white text-center">
                {currentSlide.imageText}
              </h4>
              <p className="text-white/80 text-xl mt-2 text-center">
                Grow sales with cutting-edge tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}