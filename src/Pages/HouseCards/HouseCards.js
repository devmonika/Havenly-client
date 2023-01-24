import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const HouseCards = () => {
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;


        }



    })
    console.log(categories)



    return (
        <div className=" min-h-screen mt-24">
            <p className='text-xl text-primary font-bold text-center mb-4'>Options</p>
            <h1 className='text-4xl font-bold text-center px-8 lg:px-0 mode:text-white'>House For Rent!</h1>

            <div className="max-w-screen-xl mx-auto px-4 pt-16">
                <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">

                    {
                        categories?.map(category => <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0" key={category._id}>
                            <Link className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-secondary">
                                <img src={category.img} className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150" alt='' />
                                <div className="absolute gradient transition duration-500 group-hover:bg-primary group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                                    <div className="h-1/2 relative">
                                        <div className="absolute bottom-0">
                                            <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">{category.categoryName}</h2>
                                        </div>
                                    </div>
                                    <div className="h-1/2">
                                        <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100"> Salvador plans to build a Bitcoin city at the base of a volcano, with the cryptocurrency used to fund the project.</p>
                                        <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-500 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }


                    {/* <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                        <Link className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-secondary">
                            <img src="https://i.postimg.cc/L4GVnjhJ/single-family-home-shutterstock-657279163.jpg" className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150" alt='' />
                            <div className="absolute gradient transition duration-500 group-hover:bg-primary group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                            <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                                <div className="h-1/2 relative">
                                    <div className="absolute bottom-0">
                                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">Single-family home</h2>
                                    </div>
                                </div>
                                <div className="h-1/2">
                                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100"> Salvador plans to build a Bitcoin city at the base of a volcano, with the cryptocurrency used to fund the project.</p>
                                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-500 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                    {/* <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <Link className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-secondary">
                            <img src="https://i.postimg.cc/Kj8CjBYq/low-rise-apartment-shutterstock-282785327.jpg" className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150" alt='' />
                            <div className="absolute gradient transition duration-500 group-hover:bg-primary group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                            <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                                <div className="h-1/2 relative">
                                    <div className="absolute bottom-0">
                                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">Low-rise apartment building</h2>
                                    </div>
                                </div>
                                <div className="h-1/2">
                                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">New homes and buildings in England will be required by law to install electric vehicle charging points from next year.</p>
                                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-500 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                    {/* <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <Link className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-secondary">
                            <img src="https://i.postimg.cc/g28tYNDc/apartment-complex-shutterstock-1100737598.jpg" className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150" alt='' />
                            <div className="absolute gradient transition duration-500 group-hover:bg-primary group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                            <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                                <div className="h-1/2 relative">
                                    <div className="absolute bottom-0">
                                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">Large apartment community</h2>
                                    </div>
                                </div>
                                <div className="h-1/2">
                                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">About six million Sky routers had a significant software bug that could have allowed hackers to take over home networks.</p>
                                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-500 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                    {/* <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <Link className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-secondary">
                            <img src="https://i.postimg.cc/L5GvS1gZ/townhouse-shutterstock-278860256.jpg" className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150" alt='' />
                            <div className="absolute gradient transition duration-500 group-hover:bg-primary group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                            <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                                <div className="h-1/2 relative">
                                    <div className="absolute bottom-0">
                                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">Townhouse</h2>
                                    </div>
                                </div>
                                <div className="h-1/2">
                                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">About six million Sky routers had a significant software bug that could have allowed hackers to take over home networks.</p>
                                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-500 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
            <div className="md:mt-12 mt-20 px-8 lg:px-0 flex justify-center">
                <Link to='/apartments'><button className="text-base font-bold leading-4 text-white bg-secondary sm:w-auto w-full rounded px-4 py-6 focus:outline-none hover:bg-primary hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white">See All Appertments</button></Link>
            </div>
        </div>
    );
};

export default HouseCards;