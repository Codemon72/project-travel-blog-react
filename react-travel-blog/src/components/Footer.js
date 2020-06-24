import React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-teal-800 p-4 absolute bottom-0">
			<p className="py-8 text-center text-gray-500 text-xs">
				&copy;2020 Travel Time Corp. All rights reserved.
				<br />
				Icons created by{" "}
				<a
					href="https://www.flaticon.com/de/autoren/darius-dan"
					title="Darius Dan"
				>
					Darius Dan and
				</a>{" "}
				<a href="https://www.flaticon.com/de/autoren/xnimrodx" title="xnimrodx">
					xnimrodx
				</a>{" "}
				from{" "}
				<a href="https://www.flaticon.com/de/" title="Flaticon">
					{" "}
					www.flaticon.com
				</a>
			</p>
		</footer>
	);
};

export default Footer;
