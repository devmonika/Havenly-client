// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slide from "../../images/slide2.jpg";
import slide2 from "../../images/slide1.jpg";
import slider from "../../images/5.jpg";
import slide3 from "../../images/slider3.jpg";
import slide4 from "../../images/slider4.jpg";
import whateShapp from "../../images/whatshap.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      {/* <div className="liveChate"><a href="https://wa.me/01825445033"><img src={whateShapp} alt="" /></a></div> */}
      <div></div>
      <>
        <Swiper
          loop={true}
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate.
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl font-bold mb-3 ">WELCOME TO HAVENLY!</h2>
              <p className="text-xl ">
                Where You can rent your prefer houses at budget friendly rate.
              </p>
              <div className="mt-5">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                <Link to="/contactus"><button className="bg-primary px-8 py-3 ">Contact Us</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl font-bold mb-3 ">WELCOME TO HAVENLY!</h2>
              <p className="text-xl ">
                Where You can rent your prefer houses at budget friendly rate.
              </p>
              <div className="mt-5">
                <button className="bg-secondary px-8 py-3 mr-3">
                  Apartments
                </button>
                {/* <button className="bg-primary px-8 py-3">Contact Us</button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl font-bold mb-3 ">WELCOME TO HAVENLY!</h2>
              <p className="text-xl ">
                Where You can rent your prefer houses at budget friendly rate.
              </p>
              <div className="mt-5">
                <button className="bg-secondary px-8 py-3 mr-3">
                  Apartments
                </button>
                {/* <button className="bg-primary px-8 py-3">Contact Us</button> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
