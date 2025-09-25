import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import SwiperCore from 'swiper'
import { Autoplay, FreeMode } from 'swiper/modules'
import Zomato from '../assets/Zomato.svg'
import Swiggy from '../assets/Swiggy.svg'
import Whatsapp from '../assets/Whatsapp.svg'
import Shopify from '../assets/Shopify.svg'
import ReactLogo from '../assets/react.svg'

const logos = [Zomato, Swiggy, Whatsapp, Shopify, ReactLogo]

SwiperCore.use([Autoplay, FreeMode])

export default function Carousol() {
  return (
    <div className="w-[80vw] mx-auto py-10">
        <h2 className="text-[24px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold text-[#0118D8] leading-tight mb-6 md:mb-6 text-center">
            Integrations
        </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex items-center justify-center">
            <div className='bg-white/20  h-[20vh] flex items-center justify-center rounded-2xl'>
                <img src={logo} alt={`Logo ${idx + 1}`} className="h-16 object-contain object-center flex items-center justify-center" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}