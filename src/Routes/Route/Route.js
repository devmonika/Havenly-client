import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Contact from "../../Pages/Contact/Contact";

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
    ],
  },
]);

export default router;
