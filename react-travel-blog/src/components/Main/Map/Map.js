import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker.js";
import InfoWindow from "../InfoWindow/InfoWindow.js";
import randomPlaces from "../../../Places.js";
import db from "../../../Firebase.js";

db.collection("blogPosts")
	.get()
	.then((posts) => {
		posts.forEach((post) => {
			const json = post.data();
			console.log(json);
		});
	});

const Map = () => {
	const keyConfig = { key: "" };
	const [selected, setSelected] = useState(null);
	const handleShowInfo = (blog) => {
		setSelected(blog);
	};

	const handleCloseInfo = (event) => {
		setSelected(null);
	};

	const defaultMapSettings = {
		center: {
			lat: 48.13743,
			lng: 11.57549,
		},
		zoom: 4,
	};

	return (
		<div
			className="w-full lg:w-1/2 border-4 rounded-md"
			style={{ height: "100vh" }}
		>
			<GoogleMapReact
				distanceToMouse={() => {}}
				bootstrapURLKeys={keyConfig}
				defaultCenter={defaultMapSettings.center}
				defaultZoom={defaultMapSettings.zoom}
			>
				{randomPlaces.map((place) => {
					return (
						<Marker
							key={place.id}
							lat={place.lat}
							lng={place.lng}
							showInfo={() => handleShowInfo(place)}
						/>
					);
				})}

				{selected && (
					<InfoWindow
						lat={selected.lat}
						lng={selected.lng}
						blog={selected.blog}
						closeInfo={handleCloseInfo}
					/>
				)}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
