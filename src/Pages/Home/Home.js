import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import Banner from '../Banner/Banner';
import DisplayProperty from '../Porperty/DisplayProperty';
import Property from '../Porperty/Property';
const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {siteName}</title>
			</Helmet>
             <div>
               <Property></Property>
               <DisplayProperty></DisplayProperty>
            </div>
        </HelmetProvider>
       
    );
};

export default Home;