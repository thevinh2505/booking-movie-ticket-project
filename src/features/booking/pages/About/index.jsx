import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "features/booking/pages/Download/download.css";
import "features/booking/pages/Contact/style.css";
import "./about.css";
import { Col, Row } from "antd";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function About() {
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
			<section className="about-section overflow-hidden padding-top padding-bottom">
				<div className="Container px-0 mx-0">
					<Row className=" ">
						<Col className="lg:" lg={12} xs={24}>
							<div className="event-about-content">
								<div className="section-header-3  text-left m-0">
									<span className="cate text-left">
										we are Movflx{" "}
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
										ut labore et dolore magna aliqua.Quis
										ipsum suspendisse ultrices gravida
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
						<Col className="hidden lg:block lg:" lg={10}>
							<div
								className="about-thumb w-full "
								style={{ width: "900px", height: "394px" }}
							>
								<img
									className="w-full h-full about-background-1"
									src="https://media.discordapp.net/attachments/527086735738273804/1025741299560759387/about-banner1.png"
									alt="about"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</section>
			{/* PHILOSOPHY SECTION  */}
			<section className="philosophy-section bg_img bg_quarter_img  bg_quarter_img bg_one">
				<div className="Container">
					<Row className="w-full">
						<Col
							lg={18}
							className="offset-lg-3  bg_two"
							style={{ padding: "0 15px" }}
						>
							<div className="philosophy-content">
								<div className="section-header-3">
									<span className="cate text-left">
										Take look at
									</span>
									<h2 className="title text-left">
										Our philosophy
									</h2>
									<p className="ml-0 text-left">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmtempor
										incididunt labore et dolore magna aliqu
										enim ad minim veniam quis nostrud
										exercitation ullamco laboris nisi ut
										aliquip
									</p>
								</div>
								<ul className="phisophy-list">
									<li>
										<div className="thumb">
											<img
												src="https://media.discordapp.net/attachments/527086735738273804/1025977480298897508/hand.png"
												alt="philosophy"
											/>
										</div>
										<h5 className="title text-white">
											Honesty &amp; Fairness{" "}
										</h5>
									</li>
									<li>
										<div className="thumb">
											<img
												src="https://media.discordapp.net/attachments/527086735738273804/1025977627514785902/icon2about.png"
												alt="philosophy"
											/>
										</div>
										<h5 className="title text-white">
											Clarity &amp; Transparency
										</h5>
									</li>
									<li>
										<div className="thumb">
											<img
												src="https://media.discordapp.net/attachments/527086735738273804/1025977777524052029/icon3about.png"
												alt="philosophy"
											/>
										</div>
										<h5 className="title text-white">
											Focus on Customers
										</h5>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</div>
			</section>
			{/* ABOUT-COUNTER-SECTION  */}
			<ScrollTrigger
				onEnter={() => setCounterOn(true)}
				onExit={() => setCounterOn(false)}
			>
				<section className="about-counter-section">
					<div className="Container">
						<div style={{ margin: "0 -15px" }}>
							<Row gutter={[15, 15]}>
								<Col lg={8} xs={24}>
									<div className="section-header-3 mb-lg-0">
										<span className="cate text-left">
											quick facts
										</span>
										<h2 className="title text-left">
											fun facts
										</h2>
										<p className="text-left">
											Objectively seize scalable metrics
											whereas proactive services
											seamlessly empower fully researched
											growth strategies
										</p>
									</div>
								</Col>
								<Col lg={16} xs={24}>
									<div className="about-counter">
										<div className="counter-item">
											<div className="counter-thumb flex justify-center items-center">
												<img
													className=" w-16"
													src="https://media.discordapp.net/attachments/527086735738273804/1025985103907799071/about-counter01.png"
													alt="about"
												/>
											</div>
											<div className="counter-content">
												<h3 className="title">
													{/* <Odometer value={30} format="d" animation="count" duration={1000} /> */}
													{/* <Odometer value={30} format="" /> */}
													{counterOn && (
														<CountUp
															start={0}
															end={30}
															duration={1.5}
															delay={0}
														/>
													)}
												</h3>
												<h3 className="title">M+</h3>
											</div>
											<span className="block info">
												Customers
											</span>
										</div>
										<div className="counter-item">
											<div className="counter-thumb flex justify-center items-center">
												<img
													className=" w-16"
													src="https://media.discordapp.net/attachments/527086735738273804/1025985171008266250/about-counter02.png"
													alt="about"
												/>
											</div>
											<div className="counter-content">
												<h3 className="title">
													{counterOn && (
														<CountUp
															start={0}
															end={11}
															duration={1.5}
															delay={0}
														/>
													)}
												</h3>
											</div>
											<span className="block info">
												Countries
											</span>
										</div>
										<div className="counter-item">
											<div className="counter-thumb flex justify-center items-center">
												<img
													className=" w-16"
													src="https://media.discordapp.net/attachments/527086735738273804/1025985277610700830/about-counter03.png"
													alt="about"
												/>
											</div>
											<div className="counter-content">
												<h3 className="title">
													{counterOn && (
														<CountUp
															start={0}
															end={650}
															duration={1.5}
															delay={0}
														/>
													)}
												</h3>
												<h3 className="title">+</h3>
											</div>
											<span className="block info">
												Towns & Cities
											</span>
										</div>
										<div className="counter-item">
											<div className="counter-thumb flex justify-center items-center">
												<img
													className=" w-16"
													src="https://media.discordapp.net/attachments/527086735738273804/1025985309789405225/about-counter04.png"
													alt="about"
												/>
											</div>
											<div className="counter-content">
												<h3 className="title">
													{counterOn && (
														<CountUp
															start={0}
															end={5000}
															duration={1.5}
															delay={0}
														/>
													)}
												</h3>
												<h3 className="title">+</h3>
											</div>
											<span className="block info">
												Screens
											</span>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</section>
			</ScrollTrigger>

			{/* GALLERY SECTION  */}
			<section className="gallery-section">
				<div className="Container">
					<div className="section-header-3">
						<span className="cate">Take a look at our</span>
						<h2 className="title">A ticket for every fan.</h2>
						<p>
							World is committed to making participation in the
							event a harassment free experience for everyone,
							regardless of level of experience, gender, gender
							identity and expression
						</p>
					</div>
					{/* ROW  */}
					<div style={{ marginInline: "-16px" }}>
						<Row
							className="gallery "
							style={{ marginInline: "-15px" }}
						>
							<Col
								lg={6}
								sm={12}
								xs={24}
								style={{ padding: "0 15px" }}
							>
								<div className="gallery-item left">
									<img
										className="w-full"
										src="https://timviec365.vn/pictures/images/viec-lam-tai-cgv-2.png"
										alt="about"
									/>
								</div>
								<div
									className="gallery-item left"
									style={{ margin: "30px 0	" }}
								>
									<img
										className="w-full"
										src="data:image/jpeg;base64,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"
										alt="about"
									/>
								</div>
								<div className="gallery-item left">
									<img
										className="w-full"
										src="https://cinestar.com.vn/pictures/webimages/5TinTuc/Tuyendung/cinestar-tuyen-dung-nhan-vien-phuc-vu-01.jpg"
										alt="about"
									/>
								</div>
							</Col>
							<Col
								lg={6}
								sm={12}
								xs={24}
								className="lg:order-1 "
								style={{ padding: "0 15px" }}
							>
								<div className="gallery-item left xs:pt-8 sm:pt-0">
									<img
										className="w-full"
										src="https://elead.com.vn/wp-content/uploads/2020/04/photo-1-1540693913565639768683.jpg"
										alt="about"
									/>
								</div>
								<div
									className="gallery-item left"
									style={{ margin: "30px 0	" }}
								>
									<img
										className="w-full"
										src="https://haiphongtop10.net/wp-content/uploads/0fa4a89b-191d-4e81-8373-481c46aec96f.jpg"
										alt="about"
									/>
								</div>
								<div className="gallery-item left">
									<img
										className="w-full"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpeRm3W3QQAanbFEJEAMF_CK3lbXC-owfIK7EuIzoARgsAn-VmP2de3sGl7gG1bDE_vw&usqp=CAU"
										alt="about"
									/>
								</div>
							</Col>
							<Col
								lg={12}
								xs={24}
								className=""
								style={{ padding: "0 15px" }}
							>
								<div
									className="gallery-item big"
									style={{ marginBottom: "30px" }}
								>
									<img
										className="w-full"
										src="https://media.discordapp.net/attachments/527086735738273804/1026012487566512218/gallery08.jpg"
										alt="about"
									/>
								</div>
								<div style={{ margin: "0 -15px" }}>
									<Row>
										<Col
											sm={12}
											xs={24}
											style={{ padding: "0 15px" }}
										>
											<div className="gallery-item left">
												<img
													className="w-full"
													src="data:image/jpeg;base64,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"
													alt="about"
												/>
											</div>
										</Col>
										<Col
											sm={12}
											xs={24}
											style={{ padding: "0 15px" }}
										>
											<div className="gallery-item left sm:pt-0 xs:pt-8">
												<img
													className="w-full"
													src="https://cdn.baogiaothong.vn/files/dung.nguyen/2018/07/31/115559-len-keo-ru-gau-di-xem-phimghe-doi-cgv-49k-danh-rieng-cho-cac-couple-c2c77b86636439243449633412.jpg"
													alt="about"
												/>
											</div>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>
			{/* TOUR SECTION  */}
			<div className="tour-section overflow-hidden">
				<div className="Container">
					<div style={{ margin: "0 -15px" }}>
						<Row className="w-full ">
							<Col lg={12} xs={24} style={{ padding: "0 15px" }}>
								<div className="tour-content">
									<div className="section-header-3 ">
										<span className="cate text-left">
											take a look at our tour
										</span>
										<h2 className="title  text-left">
											Guarantees you can trust.
										</h2>
										<p className="ml-0  text-left">
											Because more peace of mind means
											more love for the event.
										</p>
									</div>
									<div className="list-tour">
										<div className="flex mb-11">
											<div className="thumb flex justify-center items-center  ">
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1026118745317445632/icon01.png"
													alt="logo"
												/>
											</div>
											<div className="pl-5">
												<h5 className="title text-white mb-3">
													Get In Guarantee
												</h5>
												<p className="text-text-grey">
													Authentic tickets, on-time
													delivery, and access to your
													event. Or your money back.
													Period.
												</p>
											</div>
										</div>
										<div className="flex ">
											<div className="thumb flex justify-center items-center ">
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1026118805254066267/icon02.png"
													alt="logo"
												/>
											</div>
											<div className="pl-5">
												<h5 className="title capitalize text-white mb-3">
													price match guarantee
												</h5>
												<p className="text-text-grey">
													The best prices are here. If
													you spot a better deal
													elsewhere, we’ll cover the
													difference.
												</p>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col lg={12} className="hidden lg:block lg:px-4 ">
								<div className="tour-thumb">
									<img
										className="w-full h-full"
										src="https://media.discordapp.net/attachments/527086735738273804/1026118951396180068/tour.png"
										alt="1"
									/>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default About;
