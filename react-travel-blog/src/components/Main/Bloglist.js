import React, { useContext } from "react";
import AppContext from "../../AppContext";
import Preview from "./Preview";

const Bloglist = () => {
	const { places, selected } = useContext(AppContext);

	return (
		<div className="w-full lg:w-1/2 bg-teal-600 bloglist">
			{places.map((place) => {
				return <Preview key={place.title} selected={selected} place={place} />;
			})}
		</div>
	);
};

export default Bloglist;
