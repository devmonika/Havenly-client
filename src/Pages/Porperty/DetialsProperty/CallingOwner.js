import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarMinus, FaEye, FaInfinity, FaRegHeart, FaLongArrowAltRight, FaFacebook, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";


const CallingOwner = ({details}) => {
    const { address, bathrooms, bedrooms, category,
        city, contact, country, description, img1, seller_img, seller_name, seller_email, img2, img3, price, sqft, status, year, zip, date,
        _id } = details;

        
    return (
        <div>
            <h2 className='propertyHeadline text-2xl text-secondary '> Contact Listing Owner </h2>
          <div className="">
            <div className="jonDetails">
              <img className='mr-5 h-20 w-20 rounded-full' src={seller_img} alt="" />
              <div className=''>
                <h3 className='text-secondary text-2xl font-bold '>{seller_name} </h3>
                <Link to="/seller-about" className='my-3 underline block'>Vew Details </Link>
                <div className='socialIcons'>
                  <a href="#b"> <FaFacebook></FaFacebook> </a>
                  <a href="#c"> <FaLinkedinIn></FaLinkedinIn> </a>
                  <a href="#d"> <FaInstagramSquare></FaInstagramSquare> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CallingOwner;