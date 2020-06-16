import React, { useContext } from "react";
import AppContext from './../../../AppContext'

const Bloglist = () => {
	const appContext = useContext(AppContext)
	return (
		<div className="w-full lg:w-1/2 bg-teal-600 text-white text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
			<h2>Hier kommen alle Blogs rein</h2>
			<div>{appContext.aProperty}</div>
		</div>
	);
};

export default Bloglist;
