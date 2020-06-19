import React, { useState, useEffect } from "react";
import "./assets/main.css";
import "./firebase.config";
import * as firebase from "firebase";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main.js";
import Stage from "./components/Stage/Stage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from "./AppContext";


function App() {  
  const [places, setPlaces] = useState([]);
 
  const [selected, setSelected] = useState(null);

  const sortPlacesByDate = (array) => {
    array.sort((a,b) => {
      return b.date.seconds - a.date.seconds;
    });
  }

  useEffect(() => {
    const placesfromDB = [];
    const db = firebase.firestore();
    db.collection("blogPosts")
      .get()
      .then((posts) => {
        posts.forEach((post) => {
          const json = post.data();
          placesfromDB.push(json);
          });
        })
      .then( () => {
        sortPlacesByDate(placesfromDB);
        setPlaces(placesfromDB);
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }, []);

	return (
		<Router>
			<div className="App">
				<Menu />
				<Route path="/" exact>
					<Stage />
					<AppContext.Provider value={{places, setPlaces, selected, setSelected}}>
					<Main />
					</AppContext.Provider>
				</Route>
				<Route path="/contact" component={Contact} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
