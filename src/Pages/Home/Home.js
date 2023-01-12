import React from 'react';
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
            </div>
        </HelmetProvider>
       
    );
};

export default Home;