import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";

const Preview = ({ place, selected, key }) => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, beautifyDate } = useContext(AppContext);

	getUrlObject(place.image.src).then((url) => {
		setImageUrl(url);
	});

	return (
		<Link to={`/details/${place.id}`}>
			<div
				className={
					"bloglist__card text-teal-900 " +
					(selected &&
						place.title === selected.title &&
						" highlighting hoverEffect")
				}
			>
				<img className="block" src={imageUrl} alt="{place.title}" />
				<div className="bloglist__content">
					<h4 className="bloglist__title">{place.title}</h4>
					<div className="bloglist__date">
						last visited: {beautifyDate(place.last_visited)}
					</div>
					<div className="bloglist__author"> {place.author}</div>
				</div>
			</div>
		</Link>
	);
};

export default Preview;
