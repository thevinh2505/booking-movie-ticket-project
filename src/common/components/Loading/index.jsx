import React from "react";
import { Fragment } from "react";
// import { useSelector } from "react-redux";
import './style.css'
function Loading() {
	// const loading = useSelector((state) => state.loading.isLoading);
	return (
		<Fragment>
			

				<div className="preloader">
					<div className="preloader-inner">
						<div className="preloader-icon">
							<span />
							<span />
						</div>
					</div>
				</div>
			
		</Fragment>
	);
}

export default Loading;
