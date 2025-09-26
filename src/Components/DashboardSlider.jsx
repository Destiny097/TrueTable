import React, { useState } from "react";
import img1 from "../assets/Dashboard_Inventory.png";
import img2 from "../assets/Dashboard_finance.png";
import img3 from "../assets/Dashboard_order.png";
import img4 from "../assets/Dashbaord4.jpg";
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

  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center py-12 px-4">
      {/* Top Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={`px-3 py-2 md:px-5 md:py-2 rounded-full font-medium border text-sm md:text-base transition 
              ${
                active === idx
                  ? "bg-gray-100 border-blue-500 text-blue-700 shadow"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Image Slider */}
      <div className="relative w-full max-w-6xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        {tabs.map((tab, idx) => (
          <img
            key={tab.img}
            src={tab.img}
            alt={tab.label}
            className={`absolute top-0 left-0 w-full h-full p-2 sm:p-4 md:p-5 object-contain rounded-xl sm:rounded-2xl shadow-lg transition-opacity duration-700
              ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ pointerEvents: active === idx ? "auto" : "none" }}
          />
        ))}
      </div>
    </div>
  );
}
