import React from "react";
import "./assets/main.css";
import Header from "./components/Header/Header";
import Bloglist from "./components/Bloglist/Bloglist";
import Map from "./components/Map/Map";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="flex flex-row">
			<Bloglist />
			<Map />
			</div>
		</div>
	);
}

export default App;
