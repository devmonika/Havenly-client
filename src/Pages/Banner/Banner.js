// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";
import slider from "../../images/01.jpg";
import slider2 from "../../images/02.jpeg";
import slider3 from "../../images/03.jpg";
import slider4 from "../../images/04.jpg";
import slider5 from "../../images/05.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    // <div className="banner">
    //   {/* <div className="liveChate"><a href="https://wa.me/01825445033"><img src={whateShapp} alt="" /></a></div> */}
    //   <div></div>
    //   <>
    //     <Swiper
    //       loop={true}
    //       autoplay={{
    //         delay: 2000,
    //         disableOnInteraction: false,
    //       }}
    //       slidesPerView={1}
    //       pagination={{
    //         el: ".swiper-pagination",
    //       }}

    //     modules={[Autoplay, Pagination, Navigation]}
    //     onAutoplayTimeLeft={onAutoplayTimeLeft}
    //     className="mySwiper"
    //     >
    //       <SwiperSlide>
    //         <img src={slide} alt="" />
    //         <div className="slideContent">
    //           <h2 className="text-3xl md:text-sm font-bold mb-3 ">
    //             WELCOME TO <span>HAVENLY!</span>
    //           </h2>
    //           <p className="text-xl sm:text-sm ">
    //             Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
    //           </p>
    //           <div className="mt-5 slideBtn">
    //           <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
    //             {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src={slide} alt="" />
    //         <div className="slideContent">
    //           <h2 className="text-3xl md:text-sm font-bold mb-3 ">
    //             WELCOME TO <span>HAVENLY!</span>
    //           </h2>
    //           <p className="text-xl sm:text-sm ">
    //             Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
    //           </p>
    //           <div className="mt-5 slideBtn">
    //           <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
    //             {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src={slider} alt="" />
    //         <div className="slideContent">
    //           <h2 className="text-3xl md:text-sm font-bold mb-3 ">
    //             WELCOME TO <span>HAVENLY!</span>
    //           </h2>
    //           <p className="text-xl sm:text-sm ">
    //             Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
    //           </p>
    //           <div className="mt-5 slideBtn">
    //           <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
    //             {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src={slide4} alt="" />
    //         <div className="slideContent">
    //           <h2 className="text-3xl md:text-sm font-bold mb-3 ">
    //             WELCOME TO <span>HAVENLY!</span>
    //           </h2>
    //           <p className="text-xl sm:text-sm ">
    //             Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
    //           </p>
    //           <div className="mt-5 slideBtn">
    //           <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
    //             {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src={slide5} alt="" />
    //         <div className="slideContent">
    //           <h2 className="text-3xl md:text-sm font-bold mb-3 ">
    //             WELCOME TO <span>HAVENLY!</span>
    //           </h2>
    //           <p className="text-xl sm:text-sm ">
    //             Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
    //           </p>
    //           <div className="mt-5 slideBtn">
    //           <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
    //             {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src={slide6} alt="" />
    //         <div className="slideContent">
    //           <h2 className="text-3xl md:text-sm font-bold mb-3 ">
    //             WELCOME TO <span>HAVENLY!</span>
    //           </h2>
    //           <p className="text-xl sm:text-sm ">
    //             Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today!<br/> Discover a Wide Range of Rentals to Suit Your Needs
    //           </p>
    //           <div className="mt-5 slideBtn">
    //           <Link to="/apartments"><button className="bg-secondary px-8 py-3 mr-3">Apartments</button></Link>
    //             {/* <Link to="/contactus"><button className="bg-primary px-8 py-3">Contact Us</button></Link> */}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     </Swiper>
    //   </>
    // </div>
    <div className="banner">
      <img src={slider} alt="slider" />
      <img src={slider2} alt="slider" />
      <img src={slider3} alt="slider" />
      <img src={slider4} alt="slider" />
      <img src={slider5} alt="slider" />
      <div className="bannerContent text-white center ">
        <h2 className="text-white font-bold text-3xl mb-3 uppercase text-center ">
          Welcome to havenly !
        </h2>
        <p className="text-xl text-center leading-8 w-full ">
          Where You can rent your prefer houses at budget friendly rate. Find
          Your Dream Home Today ! <br className="break" />
          Discover a Wide Range of Rentals to Suit Your Needs
        </p>
        <Link to="/apartments">
          <button className="hover:bg-secondary ease-in-out bg-[#161C2D] text-center center px-8 font-bold text-xl py-3 mt-3 ">
            Apartments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
