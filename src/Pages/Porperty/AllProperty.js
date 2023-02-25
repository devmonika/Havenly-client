import React, { useState } from "react";
import "./AllProperty.css";
import propertys from "../../images/propery-bg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";
import { useQuery } from "@tanstack/react-query";
import PropertyDetails from "./PropertyDetails";
import Loading from "../Shared/Footer/Loading/Loading";
import Search from "../../components/Search";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
// import { useGlobalContext } from "../../contexts/SearchProvider";
// import Search from "../../components/Search";

const AllProperty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [count, setCount] = useState(0);
  const [apartments, setApartments] = useState([])



  useEffect(()=>{
    const url = `http://localhost:5000/properties?page=${page}&size=${size}`;
    fetch(url)
    .then(res=> res.json())
    .then(data =>{
      setCount(data.count);
      setApartments(data.properties)
    })
  },[page, size, selectedCategory])

  const pages = Math.ceil(count / size);

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
        apartment.address.toLowerCase().includes(searchTerm.toLowerCase())
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
        {/* {isLoading && <Loading></Loading>} */}
        <motion.div layout className="wrapProperty">
          <AnimatePresence>
            <div className="singleProperty">
              <div className="leftSide mt-20 mr-[16px]">
                {filteredApartments.map((property) => (
                  <PropertyDetails
                    key={property._id}
                    property={property}
                  ></PropertyDetails>
                ))}
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
        <div className='pagination ml-20 my-10'>
          <p>Currently selested page: {page} and size:{size}</p>
          {
            [...Array(pages).keys()].map(number => <button
              key={number}
              className={page === number ? 'selected' : ''}
              onClick={() => setPage(number)}
            >
              {number+1}
            </button>)
          }
          <select onChange={event => setSize(event.target.value)} >
            <option value="2">2</option>
            <option value="4" selected>4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AllProperty;
