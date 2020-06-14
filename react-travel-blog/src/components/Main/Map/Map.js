import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker.js";
import InfoWindow from "../InfoWindow/InfoWindow.js";
import db from "../../../Firebase.js";


const Map = () => {
  const keyConfig = { key: "" };
  const defaultMapSettings = {
    center: {
      lat: 48.13743,
      lng: 11.57549,
    },
    zoom: 3,
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
      .then( () => setPlaces(placesfromDB) )
  }, []);


  // useEffect(() => {
  //   // setPlaces(placesfromDB)
  //   console.log(places)
  // }, [places])

  const handleShowInfo = (place) => {
    setSelected(place);
  };

  const handleCloseInfo = (event) => {
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
              showInfo={() => handleShowInfo(place)}
            />
          );
        })}

				{selected && (
					<InfoWindow
						lat={selected.geo_data.lat}
						lng={selected.geo_data.lng}
						place={selected}
						closeInfo={handleCloseInfo}
					/>
				)}

			</GoogleMapReact>
		</div>
	);
};

export default Map;
