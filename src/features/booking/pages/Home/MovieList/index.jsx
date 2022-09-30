import { Col, Row } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem";
import './movieList.css'
function MovieList() {
	const movieList = useSelector((state) => state.booking.movieList);
	return (
		<Fragment>
			<div className="Container w-full block  mx-auto home-row">
				<p className="xl:ml-10 pb-2 block text-uppercase font-semibold tracking-wider text-white xs:text-2xl md:text-4xl mb-2 movie-home-text relative" style={{borderBottom:'1px solid #1a2a47'}}>
					MOVIES
				</p>
				<Row
					className="w-full lg:px-3 xs:px-0 lg:-mx-6"
					gutter={{ xs: 24, sm: 48, md: 48,xl:56 }}

				>
					{movieList.map((item) => {
						return (
							<Col	
								flex
								className="w-full mt-7"
								key={item.maPhim}
								xl={6}
								md={8}
								sm={12}
								xs={12}
							>
								<MovieItem item={item} />
							</Col>
						);
					})}
				</Row>
			</div>
		</Fragment>
	);
}

export default MovieList;
