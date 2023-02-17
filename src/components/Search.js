// src/components/Search.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../store/action";

const Search = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    dispatch(search(location));
  };

  return (
    <div className="flex flex-row mb-3 flex-wrap justify-around items-center gap-2">
      <input
        className="input input-bordered"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default Search;
