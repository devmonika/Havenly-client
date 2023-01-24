import React from "react";
import { NavLink } from "react-router-dom";

const BuyerOption = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/myOrders"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          My Orders
        </NavLink>
      </li>
    </>
  );
};

export default BuyerOption;
