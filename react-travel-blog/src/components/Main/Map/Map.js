import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker.js";
import InfoWindow from "../InfoWindow/InfoWindow.js";
// import randomPlaces from "../../../Places.js";
import db from "../../../Firebase.js";


const Map = () => {
  const keyConfig = { key: "" };
  const places = []
  // const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    db.collection("blogPosts")
      .get()
      .then((posts) => {
        posts.forEach((post) => {
          const json = post.data();
          places.push(json);
          // setPlaces(...places, json)
          console.log(places);
          });
        });
  }, []);


  const handleShowInfo = (blog) => {
    setSelected(blog);
  };

  const handleCloseInfo = (event) => {
    setSelected(null);
  };

  const defaultMapSettings = {
    center: {
      lat: 48.13743,
      lng: 11.57549,
    },
    zoom: 4,
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
              showInfo={() => handleShowInfo(place)}
            />
          );
        })}

        {selected && (
          <InfoWindow
            lat={selected.lat}
            lng={selected.lng}
            blog={selected.blog}
            closeInfo={handleCloseInfo}
          />
        )}

      </GoogleMapReact>
    </div>
  );
};

export default Map;
