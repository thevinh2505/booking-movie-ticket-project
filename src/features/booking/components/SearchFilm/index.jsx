import React, { useEffect } from "react";
import "./style.css";

import { Col, Row, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchArrayFilm,
	fetchCinemaScheduleAction,
	fetchscheduleAction,
	getCinemaScheduleClusterAction,
} from "features/booking/utils/action";
import moment from "moment";
import { useHistory } from "react-router-dom";
function SearchFilm() {
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch(fetchArrayFilm());
		dispatch(fetchscheduleAction);
	}, []);

	const cinemaSystem = useSelector((state) => state.booking.cinemaSystem);
	const arrFilm = useSelector((state) => state.booking.arrFilm);
	const filmInfo = useSelector((state) => state.booking.filmInfo);

	const [state, setState] = useState({
		maHeThongRapDaChon: "",
		maPhimDaChon: "",
		maCumRapDachon: "",
	});

	// chon ten phim ->luu ma phim
	const handleChangeFilm = (e) => {
		dispatch(getCinemaScheduleClusterAction(+e.target.value));
	};
	console.log("film info", filmInfo);

	// lưu thông tin hệ thống rạp đã chọn
	const chonHeThongRap = (e) => {
		console.log(e, "ht rap");
		setState({ ...state, maHeThongRapDaChon: e });
	};
	// object hệ thống rạp đã chọn
	const heThongRapChieu = filmInfo.heThongRapChieu?.find(
		(item) => item.maHeThongRap === state.maHeThongRapDaChon
	);
	console.log("he thong rap chieu", heThongRapChieu);

	// hàm chọn cụm rạp
	const chonCumRap = (e) => {
		setState({ ...state, maCumRapDachon: e });
	};
	console.log(state.maCumRapDachon, "state ma cum rap");
	const cumRapDaChon = heThongRapChieu?.cumRapChieu.find(
		(item) => item.maCumRap === state.maCumRapDachon
	);
	console.log("cum rap da chon", cumRapDaChon);
	const chonNgayChieu = (e) => {
		history.push(`checkout/${e}/${state.maHeThongRapDaChon}`);
	};
	return (
		<div className="search-ticket-section pt-lg-0">
			<div className="Container">
				<div className="search-tab">
					<div className="search-ticket-header uppercase relative w-full mb-5">
						<h6 className="category">welcome to Movflx </h6>
						<h3 className="title">what are you looking for</h3>
					</div>
					<div className="tab-area">
						<div className="tab-item block">
							<form className="ticket-search-form ">
								<Row>
									<Col xl={12} xs={24}>
										<div className="form-group flex items-center w-full mr-0" style={{width:'100%'}}>
											<div className="thumb">
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1027167191621173258/cinema.png"
													alt="ticket"
												/>
											</div>
											<div className="type">Movie</div>
											<select	
									
												placeholder="Choose film"
												onChange={handleChangeFilm}
												className=" select-box pl-4 w-32  outline-none bg-transparent text-white "

											>	
												<option value="" disabled selected>Choose Film</option>
												{arrFilm?.map((film) => {
													return (
														<option
															onChange={
																handleChangeFilm
															}
															value={film.maPhim}
															key={film.maPhim}
															className="text-black"
														>
															{film.tenPhim}
														</option>
													);
												})}
											</select>
										</div>
									</Col>
									<Col xl={12} xs={24}>
										<div className="form-group flex items-center w-full mr-0 lg:mb-16">
											<div className="thumb">
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1027097677839740988/city.png"
													alt="ticket"
												/>
											</div>
											<div className="type">Theater</div>
											<Select
												onChange={chonHeThongRap}
												className="select-box "
												options={filmInfo.heThongRapChieu?.map(
													(heThongRap) => ({
														label: heThongRap.tenHeThongRap,
														value: heThongRap.maHeThongRap,
													})
												)}
												placeholder="Choose theater"
							
												
											/>
										</div>
									</Col>

									<Col xl={12} xs={24}>
										<div className="form-group flex items-center w-full mr-0 lg:mb-16">
											<div className="thumb">
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1027097677839740988/city.png"
													alt="ticket"
												/>
											</div>
											<div className="type">Cluster</div>
											<Select
												onChange={chonCumRap}
												className="select-box "
												options={heThongRapChieu?.cumRapChieu.map(
													(cumRap) => ({
														label: cumRap.tenCumRap,
														value: cumRap.maCumRap,
													})
												)}
												placeholder="Choose cluster"
												// style={{
												// 	width: "50%",
												// 	marginTop: "3px",
												// 	padding: "0 11px",
												// }}
												
											/>
											,
										</div>
									</Col>

									<Col xl={12} xs={24}>
										<div className="form-group flex items-center w-full mr-0 lg:mb-16">
											<div className="thumb">
												<img
													className="w-full"
													src="https://media.discordapp.net/attachments/527086735738273804/1027167220847083541/date.png"
													alt="ticket"
												/>
											</div>
											<div className="type">Date</div>
											<Select
												onChange={chonNgayChieu}
												className="select-box "
												options={cumRapDaChon?.lichChieuPhim.map(
													(lichChieu) => ({
														label: moment(
															lichChieu.ngayChieuGioChieu
														).format(
															"DD/MM/YYYY  hh:mm:ss"
														),
														// label:lichChieu.ngayChieuGioChieu,
														value: lichChieu.maLichChieu,
													})
												)}
												placeholder="Choose date"
												// style={{
												// 	width: "50%",
												// 	marginTop: "3px",
												// 	padding: "0 11px",
												// }}
												
											/>
											,
										</div>
									</Col>
								</Row>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchFilm;
