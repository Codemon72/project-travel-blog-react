import React, { useContext } from "react";
import AppContext from "../../AppContext";
import Preview from "./Preview";
import firebase from "firebase";

const Bloglist = () => {
	const { places, selected } = useContext(AppContext);

	const getUrlObject = (fileName) => {
		const imageRef = firebase.storage().ref().child(`blogPics/${fileName}`);

		return imageRef.getDownloadURL();
	};

	return (
		<div className="w-full lg:w-1/2 bg-teal-600 bloglist">
			{places.map((place) => {
				return (
					<Preview
						getUrl={getUrlObject}
						key={place.title}
						selected={selected}
						place={place}
					/>
				);
			})}
		</div>
	);
};

export default Bloglist;
