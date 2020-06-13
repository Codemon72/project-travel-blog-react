import React from "react";
import marker from "../../../assets/img/marker.svg";
import "./Marker.css";

const Marker = props => {
  return (
    <img
      src={marker}
      alt=""
      className="marker"
      onClick={props.showInfo}
    />
  );
};

export default Marker