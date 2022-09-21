import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";

import { MdThumbUp } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./style.css";
function MovieItem(props) {
	const { item } = props;

	return (
		<div className=" mb-7">
			<div className="film_item cursor-pointer">
				<div className="film_img relative">
					<div
						className="film_poster "
						style={{ backgroundImage: `url(${item.hinhAnh})` }}
					>
						<div className="film_overlay absolute"></div>
						<div className="film_trailer-btn absolute">
							<BsPlayCircleFill className="trailer-btn absolute" />
						</div>
					</div>
				</div>
				<div className="film_content pt-3 relative">
					<div className="film_name">
						<div>
							<p className="font-medium tracking-wide inline-block text-white mb-3 hover:text-primary-color duration-500">
								{item.tenPhim}
							</p>
						</div>
						<div className="film_name-bottom flex justify-between text-gray-300 cursor-default">
							<p className="film_name--age">C18</p>
							<div className="flex mr-1">
								<p className="duration flex text-xs items-center">
									<FaRegClock className="mr-1 text-sm text-primary-color" />{" "}
									120 min
								</p>
								<p className="rating flex text-xs items-center ml-4">
									<MdThumbUp className="mr-1 text-sm text-primary-color " />{" "}
									{item.danhGia}
								</p>
							</div>
						</div>
					</div>
					<div className="film_button">
						<NavLink
							to={`/detail/${item.maPhim}`}
							className="tracking-wider film_button--link absolute w-full text-xl text-center bg-primary-color font-bold text-white py-3 rounded opacity-0"
						>
							Book Ticket
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieItem;
