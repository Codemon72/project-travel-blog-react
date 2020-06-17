import React from "react";

const Logout = ({ logOut, disableLoginWindow }) => {
	return (
		<button
			className="cursor-pointer inline-block text-sm px-4 lg:mr-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
			type="button"
			onClick={() => {
				logOut();
				disableLoginWindow();
			}}
		>
			Logout
		</button>
	);
};

export default Logout;
