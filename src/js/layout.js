import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { InfoPage } from "./views/InfoPage";
import InfoPageRodrigo from "./views/infoPageRodrigo";
import InfoPageMatias from "./views/infoPageMatias";
import InfoPageJuan from "./views/infoPageJuan";
import InfoPageKarol from "./views/infoPageKarol";
import InfoPageYoselin from "./views/infoPageYoselin";
import Login from "./views/login"



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="mx-0">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/infoPage" element={<InfoPage />} />

						<Route path="/infoPageRodrigo/:theid" element={<InfoPageRodrigo />} />
						<Route path="/infoPageMatias/:theid" element={<InfoPageMatias />} />
						<Route path="/infoPageJuan/:theid" element={<InfoPageJuan />} />
						<Route path="/infoPageKarol/:theid" element={<InfoPageKarol />} />
						<Route path="/infoPageYoselin" element={<InfoPageYoselin />} />
						<Route path="/login" element={<Login />} />

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
