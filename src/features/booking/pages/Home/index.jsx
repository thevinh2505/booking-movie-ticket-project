import { Pagination } from "antd";
import {
	fetchCinemaSchedule,
	fetchMovieListAction,
} from "features/booking/utils/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCarousel from "./HomeCarousel";
import HomeMenu from "./HomeMenu";
import MovieList from "./MovieList";

function Home() {
	const dispatch = useDispatch();

	// dữ liệu từ store
	const { cinemaSystem } = useSelector((state) => state.booking);

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
		dispatch(fetchCinemaSchedule);
	}, [config.currentPage]);
	const handlePagination = (e) => {
		setConfig({ ...config, currentPage: e });
	};
  if(!cinemaSystem){
    return
  }
	return (
		<div>
			<HomeCarousel/>
			<div className="container mx-auto py-20 ">
			
			<MovieList className="sm:px-4" />
			<Pagination
				className="text-center"
				onChange={handlePagination}
				current={config?.currentPage}
				pageSize={config?.pageSize}
				total={config?.totalCount}
			/>
			<HomeMenu cinemaSystem={cinemaSystem} />
		</div>
		</div>
		
	);
}

export default Home;
