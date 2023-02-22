import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopulerPlaces from "../PopulerPlacesCard/PopulerPlaces";
import Cta from "../Cta/Cta";
import HouseCards from "../HouseCards/HouseCards";
import Testimonials from "../Testimonials/Testimonials";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import Advertise from "../Advertise/Advertise";
import OurDashboard from "../OurDashboard/OurDashboard";
import Login2 from "../Login/Login2";
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - {siteName}</title>
      </Helmet>
      <div>
        {/* <OurDashboard></OurDashboard> */}
        <Banner></Banner>
        <Login2></Login2>
        <About></About>
        <HouseCards></HouseCards>
        <RecentlyAdded></RecentlyAdded>
        <Cta></Cta>
        {/* <PopulerPlaces></PopulerPlaces> */}
        <Advertise></Advertise>
        <Testimonials></Testimonials>
      </div>
    </HelmetProvider>
  );
};

export default Home;
