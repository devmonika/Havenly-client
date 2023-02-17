import React, { useEffect, useState } from "react";
import PopulerPlacesCard from "./PopulerPlacesCard";

const PopulerPlaces = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("demoData.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-xl text-secondary font-bold text-center mb-4">
        Popular Places
      </h1>
      <p className="text-center text-4xl font-bold leading-normal">
        Apartments In Most Popular Places
      </p>
      <div className="">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8">
          {places.map((place) => (
            <PopulerPlacesCard key={place.id} place={place}></PopulerPlacesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopulerPlaces;
