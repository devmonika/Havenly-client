import React, { useContext } from "react";
import { useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaUserAlt,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assetes/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../app/features/darkModeSlice";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <header>
      <div>
        <label
          htmlFor="my-drawer-2"
          className="nav-btn drawer-button lg:hidden"
        >
          <FaBars />
        </label>
        <img
          src={logo}
          alt="logo"
          className="h-32 lg:h-52 mt-16 -ml-5 lg:ml-0 mb-7 lg:mb-0"
        />
        {/* <h3 className='font-bold text-3xl text-[#28C667]'></h3> */}
      </div>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/#">Apartment</Link>
        {/* <a href="/#">Blog</a> */}
        <Link to="/reviews">Reviews</Link>
        <Link to="/#">About us</Link>
        <Link to="/contactus">Contact</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div>
        {user?.uid ? (
          <>
            <Link to="/dashboard" className="mr-3">
              Dashboard
            </Link>
            <button onClick={handleLogOut} className="mr-3 font-bold">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-3">
              Login{" "}
            </Link>
          </>
        )}

        {user?.displayName ? (
          <p className="mr-3">{user?.displayName}</p>
        ) : (
          <p className="mr-3">Web Titans</p>
        )}
        {user?.photoURL ? (
          <>
            <img
              src={user.photoURL}
              className="w-12 h-12  rounded-2xl"
              alt=""
            />
          </>
        ) : (
          <FaUserAlt className="mr-3" />
        )}

        <button
          className="text-xl ml-3"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {mode ? <FaToggleOff /> : <FaToggleOn />}
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
