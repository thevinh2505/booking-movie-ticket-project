import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

function HomeCarousel() {
	const carouselSlideStyle = {
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};
	return (
		<Swiper
			speed={700}
			spaceBetween={30}
			slidesPerView={1}
			effect={"fade"}
			navigation={true}
			pagination={{
				clickable: true,
			}}
			loop="true"
			modules={[EffectFade, Navigation, Pagination]}
			className="mySwiper "
		>
			<SwiperSlide>
				<div
					style={{
						...carouselSlideStyle,
						backgroundImage:
							"url(https://cdn.galaxycine.vn/media/2022/8/30/1_1661866507121.jpg)",
					}}
				>
					<img
						style={{ opacity: 0 }}
						className="w-full"
						src="https://cdn.galaxycine.vn/media/2022/8/30/1_1661866507121.jpg"
						alt=""
					/>
				</div>
			</SwiperSlide>
			{/* https://cdn.galaxycine.vn/media/2022/9/8/11111_1662625972056.jpg */}
			<SwiperSlide>
				<div
					style={{
						...carouselSlideStyle,
						backgroundImage:
							"url(https://cdn.galaxycine.vn/media/2022/9/8/11111_1662625972056.jpg)",
					}}
				>
					<img
						style={{ opacity: 0 }}
						className="w-full"
						src="https://cdn.galaxycine.vn/media/2022/9/8/11111_1662625972056.jpg"
						alt=""
					/>
				</div>
			</SwiperSlide>
			{/* https://cdn.galaxycine.vn/media/2022/9/12/2048-x-682-mk_1662957216316.jpg */}
			<SwiperSlide>
				<div
					style={{
						...carouselSlideStyle,
						backgroundImage:
							"url(https://cdn.galaxycine.vn/media/2022/9/12/2048-x-682-mk_1662957216316.jpg)",
					}}
				>
					<img
						style={{ opacity: 0 }}
						className="w-full"
						src="https://cdn.galaxycine.vn/media/2022/9/12/2048-x-682-mk_1662957216316.jpg"
						alt=""
					/>
				</div>
			</SwiperSlide>
			{/* https://cdn.galaxycine.vn/media/2022/9/8/111_1662624609687.jpg */}
			<SwiperSlide>
				<div
					style={{
						...carouselSlideStyle,
						backgroundImage:
							"url(https://cdn.galaxycine.vn/media/2022/9/8/111_1662624609687.jpg)",
					}}
				>
					<img
						style={{ opacity: 0 }}
						className="w-full"
						src="https://cdn.galaxycine.vn/media/2022/9/8/111_1662624609687.jpg"
						alt=""
					/>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}

export default HomeCarousel;
