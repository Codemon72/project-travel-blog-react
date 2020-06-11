import React from "react";
import "./Marker.css";


const Marker = props => {
  return (
    <img
      src="https://img.icons8.com/ios-filled/50/000000/marker.png"
      alt=""
      className="marker"
      onClick={props.showInfo}
    />
  );
};

export default Marker