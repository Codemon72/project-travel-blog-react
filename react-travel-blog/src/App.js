import React, { useState, useEffect } from "react";
import "./assets/main.css";
import "./firebase.config";
import * as firebase from "firebase";
import Menu from "./components/Menu/Menu";
import Stage from "./components/Stage/Stage";
import Main from "./components/Main/Main.js";
import NewPostForm from "./components/NewPostForm";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from "./AppContext";

function App() {
	const [places, setPlaces] = useState([]);
	const [selected, setSelected] = useState(null);
	const keyConfig = { key: "" };

	const getUrlObject = (fileName) => {
		const imageRef = firebase.storage().ref().child(`blogPics/${fileName}`);
		return imageRef.getDownloadURL();
	};

	const sortPlacesByDate = (array) => {
		array.sort((a, b) => {
			return b.last_visited - a.last_visited;
		});
	};

	const beautifyDate = (num) => {
		const str = num.toString();
		return `${str.substr(0, 4)} / ${str.substr(4, 2)} / ${str.substr(6, 2)}`;
	};

	useEffect(() => {
		const placesfromDB = [];
		const db = firebase.firestore();
		db.collection("blogPosts")
			.get()
			.then((posts) => {
				posts.forEach((post) => {
					const json = post.data();
					json.id = post.id;
					placesfromDB.push(json);
				});
			})
			.then(() => {
				sortPlacesByDate(placesfromDB);
				setPlaces(placesfromDB);
			})
			.catch((err) => {
				console.log("Error getting document", err);
			});
	}, []);

	return (
		<Router>
			<div className="App">
				<AppContext.Provider
					value={{
						places,
						setPlaces,
						selected,
						setSelected,
						getUrlObject,
						beautifyDate,
						keyConfig,
					}}
				>
					<Menu />

					<Route path="/" exact>
						<Stage />
						<Main />
					</Route>
					<Route path="/new" exact>
						<NewPostForm />
					</Route>
					<Route exact path="/post/:id">
						<div>{places.length > 0 && <Details />}</div>
					</Route>
				</AppContext.Provider>

				<Route path="/contact" component={Contact} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
