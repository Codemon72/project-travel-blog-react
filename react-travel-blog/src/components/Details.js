import React, { useState, useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { useParams } from "react-router-dom";
import authorPic from "../assets/img/ich.png";

const Details = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, places } = useContext(AppContext);
	const [detailEntry, setDetailEntry] = useState("");
	const { id } = useParams();

	useEffect(() => {
		const entry = places.find((item) => item.id === id);
		setDetailEntry(entry);
	}, [id]);

	if (detailEntry) {
		getUrlObject(detailEntry.image.src).then((url) => {
			setImageUrl(url);
		});
	}

	return (
		<div>
			{detailEntry && (
				<div className="relative container max-w-sm rounded overflow-hidden justify-center bg-white">
					<img className="w-full" src={imageUrl} />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{detailEntry.title}</div>
						<p className=" block text-gray-700 text-base">{detailEntry.text}</p>
					</div>
					<div className="px-6 py-4 flex items-center">
						<img
							className="w-10 h-10 rounded-full mr-4"
							src={authorPic}
							alt="Profil picture"
						/>
						<div className="text-sm">
							<p className="text-gray-900 leading-none">{detailEntry.author}</p>
							<p className="text-gray-600">
								{detailEntry.last_visited} in {detailEntry.location.city},{" "}
								{detailEntry.location.country}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
