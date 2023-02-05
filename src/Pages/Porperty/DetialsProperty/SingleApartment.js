import React, { useContext, useState } from 'react';
import property from '../../../images/property10.jpg';
import property2 from '../../../images/property12.jpg';
import property3 from '../../../images/property13.jpg';
import property4 from '../../../images/property14.jpg';
import latest from '../../../images/latest.jpg';
import latest2 from '../../../images/latest2.jpg';
import latest3 from '../../../images/latest3.jpg';
import latest4 from '../../../images/latest4.jpg';
import latest5 from '../../../images/latest5.jpg';
import slide from '../../../images/1.jpg';
import slide2 from '../../../images/2.jpg';
import slide3 from '../../../images/3.jpg';
import slide4 from '../../../images/4.jpg';
import slide5 from '../../../images/5.jpg';
import slide6 from '../../../images/6.jpg';
import slide7 from '../../../images/7.jpg';
import slide8 from '../../../images/8.jpg';
import slide9 from '../../../images/9.jpg';
import slide10 from '../../../images/10.jpg';
import jon from '../../../images/jon.jpg';
import tour from '../../../images/tour.jpg';
import map from '../../../images/map.png';
import './DetailsProperty.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FaMapMarkerAlt, FaCalendarMinus, FaEye, FaInfinity, FaRegHeart, FaLongArrowAltRight, FaFacebook, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';


const SingleApartment = () => {
  const { user } = useContext(AuthContext);
  const { address, bathrooms, bedrooms, category,
    city, contact, country, description, img1,
    img2, img3, price, sqft, status, year, zip, date,
    _id } = useLoaderData();

  const [added, setAdded] = useState(false);

  // const handleClick = () => {
    
  // };

  const handleWishList = id => {
    setAdded(true);
    const wishData = {
      userName: user?.displayName,
      email: user?.email,
      propertyId: id,
      address,
      img1,
      category,
      country,
      price,
      added
    };

    console.log(wishData);

    fetch("https://havenly-server-new.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(wishData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added to wishlist");
        }
        else {
          toast.error(data.message);
        }
      })
  }

  return (
    <div>
      <div className='propertyTop'>
        <img className='fullHeight' src={img1} alt="" />
        <div className=''>

          <div className="slider-img">

            <>
              <Swiper

                slidesPerView={4}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                }}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img1} alt="" />
                </SwiperSlide>

              </Swiper>
            </>

          </div>
        </div>
      </div>
      <div className='detailsProperty'>
        <div className="detailsPropertyLeft">
          <div className="topDetialsProperty">
            <div className="detailsLeft">
              <h2 className='text-3xl mb-5 font-bold text-[#004274]'>{status} </h2>
              <div className='detailsIcons'>
                <div> <span><FaCalendarMinus></FaCalendarMinus></span> July 2,2022 </div>
                <div> <span><FaEye></FaEye></span> Review: 240 </div>
                <div><span><FaMapMarkerAlt></FaMapMarkerAlt></span>{address}</div>

              </div>
            </div>
            <div className="detialsPrice">
              <h3 className='text-[#004274] text-3xl'>${price}</h3>
              <div className="priceIcons">
                <span> <FaInfinity></FaInfinity> </span>
                {added ? (
                  <button><span> <HiCheck className='text-green-700'></HiCheck> </span></button>
                ) : (
                  <button onClick={() => handleWishList(_id)}><span> <FaRegHeart></FaRegHeart> </span></button>
                )}
              </div>
            </div>
          </div>
          <div className="detailsPropertyAbout mt-16">
            <h2 className='propertyHeadline text-3xl text-[#004274] '>About This Listing</h2>
            <p>{description}</p>
            <h2 className='propertyHeadline mt-5 text-3xl text-[#004274] '>Property Type</h2>
            <table>
              <tr>
                <td>Property ID:</td>
                <td>HZ29</td>
                <td>Home Area:</td>
                <td>{sqft} sqft</td>
              </tr>
              <tr>
                <td> Apartment Area :</td>
                <td>{country}</td>
                <td>Lot dimensions</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Baths:</td>
                <td>{bathrooms}</td>
                <td>Beds:</td>
                <td>{bedrooms}</td>
              </tr>
              <tr>
                <td>Year built:</td>
                <td>{year}</td>
                <td>Price </td>
                <td>${price}</td>
              </tr>
            </table>

            {/* <div className="location mt-5">
              <h2 className='propertyHeadline text-2xl text-[#004274] '> Locations </h2>
              <img src={map} alt="map" />
            </div> */}
            {/*               
                <div className="Tours mt-5">
                <h2 className='propertyHeadline text-2xl text-[#004274] '> 360 Virtual Tour </h2> 
                <img src={tour} alt="" />
                </div> */}
          </div>
        </div>
        <div className="detialsPropertyRight">
          <h2 className='propertyHeadline text-2xl text-[#004274] '> Contact Listing Owner </h2>
          <div className="">
            <div className="jonDetails">
              <img className='mr-5' src={jon} alt="" />
              <div className=''>
                <h3 className='text-[#004274] text-2xl font-bold '>Jane Cooper </h3>
                <a href="" className='my-3 underline block'>Vew Website </a>
                <div className='socialIcons'>
                  <a href=""> <FaFacebook></FaFacebook> </a>
                  <a href=""> <FaLinkedinIn></FaLinkedinIn> </a>
                  <a href=""> <FaInstagramSquare></FaInstagramSquare> </a>
                </div>
              </div>
            </div>
          </div>
          <p className='mt-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumt site be doloremque laudantium.</p>

          <div className="listingHead">
            <h2 className='propertyHeadline text-2xl text-[#004274] '> Latest Listings </h2>
            <div className="latestListings">
              <img src={latest} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Ready Resort for Sell</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> New Jersey </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div>
            <div className="latestListings">
              <img src={latest2} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Apartment For Sale</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> Home Town </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div>
            <div className="latestListings">
              <img src={latest3} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Fortune Condo Town</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> Zexton Twon </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div>
            <div className="latestListings">
              <img src={latest4} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Condo For Rent</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span>Water Lilli  </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div>
            {/* <div className="latestListings">
              <img src={latest5} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApartment;