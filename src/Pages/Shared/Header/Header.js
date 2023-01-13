import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import './Header.css'
import logo from '../../../images/house.png'
import { Link } from 'react-router-dom';
const Header = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div>
			<img src={logo} alt="logo" />
			<h3 className='font-bold text-3xl text-[#28C667]'>Havenly</h3>
			</div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Services</a>
				<a href="/#">Blog</a>
				<a href="/#">Testimonial</a>
				<a href="/#">About us</a>
				<a href="/#">Contact our</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div>
				
				<Link className='mr-3' >Login </Link>
				<FaUserAlt className='mr-3'/>
				<p>Ibrahim Sikder</p>
			</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default Header;