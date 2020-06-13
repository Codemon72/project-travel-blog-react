import React from "react";
import "./InfoWindow.css";


const InfoWindow = ({ place, closeInfo }) => {
  return (
    <div className="infoWindow">
      Title: {place.title}
      <hr />
      Visiting Date: .....
      <hr />
      Authors Image and Name (can be hardcoded): ({place.author})
      <hr />
      Link to detail page: /post/:id 
      <hr />
      <button type="button" onClick={closeInfo}>
        Close X
      </button>
    </div>
  );
};

export default InfoWindow