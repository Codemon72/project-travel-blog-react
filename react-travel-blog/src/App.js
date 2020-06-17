import React, { useState, useEffect } from "react";
import "./assets/main.css";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main.js";
import Stage from "./components/Stage/Stage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from './AppContext'
import db from "./Firebase.js";


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
        // setMapSettings({geo_data: placesfromDB[0].geo_data});
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
