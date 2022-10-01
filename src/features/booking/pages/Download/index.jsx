import React, { Fragment } from "react";
import Downloadbanner from "assets/img/downloadbanner.jpg";

import "./download.css";
import { MdOutlineKeyboardArrowRight, MdEventSeat } from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";

import { FaShip, FaTicketAlt } from "react-icons/fa";

import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
function Download() {
	return (
		<Fragment>
			{/* SPEAKER BANNER   */}
			<section
				className="speaker-banner bg_img relative "
				data-background={Downloadbanner}
			>
				<div className="Container">
					<div className="speaker-banner-content text-center">
						<h2 className="title uppercase text-white font-semibold">
							Apps Download
						</h2>
						<ul className="breadcrumb">
							<li>
								<NavLink to='/' exact>
									Home{" "}
									<MdOutlineKeyboardArrowRight className="font-bold text-2xl" />
								</NavLink>
							</li>
							<li>Apps Download </li>
						</ul>
					</div>
				</div>
			</section>
			{/* SPEAKER SINGLE  */}
			<section className="apps-seciton   ">
				<div className="Container">
					<div className="apps-wrapper bg-six padding-top padding-bottom  py-20 lg:py-30 relative">
						<div
							style={{
								backgroundImage:
									"url('https://media.discordapp.net/attachments/527086735738273804/1025391149512400896/handandphone.png')",
							}}
							className="bg_img apps-bg hand-and-phone"
							data-background="https://media.discordapp.net/attachments/527086735738273804/1025391149512400896/handandphone.png"
						/>
						<div className="section-header-3 text-center">
							<span
								className="cate xs:mb-4 sm:text-2xl sm:mb-6  uppercase block text-lg  mb-2  text-text-green-hover"
								style={{ lineHeight: "28px" }}
							>
								get Movflx app
							</span>
							<h2 className="title sm:mb-6 font-semibold uppercase mb-4 text-white">
								app download
							</h2>
						</div>
						<Row className="">
							<Col lg={10}></Col>
							<Col
								lg={14}
								xs={24}
								className="xs:text-center lg:text-left offset-lg-5"
								style={{
									paddingRight: "15px",
									paddingLeft: "15px",
								}}
							>
								<div className="content">
									<h5 className="title text-white mb-4">
										MAKE LIFE EASIER
									</h5>
									<p className="text-text-grey mb-9">
										As the largest mobile platform in the
										country, we have the right services, the
										know-how and the expertise to make your
										buying transition to mobile simple, easy
										and painless.
									</p>
									<ul className="app-button flex items-center ">
										<li>
											<a
												href="#0"
												className="cursor-pointer"
											>
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1025542787904573531/apps03.png"
													alt="apps"
												/>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="cursor-pointer"
											>
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1025542829461753947/gg.png"
													alt="apps"
												/>
											</a>
										</li>
									</ul>
								</div>
								<div className="counter--area flex flex-wrap">
									<div className="counter-item ">
										<div
											className="flex justify-center items-center  "
											style={{ marginBottom: "10px" }}
										>
											<h4 className="title text-white mr-1">
												50
											</h4>
											<h4 className="title text-white">
												M+
											</h4>
										</div>
										<p className="info text-text-grey xs:text-sm sm:text-base">
											apps download
										</p>
									</div>
									<div className="counter-item ">
										<div
											className="flex justify-center items-center  "
											style={{ marginBottom: "10px" }}
										>
											<h4 className="title text-white mr-1">
												15
											</h4>
											<h4 className="title text-white">
												M+
											</h4>
										</div>
										<p className="info text-text-grey xs:text-sm sm:text-base">
											tickets a month
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>
			{/* FEATURE SECTION  */}
			<section className="feature-section">
				<div className="Container">
					<div className="section-header-3">
						<span className="cate text-text-green-hover ">
							POWERFUL and FLEXIBLE
						</span>
						<h2 className="title text-white xs:mt-2 sm:mt-0">robust feature</h2>
						<p
							className="text-text-grey tracking-wide"
							style={{ marginTop: "-10px" }}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras neque est, aliquam eu dignissim eget,
							eleifend at nunc. Curabitur non dapibus nulla.
						</p>
					</div>
					<Row gutter={{sm:30,xs:20}}>
						<Col lg={6} md={12} sm={12} xs={24}>
							<div className="feature-item">
								<div className="feature-thumb">
									<div
										style={{
											width: "70px",
											height: "70px",
											lineHeight: "70px",
											backgroundImage:
												"linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
											boxShadow:
												"0px 10px 15px 0px rgb(59 55 188 / 50%)",
										}}
										className="flex items-center justify-center rounded-full"
									>
										<FaShip className="text-white text-3xl" />
									</div>
								</div>
								<div className="feature-content">
									<h5 className="title text-white">
										Brand New
									</h5>
									<p className="text-text-grey" style={{marginTop:'-8px'}}>
										Brand New User Interface with Latest
										Technology
									</p>
								</div>
							</div>
						</Col>
            <Col lg={6} md={12} sm={12} xs={24}>
							<div className="feature-item active">
								<div className="feature-thumb">
									<div
										style={{
											width: "70px",
											height: "70px",
											lineHeight: "70px",
											backgroundImage:
												"linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
											boxShadow:
												"0px 10px 15px 0px rgb(59 55 188 / 50%)",
										}}
										className="flex items-center justify-center rounded-full"
									>
										<MdEventSeat className="text-white text-3xl" />
									</div>
								</div>
								<div className="feature-content">
									<h5 className="title text-white">
										Seat map
									</h5>
									<p className="text-text-grey" style={{marginTop:'-8px'}}>
                  New Seat Map Feature for Ease of Ticket Booking
									</p>
								</div>
							</div>
						</Col>
            <Col lg={6} md={12} sm={12} xs={24}>
							<div className="feature-item">
								<div className="feature-thumb">
									<div
										style={{
											width: "70px",
											height: "70px",
											lineHeight: "70px",
											backgroundImage:
												"linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
											boxShadow:
												"0px 10px 15px 0px rgb(59 55 188 / 50%)",
										}}
										className="flex items-center justify-center rounded-full"
									>
										<GiPopcorn className="text-white text-3xl" />
									</div>
								</div>
								<div className="feature-content">
									<h5 className="title text-white">
										F&B
									</h5>
									<p className="text-text-grey" style={{marginTop:'-8px'}}>
                  Buy Food While Booking Tickets. Relax and Enjoy
									</p>
								</div>
							</div>
						</Col>
            <Col lg={6} md={12} sm={12} xs={24}>
							<div className="feature-item">
								<div className="feature-thumb">
									<div
										style={{
											width: "70px",
											height: "70px",
											lineHeight: "70px",
											backgroundImage:
												"linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
											boxShadow:
												"0px 10px 15px 0px rgb(59 55 188 / 50%)",
										}}
										className="flex items-center justify-center rounded-full"
									>
										<FaTicketAlt className="text-white text-3xl" />
									</div>
								</div>
								<div className="feature-content">
									<h5 className="title text-white">
										Ticket filter
									</h5>
									<p className="text-text-grey" style={{marginTop:'-8px'}}>
                  Filter Your Movie Based on choose
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</Fragment>
	);
}

export default Download;
