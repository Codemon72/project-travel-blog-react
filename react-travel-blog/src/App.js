import React, { useState, useEffect } from "react";
import "./assets/main.css";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main.js";
import Stage from "./components/Stage/Stage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from './AppContext'


function App() {
	const [appState, setAppState] = useState({ aProperty: 'The App Property' })


	return (
		<Router>
			<div className="App">
				<Menu />
				<Route path="/" exact>
					<Stage />
					<AppContext.Provider value={appState}>
					<Main />
					</AppContext.Provider>
				</Route>
				<Route path="/contact" component={Contact} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
