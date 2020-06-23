import React, { useState, useContext } from "react";
import AppContext from "../../AppContext";
import christoph from "../../assets/img/Christoph-avatar.png";
import clemens from "../../assets/img/Clemens-avatar.JPG";
import anonymous from "../../assets/img/anonymous-avatar.png";
import { Link } from "react-router-dom";

const Preview = ({ place, selected, key }) => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, beautifyDate } = useContext(AppContext);

	getUrlObject(place.image.src).then((url) => {
		setImageUrl(url);
	});

	return (
		<Link
			to={`/post/${place.id}`}
			className={
				"bloglist__card-wrapper " +
				(selected && place.title === selected.title && " highlighting")
			}
		>
			<div className="bloglist__card text-teal-900">
				<img className="block" src={imageUrl} alt={place.title} />
				<div className="bloglist__content">
					<h4 className="bloglist__title">{place.title}</h4>
					<div className="bloglist__date">
						last visited: {beautifyDate(place.last_visited)}
					</div>
					<div className="bloglist__author">
						{place.author}
						<img
							src={
								place.author === "Christoph Pöllmann"
									? christoph
									: place.author === "Clemens Bruesch"
									? clemens
									: anonymous
							}
							alt={place.author}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Preview;
