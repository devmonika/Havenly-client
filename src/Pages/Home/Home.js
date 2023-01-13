import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import About from '../About/About';
import HouseCards from '../HouseCards/HouseCards';
import Testimonials from '../Testimonials/Testimonials';
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
                <Testimonials></Testimonials>

                
            </div>
        </HelmetProvider>
       
        
           
        
    );
};

export default Home;