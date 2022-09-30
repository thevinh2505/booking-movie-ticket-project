import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem";

function MovieList() {
    const movieList=useSelector(state=>state.booking.movieList)
    console.log(movieList,'1')
	return (
		<div className="w-full block  mx-auto">
			<Row className="w-full px-3" gutter={{ xs:24, sm: 32, md:50, lg: 50 ,xl:60}} style={{marginInline:'-15px'}}>
                {movieList.map(item=>{
                    return <Col className="w-full" key={item.maPhim} xl={6} md={8} sm={12} xs={12}  >
                        <MovieItem  item={item}/>
                    </Col>
                })}
            </Row>
		</div>
	);
}

export default MovieList;
