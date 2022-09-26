import { Col, Row } from "antd";
import {
	fetchBookingTicketAction,
	fetchBoxOfficeListAction,
	fetchCinemaScheduleAction,
	SET_COST,
	SET_SELECTED_SEATS,
} from "features/booking/utils/action";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import styles from "./style.module.css";
import "./style.css";
import _ from "lodash";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Tabs } from "antd";
import { useRef } from "react";
import { LoadingOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
export default function BookingTab(props) {
	const match = useRouteMatch();
	const MaPhim = match.params.id;
	const maHeThongRap = match.params.maHeThongRap;
	const dispatch = useDispatch();
	const boxOfficeList = useSelector((state) => state.booking.boxOfficeList);
	const selectedSeats = useSelector((state) => state.booking.selectedSeats);

	const [activeTabKey, setActiveTabKey] = useState("1");
	useEffect(() => {
		dispatch(fetchBoxOfficeListAction(MaPhim));
		dispatch(fetchCinemaScheduleAction(maHeThongRap));
	}, []);
	if (boxOfficeList === {}) {
		return;
	}
	const changeTab = (activeKey) => {
		setActiveTabKey(activeKey);
	};
	const { thongTinPhim, danhSachGhe } = boxOfficeList;
	return (
		<div className="tab-booking-ticket">
			<Tabs
				className="mt-4 "
				defaultActiveKey="1"
				activeKey={activeTabKey}
				onChange={changeTab}
			>
				<TabPane
					className="text-white"
					tab={
						<p className="text-white xs:text-xs sm:text-sm">
							1. Pick Seat{" "}
							<HiOutlineChevronRight className="inline-block" />
						</p>
					}
					key="1"
				>
					<CheckOut
						{...props}
						MaPhim={MaPhim}
						dispatch={dispatch}
						selectedSeats={selectedSeats}
						boxOfficeList={boxOfficeList}
						thongTinPhim={thongTinPhim}
						danhSachGhe={danhSachGhe}
						activeTabKey={activeTabKey}
						setActiveTabKey={setActiveTabKey}
					/>
				</TabPane>
				<TabPane
					className="text-white"
					tab={
						<p className="text-white ml-1 xs:text-xs sm:text-sm">
							2. Pick Combo{" "}
							<HiOutlineChevronRight className="inline-block" />
						</p>
					}
					key="2"
				>
					<Combo
						{...props}
						dispatch={dispatch}
						selectedSeats={selectedSeats}
						boxOfficeList={boxOfficeList}
						setActiveTabKey={setActiveTabKey}
						thongTinPhim={thongTinPhim}
						danhSachGhe={danhSachGhe}
					/>
				</TabPane>
				<TabPane
					className="text-white"
					tab={
						<p className="text-white xs:text-xs sm:text-sm">
							3. Result
						</p>
					}
					key="3"
				>
					<BookingResult
						{...props}
						dispatch={dispatch}
						selectedSeats={selectedSeats}
						boxOfficeList={boxOfficeList}
						thongTinPhim={thongTinPhim}
						danhSachGhe={danhSachGhe}
					/>
				</TabPane>
			</Tabs>
		</div>
	);
}
function CheckOut(props) {
	const otherSelectedSeats = useSelector(
		(state) => state.booking.otherSelectedSeats
	);
	const arrowDownRef = useRef();
	const bookingInfoWrapperRef = useRef();
	const handleBookingTicket = () => {
		const thongTinDatVe = {
			maLichChieu: +props.MaPhim,
			danhSachVe: props.selectedSeats,
		};
		console.log(thongTinDatVe);
		// props.dispatch(fetchBookingTicketAction(thongTinDatVe));
		props.setActiveTabKey("2");
	};
	const handleArrowDown = () => {
		arrowDownRef.current.classList.toggle("rotate-180");
		bookingInfoWrapperRef.current.classList.toggle("d-block");
	};
	const renderSeat = () => {
		return props.danhSachGhe?.map((seat, index) => {
			let classSeatVip = seat.loaiGhe === "Vip" ? "seat-vip" : "";
			let classBookedSeat = seat.daDat ? "seat-booked" : "";
			let classSelectedSeat = "";
			let classOtherSelectedSeats = "";
			let indexSelectedSeat = props.selectedSeats.findIndex(
				(gheDD) => gheDD.maGhe === seat.maGhe
			);
			if (indexSelectedSeat !== -1) {
				classSelectedSeat = "seat-selected";
			}
			// kiểm tra xem danh sách ghế đang đặt có người khác đang đặt ko
			let indexOtherSelectedSeats = otherSelectedSeats?.findIndex(
				(item) => item.maGhe === seat.maGhe
			);
			// nếu có ngkhac đang đặt -> đổi classOtherSelectedSeats
			if (indexOtherSelectedSeats !== -1) {
				classOtherSelectedSeats = "other-selected";
			}
			return (
				<Fragment>
					<button
						onClick={() => {
							props.dispatch({
								type: SET_SELECTED_SEATS,
								payload: seat,
							});
						}}
						disabled={seat.daDat || classOtherSelectedSeats !== ""}
						key={seat.maGhe}
						className={`relative seat ${classSeatVip} ${classBookedSeat} ${classSelectedSeat} ${classOtherSelectedSeats}`}
					>
						<p className="font-medium seat-position absolute">
							{classOtherSelectedSeats !== "" ? (
								<LoadingOutlined />
							) : (
								seat.stt
							)}
						</p>
					</button>
					{(index + 1) % 16 === 0 ? <br /> : ""}
				</Fragment>
			);
		});
	};
	return (
		<Fragment>
			<Row className="">
				<Col lg={18} sm={24} xs={24} className={styles.bookingSection}>
					<div>
						<div className="screen-wrap mt-2">
							<div
								className={`screen text-center ${styles.bookingSection}`}
							>
								<p
									className="text-white  mb-2 mt-4 text-base"
									style={{
										letterSpacing: "5px",
										fontWeight: 600,
									}}
								>
									SCREEN
								</p>
								<img
									className="screen-1"
									src="https://movie.zalopay.vn/images/screen-1.png"
									alt="screen"
								/>
								<img
									className="screen-2"
									src="https://movie.zalopay.vn/images/screen-2.png"
									alt="light"
								/>
							</div>
						</div>
						<div className="seat-section  text-center">
							{renderSeat()}
						</div>
					</div>
				</Col>
				<Col lg={6} sm={0} xs={0}>
					<div className="flex w-full md:mt-36 flex-wrap   md:flex-col">
						<div className="seat-type flex mt-10 items-center md:w-full w-1/8 ">
							<div className="seat-detail normal"></div>
							<div className="seat-type-name md:text-base ml-1 sm:text-sm text-xs text-white">
								Normal Seat
							</div>
						</div>
						<div className="seat-type flex mt-4 items-center w-1/8 ">
							<div className="seat-detail vip"></div>
							<div className="seat-type-name md:text-base ml-1 sm:text-sm text-xs text-white">
								Vip Seat
							</div>
						</div>
						<div className="seat-type flex mt-4 items-center w-1/8 ">
							<div className="seat-detail selected"></div>
							<div className="seat-type-name md:text-base ml-1 sm:text-sm text-xs text-white">
								Selecting Seat
							</div>
						</div>
						<div className="seat-type flex mt-4 items-center w-1/8 ">
							<div className="seat-detail booked"></div>
							<div className="seat-type-name md:text-base ml-1 sm:text-sm text-xs text-white">
								Booked Seat
							</div>
						</div>
						<div className="seat-type flex mt-4 items-center w-1/8 ">
							<div className="seat-detail other-selected"></div>
							<div className="seat-type-name md:text-base ml-1 sm:text-sm text-xs text-white">
								Other Selecting
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<div className="ticket-info-bottom overflow-hidden w-full fixed bottom-0 left-0 right-0">
				<div className="  md:py-4 md:px-8 py-2 px-4 bg-background-light BOOKING-INFO">
					<div className="flex justify-between INFOTICKET-WRAPPER">
						<div className="flex items-center md:text-base text-sm">
							<img
								src="https://movie.zalopay.vn/images/icon-ticket.svg"
								alt="ticket"
							/>
							<p className="ml-2">Booking Info</p>
						</div>
						<div>
							<img
								className="duration-500 cursor-pointer"
								ref={arrowDownRef}
								onClick={handleArrowDown}
								src="https://movie.zalopay.vn/images/icon-arrow-down-white.svg"
								alt=""
							/>
						</div>
					</div>
					<div
						ref={bookingInfoWrapperRef}
						className="SELECTED-SEAT-INFO mt-4 hidden duration-500"
					>
						{props.selectedSeats.length === 0 ? (
							<div className="flex flex-col items-center justify-center ">
								<img
									className="w-16 h-16"
									src="https://movie.zalopay.vn/images/mascot-1.png"
									alt="con meo"
								/>
								<p className="mt-2 text-sm text-text-grey-color">
									You forgot to choose seat
								</p>
							</div>
						) : (
							<Row>
								{_.sortBy(props.selectedSeats, ["stt"]).map(
									(item) => {
										return (
											<Col
												className=" text-xs md:text-base"
												md={6}
												sm={8}
												xs={12}
											>
												<div className="py-2 px-3 flex justify-between items-center rounded-lg border border-solid border-border-blue bg-secondary-color">
													<div>
														<p className="text-text-grey-dark mb-0.5">
															Seat: {item.tenGhe}
														</p>
														<p className="text-white">
															{item.giaVe}đ
														</p>
													</div>
													<p>
														{item.loaiGhe === "Vip"
															? "Vip"
															: "Normal"}
													</p>
												</div>
											</Col>
										);
									}
								)}
							</Row>
						)}
					</div>
				</div>

				<div className="bg-secondary-color w-full  md:py-4 md:px-8 py-3 px-4 flex justify-between items-center md:text-base text-sm">
					<div className="flex items-center ">
						<img
							src="https://movie.zalopay.vn/images/icon-bill.svg"
							alt="bill"
						/>
						<p className="ml-2">
							{props.selectedSeats.reduce((accumulator, item) => {
								return (accumulator += item.giaVe);
							}, 0)}
							đ
						</p>
					</div>
					<button
						onClick={handleBookingTicket}
						className="bg-border-blue py-2 px-4 text-sm duration-500 hover:bg-blue-900 rounded-3xl"
					>
						NEXT STEP
					</button>
				</div>
			</div>
		</Fragment>
	);
}

function Combo(props) {
	const schedule = useSelector((state) => state.booking.schedule);
	const [harmony1, setHarmony1] = useState(0);
	const [harmony2, setHarmony2] = useState(0);
	const [adam1, setAdam1] = useState(0);
	const [adam2, setAdam2] = useState(0);
	// const seatMoney = props.selectedSeats.reduce((accumulator, item) => {
	// 	return (accumulator += item.giaVe);
	// }, 0);
	let items = harmony1 + harmony2 + adam1 + adam2;
	let comboMoney = 0;
	useEffect(() => {
		props.dispatch({
			type: SET_COST,
			payload: { comboMoney, items },
		});
	}, [harmony1, harmony2, adam1, adam2, comboMoney]);

	const handleImage = () => {
		switch (schedule?.maHeThongRap) {
			case "LotteCinima":
				comboMoney =
					harmony1 * 110000 +
					harmony2 * 135000 +
					adam1 * 200000 +
					adam2 * 350000;
				return (
					<div className="flex w-full">
						<div className="lg:w-1/3 xl:w-2/4 md:w-1/2 w-full">
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://media.lottecinemavn.com/Media/WebAdmin/7ffbcb16b7354b278d39944aac5b3570.jpg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										HARMONY COMBO
									</p>
									<p className="mt-2 font-medium text-base">
										110.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony1 === 0) {
													return;
												}
												setHarmony1(harmony1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony1}
										</p>
										<button
											onClick={() => {
												setHarmony1(harmony1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://media.lottecinemavn.com/Media/WebAdmin/022518767b1c4416a32fdde231605a42.jpg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										HAMONY COUPLE{" "}
									</p>
									<p className="mt-2 font-medium text-base">
										135.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony2 === 0) {
													return;
												}
												setHarmony2(harmony2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony2}
										</p>
										<button
											onClick={() => {
												setHarmony2(harmony2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://media.lottecinemavn.com/Media/WebAdmin/ccff4c3beec64411a7ee0946d4a77185.jpg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										Black Adam CB1
									</p>
									<p className="mt-2 font-medium text-base">
										200.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam1 === 0) {
													return;
												}
												setAdam1(adam1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam1}
										</p>
										<button
											onClick={() => {
												setAdam1(adam1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://media.lottecinemavn.com/Media/WebAdmin/01450dd514e944aa80a3ccea0726a1fb.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										Black Adam CB2
									</p>
									<p className="mt-2 font-medium text-base">
										350.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam2 === 0) {
													return;
												}
												setAdam2(adam2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam2}
										</p>
										<button
											onClick={() => {
												setAdam2(adam2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hidden md:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden md:w-1/2"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://stc.shopiness.vn/deal/2020/08/07/5/7/3/0/1596792535252_540.png"
								alt=""
							/>
						</div>
						<div
							className="hidden lg:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://stc.shopiness.vn/deal/2019/10/21/c/0/2/7/1571649941140_540.png"
								alt=""
							/>
						</div>
					</div>
				);
			case "CGV":
				comboMoney =
					harmony1 * 83000 +
					harmony2 * 102000 +
					adam1 * 239000 +
					adam2 * 309000;
				return (
					<div className="flex w-full">
						<div className="lg:w-1/3 xl:w-2/4 md:w-1/2 w-full">
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.cgv.vn/media/concession/web/625f7a6cbe151_1650424429.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">MY COMBO</p>
									<p className="mt-2 font-medium text-base">
										83.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony1 === 0) {
													return;
												}
												setHarmony1(harmony1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony1}
										</p>
										<button
											onClick={() => {
												setHarmony1(harmony1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.cgv.vn/media/concession/web/625f7aace684c_1650424493.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">CGV COMBO </p>
									<p className="mt-2 font-medium text-base">
										102.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony2 === 0) {
													return;
												}
												setHarmony2(harmony2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony2}
										</p>
										<button
											onClick={() => {
												setHarmony2(harmony2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.cgv.vn/media/concession/web/62c3ee7b85011_1657007740.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SNOOPY SINGLE COMBO
									</p>
									<p className="mt-2 font-medium text-base">
										239.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam1 === 0) {
													return;
												}
												setAdam1(adam1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam1}
										</p>
										<button
											onClick={() => {
												setAdam1(adam1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.cgv.vn/media/concession/web/62fe077bd978b_1660815228.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SINGLE BT21 COMBO
									</p>
									<p className="mt-2 font-medium text-base">
										309.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam2 === 0) {
													return;
												}
												setAdam2(adam2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam2}
										</p>
										<button
											onClick={() => {
												setAdam2(adam2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hidden md:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden md:w-1/2"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://lichchieuphim.net/storage/promotions/xem-phim-xuyen-dem-gia-chi-tu-60k/thumbnail.jpg"
								alt=""
							/>
						</div>
						<div
							className="hidden lg:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://www.cgv.vn/media/wysiwyg/Newsoffer2/OCT18/CGV-350x496.jpg"
								alt=""
							/>
						</div>
					</div>
				);
			case "BHDStar":
				comboMoney =
					harmony1 * 144000 +
					harmony2 * 144000 +
					adam1 * 144000 +
					adam2 * 174000;
				return (
					<div className="flex w-full">
						<div className="lg:w-1/3 xl:w-2/4 md:w-1/2 w-full">
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://go.ocb.com.vn/upload/gallery/gallery_image_1147.jpg"
									style={{ objectPosition: "top center" }}
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 1 GA LAC
									</p>
									<p className="mt-2 font-medium text-base">
										144.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony1 === 0) {
													return;
												}
												setHarmony1(harmony1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony1}
										</p>
										<button
											onClick={() => {
												setHarmony1(harmony1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://go.ocb.com.vn/upload/gallery/gallery_image_1147.jpg"
									style={{ objectPosition: "top center" }}
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 1 KHOAI LAC
									</p>
									<p className="mt-2 font-medium text-base">
										144.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony2 === 0) {
													return;
												}
												setHarmony2(harmony2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony2}
										</p>
										<button
											onClick={() => {
												setHarmony2(harmony2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://go.ocb.com.vn/upload/gallery/gallery_image_1147.jpg"
									style={{ objectPosition: "top center" }}
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 1 XUC XICH
									</p>
									<p className="mt-2 font-medium text-base">
										144.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam1 === 0) {
													return;
												}
												setAdam1(adam1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam1}
										</p>
										<button
											onClick={() => {
												setAdam1(adam1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://go.ocb.com.vn/upload/gallery/gallery_image_1147.jpg"
									style={{ objectPosition: "top center" }}
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 2 GA LAC
									</p>
									<p className="mt-2 font-medium text-base">
										174.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam2 === 0) {
													return;
												}
												setAdam2(adam2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam2}
										</p>
										<button
											onClick={() => {
												setAdam2(adam2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hidden md:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden md:w-1/2"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://stc.shopiness.vn/deal/2020/02/21/0/e/1/b/1582257645388_540.png"
								alt=""
							/>
						</div>
						<div
							className="hidden lg:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://stc.shopiness.vn/deal/2020/07/06/f/0/8/a/1594011774652_540.png"
								alt=""
							/>
						</div>
					</div>
				);
			case "CineStar":
				comboMoney =
					harmony1 * 144000 +
					harmony2 * 144000 +
					adam1 * 144000 +
					adam2 * 174000;
				return (
					<div className="flex w-full">
						<div className="lg:w-1/3 xl:w-2/4 md:w-1/2 w-full">
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://static.riviu.co/960/image/2021/01/02/ae2f82af898b1c439a9301e7de513479_output.jpeg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 1 GA LAC
									</p>
									<p className="mt-2 font-medium text-base">
										144.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony1 === 0) {
													return;
												}
												setHarmony1(harmony1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony1}
										</p>
										<button
											onClick={() => {
												setHarmony1(harmony1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://static.riviu.co/960/image/2021/01/02/ae2f82af898b1c439a9301e7de513479_output.jpeg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 1 KHOAI LAC
									</p>
									<p className="mt-2 font-medium text-base">
										144.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony2 === 0) {
													return;
												}
												setHarmony2(harmony2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony2}
										</p>
										<button
											onClick={() => {
												setHarmony2(harmony2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://static.riviu.co/960/image/2021/01/02/ae2f82af898b1c439a9301e7de513479_output.jpeg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 1 XUC XICH
									</p>
									<p className="mt-2 font-medium text-base">
										144.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam1 === 0) {
													return;
												}
												setAdam1(adam1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam1}
										</p>
										<button
											onClick={() => {
												setAdam1(adam1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://static.riviu.co/960/image/2021/01/02/ae2f82af898b1c439a9301e7de513479_output.jpeg"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										SPECIAL COMBO 2 GA LAC
									</p>
									<p className="mt-2 font-medium text-base">
										174.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam2 === 0) {
													return;
												}
												setAdam2(adam2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam2}
										</p>
										<button
											onClick={() => {
												setAdam2(adam2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hidden md:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden md:w-1/2"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://thegioidienanh.vn/stores/news_dataimages/thanhtan/032019/26/18/2355_Cinestar_CaThangTu.jpg"
								alt=""
							/>
						</div>
						<div
							className="hidden lg:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/285275457_1855915607912277_7769221551756451370_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=fdmE0z2xOkwAX_vKZbX&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT_7uYwwP-ukM1vzNvJJ2EgzHsZ58RhIUlkm8afNN0UopA&oe=63330519"
								alt=""
							/>
						</div>
					</div>
				);
			case "Galaxy":
				comboMoney =
					harmony1 * 99000 +
					harmony2 * 120000 +
					adam1 * 139000 +
					adam2 * 219000;
				return (
					<div className="flex w-full">
						<div className="lg:w-1/3 xl:w-2/4 md:w-1/2 w-full">
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.galaxycine.vn/media/2022/8/22/combo122082022_1661161050442.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iCombo 1 Big Extra
									</p>
									<p className="mt-2 font-medium text-base">
										99.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony1 === 0) {
													return;
												}
												setHarmony1(harmony1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony1}
										</p>
										<button
											onClick={() => {
												setHarmony1(harmony1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.galaxycine.vn/media/2022/8/22/combo122082022_1661161050442.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iCombo 2 Big Extra
									</p>
									<p className="mt-2 font-medium text-base">
										120.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony2 === 0) {
													return;
												}
												setHarmony2(harmony2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony2}
										</p>
										<button
											onClick={() => {
												setHarmony2(harmony2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.galaxycine.vn/media/2022/8/22/combo122082022_1661161050442.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iCombo Friends 1 Big
									</p>
									<p className="mt-2 font-medium text-base">
										139.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam1 === 0) {
													return;
												}
												setAdam1(adam1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam1}
										</p>
										<button
											onClick={() => {
												setAdam1(adam1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://www.galaxycine.vn/media/2022/8/22/combo122082022_1661161050442.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iCombo Friends 2 Big
									</p>
									<p className="mt-2 font-medium text-base">
										219.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam2 === 0) {
													return;
												}
												setAdam2(adam2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam2}
										</p>
										<button
											onClick={() => {
												setAdam2(adam2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hidden md:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden md:w-1/2"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://cdn.galaxycine.vn/media/2022/9/19/back2shool-digital-300x450_1663573378238.jpg"
								alt=""
							/>
						</div>
						<div
							className="hidden lg:block lg:w-1/3 xl:w-1/4 ml-auto rounded-lg overflow-hidden"
							style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3  rounded-lg block "
								style={{ height: "470px", maxWidth: "350px" }}
								src="https://cdn.galaxycine.vn/media/2022/8/26/duatopsamsung-digital-300x450_1661486117894.jpg"
								alt=""
							/>
						</div>
					</div>
				);
			case "MegaGS":
				comboMoney =
					harmony1 * 55000 +
					harmony2 * 55000 +
					adam1 * 55000 +
					adam2 * 107000;
				return (
					<div className="flex w-full">
						<div className="lg:w-1/3 xl:w-2/5  w-full">
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://cms.megagscinemas.vn//media/76090/bap-caramel.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iCaramel Popcorn 44oz
									</p>
									<p className="mt-2 font-medium text-base">
										55.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony1 === 0) {
													return;
												}
												setHarmony1(harmony1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony1}
										</p>
										<button
											onClick={() => {
												setHarmony1(harmony1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://cms.megagscinemas.vn//media/76072/bap-pho-mai.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iCheese Popcorn 44oz
									</p>
									<p className="mt-2 font-medium text-base">
										55.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (harmony2 === 0) {
													return;
												}
												setHarmony2(harmony2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{harmony2}
										</p>
										<button
											onClick={() => {
												setHarmony2(harmony2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://cms.megagscinemas.vn//media/76070/share.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iSHARE Combo
									</p>
									<p className="mt-2 font-medium text-base">
										97.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam1 === 0) {
													return;
												}
												setAdam1(adam1 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam1}
										</p>
										<button
											onClick={() => {
												setAdam1(adam1 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
								<img
									className="w-20 h-20 rounded-lg"
									src="https://cms.megagscinemas.vn//media/76071/big-share.png"
									alt="popcorn "
								/>
								<div className="ml-4">
									<p className="text-text-grey">
										iBIG SHARE Combo
									</p>
									<p className="mt-2 font-medium text-base">
										107.000đ
									</p>
									<div className="flex mt-2">
										<button
											onClick={() => {
												if (adam2 === 0) {
													return;
												}
												setAdam2(adam2 - 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-remove-inactive.svg"
												alt="-"
											/>
										</button>
										<p
											className="text-center mx-2 w-7 font-bold text-base"
											style={{ lineHeight: "24px" }}
										>
											{adam2}
										</p>
										<button
											onClick={() => {
												setAdam2(adam2 + 1);
											}}
										>
											<img
												src="https://movie.zalopay.vn/images/icon-add-active.svg"
												alt="+"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hidden lg:block lg:w-2/3 xl:w-3/5 ml-8 rounded-lg overflow-hidden "
							// style={{ maxWidth: "350px" }}
						>
							<img
								className=" mt-3 w-full rounded-lg block "
								style={{ height: "470px" }}
								src="https://cms.megagscinemas.vn//media/76831/new-monday-a-fun-day-1998-1080-px.png?width=741&height=400"
								alt=""
							/>
						</div>
					</div>
				);
			default:
				return;
		}
	};
	const handleNextStep = () => {
		props.setActiveTabKey("3");
	};
	return (
		<Fragment>
			<div className="pt-4 pr-4 pl-4 md:pb-12 pb-6">
				<div className="flex py-3 px-4 items-center bg-background-light rounded-lg ">
					<img
						alt="popcorn"
						src="https://movie.zalopay.vn/images/icon-popcorn.svg"
						className="w-6 h-6"
					/>
					<p className="ml-2">
						Buying combos will be more economical at the cinema's
						counter
					</p>
				</div>
				<p className="text-base mt-10">Choose combo:</p>
				{handleImage()}
			</div>
			<div
				className="bg-secondary-color w-full p-4  flex justify-between items-center md:text-base fixed bottom-0 left-0 right-0"
				style={{ borderTop: "1px solid #334c65" }}
			>
				<div className="flex items-center ">
					<img
						src="https://movie.zalopay.vn/images/icon-bill.svg"
						alt="bill"
					/>
					<p className="ml-2">{comboMoney}đ</p>
				</div>
				<button
					onClick={handleNextStep}
					className="bg-border-blue py-2 px-5 text-sm duration-500 hover:bg-blue-900 rounded-3xl"
				>
					NEXT STEP
				</button>
			</div>
		</Fragment>
	);
}

function BookingResult(props) {
	const items = useSelector((state) => state.booking.moneyCost);
	const tienVe = props.selectedSeats?.reduce((accumulator, item) => {
		return (accumulator += item.giaVe);
	}, 0);
	const handlePayment = () => {
		const thongTinDatVe = {
			maLichChieu: +props.MaPhim,
			danhSachVe: props.selectedSeats,
		};
		console.log(thongTinDatVe);
		props.dispatch(fetchBookingTicketAction(thongTinDatVe));
	};
	return (
		<Fragment>
			<div className="pt-4 px-4 w-full">
				<div className="py-3 px-4 flex items-center bg-background-light rounded-lg">
					<img
						className="w-8 h-8"
						src="https://s3img.vcdn.vn/123phim/2022/01/LOTTE-8a9d8b.jpg"
						alt="logo"
					/>
					<div className="ml-2">
						<p>{props.thongTinPhim?.tenCumRap}</p>
						<p>
							{props.thongTinPhim?.ngayChieu} -{" "}
							{props.thongTinPhim?.gioChieu} -{" "}
							{props.thongTinPhim?.tenRap}
						</p>
					</div>
				</div>
				<div
					className="pt-4 px-4 pb-2 flex items-center bg-background-light  mt-4 "
					style={{
						border: "1px solid #334c65",
						borderBottom: "none",
						borderTopLeftRadius: "4px",
						borderTopRightRadius: "4px",
					}}
				>
					<img
						className="w-36 h-52 rounded-lg"
						src={props.thongTinPhim?.hinhAnh}
						alt="anh phim"
					/>
					<div className="pl-4">
						<p className="px-1 bg-primary-red text-xs rounded-sm inline-block	">
							C18
						</p>
						<p className="text-base mt-2">
							{props.thongTinPhim?.tenPhim}
						</p>
						<p className="text-text-grey-ticket text-sm mt-2">
							Genre: Action
						</p>
						<div className="flex items-center mt-3">
							<img
								className="w-4 "
								src="https://movie.zalopay.vn/images/clock.png"
								alt="clock"
							/>
							<p className="ml-1 text-text-grey-ticket">
								1 hour 30 mins
							</p>
						</div>
					</div>
				</div>
				<div className="ticket-divider-notch">
					<div className="ticket-notch bg" />
					<div className="ticket-divider" />
					<div className="ticket-notch bg ticket-notch-right" />
				</div>
				<div
					className="pt-2 px-4 pb-4 bg-background-light"
					style={{
						border: "1px solid #334c65",
						borderTop: "none",
						borderBottomLeftRadius: "4px",
						borderBottomRightRadius: "4px",
					}}
				>
					<div className="flex justify-between">
						<p className="text-sm md:text-base text-text-grey-ticket">
							Seat position:
						</p>
						<p
							className="text-white"
							style={{ lineHeight: "18px" }}
						>
							{props.selectedSeats?.map(
								(item) => `${item.tenGhe} `
							)}
						</p>
					</div>
					<div className="flex justify-between mt-2">
						<p className="text-sm md:text-base text-text-grey-ticket">
							Combo:
						</p>
						<p
							className="text-white"
							style={{ lineHeight: "18px" }}
						>
							x {items?.items}
						</p>
					</div>
					<div className="flex justify-between mt-2">
						<p className="text-sm md:text-base text-text-grey-ticket">
							Showtimes:
						</p>
						<div className="flex flex-wrap gap-2">
							<p
								className="text-xs rounded-lg ml-3  px-2 text-white"
								style={{
									background: "#334c65",
									paddingTop: "3px",
									paddingBottom: "3px",
									lineHeight: "16px",
								}}
							>
								{props.thongTinPhim?.ngayChieu} -{" "}
								{props.thongTinPhim?.gioChieu} -{" "}
								{props.thongTinPhim?.tenRap}
							</p>
							<p
								className="text-xs rounded-lg ml-3  px-2 text-white"
								style={{
									background: "#334c65",
									paddingTop: "3px",
									paddingBottom: "3px",
									lineHeight: "16px",
								}}
							>
								2D
							</p>
						</div>
					</div>
					<div className="mt-2 flex items-center justify-between">
						<p className="text-sm md:text-base text-text-grey-ticket">
							{props.thongTinPhim?.tenCumRap}
						</p>
						<p
							className="text-white"
							style={{ lineHeight: "18px" }}
						>
							{props.thongTinPhim?.diaChi}
						</p>
					</div>
				</div>
				<div className="py-3 px-4 flex items-center bg-background-light rounded-lg mt-4">
					<p className="text-primary-color">
						If you don't receive your ticket code after 10 minutes
						of payment, please contact CSKH for assistance.
					</p>
				</div>
			</div>

			<div
				className="bg-secondary-color w-full p-4  flex justify-between items-center md:text-base fixed bottom-0 left-0 right-0 "
				style={{ borderTop: "1px solid #334c65" }}
			>
				<div className="flex items-center ">
					<img
						src="https://movie.zalopay.vn/images/icon-bill.svg"
						alt="bill"
					/>
					<p className="ml-2">{items?.comboMoney + tienVe}đ</p>
				</div>
				<button
					onClick={handlePayment}
					className="bg-border-blue py-2 px-5 text-sm duration-500 hover:bg-blue-900 rounded-3xl"
				>
					PAYMENT
				</button>
			</div>
		</Fragment>
	);
}
