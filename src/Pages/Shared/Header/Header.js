import React, { useContext } from "react";
import { useRef } from "react";
import darkmood from '../../../images/light.png'
import darkmood2 from '../../../images/night.png'
import {
  FaBars,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaRegMoon,
  FaUserAlt,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assetes/logor.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../app/features/darkModeSlice";
import { AuthContext } from "../../../contexts/AuthProvider";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

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
    <header style={{
      background: mode ? "#161C2D" : "white",
      color: mode ? "white" : "black",
    }}>
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
        <Link to="/">Home</Link>
        <Link to="/apartments">Apartment</Link>
        {/* <a href="/#">Blog</a> */}
        <Link to="/reviews">Reviews</Link>
        <Link to="/about">About us</Link>
        <Link to="/contactus">Contact</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div>
        {user?.uid ? (
          <>
           
            
          </>
        ) : (
          <>
           
          </>
        )}

        {/* {user?.displayName ? (
          <p className="mr-3">{user?.displayName}</p>
        ) : (
          <p className="mr-3">Web Titans</p>
        )} */}
        {user?.photoURL ? (
          <>
           
          <ul className="menu menu-horizontal">
          <li tabIndex={0}>
            <span>
            <img
              src={user.photoURL}

              style={{
                width:"40px",
                height:"40px",
                borderRadius:"50%"
              }}
              // className="w-12 h-12  rounded-2xl"
              alt=""
            />
            </span>
            <ul className="bg-[#3398E8] text-white">
              <li><a>
              <Link to="/dashboard" className="mr-3 dasboard">
              Dashboard
            </Link>
              </a></li>
              <li><a>
                 <button onClick={handleLogOut} className="mr-3 font-bold dasboard">
              Logout
            </button>
              </a></li>
              <li><a>
              <button
          className="text-xl ml-3"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {mode ? <MdDarkMode className='text-3xl'></MdDarkMode> : <MdWbSunny  className=' text-3xl'></MdWbSunny>}
        </button>
              </a></li>
            </ul>
          </li>
      </ul>
          </>
        ) : (
         
          <ul className="menu menu-horizontal">
          <li tabIndex={0}>
            <span>
            <FaUserAlt className="mr-3 userProfile text-secondary text-2xl" title="login"/>
            </span>
            <ul style={{
      background: mode ? "#2B2C30" : "white",
      color: mode ? "white" : "black",
    }}>
              <li>
              <Link to="/dashboard" className="mr-3 dasboard">
              Dashboard
            </Link>
              </li>
              <li>
              <Link to="/login" className="mr-3 dasboard">
              Login{" "}
            </Link>
             </li>
              <li>
              <button
          className="text-xl ml-3"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {/* {mode ? <img src={darkmood2} className='darkIcon' ></img> : <img src={darkmood} className='darkIcon' ></img>} */}
          {mode ? <MdDarkMode className='text-3xl'></MdDarkMode>  : <MdWbSunny  className='text-3xl'></MdWbSunny>}
        </button>
             </li>
            </ul>
          </li>
      </ul>
        )}

       
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
