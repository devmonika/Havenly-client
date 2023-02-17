import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const GetSellsData = () => {
  const { user } = useContext(AuthContext);
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSalesData(data));
  });
  return <div></div>;
};

export default GetSellsData;
