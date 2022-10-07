import { Pagination } from "antd";

// import SearchFilm from "features/booking/components/SearchFilm";
// import AppDownload from "features/booking/components/AppDownload";

import {
	fetchCinemaScheduleAction,
	fetchMovieListAction,
} from "features/booking/utils/action";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import HomeCarousel from "./HomeCarousel";
// import HomeMenu from "./HomeMenu";
import MovieList from "./MovieList";
import './PaginationStyle.css'
function Home() {
	const dispatch = useDispatch();

	// dữ liệu từ store
	// const { schedule } = useSelector((state) => state.booking);

	const [config, setConfig] = useState({
		currentPage: null,
		pageSize: 8,
		totalCount: null,
	});
	const getTotalCount = (totalCount) => {
		setConfig({ ...config, totalCount });
	};
	useEffect(() => {
		dispatch(fetchMovieListAction(config, getTotalCount));
		dispatch(fetchCinemaScheduleAction);
	}, [config.currentPage]);
	const handlePagination = (e) => {
		setConfig({ ...config, currentPage: e });
	};
	// if (!schedule) {
	// 	return;
	// }
	return (
		<div>
			<HomeCarousel />
			{/* <SearchFilm/> */}
			<div className=" mx-auto md:pt-16 md:pb-28  xs:pt-12 xs:pb-20">
				<MovieList className="" />
				<Pagination
					className="text-center Container mt-3"
					onChange={handlePagination}
					current={config?.currentPage}
					pageSize={config?.pageSize}
					total={config?.totalCount}
				/>
				{/* <AppDownload/> */}
				{/* <HomeMenu schedule={schedule} /> */}
			</div>
		</div>
	);
}

export default Home;
