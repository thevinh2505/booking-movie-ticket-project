import React from "react";
import "./footer.css";
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaGoogle} from 'react-icons/fa'
function Footer() {
	return (
		<footer className="footer-section relative">
			<div className="newslater-section padding-bottom ">
				<div className="Container xl:px-10" >
					<div
						className="newslater-container bg_img"
						data-background="http://pixner.net/boleto/demo/assets/images/newslater/newslater-bg01.jpg"
						style={{
							backgroundImage:
								'url("http://pixner.net/boleto/demo/assets/images/newslater/newslater-bg01.jpg")',
						}}
					>
						<div className="newslater-wrapper">
							<h5
								className="cate tracking-wide"
								style={{ marginBottom: "23px" }}
							>
								subscribe to MovfIx{" "}
							</h5>
							<h3 className="title tracking-wide">
								to get exclusive benefits
							</h3>
							<form className="newslater-form block mt-0" onSubmit={(e)=>{
								e.preventDefault()
							}}>
								<input
									className="w-full"
									type="text"
									placeholder="Your Email Address"
								/>
								<button type="submit">Subscribe</button>
							</form>
							<p>
								We respect your privacy, so we never share your
								info
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="Container xl:px-10">
				<div className="footer-top">
					<div className="logo xs:w-full sm:w-40 mt-2 flex items-center justify-center">
						<a href="#home" className="">
							<img
								className="w-40 xs:text-center"
								src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
								alt="footer"
							/>
						</a>
					</div>
					<ul className="social-icons flex flex-wrap xs:justify-center xs:w-full sm:w-72">
						<li className="pr-4 sm:pt-2 xs:pt-0">
							<a href="#0" className=' flex items-center justify-center w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent' style={{border:"1px solid rgba(255,255,255,0.1)"}} >
								<FaFacebookF />
							</a>
						</li>
						<li className="pr-4 sm:pt-2 xs:pt-0">
							<a href="#0" className='flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent' style={{border:"1px solid rgba(255,255,255,0.1)"}} >
								<FaTwitter/>
							</a>
						</li>
						<li className="pr-4 sm:pt-2 xs:pt-0">
							<a href="#0" className='flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent' style={{border:"1px solid rgba(255,255,255,0.1)"}} >
								<FaPinterestP/>
							</a>
						</li>
						<li className="pr-4 sm:pt-2 xs:pt-0">
							<a href="#0" className='flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent' style={{border:"1px solid rgba(255,255,255,0.1)"}} >
								<FaGoogle/>
							</a>
						</li>
						<li className="pr-4 sm:pt-2 xs:pt-0">
							<a href="#0" className='flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent' style={{border:"1px solid rgba(255,255,255,0.1)"}} >
								<FaInstagram/>
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-bottom ">
					<div className="footer-bottom-area flex-wrap-reverse flex xs:justify-around sm:justify-between">
						<div className="left xs:w-full sm:w-96 sm:mt-2">
							<p className="text-center">
								Copyright © 2020. All Rights Reserved By{" "}
								<a href="https://github.com/thevinh2505">Movflx </a>
							</p>
						</div>
						<ul className="links mb-6 flex flex-wrap xs:justify-around sm:justify-end">
							<li>
								<a href="#0">About</a>
							</li>
							<li>
								<a href="#0">Terms Of Use</a>
							</li>
							<li>
								<a href="#0">Privacy Policy</a>
							</li>
							<li>
								<a href="#0">FAQ</a>
							</li>
							<li>
								<a href="#0">Feedback</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		
			
		</footer>
	);
}

export default Footer;
