import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import AppContext from "../AppContext";
import Marker from "./Main/Marker";
import { useParams, Link } from "react-router-dom";
import authorPic from "../assets/img/Christoph-avatar.png";
import goBackbutton from "../assets/img/linker-pfeil_weiß.png";
let counter = 0;

const Details = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, places, beautifyDate, keyConfig } = useContext(AppContext);
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
	
	const renderCounter = () => {
		counter++
		console.log(counter, detailEntry.geo_data);
	}
	renderCounter()

	return (
		<div>
			<Link to="/" className="flex justify-center items-center">
				<img className="w-8 h-8 mx-6 my-12 inline" src={goBackbutton} />
				<div className="inline font-bold text-2xl amatic text-white ">
					Travel back home ...
				</div>
			</Link>

			{detailEntry && (
				<div className="flex lg:flex-row flex-col justify-center p-10 shadow-lg">
					<div className="w-full relative container max-w-lg rounded border-4 border-white overflow-hidden justify-center bg-white">
						<img className="w-full" src={imageUrl} />
						<div className="px-6 py-4">
							<div className="amatic font-bold text-4xl mb-2">
								{detailEntry.title}
							</div>
							<p className=" block text-gray-700 text-base">
								{detailEntry.text}
							</p>
						</div>
						<div className="px-6 py-4 flex items-center">
							<img
								className="w-10 h-10 rounded-full mr-4"
								src={authorPic}
								alt="Profil picture"
							/>
							<div className="text-sm">
								<p className="text-gray-900 leading-none">
									{detailEntry.author}
								</p>
								<p className="text-gray-600">
									{beautifyDate(detailEntry.last_visited)} in {detailEntry.location.city},{" "}
									{detailEntry.location.country}
								</p>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 border-4 border-white rounded shadow-xl detail-map" style={{ height: "70vh" }}>
						<GoogleMapReact
							distanceToMouse={()=>{}}
							bootstrapURLKeys={keyConfig}
							center={detailEntry.geo_data ? detailEntry.geo_data : {lat: 37.794594, lng: -25.506134}}
							zoom={8}
						>
							<Marker
								lat={detailEntry.geo_data.lat}
								lng={detailEntry.geo_data.lng}
								place={detailEntry}
							/>
						</GoogleMapReact>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
