import React, { useContext, useRef } from 'react';
import './Header.css';
import logo from "../../../assetes/logor.png";
import slider from '../../../images/1.jpg';
import slider2 from '../../../images/3.jpg';
import slider3 from '../../../images/4.jpg';
import slider4 from '../../../images/5.jpg';
import slider5 from '../../../images/7.jpg';
import login from '../../../images/login6.png';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaRegMoon,
  FaUserAlt,
} from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from "../../../app/features/darkModeSlice";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

window.addEventListener('scroll', function(){
  var header = document.querySelector('.navbar');
  header.classList.toggle('sticky', window.scrollY > 0 )
})

const navRef = useRef();

const showNavbar = () => {
  navRef.current.classList.toggle("active");
  const navItems = document.querySelector('.navItems');
  navItems.classList.toggle('active')
};
  
  return (
    <div>
      <header>
      <div className='navbar'>
      <div>
        <img 
          src={logo}
          alt="logo"
          className="h-32 lg:h-52 mt-16 logo mb-7 lg:mb-0 "
        />
      </div>
        <nav className='mr-[100px] navItems' ref={navRef}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apartments">Apartments</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </ul>
        </nav>
       {
        user?.uid ?
        <>
        
        <ul className="menu menu-horizontal">
      <li tabIndex={0}>
      <img
              src={user.photoURL}

              style={{
                width:"60px",
                height:"60px",
                borderRadius:"50%",
                objectFit:'cover'
              }}
              // className="w-12 h-12  rounded-2xl"
              alt=""
            />
        <ul className="p-2 bg-black text-white">
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
          {/* {mode ? <img src={darkmood2} className='darkIcon' ></img> : <img src={darkmood} className='darkIcon' ></img>} */}
          {mode ? <MdDarkMode className='text-3xl'></MdDarkMode>  : <MdWbSunny  className='text-3xl'></MdWbSunny>}
        </button>
             
              </a></li>
        </ul>
      </li>
    </ul>
        </>
        : 
        <>
          <ul className="menu menu-horizontal">
      <li tabIndex={0}>
      <div className='mr-[110px] user'>
        {/* <FaUserAlt className="mr-3 userProfile text-secondary text-2xl" title="login"/> */}
        <img className="mr-3 userProfile text-secondary text-2xl w-[35px] rounded-full" src={login} alt="" />
        </div>
        <ul className="p-2 bg-black text-white">
        <li>
              <Link to="/login" className="mr-3 dasboard">
              Login{" "}
            </Link>
             </li>
             <li>
              <button
          className="text-xl"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {/* {mode ? <img src={darkmood2} className='darkIcon' ></img> : <img src={darkmood} className='darkIcon' ></img>} */}
          {mode ? <MdDarkMode className='text-3xl'></MdDarkMode>  : <MdWbSunny  className='text-3xl'></MdWbSunny>}
        </button>
             
             </li>
        </ul>
      </li>
    </ul>
         
        </>
       }
        <div className="humberger" ref={navRef} onClick={showNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        
   
        </div>
      </div>
     
        <div className='banner'>
          <img src={slider} alt="slider" />
          <img src={slider2} alt="slider" />
          <img src={slider3} alt="slider" />
          <img src={slider4} alt="slider" />
          <img src={slider5} alt="slider" />
          <div className="bannerContent text-white center ">
            <h2 className='text-white font-bold text-3xl mb-3 uppercase text-center '>Welcome to havenly !</h2>
            <p className='text-xl text-center leading-8 w-full '>Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today ! <br className='break' />
              Discover a Wide Range of Rentals to Suit Your Needs
            </p>
            <Link to="/apartments"><button className="hover:bg-secondary ease-in-out bg-[#161C2D] text-center center px-8 font-bold text-xl py-3 mt-3 ">Apartments</button></Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;