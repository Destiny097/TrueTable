import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import SwiperCore from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";

import Zomato from "../assets/Zomato.svg";
import Swiggy from "../assets/Swiggy.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import Shopify from "../assets/Shopify.svg";
import ReactLogo from "../assets/react.svg";

const logos = [Zomato, Swiggy, Whatsapp, Shopify, ReactLogo];

SwiperCore.use([Autoplay, FreeMode]);

export default function Carousol() {
  return (
    <div className="w-[90vw] mx-auto py-14">
      <h2 className="text-[24px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-[#0118D8] leading-tight mb-6 text-center">
        Integrations
      </h2>

      <Swiper
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-[85%]"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // small phones
          480: { slidesPerView: 2, spaceBetween: 15 }, // larger phones
          768: { slidesPerView: 3, spaceBetween: 20 }, // tablets
          1024: { slidesPerView: 4, spaceBetween: 20 }, // small desktops
          1280: { slidesPerView: 5, spaceBetween: 20 }, // large desktops
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex items-center justify-center">
            <div className="bg-white/20 h-[120px] sm:h-[140px] md:h-[160px] flex items-center justify-center rounded-2xl p-4">
              <img
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="h-12 sm:h-14 md:h-16 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
