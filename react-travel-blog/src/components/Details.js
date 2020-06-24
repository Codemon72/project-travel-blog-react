import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import AppContext from "../AppContext";
import Marker from "./Main/Marker";
import { useParams, Link } from "react-router-dom";
import christoph from "../assets/img/Christoph-avatar.png";
import clemens from "../assets/img/Clemens-avatar.JPG";
import anonymous from "../assets/img/guest.png";
import goBackbutton from "../assets/img/linker-pfeil_weiß.png";
import editIcon from "../assets/img/bleistift.png";

const Details = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const [edit, setEdit] = useState(false);
	const {
		getUrlObject,
		places,
		beautifyDate,
		keyConfig,
		setSelected,
	} = useContext(AppContext);
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

	const toggleEdit = () => {
		setEdit(!edit);
	};

	const reload = () => {
		window.location.reload();
	};

	const handleSubmit = () => {
		// under construction
	};

	const changeTitle = (event) => {
		const value = event.currentTarget.value;
		setDetailEntry({ ...detailEntry, title: value });
	};

	const changeText = (event) => {
		const value = event.currentTarget.value;
		setDetailEntry({ ...detailEntry, text: value });
	};

	return (
		<div>
			<div className="flex justify-start lg:justify-center items-center">
				<Link to="/" onClick={() => setSelected(null)}>
					<div className="flex justify-center items-center">
						<img
							className="w-8 h-8 mx-6 my-10 lg:my-12 inline"
							src={goBackbutton}
							alt=""
						/>
						<div className="inline font-bold text-2xl amatic text-white ">
							Travel back home ...
						</div>
					</div>
				</Link>
			</div>
			{detailEntry && (
				<div className="detail__container">
					<div className="detail__content ">
						<img className="detail_image" src={imageUrl} alt="" />
						<div className="px-6 py-4">
							{edit ? (
								<form onSubmit={handleSubmit}>
									<input
										className="border rounded amatic detail_title appearance-none block w-full focus:outline-none focus:bg-white"
										id="title"
										name="title"
										type="text"
										value={detailEntry.title}
										onChange={changeTitle}
										placeholder="Enter new blog title"
										required
									/>
									<textarea
										className="border rounded block text-gray-700 text-base appearance-none w-full bg-white focus:outline-none focus:bg-white"
										name="entry"
										id="entry"
										cols="30"
										rows="10"
										value={detailEntry.text}
										onChange={changeText}
										required
									></textarea>
								</form>
							) : (
								<div>
									<div className="amatic detail_title">{detailEntry.title}</div>
									<p className="block text-gray-700 text-base">
										{detailEntry.text}
									</p>{" "}
								</div>
							)}
						</div>

						<div className="px-6 pt-4 pb-6 flex items-center">
							<img
								className="w-10 h-10 rounded-full mr-4"
								src={
									detailEntry.author === "Christoph Pöllmann"
										? christoph
										: detailEntry.author === "Clemens Bruesch"
										? clemens
										: anonymous
								}
								alt="profile picture"
							/>
							<div className="text-sm">
								<p className="text-gray-900 leading-none">
									{detailEntry.author}
								</p>
								<p className="text-gray-600">
									{beautifyDate(detailEntry.last_visited)} in{" "}
									{detailEntry.location.city}, {detailEntry.location.country}
								</p>
							</div>
						</div>
						{edit ? (
							<div className="flex items-center justify-center pb-4 ">
								<button className="bg-teal-800 shadow hover:bg-teal-700 text-white font-bold py-3 mr-3 w-32 rounded-full">
									Update
								</button>
								<button
									onClick={reload}
									className="bg-red-600 shadow hover:bg-red-800 text-white font-bold py-3 ml-3 w-32 rounded-full"
								>
									Abbrechen
								</button>
							</div>
						) : (
							<div className="flex items-center justify-center pb-4 opacity-25 hover:opacity-100">
								<button
									onClick={toggleEdit}
									className=" flex items-center bg-teal-800 shadow hover:bg-teal-600 text-white font-bold py-2 px-20 rounded-full"
								>
									Edit
									<img src={editIcon} className="w-6 h-6 mx-4" />
								</button>
							</div>
						)}
					</div>
					<div className="detail_map">
						<GoogleMapReact
							distanceToMouse={() => {}}
							bootstrapURLKeys={keyConfig}
							center={
								detailEntry.geo_data
									? detailEntry.geo_data
									: { lat: 37.794594, lng: -25.506134 }
							}
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
