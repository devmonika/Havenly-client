import React from "react";
import { Link } from "react-router-dom";

const PopulerPlacesCard = ({ place }) => {
  const { city, propertyNumber, img } = place;
  return (
    <div className="">
      <div className="lg:rounded-l-lg flex lg:flex-row flex-col items-center lg:gap-8 bg-success transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-purple-300 duration-150">
        <Link className="w-full lg:w-60">
          <img
            className="object-cover h-36 lg:w-60 w-full lg:rounded-l-lg"
            src={img}
            alt=""
          />
        </Link>
        <div className="text-center text-black m-5">
          <Link className="font-semibold text-lg hover:text-error">{city}</Link>
          <p className="text-center">{propertyNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default PopulerPlacesCard;
