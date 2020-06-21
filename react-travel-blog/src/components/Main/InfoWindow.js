import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";
import christoph from "../../assets/img/Christoph-avatar.png";
import clemens from "../../assets/img/Clemens-avatar.JPG";
import anonymous from "../../assets/img/anonymous-avatar.png";

const InfoWindow = ({ place, closeInfo }) => {
	const { beautifyDate } = useContext(AppContext);
	return (
		<div className="infoWindow flex flex-col cursor-default">
			<div className="flex justify-between">
				<h3 className="text-xl inline-block">{place.title}</h3>
				<div
					className="inline-block self-start cursor-pointer closing-x"
					onClick={closeInfo}
				></div>
			</div>
			<p className="pt-3 underline">{place.location.city}, {place.location.country}</p>
			<p className="pt-3 text-sm">
				last visited: {beautifyDate(place.last_visited)}
			</p>
			<p className="pt-3 flex items-center">{place.author} 
				<img 
					className="rounded-full h-8 ml-3"
					src={place.author === "Christoph Pöllmann" ? christoph : (place.author === "Clemens Bruesch" ? clemens : anonymous)} 
					alt={place.author}/>
			</p>
			<Link to={`/details/${place.id}`} >
			<button class="flex items-center mt-3 self-start bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 border-none rounded">
				View Details
				<i className="fas fa-arrow-right ml-2"></i>
			</button>
			</Link>
		</div>
	);
};

export default InfoWindow;
