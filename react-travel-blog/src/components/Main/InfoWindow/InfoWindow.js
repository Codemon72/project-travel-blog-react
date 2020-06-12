import React from "react";
import "./InfoWindow.css";


const InfoWindow = ({ blog, closeInfo }) => {
  return (
    <div className="infoWindow">
      Title: {blog.title}
      <hr />
      Visiting Date: .....
      <hr />
      Authors Image and Name (can be hardcoded): ({blog.author})
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