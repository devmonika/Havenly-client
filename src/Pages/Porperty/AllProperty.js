import React, { useEffect, useState } from 'react';
import './AllProperty.css';
import propertys from '../../images/propery-bg.jpg';
import { FaSistrix } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import { useQuery } from '@tanstack/react-query';
import PropertyDetails from './PropertyDetails';
import Loading from '../Shared/Footer/Loading/Loading';


const AllProperty = () => {
  const [category, setCategory] = useState('Residential');
  const [search, setSearch] = useState([]);
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



  const { data: properties = [], refetch, isLoading } = useQuery({
    queryKey: ['property', category],
    queryFn: async () => {
      const res = await fetch(`https://havenly-server-new.vercel.app/properties/property/${category}`);
      const data = await res.json();
      return data;
    }
  });

  const searchItem = properties.filter((item) => {
    if (search === "") {
      console.log(item.category);
      return item.category;
    }
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://havenly-server-new.vercel.app/categories');
      const data = await res.json();
      return data;
    }
  });

  const handleCategoryChange = event => {
    event.preventDefault();
    setCategory(event.target.value);
    // refetch(`https://havenly-server-new.vercel.app/properties/property/${category}`);
    refetch();
  };
  // if (isLoading) {
  //   return <Loading></Loading>
  // }

  console.log(category);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Apartments - {siteName}</title>
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
              onChange={event => setSearch(event.target.value)}
            />
            <select name="" id=""
              onChange={handleCategoryChange}
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
        {isLoading && <Loading></Loading>}
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
            <div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};


export default AllProperty;