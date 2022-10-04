import React, { Fragment } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaUsers, FaTwitter, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "features/booking/pages/Download/download.css";
import "./style.css";
import { Col, Row } from "antd";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function Contact() {
	const [counterOn, setCounterOn] = useState(false);
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
							contact us
						</h2>
						<ul className="breadcrumb">
							<li>
								<NavLink to="/" exact className="capitalize">
									Home{" "}
									<MdOutlineKeyboardArrowRight className="font-bold text-2xl" />
								</NavLink>
							</li>
							<li className="capitalize">contact us </li>
						</ul>
					</div>
				</div>
			</section>
			{/* CONTACT SECTION  */}
			<section className="contact-section">
				<div className="contact-container relative">
					<div
						className="bg-thumb bg_img"
						data-background="https://media.discordapp.net/attachments/527086735738273804/1025691921391292476/contact.jpg?width=630&height=585"
						style={{
							backgroundImage:
								"url(https://media.discordapp.net/attachments/527086735738273804/1025691921391292476/contact.jpg?width=630&height=585)",
						}}
					></div>
					<div className="Container ">
						<Row
							className="justify-between"
							gutter={{ md: 30, xs: 15 }}
						>
							<Col md={14} lg={12} xl={10} xs={24}>
								<div className="section-header-3 ">
									<span className="cate uppercase text-left">
										contact us
									</span>
									<h2 className="title text-left">
										get in touch
									</h2>
									<p
										className="text-left "
										style={{ fontSize: "16px" }}
									>
										We’d love to talk about how we can work
										together. Send us a message below and
										we’ll respond as soon as possible.
									</p>
								</div>
								<form
									className="contact-form"
									id="contact_form_submit"
								>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="name"
										>
											Name <span>*</span>
										</label>
										<input
											type="text"
											placeholder="Enter Your Full Name"
											name="name"
											id="name"
											required
										/>
									</div>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="email"
										>
											Email <span>*</span>
										</label>
										<input
											type="text"
											placeholder="Enter Your Email"
											name="email"
											id="email"
											required
										/>
									</div>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="subject"
										>
											Subject <span>*</span>
										</label>
										<input
											type="text"
											placeholder="Enter Your Subject"
											name="subject"
											id="subject"
											required
										/>
									</div>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="message"
										>
											Message <span>*</span>
										</label>
										<textarea
											name="message"
											id="message"
											placeholder="Enter Your Message"
											required
											defaultValue={""}
										/>
									</div>
									<div className="form-group">
										<input
											type="submit"
											value="Send Message"
										/>
									</div>
								</form>
							</Col>
							<Col md={10} lg={12} xs={24}>
								<div className=" contact-info flex flex-wrap">
									<div className="info-area ">
										<div className="info-item items-center">
											<div className="info-thumb">
												<img
													src="https://media.discordapp.net/attachments/527086735738273804/1025710957747515392/dtban.png"
													alt="contact"
												/>
											</div>
											<div className="info-content">
												<h6 className="title text-white">
													phone number
												</h6>
												<a href="Tel:0396089302">
													0396089302
												</a>
											</div>
										</div>
										<div className="info-item items-center">
											<div className="info-thumb">
												<img
													src="https://media.discordapp.net/attachments/527086735738273804/1025710909525602334/hopthu.png"
													alt="contact"
												/>
											</div>
											<div className="info-content">
												<h6 className="title text-white">
													Email
												</h6>
												<a href="Mailto:info@gmail.com">
													vinh@gmail.com
												</a>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>
			{/* CONTACT COUNTER SECTION  */}
			<ScrollTrigger
				onEnter={() => setCounterOn(true)}
				onExit={() => setCounterOn(false)}
			>
				<section className="contact-counter">
					<div className="Container">
						<Row className="justify-center md:gap-0 lg:gap-0">
							<Col
								className="md:px-2 lg:px-3 md:pb-4 lg:pb-0  sm:pb-6 xs:px-0 xs:pb-6 "
								lg={6}
								md={12}
								sm={12}
								xs={24}
							>
								<div className="contact-counter-item">
									<div className="contact-counter-thumb flex justify-center items-center">
										<div className="">
											<FaFacebookF
												style={{ lineHeight: "50px" }}
											/>
										</div>
									</div>
									<div className="contact-counter-content">
										<div className="counter-item">
											<h5 className="title">
												{counterOn && (
													<CountUp
														start={0}
														end={130}
														duration={1.5}
														delay={0}
													/>
												)}
											</h5>
											<h5 className="title">K</h5>
										</div>
										<p>Followers</p>
									</div>
								</div>
							</Col>
							<Col
								className="md:px-2 lg:px-3 md:pb-4 lg:pb-0  sm:pb-6 xs:px-0 xs:pb-6"
								lg={6}
								md={12}
								sm={12}
								xs={24}
							>
								<div className="contact-counter-item active">
									<div className="contact-counter-thumb flex justify-center items-center">
										<div className="">
											<FaUsers
												style={{ lineHeight: "50px" }}
											/>
										</div>
									</div>
									<div className="contact-counter-content">
										<div className="counter-item">
											<h5 className="title">
												{counterOn && (
													<CountUp
														start={0}
														end={35}
														duration={1.5}
														delay={0}
													/>
												)}
											</h5>
											<h5 className="title">K</h5>
										</div>
										<p>Members</p>
									</div>
								</div>
							</Col>
							<Col
								className="md:px-2 lg:px-3 md:pb-4 lg:pb-0  sm:pb-6 xs:px-0 xs:pb-6"
								lg={6}
								md={12}
								sm={12}
								xs={24}
							>
								<div className="contact-counter-item">
									<div className="contact-counter-thumb flex justify-center items-center">
										<div className="">
											<FaTwitter
												style={{ lineHeight: "50px" }}
											/>
										</div>
									</div>
									<div className="contact-counter-content">
										<div className="counter-item">
											<h5 className="title">
												{counterOn && (
													<CountUp
														start={0}
														end={47}
														duration={1.5}
														delay={0}
													/>
												)}
											</h5>
											<h5 className="title">K</h5>
										</div>
										<p>Followers</p>
									</div>
								</div>
							</Col>
							<Col
								className="md:px-2 lg:px-3 md:pb-4 lg:pb-0  sm:pb-6 xs:px-0 xs:pb-6"
								lg={6}
								md={12}
								sm={12}
								xs={24}
							>
								<div className="contact-counter-item">
									<div className="contact-counter-thumb flex justify-center items-center">
										<div className="">
											<FaEnvelope
												style={{ lineHeight: "50px" }}
											/>
										</div>
									</div>
									<div className="contact-counter-content">
										<div className="counter-item">
											<h5 className="title">
												{counterOn && (
													<CountUp
														start={0}
														end={290}
														duration={1.5}
														delay={0}
													/>
												)}
											</h5>
											<h5 className="title">K</h5>
										</div>
										<p>Subscribers</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</section>
			</ScrollTrigger>
		</Fragment>
	);
}

export default Contact;
