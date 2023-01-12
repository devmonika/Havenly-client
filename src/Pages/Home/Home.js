import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {siteName}</title>
			</Helmet>
             <div>
                <Testimonials></Testimonials>
            </div>
        </HelmetProvider>
       
    );
};

export default Home;