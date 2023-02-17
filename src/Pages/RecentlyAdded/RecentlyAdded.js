import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import SingleUploadApartment from './SingleUploadApartment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUploadData } from '../../app/features/uploadDataSlice';
import { FaStar } from 'react-icons/fa';

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
            <div className="wrapProperty">
                <div className='singleProperty'>
                    <h1 className='text-4xl font-bold text-center px-8 lg:px-0 mode:text-white mb-3 '>Recently Uploaded Apartment</h1>
                    <div className='leftSide mr-[16px]'>
                        <h2 className='text-center text-2xl mb-4'>Recently Uploaded Apartment</h2>
                        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8 max-w-screen-xl mx-auto px-4  '>
                            {
                                uploadDatas?.map(data => <div className="card w-96 glass " data={data}
                                    key={data._id}
                                >
                                    <figure className=''>
                                        <img src={data.img1} alt="car!" className='w-full h-[250px]' />
                                    </figure>
                                    <h2 className='mt-4 mb-0 ml-2 text-2xl'>House {data.status}</h2>
                                    <div className="card-body">
                                        <div className='flex  text-start '>
                                            <span><FaStar className='text-[#FF8C35]'></FaStar>   </span>
                                            <span className='ml-2'>5.0 </span>
                                            <span className='ml-2'>(30 Reviews)</span>
                                        </div>
                                        <div className="card-actions justify-start">
                                            <div className='flex justify-center items-center '>
                                                <figure>
                                                    <img src={data.seller_img
                                                    } alt="car!" className='w-[50px] h-[50px] rounded-[50%]' />
                                                </figure>
                                                <h2 className='ml-4'>{data.seller_name
                                                }</h2>
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