import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

import Zomato from "../assets/Zomato.svg";
import Swiggy from "../assets/Swiggy.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import Shopify from "../assets/Shopify.svg";
import ReactLogo from "../assets/react.svg";

const logos = [Zomato, Swiggy, Whatsapp, Shopify, ReactLogo];

export default function Carousol() {
  return (
    <div className="w-[90vw] mx-auto py-14">
      <h2 className="text-[24px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-[#0118D8] leading-tight mb-6 text-center">
        Integrations
      </h2>

      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        slidesPerView={5}
        spaceBetween={20}
        autoplay={{
          delay: 0, // continuous autoplay
          disableOnInteraction: false,
        }}
        speed={4000} // lower = faster, higher = slower continuous movement
        freeModeMomentum={false}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {logos.concat(logos).map((logo, idx) => ( // duplicate array to avoid gaps
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
