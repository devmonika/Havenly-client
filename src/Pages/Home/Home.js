import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopulerPlaces from "../PopulerPlacesCard/PopulerPlaces";
import Cta from "../Cta/Cta";
import HouseCards from "../HouseCards/HouseCards";
import Reviews from "../Reviews/Reviews";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - {siteName}</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <About></About>
        <HouseCards></HouseCards>
        <Cta></Cta>
        <PopulerPlaces></PopulerPlaces>
        <Testimonials></Testimonials>
        <Reviews></Reviews>
      </div>
    </HelmetProvider>
  );
};

export default Home;
