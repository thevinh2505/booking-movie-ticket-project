import { Col, Row } from "antd";
import {
	fetchBookingTicketAction,
	fetchBoxOfficeListAction,
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

import { Tabs } from "antd";
import { useRef } from "react";
const { TabPane } = Tabs;
export default function BookingTab(props) {
	const match = useRouteMatch();
	const MaPhim = match.params.id;

	const dispatch = useDispatch();
	const boxOfficeList = useSelector((state) => state.booking.boxOfficeList);
	const selectedSeats = useSelector((state) => state.booking.selectedSeats);

	useEffect(() => {
		dispatch(fetchBoxOfficeListAction(MaPhim));
	}, []);
	if (boxOfficeList === {}) {
		return;
	}
	const { thongTinPhim, danhSachGhe } = boxOfficeList;
	return (
		<div className="tab-booking-ticket">
			<Tabs defaultActiveKey="1">
				<TabPane
					className="text-white"
					tab={<p className="text-white">BOOKING</p>}
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
					/>
				</TabPane>
				<TabPane
					className="text-white"
					tab={<p className="text-white">PURCHASE COMBO</p>}
					key="2"
				>
					<Combo
						{...props}
						dispatch={dispatch}
						selectedSeats={selectedSeats}
						boxOfficeList={boxOfficeList}
						thongTinPhim={thongTinPhim}
						danhSachGhe={danhSachGhe}
					/>
				</TabPane>
				<TabPane
					className="text-white"
					tab={<p className="text-white">RESULT</p>}
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
	const arrowDownRef = useRef();
	const bookingInfoWrapperRef = useRef();
	const handleBookingTicket = () => {
		const thongTinDatVe = {
			maLichChieu: +props.MaPhim,
			danhSachVe: props.selectedSeats,
		};
		console.log(thongTinDatVe);
		props.dispatch(fetchBookingTicketAction(thongTinDatVe));
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
			let indexSelectedSeat = props.selectedSeats.findIndex(
				(gheDD) => gheDD.maGhe === seat.maGhe
			);
			if (indexSelectedSeat !== -1) {
				classSelectedSeat = "seat-selected";
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
						disabled={seat.daDat}
						key={seat.maGhe}
						className={`relative seat ${classSeatVip} ${classBookedSeat} ${classSelectedSeat}`}
					>
						<p className="font-medium seat-position absolute">
							{seat.stt}
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
						<div className="screen-wrap">
							<div
								className={`screen text-center ${styles.bookingSection}`}
							>
								<p
									className="text-white  my-2 text-base"
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
					</div>
				</Col>
			</Row>
			<div className="ticket-info-bottom overflow-hidden w-full fixed bottom-0 left-0 right-0">
				<div className="  md:py-6 md:px-8 py-3 px-4 bg-background-light BOOKING-INFO">
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

				<div className="bg-secondary-color w-full  md:py-6 md:px-8 py-3 px-4 flex justify-between items-center md:text-base text-sm">
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
						className="bg-border-blue py-2 px-5 text-sm duration-500 hover:bg-blue-900 rounded-3xl"
					>
						NEXT STEP
					</button>
				</div>
			</div>
		</Fragment>
	);
}

function Combo(props) {
	const [harmony1, setHarmony1] = useState(0);
	const [harmony2, setHarmony2] = useState(0);
	const [adam1, setAdam1] = useState(0);
	const [adam2, setAdam2] = useState(0);
	const seatMoney = props.selectedSeats.reduce((accumulator, item) => {
		return (accumulator += item.giaVe);
	}, 0);
	let comboMoney =
		harmony1 * 110000 + harmony2 * 135000 + adam1 * 200000 + adam2 * 350000;
	let items = harmony1 + harmony2 + adam1 + adam2;
	useEffect(() => {
		props.dispatch({
			type: SET_COST,
			payload: { comboMoney, items },
		});
	}, [harmony1, harmony2, adam1, adam2]);

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
				<div className=" py-3 px-4 mt-10 flex items-center bg-background-light rounded-lg ">
					<img
						className="w-20 h-20 rounded-lg"
						src="https://media.lottecinemavn.com/Media/WebAdmin/7ffbcb16b7354b278d39944aac5b3570.jpg"
						alt="popcorn "
					/>
					<div className="ml-4">
						<p className="text-text-grey">HARMONY COMBO</p>
						<p className="mt-2 font-medium text-base">110.000đ</p>
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
						<p className="text-text-grey">HAMONY COUPLE </p>
						<p className="mt-2 font-medium text-base">135.000đ</p>
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
						<p className="text-text-grey">Black Adam CB1</p>
						<p className="mt-2 font-medium text-base">200.000đ</p>
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
						<p className="text-text-grey">Black Adam CB2</p>
						<p className="mt-2 font-medium text-base">350.000đ</p>
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
				className="bg-secondary-color w-full p-4  flex justify-between items-center md:text-base fixed bottom-0 left-0 right-0"
				style={{ borderTop: "1px solid #334c65" }}
			>
				<div className="flex items-center ">
					<img
						src="https://movie.zalopay.vn/images/icon-bill.svg"
						alt="bill"
					/>
					<p className="ml-2">{comboMoney + seatMoney}đ</p>
				</div>
				<button className="bg-border-blue py-2 px-5 text-sm duration-500 hover:bg-blue-900 rounded-3xl">
					NEXT STEP
				</button>
			</div>
		</Fragment>
	);
}

function BookingResult(props) {
	const items = useSelector((state) => state.booking.moneyCost);
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
					<p className="ml-2">{items?.comboMoney}đ</p>
				</div>
				<button className="bg-border-blue py-2 px-5 text-sm duration-500 hover:bg-blue-900 rounded-3xl">
					PAYMENT
				</button>
			</div>
		</Fragment>
	);
}
