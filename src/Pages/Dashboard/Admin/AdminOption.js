import React from "react";
import { Link } from "react-router-dom";

const AdminOption = () => {
  return (
    <>
      <Link to="/dashboard/allsellers">All Sellers</Link>
      <Link to="/dashboard/allbuyers">All Buyers</Link>
      <Link to="/dashboard/reporteditems">Reported Items</Link>
    </>
  );
};

export default AdminOption;
