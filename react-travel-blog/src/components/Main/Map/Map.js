import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker.js";
import InfoWindow from "../InfoWindow/InfoWindow.js";
import db from "../../../Firebase.js";

const Map = () => {
	const keyConfig = { key: "" };
	const placesfromDB = [];
	const [places, setPlaces] = useState([]);

	const [selected, setSelected] = useState(null);

	const initialMapSettings = {
		center: {
			lat: places.length > 0 ? places[0].geo_data.lat : 37.794594,
			lng: places.length > 0 ? places[0].geo_data.lng : -25.506134,
			// lat: 37.794594,
			// lng: -25.506134
		},
		zoom: 4,
	};
	// const [mapSettings, setMapSettings] = useState(initialMapSettings);

	useEffect(() => {
		db.collection("blogPosts")
			.get()
			.then((posts) => {
				posts.forEach((post) => {
					const json = post.data();
					placesfromDB.push(json);
				});
			})
			.then(() => {
				sortPlacesByDate(placesfromDB);
				setPlaces(placesfromDB);
				// setMapSettings({...mapSettings, center: placesfromDB[0].geo_data});
			})
			.catch((err) => {
				console.log("Error getting document", err);
			});
	}, []);

	const sortPlacesByDate = (array) => {
		array.sort((a, b) => {
			return b.date.seconds - a.date.seconds;
		});
	};

	const handleShowInfoWindow = (place) => {
		setSelected(place);
		// setMapSettings({...mapSettings, center: place.geo_data, zoom: 7});
		// console.log(place.geo_data )
	};

	const handleCloseInfoWindow = (event) => {
		setSelected(null);
	};

	return (
		<div className="w-full lg:w-1/2 " style={{ height: "100vh" }}>
			<GoogleMapReact
				distanceToMouse={() => {}}
				bootstrapURLKeys={keyConfig}
				center={initialMapSettings.center}
				zoom={initialMapSettings.zoom}
			>
				{places.map((place) => {
					return (
						<Marker
							key={place.title}
							lat={place.geo_data.lat}
							lng={place.geo_data.lng}
							place={place}
							showInfo={() => handleShowInfoWindow(place)}
						/>
					);
				})}

				{selected && (
					<InfoWindow
						lat={selected.geo_data.lat}
						lng={selected.geo_data.lng}
						place={selected}
						closeInfo={handleCloseInfoWindow}
					/>
				)}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
