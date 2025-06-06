import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export const FlyerSlider = ({ gallery = [] }) => {
  return (
    <section
      id="flyer-slider"
      className="text-center py-12"
      style={{ backgroundColor: "#b30000", color: "white" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Próximos Eventos</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {gallery.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/ticketera">
                <img
                  src={item.largeImage}
                  alt={item.title}
                  className="w-full h-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-2 text-white font-semibold">{item.title}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
