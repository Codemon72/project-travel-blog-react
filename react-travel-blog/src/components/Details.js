import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import AppContext from "../AppContext";
import Marker from "./Main/Marker";
import { useParams, Link } from "react-router-dom";
import authorPic from "../assets/img/Christoph-avatar.png";
import goBackbutton from "../assets/img/linker-pfeil_weiß.png";


const Details = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const { getUrlObject, places, beautifyDate, keyConfig, setSelected } = useContext(AppContext);
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

	return (
		<div>
			<Link 
				to="/" 
				className="flex justify-start lg:justify-center items-center"
				onClick={() => setSelected(null)}>
				<img className="w-8 h-8 mx-6 my-6 lg:my-12 inline" src={goBackbutton} />
				<div className="inline font-bold text-2xl amatic text-white ">
					Travel back home ...
				</div>
			</Link>

			{detailEntry && (
				<div className="detail__container">
					<div className="detail__content">
						<img className="w-full" src={imageUrl} />
						<div className="px-6 py-4">
							<div className="amatic detail_title">
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
					<div className="detail_map" style={{ height: "70vh" }}>
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
