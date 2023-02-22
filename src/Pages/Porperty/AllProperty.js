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
// import { useGlobalContext } from "../../contexts/SearchProvider";
// import Search from "../../components/Search";

const AllProperty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["property", selectedCategory],
    queryFn: async () => {
      const res = await fetch(
        `https://havenly-server-new.vercel.app/properties`
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
        {isLoading && <Loading></Loading>}
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
              <div></div>
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};

export default AllProperty;
