import React from "react";
import x from "./../../../assets/img/x.svg"
import "./InfoWindow.css";


const InfoWindow = ({ place, closeInfo }) => {
  return (
    <div className="infoWindow flex flex-col cursor-default">
      <div className="flex justify-between">
      <h3 className="text-lg underline inline-block">{place.title}</h3>
      <img
        className="inline-block self-start cursor-pointer"
        src={x}
        alt=""
        width="20"
        onClick={closeInfo}
					/>
      </div>
      <p className="pt-3 text-sm">{place.date.toDate ? place.date.toDate().toDateString() : place.date}</p>
      <p className="pt-3">{place.author}</p>
      <p className="pt-3">Link to detail: /post/:id </p>
    </div>
  );
};

export default InfoWindow