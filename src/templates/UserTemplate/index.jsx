import { Fragment } from "react";
import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
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
						<Component {...propsRoute} />
					</Fragment>
				);
			}}
		/>
	);
};
