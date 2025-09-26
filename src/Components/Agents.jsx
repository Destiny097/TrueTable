import React from 'react';

// Reusable component for the checkmark icon
const CheckIcon = ({ color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`flex-shrink-0 w-6 h-6 mr-3 ${color}`} 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

// Reusable component for a single service card with a glass effect
const ServiceCard = ({ title, description, features, checkmarkColor = 'text-white' }) => (
  <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 flex flex-col items-start h-full">
    <h3 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
      {title}
    </h3>
    <p className="text-black mb-6 flex-grow">
      {description}
    </p>
    
    <div className="p-6 rounded-2xl w-full bg-white/10">
      <ul className="space-y-4">
        {features.items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon color={checkmarkColor} />
            <span className="text-black font-semibold leading-tight">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// The main section component to display the four cards
export default function ServicesSection() {
  const cardsData = [
    {
      title: "TRUSupply",
      description: "Improve your supply chain with automated procurement tools.",
      features: {
        items: [
          "Streamline purchasing processes",
          "Reduce costs and minimize errors",
          "Maintain optimal inventory levels",
          "Vet suppliers for quality and price"
        ]
      },
    },
    {
      title: "TRUMarketing",
      description: "Convert and retain more customers with AI-powered marketing tools",
      features: {
        items: [
          "Create personalized campaigns at scale",
          "Engage contacts with dynamic content",
          "Measure & improve performance"
        ]
      },
    },
    {
      title: "TRUStaff",
      description: "Enhance your workforce by hiring and retaining great employees",
      features: {
        items: [
          "Manage job postings with ease",
          "Develop an effective hiring pipeline",
          "Track & review applicants quickly",
        ]
      },
    },
    {
      title: "TRUManager",
      description: "Enhance your workforce by hiring and retaining great employees",
      features: {
        items: [
          "Manage job postings with ease",
          "Develop an effective hiring pipeline",
          "Track & review applicants quickly",
        ]
      },
    },
  ];

  return (
    <div 
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'radial-gradient(circle at center, #0118D8 , #ffffff )' }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Our Agents
        </h2>
        <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
          We offer a comprehensive suite of tools to help your business grow and thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            description={card.description}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
}
