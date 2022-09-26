import React, { Fragment, useEffect } from "react";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import {
	FaCalendarAlt,
	FaRegClock,
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
	FaInstagram,
	FaGoogle,
} from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchCinemaScheduleAction,
	fetchscheduleAction,
	fetchMovieDetailAction,
} from "features/booking/utils/action";
import "assets/circle.css";
import "./style.css";
import Loading from "common/components/Loading";
import moment from "moment";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		padding: 0,
		border: "none",
	},
};
function Detail(props) {
	const match = useRouteMatch();
	const maPhim = +match.params.id;
	const dispatch = useDispatch();
	const movieDetail = useSelector((state) => state.booking.movieDetail);
	const cinemaSystem = useSelector((state) => state.booking.cinemaSystem);
	// lấy danh sách hệ thống rạp chiếu phim
	const getCinemaSchedule = (id) => {
		dispatch(fetchCinemaScheduleAction(id));
	};
	//lấy thông tin lịch chiếu theo logo hệ thống rạp
	const getSchedule = async () => {
		const cinemaData = await dispatch(fetchscheduleAction);
		getCinemaSchedule(cinemaData[0].maHeThongRap);
	};
	useEffect(() => {
		dispatch(fetchMovieDetailAction(maPhim));
		getSchedule();
	}, []);
	if (movieDetail === {}) {
		return <Loading />;
	}

	return (
		<div>
			<DetailBanner movieDetail={movieDetail} dispatch={dispatch} />
			<DetailLocation cinemaSystem={cinemaSystem} maPhim={maPhim} />
		</div>
	);
}

function DetailBanner(props) {
	const movieDetail = props?.movieDetail;
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<Fragment>
			<div
				className="bg-no-repeat bg-cover bg-center details-banner relative"
				style={{
					backgroundImage:
						"url('http://pixner.net/boleto/demo/assets/images/banner/banner03.jpg')",
					maxHeight: "323px",
				}}
			>
				<div className="Container xs:pt-10 sm:pt-16 lg:pt-36">
					<div className="details-banner-wrapper relative ">
						<div
							className="details-banner-thumb absolute top-0 left-0 "
							style={{ maxWidth: "255px" }}
						>
							<div className="film_item relative">
								<img
									style={{ maxWidth: "255px" }}
									className="w-full "
									src={movieDetail.hinhAnh}
									alt="anh phim"
								/>
								<div
									onClick={openModal}
									className="film_trailer-btn absolute top"
								>
									<BsPlayCircleFill className="trailer-btn absolute" />
								</div>
							</div>
						</div>
						<div className="details-banner-content offset-lg-3">
							<h3 className="title xs:text-2xl sm:text-3xl  text-white font-semibold mb-2 cursor-default text">
								{movieDetail.tenPhim}
							</h3>
							<p className="mt-1 text-text-light-blue xs:text-xs sm:text-sm tracking-wide xs:mb-3 sm:mb-5 cursor-default">
								ENGLISH , VIETNAMESE
							</p>
							<div
								className="cursor-pointer xs:text-xs sm:text-sm text-text-light-blue duration-500 xs:mb-3 sm:mb-4 tracking-widest rounded-2xl py-1.5 px-4 inline-block light-button"
								style={{
									border: "1px solid rgba(163, 177, 198, 0.2)",
								}}
							>
								ACTION
							</div>
							<div className="flex justify-between items-center text-text-light-blue flex-wrap pb-4 gap-4">
								<div className="flex items-center ">
									<div className="flex items-center my-1 mr-3 cursor-default">
										<FaCalendarAlt />
										<p className="ml-1 text-sm tracking-wider">
											{moment(
												movieDetail.ngayChieuGioChieu
											).format("DD-M-YYYY")}
										</p>
									</div>
									<div className="flex items-center my-1 mx-3 cursor-default">
										<FaRegClock />
										<p className="ml-1 text-sm">
											2 hrs 50 mins
										</p>
									</div>
								</div>
								<div className="items-center text-white sm:flex xs:hidden">
									<div className="text-white cursor-pointer duration-500 hover:text-text-green-hover mr-5 text-sm">
										<FaFacebookF />
									</div>
									<div className="text-white cursor-pointer duration-500 hover:text-text-green-hover mr-5 text-sm">
										<FaTwitter />
									</div>
									<div className="text-white cursor-pointer duration-500 hover:text-text-green-hover mr-5 text-sm">
										<FaPinterestP />
									</div>
									<div className="text-white cursor-pointer duration-500 hover:text-text-green-hover mr-5 text-sm">
										<FaInstagram />
									</div>
									<div className="text-white cursor-pointer duration-500 hover:text-text-green-hover mr-5 text-sm">
										<FaGoogle />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="lg:py-10 sm:py-5 xs:py-4"
				style={{
					backgroundColor: "#001932",
					borderTop: "1px solid #17305f",
					borderBottom: "1px solid #17305f",
					minHeight: "185px",
				}}
			>
				<div className="Container block ">
					<div className="offset-lg-3">
						<h4
							className=" xs:text-lg sm:text-xl tracking-wide xs:mb-1 sm:mb-2"
							style={{ color: "#3dd9d6" }}
						>
							Movie content:
						</h4>
						<p
							className=" xl:w-3/4 w-full xs:text-sm sm:text-base tracking-wide  font-normal "
							style={{ color: "#dbe2fb", lineHeight: "1.4" }}
						>
							{movieDetail.moTa}
						</p>
					</div>
				</div>
			</div>
			<div className="Container flex lg:py-10 sm:py-5 xs:py-4">
				<div
					className=" cursor-pointer xs:text-xs sm:text-sm text-text-light-blue duration-500  xs:mr-4 tracking-widest rounded-2xl py-1.5 px-4 inline-block light-button"
					style={{
						border: "1px solid rgba(163, 177, 198, 0.2)",
					}}
				>
					2D
				</div>
				<div
					className=" cursor-pointer xs:text-xs sm:text-sm text-text-light-blue duration-500  xs:mr-4 tracking-widest rounded-2xl py-1.5 px-4 inline-block light-button"
					style={{
						border: "1px solid rgba(163, 177, 198, 0.2)",
					}}
				>
					IMAX 2D
				</div>
				<div
					className=" cursor-pointer xs:text-xs sm:text-sm text-text-light-blue duration-500  xs:mr-4 tracking-widest rounded-2xl py-1.5 px-4 inline-block light-button"
					style={{
						border: "1px solid rgba(163, 177, 198, 0.2)",
					}}
				>
					4DX
				</div>
			</div>
		</Fragment>
	);
}
function DetailLocation(props) {
	const showTimeRef = useRef();
	const dispatch = useDispatch();
	const history = useHistory();
	const cinemaSystem = useSelector((state) => state.booking.cinemaSystem);
	const schedule = useSelector((state) => state.booking.schedule);
	if (schedule.length === 0) {
		return;
	}
	const handleChangeLogo = (data) => {
		dispatch(fetchCinemaScheduleAction(cinemaSystem[data]?.maHeThongRap));
	};
	const checkArr = [];
	console.log(schedule, "schedule");
	const goToBooking = (id, maHeThongRap) => {
		history.push(`/checkout/${id}/${maHeThongRap}`);
	};
	// const handleChevronRef=(e)=>{
	// 	e.preventDefault()
	// 	chevronRef.current.classList.add("rotate-back")
	// 	console.log('111');
	// 	console.log(chevronRef)
	// }
	return (
		<Fragment>
			<div
				className="  xs:pt-4 sm:pt-5 lg-pt-10"
				style={{ backgroundColor: "#001932" }}
			>
				<div className="Container">
					<h2 className="text-text-grey xs:mb-4 sm:mb-5 sm:text-xl xs:text-lg font-normal leading-4">
						Choose cinema:
					</h2>
					<div className="flex items-center justify-left  logo-row">
						{cinemaSystem.map((item, index) => {
							return (
								<div
									key={item.maHeThongRap}
									className="block w-full"
								>
									<img
										onClick={() => handleChangeLogo(index)}
										src={item.logo}
										alt="cinema logo"
										className="w-full block cinema-logo-detail cursor-pointer"
									/>
								</div>
							);
						})}
					</div>
					<div
						className="xs:mt-4 sm:mt-5 lg:mt-10 cursor-default pb-3"
						style={{ borderBottom: " 1px solid #212f50" }}
					>
						<h2
							className="text-white xs:text-lg sm:text-xl capitalize"
							style={{ color: "#dbe2fb" }}
						>
							{schedule.tenHeThongRap}
						</h2>
						<p
							className="xs:text-sm sm:text-base"
							style={{ color: "#99a5b2" }}
						>
							Choose the cinema and schedule you want to see
						</p>
					</div>
				</div>
				<div className="Container" style={{ background: "#0c1b36" }}>
					{schedule.lstCumRap?.map((cumRap) => {
						// KIỂM TRA XEM HỆ THỐNG RẠP CÓ LỊCH CHIẾU PHIM HIỆN TẠI KO
						const currentMovie = cumRap.danhSachPhim.find(
							(item) => {
								console.log(typeof item.maPhim, "item maPhim");
								return item.maPhim === props.maPhim;
							}
						);
						console.log(currentMovie, "currentMovie");
						if (!currentMovie) {
							return null;
						}
						if (currentMovie) {
							checkArr.push(currentMovie);
						}
						return (
							<Fragment>
								<div
									className="pt-3"
									style={{
										borderBottom:
											"1px solid rgb(33, 47, 80)",
									}}
								>
									<div className="cinema-agency flex pb-1 items-center justify-between">
										<div className="flex items-center">
											<img
												style={{ width: "38px" }}
												src={schedule.logo}
												alt="logo he thong rap"
											/>
											<div className="ml-3">
												<p className="text-sm  text-text-grey capitalize">
													{cumRap.tenCumRap}
												</p>
												<p
													className="text-sm mt-1"
													style={{ color: "#99a5b2" }}
												>
													{cumRap.diaChi}
												</p>
											</div>
										</div>
										{/* <div >
											<img  ref={chevronRef} className=" cursor-pointer" src="https://movie.zalopay.vn/images/icon-arrow-down.svg" alt="button open"/>
										</div> */}
									</div>
									<div ref={showTimeRef} className="pt-2">
										<p className="text-sm text-text-grey font-medium">
											Show times:
										</p>
										<div className="flex flex-wrap gap-3 pb-4 mt-3">
											{currentMovie.lstLichChieuTheoPhim.map(
												(item) => {
													return (
														<button
															onClick={() => {
																goToBooking(
																	item.maLichChieu,
																	schedule?.maHeThongRap
																);
															}}
															className="font-medium lg:text-sm xs:text-xs xs:w-12 lg:w-16 tracking-wider rounded-lg py-1 bg-transparent"
															style={{
																border: " 1px solid #ccd2d8",
																color: "#ccd2d8",
															}}
														>
															{moment(
																item.ngayChieuGioChieu
															).format("hh:mm")}
														</button>
													);
												}
											)}
										</div>
									</div>
								</div>
							</Fragment>
						);
					})}
					{checkArr.length === 0 && (
						<>
							<div className="flex items-center justify-center flex-col py-12 px-8 text-center">
								<img
									className="object-contain"
									style={{ width: "120px", height: "120px" }}
									src="https://movie.zalopay.vn/images/mascot-1.png"
									alt="thong bao"
								/>
								<p className="mt-6 font-medium xs:text-sm sm:text-lg text-white mb-0 leading-5 ">
									This theater hasn't had a show time of this
									movie yet
								</p>
								<p
									className="mt-2 leading-5 sm:text-sm xs:text-xs"
									style={{ color: "#ccd2d8" }}
								>
									Please find another theater
								</p>
							</div>
						</>
					)}
				</div>
			</div>
		</Fragment>
	);
}
export default Detail;
