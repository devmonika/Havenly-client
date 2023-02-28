import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import SingleUploadApartment from './SingleUploadApartment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RecentlyAdded.css'
import { getUploadData } from '../../app/features/uploadDataSlice';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecentlyAdded = () => {


    //get data with redux
    const uploadDatas = useSelector((state) => (state.uploadData.uploadData));
    console.log(uploadDatas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUploadData())

    }, [])


    return (
        <div>
            <div className="mt-24">
                <div className=''>
                    <h1 className='text-3xl font-bold text-center px-8 lg:px-0 mode:text-white mb-3 '>Recently Uploaded Apartment</h1>
                    <div className=''>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12 mb-24 mx-auto">


                            {
                                uploadDatas?.map(data => <div className="relative mx-auto w-full" data={data} key={data._id}>
                                    <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full ">
                                        <div className="shadow p-4 rounded-lg bg-white ">
                                            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                                                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full ">
                                                    <div className="absolute inset-0 bg-black ">
                                                        <img src={data.img1} alt="home" className='w-full h-full' />
                                                    </div>
                                                </div>




                                            </div>
                                            <div className='flex  text-start mt-3'>
                                                <span><FaStar className='text-[#FF8C35]'></FaStar>   </span>
                                                <span className='ml-2'>5.0 </span>
                                                <span className='ml-2'>(30 Reviews)</span>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-gray-200">
                                                    <img src={data.seller_img} alt="house" class="w-full h-full  rounded-full" />

                                                </div>
                                                <p className="ml-2 line-clamp-1 text-gray-800 ">
                                                    {data.seller_name}
                                                </p>
                                                <div class="ml-2">
                                                    <Link className='bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white font-bold py-2 px-2  rounded' to={`/singleapartment/${data._id}`}> <button >View Details </button></Link>


                                                </div>



                                            </div>




                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>




    );
}


export default RecentlyAdded;