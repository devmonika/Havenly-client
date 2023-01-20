import React from 'react';

const AboutDetails = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10'>
            <h2 className='text-center text-8xl font-semibold mb-16 text-primary '>OVERVIEW</h2>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center content-center mx-8'>
                <img src='https://i.ibb.co/GdD9ktf/about-img.jpg' alt="about" className='' />

                {/* about details right side start here*/}
                <div className='flex flex-col justify-center items-center '>
                    <div className='' >
                        <h3 className='text-left text-2xl mb-5 text-primary'>WHO WE ARE!</h3>
                        <h2 className='text-left text-5xl font-semibold mb-10 leading-[60px] text-primary'>
                            30 YEARS OF<br /> LEADERSHIP IN REAL<br /> ESTATE SECTOR
                        </h2>
                        <p className='mb-8 leading-[30px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non numquam</p>
                    </div>


                </div>
                {/* about details right side end here */}
            </div>

                {/* about bottom section start here */}
            <div className='grid gap-8 grid-cols-1 md:grid-cols-4 mt-16 mx-8 text-center'>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>51</h2>
                    <p className='text-3xl text-primary'>COMPLETED <br/> PROJECTS</p>
                </div>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>30</h2>
                    <p className='text-3xl text-primary'>UNDER <br/> CONSTRUCTION</p>
                </div>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>17</h2>
                    <p className='text-3xl text-primary'>PROJECTS <br/> UNDERWAY</p>
                </div>
                <div>
                    <h2 className='text-5xl mb-4 font-semibold text-secondary'>46</h2>
                    <p className='text-3xl text-primary'>JOINT VENTURES <br/> COMPLETED</p>
                </div>

            </div>
        </div>
    );
};

export default AboutDetails;