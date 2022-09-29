import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/App";
import reportWebVitals from "./reportWebVitals";
import store from "app/store";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
