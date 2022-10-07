import React, {  useEffect } from "react";
import "./style.css";

import { Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchArrayFilm,
	fetchCinemaScheduleAction,
	fetchscheduleAction,
} from "features/booking/utils/action";
const { Option } = Select;
function SearchFilm() {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		heThongRapChieu: [],
		cumRapChieu: [],
		maPhim: null,
		tenCumRap: null,
	});
	const arrFilm = useSelector((state) => state.booking.arrFilm);
	const schedule = useSelector((state) => state.booking.schedule);
	useEffect(() => {
		dispatch(fetchArrayFilm());
		return async () => {
			const res = await dispatch(fetchscheduleAction);
			setState({ ...state, heThongRapChieu: res });
		};
	}, []);
	const handleChangeHeThongRap = (e) => {
		console.log(e);
		dispatch(fetchCinemaScheduleAction(e));
	};
	const handleChangeFilm = (e) => {
		setState({ ...state, maPhim: e.target.value });
	};
	const cumRapArr = [];
	const cumRap = schedule.lstCumRap?.map((rap) => {
		return rap.danhSachPhim.map((item) => {
			if (item.maPhim === +state.maPhim) {
				cumRapArr.push(rap);
			}
			return;
		});
	});
	console.log(cumRapArr, "cumRap");
	const handleChangeCumRap = (e) => {
		setState({ ...state, tenCumRap: e });
	};
	console.log(state.tenCumRap);
	const cumRapChon = cumRapArr?.filter(
		(item) => {
			console.log(state.tenCumRap,'state ten cum rap');
			console.log(item.tenCumRap,'item tencumrap')
		console.log(item.tenCumRap===state.tenCumRap,'so sanh')
			return item.tenCumRap === state.tenCumRap}
	);
	console.log(cumRapChon, "crc");
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
							<form className="ticket-search-form flex flex-wrap items-center justify-between">
								<div
									className="form-group"
									style={{ width: "50%" }}
								>
									<div className="thumb">
										<img
											className="w-full"
											src="https://media.discordapp.net/attachments/527086735738273804/1027167191621173258/cinema.png"
											alt="ticket"
										/>
									</div>
									<div className="type">Movie</div>
									{/* <Select
										className="select-box w-full h-full overflow-y-scroll"
										dropdownClassName='select-film-dropdown'
										placeholder="Choose movie"
									> 
										{arrFilm?.map(film=>{
											return <Option key={film.maPhim}>{film.tenPhim}</Option>
										})}
									</Select> */}
									<select
										onChange={handleChangeFilm}
										className=" select-box  outline-none bg-transparent text-white"
										style={{
											width: "40%",
											marginTop: "3px",
											padding: "0 11px",
										}}
									>
										{arrFilm?.map((film) => {
											return (
												<option
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
								<div
									className="form-group "
									style={{ width: "50%" }}
								>
									<div className="thumb">
										<img
											className="w-full"
											src="https://media.discordapp.net/attachments/527086735738273804/1027097677839740988/city.png"
											alt="ticket"
										/>
									</div>
									<div className="type">System</div>
									<Select
										onChange={handleChangeHeThongRap}
										className="select-box uppercase"
										options={state?.heThongRapChieu.map(
											(heThongRap) => ({
												label: heThongRap.tenHeThongRap,
												value: heThongRap.maHeThongRap,
											})
										)}
										placeholder="Choose cinema system"
									/>
								</div>
								<div
									className="form-group "
									style={{ width: "50%" }}
								>
									<div className="thumb">
										<img
											className="w-full"
											src="https://media.discordapp.net/attachments/527086735738273804/1027097677839740988/city.png"
											alt="ticket"
										/>
									</div>
									<div className="type">Cluster</div>
									<Select
										onChange={handleChangeCumRap}
										className="select-box"
										options={cumRapArr?.map((cumRap) => ({
											label: cumRap.tenCumRap,
											value: cumRap.maCumRap,
										}))}
										placeholder="Choose Cinema cluster"
									/>
									,
								</div>
								<div
									className="form-group "
									style={{ width: "50%" }}
								>
									<div className="thumb">
										<img
											className="w-full"
											src="https://media.discordapp.net/attachments/527086735738273804/1027167220847083541/date.png"
											alt="ticket"
										/>
									</div>
									<div className="type">Date</div>
									<Select
										className="select-box"
										options={state?.heThongRapChieu.map(
											(heThongRap) => ({
												label: heThongRap.tenHeThongRap,
												value: heThongRap.maHeThongRap,
											})
										)}
										placeholder="Choose date"
									/>
									,
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchFilm;
