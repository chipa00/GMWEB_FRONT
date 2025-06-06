import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export const Features = () => {
  const activeEvents = [
    {
      title: "NOTFEST III - 01/02/2025",
      image: "img/eventos_activos/flyer1.jpg",
    },
    {
      title: "FESTIVAL METAL CHILE - 15/08/2025",
      image: "img/eventos_activos/flyer2.jpg",
    },
  ];

  return (
    <div
      id="features"
      className="text-center"
      style={{ backgroundColor: "#b30000", color: "white", paddingTop: "60px", paddingBottom: "10px" }}
    >
      <div className="container">
        <div className="section-title mb-8">
          <h2>Próximos Eventos</h2>
          <p>¡No te pierdas estos eventos increíbles!</p> {/* Opcional */}
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={activeEvents.length > 2}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={Math.min(3, activeEvents.length)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: Math.min(2, activeEvents.length) },
            1024: { slidesPerView: Math.min(3, activeEvents.length) },
          }}
        >
          {activeEvents.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/ticketera">
                <div className="event-image-container overflow-hidden rounded-xl shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="event-image transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-white font-semibold">{item.title}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
