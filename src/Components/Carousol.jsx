import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

import Zomato from "../assets/Zomato.svg";
import Swiggy from "../assets/Swiggy.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import Shopify from "../assets/Shopify.svg";
import UberEats from "../assets/UberEats.svg";

const logos = [Zomato, Swiggy, Whatsapp, Shopify, UberEats];

export default function Carousol() {
  return (
    <div className="w-[90vw] mx-auto py-5">
      <h2 className="text-[20px] sm:text-[36px] md:text-[52px] lg:text-[69px] font-extrabold text-black leading-tight mb-6 text-center font-sora">
        Integrations
      </h2>

      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        speed={4000} // higher = smoother, lower = faster scroll
        freeMode={{
          enabled: true,
          momentum: false, // ✅ correct way
        }}
        autoplay={{
          delay: 0, // continuous autoplay
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {logos.concat(logos).map((logo, idx) => ( // duplicate logos to prevent gaps
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
