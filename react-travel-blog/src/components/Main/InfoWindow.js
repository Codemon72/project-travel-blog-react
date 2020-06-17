import React from "react";
import "./../../App.css";


const InfoWindow = ({ place, closeInfo }) => {
  return (
    <div className="infoWindow flex flex-col cursor-default">
      <div className="flex justify-between">
        <h3 className="text-lg underline inline-block">{place.title}</h3>
        <div className="inline-block self-start cursor-pointer closing-x" onClick={closeInfo}></div>
      </div>
      <p className="pt-3 text-sm">{place.date.toDate ? place.date.toDate().toDateString() : place.date}</p>
      <p className="pt-3">{place.author}</p>
      <p className="pt-3">Link to detail: /post/:id </p>
      <p className="pt-3">Latitude: {place.geo_data.lat}</p>
      <p className="pt-3">Longitude: {place.geo_data.lng}</p>
    </div>
  );
};

export default InfoWindow