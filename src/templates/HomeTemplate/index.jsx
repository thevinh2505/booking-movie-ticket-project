import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "common/components/Header";

import Footer from "common/components/Footer";


export const HomeTemplate = (props) => {
	const { Component, ...restProps } = props;
	return (
		<Route
			{...restProps}
			render={(propsRoute) => {
				// props.location
				// props.match
				// props.history
				return (
					<Fragment>
						<Header {...propsRoute} />
						<Component {...propsRoute} />
						<Footer/>
					</Fragment>
				);
			}}
		/>
	);
};
