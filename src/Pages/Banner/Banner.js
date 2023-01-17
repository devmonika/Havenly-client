
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slide from '../../images/slide2.jpg';
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
        
        className="mySwiperrrr"
      >
        <SwiperSlide>
          <img src={slide} alt="" />
          <div className="slideContent">
            <h2 className="text-3xl md:text-sm font-bold mb-3 ">WELCOME TO OUR HOUSE RENT</h2>
            <p className="text-xl sm:text-sm ">Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet, nisl imperdiet nec ad morbi, sodales ipsum, consequat purus vitae integer maecenas. Arcu sit, sit velit at ut eu phasellus, tincidunt risus risus scelerisque donec, euismod mollis sit elementum lobortis fermentum lacus.</p>
           <div className="mt-5 slideBtn">
           <button className="bg-secondary px-8 py-3 mr-3">Property</button>
            <button className="bg-primary px-8 py-3">Contact Us</button>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="" />
          <div className="slideContent">
            <h2 className="text-3xl font-bold mb-3 ">WELCOME TO OUR HOUSE RENT</h2>
            <p className="text-xl ">Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet, nisl imperdiet nec ad morbi, sodales ipsum, consequat purus vitae integer maecenas. Arcu sit, sit velit at ut eu phasellus, tincidunt risus risus scelerisque donec, euismod mollis sit elementum lobortis fermentum lacus.</p>
           <div className="mt-5">
           <button className="bg-secondary px-8 py-3 mr-3">Property</button>
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