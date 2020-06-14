import React from "react";
import contactLogo from "../../assets/img/contact-bubble.png";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<nav className="px-8 h-32 w-full flex flex-row justify-between items-center text-center bg-teal-900 shadow-xl">
			<div className="flex flex-row items-center">
				<Link to="/">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<svg
							className="fill-current h-8 w-8 mr-2"
							width="54"
							height="54"
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M43.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
						</svg>
						<span className="font-semibold text-3xl tracking-tight">
							Travel Time
						</span>
					</div>
				</Link>
				<Link to="/contact" className="hidden md:block">
					<img
						src={contactLogo}
						alt=""
						className="w-16 h-16"
						title="Contact"
					/>
				</Link>
			</div>

			<div>
				{/* <a
					href="#"
					className="inline-block text-sm px-4 lg:mr-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
				>
					Login
				</a> */}
			</div>
		</nav>
	);
};

export default Menu;
