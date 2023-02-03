import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopulerPlaces from "../PopulerPlacesCard/PopulerPlaces";
import Cta from "../Cta/Cta";
import HouseCards from "../HouseCards/HouseCards";
import Testimonials from "../Testimonials/Testimonials";
import OurDashboard from "../OurDashboard/OurDashboard";
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - {siteName}</title>
      </Helmet>
      <div>
        <OurDashboard></OurDashboard>
        <Banner></Banner>
        <About></About>
        <HouseCards></HouseCards>
        <Cta></Cta>
        <PopulerPlaces></PopulerPlaces>
        <Testimonials></Testimonials>
      </div>
    </HelmetProvider>
  );
};

export default Home;
