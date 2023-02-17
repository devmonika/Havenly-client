import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import SingleUploadApartment from './SingleUploadApartment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUploadData } from '../../app/features/uploadDataSlice';

const RecentlyAdded = () => {


    //get data with redux
    const uploadDatas = useSelector((state) => (state.uploadData.uploadData));
    // console.log(uploadDatas);

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


                        {
                            uploadDatas?.map(single => <SingleUploadApartment
                                key={single._id}
                                single={single}
                            ></SingleUploadApartment>)
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;