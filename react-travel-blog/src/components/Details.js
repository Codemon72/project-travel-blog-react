import React, { useState, useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { useParams } from "react-router-dom";
import authorPic from "../assets/img/ich.png";

const Details = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, selected, places } = useContext(AppContext);
	// const [detailEntry, setDetailEntry] = useState(null);
	const { id } = useParams();

	// const detailEntry = JSON.parse(localStorage.getItem("Place"));

	// if (detailEntry) {
	// 	getUrlObject(detailEntry.image.src).then((url) => {
	// 		setImageUrl(url);
	// 	});
	// }

	// useEffect(() => {
	// 	const entry = places.find((item) => item.id === id);
	// 	setDetailEntry(entry);
	// }, [places]);

	return (
		<div class="relative container max-w-sm rounded overflow-hidden justify-center bg-white">
			{/* <img class="w-full" src={imageUrl} />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{detailEntry.title}</div>
				<p class=" block text-gray-700 text-base">{detailEntry.text}</p>
			</div>
			<div class="px-6 py-4 flex items-center">
				<img
					class="w-10 h-10 rounded-full mr-4"
					src={authorPic}
					alt="Profil picture"
				/>
				<div class="text-sm">
					<p class="text-gray-900 leading-none">{detailEntry.author}</p>
					<p class="text-gray-600">
						{detailEntry.last_visited} in {detailEntry.location.city},{" "}
						{detailEntry.location.country}
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default Details;
