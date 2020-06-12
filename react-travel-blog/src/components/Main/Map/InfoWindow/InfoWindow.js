import React from "react";
import "./InfoWindow.css";


const InfoWindow = ({ lat, lng, blog, closeInfo }) => {
  return (
    <div className="infoWindow">
      More Information <br />
      {blog.title}({blog.author})
      <br />
      lat: {lat}
      lng: {lng}
      <button type="button" onClick={closeInfo}>
        Close X
      </button>
    </div>
  );
};

export default InfoWindow