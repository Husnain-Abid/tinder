import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shannon & Julian",
      text: "Thanks to Tinder I have found the love of my life and we are to be married.",
    },
    {
      name: "Courtney & Miranda",
      text: "Thanks to Tinder I have found the love of my life and we are to be married.",
    },
    {
      name: "Gabriel & Fiance",
      text: "I met my fiancé on Tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.",
    },
    {
      name: "Gabriel & Fiance",
      text: "Without the app, we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful.",
    },
    {
      name: "Gabriel & Fiance",
      text: "I couldn't resist swiping right after reading her final sentence... 'Looking for my super babe fix life.' After talking for about a week we went out on our first date and I knew there was something special about her!",
    },
    {
      name: "Gabriel & Fiance",
      text: "I met my fiancé on Tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.",
    },
  ];

  return (
    <div className="w-full "  id="testimonials">
      <div className="w-[90%] mx-auto py-5 ">
        <Swiper
        className="h-[275px]"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>


              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg border shadow-lg h-64">

                <div className="mb-2 relative">
                  <p className="font-bold text-gray-800 border-b pb-2 w-5/6 border-gray-300 ">{item.name}</p>

                  <span className='absolute right-0 top-0 text-8xl text-slate-200'>“</span>

                </div>

                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>

              </div>


            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
