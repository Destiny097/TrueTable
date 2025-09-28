import React from 'react'
import DashboardSlider from '../Components/DashboardSlider'
import { Link } from 'react-router-dom'
import VantaGlobeBackground from '../Components/VantaGlobe' 

function HeroSection() {
  return (
    // 1. Ensure the section covers the full viewport height (min-h-screen)
    // and uses flex to control vertical layout.
    <section 
      className="w-full flex flex-col items-center relative min-h-screen" 
    >
      <VantaGlobeBackground />
      
      {/* 2. Main Content Wrapper: 
          - Added 'h-full' and 'flex-grow' to make this div take up all available vertical space 
            between the VantaGlobe (which is absolute) and the DashboardSlider below.
          - Changed py-24/py-32 to pt-24/pb-12 to ensure it has padding, but the 'justify-center' 
            now handles the core vertical alignment. */}
      <div 
        className="max-w-7xl w-full flex flex-col items-center justify-center flex-grow pt-24 pb-12 px-4 relative z-10 text-white" 
      >
        {/* Text container remains the same */}
        <div className="flex flex-col items-center justify-center w-full h-[70vh]">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 text-center max-w-4xl font-sora">
            Restaurant Management Made <span className='text-[#0118D8]'>Simple</span>.
          </h1>
          <p className="text-base sm:text-xl text-white/90 mb-8 max-w-lg font-medium text-center px-4 font-sora">
            From inventory to hiring, let AI handle your daily operations. You focus on what matters — great food and happy customers.
          </p>
          
          <div className="flex gap-4">
            <Link to='/contact'>
              <button className='px-6 py-3 rounded-lg bg-blue-600 hover:bg-white/70 cursor-pointer duration-200 text-lg transition-all hover:text-[#0118D8] font-semibold shadow-xl font-sora'>
                Book a Chat
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* DashboardSlider: Now sits cleanly at the bottom */}
      <div className="w-full rounded-t-2xl relative z-30 mb-0">
        <DashboardSlider />
      </div>
    </section>
  )
}

export default HeroSection;