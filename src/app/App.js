import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "templates/HomeTemplate";
import CheckoutTemplate from "templates/CheckoutTemplate/CheckoutTemplate";
import { lazy, Suspense } from "react";
import Loading from "common/components/Loading";
const Home = lazy(() => import("features/booking/pages/Home"));
const Contact = lazy(() => import("features/booking/pages/Contact"));
const Detail = lazy(() => import("features/booking/pages/Detail"));
const SignIn = lazy(() => import("features/authentication/pages/SignIn"));
const SignUp = lazy(() => import("features/authentication/pages/SignUp"));
const CheckOut = lazy(() => import("features/booking/pages/CheckOut"));
const PageNotFound = lazy(() => import("common/components/Error"));
const Download = lazy(() => import("features/booking/pages/Download"));
const About = lazy(() => import("features/booking/pages/About"));
const UserInfo = lazy(() => import("features/user/pages/UserInfo"));
const News = lazy(() => import("features/booking/pages/News"));
// import Contact from "features/booking/pages/Contact";
// import Detail from "features/booking/pages/Detail";
// import SignIn from "features/authentication/pages/SignIn";
// import SignUp from "features/authentication/pages/SignUp";
// import CheckOut from "features/booking/pages/CheckOut";

// import { Suspense, lazy } from "react";
// import Loading from "common/components/Loading";
// const CheckoutTemplateLazy = lazy(() =>
// 	import("templates/CheckoutTemplate/CheckoutTemplate")
// );
export const history = createBrowserHistory();
function App() {
	return (
		<Router history={history}>
			{/* <Loading/> */}
			<Suspense fallback={<Loading />}>
				<Switch>
					<HomeTemplate path="/" exact Component={Home} />
					<HomeTemplate path="/home" exact Component={Home} />
					<HomeTemplate path="/contact" exact Component={Contact} />
					<HomeTemplate path="/detail/:id" exact Component={Detail} />
					<CheckoutTemplate
						path="/checkout/:id/:maHeThongRap"
						exact
						Component={CheckOut}
					/>
					{/* <Suspense fallback={<Loading/>}>
					<CheckoutTemplateLazy
						path="/checkout/:id"
						exact
						Component={CheckOut}
					/>
				</Suspense> */}
					<HomeTemplate path="/contact" exact Component={Contact} />
					<HomeTemplate path="/download" exact Component={Download} />
					<HomeTemplate path="/about" exact Component={About} />
					<HomeTemplate path="/user" exact Component={UserInfo} />
					<HomeTemplate path="/news" exact Component={News} />
					<Route path="/signin" exact component={SignIn} />
					<Route path="/signup" exact component={SignUp} />
					<Route path="*" component={PageNotFound} />
					<Redirect to="/" />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
