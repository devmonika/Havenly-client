import React from "react";
import { Link } from "react-router-dom";

const BuyerOption = () => {
  return (
    <>
      <Link to="/dashboard/myOrders">My Orders</Link>
      <Link to="/dashboard/myWishList">My WishList</Link>
    </>
  );
};

export default BuyerOption;
