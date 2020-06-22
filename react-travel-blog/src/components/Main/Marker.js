import React from "react";
import marker from "../../assets/img/marker_red.png";
// import pin from "../../assets/img/pin.svg";
import markerBlue from "../../assets/img/marker_blue.png";

const Marker = (props) => {
	return (
		<img
			src={props.place.author === "Christoph Pöllmann" ? marker : markerBlue}
			alt=""
			className="marker"
			onClick={props.showInfo}
		/>
	);
};

export default Marker;
