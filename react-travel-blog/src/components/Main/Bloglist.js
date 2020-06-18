import React, { useContext } from "react";
import AppContext from "../../AppContext";
import Preview from "./Preview";

const Bloglist = () => {
	const {places, selected} = useContext(AppContext)
	return (
		<div className="w-full lg:w-1/2 bg-teal-600 text-white text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
			{/* <h2>Hier kommen alle Blogs rein</h2>
			<h4>
				{places.length > 0 && selected
					? <div>Title of selected: <br/>"{selected.title}"</div> 
					: <div>Select a marker on the map ....</div>}
			</h4> */}
			<div className="flex flex-col first:text-red-900">

			{places.map((place) => {
          return (
            <Preview
              key={place.title}
							selected={selected}
              place={place}
            />
          );
        })}

			</div>
		</div>
	);
};

export default Bloglist;
