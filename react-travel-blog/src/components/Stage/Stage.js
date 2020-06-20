import React from "react";
import headerLogo from "../../assets/img/welt.png";
import { Link } from "react-router-dom";

const Stage = () => {
	return (
		<header>
			<div className="flex bg-teal-600">
				<div className="hidden lg:block lg:w-1/2 flex justify-center items-center">
					<img
						className="opacity-50 ml-auto mr-auto block"
						src={headerLogo}
						alt=""
						width="300"
					/>
				</div>
				<div className="lg:w-1/2 py-8 px-12 lg:px-0 lg:pr-12">
					<h2 className="pb-8 text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tight">
						Moin and welcome to Travel Time, our travel blog around the world!
					</h2>
					<div
						id="header-text"
						className="pb-8 text-white text-2xl tracking-tight"
					>
						Take a look at the world map to see exciting and dreamlike places in
						the world. From breathtaking mountain regions to bustling cities,
						from picturesque lakes to deserted forests, you'll find it all here.
						<br />
						<br />
						Have fun...
					</div>
					<Link to="/details">
						<button>Go to Details</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Stage;
