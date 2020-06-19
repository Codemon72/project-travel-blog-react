import React, { useState } from "react";

const Preview = ({ place, selected, key, getUrl }) => {
	const [imageUrl, setImageUrl] = useState(null);

	getUrl(place.image.src).then((url) => {
		setImageUrl(url);
	});

	return (
		<div
			className={
				"bloglist__card text-teal-900 " +
				(selected &&
					place.title === selected.title &&
					" border-solid border-4 border-red-700 hoverEffect")
			}
		>
			<img className="block" src={imageUrl} alt="{place.title}" />
			<div className="bloglist__content">
				<h4 className="bloglist__title">{place.title}</h4>
				<div className="bloglist__date">visiting date: xxx</div>
				<div className="bloglist__author"> {place.author}</div>
			</div>
		</div>
	);
};

export default Preview;
