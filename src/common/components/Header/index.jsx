import { SET_PROFILE } from "features/authentication/utils/action";
import React, { useRef, useState } from "react";

import {
	FaBars,
	FaUserCircle,
	FaTimes,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaPinterestP,
	FaYoutube,
	FaChevronRight,
} from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./style.css";

function Header() {
	const dispatch = useDispatch();
	const history = useHistory();

	const profile = useSelector((state) => state.auth.profile);

	const renderUserInfo = () => {
		if (!localStorage.getItem("user")) {
			return (
				<div className="flex items-center">
					<NavLink
						to="/signin"
						className=" items-center signInBtn hover:text-primary-color lg:flex xs:hidden  pr-2 signin-in-header opacity-60"
					>
						<span className="mr-2 text-2xl  text-white inline-block duration-700 hover:text-primary-color">
							<FaUserCircle />
						</span>
						<span>Sign In</span>
					</NavLink>
					<NavLink
						to="/signup"
						className=" items-center signInBtn hover:text-primary-color lg:flex xs:hidden opacity-60"
					>
						<span className="ml-2">Sign Up</span>
					</NavLink>
				</div>
			);
		} else {
			return (
				<div className=" items-center lg:flex xs:hidden">
					<NavLink
						to="/user"
						className="flex items-center signInBtn hover:text-primary-color hover:opacity-100"
					>
						<div className="w-8 rounded-full  inline-block duration-700 mr-2 ">
							<img
								src="https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg"
								className="rounded-full w-full"
								alt="avatar"
							/>
						</div>
						<span
							className="pr-2 opacity-70 cursor-pointer hover:opacity-100"
							style={{ borderRight: "1px solid #e5e7eb" }}
						>
							{profile?.hoTen}
						</span>
					</NavLink>
					<p
						className="pl-2 opacity-70 cursor-pointer hover:text-primary-color hover:opacity-100"
						onClick={handleLogOut}
					>
						Log Out
					</p>
				</div>
			);
		}
	};
	const [scroll, setScroll] = useState(false);
	window.addEventListener("scroll", () => {
		setScroll(window.scrollY > 50);
	});
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
	const headerStyle = {
		color: "#e9eeff",
		zIndex: 999,
		position: "fixed",
		top: 0,
		width: "100%",
		borderBottom: " 1px solid rgba(255, 255, 255, 0.102)",
	};
	// LOG OUT
	const handleLogOut = (e) => {
		e.preventDefault();
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		dispatch({
			type: SET_PROFILE,
			payload: null,
		});
		handleClick();
	};
	const handleClick = () => {
		closeBtnRef.current.click();
	};
	return (
		<header
			ref={headerRef}
			className={scroll ? "scroll-header" : ""}
			style={headerStyle}
		>
			<div className="Container mx-auto 2xl:px-20">
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
					<div className="header-navbar text-white hidden lg:block ">
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/home"
						>
							Home
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/contact"
						>
							Contact Us
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/about"
						>
							About Us
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/news"
						>
							News
						</NavLink>
						<NavLink
							className="text-white px-3 hover:text-primary-color"
							to="/download"
						>
							Download
						</NavLink>
					</div>
					<div className="header-auth text-white flex">
						{renderUserInfo()}
						<button
							className="block lg:hidden ml-4 text-2xl hover:text-primary-color duration-700"
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
							<NavLink to="/home" onClick={handleClick}>
								<img
									src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
									alt="logo"
									className="w-150px"
								/>
							</NavLink>
						</div>
						<div className="menu-outer">
							<ul className="mobile-main-menu w-full  overflow-hidden">
								{profile && JSON.stringify(profile) !== "{}" ? (
									<li className="mobile-menu-item flex items-center justify-between px-6 py-3 overflow-hidden">
										<NavLink
											to="/user"
											className="flex items-center signInBtn text-white "
											onClick={handleClick}
										>
											<div className="w-8 rounded-full  inline-block duration-700 mr-2 ">
												<img
													src="https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg"
													className="rounded-full w-full"
													alt="avatar"
												/>
											</div>
											<NavLink
												to="/user"
												className="pr-2  cursor-pointer "
											>
												{profile.hoTen}
											</NavLink>
										</NavLink>
										<div>
											<FaChevronRight />
										</div>
									</li>
								) : (
									<li className="mobile-menu-item flex items-center justify-between px-6 py-3 overflow-hidden">
										<NavLink
											to="/signin"
											onClick={handleClick}
											className="flex items-center signInBtn hover:text-primary-color"
										>
											<span className="mr-2 text-2xl  text-white inline-block duration-700 hover:text-primary-color">
												<FaUserCircle />
											</span>
											<span>Sign In</span>
										</NavLink>
									</li>
								)}
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color "
										to="/"
										onClick={handleClick}
									>
										Home
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/contact"
										onClick={handleClick}
									>
										Contact Us
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/about"
										onClick={handleClick}
									>
										About Us
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										onClick={handleClick}
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/news"
									>
										News
									</NavLink>
								</li>
								<li className="mobile-menu-item block">
									<NavLink
										onClick={handleClick}
										className="px-6 py-3 text-white block hover:text-primary-color"
										to="/download"
									>
										Download
									</NavLink>
								</li>
								{profile && JSON.stringify(profile) !== "{}" ? (
									<li className="mobile-menu-item block">
										<div
											onClick={handleLogOut}
											className="px-6 py-3 cursor-pointer text-white flex items-center hover:text-primary-color"
											to="/home"
										>
											<span>Log Out</span>
											<TbLogout className="inline-block ml-2 text-2xl" />
										</div>
									</li>
								) : (
									""
								)}
							</ul>
						</div>
						<div className="social-links py-8 px-6 ">
							<div className="text-center text-white">
								<p className="mr-5 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaFacebookF />
								</p>
								<p className="mr-5 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaTwitter />
								</p>
								<p className="mr-5 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaInstagram />
								</p>
								<p className="mr-5 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaPinterestP />
								</p>
								<p className="mr-5 mt-0 inline-block justify-center hover:text-primary-color cursor-pointer  duration-700">
									<FaYoutube />
								</p>
							</div>
						</div>
					</nav>
				</div>




				{/* MENU BACKDROP  */}
				<div
					className="menu-backdrop fixed inset-0 z-20"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
				></div>
			</div>
		</header>
	);
}

export default Header;
