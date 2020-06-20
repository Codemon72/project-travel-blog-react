import React, {useContext} from "react";
import AppContext from "../../AppContext";


const InfoWindow = ({ place, closeInfo }) => {
  const {beautifyDate} = useContext(AppContext);
  return (
    <div className="infoWindow flex flex-col cursor-default">
      <div className="flex justify-between">
        <h3 className="text-lg underline inline-block">{place.title}</h3>
        <div className="inline-block self-start cursor-pointer closing-x" onClick={closeInfo}></div>
      </div>
      <p className="pt-3 text-sm">last visited: {beautifyDate(place.last_visited)}</p>
      <p className="pt-3">{place.author}</p>
      <p className="pt-3">Link to detail: /post/:id </p>

    </div>
  );
};

export default InfoWindow