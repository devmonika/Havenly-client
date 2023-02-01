import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Contact from "../../Pages/Contact/Contact";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Reviews from "../../Pages/Reviews/Reviews";
import Property from "../../Pages/Porperty/Property";
import DetailsProperty from "../../Pages/Porperty/DetialsProperty/DetailsProperty";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutDetails from "../../Pages/About/AboutDetails";
import AddProperties from "../../Pages/Dashboard/SellerDashboard/AddProperties/AddProperties";
import Profile from "../../Pages/Dashboard/Profile/Profile";
import MyProperties from "../../Pages/Dashboard/SellerDashboard/MyProperties/MyProperties";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>
      },
      {
        path: "/about",
        element: <AboutDetails></AboutDetails>
      },
      {
        path: '/apartments',
        element: <Property></Property>
      },
      {
        path: '/singleapartment',
        element: <DetailsProperty></DetailsProperty>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSeller></AllSeller>
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyer></AllBuyer>
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportedItems></ReportedItems>
      },
      {
        path: "/dashboard/addproperties",
        element: <AddProperties></AddProperties>
      },
      {
        path: "/dashboard/myproperties",
        element: <MyProperties></MyProperties>
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>
      },
    ]
  },


]);

export default router;
