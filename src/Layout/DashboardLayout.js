import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assetes/Havenly LOGO (White LOGO)-01.png"

const DashboardLayout = () => {
  return (
    <div>
      

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        
          <Outlet></Outlet>
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        </div>
        <div className="drawer-side text-lg font-semibold  bg-primary text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 ">
            <li>
              <Link to="/" className="shadow-md z-10">
                <img src={logo} className="h-20"/>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="shadow-md z-10">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allsellers" className="shadow-md">
                Landlords
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allbuyers" className="shadow-md">
                Customers
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myOrders" className="shadow-md">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myreviews" className="shadow-md">
                My Reviews
              </Link>
            </li>
            <li>
              <Link to="/dashboard/wishlist" className="shadow-md">
                My Favourite Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reporteditems" className="shadow-md">
                Reported Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addproperties" className="shadow-md">
                Add Property
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myproperties" className="shadow-md">
                My Property
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="shadow-md">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="shadow-md">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
