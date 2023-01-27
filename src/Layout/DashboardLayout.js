import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import BuyerOption from "../Pages/Dashboard/Buyers/BuyerOption";
import AdminOption from "../Pages/Dashboard/Admin/AdminOption";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        </div>
        <div className="drawer-side text-lg font-semibold text-primary">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {user?.uid && (
              <li>
                <div className="grid grid-cols-1">
                  <img
                    src={
                      user?.photoURL ? user?.photoURL : "https://ibb.co/D9cMPk9"
                    }
                    alt=""
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <h3 className="text-secondary text-xl mb-5">
                    {user?.displayName}
                  </h3>
                </div>
              </li>
            )}
            <li>
              <AdminOption></AdminOption>
            </li>
            <li>
              <BuyerOption></BuyerOption>
            </li>
            <li>
              <Link to="/dashboard/allbuyers">All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
