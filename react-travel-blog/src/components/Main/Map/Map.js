import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker.js";
import InfoWindow from "../InfoWindow/InfoWindow.js";
import db from "../../../Firebase.js";


const Map = () => {
  const keyConfig = { key: "" };
  const defaultMapSettings = {
    center: {
      // lat: places.length > 0 ? places[0].geo_data.lat : 16.77348,
      // lng: places.length > 0 ? places[0].geo_data.lng : -3.00742,
      lat: 48.13743,
      lng: 11.57549,
    },
    zoom: 6,
  };
  const placesfromDB = [];
  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    db.collection("blogPosts")
      .get()
      .then((posts) => {
        posts.forEach((post) => {
          const json = post.data();
          placesfromDB.push(json);
          });
        })
      .then( () => console.log(placesfromDB))
      .then( () => sortPlacesByDate(placesfromDB) )
      .then( () => console.log(placesfromDB))
      .then( () => setPlaces(placesfromDB) )
  }, []);


  useEffect(() => {
    if (places.length > 0){
      console.log('Blubber!')
      // defaultMapSettings.center.lat = places[0].geo_data.lat;
      // defaultMapSettings.center.lat = places[0].geo_data.lat;
      defaultMapSettings.center.lat = 16.77348;
      defaultMapSettings.center.lng = -3.00742;
    }
  }, [places])
  
  const sortPlacesByDate = (array) => {
    array.sort((a,b) => {
      return a.date.seconds - b.date.seconds;
    });
  }

  const handleShowInfoWindow = (place) => {
    setSelected(place);
  };

  const handleCloseInfoWindow = (event) => {
    setSelected(null);
  };

  
  return (
    <div className="w-full lg:w-1/2 " style={{ height: "100vh" }}>

      <GoogleMapReact
        distanceToMouse={()=>{}}
        bootstrapURLKeys={keyConfig}
        defaultCenter={defaultMapSettings.center}
        defaultZoom={defaultMapSettings.zoom}
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
