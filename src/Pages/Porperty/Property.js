import React from 'react';
import './Property.css';
import property from '../../images/propery-bg.jpg';
import property1 from '../../images/property.jpg';


const Property = () => {
   
    return (
        <div>
            <div className="property">
                <img src={property} alt="" />
                <div className='propertyContent'>
                    <h2>Our Property</h2>
                </div>
            </div>
            <div className="searchProperty mb-10 mt-16 px-16">
                <form className='grid gap-4 lg:grid-cols-4 sm:grid-cols-1'>
                   <input className='' type="text" placeholder='Search by project name or location'/>
                  
                    <input type="text" placeholder='Status'/>
                    <input type="text" placeholder='Type '/>
                    <input type="text" placeholder='Location'/>
                </form>
            </div>

          
        </div>
    );
};

export default Property;