import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import './Header.css'
import logo from '../../../images/logo2.png'
import { Link } from 'react-router-dom';
const Header = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className='logo '>
			<a href="">
            <img src={logo} alt="logo" />
            </a>
			</div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Apartments</a>
				<a href="/#">Reviews</a>
				<a href="/#">About Us</a>
				<a href="/#">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div className='userInfo -mr-40'>
				
				<p className='mr-3 hover:text-[#DB8C23]' >Login </p>
				<FaUserAlt className='mr-3'/>
				<p className='hover:text-[#DB8C23] hiddenUser'>Ibrahim Sikder</p>
			</div>
			<button className="nav-btn showBtn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default Header;