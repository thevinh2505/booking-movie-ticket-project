import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem";

function MovieList() {
    const movieList=useSelector(state=>state.booking.movieList)
    console.log(movieList,'1')
	return (
		<div className="w-full block  mx-auto">
			<Row className="w-full" gutter={{ xs:40, sm: 40, md:50, lg: 50 ,xl:60}}>
                {movieList.map(item=>{
                    return <Col className="w-full" key={item.maPhim} xl={6} md={8} sm={12} xs={24}  >
                        <MovieItem  item={item}/>
                    </Col>
                })}
            </Row>
		</div>
	);
}

export default MovieList;
