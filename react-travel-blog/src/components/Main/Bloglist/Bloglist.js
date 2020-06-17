import React, { useContext } from "react";
import AppContext from './../../../AppContext'

const Bloglist = () => {
	const {places, selected} = useContext(AppContext)
	console.log(places)
	return (
		<div className="w-full lg:w-1/2 bg-teal-600 text-white text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
			<h2>Hier kommen alle Blogs rein</h2>
			{/* <div>{appState.aProperty}</div> */}
			{places.length > 0 ? <div>{places[0].title}</div> : <div>Loading....</div>}
		</div>
	);
};

export default Bloglist;
