import React, { useRef } from "react";

import {
	FaBars,
	FaUserCircle,
	FaTimes,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaPinterestP,
	FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
	const barsRef = useRef();
	const headerRef = useRef();
	const closeBtnRef = useRef();
	const handleBarsIcon = (e) => {
		e.preventDefault();
		headerRef.current.classList.add("mobile-menu-visible");
	};
	const handleCloseBtn = (e) => {
		e.preventDefault();
		headerRef.current.classList.remove("mobile-menu-visible");
	};
	return (
		<header
			ref={headerRef}
			className="bg-secondary-color header relative  z-50 "
		>
			<div className="container mx-auto 2xl:px-20">
				{/* SCREEN MENU  */}
				<div className="screen-menu flex justify-between items-center py-4">
					<div className="header-logo ">
						<NavLink to="/home" id="home">
							<img
								src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
								alt="logo"
								className="w-150px"
							/>
						</NavLink>
					</div>
					<div className="header-navbar text-white hidden md:block ">
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/home"
						>
							Home
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/home"
						>
							Contact
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/home"
						>
							About
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/home"
						>
							Promotion
						</NavLink>
					</div>
					<div className="header-auth text-white flex">
						<NavLink
							to="/signin"
							className="flex items-center signInBtn hover:text-primary-color"
						>
							<span className="mr-1 text-2xl  text-white inline-block duration-700 hover:text-primary-color">
								<FaUserCircle />
							</span>
							<span>Sign In</span>
						</NavLink>
						<button
							className="block md:hidden ml-4 text-2xl hover:text-primary-color duration-700"
							ref={barsRef}
							onClick={handleBarsIcon}
						>
							<FaBars />
						</button>
					</div>
				</div>
				{/* MOBILE MENU  */}
				<div className="mobile-menu fixed top-0 right-0 max-w-full h-full z-30">
					<nav className="menu-box absolute top-0 left-0 w-full h-full max-h-full overflow-y-auto overflow-x-hidden p-0 z-10">
						<div
							ref={closeBtnRef}
							className="close-btn hover:text-primary-color absolute right-4 top-10 leading-8 text-center text-xl text-white z-20 cursor-pointer"
							onClick={handleCloseBtn}
						>
							<FaTimes />
						</div>
						<div className="nav-logo relative text-left py-8 px-6">
							<NavLink to="/home">
								<img
									src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
									alt="logo"
									className="w-150px"
								/>
							</NavLink>
						</div>
						<div className="menu-outer">
							<ul className="mobile-main-menu w-full">
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color "
										to="/home"
									>
										Home
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/home"
									>
										Contact
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/home"
									>
										About
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/home"
									>
										Promotion
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="social-links py-8 px-6 ">
							<div className="text-center text-white">
								<p className="m-3 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaFacebookF />
								</p>
								<p className="m-3 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaTwitter />
								</p>
								<p className="m-3 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaInstagram />
								</p>
								<p className="m-3 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaPinterestP />
								</p>
								<p className="m-3 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaYoutube />
								</p>
							</div>
						</div>
					</nav>
				</div>
				{/* MENU BACKDROP  */}
				<div className="menu-backdrop fixed inset-0 z-20"></div>
			</div>
		</header>
	);
}

export default Header;
