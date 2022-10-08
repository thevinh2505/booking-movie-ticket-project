import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "common/components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "common/components/Footer";
import BackToTop from "common/components/BackToTop";
import {FaAngleUp} from 'react-icons/fa'

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
						<ScrollToTop style={{width:'45px',height:'45px',color:'white',background:'#31d7a9',textAlign:'center',lineHeight:'45px',display:'flex',justifyContent:'center',alignItems:'center'}} smooth component={<FaAngleUp className="text-center text-xl" />} />
					</Fragment>
					
				);
			}}
		/>
	);
};
