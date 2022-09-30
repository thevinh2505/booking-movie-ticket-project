import React from "react";
import "./style.css";

import carousel from "assets/img/carousel.jpg";

import { useTypewriter, Cursor } from "react-simple-typewriter";
function HomeCarousel() {
	const [text, count] = useTypewriter({
		/* Config */
		typeSpeed: 120,
		loop: false,
		deleteSpeed: 60,
		delaySpeed: 1500,
		cursor: true,
		words: ["online", "fast", "easily"],
	});

	return (
		<section className="banner-section relative">
			<div
				className="banner-bg bg_img bg-fixed"
				data-background={carousel}
				style={{
					backgroundImage: `url(${carousel})`,
				}}
			/>
			<div className="Container">
				<div className="banner-content ">
					<h1 className="title text-white cd-headline clip tracking-wide">
						<span className="d-block text text-white first-text">
							book your
						</span>
						tickets{" "}
						<span
							className="text second-text"
							style={{ whiteSpace: "pre" }}
						>
							{text}
						</span>
						<Cursor />
					</h1>

					<p className="w-full text-text-grey text-center text-white mr-0 sm:text-xl xs:text-lg tracking-wide  leading-snug ">
						Safe, secure, reliable ticketing. Your ticket to live
						entertainment!
					</p>
				</div>
			</div>
		</section>
	);
}

export default HomeCarousel;
