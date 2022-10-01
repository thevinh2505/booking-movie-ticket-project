import React, { Fragment } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "features/booking/pages/Download/download.css";
import "./style.css";
function Contact() {
	return (
		<Fragment>
			{/* SPEAKER BANNER   */}
			<section
				className="speaker-banner bg_img relative main-page-header"
				data-background="https://media.discordapp.net/attachments/527086735738273804/1025687462443483156/breadcumb.jpg?width=1200&height=313"
			>
				<div className="Container">
					<div className="speaker-banner-content text-center">
						<h2 className="title uppercase text-white font-semibold">
							contact us
						</h2>
						<ul className="breadcrumb">
							<li>
								<NavLink to="/" exact className="capitalize">
									Home{" "}
									<MdOutlineKeyboardArrowRight className="font-bold text-2xl" />
								</NavLink>
							</li>
							<li className="capitalize">contact us </li>
						</ul>
					</div>
				</div>
			</section>
			{/* CONTACT SECTION  */}
			<section className="contact-section">
				<div className="contact-container relative">
					<div
						className="bg-thumb bg_img"
						data-background="https://media.discordapp.net/attachments/527086735738273804/1025691921391292476/contact.jpg?width=630&height=585"
						style={{
							backgroundImage:
								"url(https://media.discordapp.net/attachments/527086735738273804/1025691921391292476/contact.jpg?width=630&height=585)",
						}}
					></div>
				</div>
			</section>
		</Fragment>
	);
}

export default Contact;
