import React from "react";
import { useHistory } from "react-router-dom";

const Logout = ({ logOut, setShowLogin }) => {
	let history = useHistory();
	function goHome() {
		history.push("/");
	}

	return (
		<button
			className="cursor-pointer inline-block text-sm px-4 md:mr-2 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
			type="button"
			onClick={() => {
				setShowLogin(false);
				logOut();
				goHome();
			}}
		>
			Logout
		</button>
	);
};

export default Logout;
