import React from 'react';
import { useContext } from 'react';
import { FaArrowRight, FaBed, FaBorderNone, FaCarSide, FaFileImage, FaHeart, FaMapMarkerAlt, FaRegEye, FaStar, FaWarehouse } from 'react-icons/fa'; import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AdvertiseDetails = ({ property }) => {

    const { user } = useContext(AuthContext)
    const { address, bathrooms, bedrooms, category,
        city, contact, country, desdcription, img1,
        img2, img3, price, sqft, status, year, zip, date,
        seller_img, _id } = property;
    // console.log(property)


    return (
        <div className='propertyCard '>
            <div className='propertyCardImgIcons'>
                <img src={img1} alt="" className='h-[220px] w-[100%]' />
                <ul className="propertyIcons">
                    <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                    <li><a href="#"><FaHeart></FaHeart></a></li>
                    <li><a href="#"><FaFileImage></FaFileImage></a></li>
                    <li><a href="#"><FaRegEye></FaRegEye></a></li>
                    {/* <li><a href="#"><FaCarSide></FaCarSide></a></li> */}
                </ul>

            </div>
            <div className="propertyPrice px-5 ">
                <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>${price}</span>
            </div>

            <div className='peroperyCardContent mt-5'>
                <div className='singleContent'>
                    <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                    <span>5.0 </span>
                    <span>(30 Reviews)</span>
                </div>
                <button className='bg-[#004274] text-white px-3 rounded py-1'>{category}</button>
            </div>
            <h2 className='my-3 text-xl font-bold text-[#004274] headlineSingleContent'>{status} </h2>
            <div className='propertySpace'>
                <span title='bathrooms'><FaWarehouse></FaWarehouse></span>
                <span>{bathrooms}</span>
                <span title='bedroom'><FaBed></FaBed></span>
                <span>{bedrooms}</span>
                <span><FaBorderNone></FaBorderNone></span>
                <span>{sqft} </span>
                {/* <span><FaCarSide></FaCarSide></span>
            <span>03</span> */}

            </div>
            <div className='reviews mt-5'>
                <div className='flex'>
                    <img src={seller_img} alt="" className='w-[100px] h=[200px]' />
                    <span className='mt-5'>Ibrahim Sikder</span>
                </div>
                <div className='mt-5 viewDetails'>
                    <Link to={`/singleapartment/${_id}`}> <span>View Details </span> </Link>
                    <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                </div>
            </div>

        </div>
    );
};

export default AdvertiseDetails;