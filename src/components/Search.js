import React from "react";

const Search = ({
  handleSearchTermChange,
  handleCategoryChange,
  searchTerm,
  selectedCategory,
}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-lg">
        <div className="flex items-center border-b-2 border-secondary py-2">
          <input
            className="appearance-none cursor-text bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Location"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select
            className="bg-transparent border-none cursor-pointer text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All categories</option>
            <option value="Residential">Residential</option>
            <option value="Luxury">Luxury</option>
            <option value="Commercial">Commercial</option>
            <option value="Affordable Housing">Affordable Housing</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
