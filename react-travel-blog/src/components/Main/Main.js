import React from "react";
import Bloglist from "./Bloglist";
import Map from "./Map";

const Main = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row  mb-8 mx-8">
			<Bloglist />
			<Map />
		</div>
	);
};

export default Main;
