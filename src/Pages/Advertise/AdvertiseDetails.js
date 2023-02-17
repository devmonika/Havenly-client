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
            {/* <div className="propertyPrice px-5 ">
                <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>${price}</span>
            </div> */}

            <div className='peroperyCardContent mt-5'>
                <div className='singleContent'>
                    <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                    <span>5.0 </span>
                    <span>(30 Reviews)</span>
                
                </div>
                <span className=' px-3 rounded py-1'>{category}</span>
                
            </div>
            <div className='p-price bg-[#FF8C35] text-white text-center w-20 py-1 rounded font-bold px-3'><span className='text-center'>${price} </span></div>
            <h2 className='my-3 text-xl font-bold text-secondary headlineSingleContent'>{status} </h2>
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
                    <img src={seller_img} alt="" className='' />
                    <span className='my-3 mx-2'>Ibrahim Sikder</span>
                </div>
                <div className='my-3 viewDetails flex'>
                    <Link className='bg-secondary text-white px-3 py-2 rounded' to={`/singleapartment/${_id}`}> <button > Details </button></Link>
                    {/* <span className='mt-1 ml-2'><FaArrowRight></FaArrowRight></span> */}
                </div>
            </div>

        </div>
    );
};

export default AdvertiseDetails;