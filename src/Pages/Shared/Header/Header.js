import React, { useContext } from "react";
import { useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaRegMoon,
  FaMoon,
  FaUserAlt,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assetes/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode} from "../../../app/features/darkModeSlice";
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
  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0 )
  })

  return (
    <header>
      <div>
        {/* <label
          htmlFor="my-drawer-2"
          className="nav-btn drawer-button lg:hidden"
        >
          <FaBars />
        </label> */}
        <img
          src={logo}
          alt="logo"
          className="h-32 lg:h-52 mt-16 logo mb-7 lg:mb-0"
        />
        {/* <h3 className='font-bold text-3xl text-[#28C667]'></h3> */}
      </div>
      <nav ref={navRef}>
        <Link to="/" className="text-black">Home</Link>
        <Link to="/apartments">Apartment</Link>
        {/* <a href="/#">Blog</a> */}
        <Link to="/reviews">Reviews</Link>
        <Link to="/about">About us</Link>
        <Link to="/contactus">Contact</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <ul>
        

        {/* {user?.displayName ? (
          <p className="mr-3">{user?.displayName}</p>
        ) : (
          <p className="mr-3">Web Titans</p>
        )} */}
        {user?.photoURL ? (
          <>
           <ul className="menu menu-horizontal px-1">
  
      <li tabIndex={0}>
        <a>
        <img
              src={user.photoURL}
              className="w-12 h-12  rounded-2xl"
              alt=""
            />
            
        </a>
        <ul className="p-2 bg-[#03C988]">
          <li><a> <Link to="/dashboard" className="mr-3 dasboard">
              Dashboard
            </Link></a></li>
          <li><a><button onClick={handleLogOut} className="mr-3 font-bold dasboard">
              Logout
            </button></a></li>
            <li className=" font-bold "><a><button
          className="text-xl ml-3"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {mode ? <FaRegMoon className="text-white" /> : <FaMoon className="text-black" />}
        </button></a></li>
        </ul>
      </li>
      
    </ul>
           
          </>
        ) : (
          <ul className="menu menu-horizontal px-1">
  
      <li tabIndex={0}>
        <a>
        <FaUserAlt className="mr-3 userProfile" />
      
            
        </a>
        <ul className="p-2 bg-[#03C988]">
            <li><a> <Link to="/login" className="mr-3 dasboard">
              Login{" "}
            </Link></a></li>
            <li className="center bg-black"><a><button
          className="text-xl ml-3"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {mode ? <FaToggleOn/> : <FaToggleOff/>}
        </button></a></li>
        </ul>
      </li>
     
    </ul>
        )}

        
      </ul>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
