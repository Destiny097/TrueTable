import React, { useState } from 'react'
import img1 from '../assets/Dashboard1.jpg'
import img2 from '../assets/Dashboard2.jpg'
import img3 from '../assets/Dashboard3.png'
import img4 from '../assets/Dashbaord4.jpg'
import img5 from '../assets/Dashboard5.jpg'

const tabs = [
  { label: 'Inventory Dashboard', img: img1 },
  { label: 'Finance Overview', img: img2 },
  { label: 'WhatsApp Ordering', img: img3 },
  { label: 'Business Intelligence', img: img4 },
  { label: 'Staff Payroll', img: img5 },
  
]

export default function DashboardSlider() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-[] min-h-screen bg-transparent flex flex-col items-center justify-center py-12">
      {/* Top Buttons */}
      <div className="flex gap-4 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={`px-6 py-2 rounded-full font-semibold border transition 
              ${active === idx ? 'bg-gray-100 border-blue-500 text-blue-700 shadow' : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Image Slider */}
      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        {tabs.map((tab, idx) => (
          <img
            key={tab.img}
            src={tab.img}
            alt={tab.label}
            className={`absolute top-0 left-0 w-full h-full p-5 object-contain rounded-2xl shadow-xl transition-opacity duration-700
              ${active === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ pointerEvents: active === idx ? 'auto' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}