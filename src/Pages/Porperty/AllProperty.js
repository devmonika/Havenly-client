import React, { useEffect, useState } from "react";
import "./AllProperty.css";
import propertys from "../../images/propery-bg.jpg";
import { FaSistrix } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import { useQuery } from "@tanstack/react-query";
import PropertyDetails from "./PropertyDetails";
import Loading from "../Shared/Footer/Loading/Loading";
// import { useGlobalContext } from "../../contexts/SearchProvider";
// import Search from "../../components/Search";

const AllProperty = () => {
  const [category, setCategory] = useState('Residential');
  const [search, setSearch] = useState([]);


  const { data: properties = [], refetch, isLoading } = useQuery({
    queryKey: ['property', category],
    queryFn: async () => {
      const res = await fetch(`https://havenly-server-new.vercel.app/properties/property/${category}`);
      const data = await res.json();
      return data;
    },
  });

  // const searchItem = properties.filter((item) => {
  //   if (search === "") {
  //     console.log(item.category);
  //     return item.category;
  //   }
  // });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://havenly-server-new.vercel.app/categories"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleCategoryChange = (event) => {
    event.preventDefault();
    setCategory(event.target.value);

    refetch();
  };

  // console.log(category);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Apartments - {siteName}</title>
      </Helmet>
      <div className="mb-5">
        <div className="property">
          <img src={propertys} alt="" />
          <div className="propertyContent">
            <h2>Apartments</h2>
          </div>
        </div>
        <div className="flex flex-row gap-10 items-center justify-center relative mb-10 mt-16 searchWrap">
          {/* Location input */}
          {/* <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={query}
              placeholder="Search Location"
              onChange={(event) => searchLocation(event.target.value)}
            />
          </form> */}
          {/* Location input End */}
          {/* <Search></Search> */}
          <form className="mb-3">
            <select
              className="select select-bordered w-full max-w-xs"
              name=""
              id=""
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option key={category._id} value={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </form>
        </div>
        {/* card section start here  */}
        {isLoading && <Loading></Loading>}
        <div className="wrapProperty">
          <div className="singleProperty">
            <div className="leftSide mr-[16px]">
              {properties.map((property) => (
                <PropertyDetails
                  key={property._id}
                  property={property}
                ></PropertyDetails>
              ))}
            </div>
            <div></div>   
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AllProperty;
