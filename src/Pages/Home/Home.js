import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {siteName}</title>
			</Helmet>
             <div>
               <Banner></Banner>
            </div>
        </HelmetProvider>
       
    );
};

export default Home;