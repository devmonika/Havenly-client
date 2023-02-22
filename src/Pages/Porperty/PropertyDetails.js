import React, { useState } from "react";
import { useContext } from "react";
import {
  FaArrowRight,
  FaBed,
  FaBorderNone,
  FaCarSide,
  FaFileImage,
  FaHeart,
  FaMapMarkerAlt,
  FaRegEye,
  FaStar,
  FaWarehouse,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ibrahim from "../../images/ibrahim.png";
import SingleApartment from "./DetialsProperty/SingleApartment";

const PropertyDetails = ({ property }) => {
  const { user } = useContext(AuthContext);
  const {
    address,
    bathrooms,
    bedrooms,
    category,
    city,
    contact,
    country,
    description,
    img1,
    img2,
    img3,
    price,
    sqft,
    status,
    year,
    zip,
    date,
    seller_img,
    seller_name,
    _id,
  } = property;
  // console.log(property)

  return (
    <div className="propertyCard">
      <div className="propertyCardImgIcons mb-5">
        <img className="h-[300px]" src={img1} alt="" />
        <ul className="propertyIcons">
          <li>
            <a href="#">
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </a>
          </li>
          <li>
            <a href="#">
              <FaHeart></FaHeart>
            </a>
          </li>
          <li>
            <a href="#">
              <FaFileImage></FaFileImage>
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegEye></FaRegEye>
            </a>
          </li>
          {/* <li><a href="#"><FaCarSide></FaCarSide></a></li> */}
        </ul>
      </div>
      <span className="bg-secondary mt-5 text-black text-center py-2 rounded font-bold px-3">
        $ {price}
      </span>
      <div className="peroperyCardContent mt-5">
        <div className="singleContent">
          <span className="font-semibold text-primary bg-secondary px-2 w-auto rounded">
            Location :{" "}
            <span className="font-normal text-primary">{address}</span>
          </span>
        </div>
        <span className="font-bold px-2 bg-primary text-white rounded-md">
          {category}
        </span>
      </div>
      <h2 className="my-3 text-xl font-bold text-secondary headlineSingleContent">
        {status}{" "}
      </h2>
      <div className="propertySpace">
        <span title="bathrooms">
          <FaWarehouse></FaWarehouse>
        </span>
        <span>{bathrooms}</span>
        <span title="bedroom">
          <FaBed></FaBed>
        </span>
        <span>{bedrooms}</span>
        <span>
          <FaBorderNone></FaBorderNone>
        </span>
        <span>{sqft} </span>
        {/* <span><FaCarSide></FaCarSide></span>
                <span>03</span> */}
      </div>
      <div className="reviews mt-5">
        <div className="flex items-center justify-around gap-2">
          <div className="avatar">
            <div className="rounded-full">
              <img alt="" src={seller_img} />
            </div>
          </div>
          <span className=" ml-3 inline-block">
            For sell by : <span className="font-bold ">{seller_name}</span>
          </span>
        </div>
        <div className="viewDetails">
          <Link
            className="btn bg-secondary px-2 text-white border-none"
            to={`/singleapartment/${_id}`}
          >
            {" "}
            <span>View Details </span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
