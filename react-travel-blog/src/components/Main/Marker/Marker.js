import React, { useContext } from "react";
import marker from "../../../assets/img/marker.svg";
// import pin from "../../../assets/img/pin.svg";
import markerBlue from "../../../assets/img/markerBlue.svg";
import "./Marker.css";
// import AppContext from './../../../AppContext'

const Marker = (props) => {
  // const appContext = useContext(AppContext)
  return (
    <img
      src={props.place.author == "Christoph Pöllmann" ? marker : markerBlue }
      alt=""
      className="marker"
      onClick={props.showInfo}
    />
  );
};

export default Marker