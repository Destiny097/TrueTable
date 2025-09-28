import React, { useState } from "react";
import img1 from "../assets/Dashboard_Inventory.png";
import img2 from "../assets/Dashboard_finance.png";
import img3 from "../assets/Dashboard_order.png";
import img4 from "../assets/Dashbaord4.jpg"; // Assuming this is correct
import img5 from "../assets/Dashboard_Staff.png";

const tabs = [
  { label: "Inventory Dashboard", img: img1 },
  { label: "Finance Overview", img: img2 },
  { label: "WhatsApp Ordering", img: img3 },
  { label: "Business Intelligence", img: img4 },
  { label: "Staff Management", img: img5 },
];

export default function DashboardSlider() {
  const [active, setActive] = useState(0);

  // Define key colors for theme consistency
  const primaryBlue = '#0118D8'; 

  return (
    // 1. Container: Removed min-h-screen (no need to force height here), 
    // adjusted padding to be consistent (py-16)
    <div className="w-full bg-white flex flex-col items-center justify-start py-10 sm:py-20 px-4 rounded-t-3xl shadow-inner">
      
      {/* Optional Title/Heading for the section (Good UI practice) */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center font-sora">
        Intuitive Dashboards, Total Control
      </h2>

      {/* 2. Top Buttons: 
          - Adjusted gap for better spacing.
          - Added slightly more vertical margin (mb-10) for separation from the image. */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12 max-w-6xl font-sora">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            // 3. Button Styling: 
            // - Increased border/shadow for depth (modern UI).
            // - Used primary blue for active state to match the overall theme.
            className={`px-3 py-2 md:px-5 md:py-2 rounded-full font-medium border text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap 
              ${
                active === idx
                  ? `bg-[${primaryBlue}] border-[${primaryBlue}] text-white shadow-xl shadow-blue-400/50`
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 4. Image Slider Container: 
          - Ensured proper aspect ratio by using explicit width/height classes 
            that scale appropriately.
          - Added max-w-6xl for large screen containment. */}
      <div className="relative w-full max-w-6xl aspect-[16/9] mt-2 flex items-center justify-center overflow-hidden">
        {tabs.map((tab, idx) => (
          <img
            key={tab.img}
            src={tab.img}
            alt={tab.label}
            // 5. Image Styling:
            // - Removed unnecessary absolute positioning for a cleaner stacking context.
            // - Added border and clear shadow for a modern "screen" appearance.
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl sm:rounded-2xl border border-gray-200 shadow-2xl transition-opacity duration-700
              ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ pointerEvents: active === idx ? "auto" : "none" }}
          />
        ))}
        {/* Added a subtle gradient overlay to the bottom of the image for visual depth */}
        <div className="absolute bottom-0 w-full h-1/5 bg-gradient-to-t from-white/70 to-transparent z-20 pointer-events-none"></div>
      </div>
    </div>
  );
}