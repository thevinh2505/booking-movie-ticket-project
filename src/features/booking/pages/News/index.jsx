import React, { Fragment } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
function News() {
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
							News
						</h2>
						<ul className="breadcrumb">
							<li>
								<NavLink to="/" exact className="capitalize">
									Home{" "}
									<MdOutlineKeyboardArrowRight className="font-bold text-2xl" />
								</NavLink>
							</li>
							<li className="capitalize">News </li>
						</ul>
					</div>
				</div>
			</section>
    </Fragment>
  )
}

export default News