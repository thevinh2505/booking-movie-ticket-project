import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "features/booking/pages/Download/download.css";
import "features/booking/pages/Contact/style.css";
import "./about.css";
import { Col, Row } from "antd";
function About() {
	return (
		<Fragment>
			{/* SPEAKER BANNER   */}
			<section
				className="speaker-banner bg_img relative main-page-header"
				data-background="https://media.discordapp.net/attachments/527086735738273804/1025687462443483156/breadcumb.jpg?width=1200&height=313"
			>
				<div className="Container">
					<div className="speaker-banner-content text-center">
						<h2 className="title uppercase text-white font-semibold">
							about us
						</h2>
						<ul className="breadcrumb">
							<li>
								<NavLink to="/" exact className="capitalize">
									Home{" "}
									<MdOutlineKeyboardArrowRight className="font-bold text-2xl" />
								</NavLink>
							</li>
							<li className="capitalize">about us </li>
						</ul>
					</div>
				</div>
			</section>
			{/* SPEAKER SINGLE  */}
			<section className="about-section padding-top padding-bottom">
				<div className="Container px-0 mx-0">
					<Row className="justify-between">
						<Col className="px-4" lg={12} xs={24}>
							<div className="event-about-content">
								<div className="section-header-3  text-left m-0">
									<span className="cate text-left">
										we are Boleto{" "}
									</span>
									<h2 className="title text-left">
										Get to know us
									</h2>
									<p className="text-left">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										ut labore et dolore magna aliqua. Quis
										ipsum suspendisse ultrices gravida.
									</p>
									<p className="text-left">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										ut labore et dolore magna aliqua. Quis
										ipsum suspendisse ultrices gravida.Lorem
										ipsum dolor sit amet, consectetur
										adipiscing elit
									</p>
									<div className="text-left w-full">
										<NavLink
											to="/home"
											className="custom-button"
										>
											book tickets
										</NavLink>
									</div>
								</div>
							</div>
						</Col>
						<Col className="hidden lg:block lg:px-4" lg={10}>
							<div className="about-thumb w-full">
								<img    
                                    className="w-full"
									src="https://media.discordapp.net/attachments/527086735738273804/1025741299560759387/about-banner1.png"
									alt="about"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</Fragment>
	);
}

export default About;
