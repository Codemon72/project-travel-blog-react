import React from "react";
import marker from "../../assets/img/marker_red.png";
import markerBlue from "../../assets/img/marker_blue.png";
import markerGreen from "../../assets/img/marker_green.png";

const Marker = (props) => {
	return (
		<img
			src={
				props.place.author === "Christoph Pöllmann" 
				? marker 
				: props.place.author === "Clemens Bruesch"
				? markerBlue
				: markerGreen
			}
			alt=""
			className="marker"
			onClick={props.showInfo}
		/>
	);
};

export default Marker;
