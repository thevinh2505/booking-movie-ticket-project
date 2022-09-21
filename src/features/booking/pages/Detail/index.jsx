import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Progress, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailAction } from "features/booking/utils/action";
import "assets/circle.css";
import moment from "moment";
import CinemaSystem from "./CinemaSystem";
import Loading from "common/components/Loading";

function Detail(props) {
	const dispatch = useDispatch();
	const movieDetail = useSelector((state) => state.booking.movieDetail);
	useEffect(() => {
		let { id } = props.match.params;
		dispatch(fetchMovieDetailAction(id));
	}, []);
	if (movieDetail === {}) {
		return <Loading />;
	}

	return (
		<div>
			<div
				className="bg-no-repeat bg-cover bg-center "
				style={{
					backgroundImage: `url(${movieDetail.hinhAnh})`,
					minHeight: "100vh",
				}}
			>
				<CustomCard
					style={{ minHeight: "100vh" }}
					className="relative "
					effectColor="rgba(255,255,255,0.4)" // required
					color="#fff" // default color is white
					blur={100} // default blur value is 10px
					borderRadius={0} // default border radius value is 10px
				>
					<div
						className="text-white flex justify-between items-center w-full  max-w-4xl top-2/4 left-2/4 absolute"
						style={{ transform: "translate(-50%,-50%)" }}
					>
						<div className="">
							<img
								className="w-full mw215 h-80  "
								src={movieDetail.hinhAnh}
								alt=""
							/>
						</div>
						<div className=" text-left w-7/12 pr-4 pl-2">
							<p className="tracking-wider">
								{moment(movieDetail.ngayKhoiChieu).format(
									"DD.MM.YYYY"
								)}
							</p>
							<div className="flex items-center mt-1 mb-2">
								<p className="text-white cursor-default px-1.5 rounded-md mr-2 bg-primary-red inline-block">
									C18
								</p>
								<p className="text-2xl ">
									{movieDetail.tenPhim}
								</p>
							</div>
							<p className=" leading-snug">
								{" "}
								{movieDetail.moTa?.substr(0, 300)} . . .
							</p>
							<button className="shadow text-white hover:bg-primary-color duration-500 rounded-md mt-6 py-3 px-6 bg-primary-red">
								Book Ticket
							</button>
						</div>
						<div>
							<Progress
								className="text-text-grey  text-2xl"
								type="circle"
								percent={`${movieDetail.danhGia}` * 10}
								status="normal"
								format={(percent) => `${percent / 10}`}
							/>
							<p className="mt-4 text-white">Rating:</p>
							<div>
								{movieDetail.danhGia && (
									<Rate
										disabled
										defaultValue={movieDetail.danhGia / 2}
									/>
								)}
							</div>
						</div>
					</div>
				</CustomCard>
			</div>
			<CinemaSystem heThongRapChieu={movieDetail?.heThongRapChieu} />
		</div>
	);
}

export default Detail;
