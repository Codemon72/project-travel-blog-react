import React from "react";
import "./assets/main.css";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main.js";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
			<Menu />
			<Header />
			<Main />
		</div>
	);
}

export default App;
