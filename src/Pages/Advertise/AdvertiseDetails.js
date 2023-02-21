import React from 'react';
import { useContext } from 'react';
import { FaArrowRight, FaBath, FaBed, FaBorderNone, FaCar, FaCarSide, FaFileImage, FaHeart, FaMapMarkerAlt, FaRegEye, FaStar, FaWarehouse } from 'react-icons/fa'; import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AdvertiseDetails = ({ property }) => {

    const { user } = useContext(AuthContext)
    const { address, bathrooms, bedrooms, category,
        city, contact, country, desdcription, img1,
        img2, img3, price, sqft, status, year, zip, date,
        seller_img, _id, seller_name } = property;
    // console.log(property)


    return (
        // <div className='propertyCard '>
        //     <div className='propertyCardImgIcons'>
        //         <img src={img1} alt="" className='h-[220px] w-[100%]' />
        //         <ul className="propertyIcons">
        //             <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
        //             <li><a href="#"><FaHeart></FaHeart></a></li>
        //             <li><a href="#"><FaFileImage></FaFileImage></a></li>
        //             <li><a href="#"><FaRegEye></FaRegEye></a></li>
        //             {/* <li><a href="#"><FaCarSide></FaCarSide></a></li> */}
        //         </ul>

        //     </div>
        //     {/* <div className="propertyPrice px-5 ">
        //         <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>${price}</span>
        //     </div> */}

        //     <div className='peroperyCardContent mt-5'>
        //         <div className='singleContent'>
        //             <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
        //             <span>5.0 </span>
        //             <span>(30 Reviews)</span>
                
        //         </div>
        //         <span className=' px-3 rounded py-1'>{category}</span>
                
        //     </div>
        //     <div className='p-price bg-[#FF8C35] text-white text-center w-20 py-1 rounded font-bold px-3'><span className='text-center'>${price} </span></div>
        //     <h2 className='my-3 text-xl font-bold text-secondary headlineSingleContent'>{status} </h2>
        //     <div className='propertySpace'>
        //         <span title='bathrooms'><FaWarehouse></FaWarehouse></span>
        //         <span>{bathrooms}</span>
        //         <span title='bedroom'><FaBed></FaBed></span>
        //         <span>{bedrooms}</span>
        //         <span><FaBorderNone></FaBorderNone></span>
        //         <span>{sqft} </span>
        //         {/* <span><FaCarSide></FaCarSide></span>
        //     <span>03</span> */}

        //     </div>
        //     <div className='reviews mt-5'>
        //         <div className='flex'>
        //             <img src={seller_img} alt="" className='' />
        //             <span className='my-3 mx-2'>Ibrahim Sikder</span>
        //         </div>
        //         <div className='my-3 viewDetails flex'>
        //             <Link className='bg-secondary text-white px-3 py-2 rounded' to={`/singleapartment/${_id}`}> <button > Details </button></Link>
        //             {/* <span className='mt-1 ml-2'><FaArrowRight></FaArrowRight></span> */}
        //         </div>
        //     </div>

        // </div>

        <div className="relative mx-auto w-full">
        <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
                <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full ">
                        <div className="absolute inset-0 bg-black ">
                            <img src={img1} alt="home" className='w-full h-full' />
                        </div>
                    </div>

                    <div className="absolute flex justify-center bottom-0 mb-3">
                        <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                            <p className="flex items-center font-medium text-gray-800">

                               <FaBed></FaBed><span className='ml-1'>{bedrooms}</span>
                            </p>

                            <p className="flex items-center font-medium text-gray-800">
                                
                               <FaCar></FaCar><span className='ml-1'>{bedrooms}</span>
                            </p>

                            <p className="flex items-center font-medium text-gray-800">
                               
                               <FaBath></FaBath><span className='ml-1'>{bathrooms}</span>
                            </p>
                        </div>
                    </div>

                    <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                        Featured
                    </span>
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-8">
                    {/* <p className="inline-flex flex-col xl:flex-row xl:items-center">
                        
                        <span className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 text-[#FF8C35]"><FaStar></FaStar></span>
                        <span className="mt-2 xl:mt-0">
                           5.0 (Reviews 30)
                        </span>
                    </p> */}
                    <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                        {category}
                    </h2>
                    <p className="inline-flex flex-col xl:flex-row items-end justify-end">
                        <span className="xl:mt-0 text-lg font-semibold">
                            $ {price}
                        </span>
                    </p>
                   
                </div>

                <div className="mt-3 grid grid-cols-2 grid-rows-1 gap-4 ">
                    <p className="mt-2 text-sm text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
                    {city}, {country}
                    </p>
                   
                    <div className='inline-flex flex-col xl:flex-row items-end justify-end'>
                    {
                         property?.isVerified?
                         <button className="btn btn-xs btn-info">Verified</button>
                         :                                 
                         <button className="btn btn-xs btn-info" disabled>Verified</button>  
                         
                    }
                    </div>
                </div>


                <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-gray-200">
                            <img src={seller_img} alt="home" className='w-full h-full  rounded-full ' />
                            </div>
                            {/* <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"><img src={seller_img} alt="home" /></span> */}
                        </div>

                        <p className="ml-2 line-clamp-1 text-gray-800 uppercase">
                            {seller_name}
                        </p>
                    </div>

                    <div className="flex justify-end">
                       
                    <Link className='bg-secondary text-white px-3 py-2 rounded' to={`/singleapartment/${_id}`}> <button >View Details </button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AdvertiseDetails;