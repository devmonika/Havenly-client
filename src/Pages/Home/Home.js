import React from 'react';
import HouseCards from '../HouseCards/HouseCards';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {siteName}</title>
			</Helmet>
             <div>
                This is home
                <HouseCards></HouseCards>
            </div>
        </HelmetProvider>
        
           
        
    );
};

export default Home;