import React, { useState } from "react";
import "./AllProperty.css";
import propertys from "../../images/propery-bg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import { useQuery } from "@tanstack/react-query";
import PropertyDetails from "./PropertyDetails";
import Loading from "../Shared/Footer/Loading/Loading";
import Search from "../../components/Search";
// import { useGlobalContext } from "../../contexts/SearchProvider";
// import Search from "../../components/Search";

const AllProperty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  const pages = Math.ceil(page/size);

  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["property", selectedCategory],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/properties`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredApartments = apartments.filter((apartment) => {
    if (selectedCategory === "all") {
      return apartment.address.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        apartment.category === selectedCategory &&
        apartment.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

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
        {/* Search component start */}
        <Search
          handleSearchTermChange={handleSearchTermChange}
          handleCategoryChange={handleCategoryChange}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        ></Search>
        {/* Search component end */}

        {/* card section start here  */}
        {isLoading && <Loading></Loading>}
        <div className="wrapProperty">
          <div className="singleProperty">
            <div className="leftSide mt-20 mr-[16px]">
              {filteredApartments.map((property) => (
                <PropertyDetails
                  key={property._id}
                  property={property}
                ></PropertyDetails>
              ))}
            </div>
            {/* <div className='pagination'>
              <p>Currently selested page: {page} ans size:{size}</p>
              {
                [...Array(pages).keys()].map(number => <button
                  key={number}
                  className={page === number ? 'selected' : ''}
                  onClick={() => setPage(number)}
                >{number}</button>)
              }
              <select onChange={event => setSize(event.target.value)} >
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AllProperty;
