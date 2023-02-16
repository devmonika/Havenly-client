import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopulerPlaces from "../PopulerPlacesCard/PopulerPlaces";
import Cta from "../Cta/Cta";
import HouseCards from "../HouseCards/HouseCards";
import Testimonials from "../Testimonials/Testimonials";
<<<<<<< HEAD
import Advertise from "../Advertise/Advertise";
=======
import OurDashboard from "../OurDashboard/OurDashboard";
>>>>>>> d7f546ec131678e2b3405d2b017c2d1aaa7693b0
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - {siteName}</title>
      </Helmet>
      <div>
        {/* <OurDashboard></OurDashboard> */}
        {/* <Banner></Banner> */}
        <About></About>
        <HouseCards></HouseCards>
        <Cta></Cta>
        <PopulerPlaces></PopulerPlaces>
        <Advertise></Advertise>
        <Testimonials></Testimonials>
      </div>
    </HelmetProvider>
  );
};

export default Home;
