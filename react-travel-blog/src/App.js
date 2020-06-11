import React from "react";
import "./assets/main.css";
import Header from "./components/Header/Header";
import Bloglist from "./components/Bloglist/Bloglist";
import Map from "./components/Map/Map";

function App() {
	return (
		<div className="App">
			<Header />
			<Bloglist />
			<Map />
		</div>
	);
}

export default App;
