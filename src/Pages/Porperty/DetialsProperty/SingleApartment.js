import React, { useContext, useEffect, useState } from 'react';
import property from '../../../images/property10.jpg';
import property2 from '../../../images/property12.jpg';
import property3 from '../../../images/property13.jpg';
import property4 from '../../../images/property14.jpg';
import latest from '../../../images/latest.jpg';
import latest2 from '../../../images/latest2.jpg';
import latest3 from '../../../images/latest3.jpg';
import latest4 from '../../../images/latest4.jpg';
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
import { HiCheck, HiOutlineAnnotation } from "react-icons/hi";
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import ReportedModal from '../ReportedModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUploadData } from '../../../app/features/uploadDataSlice';


const SingleApartment = () => {
  const [owner, setOwner] = useState([])

  const { user } = useContext(AuthContext);
  const details = useLoaderData();

  const { address, bathrooms, bedrooms, category,
    city, contact, country, description, img1, seller_img, seller_name, seller_email,
    img2, img3, price, sqft, status, year, zip, date,
    _id } = details;

  const [added, setAdded] = useState(false);

  // get data with redux and show the recently uploaded image in the Right side
  const uploadDatas = useSelector((state) => (state.uploadData.uploadData));
  console.log(uploadDatas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUploadData())
  }, [])




  const handleWishList = id => {
    localStorage.setItem('addedToWishlist', 'true');
    setAdded(true);
    const wishData = {
      userName: user?.displayName,
      email: user?.email,
      propertyId: id,
      seller_name,
      seller_img,
      address,
      img1,
      img2,
      category,
      country,
      price,
      description,
      date,
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
      });
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

                <Link to={`/payment/${_id}`}><button className='btn btn-sm mx-2 btn-secondary'>Book Now</button></Link>
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
            <div>
              <h2>Reported items</h2>
              <label htmlFor="booking-modal">
                <HiOutlineAnnotation className='text-2xl'>Report</HiOutlineAnnotation>
              </label>

            </div>


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
          <ReportedModal></ReportedModal>


        </div>




        {/* Right side */}
        <div className="detialsPropertyRight">
          <h2 className='propertyHeadline text-2xl text-[#004274] '> Contact Listing Owner </h2>
          <div className="">
            <div className="jonDetails">
              <img className='mr-5 h-20 w-20 rounded-full' src={seller_img} alt="" />
              <div className=''>
                <h3 className='text-[#004274] text-2xl font-bold '>{seller_name} </h3>
                <a href="#a" className='my-3 underline block'>Vew Website </a>
                <div className='socialIcons'>
                  <a href="#b"> <FaFacebook></FaFacebook> </a>
                  <a href="#c"> <FaLinkedinIn></FaLinkedinIn> </a>
                  <a href="#d"> <FaInstagramSquare></FaInstagramSquare> </a>
                </div>
              </div>
            </div>
          </div>
          <p className='mt-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumt site be doloremque laudantium.</p>

          <div className="listingHead">
            <h2 className='propertyHeadline text-2xl text-[#004274] '> Latest Listings </h2>
            {
              uploadDatas?.map(data => <div className="latestListings" data={data} key={data._id}>
                {/* <img src={latest} alt="" />  */}
                <img src={data.img1} alt="" className='w-[100px] h-[100px] rounded-md' />
                <div>

                  <h3 className='font-bold text-[#004274]'>Ready Resort for Sell</h3>
                  <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> {data.city} </div>
                  <div className='text-[#004274]'>${data.price}/ yr </div>
                </div>
              </div>)
            }

            {/* <div className="latestListings">
              <img src={latest} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Ready Resort for Sell</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> New Jersey </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div> */}
            {/* <div className="latestListings">
              <img src={latest2} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Apartment For Sale</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> Home Town </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div> */}
            {/* <div className="latestListings">
              <img src={latest3} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Fortune Condo Town</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span> Zexton Twon </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div> */}
            {/* <div className="latestListings">
              <img src={latest4} alt="" />
              <div>
                <h3 className='font-bold text-[#004274]'>Condo For Rent</h3>
                <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt className='resortDetails'></FaMapMarkerAlt> </span>Water Lilli  </div>
                <div className='text-[#004274]'>$25,235.00 / yr </div>
              </div>
            </div> */}
            {/* <div className="latestListings">
              {/* <img src={latest5} alt="" /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApartment;