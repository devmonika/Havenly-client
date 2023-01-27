import React from 'react';
import './Property.css';
import propertys from '../../images/propery-bg.jpg';
import property1 from '../../images/property.jpg';
import property from '../../images/property.jpg';
import property2 from '../../images/property2.jpg';
import property3 from '../../images/property3.jpg';
import property4 from '../../images/property4.jpg';
import property5 from '../../images/property5.jpg';
import property6 from '../../images/property6.jpg';
import property7 from '../../images/property7.jpg';
import property8 from '../../images/property8.jpg';
import property9 from '../../images/property9.jpg';
import ibrahim from '../../images/ibrahim.png';
import { FaStar,FaFileImage, FaWarehouse, FaBed, FaCarSide,FaSistrix, FaBorderNone, FaArrowRight, FaMapMarkerAlt, FaRegEye, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';


const Property = () => {
   
    return (
      <HelmetProvider>
        <Helmet>
            <title>Apertments - {siteName}</title>
        </Helmet>
        <div className='mb-5'>
            <div className="property">
                <img src={propertys} alt="" />
                <div className='propertyContent'>
                    <h2>Apartments</h2>
                </div>
            </div>
         
            <div className="relative mb-10 mt-16 searchWrap">
                <div className='search'>
                  <FaSistrix/>
                </div>
                <form className='searchProperty'>
                   <input className='' type="text" placeholder='Search Category'/>
                  
                   <select name="" id="">
                    <option value="">Category</option>
                    <option value="">Category</option>
                    <option value="">Category</option>
                   </select>
                   
                </form>
            </div> 
            <div className="wrapProperty">
           <div className='singleProperty'>
                <div className='leftSide mr-[16px]'>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274] headlineSingleContent'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property4} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property2} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property3} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property4} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property5} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property6} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property9} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaFileImage></FaFileImage></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaCarSide></FaCarSide></a></li>
                      </ul>
                      </div>
                      <div className="propertyPrice px-5 ">
                        <span className='bg-[#FF8C35] text-white text-center py-2 rounded font-bold px-3'>$25,35,559.00</span>
                      </div>
                      <div className='peroperyCardContent mt-5'>
                       <div className='singleContent'>
                        <span><FaStar className='text-[#FF8C35]'></FaStar> </span>
                       <span>5.0 </span> 
                       <span>(30 Reviews)</span>
                       </div>
                        <button className='bg-[#004274] text-white px-3 rounded py-1'>Residentails</button>
                      </div>
                      <h2 className='my-3 text-xl font-bold text-[#004274]'>Ready Resort For Sell </h2>
                      <div className='propertySpace'>
                        <span><FaWarehouse></FaWarehouse></span>
                        <span>03</span>
                        <span><FaBed></FaBed></span>
                        <span>03</span>
                        <span><FaBorderNone></FaBorderNone></span>
                        <span>600 Sq Ft </span>
                        {/* <span><FaCarSide></FaCarSide></span>
                        <span>03</span> */}
                      </div>
                      <div className='reviews mt-5'>
                        <div className='flex'>
                        <img src={ibrahim} alt="" />
                        <span className='mt-5'>Ibrahim Sikder</span>
                        </div>
                       <div className='mt-5 viewDetails'>
                       <Link to='/singleapartment'><span >View Details </span></Link>
                        <span className='mt-1'><FaArrowRight></FaArrowRight></span>
                       </div>
                      </div>
                    </div>
                    
                </div>
                <div>
                 
                </div>
            </div>
           </div>
          
        </div>
        </HelmetProvider>
    );
};

export default Property;