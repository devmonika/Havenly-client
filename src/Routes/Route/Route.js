import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Contact from "../../Pages/Contact/Contact";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AllSeller from "../../Pages/Dashboard/Admin/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/Admin/AllBuyer/AllBuyer";
// import ReportedItems from "../../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Reviews from "../../Pages/Reviews/Reviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutDetails from "../../Pages/About/AboutDetails";
import MyOrders from "../../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import AddProperties from "../../Pages/Dashboard/SellerDashboard/AddProperties/AddProperties";
import Profile from "../../Pages/Dashboard/Profile/Profile";
import AllProperty from "../../Pages/Porperty/AllProperty";
import SingleApartment from "../../Pages/Porperty/DetialsProperty/SingleApartment";
import MyProperties from "../../Pages/Dashboard/SellerDashboard/MyProperties/MyProperties";
import WishList from "../../Pages/Dashboard/BuyerDashboard/WishList/WishList";
import Payment from "../../Pages/Porperty/Payment/Payment";
import BuyerReviews from "../../Pages/Dashboard/BuyerDashboard/BuyerReviews/BuyerReviews";
import SellerAbout from "../../Pages/Porperty/DetialsProperty/SellerAbout";
import PasswordSetting from "../../Pages/Dashboard/SettingsUser/PasswordSetting";
import PromotePayment from "../../Pages/Dashboard/SellerDashboard/PaymentForPromote/PromotePayment";
import Advertise from "../../Pages/Advertise/Advertise";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";

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
        element: <Reviews></Reviews>,
      },
      {
        path: "/about",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "/apartments",
        element: <AllProperty></AllProperty>,
      },
      {
        path: "/advertise",
        element: <Advertise></Advertise>,
      },
      {
        path: "/seller-about",
        element: <SellerAbout></SellerAbout>,
      },
      {
        path: "/singleapartment/:id",
        element: <SingleApartment></SingleApartment>,
        loader: ({ params }) =>
          fetch(
            ` https://havenly-server-new.vercel.app/properties/${params.id}`
          ),
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            ` https://havenly-server-new.vercel.app/properties/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myWishList",
        element: <WishList></WishList>,
      },
      {
        path: "/dashboard/addproperties",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "/dashboard/myproperties",
        element: <MyProperties></MyProperties>,
      },
      {
        path: "/dashboard/PromotePayment/:id",
        element: <PromotePayment></PromotePayment>,
        loader: ({ params }) =>
          fetch(`https://havenly-s.vercel.app/properties/${params.id}`),
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/dashboard/myreviews",
        element: <BuyerReviews></BuyerReviews>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/settings",
        element: <PasswordSetting></PasswordSetting>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
