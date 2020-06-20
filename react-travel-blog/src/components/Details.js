import React, { useState, useContext, useEffect } from "react";
import AppContext from "../AppContext";

const Details = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, selected } = useContext(AppContext);

	// if (selected) {
	// 	getUrlObject(selected.image.src).then((url) => {
	// 		setImageUrl(url);
	// 	});
	// }
	// console.log(selected);

	return (
		<div></div>
		// <div class="relative container max-w-sm rounded overflow-hidden justify-center bg-white">
		// 	<img class="w-full" src={imageUrl} />
		// 	<div class="px-6 py-4">
		// 		<div class="font-bold text-xl mb-2">{selected.title}</div>
		// 		<p class=" block text-gray-700 text-base">{selected.text}</p>
		// 	</div>
		// 	<div class="px-6 py-4 flex items-center">
		// 		<img class="w-10 h-10 rounded-full mr-4" src="" alt="Profil picture" />
		// 		<div class="text-sm">
		// 			<p class="text-gray-900 leading-none">{selected.author}</p>
		// 			<p class="text-gray-600">
		// 				{selected.date.toDate
		// 					? selected.date.toDate().toDateString()
		// 					: selected.date}{" "}
		// 				in {selected.location.city}, {selected.location.country}
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Details;
