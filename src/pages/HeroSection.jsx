import React from 'react'
import heroImg from '../assets/HeroSection1.jpg'
import DashboardSlider from '../Components/DashboardSlider'

function HeroSection() {
  return (
    <section className="w-full bg-[#E9DFC3] flex flex-col items-center justify-center  py-8" 
    style={{
    background: 'linear-gradient(30deg, #FFF8F8 10%, #E9DFC3 100%)'
    }}>
      <div className="max-w-7xl w-full h-[80%] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-20">
        {/* Left Side: Text */}
        <div className="flex flex-col items-center w-full">
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold text-[#0118D8] leading-tight mb-6 md:mb-6 text-center">
            Restaurant Management Made <span className='text-white'>Simple</span>.
          </h1>
          <p className="text-base sm:text-xl text-white mb-6 md:mb-8 max-w-xl font-semibold text-center">
            From inventory to hiring, let AI handle your daily operations. You focus on what matters — great food and happy customers.
          </p>
          <div className="flex gap-4">
            <button className='px-5 py-3 rounded-lg bg-[#0118D8] hover:bg-white cursor-pointer duration-200 text-base sm:text-[18px] font-semibold text-white transition-all hover:text-[#0118D8]'>
              Book a chat
            </button>
          </div>
        </div>
      </div>
      {/* Add DashboardSlider below the hero content */}
      <div className="w-full rounded-t-2xl">
        <DashboardSlider />
      </div>
    </section>
  )
}

export default HeroSection