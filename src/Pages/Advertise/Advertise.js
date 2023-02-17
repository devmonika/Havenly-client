import React from 'react';
import './Advertise.css';
import { useQuery } from '@tanstack/react-query';
import propertys from '../../images/propery-bg.jpg';
import { FaSistrix } from 'react-icons/fa';
import Loading from '../Shared/Footer/Loading/Loading';
import AdvertiseDetails from './AdvertiseDetails';


const Advertise = () => {

    const { data: properties = [], refetch, isLoading } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/premium/properties`);
            const data = await res.json();
            return data;
        }
    });


    return (

        <div>
                <h2 className='text-center text-4xl font-bold leading-normal mt-4 mb-10'>Apartments</h2>
            {/* card section start here  */}
            {isLoading && <Loading></Loading>}
            <div className="wrapProperty">
                <div className='singleProperty'>
                    <div className='leftSide mr-[16px]'>
                        {
                            properties.map(property => <AdvertiseDetails
                                key={property._id}
                                property={property}
                            ></AdvertiseDetails>)
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Advertise;