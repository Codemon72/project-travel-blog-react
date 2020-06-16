import React, { useContext } from "react";
import "./InfoWindow.css";
import AppContext from './../../../AppContext'


const InfoWindow = ({ place, closeInfo }) => {
  const appContext = useContext(AppContext)
  return (
    <div className="infoWindow flex flex-col cursor-default">
      <div className="flex justify-between">
        <h3 className="text-lg underline inline-block">{place.title}</h3>
        <div className="inline-block self-start cursor-pointer toggle-x" onClick={closeInfo}></div>
      </div>
      <p className="pt-3 text-sm">{place.date.toDate ? place.date.toDate().toDateString() : place.date}</p>
      <p className="pt-3">{place.author}</p>
      <p className="pt-3">Link to detail: /post/:id </p>
      <p className="pt-3">Latitude: {place.geo_data.lat}</p>
      <p className="pt-3">Longitude: {place.geo_data.lng}</p>
      <div>{appContext.aProperty}</div>
    </div>
  );
};

export default InfoWindow