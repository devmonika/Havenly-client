
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slide from '../../images/slide2.jpg';
import slide2 from '../../images/slide1.jpg';
const Banner = () => {
  return (
    <div>
        <>
      <Swiper 
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false
    }}
      slidesPerView={1}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide} alt="" />
          <div className="slideContent">
            <h2 className="text-3xl md:text-sm font-bold mb-3 ">WELCOME TO <span>HAVENLY!</span></h2>
            <p className="text-xl sm:text-sm ">Where You can rent your prefer houses at budget friendly rate.</p>
           <div className="mt-5 slideBtn">
           <button className="bg-secondary px-8 py-3 mr-3">Apartments</button>
            <button className="bg-primary px-8 py-3">Contact Us</button>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="" />
          <div className="slideContent">
            <h2 className="text-3xl font-bold mb-3 ">WELCOME TO HAVENLY!</h2>
            <p className="text-xl ">Where You can rent your prefer houses at budget friendly rate.</p>
           <div className="mt-5">
           <button className="bg-secondary px-8 py-3 mr-3">Apartments</button>
            <button className="bg-primary px-8 py-3">Contact Us</button>
           </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
};

export default Banner;