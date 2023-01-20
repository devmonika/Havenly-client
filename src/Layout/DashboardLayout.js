import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
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
               
                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>

                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default DashboardLayout;