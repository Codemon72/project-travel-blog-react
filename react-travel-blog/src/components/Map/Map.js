import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker.js"

const Map = () => {

	const defaultMapSettings = {
    center: {
      lat: 48.13743,
      lng: 11.57549
    },
    zoom: 4
	};
	
	return (
		<div className="lg:w-1/2" style={{ height: "100vh" }}>
			<GoogleMapReact
						bootstrapURLKeys={{ key: "" }}
						defaultCenter={defaultMapSettings.center}
						defaultZoom={defaultMapSettings.zoom}>
				<Marker />
			</GoogleMapReact>
		</div>
	);
}

export default Map;
