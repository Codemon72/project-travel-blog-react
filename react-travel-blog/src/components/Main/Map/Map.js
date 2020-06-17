import React, { useState, useEffect, useContext } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker.js";
import InfoWindow from "../InfoWindow/InfoWindow.js";
import AppContext from './../../../AppContext'

const Map = () => {
  const {places, selected, setSelected} = useContext(AppContext)
  const keyConfig = { key: "" };

  const initialMapSettings = {
    geo_data: {lat: 37.794594, lng: -25.506134},
    zoom: 4
  };
  const [mapSettings, setMapSettings] = useState(initialMapSettings);

  useEffect(() => {
    if (places.length > 0) {setMapSettings({geo_data: places[0].geo_data})}
  }, [places])

  const handleShowInfoWindow = (place) => {
    setSelected(place);
    setMapSettings({geo_data: place.geo_data});
  };

	const handleShowInfoWindow = (place) => {
		setSelected(place);
		// setMapSettings({...mapSettings, center: place.geo_data, zoom: 7});
		// console.log(place.geo_data )
	};

	const handleCloseInfoWindow = (event) => {
		setSelected(null);
	};

	return (
		<div className="w-full lg:w-1/2 " style={{ height: "100vh" }}>
      <GoogleMapReact
        distanceToMouse={()=>{}}
        bootstrapURLKeys={keyConfig}
        center={mapSettings.geo_data}
        zoom={mapSettings.zoom}
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
