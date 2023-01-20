
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slide from '../../images/slide2.jpg';
import slide2 from '../../images/slide1.jpg';
import whateShapp from '../../images/whatshap.jpg'
const Banner = () => {
const WhWidgetSendButton= (text, message)=>{}
    (function () {
        var options = {
            facebook: "100075727662790", // Facebook page ID
            call_to_action: "Message us", // Call to action
            button_color: "#FF6550", // Color of button
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();


  return (
    <div>
      {/* <div className="liveChate"><a href="https://wa.me/01825445033"><img src={whateShapp} alt="" /></a></div> */}
      <div>
        
      </div>
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