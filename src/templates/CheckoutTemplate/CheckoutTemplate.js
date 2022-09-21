import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";

 const CheckoutTemplate = (props) => {
	const { Component, ...restProps } = props;
	if (!localStorage.getItem("user")) {
		return <Redirect to="/signin" />;
	}
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
export default CheckoutTemplate
