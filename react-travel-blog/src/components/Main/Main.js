import React from "react";
import Bloglist from "./Bloglist/Bloglist";
import Map from "./Map/Map";

const Main = () => {
	return (
		<div className="flex flex-row">
			<Bloglist />
			<Map />
		</div>
	);
};

export default Main;
