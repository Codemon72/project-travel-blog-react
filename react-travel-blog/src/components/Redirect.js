import React, { useContext } from "react";
import { Link } from "react-router-dom";
import gohome from "../assets/img/linker-pfeil_weiß.png";
import noentry from "../assets/img/kein-einlass.png";
import Appcontext from "../AppContext";

const Redirect = () => {
	const { setSelected } = useContext(Appcontext);
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center">
				<img className="block w-64 h-auto mt-12 mb-6" src={noentry} alt="" />
				<div className="w-full text-center">
					<div className="amatic w-full text-white text-3xl font-bold">
						Error 403! No entry for you.
					</div>
				</div>
			</div>
			<Link
				to="/"
				className="flex justify-start lg:justify-center items-center"
				onClick={() => setSelected(null)}
			>
				<img
					className="w-8 h-8 mx-6 my-6 lg:my-12 inline"
					src={gohome}
					alt=""
				/>
				<div className="inline font-bold text-2xl amatic text-white ">
					Travel back home or login ...
				</div>
			</Link>
		</div>
	);
};

export default Redirect;
