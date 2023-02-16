// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Autoplay, Navigation } from "swiper";
import slide from "../../images/04.jpg";
import slider from "../../images/01.jpg";
import slide4 from "../../images/05.jpg";
import slide5 from "../../images/03.jpg";
import slide6 from "../../images/07.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="banner">
      {/* <div className="liveChate"><a href="https://wa.me/01825445033"><img src={whateShapp} alt="" /></a></div> */}
      <div></div>
      <>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
          }}
          
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="" />
            <div className="slideContent">
              <h2 className="text-3xl md:text-sm font-bold mb-3 ">
                WELCOME TO <span>HAVENLY!</span>
              </h2>
              <p className="text-xl sm:text-sm ">
                Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
              </p>
              <div className="mt-5 slideBtn">
              <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
                {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
