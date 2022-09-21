import { Col, Row, Tabs } from "antd";

import moment from "moment/moment";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const { TabPane } = Tabs;
function HomeMenu(props) {
	const [tabPosition, setTabPosition] = useState("left");

	console.log(props, "props");

	const renderCinemaSystem = () => {
		return props.cinemaSystem?.map((heThongRap, index) => {
			return (
				<TabPane 
					tab={
						<img
							className="w-14"
							src={heThongRap.logo}
							alt="logo he thong rap"
						/>
					}
					key={heThongRap.maHeThongRap}
				>
					<Tabs tabPosition={tabPosition}>
						{heThongRap.lstCumRap?.map((cumRap, index) => {
							return (
								<TabPane
									className=""
									tab={
										<div className="w-72 flex ">
											<img
												className="w-14 h-14"
												src={cumRap.hinhAnh}
												alt="logo he thong rap"
											/>
											<div className=" ml-3 text-white text-left  overflow-hidden ">
												<p className="whitespace-normal leading-tight">
													{cumRap.tenCumRap}
												</p>
												<p className="whitespace-nowrap overflow-hidden overflow-ellipsis text-xs text-gray-400">
													{cumRap.diaChi}
												</p>
											</div>
										</div>
									}
									key={cumRap.maCumRap}
								>
									{cumRap.danhSachPhim.map((phim) => {
										return (
											<Fragment key={phim.maPhim}>
												<div className="flex my-5 ml-5">
													<div className="w-20">
														<img
															className="w-full"
															src={phim.hinhAnh}
															alt="hinh anh phim"
															onError={(e) => {
																e.target.onerror =
																	null;
																e.target.src =
																	"https://movie0706.cybersoft.edu.vn/hinhanh/ca-map-sieu-bao-chua_gp09.jpg";
															}}
														/>
													</div>
													<div className="text-left ml-3 text-white">
														<p>{phim.tenPhim}</p>
													</div>
												</div>
												<Row
													className="pl-6"
													
												>
													{phim.lstLichChieuTheoPhim?.slice(0,12).map(
														(schedule) => {
															return (
																<Col
																	className="text-left mb-5"
																	md={4}
																	sm={12}
																	xs={24}
																>
																	<NavLink
																		to="/home"
																		className=" text-center text-primary-color inline-block w-20 border-2 border-solid border-gray-100 py-1  tracking-wide"
																	>
																		{moment(
																			schedule.ngayChieuGioChieu
																		).format(
																			"hh:mm A"
																		)}
																	</NavLink>
																</Col>
															);
														}
													)}
												</Row>
												<hr />
											</Fragment>
										);
									})}
								</TabPane>
							);
						})}
					</Tabs>
				</TabPane>
			);
		});
	};
	return (
		<>
			<Tabs className="mt-10 border border-solid border-color-gray-200" tabPosition={tabPosition}>
				{renderCinemaSystem()}
			</Tabs>
		</>
	);
}

export default HomeMenu;
