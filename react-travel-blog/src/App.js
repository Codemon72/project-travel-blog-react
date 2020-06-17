import React from "react";
import "./assets/main.css";
import firebaseConfig from "./firebase.config";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main.js";
import Stage from "./components/Stage/Stage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Menu />
				<Route path="/" exact>
					<Stage />
					<Main />
				</Route>
				<Route path="/contact" component={Contact} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
