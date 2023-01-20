import React from 'react';
import propertys from '../../images/propery-bg.jpg';
const AboutDetails = () => {
    return (
       <div>
         <div className="property">
                <img src={propertys} alt="" />
                <div className='propertyContent'>
                    <h2>About Us</h2>
                </div>
            </div>
        <div className='max-w-[1240px] mx-auto my-10'>
            
            <h2 className='text-center text-5xl font-semibold mb-16 text-primary '>Overview</h2>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center content-center mx-8'>
                <img src='https://i.ibb.co/GdD9ktf/about-img.jpg' alt="about" className='' />

                {/* about details right side start here*/}
                <div className='flex flex-col justify-center items-center '>
                    <div className='' >
                        <h3 className='text-xl text-primary font-bold text-left mb-4'>WHO WE ARE!</h3>
                        <h2 className='text-4xl font-bold text-left px-8  mb-5 lg:px-0 mode:text-white'>
                            30 YEARS OF<br /> LEADERSHIP IN REAL<br /> ESTATE SECTOR
                        </h2>
                        <p className='mb-8 leading-[30px]'>Are you searching for house rent in Dhaka?  Renting a house in Dhaka sounds to be a lengthy process. We’ll make that easier for you. Havenly  is the leading online rental platform to help you with any home rental queries. The best thing is you will the best house for rent within your budget. We’ve thousands of latest rental listings covering Uttara, Gulshan, Banani, and Baridhara areas. Whether you are looking for a semi-furnished apartment or a fully furnished apartment, we can assist you in renting both. Some tenants are concerned about the rental agreement. We maintain transparency both for owners and tenants. Overall, our goal is to make the house renting process hassle-free. Still, confused about how to start with? First of all, you should select “Rent” or “Buy” according to your requirements. After that, you can select your preferred areas, and requirements types. Owners can also post listings without any charge. We’ll work on your behalf to find a verified tenant for you. Along with this, we also assist in buying a home in Dhaka. Have you selected a listing? Contact us now to get the owner’s number. Then, you can visit the house to inspect it visually. If everything goes right,</p>
                    </div>


                </div>
                {/* about details right side end here */}
            </div>

                {/* about bottom section start here */}
            <div className='grid gap-8 grid-cols-1 md:grid-cols-4 mt-16 mx-8 text-center'>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>51</h2>
                    <p className='text-2xl text-primary'>COMPLETED <br/> PROJECTS</p>
                </div>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>30</h2>
                    <p className='text-2xl text-primary'>UNDER <br/> CONSTRUCTION</p>
                </div>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>17</h2>
                    <p className='text-2xl text-primary'>PROJECTS <br/> UNDERWAY</p>
                </div>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>46</h2>
                    <p className='text-2xl text-primary'>JOINT VENTURES <br/> COMPLETED</p>
                </div>

            </div>
        </div>
       </div>
    );
};

export default AboutDetails;