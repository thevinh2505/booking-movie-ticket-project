import { Col, Row, Tabs } from "antd";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;
function CinemaSystem(props) {
	const heThongRapChieu = props.heThongRapChieu;
	return (
		<div className="mt-12 cinema-system">
			<Tabs className="text-white" defaultActiveKey="1" centered>
				<TabPane className="px-5" tab="Lịch Chiếu" key="1">
					<div className="bg-white  mx-auto w-2/3  py-5">
						<Tabs className=" " tabPosition={"left"}>
							{heThongRapChieu?.map((item, index) => {
								return (
									<TabPane
										tab={
											<div className="flex items-center">
												<img
													className="w-14"
													src={item.logo}
													alt="logo cum rap"
												/>
												<p className="text-black ml-2 capitalize">
													{item.tenHeThongRap}
												</p>
											</div>
										}
										key={index}
									>
										{item.cumRapChieu?.map((cumRap) => {
											return (
												<div className="mb-8 ml-4">
													<div
														key={cumRap.maCumRap}
														className="flex  items-center "
													>
														<img
															className="w-14"
															src={cumRap.hinhAnh}
															alt="anh cum rap"
														/>
														<div className="ml-4">
															<p className="text-black text-base tracking-tight leading-tight font-semibold">
																{
																	cumRap.tenCumRap
																}
															</p>
															<p className="text-text-grey-dark ">
																{cumRap.diaChi}
															</p>
														</div>
													</div>
													<Row className="thong-tin-lich-chieu pt-6">
														{cumRap.lichChieuPhim
															?.slice(0, 12)
															.map(
																(lichChieu) => {
																	return (
																		<Col
																			md={
																				4
																			}
																			sm={
																				12
																			}
																			xs={
																				24
																			}
																		>
																			<NavLink
																				to={`/checkout/${lichChieu.maLichChieu}`}
																				className="px-3 py-1 rounded-md hover:text-primary-red duration-500"
																				style={{
																					border: "1px solid #e4e4e4",
																					backgroundColor:
																						"rgba(246,246,246,.5)",
																				}}
																			>
																				{moment(
																					lichChieu?.ngayChieuGioChieu
																				).format(
																					"HH:MM"
																				)}
																			</NavLink>
																		</Col>
																	);
																}
															)}
													</Row>
												</div>
											);
										})}
									</TabPane>
								);
							})}
						</Tabs>
					</div>
				</TabPane>
				<TabPane className="text-white px-5" tab="Thông Tin" key="2">
					<h1>Tab 2</h1>
				</TabPane>
				<TabPane className="text-white px-5" tab="Đánh Giá" key="3">
					<h1>Tab 3</h1>
				</TabPane>
			</Tabs>
		</div>
	);
}

export default CinemaSystem;
