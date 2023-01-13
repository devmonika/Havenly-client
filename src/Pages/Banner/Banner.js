
import React, { useRef, useState } from "react";
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
            <h2 className="text-3xl md:text-sm font-bold mb-3 ">WELCOME TO OUR HOUSE RENT</h2>
            <p className="text-xl sm:text-sm ">As your vacation specialist, our goal is to help you find the perfect Crested Butte rental to fit your needs (and budget). All of our properties are fully furnished, maintained with the utmost care, and ready for your visit. As your vacation rental management specialist, our full-service team will provide you the assurance you need to know your home is in the best care.</p>
           <div className="mt-5 slideBtn">
           <button className="bg-[#FF9524] px-8 py-3 mr-3">Property</button>
            <button className="bg-[#09BE51] px-8 py-3">Contact Us</button>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="slideContent">
            <h2 className="text-3xl font-bold mb-3 ">WELCOME TO OUR HOUSE RENT</h2>
            <p className="text-xl ">As your vacation specialist, our goal is to help you find the perfect Crested Butte rental to fit your needs (and budget). All of our properties are fully furnished, maintained with the utmost care, and ready for your visit. As your vacation rental management specialist, our full-service team will provide you the assurance you need to know your home is in the best care.</p>
           <div className="mt-5">
           <button className="bg-[#FF9524] hover:bg-[#09BE51] px-8 py-3 mr-3">Property</button>
            <button className="bg-[#09BE51] hover:bg-[#FF9524] px-8 py-3">Contact Us</button>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="" />
          <div className="slideContent">
            <h2 className="text-3xl md:text-sm font-bold mb-3 ">WELCOME TO OUR HOUSE RENT</h2>
            <p className="text-xl sm:text-sm ">As your vacation specialist, our goal is to help you find the perfect Crested Butte rental to fit your needs (and budget). All of our properties are fully furnished, maintained with the utmost care, and ready for your visit. As your vacation rental management specialist, our full-service team will provide you the assurance you need to know your home is in the best care.</p>
           <div className="mt-5 slideBtn">
           <button className="bg-[#FF9524] px-8 py-3 mr-3">Property</button>
            <button className="bg-[#09BE51] px-8 py-3">Contact Us</button>
           </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
};

export default Banner;