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

				<label htmlFor="my-drawer-2" className="nav-btn drawer-button lg:hidden"><FaBars /></label>
				<img src={logo} alt="logo" className='h-32 lg:h-52 mt-16 -ml-5 lg:ml-0 mb-7 lg:mb-0' />

				{/* <h3 className='font-bold text-3xl text-[#28C667]'></h3> */}
			</div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/apartments">Apartment</a>
				{/* <a href="/#">Blog</a> */}
				<a href="/reviews">Reviews</a>
				<a href="/#">About us</a>
				<a href="/contactus">Contact</a>
				
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div>
				{
					user?.uid ?

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
