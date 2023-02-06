import React, { useEffect, useMemo, useState } from 'react';
import './AllProperty.css';
import propertys from '../../images/propery-bg.jpg';
import property1 from '../../images/property.jpg';
import property from '../../images/property.jpg';
import property2 from '../../images/property2.jpg';
import ibrahim from '../../images/ibrahim.png';
import { FaStar, FaFileImage, FaWarehouse, FaBed, FaCarSide, FaSistrix, FaBorderNone, FaArrowRight, FaMapMarkerAlt, FaRegEye, FaHeart } from "react-icons/fa";
import { Link, useActionData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import { useQuery } from '@tanstack/react-query';
import PropertyDetails from './PropertyDetails';


const AllProperty = () => {
  const [Luxury, setLuxury] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/properties/property/Luxury')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLuxury(data);
      })
  }, []);
  // const searchItem = properties.filter((item) => {

  const luxuryData = Luxury.find((item) => {
    console.log(item.category);
    return item.category;
  })







  const { data: properties = [], refetch } = useQuery({
    queryKey: ['property'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/properties');
      const data = await res.json();
      return data;

    }
  });

  // useEffect(() => {
  //   fetch(`http://localhost:5000/properties/property/${}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setCategory(data);
  //     })
  // }, [properties.category])



  // const searchItem = properties.filter((item) => {
  //   if (search === "") {
  //     console.log(item.category
  //     );
  //     return item.category;
  //   }
  // else if (item.category.toLowerCase().includes(search.toLocaleLowerCase())) {
  //   return item.category
  // }
  // });

  // console.log('searchedItem', searchItem)






  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/categories');
      const data = await res.json();
      return data;
    }
  });


  // console.log(properties)

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
            <FaSistrix />
          </div>
          <form className='searchProperty'>
            <input className='' type="text" placeholder='Search Category'
            // onChange={event => setSearch(event.target.value)}

            />


            <select name="" id=""
              // onClick={() => (luxuryData)}
            // onChange={handleCategoryChange}
            >

              {
                categories.map(category =>
                  <option
                    key={category._id}
                    value={category.categoryName}
                  >
                    {category.categoryName}
                  </option>
                )
              }



            </select>

          </form>
        </div>

        {/* card section start here  */}

        <div className="wrapProperty">
          <div className='singleProperty'>
            <div className='leftSide mr-[16px]'>

              {
                properties.map(property => <PropertyDetails
                  key={property._id}
                  property={property}

                ></PropertyDetails>)
              }










            </div>
          </div>
        </div>

      </div>
    </HelmetProvider>
  );
};

export default AllProperty;