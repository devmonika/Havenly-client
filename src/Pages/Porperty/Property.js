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
import { FaStar,FaFileImage, FaWarehouse, FaBed, FaCarSide, FaBorderNone, FaArrowRight, FaMapMarkerAlt, FaRegEye, FaHeart } from "react-icons/fa";
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
            {/* Search options */}
            {/* <div className="searchProperty mb-10 mt-16 px-16">
                <form className='grid gap-4 lg:grid-cols-4 sm:grid-cols-1'>
                   <input className='' type="text" placeholder='Search by project name or location'/>
                  
                    <input type="text" placeholder='Status'/>
                    <input type="text" placeholder='Type '/>
                    <input type="text" placeholder='Location'/>
                </form>
            </div> */}
            <div className="wrapProperty">
           <div className='singleProperty'>
                <div className='leftSide mr-[16px]'>
                    <div className='propertyCard '>
                      <div className='propertyCardImgIcons'>
                      <img src={property} alt="" />
                      <ul className="propertyIcons">
                        <li><a href="#"><FaMapMarkerAlt></FaMapMarkerAlt></a></li>
                        <li><a href="#"><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                        <li><a href=""><FaHeart></FaHeart></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
                        <li><a href=""><FaRegEye></FaRegEye></a></li>
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
                        <span><FaCarSide></FaCarSide></span>
                        <span>03</span>
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
                  <div className='rightSide mt-8'>
                    <div>
                   <input className='keyword' type="text " value="Keyword" />
                  <select>
                    <option value="Keyword">Property Status </option>
                    <option value="Keyword">For sale </option>
                    <option value="Keyword">For rent</option>
                  </select>
                  <select>
                    <option value="Keyword">Property Location</option>
                    <option value="Keyword">Upper East Side</option>
                    <option value="Keyword">Upper West Side</option>
                    <option value="Keyword">Midtown East </option>
                    <option value="Keyword">Brocklyn</option>
                <option value="Keyword">Queens</option>
                    <option value="Keyword">Staten Island</option>
                    <option value="Keyword">USA</option>
                    <option value="Keyword">Upper manhattan</option>
                  </select>
                  <select>
                    <option value="Keyword">Property Type</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                  </select>
                  <select>
                    <option value="Keyword">Property Style</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                  </select>
                  <select>
                    <option value="Keyword">Total Rooms </option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                  </select>
                  <select>
                    <option value="Keyword">Bedrooms </option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                  </select>
                  <select>
                    <option value="Keyword">Bathrooms </option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                  </select>
                  <select>
                    <option value="Keyword">Car Parking</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                    <option value="Keyword">Keyword Research</option>
                  </select>
                  <div className='rightSideCheck'>
                    <h4 className='text-white mt-5 mb-3'>Amenities</h4>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Attended Lobby</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Concierge</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Firebplace</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Gym</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Outdoor Space</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Parking</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Pet Friendly </span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Pool </span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Views</span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Washer / Drye </span>
                    </label>
                    <h4 className='text-white mt-5 mb-3'>Options </h4>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>New Listings Only </span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Open Houses </span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Sponsor Units </span>
                    </label>
                    <label>
                      <input type="checkbox" /><span className='text-white ml-3'>Show Listiing In Contract </span>
                    </label>
                    <input className='bg-[#102637;] text-white px-3 py-3 text-center uppercase w-full' value="SEARCH"/>
                  </div>
                    </div>

                    
                  </div>
                </div>
            </div>
           </div>
          
        </div>
        </HelmetProvider>
    );
};

export default Property;