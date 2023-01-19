import React from 'react';
import property from '../../../images/property10.jpg';
import property2 from '../../../images/property12.jpg';
import property3 from '../../../images/property13.jpg';
import property4 from '../../../images/property14.jpg';
import latest from '../../../images/latest.jpg';
import latest2 from '../../../images/latest2.jpg';
import latest3 from '../../../images/latest3.jpg';
import latest4 from '../../../images/latest4.jpg';
import latest5 from '../../../images/latest5.jpg';
import jon from '../../../images/jon.jpg';
import tour from '../../../images/tour.jpg';
import map from '../../../images/map.png';
import './DetailsProperty.css'
import { FaMapMarkerAlt,FaCalendarMinus,FaEye,FaInfinity,FaRegHeart,FaLongArrowAltRight,FaFacebook,FaLinkedinIn,FaInstagramSquare } from "react-icons/fa";


const DetailsProperty = () => {
    return (
        <div>
             <div className='propertyTop'>
             <img className='h-full' src={property} alt="" />
             <div className='image_Gallery'>
                <div className='image_Gallery_left'><img src={property2} alt="" /></div>
                <div className="image_Gallery_Right">
                <div><img src={property3} alt="" /></div>
                <div><img src={property4} alt="" /></div>
                </div>
             </div>
             </div>
           <div className='detailsProperty'>
                <div className="detailsPropertyLeft">
                <div className="topDetialsProperty">
                <div className="detailsLeft">
                 <h2 className='text-3xl mb-5 font-bold text-[#004274]'>Ready Resort For Sell </h2>
                   <div className='detailsIcons'>
                        <div> <span className='text-[#206497]'><FaMapMarkerAlt></FaMapMarkerAlt> </span> My gew location </div>
                        <div> <span><FaCalendarMinus></FaCalendarMinus></span> July 2,2022 </div>
                        <div> <span><FaEye></FaEye></span> Review: 240 </div>
                   </div>
                 </div>
                 <div className="detialsPrice">
                    <h3 className='text-[#004274] text-3xl'>$327500</h3>
                    <div className="priceIcons">
                       <span> <FaInfinity></FaInfinity> </span>
                    <span> <FaRegHeart></FaRegHeart> </span>
                    <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                   </div>
                 </div>
                </div>
                <div className="detailsPropertyAbout mt-16">
                  <h2 className='propertyHeadline text-3xl text-[#004274] '>About This Listing</h2>
                  <p className='mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                  <h2 className='propertyHeadline text-3xl text-[#004274] '>Property Type</h2>                  
                  <table>
                  <tr>
                    <td>Property ID:</td>
                    <td>HZ29</td>
                    <td>Home Area:</td>
                    <td>120 sqft</td>
                  </tr>
                  <tr>
                    <td> Practice Area :</td>
                    <td>USA</td>
                    <td>Lot dimensions</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Baths:</td>
                    <td>220 sqft</td>
                    <td>Beds:</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>Year built:</td>
                    <td>1852s</td>
                    <td>Price </td>
                    <td>$25,235.00</td>
                  </tr>
                </table>
                <h2 className='propertyHeadline text-3xl text-[#004274] '>Amenities</h2>
                <div className="anemities">
                  <div>
                    <span> <span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Tve Cable</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Air Conditioning</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Barbeque</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Gym</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Washer</span>
                  </div>
                </div>
                <div className="anemities mt-5">
                  <div>
                    <span> <span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Sauna</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Microwave</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Outdoor Shower</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Laundry</span>
                    <span><span><FaLongArrowAltRight className='icons'></FaLongArrowAltRight></span> Swimming Pool</span>
                  </div>
                </div>
                <div className="location mt-5">
                <h2 className='propertyHeadline text-2xl text-[#004274] '> Locations </h2> 
                <img src={map} alt="map" />
                </div>
              
                <div className="Tours mt-5">
                <h2 className='propertyHeadline text-2xl text-[#004274] '> 360 Virtual Tour </h2> 
                <img src={tour} alt="" />
                </div>
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
                    <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt  className='resortDetails'></FaMapMarkerAlt> </span> New Jersey </div>
                    <div className='text-[#004274]'>$25,235.00 / yr </div>
                  </div>
                </div>
                <div className="latestListings">
                  <img src={latest2} alt="" />
                  <div>
                    <h3 className='font-bold text-[#004274]'>Apartment For Sale</h3>
                    <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt  className='resortDetails'></FaMapMarkerAlt> </span> Home Town </div>
                    <div className='text-[#004274]'>$25,235.00 / yr </div>
                  </div>
                </div>
                <div className="latestListings">
                  <img src={latest3} alt="" />
                  <div>
                    <h3 className='font-bold text-[#004274]'>Fortune Condo Town</h3>
                    <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt  className='resortDetails'></FaMapMarkerAlt> </span> Zexton Twon </div>
                    <div className='text-[#004274]'>$25,235.00 / yr </div>
                  </div>
                </div>
                <div className="latestListings">
                  <img src={latest4} alt="" />
                  <div>
                    <h3 className='font-bold text-[#004274]'>Condo For Rent</h3>
                    <div className='my-3 text-[#004274]'> <span> <FaMapMarkerAlt  className='resortDetails'></FaMapMarkerAlt> </span>Water Lilli  </div>
                    <div className='text-[#004274]'>$25,235.00 / yr </div>
                  </div>
                </div>
                <div className="latestListings">
                  <img src={latest5} alt="" />
                </div>
                </div>
                </div>
           </div>
        </div>
    );
};

export default DetailsProperty;